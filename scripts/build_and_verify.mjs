#!/usr/bin/env node
/**
 * 厦泉电气 2027 暑期实习情报雷达 — v2 数据契约校验、聚合统计与双模构建脚本
 */

import crypto from "node:crypto";
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

const VALID_CITIES = new Set(["厦门", "泉州", "厦门/泉州"]);
const VALID_PRIORITIES = new Set(["S", "A", "B"]);
const VALID_STATUSES = new Set(["done", "pending"]);
const VALID_SUMMER_FITS = new Set(["fit-8w", "short-4w", "need-3m", "negotiable", "long-or-senior"]);
const VALID_WINDOW_GROUPS = new Set(["spring-main", "may-early", "rolling", "autumn-watch"]);
const VALID_EVIDENCE_STATUS = new Set(["historical-verified", "campus-inferred", "needs-verify"]);
const VALID_SOURCE_KINDS = new Set(["official-portal", "intern-notice", "campus-notice", "unverified-lead"]);
const VALID_JD_TYPES = new Set(["real-intern-jd", "campus-ref", "unverified"]);
const VALID_SKILL_LEVELS = new Set(["must", "plus"]);
const VALID_TASK_MODES = new Set(["纸笔/读图", "Multisim仿真", "学校实验课"]);
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(`[校验失败] ${message}`);
  }
}

function isNonEmptyString(val) {
  return typeof val === "string" && val.trim().length > 0;
}

function assertNonEmptyStringArray(arr, pointer) {
  assert(Array.isArray(arr) && arr.length > 0, `${pointer} 必须为非空字符串数组`);
  arr.forEach((item, idx) => {
    assert(isNonEmptyString(item), `${pointer}[${idx}] 必须为非空字符串`);
  });
}

function assertValidDate(str, pointer) {
  assert(typeof str === "string" && DATE_RE.test(str), `${pointer} 必须为 YYYY-MM-DD 日期格式（当前: ${str}）`);
  const [y, m, d] = str.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  assert(
    dt.getUTCFullYear() === y && dt.getUTCMonth() + 1 === m && dt.getUTCDate() === d,
    `${pointer} 不是有效的公历日期: ${str}`
  );
}

function assertSafeHttpsUrl(rawUrl, pointer) {
  assert(isNonEmptyString(rawUrl), `${pointer} 必须为非空 URL`);
  assert(!/[\u0000-\u001f\u007f]/.test(rawUrl), `${pointer} 不可包含控制字符`);
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new Error(`[校验失败] ${pointer} URL 无法解析: ${rawUrl}`);
  }
  assert(parsed.protocol === "https:", `${pointer} 仅允许 https:// 协议（当前: ${parsed.protocol}）`);
  assert(!parsed.username && !parsed.password, `${pointer} URL 禁止包含账号或密码凭据`);
  assert(parsed.hostname && !["localhost", "127.0.0.1", "::1"].includes(parsed.hostname), `${pointer} 禁止本地主机地址`);
}

function shanghaiToday() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function validateAndLoad() {
  const roles = readJson(path.join(DATA_DIR, "roles.json"));
  const queue = readJson(path.join(DATA_DIR, "queue.json"));
  const changelog = readJson(path.join(DATA_DIR, "changelog.json"));
  const skillsCatalog = readJson(path.join(DATA_DIR, "skills_catalog.json"));

  // 1. 校验 roles.json
  assert(Array.isArray(roles) && roles.length === 5, "data/roles.json 必须包含 5 个目标岗位定义");
  const roleIds = new Set();
  for (const [idx, r] of roles.entries()) {
    assert(isNonEmptyString(r.id) && ID_RE.test(r.id), `roles[${idx}].id 不合法`);
    assert(!roleIds.has(r.id), `roles[${idx}].id 重复: ${r.id}`);
    roleIds.add(r.id);
    for (const k of ["name", "shortName", "category", "summary", "typicalDay", "starterProjectHint"]) {
      assert(isNonEmptyString(r[k]), `roles[${idx}].${k} 不能为空`);
    }
    assertNonEmptyStringArray(r.courseLinks, `roles[${idx}].courseLinks`);
  }
  const roleMap = new Map(roles.map((r) => [r.id, r]));

  // 2. 校验 skills_catalog.json
  assert(skillsCatalog && skillsCatalog.schemaVersion === 2, "data/skills_catalog.json schemaVersion 必须为 2");
  assertNonEmptyStringArray(skillsCatalog.categories, "skills_catalog.categories");
  const validCategories = new Set(skillsCatalog.categories);
  assert(validCategories.size === skillsCatalog.categories.length, "skills_catalog.categories 存在重复分类");
  assert(Array.isArray(skillsCatalog.skills) && skillsCatalog.skills.length > 0, "skills_catalog.skills 不能为空");
  const catalogSkillMap = new Map();
  for (const [idx, sk] of skillsCatalog.skills.entries()) {
    assert(isNonEmptyString(sk.name), `skills_catalog.skills[${idx}].name 不能为空`);
    assert(!catalogSkillMap.has(sk.name), `skills_catalog.skills 存在重复技能名: ${sk.name}`);
    assert(validCategories.has(sk.category), `skills_catalog.skills[${idx}].category 非法: ${sk.category}`);
    assertNonEmptyStringArray(sk.courses, `skills_catalog.skills[${idx}].courses`);
    assert(sk.microTask && typeof sk.microTask === "object", `skills_catalog.skills[${idx}].microTask 缺失`);
    assert(VALID_TASK_MODES.has(sk.microTask.mode), `skills_catalog.skills[${idx}].microTask.mode 非法: ${sk.microTask.mode}`);
    assert(isNonEmptyString(sk.microTask.task), `skills_catalog.skills[${idx}].microTask.task 不能为空`);
    assert(isNonEmptyString(sk.microTask.deliverable), `skills_catalog.skills[${idx}].microTask.deliverable 不能为空`);
    catalogSkillMap.set(sk.name, sk);
  }

  // 3. 校验 queue.json
  assert(queue && queue.schemaVersion === 2, "data/queue.json schemaVersion 必须为 2");
  assertValidDate(queue.updatedAt, "queue.updatedAt");
  assert(queue.dailyTargetCount === 1 || queue.dailyTargetCount === 2, "queue.dailyTargetCount 必须为 1 或 2");
  assert(Array.isArray(queue.items) && queue.items.length > 0, "queue.items 不能为空");

  const queueIds = new Set();
  const queueOrders = new Set();
  for (const [idx, item] of queue.items.entries()) {
    assert(Number.isInteger(item.order) && item.order >= 1, `queue.items[${idx}].order 必须为正整数`);
    assert(!queueOrders.has(item.order), `queue.items 存在重复 order: ${item.order}`);
    queueOrders.add(item.order);
    assert(isNonEmptyString(item.id) && ID_RE.test(item.id), `queue.items[${idx}].id 不合法`);
    assert(!queueIds.has(item.id), `queue.items 存在重复 id: ${item.id}`);
    queueIds.add(item.id);
    assert(isNonEmptyString(item.name), `queue.items[${idx}].name 不能为空`);
    assert(VALID_CITIES.has(item.city), `queue.items[${idx}].city 非法: ${item.city}`);
    assert(isNonEmptyString(item.track), `queue.items[${idx}].track 不能为空`);
    assert(VALID_PRIORITIES.has(item.priority), `queue.items[${idx}].priority 非法: ${item.priority}`);
    assert(VALID_STATUSES.has(item.status), `queue.items[${idx}].status 非法: ${item.status}`);
    assert(isNonEmptyString(item.focusHint), `queue.items[${idx}].focusHint 不能为空`);
    if (item.status === "done") {
      assertValidDate(item.researchedAt, `queue.items[${idx}].researchedAt`);
    } else {
      assert(item.researchedAt === null, `queue.items[${idx}] 为 pending 时 researchedAt 必须为 null`);
    }
  }
  for (let i = 1; i <= queue.items.length; i += 1) {
    assert(queueOrders.has(i), `queue.items.order 必须为 1..${queue.items.length} 连续整数（缺少 ${i}）`);
  }

  assert(Array.isArray(queue.phase2Candidates), "queue.phase2Candidates 必须为数组");
  const candIds = new Set();
  for (const [idx, cand] of queue.phase2Candidates.entries()) {
    assert(isNonEmptyString(cand.id) && ID_RE.test(cand.id), `queue.phase2Candidates[${idx}].id 不合法`);
    assert(!candIds.has(cand.id) && !queueIds.has(cand.id), `phase2Candidates id 重复或与一期冲突: ${cand.id}`);
    candIds.add(cand.id);
    assert(isNonEmptyString(cand.name), `queue.phase2Candidates[${idx}].name 不能为空`);
    assert(VALID_CITIES.has(cand.city), `queue.phase2Candidates[${idx}].city 非法: ${cand.city}`);
    assert(isNonEmptyString(cand.track), `queue.phase2Candidates[${idx}].track 不能为空`);
    assert(Array.isArray(cand.roles) && cand.roles.length > 0, `queue.phase2Candidates[${idx}].roles 不能为空`);
    for (const rid of cand.roles) {
      assert(roleMap.has(rid), `queue.phase2Candidates[${idx}].roles 含未知岗位: ${rid}`);
    }
    assert(isNonEmptyString(cand.reason), `queue.phase2Candidates[${idx}].reason 不能为空`);
    assertSafeHttpsUrl(cand.clueUrl, `queue.phase2Candidates[${idx}].clueUrl`);
  }

  // 4. 校验全部企业文件
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

    assert(c.id === expectedId && ID_RE.test(c.id), `${file}: id (${c.id}) 必须与文件名 (${expectedId}) 一致且合法`);
    for (const k of ["name", "fullName", "city", "track", "companyType"]) {
      assert(isNonEmptyString(c[k]), `${file}: 缺少 ${k}`);
    }
    assert(VALID_CITIES.has(c.city), `${file}: city 非法 (${c.city})`);
    assertValidDate(c.researchedAt, `${file}: researchedAt`);
    assertNonEmptyStringArray(c.districts, `${file}: districts`);
    assertNonEmptyStringArray(c.coreProducts, `${file}: coreProducts`);

    assert(c.fitForXmut && typeof c.fitForXmut === "object", `${file}: 缺少 fitForXmut`);
    assert(isNonEmptyString(c.fitForXmut.level) && isNonEmptyString(c.fitForXmut.reason), `${file}: fitForXmut 字段不完整`);

    assert(c.internshipAndRecruit && typeof c.internshipAndRecruit === "object", `${file}: 缺少 internshipAndRecruit`);
    assertNonEmptyStringArray(c.internshipAndRecruit.channels, `${file}: internshipAndRecruit.channels`);
    assert(isNonEmptyString(c.internshipAndRecruit.program), `${file}: 缺少 internshipAndRecruit.program`);
    assert(isNonEmptyString(c.internshipAndRecruit.timelineNote), `${file}: 缺少 internshipAndRecruit.timelineNote`);
    assertNonEmptyStringArray(c.internshipAndRecruit.benefits, `${file}: internshipAndRecruit.benefits`);

    assert(c.workConditionSummary && typeof c.workConditionSummary === "object", `${file}: 缺少 workConditionSummary`);
    for (const k of ["shiftWork", "travelLevel", "certNote"]) {
      assert(isNonEmptyString(c.workConditionSummary[k]), `${file}: workConditionSummary.${k} 不能为空`);
    }

    assert(c.prosAndCons && typeof c.prosAndCons === "object", `${file}: 缺少 prosAndCons`);
    assertNonEmptyStringArray(c.prosAndCons.pros, `${file}: prosAndCons.pros`);
    assertNonEmptyStringArray(c.prosAndCons.watchouts, `${file}: prosAndCons.watchouts`);

    const ip = c.internshipProfile;
    assert(ip && typeof ip === "object", `${file}: 缺少 internshipProfile`);
    for (const k of ["internType", "summer2MonthOk", "durationReq", "weeklyDays", "openWindowRef", "conversionPolicy", "stipendNote"]) {
      assert(isNonEmptyString(ip[k]), `${file}: internshipProfile.${k} 不能为空`);
    }
    assert(VALID_SUMMER_FITS.has(ip.summerFit), `${file}: internshipProfile.summerFit 非法 (${ip.summerFit})`);
    assert(VALID_WINDOW_GROUPS.has(ip.windowGroup), `${file}: internshipProfile.windowGroup 非法 (${ip.windowGroup})`);
    assert(VALID_EVIDENCE_STATUS.has(ip.evidenceStatus), `${file}: internshipProfile.evidenceStatus 非法 (${ip.evidenceStatus})`);

    assert(Array.isArray(c.sources) && c.sources.length > 0, `${file}: sources 不能为空`);
    c.sources.forEach((s, idx) => {
      assert(isNonEmptyString(s.label), `${file}: sources[${idx}].label 不能为空`);
      assertValidDate(s.date, `${file}: sources[${idx}].date`);
      assert(VALID_SOURCE_KINDS.has(s.sourceKind), `${file}: sources[${idx}].sourceKind 非法 (${s.sourceKind})`);
      if (s.sourceKind === "unverified-lead") {
        assert(s.url === null, `${file}: sources[${idx}] 为 unverified-lead 时 url 必须为 null`);
        assert(isNonEmptyString(s.lead), `${file}: sources[${idx}] 为 unverified-lead 时必须填写 lead 线索`);
      } else {
        assertSafeHttpsUrl(s.url, `${file}: sources[${idx}].url`);
      }
    });

    assert(Array.isArray(c.matchedRoles) && c.matchedRoles.length > 0, `${file}: matchedRoles 不能为空`);
    const seenRoleInCompany = new Set();
    for (const mr of c.matchedRoles) {
      assert(roleMap.has(mr.roleId), `${file}: 未知 roleId "${mr.roleId}"`);
      assert(!seenRoleInCompany.has(mr.roleId), `${file}: 同一企业存在重复 roleId "${mr.roleId}"`);
      seenRoleInCompany.add(mr.roleId);
      assert(VALID_JD_TYPES.has(mr.jdSourceType), `${file} (${mr.roleId}): jdSourceType 非法 (${mr.jdSourceType})`);
      for (const k of ["jdSourceLabel", "internTasks", "shiftWork", "travelLevel"]) {
        assert(isNonEmptyString(mr[k]), `${file} (${mr.roleId}): ${k} 不能为空`);
      }
      assertNonEmptyStringArray(mr.officialTitles, `${file} (${mr.roleId}).officialTitles`);
      assertNonEmptyStringArray(mr.responsibilities, `${file} (${mr.roleId}).responsibilities`);
      assertNonEmptyStringArray(mr.interviewFocus, `${file} (${mr.roleId}).interviewFocus`);

      assert(Array.isArray(mr.skills) && mr.skills.length > 0, `${file} (${mr.roleId}): skills 不能为空`);
      const seenSkillInRole = new Set();
      for (const sk of mr.skills) {
        assert(isNonEmptyString(sk.name), `${file} (${mr.roleId}): 技能缺少 name`);
        assert(catalogSkillMap.has(sk.name), `${file} (${mr.roleId}): 技能 "${sk.name}" 未在 data/skills_catalog.json 登记`);
        assert(!seenSkillInRole.has(sk.name), `${file} (${mr.roleId}): 同一岗位内技能 "${sk.name}" 重复`);
        seenSkillInRole.add(sk.name);
        const catEntry = catalogSkillMap.get(sk.name);
        assert(sk.category === catEntry.category, `${file} (${mr.roleId}): 技能 "${sk.name}" 分类应为 "${catEntry.category}"，当前为 "${sk.category}"`);
        assert(VALID_SKILL_LEVELS.has(sk.level), `${file} (${mr.roleId}): 技能 "${sk.name}" level 必须为 must 或 plus`);
        assert(isNonEmptyString(sk.detail), `${file} (${mr.roleId}): 技能 "${sk.name}" 缺少 detail`);
      }
    }

    // 生成结构化拆分城市列表（如 "厦门/泉州" -> ["厦门", "泉州"]）
    c.cities = c.city.split("/").map((x) => x.trim()).filter(Boolean);
    companies.push(c);
    companyMap.set(c.id, c);
  }

  // 5. 检查 queue 与 company 文件同步一致性
  for (const item of queue.items) {
    if (item.status === "done") {
      const c = companyMap.get(item.id);
      assert(c, `queue.json 标记 done 的企业 "${item.id}" 缺少 data/companies/${item.id}.json`);
      assert(c.name === item.name, `${item.id}: 档案 name ("${c.name}") 与 queue ("${item.name}") 不一致`);
      assert(c.city === item.city, `${item.id}: 档案 city ("${c.city}") 与 queue ("${item.city}") 不一致`);
      assert(c.track === item.track, `${item.id}: 档案 track ("${c.track}") 与 queue ("${item.track}") 不一致`);
      assert(c.researchedAt === item.researchedAt, `${item.id}: 档案 researchedAt ("${c.researchedAt}") 与 queue ("${item.researchedAt}") 不一致`);
    } else {
      assert(!companyMap.has(item.id), `queue.json 标记 pending 的企业 "${item.id}" 不应已有落盘档案`);
    }
  }
  for (const c of companies) {
    const qItem = queue.items.find((i) => i.id === c.id);
    assert(qItem && qItem.status === "done", `已落盘企业 "${c.id}" 必须在 queue.json 中登记且 status 为 "done"`);
  }

  // 6. 校验 changelog.json 及对应日报文件
  assert(Array.isArray(changelog) && changelog.length > 0, "data/changelog.json 必须为非空数组");
  const seenBatchIds = new Set();
  const seenReportFiles = new Set();
  let prevDay = 0;
  const dailyReports = [];
  for (const [idx, log] of changelog.entries()) {
    assert(Number.isInteger(log.day) && log.day > prevDay, `changelog[${idx}].day 必须严格递增正整数`);
    prevDay = log.day;
    assertValidDate(log.date, `changelog[${idx}].date`);
    assert(isNonEmptyString(log.batchId) && ID_RE.test(log.batchId), `changelog[${idx}].batchId 不合法`);
    assert(!seenBatchIds.has(log.batchId), `changelog[${idx}].batchId 重复: ${log.batchId}`);
    seenBatchIds.add(log.batchId);
    assert(Array.isArray(log.addedCompanies) && log.addedCompanies.length > 0, `changelog[${idx}].addedCompanies 不能为空`);
    for (const cid of log.addedCompanies) {
      assert(companyMap.has(cid), `changelog[${idx}].addedCompanies 引用了未入库企业: ${cid}`);
    }
    assert(isNonEmptyString(log.headline), `changelog[${idx}].headline 不能为空`);
    assert(isNonEmptyString(log.keyTakeaway), `changelog[${idx}].keyTakeaway 不能为空`);
    assert(Object.hasOwn(log, "reportFile"), `changelog[${idx}] 必须显式包含 reportFile 字段（可为 null 或 daily-*.md）`);

    if (log.reportFile !== null) {
      assert(
        isNonEmptyString(log.reportFile) &&
          !log.reportFile.includes("/") &&
          !log.reportFile.includes("\\") &&
          /^daily-[a-z0-9\-]+\.md$/.test(log.reportFile),
        `changelog[${idx}].reportFile 必须为 reports/ 下的小写 daily-*.md 文件名`
      );
      const reportKey = log.reportFile.toLowerCase();
      assert(!seenReportFiles.has(reportKey), `changelog[${idx}].reportFile 与历史批次重复: ${log.reportFile}`);
      seenReportFiles.add(reportKey);
      const rPath = path.join(REPORTS_DIR, log.reportFile);
      assert(fs.existsSync(rPath), `changelog[${idx}] 指向的日报文件不存在: ${log.reportFile}`);
      const content = fs.readFileSync(rPath, "utf8").trim();
      const titleMatch = content.match(/^#\s+(.+)$/m);
      dailyReports.push({
        batchId: log.batchId,
        day: log.day,
        date: log.date,
        file: log.reportFile,
        title: titleMatch ? titleMatch[1].trim() : log.headline,
        headline: log.headline,
        addedCompanies: log.addedCompanies,
        content
      });
    }
  }

  // 按 queue order 排序企业列表
  const orderMap = new Map(queue.items.map((i) => [i.id, i.order]));
  companies.sort((a, b) => (orderMap.get(a.id) ?? 999) - (orderMap.get(b.id) ?? 999));

  return { roles, roleMap, queue, changelog, companies, skillsCatalog, catalogSkillMap, dailyReports };
}

function buildAggregations({ roles, queue, changelog, companies, skillsCatalog, dailyReports }) {
  const totalCompanies = companies.length;
  const totalQueue = queue.items.length;

  const cityCounts = {};
  const trackCounts = {};
  const summerFitCounts = {
    "fit-8w": 0,
    "short-4w": 0,
    "need-3m": 0,
    "negotiable": 0,
    "long-or-senior": 0
  };
  let summerSupportCount = 0;
  let totalMatchedRoleInstances = 0;
  let realInternJdRoles = 0;
  let campusRefRoles = 0;

  const overallSkillMap = new Map();
  const roleStatsMap = new Map();

  for (const r of roles) {
    roleStatsMap.set(r.id, {
      roleId: r.id,
      roleName: r.name,
      shortName: r.shortName,
      category: r.category,
      companyIds: new Set(),
      companies: [],
      skillMap: new Map(),
      travelCounts: {},
      shiftCounts: {}
    });
  }

  for (const company of companies) {
    for (const ct of company.cities) {
      cityCounts[ct] = (cityCounts[ct] || 0) + 1;
    }
    trackCounts[company.track] = (trackCounts[company.track] || 0) + 1;
    const sf = company.internshipProfile.summerFit;
    summerFitCounts[sf] = (summerFitCounts[sf] || 0) + 1;
    if (sf === "fit-8w") {
      summerSupportCount += 1;
    }

    // 单企业内技能去重集合（must 优先于 plus，用于计算真实企业级必备/加分覆盖）
    const companySkillSeen = new Map();

    for (const mr of company.matchedRoles) {
      totalMatchedRoleInstances += 1;
      if (mr.jdSourceType === "real-intern-jd") realInternJdRoles += 1;
      else campusRefRoles += 1;

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
          jdSourceType: mr.jdSourceType,
          detail: sk.detail
        });

        if (!overallSkillMap.has(sk.name)) {
          overallSkillMap.set(sk.name, {
            name: sk.name,
            category: sk.category,
            companyIds: new Set(),
            mustCompanyIds: new Set(),
            plusOnlyCompanyIds: new Set(),
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
          jdSourceType: mr.jdSourceType,
          detail: sk.detail
        });

        const prev = companySkillSeen.get(sk.name);
        if (!prev || sk.level === "must") {
          companySkillSeen.set(sk.name, sk.level);
        }
      }
    }

    for (const [skName, topLevel] of companySkillSeen.entries()) {
      const os = overallSkillMap.get(skName);
      if (topLevel === "must") {
        os.mustCompanyIds.add(company.id);
        os.plusOnlyCompanyIds.delete(company.id);
      } else if (!os.mustCompanyIds.has(company.id)) {
        os.plusOnlyCompanyIds.add(company.id);
      }
    }
  }

  const skillStatsOverall = Array.from(overallSkillMap.values())
    .map((s) => ({
      name: s.name,
      category: s.category,
      companyCount: s.companyIds.size,
      companyPct: Math.round((s.companyIds.size / totalCompanies) * 100),
      mustCompanyCount: s.mustCompanyIds.size,
      plusCompanyCount: s.plusOnlyCompanyIds.size,
      roleCount: s.roleIds.size,
      roleIds: Array.from(s.roleIds),
      mustRoleCount: s.mustRoleCount,
      plusRoleCount: s.plusRoleCount,
      totalRoleMentions: s.totalRoleMentions,
      evidences: s.evidences
    }))
    .sort((a, b) => {
      if (b.companyCount !== a.companyCount) return b.companyCount - a.companyCount;
      if (b.mustCompanyCount !== a.mustCompanyCount) return b.mustCompanyCount - a.mustCompanyCount;
      if (b.mustRoleCount !== a.mustRoleCount) return b.mustRoleCount - a.mustRoleCount;
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
    schemaVersion: 2,
    generatedAt: shanghaiToday(),
    overview: {
      totalCompanies,
      totalQueue,
      pendingQueue: queue.items.filter((i) => i.status !== "done").length,
      completionPct: Math.round((totalCompanies / totalQueue) * 100),
      totalMatchedRoleInstances,
      realInternJdRoles,
      campusRefRoles,
      summerSupportCount,
      summerFitCounts,
      uniqueSkillCount: skillStatsOverall.length,
      cityCounts,
      trackCounts
    },
    roles,
    queue,
    changelog,
    companies,
    skillsCatalog,
    dailyReports: [...dailyReports].reverse(),
    skillCategories,
    skillStatsOverall,
    roleStats
  };
}

function mdCell(text) {
  return String(text ?? "").replaceAll("|", "\\|").replaceAll("\n", " ");
}

function writeSummaryMarkdown(bundle) {
  const { overview, skillStatsOverall, roleStats, companies, changelog } = bundle;
  const sf = overview.summerFitCounts;
  const lines = [];

  lines.push("# 厦泉电气 2027 暑期/日常实习岗位技能频次总榜（v2 数据契约自动汇总）");
  lines.push("");
  lines.push(
    `> 生成日期（Asia/Shanghai）：${overview.generatedAt || bundle.generatedAt} ｜ 已深挖：**${overview.totalCompanies} / ${overview.totalQueue}** 家（明确支持暑期 8 周 **${sf["fit-8w"]}** 家 · 4 周短项目 **${sf["short-4w"]}** 家 · 需 3 月+ **${sf["need-3m"]}** 家 · 须协商 **${sf["negotiable"]}** 家 · 长期/顶岗 **${sf["long-or-senior"]}** 家）｜ 岗位条目：**${overview.totalMatchedRoleInstances}** 条（真实实习 JD **${overview.realInternJdRoles}** 条，校招折算 **${overview.campusRefRoles}** 条）｜ 归集技能：**${overview.uniqueSkillCount}** 项`
  );
  lines.push("");
  lines.push("## 一、全库跨企业实习技能热力总榜（企业去重覆盖 + 岗位提及双口径）");
  lines.push("");
  lines.push("| 排名 | 技能名称 | 类别 | 覆盖企业数 | 企业覆盖率 | 必备企业(Must) | 仅加分企业 | 岗位提及(Must/Plus) |");
  lines.push("| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: |");

  skillStatsOverall.forEach((sk, idx) => {
    lines.push(
      `| ${idx + 1} | **${mdCell(sk.name)}** | ${mdCell(sk.category)} | ${sk.companyCount}/${overview.totalCompanies} | ${sk.companyPct}% | ${sk.mustCompanyCount} | ${sk.plusCompanyCount} | ${sk.mustRoleCount} / ${sk.plusRoleCount} |`
    );
  });

  lines.push("");
  lines.push("## 二、五大探索岗位技能拆解进度");
  lines.push("");

  for (const rs of roleStats) {
    lines.push(`### ${rs.roleName}（已覆盖 ${rs.companyCount} 家企业）`);
    if (rs.companyCount === 0) {
      lines.push("- 当前已深挖企业暂未覆盖该岗位。");
      lines.push("");
      continue;
    }
    lines.push(`- **已覆盖企业**：${rs.companies.map((c) => `${c.name}（${c.city}）`).join("、")}`);
    lines.push("- **高频核心技能**：");
    for (const sk of rs.skills) {
      const parts = [];
      if (sk.mustCount > 0) parts.push(`必备×${sk.mustCount}`);
      if (sk.plusCount > 0) parts.push(`加分×${sk.plusCount}`);
      lines.push(`  - **${sk.name}**（${sk.count}/${rs.companyCount}，${sk.pct}%，${parts.join(" / ")}）`);
    }
    lines.push("");
  }

  lines.push("## 三、已收录企业一览");
  lines.push("");
  lines.push("| 企业 | 城市 | 赛道 | 暑期 8 周适配 | 覆盖岗位 | 更新日期 |");
  lines.push("| :--- | :---: | :--- | :---: | :--- | :---: |");
  const roleNameMap = new Map(bundle.roles.map((r) => [r.id, r.shortName]));
  for (const c of companies) {
    const rNames = c.matchedRoles.map((m) => roleNameMap.get(m.roleId) || m.roleId).join(" / ");
    lines.push(
      `| ${mdCell(c.name)} | ${mdCell(c.city)} | ${mdCell(c.track)} | ${mdCell(c.internshipProfile.summerFit)} | ${mdCell(rNames)} | ${mdCell(c.researchedAt)} |`
    );
  }

  lines.push("");
  lines.push("## 四、每日深挖动态日志");
  lines.push("");
  for (const log of [...changelog].reverse()) {
    lines.push(`- **Day ${log.day}（${log.date} · ${log.batchId}）**：${log.headline} — ${log.keyTakeaway}`);
  }
  lines.push("");

  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(path.join(REPORTS_DIR, "summary_skills_ranking.md"), lines.join("\n"), "utf8");
}

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex").slice(0, 8);
}

function syncWebToDocs() {
  fs.mkdirSync(DOCS_DIR, { recursive: true });
  for (const file of ["styles.css", "app.js", "data-bundle.js"]) {
    const src = path.join(WEB_DIR, file);
    assert(fs.existsSync(src), `同步 docs/ 失败：缺少源文件 web/${file}`);
    fs.copyFileSync(src, path.join(DOCS_DIR, file));
  }
  const indexSrc = path.join(WEB_DIR, "index.html");
  assert(fs.existsSync(indexSrc), "同步 docs/ 失败：缺少源文件 web/index.html");

  const cssV = fileHash(path.join(WEB_DIR, "styles.css"));
  const dataV = fileHash(path.join(WEB_DIR, "data-bundle.js"));
  const appV = fileHash(path.join(WEB_DIR, "app.js"));
  const rawHtml = fs.readFileSync(indexSrc, "utf8");
  const html = rawHtml
    .replace('./styles.css"', `./styles.css?v=${cssV}"`)
    .replace('./data-bundle.js"', `./data-bundle.js?v=${dataV}"`)
    .replace('./app.js"', `./app.js?v=${appV}"`);
  assert(
    html.includes(`./styles.css?v=${cssV}`) &&
      html.includes(`./data-bundle.js?v=${dataV}`) &&
      html.includes(`./app.js?v=${appV}`),
    "docs/index.html 资源哈希注入未完整生效，请检查 web/index.html 引用路径"
  );
  fs.writeFileSync(path.join(DOCS_DIR, "index.html"), html, "utf8");
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

  console.log("✅ v2 数据契约校验与构建全部通过！");
  console.log(`   - 已收录企业：${bundle.overview.totalCompanies} / ${bundle.overview.totalQueue} 家（明确支持暑期 8 周 ${bundle.overview.summerSupportCount} 家）`);
  console.log(`   - 覆盖岗位条目：${bundle.overview.totalMatchedRoleInstances} 条（真实实习 JD ${bundle.overview.realInternJdRoles} · 校招折算 ${bundle.overview.campusRefRoles}）`);
  console.log(`   - 归集标准技能：${bundle.overview.uniqueSkillCount} 项 · 已关联日报：${bundle.dailyReports.length} 期`);
  console.log("   - 已同步输出：web/data-bundle.js、docs/（含哈希防缓存）与 reports/summary_skills_ranking.md");
}

main();
