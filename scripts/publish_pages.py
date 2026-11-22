#!/usr/bin/env python3
"""
厦泉电气 2027 暑期实习情报雷达 — 自动校验、提交并推送至 GitHub Pages

安全说明：
- 仅在内存中读取本机 GitHub Desktop 已登录的 Windows 凭据，绝不打印或写入磁盘。
- 推送前强制执行 build_and_verify.mjs，校验不通过则中止推送。
- 禁用交互弹窗，适合每日定时无人值守运行。
"""

import ctypes
import ctypes.wintypes as wt
import datetime
import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BUILD_SCRIPT = ROOT / "scripts" / "build_and_verify.mjs"
ASKPASS_CMD = ROOT / "scripts" / "_git_askpass.cmd"
GH_USER = "JUNjun-cyber-arch"
CRED_TARGET = f"GitHub - https://api.github.com/{GH_USER}"


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
        raise RuntimeError(f"未找到 GitHub Desktop 本机凭据：{CRED_TARGET}")

    try:
        blob = bytes(ctypes.string_at(pcred.contents.CredentialBlob, pcred.contents.CredentialBlobSize))
    finally:
        advapi32.CredFree(pcred)

    if b"\x00" in blob:
        token = blob.decode("utf-16-le", errors="ignore").strip("\x00")
    else:
        token = blob.decode("utf-8", errors="ignore").strip("\x00")

    if not token:
        raise RuntimeError("读取到的 GitHub 凭据为空")
    return token


def run(cmd, env=None, capture=False):
    return subprocess.run(
        cmd,
        cwd=str(ROOT),
        env=env,
        check=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        capture_output=capture,
    )


def main():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    if hasattr(sys.stderr, "reconfigure"):
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")

    # 1. 先运行构建与全量校验，确保数据与 docs/ 发布目录完全一致
    run(["node", str(BUILD_SCRIPT)])

    # 2. 检查是否有待提交改动
    status = run(["git", "status", "--porcelain"], capture=True).stdout.strip()
    if status:
        run(["git", "add", "data", "reports", "web", "docs", "scripts", "README.md", ".gitignore"])
        staged = run(["git", "diff", "--cached", "--name-only"], capture=True).stdout.strip()
        if staged:
            today = datetime.date.today().isoformat()
            msg = sys.argv[1] if len(sys.argv) > 1 else f"chore(daily): update XiaQuan EE radar ({today})"
            run(["git", "commit", "-m", msg])
            print(f"[OK] 已完成本地提交：{msg}")
    else:
        print("[INFO] 工作区无新增改动，检查是否需要同步远程分支...")

    # 3. 检查本地 main 是否领先于 origin/main
    ahead = run(["git", "rev-list", "--count", "origin/main..main"], capture=True).stdout.strip()
    if ahead == "0":
        print("[OK] 远程 origin/main 已是最新，无需重复推送。")
        return

    # 4. 读取凭据并通过非交互 GIT_ASKPASS 推送
    token = read_github_desktop_token()
    env = os.environ.copy()
    env["XQ_GH_USER"] = GH_USER
    env["XQ_GH_TOKEN"] = token
    env["GIT_ASKPASS"] = str(ASKPASS_CMD)
    env["GIT_TERMINAL_PROMPT"] = "0"
    env["GCM_INTERACTIVE"] = "never"

    run(["git", "-c", "credential.helper=", "push", "origin", "main"], env=env)
    print("[PUSH] 已自动推送至 GitHub Pages：https://junjun-cyber-arch.github.io/xiaquan-ee-job-radar/")


if __name__ == "__main__":
    main()
