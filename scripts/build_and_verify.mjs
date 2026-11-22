#!/usr/bin/env node
/**
 * 厦泉电气 2027 暑期实习情报雷达 — 数据校验、聚合统计与网站构建脚本
 *
 * 功能：
 * 1. 严格校验 roles.json、queue.json、changelog.json 与全部 companies/*.json 的结构完整性与来源引用
 * 2. 自动计算跨企业、分岗位的技能出现频次排行与城市/赛道分布统计
 * 3. 输出离线可用的 web/data-bundle.js（支持直接双击 file:// 打开）
 * 4. 自动更新 reports/summary_skills_ranking.md 汇总报告
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const DATA_DIR = path.join(ROOT, "data");
const COMPANIES_DIR = path.join(DATA_DIR, "companies");
const WEB_DIR = path.join(ROOT, "web");
const DOCS_DIR = path.join(ROOT, "docs");
const REPORTS_DIR = path.join(ROOT, "reports");

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(`[校验失败] ${message}`);
  }
}

function validateAndLoad() {
  const roles = readJson(path.join(DATA_DIR, "roles.json"));
  const queue = readJson(path.join(DATA_DIR, "queue.json"));
  const changelog = readJson(path.join(DATA_DIR, "changelog.json"));

  assert(Array.isArray(roles) && roles.length === 5, "roles.json 必须包含 5 个目标岗位定义");
  const roleMap = new Map(roles.map((r) => [r.id, r]));

  assert(Array.isArray(queue.items) && queue.items.length > 0, "queue.json.items 不能为空");
  assert(Array.isArray(changelog), "changelog.json 必须为数组");

  const companyFiles = fs
    .readdirSync(COMPANIES_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort();

  assert(companyFiles.length > 0, "data/companies/ 至少需要包含 1 家企业档案");

  const companies = [];
  const companyMap = new Map();

  for (const file of companyFiles) {
    const filePath = path.join(COMPANIES_DIR, file);
    const c = readJson(filePath);
    const expectedId = path.basename(file, ".json");

    assert(c.id === expectedId, `${file}: id (${c.id}) 必须与文件名 (${expectedId}) 一致`);
    assert(typeof c.name === "string" && c.name.trim(), `${file}: 缺少 name`);
    assert(typeof c.city === "string" && c.city.trim(), `${file}: 缺少 city`);
    assert(typeof c.track === "string" && c.track.trim(), `${file}: 缺少 track`);
    assert(Array.isArray(c.coreProducts) && c.coreProducts.length > 0, `${file}: coreProducts 不能为空`);
    assert(Array.isArray(c.matchedRoles) && c.matchedRoles.length > 0, `${file}: matchedRoles 不能为空`);
    assert(Array.isArray(c.sources) && c.sources.length > 0, `${file}: 必须至少包含 1 条公开信息来源 sources`);

    for (const mr of c.matchedRoles) {
      assert(roleMap.has(mr.roleId), `${file}: 未知的 roleId "${mr.roleId}"`);
      assert(Array.isArray(mr.officialTitles) && mr.officialTitles.length > 0, `${file} (${mr.roleId}): officialTitles 不能为空`);
      assert(Array.isArray(mr.skills) && mr.skills.length > 0, `${file} (${mr.roleId}): skills 不能为空`);
      for (const sk of mr.skills) {
        assert(typeof sk.name === "string" && sk.name.trim(), `${file} (${mr.roleId}): 技能缺少 name`);
        assert(sk.level === "must" || sk.level === "plus", `${file} (${mr.roleId}): 技能 "${sk.name}" level 必须为 must 或 plus`);
        assert(typeof sk.category === "string" && sk.category.trim(), `${file} (${mr.roleId}): 技能 "${sk.name}" 缺少 category`);
      }
    }

    companies.push(c);
    companyMap.set(c.id, c);
  }

  // 检查 queue 与 company 文件同步一致性
  for (const item of queue.items) {
    if (item.status === "done") {
      assert(companyMap.has(item.id), `queue.json 中标记 done 的企业 "${item.id}" 缺少对应的 data/companies/${item.id}.json`);
    }
  }
  for (const c of companies) {
    const qItem = queue.items.find((i) => i.id === c.id);
    assert(qItem && qItem.status === "done", `已落盘的企业 "${c.id}" 必须在 queue.json 中登记且 status 为 "done"`);
  }

  // 按 queue 中的 order 排序企业列表
  const orderMap = new Map(queue.items.map((i) => [i.id, i.order]));
  companies.sort((a, b) => (orderMap.get(a.id) ?? 999) - (orderMap.get(b.id) ?? 999));

  return { roles, roleMap, queue, changelog, companies };
}

function buildAggregations({ roles, queue, changelog, companies }) {
  const totalCompanies = companies.length;
  const totalQueue = queue.items.length;

  // 城市与赛道统计
  const cityCounts = {};
  const trackCounts = {};
  let totalMatchedRoleInstances = 0;

  // 全局技能统计（按技能名称聚合）
  const overallSkillMap = new Map();

  // 分岗位统计
  const roleStatsMap = new Map();
  for (const role of roles) {
    roleStatsMap.set(role.id, {
      roleId: role.id,
      roleName: role.name,
      shortName: role.shortName,
      category: role.category,
      companyIds: new Set(),
      companies: [],
      skillMap: new Map(),
      travelCounts: {},
      shiftCounts: {}
    });
  }

  for (const company of companies) {
    cityCounts[company.city] = (cityCounts[company.city] || 0) + 1;
    trackCounts[company.track] = (trackCounts[company.track] || 0) + 1;

    // 单企业内技能去重集合（计算跨企业覆盖率用）
    const companySkillSeen = new Map();

    for (const mr of company.matchedRoles) {
      totalMatchedRoleInstances += 1;
      const rStat = roleStatsMap.get(mr.roleId);
      rStat.companyIds.add(company.id);
      rStat.companies.push({
        id: company.id,
        name: company.name,
        city: company.city,
        officialTitles: mr.officialTitles,
        shiftWork: mr.shiftWork,
        travelLevel: mr.travelLevel
      });
      rStat.travelCounts[mr.travelLevel] = (rStat.travelCounts[mr.travelLevel] || 0) + 1;
      rStat.shiftCounts[mr.shiftWork] = (rStat.shiftCounts[mr.shiftWork] || 0) + 1;

      for (const sk of mr.skills) {
        // 1) 分岗位技能统计
        if (!rStat.skillMap.has(sk.name)) {
          rStat.skillMap.set(sk.name, {
            name: sk.name,
            category: sk.category,
            count: 0,
            mustCount: 0,
            plusCount: 0,
            companyEntries: []
          });
        }
        const rs = rStat.skillMap.get(sk.name);
        rs.count += 1;
        if (sk.level === "must") rs.mustCount += 1;
        else rs.plusCount += 1;
        rs.companyEntries.push({
          companyId: company.id,
          companyName: company.name,
          level: sk.level,
          detail: sk.detail
        });

        // 2) 全局技能统计
        if (!overallSkillMap.has(sk.name)) {
          overallSkillMap.set(sk.name, {
            name: sk.name,
            category: sk.category,
            companyIds: new Set(),
            roleIds: new Set(),
            mustRoleCount: 0,
            plusRoleCount: 0,
            totalRoleMentions: 0,
            evidences: []
          });
        }
        const os = overallSkillMap.get(sk.name);
        os.companyIds.add(company.id);
        os.roleIds.add(mr.roleId);
        os.totalRoleMentions += 1;
        if (sk.level === "must") os.mustRoleCount += 1;
        else os.plusRoleCount += 1;
        os.evidences.push({
          companyId: company.id,
          companyName: company.name,
          roleId: mr.roleId,
          level: sk.level,
          detail: sk.detail
        });

        // 记录企业最高级别（must 优先于 plus）
        const prev = companySkillSeen.get(sk.name);
        if (!prev || sk.level === "must") {
          companySkillSeen.set(sk.name, sk.level);
        }
      }
    }
  }

  const skillStatsOverall = Array.from(overallSkillMap.values())
    .map((s) => ({
      name: s.name,
      category: s.category,
      companyCount: s.companyIds.size,
      companyPct: Math.round((s.companyIds.size / totalCompanies) * 100),
      roleCount: s.roleIds.size,
      roleIds: Array.from(s.roleIds),
      mustRoleCount: s.mustRoleCount,
      plusRoleCount: s.plusRoleCount,
      totalRoleMentions: s.totalRoleMentions,
      evidences: s.evidences
    }))
    .sort((a, b) => {
      if (b.companyCount !== a.companyCount) return b.companyCount - a.companyCount;
      if (b.mustRoleCount !== a.mustRoleCount) return b.mustRoleCount - a.mustRoleCount;
      if (b.totalRoleMentions !== a.totalRoleMentions) return b.totalRoleMentions - a.totalRoleMentions;
      return a.name.localeCompare(b.name, "zh-CN");
    });

  const roleStats = Array.from(roleStatsMap.values()).map((r) => {
    const cCount = r.companyIds.size;
    const skills = Array.from(r.skillMap.values())
      .map((sk) => ({
        name: sk.name,
        category: sk.category,
        count: sk.count,
        pct: cCount > 0 ? Math.round((sk.count / cCount) * 100) : 0,
        mustCount: sk.mustCount,
        plusCount: sk.plusCount,
        companyEntries: sk.companyEntries
      }))
      .sort((a, b) => {
        if (b.count !== a.count) return b.count - a.count;
        if (b.mustCount !== a.mustCount) return b.mustCount - a.mustCount;
        return a.name.localeCompare(b.name, "zh-CN");
      });

    return {
      roleId: r.roleId,
      roleName: r.roleName,
      shortName: r.shortName,
      category: r.category,
      companyCount: cCount,
      companies: r.companies,
      skills,
      travelCounts: r.travelCounts,
      shiftCounts: r.shiftCounts
    };
  });

  const skillCategories = Array.from(new Set(skillStatsOverall.map((s) => s.category)));

  return {
    generatedAt: new Date().toISOString().slice(0, 10),
    overview: {
      totalCompanies,
      totalQueue,
      pendingQueue: queue.items.filter((i) => i.status !== "done").length,
      completionPct: Math.round((totalCompanies / totalQueue) * 100),
      totalMatchedRoleInstances,
      uniqueSkillCount: skillStatsOverall.length,
      cityCounts,
      trackCounts
    },
    roles,
    queue,
    changelog,
    companies,
    skillCategories,
    skillStatsOverall,
    roleStats
  };
}

function writeSummaryMarkdown(bundle) {
  const { overview, skillStatsOverall, roleStats, companies, changelog } = bundle;
  const lines = [];

  lines.push("# 厦泉电气 2027 暑期实习岗位技能频次总榜（自动滚动汇总）");
  lines.push("");
  lines.push(`> 自动生成日期：${bundle.generatedAt} ｜ 已深挖企业：**${overview.totalCompanies} / ${overview.totalQueue}** 家（完成度 ${overview.completionPct}%）｜ 已统计真实岗位条目：**${overview.totalMatchedRoleInstances}** 条 ｜ 归集核心技能：**${overview.uniqueSkillCount}** 项`);
  lines.push("");
  lines.push("## 一、全库跨企业高频技能总榜");
  lines.push("");
  lines.push("| 排名 | 技能名称 | 类别 | 覆盖企业数 | 企业覆盖率 | 必备(Must)次数 | 加分(Plus)次数 |");
  lines.push("| :---: | :--- | :--- | :---: | :---: | :---: | :---: |");

  skillStatsOverall.forEach((sk, idx) => {
    lines.push(
      `| ${idx + 1} | **${sk.name}** | ${sk.category} | ${sk.companyCount}/${overview.totalCompanies} | ${sk.companyPct}% | ${sk.mustRoleCount} | ${sk.plusRoleCount} |`
    );
  });

  lines.push("");
  lines.push("## 二、五大探索岗位技能拆解进度");
  lines.push("");

  for (const rs of roleStats) {
    lines.push(`### ${rs.roleName}（已覆盖 ${rs.companyCount} 家企业）`);
    if (rs.companyCount === 0) {
      lines.push("- 当前已深挖企业暂未覆盖该岗位，后续每日队列推进至半导体/面板/制造企业后自动填充。");
      lines.push("");
      continue;
    }
    lines.push(`- **已覆盖企业**：${rs.companies.map((c) => `${c.name}（${c.city}）`).join("、")}`);
    lines.push("- **高频核心技能**：");
    for (const sk of rs.skills) {
      const badge = sk.mustCount > 0 ? `必备×${sk.mustCount}` : `加分×${sk.plusCount}`;
      lines.push(`  - **${sk.name}**（${sk.count}/${rs.companyCount}，${sk.pct}%，${badge}）`);
    }
    lines.push("");
  }

  lines.push("## 三、已收录企业一览");
  lines.push("");
  lines.push("| 企业 | 城市 | 赛道 | 覆盖岗位 | 更新日期 |");
  lines.push("| :--- | :---: | :--- | :--- | :---: |");
  const roleNameMap = new Map(bundle.roles.map((r) => [r.id, r.shortName]));
  for (const c of companies) {
    const rNames = c.matchedRoles.map((m) => roleNameMap.get(m.roleId) || m.roleId).join(" / ");
    lines.push(`| ${c.name} | ${c.city} | ${c.track} | ${rNames} | ${c.researchedAt} |`);
  }

  lines.push("");
  lines.push("## 四、每日深挖动态日志");
  lines.push("");
  for (const log of [...changelog].reverse()) {
    lines.push(`- **Day ${log.day}（${log.date}）**：${log.headline} — ${log.keyTakeaway}`);
  }
  lines.push("");

  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(path.join(REPORTS_DIR, "summary_skills_ranking.md"), lines.join("\n"), "utf8");
}

function syncWebToDocs() {
  fs.mkdirSync(DOCS_DIR, { recursive: true });
  for (const file of ["index.html", "styles.css", "app.js", "data-bundle.js"]) {
    const src = path.join(WEB_DIR, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(DOCS_DIR, file));
    }
  }
  fs.writeFileSync(path.join(DOCS_DIR, ".nojekyll"), "", "utf8");
}

function main() {
  const loaded = validateAndLoad();
  const bundle = buildAggregations(loaded);

  fs.mkdirSync(WEB_DIR, { recursive: true });
  const jsContent = `/* 自动生成文件，请勿手动编辑。运行 node scripts/build_and_verify.mjs 更新 */\nwindow.__RADAR_DATA__ = ${JSON.stringify(bundle, null, 2)};\n`;
  fs.writeFileSync(path.join(WEB_DIR, "data-bundle.js"), jsContent, "utf8");
  syncWebToDocs();

  writeSummaryMarkdown(bundle);

  console.log("✅ 数据校验全部通过！");
  console.log(`   - 已收录企业：${bundle.overview.totalCompanies} / ${bundle.overview.totalQueue} 家`);
  console.log(`   - 覆盖岗位条目：${bundle.overview.totalMatchedRoleInstances} 条`);
  console.log(`   - 归集核心技能：${bundle.overview.uniqueSkillCount} 项`);
  console.log(`   - 已输出：web/data-bundle.js、docs/（GitHub Pages 发布目录）与 reports/summary_skills_ranking.md`);
}

main();
