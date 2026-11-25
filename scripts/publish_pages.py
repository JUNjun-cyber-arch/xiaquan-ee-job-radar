#!/usr/bin/env python3
"""
厦泉电气 2027 暑期实习情报雷达 — v2 安全校验、受控提交与自动推送至 GitHub Pages

安全加固特性：
1. 单实例文件锁（%TEMP%\\xiaquan_ee_publish.lock），防止定时任务与手工发布并发冲突。
2. 仓库/分支/远端校验：确保仅在 main 分支且 origin 指向目标仓库时运行。
3. 变更范围保护：日常模式仅允许提交 data/、reports/、web/data-bundle.js、docs/；
   如检测到源码/脚本改动，默认拒绝自动提交，需显式传入 --allow-all 参数。
4. 远端分叉保护：推送前先执行带超时的 git fetch origin main，检测远端领先或分叉即安全中止。
5. 一次性临时 ASKPASS：仅在推送瞬间于系统 %TEMP% 创建并显式调用当前 Python 解释器，
   凭据严格按编码解析且绝不落盘或打印，finally 块保证彻底删除。
"""

import argparse
import ctypes
import ctypes.wintypes as wt
import datetime
import os
import subprocess
import sys
import tempfile
import time
from pathlib import Path
from urllib.parse import urlparse
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parent.parent
BUILD_SCRIPT = ROOT / "scripts" / "build_and_verify.mjs"
GH_USER = "JUNjun-cyber-arch"
EXPECTED_REPO_SLUG = "junjun-cyber-arch/xiaquan-ee-job-radar"
CRED_TARGET = f"GitHub - https://api.github.com/{GH_USER}"
LOCK_PATH = Path(tempfile.gettempdir()) / "xiaquan_ee_publish.lock"
LOCK_STALE_SECONDS = 900

DAILY_ALLOWED_PATHS = (
    "data/",
    "reports/",
    "web/data-bundle.js",
    "docs/",
)
ALL_STAGE_PATHS = (
    "data",
    "reports",
    "web",
    "docs",
    "scripts/build_and_verify.mjs",
    "scripts/publish_pages.py",
    "README.md",
    ".gitignore",
)
DAILY_STAGE_PATHS = ("data", "reports", "web/data-bundle.js", "docs")


class CREDENTIAL(ctypes.Structure):
    _fields_ = [
        ("Flags", wt.DWORD),
        ("Type", wt.DWORD),
        ("TargetName", wt.LPWSTR),
        ("Comment", wt.LPWSTR),
        ("LastWritten", wt.FILETIME),
        ("CredentialBlobSize", wt.DWORD),
        ("CredentialBlob", ctypes.POINTER(ctypes.c_byte)),
        ("Persist", wt.DWORD),
        ("AttributeCount", wt.DWORD),
        ("Attributes", ctypes.c_void_p),
        ("TargetAlias", wt.LPWSTR),
        ("UserName", wt.LPWSTR),
    ]


def read_github_desktop_token() -> str:
    advapi32 = ctypes.windll.advapi32
    advapi32.CredReadW.argtypes = [
        wt.LPCWSTR,
        wt.DWORD,
        wt.DWORD,
        ctypes.POINTER(ctypes.POINTER(CREDENTIAL)),
    ]
    advapi32.CredReadW.restype = wt.BOOL
    advapi32.CredFree.argtypes = [ctypes.c_void_p]

    pcred = ctypes.POINTER(CREDENTIAL)()
    if not advapi32.CredReadW(CRED_TARGET, 1, 0, ctypes.byref(pcred)):
        err_code = ctypes.get_last_error()
        raise RuntimeError(f"未找到 GitHub Desktop 本机凭据：{CRED_TARGET}（Win32 错误码 {err_code}）")

    try:
        blob = bytes(ctypes.string_at(pcred.contents.CredentialBlob, pcred.contents.CredentialBlobSize))
    finally:
        advapi32.CredFree(pcred)

    # 严格解码凭据字节，不使用 errors="ignore" 静默篡改内容
    if len(blob) % 2 == 0 and b"\x00" in blob:
        token = blob.decode("utf-16-le", errors="strict").rstrip("\x00")
    else:
        token = blob.decode("utf-8", errors="strict").rstrip("\x00")

    if not token or "\n" in token or "\r" in token:
        raise RuntimeError("读取到的 GitHub 凭据格式无效或为空")
    return token


class PublishLock:
    def __init__(self, path: Path):
        self.path = path
        self.fd = None

    def __enter__(self):
        if self.path.exists():
            age = time.time() - self.path.stat().st_mtime
            if age > LOCK_STALE_SECONDS:
                self.path.unlink(missing_ok=True)
        try:
            self.fd = os.open(str(self.path), os.O_CREAT | os.O_EXCL | os.O_WRONLY)
            os.write(self.fd, f"pid={os.getpid()} ts={time.time()}\n".encode("ascii"))
        except FileExistsError as exc:
            raise RuntimeError(f"检测到另一发布实例正在运行（锁文件：{self.path}），本次已安全跳过。") from exc
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.fd is not None:
            try:
                os.close(self.fd)
            except OSError:
                pass
        self.path.unlink(missing_ok=True)


def run(cmd, env=None, capture=False, timeout=60):
    return subprocess.run(
        cmd,
        cwd=str(ROOT),
        env=env,
        check=True,
        text=True,
        encoding="utf-8",
        errors="strict",
        capture_output=capture,
        timeout=timeout,
    )


def create_temp_askpass_files():
    """在系统临时目录创建一次性 askpass Python 辅助脚本与 .cmd 包装器。"""
    py_fd, py_path_str = tempfile.mkstemp(prefix="xq_askpass_", suffix=".py")
    os.close(py_fd)
    cmd_fd, cmd_path_str = tempfile.mkstemp(prefix="xq_askpass_", suffix=".cmd")
    os.close(cmd_fd)

    py_helper = (
        "import os, sys\n"
        "prompt = ' '.join(sys.argv[1:]).strip().lower()\n"
        "if prompt.startswith('username'):\n"
        "    sys.stdout.write(os.environ.get('XQ_GH_USER', ''))\n"
        "elif prompt.startswith('password'):\n"
        "    sys.stdout.write(os.environ.get('XQ_GH_TOKEN', ''))\n"
        "else:\n"
        "    sys.exit(1)\n"
    )
    Path(py_path_str).write_text(py_helper, encoding="utf-8")

    cmd_wrapper = f'@echo off\r\n"{sys.executable}" "{py_path_str}" %*\r\n'
    Path(cmd_path_str).write_text(cmd_wrapper, encoding="ascii")
    return Path(py_path_str), Path(cmd_path_str)


def build_git_env(token: str, askpass_cmd: Path) -> dict:
    env = os.environ.copy()
    env["XQ_GH_USER"] = GH_USER
    env["XQ_GH_TOKEN"] = token
    env["GIT_ASKPASS"] = str(askpass_cmd)
    env["GIT_TERMINAL_PROMPT"] = "0"
    env["GCM_INTERACTIVE"] = "never"
    return env


def is_expected_github_remote(raw_url: str) -> bool:
    u = raw_url.strip()
    if u.startswith("git@github.com:"):
        repo_path = u.split(":", 1)[1].rstrip("/").lower()
        return repo_path in (EXPECTED_REPO_SLUG, f"{EXPECTED_REPO_SLUG}.git")
    parsed = urlparse(u)
    host = (parsed.hostname or "").lower()
    path_slug = parsed.path.lstrip("/").rstrip("/").lower()
    return parsed.scheme == "https" and host == "github.com" and path_slug in (
        EXPECTED_REPO_SLUG,
        f"{EXPECTED_REPO_SLUG}.git",
    )


def verify_repo_and_branch():
    branch = run(["git", "rev-parse", "--abbrev-ref", "HEAD"], capture=True).stdout.strip()
    if branch != "main":
        raise RuntimeError(f"当前位于分支 '{branch}'，发布脚本仅允许在 'main' 分支运行。")

    fetch_urls = [
        line.strip()
        for line in run(["git", "remote", "get-url", "--all", "origin"], capture=True).stdout.splitlines()
        if line.strip()
    ]
    push_urls = [
        line.strip()
        for line in run(["git", "remote", "get-url", "--all", "--push", "origin"], capture=True).stdout.splitlines()
        if line.strip()
    ]
    if not fetch_urls or any(not is_expected_github_remote(u) for u in fetch_urls):
        raise RuntimeError(f"origin fetch URL 列表包含非目标仓库：{fetch_urls}")
    if not push_urls or any(not is_expected_github_remote(u) for u in push_urls):
        raise RuntimeError(f"origin push URL 列表包含非目标仓库：{push_urls}")


def parse_porcelain_paths(status_output: str) -> list[str]:
    paths = []
    for line in status_output.splitlines():
        if not line.strip():
            continue
        raw_path = line[3:].strip()
        if " -> " in raw_path:
            raw_path = raw_path.split(" -> ", 1)[1].strip()
        paths.append(raw_path.strip('"').replace("\\", "/"))
    return paths


def fetch_origin_with_retry(env: dict, retries: int = 2):
    last_err = None
    for attempt in range(1, retries + 1):
        try:
            run(["git", "-c", "credential.helper=", "fetch", "origin", "main"], env=env, timeout=45)
            return
        except (subprocess.CalledProcessError, subprocess.TimeoutExpired) as exc:
            last_err = exc
            if attempt < retries:
                time.sleep(2 * attempt)
    raise RuntimeError(f"无法获取 origin/main 远端状态（已重试 {retries} 次）：{last_err}")


def shanghai_today() -> str:
    return datetime.datetime.now(ZoneInfo("Asia/Shanghai")).date().isoformat()


def main():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    if hasattr(sys.stderr, "reconfigure"):
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")

    parser = argparse.ArgumentParser(description="安全校验、受控提交并推送至 GitHub Pages")
    parser.add_argument("--allow-all", action="store_true", help="允许提交 scripts/web/README 等代码改动（人工发版用）")
    parser.add_argument("message", nargs="?", default=None, help="可选自定义 Git commit 信息")
    args = parser.parse_args()

    with PublishLock(LOCK_PATH):
        verify_repo_and_branch()

        # 1. 运行构建与全量 Schema 校验
        run(["node", str(BUILD_SCRIPT)], timeout=60)

        # 2. 检查工作区变更路径并执行日常权限门禁
        pre_staged = run(["git", "diff", "--cached", "--name-only"], capture=True).stdout.strip()
        if pre_staged and not args.allow_all:
            raise RuntimeError("检测到已有预先暂存的改动，日常模式拒绝混合提交，请先清理暂存区或使用 --allow-all。")

        status = run(["git", "status", "--porcelain=v1"], capture=True).stdout
        changed_paths = parse_porcelain_paths(status)

        if changed_paths:
            if not args.allow_all:
                disallowed = [
                    p for p in changed_paths
                    if not any(p == allow.rstrip("/") or p.startswith(allow) for allow in DAILY_ALLOWED_PATHS)
                ]
                if disallowed:
                    raise RuntimeError(
                        f"日常自动发布仅允许改动 data/reports/web/data-bundle.js/docs，检测到越界改动：{disallowed}"
                    )
                stage_targets = [p for p in DAILY_STAGE_PATHS if (ROOT / p).exists()]
            else:
                stage_targets = [p for p in ALL_STAGE_PATHS if (ROOT / p).exists()]

            run(["git", "add", "--all", "--", *stage_targets])
            staged = run(["git", "diff", "--cached", "--name-only"], capture=True).stdout.strip()
            if staged:
                today = shanghai_today()
                msg = args.message or f"chore(daily): update XiaQuan EE radar ({today})"
                run(["git", "commit", "-m", msg])
                print(f"[OK] 已完成本地提交：{msg}")
        else:
            print("[INFO] 工作区无新增改动，检查远程同步状态...")

        # 3. 凭据仅在远端交互期加载，并严格检查远端分叉
        token = read_github_desktop_token()
        py_helper, cmd_wrapper = create_temp_askpass_files()
        try:
            env = build_git_env(token, cmd_wrapper)
            fetch_origin_with_retry(env)

            lr = run(["git", "rev-list", "--left-right", "--count", "origin/main...main"], capture=True).stdout.strip()
            behind_str, ahead_str = lr.split()
            behind, ahead = int(behind_str), int(ahead_str)

            if behind > 0 and ahead > 0:
                raise RuntimeError(f"检测到分支分叉（远端领先 {behind} 个提交，本地领先 {ahead} 个提交），已保留本地提交并中止自动推送。")
            if behind > 0:
                raise RuntimeError(f"远端 origin/main 领先本地 {behind} 个提交，请先人工合并后再推送。")
            if ahead == 0:
                print("[OK] 远程 origin/main 已是最新，无需重复推送。")
                return

            run(["git", "-c", "credential.helper=", "push", "origin", "main"], env=env, timeout=60)
            head_sha = run(["git", "rev-parse", "--short", "HEAD"], capture=True).stdout.strip()
            print(f"[PUSH] 提交 {head_sha} 已推送至 GitHub Pages：https://junjun-cyber-arch.github.io/xiaquan-ee-job-radar/")
        finally:
            py_helper.unlink(missing_ok=True)
            cmd_wrapper.unlink(missing_ok=True)


if __name__ == "__main__":
    main()
