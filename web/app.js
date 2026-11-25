(() => {
  "use strict";

  const DATA = window.__RADAR_DATA__;
  if (!DATA || DATA.schemaVersion !== 2) {
    document.body.innerHTML =
      "<main style='padding:24px'><h2>数据包未加载或版本不匹配</h2><p>请先运行 <code>node scripts/build_and_verify.mjs</code> 重新生成 v2 数据包。</p></main>";
    return;
  }

  const STORAGE_THEME = "xq-radar-color-scheme";
  const STORAGE_SKILLS = "xq-radar-skill-progress-v1";
  const STORAGE_TRACKER = "xq-radar-app-tracker-v2";
  const VALID_SKILL_STATES = new Set(["todo", "learning", "mastered"]);
  const VALID_TRACKER_STATES = new Set(["none", "watch", "verify", "applied", "interview", "offer"]);
  const FORBIDDEN_KEYS = new Set(["__proto__", "constructor", "prototype"]);

  const TRACKER_LABELS = {
    none: "未标记",
    watch: "重点留意",
    verify: "待核实当期公告",
    applied: "已投递",
    interview: "笔试 / 面试中",
    offer: "已拿结果"
  };

  const SUMMER_FIT_META = {
    "fit-8w": { label: "支持暑期约 8 周", badgeClass: "badge-ok" },
    "short-4w": { label: "4 周短项目（满 8 周需协商）", badgeClass: "badge-warn" },
    "need-3m": { label: "倾向 3 月+（6–9 月）", badgeClass: "badge-warn" },
    negotiable: { label: "无统招 · 可直联协商", badgeClass: "badge-neutral" },
    "long-or-senior": { label: "大四顶岗 / 长期实习", badgeClass: "badge-neutral" }
  };

  const WINDOW_GROUP_META = [
    { id: "spring-main", title: "3–5 月春季暑期主窗口（优先留意）", hint: "参考 2025/2026 招聘季，通常在春季集中启动大三暑期实习网申或内推" },
    { id: "may-early", title: "4–5 月专项暑期 / 提前批窗口", hint: "参考往年集中于春末夏初开启专项暑期营或 Offer 直通车" },
    { id: "rolling", title: "春季直联 / 全年滚动日常渠道", hint: "较少设大规模暑期专场，建议直接联系 HR 或关注高校春招双选" },
    { id: "autumn-watch", title: "7–11 月秋招提前批 / 大四顶岗观察", hint: "当前以毕业顶岗或正式校招为主，大三暑期可作为补充观察" }
  ];

  const SOURCE_KIND_LABELS = {
    "official-portal": "企业官方招聘门户",
    "intern-notice": "公开实习项目公告",
    "campus-notice": "高校就业网招聘公告",
    "unverified-lead": "历史线索（待补直链）"
  };

  const roleMap = new Map(DATA.roles.map((r) => [r.id, r]));
  const companyMap = new Map(DATA.companies.map((c) => [c.id, c]));
  const catalogMap = new Map((DATA.skillsCatalog?.skills || []).map((s) => [s.name, s]));

  function sanitizePlainMap(raw, validSet) {
    const out = {};
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return out;
    for (const [k, v] of Object.entries(raw)) {
      if (FORBIDDEN_KEYS.has(k) || typeof k !== "string" || !k.trim()) continue;
      if (validSet.has(v)) out[k] = v;
    }
    return out;
  }

  function defaultSkillProgress() {
    return {
      "电路与模数电基础": "learning",
      "电力电子拓扑（整流/斩波/逆变）": "learning",
      "示波器与万用表实操": "learning",
      "电气原理图识读": "learning"
    };
  }

  function loadSkillProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_SKILLS);
      if (raw) {
        const parsed = sanitizePlainMap(JSON.parse(raw), VALID_SKILL_STATES);
        if (Object.keys(parsed).length > 0) return parsed;
      }
    } catch (_) {}
    return defaultSkillProgress();
  }

  function loadAppTracker() {
    try {
      const raw = localStorage.getItem(STORAGE_TRACKER);
      if (raw) return sanitizePlainMap(JSON.parse(raw), VALID_TRACKER_STATES);
    } catch (_) {}
    return {};
  }

  const state = {
    compareIds: DATA.companies.slice(0, Math.min(3, DATA.companies.length)).map((c) => c.id),
    skillProgress: loadSkillProgress(),
    appTracker: loadAppTracker(),
    skillRole: "all",
    skillCategory: "all",
    skillStatus: "all",
    companyCity: "all",
    companyTrack: "all",
    companyRole: "all",
    companySummer: "all",
    companyJdOnly: false,
    companyQuery: "",
    activeReportId: DATA.dailyReports?.[0]?.batchId || null,
    activeDialogCompanyId: null
  };

  function saveSkillProgress() {
    try {
      localStorage.setItem(STORAGE_SKILLS, JSON.stringify(state.skillProgress));
    } catch (_) {}
  }

  function saveAppTracker() {
    try {
      localStorage.setItem(STORAGE_TRACKER, JSON.stringify(state.appTracker));
    } catch (_) {}
  }

  function getSkillState(skillName) {
    return state.skillProgress[skillName] || "todo";
  }

  function getTrackerState(companyId) {
    return state.appTracker[companyId] || "none";
  }

  function escapeHtml(text) {
    return String(text ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function safeHttpsUrl(rawUrl) {
    if (typeof rawUrl !== "string" || !rawUrl.trim()) return null;
    try {
      const u = new URL(rawUrl);
      if (u.protocol !== "https:" || u.username || u.password) return null;
      return u.href;
    } catch {
      return null;
    }
  }

  let noticeTimer = null;
  function showNotice(msg) {
    const el = document.getElementById("liveNotice");
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => {
      el.hidden = true;
    }, 4500);
  }

  /* =========================================================================
     1. 主题切换 & Dialog 兼容
     ========================================================================= */
  function initThemeToggle() {
    const meta = document.querySelector('meta[name="color-scheme"]');
    const btn = document.getElementById("themeToggle");
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const getSystemScheme = () => (mq.matches ? "dark" : "light");
    const getStoredScheme = () => {
      try {
        return localStorage.getItem(STORAGE_THEME);
      } catch (_) {
        return null;
      }
    };

    btn.addEventListener("click", () => {
      const stored = getStoredScheme();
      const rendered = stored || getSystemScheme();
      const target = rendered === "dark" ? "light" : "dark";
      if (target === getSystemScheme()) {
        try {
          localStorage.removeItem(STORAGE_THEME);
        } catch (_) {}
        meta.content = "light dark";
      } else {
        try {
          localStorage.setItem(STORAGE_THEME, target);
        } catch (_) {}
        meta.content = target;
      }
    });
  }

  function attachDialogFallback(dialog) {
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      dialog.addEventListener("click", (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const inside =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (!inside) dialog.close();
      });
    }
  }

  /* =========================================================================
     2. Tabs 导航
     ========================================================================= */
  function initTabs() {
    const tablist = document.getElementById("mainTablist");
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const panels = tabs.map((t) => document.getElementById(t.dataset.panel));

    function activateTab(targetTab, shouldFocus = false) {
      tabs.forEach((tab, idx) => {
        const isSelected = tab === targetTab;
        tab.setAttribute("aria-selected", String(isSelected));
        tab.tabIndex = isSelected ? 0 : -1;
        const panel = panels[idx];
        if (isSelected) {
          panel.removeAttribute("hidden");
          panel.tabIndex = 0;
        } else {
          panel.hidden = "until-found";
          panel.removeAttribute("tabindex");
        }
      });
      targetTab.scrollIntoView({ block: "nearest", inline: "nearest" });
      if (shouldFocus) targetTab.focus();
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activateTab(tab));
      tab.addEventListener("keydown", (event) => {
        let nextIndex = null;
        if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") nextIndex = 0;
        else if (event.key === "End") nextIndex = tabs.length - 1;
        if (nextIndex !== null) {
          event.preventDefault();
          activateTab(tabs[nextIndex], true);
        }
      });
    });

    panels.forEach((panel, idx) => {
      panel.addEventListener("beforematch", () => activateTab(tabs[idx], false));
    });

    if (!CSS.supports("animation-timeline", "scroll()") && "IntersectionObserver" in window) {
      const first = tabs[0];
      const last = tabs[tabs.length - 1];
      const obs = new IntersectionObserver(
        (entries) => {
          for (const { target, intersectionRatio } of entries) {
            tablist.classList.toggle(target === first ? "more-start" : "more-end", intersectionRatio < 1);
          }
        },
        { root: tablist, threshold: 1, rootMargin: "1px" }
      );
      obs.observe(first);
      obs.observe(last);
    }

    return {
      activateByPanelId: (id) => {
        const match = tabs.find((t) => t.dataset.panel === id);
        if (match) activateTab(match, true);
      }
    };
  }

  /* =========================================================================
     3. KPI 概览
     ========================================================================= */
  function renderKpis() {
    const ov = DATA.overview;
    const sf = ov.summerFitCounts || {};
    const citySummary = Object.entries(ov.cityCounts)
      .map(([k, v]) => `${k}命中 ${v}`)
      .join(" · ");
    const masteredCount = DATA.skillStatsOverall.filter((s) => getSkillState(s.name) === "mastered").length;
    const learningCount = DATA.skillStatsOverall.filter((s) => getSkillState(s.name) === "learning").length;
    const trackedCount = Object.values(state.appTracker).filter((v) => v !== "none").length;

    document.getElementById("kpiGrid").innerHTML = `
      <div class="kpi-card">
        <div class="kpi-label">已深挖企业 / 队列</div>
        <div class="kpi-value">${ov.totalCompanies} <span style="font-size:0.9rem;color:var(--text-muted)">/ ${ov.totalQueue}</span></div>
        <div class="kpi-sub">${escapeHtml(citySummary)} · 支持 8 周 ${sf["fit-8w"] || 0} 家</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">已拆解岗位方向</div>
        <div class="kpi-value">${ov.totalMatchedRoleInstances}</div>
        <div class="kpi-sub">真实实习 JD ${ov.realInternJdRoles} · 校招折算 ${ov.campusRefRoles}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">标准技能词库</div>
        <div class="kpi-value">${ov.uniqueSkillCount}</div>
        <div class="kpi-sub">含课内课程与零硬件练习映射</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">我的备战进度</div>
        <div class="kpi-value">${masteredCount} <span style="font-size:0.9rem;color:var(--text-muted)">已掌握</span></div>
        <div class="kpi-sub">学习中 ${learningCount} · 跟踪企业 ${trackedCount} 家 · ${escapeHtml(DATA.generatedAt)}</div>
      </div>
    `;
  }

  /* =========================================================================
     4. 技能热力榜 & 课程/Multisim 练习
     ========================================================================= */
  function populateFilters() {
    const skillRoleSel = document.getElementById("skillRoleFilter");
    const companyRoleSel = document.getElementById("companyRoleFilter");
    DATA.roleStats.forEach((r) => {
      skillRoleSel.append(new Option(`${r.roleName}（已覆盖 ${r.companyCount} 企）`, r.roleId));
      companyRoleSel.append(new Option(r.shortName, r.roleId));
    });

    const catSel = document.getElementById("skillCategoryFilter");
    DATA.skillCategories.forEach((c) => catSel.append(new Option(c, c)));

    const citySel = document.getElementById("companyCityFilter");
    Object.keys(DATA.overview.cityCounts).forEach((city) => citySel.append(new Option(city, city)));

    const trackSel = document.getElementById("companyTrackFilter");
    Object.keys(DATA.overview.trackCounts).forEach((t) => trackSel.append(new Option(t, t)));
  }

  function getActiveSkillList() {
    if (state.skillRole === "all") {
      return {
        denominator: DATA.overview.totalCompanies,
        unitLabel: "家企业",
        items: DATA.skillStatsOverall.map((s) => ({
          name: s.name,
          category: s.category,
          count: s.companyCount,
          pct: s.companyPct,
          mustCompanyCount: s.mustCompanyCount,
          plusCompanyCount: s.plusCompanyCount,
          mustCount: s.mustRoleCount,
          plusCount: s.plusRoleCount,
          evidences: s.evidences
        }))
      };
    }

    const rStat = DATA.roleStats.find((r) => r.roleId === state.skillRole);
    return {
      denominator: rStat ? rStat.companyCount : 0,
      unitLabel: "家匹配企业",
      items: (rStat ? rStat.skills : []).map((s) => ({
        name: s.name,
        category: s.category,
        count: s.count,
        pct: s.pct,
        mustCompanyCount: s.mustCount,
        plusCompanyCount: s.plusCount,
        mustCount: s.mustCount,
        plusCount: s.plusCount,
        evidences: s.companyEntries.map((e) => ({
          companyId: e.companyId,
          companyName: e.companyName,
          roleId: rStat.roleId,
          level: e.level,
          jdSourceType: e.jdSourceType,
          detail: e.detail
        }))
      }))
    };
  }

  function renderSkillsPanel() {
    const { denominator, unitLabel, items } = getActiveSkillList();

    const filtered = items.filter((s) => {
      if (state.skillCategory !== "all" && s.category !== state.skillCategory) return false;
      if (state.skillStatus !== "all" && getSkillState(s.name) !== state.skillStatus) return false;
      return true;
    });

    const totalAll = items.length;
    const mastered = items.filter((s) => getSkillState(s.name) === "mastered").length;
    const learning = items.filter((s) => getSkillState(s.name) === "learning").length;
    const todo = totalAll - mastered - learning;

    document.getElementById("selfCheckSummary").innerHTML = `
      <span class="badge badge-ok">已掌握 ${mastered}</span>
      <span class="badge badge-warn">学习中 ${learning}</span>
      <span class="badge badge-must">未开始 ${todo}</span>
    `;

    const hotGaps = items.filter((s) => s.mustCount > 0 && getSkillState(s.name) === "todo").slice(0, 4);
    const nextLearning = items.filter((s) => s.mustCount > 0 && getSkillState(s.name) === "learning").slice(0, 3);
    const gapEl = document.getElementById("gapCallout");
    if (denominator === 0) {
      gapEl.innerHTML = `<strong>样本提示：</strong>该实习方向暂未有已深挖企业命中，待队列推进后自动生成。`;
    } else if (denominator === 1) {
      gapEl.innerHTML = `<strong>样本有限提醒（仅 1 家企业）：</strong>当前该方向仅基于 1 家样本统计，待后续补充泉州/PLC 企业后再做横向推论。`;
    } else if (hotGaps.length > 0) {
      gapEl.innerHTML = `<strong>2027 春季投递前优先补齐（未开始的高频底线技能）：</strong>${hotGaps
        .map((g) => `<strong>${escapeHtml(g.name)}</strong>（${g.count}/${denominator}）`)
        .join("、")}。`;
    } else if (nextLearning.length > 0) {
      gapEl.innerHTML = `<strong>当前已无「未开始」的高频底线缺口：</strong>建议继续推进学习中项（${nextLearning
        .map((g) => escapeHtml(g.name))
        .join("、")}），点击技能名可做对应零硬件练习。`;
    } else {
      gapEl.innerHTML = `<strong>备战状态良好：</strong>当前视角下的全部底线技能均已标记为「已掌握」。`;
    }

    const host = document.getElementById("skillBarsContainer");
    if (filtered.length === 0) {
      host.innerHTML = `<div class="empty-state">当前筛选条件下暂无技能记录，请切换分类或掌握状态查看。</div>`;
      return;
    }

    host.innerHTML = filtered
      .map((sk) => {
        const curState = getSkillState(sk.name);
        const isHot = sk.pct >= 80 && sk.mustCount > 0;
        const catInfo = catalogMap.get(sk.name);
        const companyNames = Array.from(new Set(sk.evidences.map((e) => e.companyName))).join("、");
        const isOverall = state.skillRole === "all";
        const levelSummary = isOverall
          ? `必备 ${sk.mustCompanyCount} 企 / 仅加分 ${sk.plusCompanyCount} 企（岗位提及 ${sk.mustCount}/${sk.plusCount}）`
          : `${sk.mustCount > 0 ? `底线×${sk.mustCount}` : ""}${sk.mustCount > 0 && sk.plusCount > 0 ? " / " : ""}${sk.plusCount > 0 ? `加分×${sk.plusCount}` : ""}`;

        return `
          <div class="skill-row">
            <div class="skill-main">
              <div class="skill-head">
                <button type="button" class="skill-name-btn" data-open-skill="${escapeHtml(sk.name)}">${escapeHtml(sk.name)}</button>
                <span class="badge badge-neutral">${escapeHtml(sk.category)}</span>
                ${catInfo ? `<span class="badge badge-accent">${escapeHtml(catInfo.microTask.mode)}</span>` : ""}
                <span class="badge ${sk.mustCount > 0 ? "badge-must" : "badge-neutral"}">${escapeHtml(levelSummary)}</span>
              </div>
              <div class="skill-bar-track" aria-hidden="true">
                <div class="skill-bar-fill ${isHot ? "skill-bar-fill--hot" : ""}" style="width:${Math.max(sk.pct, 6)}%"></div>
              </div>
              <div class="skill-meta-line">
                命中 <strong>${sk.count} / ${denominator}</strong> ${unitLabel}（<strong>${sk.pct}%</strong>） · 涉及：${escapeHtml(companyNames)}
                ${catInfo ? ` · 课程：${escapeHtml(catInfo.courses.join(" / "))}` : ""}
              </div>
            </div>
            <div class="status-pills" role="group" aria-label="${escapeHtml(sk.name)} 掌握进度">
              <button type="button" class="status-btn" data-skill="${escapeHtml(sk.name)}" data-state="todo" aria-pressed="${curState === "todo"}">未开始</button>
              <button type="button" class="status-btn" data-skill="${escapeHtml(sk.name)}" data-state="learning" aria-pressed="${curState === "learning"}">学习中</button>
              <button type="button" class="status-btn" data-skill="${escapeHtml(sk.name)}" data-state="mastered" aria-pressed="${curState === "mastered"}">已掌握</button>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function openSkillDialog(skillName) {
    const overall = DATA.skillStatsOverall.find((s) => s.name === skillName);
    if (!overall) return;
    const catInfo = catalogMap.get(skillName);

    const roleFiltered =
      state.skillRole !== "all"
        ? overall.evidences.filter((ev) => ev.roleId === state.skillRole)
        : overall.evidences;
    const displayEvidences = roleFiltered.length > 0 ? roleFiltered : overall.evidences;

    document.getElementById("skillDialogMeta").textContent = `${overall.category} · 覆盖 ${overall.companyCount}/${DATA.overview.totalCompanies} 企（必备 ${overall.mustCompanyCount} 企 · 仅加分 ${overall.plusCompanyCount} 企）`;
    document.getElementById("skillDialogTitle").textContent = overall.name;

    const taskHtml = catInfo
      ? `
        <div class="micro-task-box">
          <h4>零硬件备战小练习（${escapeHtml(catInfo.microTask.mode)} · 关联课程：${escapeHtml(catInfo.courses.join("、"))}）</h4>
          <p style="margin-block-end:6px">${escapeHtml(catInfo.microTask.task)}</p>
          <p class="muted" style="margin:0"><strong>建议产出物：</strong>${escapeHtml(catInfo.microTask.deliverable)}</p>
        </div>
      `
      : "";

    const evidenceHtml = displayEvidences
      .map((ev) => {
        const rName = roleMap.get(ev.roleId)?.shortName || ev.roleId;
        const lvBadge =
          ev.level === "must"
            ? `<span class="badge badge-must">底线要求</span>`
            : `<span class="badge badge-accent">加分 / 进阶</span>`;
        const srcBadge =
          ev.jdSourceType === "real-intern-jd"
            ? `<span class="badge badge-ok">往年实习 JD</span>`
            : `<span class="badge badge-warn">校招参照折算</span>`;
        return `
          <div class="dialog-section">
            <div class="badge-row" style="margin-block-end:6px">
              <strong>${escapeHtml(ev.companyName)}</strong>
              <span class="badge badge-neutral">${escapeHtml(rName)}</span>
              ${lvBadge}
              ${srcBadge}
            </div>
            <p style="margin:0">${escapeHtml(ev.detail)}</p>
          </div>
        `;
      })
      .join("");

    document.getElementById("skillDialogBody").innerHTML = taskHtml + evidenceHtml;
    document.getElementById("skillDialog").showModal();
  }

  /* =========================================================================
     5. 企业雷达库（双基地、8 周精细筛选、结构化搜索、准备度）
     ========================================================================= */
  function computeRoleReadiness(mr) {
    const mustSkills = mr.skills.filter((s) => s.level === "must");
    const mastered = mustSkills.filter((s) => getSkillState(s.name) === "mastered").length;
    const learning = mustSkills.filter((s) => getSkillState(s.name) === "learning").length;
    return { total: mustSkills.length, mastered, learning };
  }

  function companySearchText(c) {
    const parts = [
      c.name,
      c.fullName,
      c.city,
      c.track,
      c.companyType,
      ...(c.districts || []),
      ...(c.coreProducts || []),
      c.internshipProfile.internType,
      c.internshipProfile.summer2MonthOk,
      c.internshipProfile.conversionPolicy,
      c.fitForXmut.level,
      c.fitForXmut.reason
    ];
    for (const mr of c.matchedRoles) {
      parts.push(...mr.officialTitles, mr.internTasks, ...mr.responsibilities);
      for (const sk of mr.skills) {
        parts.push(sk.name, sk.detail);
      }
    }
    return parts.join(" ").toLowerCase();
  }

  function renderCompaniesPanel() {
    const q = state.companyQuery.trim().toLowerCase();
    const list = DATA.companies.filter((c) => {
      if (state.companyCity !== "all" && !(c.cities || [c.city]).includes(state.companyCity)) return false;
      if (state.companyTrack !== "all" && c.track !== state.companyTrack) return false;
      if (state.companyRole !== "all" && !c.matchedRoles.some((m) => m.roleId === state.companyRole)) return false;
      if (state.companySummer !== "all" && c.internshipProfile.summerFit !== state.companySummer) return false;
      if (state.companyJdOnly && !c.matchedRoles.some((m) => m.jdSourceType === "real-intern-jd")) return false;
      if (q && !companySearchText(c).includes(q)) return false;
      return true;
    });

    document.getElementById("companyResultCount").textContent = `当前命中 ${list.length} / ${DATA.companies.length} 家`;

    const host = document.getElementById("companyCardsGrid");
    if (list.length === 0) {
      host.innerHTML = `
        <div class="empty-state">
          <div>没有符合当前组合条件的企业，请尝试放宽筛选或清空关键词。</div>
          <button type="button" id="emptyResetBtn" class="btn btn-primary btn-sm">清空全部筛选</button>
        </div>
      `;
      return;
    }

    host.innerHTML = list
      .map((c) => {
        const checked = state.compareIds.includes(c.id);
        const ip = c.internshipProfile;
        const sfMeta = SUMMER_FIT_META[ip.summerFit] || { label: "待核实", badgeClass: "badge-neutral" };
        const hasRealInternJd = c.matchedRoles.some((m) => m.jdSourceType === "real-intern-jd");

        // 若选择了特定方向，只显示对应方向的准备度和底线技能；否则汇总全企
        const targetRoles =
          state.companyRole !== "all"
            ? c.matchedRoles.filter((m) => m.roleId === state.companyRole)
            : c.matchedRoles;

        const roleBadges = targetRoles
          .map((m) => {
            const rd = computeRoleReadiness(m);
            const rShort = roleMap.get(m.roleId)?.shortName || m.roleId;
            return `<span class="badge badge-accent">${escapeHtml(rShort)} · 底线已备 ${rd.mastered}/${rd.total}</span>`;
          })
          .join("");

        const topSkills = Array.from(
          new Set(targetRoles.flatMap((m) => m.skills.filter((s) => s.level === "must").map((s) => s.name)))
        ).slice(0, 5);

        const trackerState = getTrackerState(c.id);
        const trackerBadge =
          trackerState !== "none"
            ? `<span class="badge badge-ok">${escapeHtml(TRACKER_LABELS[trackerState])}</span>`
            : "";

        return `
          <article class="card company-card">
            <header>
              <div>
                <h3 class="company-name">${escapeHtml(c.name)}</h3>
                <div class="badge-row">
                  <span class="badge badge-ok">${escapeHtml(c.city)}</span>
                  <span class="badge ${sfMeta.badgeClass}">${escapeHtml(sfMeta.label)}</span>
                  <span class="badge ${hasRealInternJd ? "badge-accent" : "badge-neutral"}">${hasRealInternJd ? "含往年实习 JD" : "校招参照折算"}</span>
                  ${trackerBadge}
                </div>
              </div>
              <span class="badge badge-neutral">${escapeHtml(c.researchedAt)}</span>
            </header>

            <div class="card-content">
              <div class="badge-row">${roleBadges}</div>
              <dl class="info-kv">
                <div><dt>实习类型</dt><dd>${escapeHtml(ip.internType)}</dd></div>
                <div><dt>出勤时长</dt><dd>${escapeHtml(ip.weeklyDays)}；${escapeHtml(ip.durationReq)}</dd></div>
                <div><dt>往年窗口</dt><dd>${escapeHtml(ip.openWindowRef)}</dd></div>
                <div><dt>底线技能</dt><dd>${escapeHtml(topSkills.join(" / "))}</dd></div>
              </dl>
            </div>

            <footer>
              <label class="compare-toggle">
                <input type="checkbox" class="compare-check" data-compare-id="${escapeHtml(c.id)}" ${checked ? "checked" : ""}>
                <span>加入对比</span>
              </label>
              <button type="button" class="btn btn-primary" data-open-company="${escapeHtml(c.id)}">查看实习档案</button>
            </footer>
          </article>
        `;
      })
      .join("");
  }

  /* =========================================================================
     6. 企业详情弹窗 + Hash 直达 + Markdown 导出
     ========================================================================= */
  function buildCompanyMarkdownCard(c) {
    const ip = c.internshipProfile;
    const sfLabel = SUMMER_FIT_META[ip.summerFit]?.label || ip.summerFit;
    const lines = [
      `# ${c.name}（${c.fullName}）· 2027 暑期实习备战卡`,
      "",
      `- **城市 / 基地**：${c.city}（${c.districts.join("；")}）`,
      `- **行业赛道**：${c.track} ｜ **企业性质**：${c.companyType}`,
      `- **暑假 8 周适配**：${sfLabel}（${ip.summer2MonthOk}）`,
      `- **时长与出勤**：${ip.durationReq} ｜ ${ip.weeklyDays}`,
      `- **往年窗口参考**：${ip.openWindowRef}`,
      `- **转正机制**：${ip.conversionPolicy}`,
      `- **快照核验日期**：${c.researchedAt}（基于 2025/2026 公开参考，2027 当期请二次核实）`,
      ""
    ];
    for (const mr of c.matchedRoles) {
      const rName = roleMap.get(mr.roleId)?.name || mr.roleId;
      lines.push(`## ${rName}（${mr.jdSourceLabel}）`);
      lines.push(`- **常见岗位名**：${mr.officialTitles.join(" / ")}`);
      lines.push(`- **工作内容**：${mr.internTasks}`);
      const musts = mr.skills.filter((s) => s.level === "must").map((s) => s.name);
      const plus = mr.skills.filter((s) => s.level === "plus").map((s) => s.name);
      lines.push(`- **底线技能**：${musts.join("、")}`);
      if (plus.length) lines.push(`- **加分进阶**：${plus.join("、")}`);
      lines.push("");
    }
    lines.push("## 公开核验来源");
    for (const s of c.sources) {
      lines.push(s.url ? `- [${s.label}](${s.url})（${s.date}）` : `- ${s.label}（${s.lead || "待补直链"}，${s.date}）`);
    }
    return lines.join("\n");
  }

  function openCompanyDialog(companyId, syncHash = true) {
    const c = companyMap.get(companyId);
    if (!c) return;
    state.activeDialogCompanyId = companyId;
    if (syncHash) {
      history.replaceState(null, "", `#company=${encodeURIComponent(companyId)}`);
    }

    const ip = c.internshipProfile;
    const sfLabel = SUMMER_FIT_META[ip.summerFit]?.label || "待核实";
    document.getElementById("companyDialogMeta").textContent =
      `${c.city} · ${c.track} · ${sfLabel} · 核验于 ${c.researchedAt}`;
    document.getElementById("companyDialogTitle").textContent = `${c.name}（${c.fullName}）`;

    const rolesHtml = c.matchedRoles
      .map((mr) => {
        const rName = roleMap.get(mr.roleId)?.name || mr.roleId;
        const isReal = mr.jdSourceType === "real-intern-jd";
        const rd = computeRoleReadiness(mr);
        const skillTags = mr.skills
          .map((sk) => {
            const st = getSkillState(sk.name);
            const stMark = st === "mastered" ? "✓" : st === "learning" ? "…" : "";
            return `<button type="button" class="badge skill-badge-btn ${sk.level === "must" ? "badge-must" : "badge-accent"}" data-open-skill="${escapeHtml(sk.name)}">${stMark ? escapeHtml(stMark) + " " : ""}${sk.level === "must" ? "底线" : "加分"} · ${escapeHtml(sk.name)}</button>`;
          })
          .join("");
        return `
          <div class="dialog-section">
            <div class="badge-row" style="margin-block-end:8px">
              <strong>${escapeHtml(rName)}</strong>
              <span class="badge ${isReal ? "badge-ok" : "badge-warn"}">${escapeHtml(mr.jdSourceLabel)}</span>
              <span class="badge badge-accent">我的底线准备度：已掌握 ${rd.mastered}/${rd.total}（学习中 ${rd.learning}）</span>
              <span class="badge badge-neutral">倒班：${escapeHtml(mr.shiftWork)}</span>
              <span class="badge badge-warn">出差：${escapeHtml(mr.travelLevel)}</span>
            </div>
            <p class="muted" style="margin-block-end:8px">常见参考岗位名：${escapeHtml(mr.officialTitles.join(" / "))}</p>
            <p style="font-weight:700;margin-block-end:4px">实习生预期工作内容</p>
            <p style="margin-block-end:10px">${escapeHtml(mr.internTasks)}</p>
            <p style="font-weight:700;margin-block-end:4px">核心职责要点</p>
            <ul style="margin-block-end:10px">${mr.responsibilities.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
            <p style="font-weight:700;margin-block-end:6px">技能要求（点击任意技能标签可看 JD 依据与对应零硬件小练习）</p>
            <div class="skill-chip-list" style="margin-block-end:10px">${skillTags}</div>
            <p style="font-weight:700;margin-block-end:4px">笔试 / 面试高频关注点</p>
            <ul>${mr.interviewFocus.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
          </div>
        `;
      })
      .join("");

    const sourcesHtml = c.sources
      .map((s) => {
        const kindTag = `<span class="badge badge-neutral">${escapeHtml(SOURCE_KIND_LABELS[s.sourceKind] || s.sourceKind)}</span>`;
        const href = safeHttpsUrl(s.url);
        if (href) {
          return `<li>${kindTag} <a class="source-link" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.label)}</a>（核验：${escapeHtml(s.date)}）</li>`;
        }
        return `<li>${kindTag} ${escapeHtml(s.label)} — <span class="muted">${escapeHtml(s.lead || "待补直达链接")}（${escapeHtml(s.date)}）</span></li>`;
      })
      .join("");

    document.getElementById("companyDialogBody").innerHTML = `
      <div class="dialog-section">
        <h3>2027 暑期 / 日常实习可行性档案（基于 2025–2026 批次参考）</h3>
        <dl class="info-kv">
          <div><dt>8 周适配</dt><dd><strong>${escapeHtml(sfLabel)}</strong> — ${escapeHtml(ip.summer2MonthOk)}</dd></div>
          <div><dt>实习类型</dt><dd>${escapeHtml(ip.internType)}</dd></div>
          <div><dt>时长要求</dt><dd>${escapeHtml(ip.durationReq)}</dd></div>
          <div><dt>每周出勤</dt><dd>${escapeHtml(ip.weeklyDays)}</dd></div>
          <div><dt>往年窗口</dt><dd>${escapeHtml(ip.openWindowRef)}</dd></div>
          <div><dt>转正政策</dt><dd>${escapeHtml(ip.conversionPolicy)}</dd></div>
          <div><dt>实习补贴</dt><dd>${escapeHtml(ip.stipendNote)}</dd></div>
        </dl>
      </div>

      <div class="dialog-section">
        <h3>基地位置、产品与投递渠道</h3>
        <dl class="info-kv">
          <div><dt>工作地点</dt><dd>${escapeHtml(c.districts.join("；"))}</dd></div>
          <div><dt>核心产品</dt><dd>${escapeHtml(c.coreProducts.join("、"))}</dd></div>
          <div><dt>厦理适配</dt><dd><strong>${escapeHtml(c.fitForXmut.level)}</strong> — ${escapeHtml(c.fitForXmut.reason)}</dd></div>
          <div><dt>投递渠道</dt><dd>${escapeHtml(c.internshipAndRecruit.channels.join("、"))}</dd></div>
          <div><dt>培养机制</dt><dd>${escapeHtml(c.internshipAndRecruit.program)}</dd></div>
          <div><dt>配套福利</dt><dd>${escapeHtml(c.internshipAndRecruit.benefits.join("、"))}</dd></div>
          <div><dt>安全/证书</dt><dd>${escapeHtml(c.workConditionSummary.certNote)}</dd></div>
        </dl>
      </div>

      ${rolesHtml}

      <div class="dialog-section">
        <h3>本科生投实习的优势与避坑提醒</h3>
        <p style="font-weight:700;color:var(--ok);margin-block-end:4px">主要亮点</p>
        <ul style="margin-block-end:10px">${c.prosAndCons.pros.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
        <p style="font-weight:700;color:var(--warn);margin-block-end:4px">投递前需注意</p>
        <ul>${c.prosAndCons.watchouts.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
      </div>

      <div class="dialog-section">
        <h3>公开信息核验来源</h3>
        <ul>${sourcesHtml}</ul>
      </div>
    `;

    document.getElementById("companyDialog").showModal();
  }

  /* =========================================================================
     7. 多企横向对比（使用安全 data-col-label，彻底告别 colVars 引号截断）
     ========================================================================= */
  function renderComparePanel() {
    document.getElementById("compareCountPill").textContent = String(state.compareIds.length);

    const picker = document.getElementById("comparePicker");
    picker.innerHTML = DATA.companies
      .map((c) => {
        const checked = state.compareIds.includes(c.id);
        return `
          <label class="picker-chip">
            <input type="checkbox" class="compare-check" data-compare-id="${escapeHtml(c.id)}" ${checked ? "checked" : ""}>
            <span>${escapeHtml(c.name)}（${escapeHtml(c.city)}）</span>
          </label>
        `;
      })
      .join("");

    const selected = state.compareIds.map((id) => companyMap.get(id)).filter(Boolean);
    const host = document.getElementById("compareTableHost");

    if (selected.length < 2) {
      host.innerHTML = `<div class="empty-state">请至少勾选 2 家已深挖企业进行横向对比（最多同时对比 4 家）。</div>`;
      return;
    }

    const rows = [
      {
        label: "暑假 8 周适配与类型",
        cell: (c) => {
          const sf = SUMMER_FIT_META[c.internshipProfile.summerFit]?.label || "待核实";
          return `<strong>${escapeHtml(sf)}</strong><br><span class="muted">${escapeHtml(c.internshipProfile.summer2MonthOk)}</span>`;
        }
      },
      {
        label: "每周出勤与时长要求",
        cell: (c) => `<strong>${escapeHtml(c.internshipProfile.weeklyDays)}</strong><br>${escapeHtml(c.internshipProfile.durationReq)}`
      },
      {
        label: "转正机制与往年窗口",
        cell: (c) => `${escapeHtml(c.internshipProfile.conversionPolicy)}<br><span class="muted">${escapeHtml(c.internshipProfile.openWindowRef)}</span>`
      },
      {
        label: "所在城市与基地片区",
        cell: (c) => `${escapeHtml(c.city)}<br><span class="muted">${escapeHtml(c.districts.join("；"))}</span>`
      },
      {
        label: "可投方向与我的底线准备度",
        cell: (c) =>
          c.matchedRoles
            .map((m) => {
              const rd = computeRoleReadiness(m);
              const tag = m.jdSourceType === "real-intern-jd" ? "实JD" : "校招折算";
              return `<div style="margin-block-end:4px"><span class="badge ${m.jdSourceType === "real-intern-jd" ? "badge-ok" : "badge-warn"}">${escapeHtml(roleMap.get(m.roleId)?.shortName || m.roleId)} · ${tag}</span> <span class="muted">已备 ${rd.mastered}/${rd.total}</span></div>`;
            })
            .join("")
      },
      {
        label: "拿实习 Offer 底线技能",
        cell: (c) => {
          const musts = Array.from(new Set(c.matchedRoles.flatMap((m) => m.skills.filter((s) => s.level === "must").map((s) => s.name))));
          return `<ul>${musts.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>`;
        }
      },
      {
        label: "实习加分 / 进阶项",
        cell: (c) => {
          const plus = Array.from(new Set(c.matchedRoles.flatMap((m) => m.skills.filter((s) => s.level === "plus").map((s) => s.name))));
          return plus.length ? `<ul>${plus.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>` : `<span class="muted">暂无单独列示</span>`;
        }
      },
      {
        label: "工况（倒班 / 出差）",
        cell: (c) => `<strong>倒班：</strong>${escapeHtml(c.workConditionSummary.shiftWork)}<br><strong>出差：</strong>${escapeHtml(c.workConditionSummary.travelLevel)}`
      },
      {
        label: "厦门理工投递评估",
        cell: (c) => `<strong>${escapeHtml(c.fitForXmut.level)}</strong><br>${escapeHtml(c.fitForXmut.reason)}`
      }
    ];

    host.innerHTML = `
      <div tabindex="0" role="region" aria-labelledby="compare-caption" class="table-wrapper">
        <table class="radar-table">
          <caption id="compare-caption">已选 ${selected.length} 家企业横向对比（窄屏自动切换纵向卡片并明确标注企业名）</caption>
          <thead>
            <tr>
              <th>对比维度</th>
              ${selected.map((c) => `<th>${escapeHtml(c.name)}（${escapeHtml(c.city)}） <button type="button" class="btn btn-secondary btn-sm" data-remove-compare="${escapeHtml(c.id)}" aria-label="移出对比 ${escapeHtml(c.name)}">移除</button></th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (r) => `
                  <tr>
                    <th>${escapeHtml(r.label)}</th>
                    ${selected
                      .map(
                        (c) =>
                          `<td data-col-label="${escapeHtml(c.name)}（${escapeHtml(c.city)}）">${r.cell(c)}</td>`
                      )
                      .join("")}
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  /* =========================================================================
     8. 2027 投递日历、站内日报与二期候选池
     ========================================================================= */
  function renderSimpleMarkdown(mdText) {
    const lines = String(mdText || "").split(/\r?\n/);
    const html = [];
    let inList = false;
    let tableRows = [];

    const flushList = () => {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
    };
    const flushTable = () => {
      if (tableRows.length === 0) return;
      const bodyRows = tableRows.filter((r) => !/^\|[\s:\-\|]+\|$/.test(r.trim()));
      html.push("<table>");
      bodyRows.forEach((row, idx) => {
        const cells = row
          .trim()
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split(/(?<!\\)\|/)
          .map((c) => escapeHtml(c.replaceAll("\\|", "|").trim()));
        const tag = idx === 0 ? "th" : "td";
        html.push(`<tr>${cells.map((c) => `<${tag}>${c}</${tag}>`).join("")}</tr>`);
      });
      html.push("</table>");
      tableRows = [];
    };

    for (const rawLine of lines) {
      const line = rawLine.trimEnd();
      if (/^\|.*\|$/.test(line.trim())) {
        flushList();
        tableRows.push(line);
        continue;
      }
      flushTable();

      if (!line.trim()) {
        flushList();
        continue;
      }
      if (line.startsWith("### ")) {
        flushList();
        html.push(`<h3>${escapeHtml(line.slice(4))}</h3>`);
      } else if (line.startsWith("## ")) {
        flushList();
        html.push(`<h2>${escapeHtml(line.slice(3))}</h2>`);
      } else if (line.startsWith("# ")) {
        flushList();
        html.push(`<h1>${escapeHtml(line.slice(2))}</h1>`);
      } else if (line.startsWith("> ")) {
        flushList();
        html.push(`<blockquote>${escapeHtml(line.slice(2))}</blockquote>`);
      } else if (/^[-*]\s+/.test(line)) {
        if (!inList) {
          html.push("<ul>");
          inList = true;
        }
        html.push(`<li>${escapeHtml(line.replace(/^[-*]\s+/, ""))}</li>`);
      } else {
        flushList();
        html.push(`<p>${escapeHtml(line)}</p>`);
      }
    }
    flushList();
    flushTable();
    return html.join("\n");
  }

  function renderTimelinePanel() {
    const timelineEl = document.getElementById("timelineContainer");
    timelineEl.innerHTML = WINDOW_GROUP_META.map((wg) => {
      const groupCompanies = DATA.companies.filter((c) => c.internshipProfile.windowGroup === wg.id);
      if (groupCompanies.length === 0) return "";
      const cardsHtml = groupCompanies
        .map((c) => {
          const sfMeta = SUMMER_FIT_META[c.internshipProfile.summerFit] || { label: "待核实", badgeClass: "badge-neutral" };
          const curStatus = getTrackerState(c.id);
          const optionsHtml = Object.entries(TRACKER_LABELS)
            .map(([val, label]) => `<option value="${escapeHtml(val)}" ${curStatus === val ? "selected" : ""}>${escapeHtml(label)}</option>`)
            .join("");
          return `
            <div class="timeline-card">
              <div class="timeline-card-top">
                <button type="button" class="skill-name-btn" data-open-company="${escapeHtml(c.id)}">${escapeHtml(c.name)}（${escapeHtml(c.city)}）</button>
                <span class="badge ${sfMeta.badgeClass}">${escapeHtml(sfMeta.label)}</span>
              </div>
              <p class="muted" style="margin:0;font-size:0.82rem">${escapeHtml(c.internshipProfile.openWindowRef)}</p>
              <div class="timeline-card-top">
                <label class="muted" style="font-size:0.8rem" for="tracker-${escapeHtml(c.id)}">我的投递状态：</label>
                <select id="tracker-${escapeHtml(c.id)}" class="tracker-select" data-tracker-id="${escapeHtml(c.id)}">${optionsHtml}</select>
              </div>
            </div>
          `;
        })
        .join("");
      return `
        <section class="timeline-group">
          <div class="timeline-group-head">
            <h3>${escapeHtml(wg.title)}</h3>
            <span class="badge badge-accent">${groupCompanies.length} 家企业</span>
          </div>
          <p class="muted" style="margin-block-end:12px">${escapeHtml(wg.hint)}</p>
          <div class="timeline-grid">${cardsHtml}</div>
        </section>
      `;
    }).join("");

    // 站内日报阅读器
    const reports = DATA.dailyReports || [];
    const reportsHost = document.getElementById("dailyReportsHost");
    if (reports.length === 0) {
      reportsHost.innerHTML = `<div class="empty-state">暂无可关联日报。</div>`;
    } else {
      const activeReport = reports.find((r) => r.batchId === state.activeReportId) || reports[0];
      state.activeReportId = activeReport.batchId;
      const tabsHtml = reports
        .map(
          (r) =>
            `<button type="button" class="report-tab-btn" data-report-id="${escapeHtml(r.batchId)}" aria-pressed="${r.batchId === activeReport.batchId}">Day ${escapeHtml(r.day)} · ${escapeHtml(r.date)}（${escapeHtml(r.batchId)}）</button>`
        )
        .join("");
      reportsHost.innerHTML = `
        <div class="report-tabs" role="group" aria-label="选择每日深挖简报">${tabsHtml}</div>
        <div class="report-viewer">${renderSimpleMarkdown(activeReport.content)}</div>
      `;
    }

    // 二期候选企业池
    const candHost = document.getElementById("phase2CandidatesHost");
    const cands = DATA.queue.phase2Candidates || [];
    candHost.innerHTML = cands
      .map((cand) => {
        const href = safeHttpsUrl(cand.clueUrl);
        const roleChips = cand.roles
          .map((rid) => `<span class="badge badge-neutral">${escapeHtml(roleMap.get(rid)?.shortName || rid)}</span>`)
          .join("");
        return `
          <article class="card company-card">
            <header>
              <div>
                <h3 class="company-name">${escapeHtml(cand.name)}</h3>
                <div class="badge-row">
                  <span class="badge badge-ok">${escapeHtml(cand.city)}</span>
                  <span class="badge badge-accent">${escapeHtml(cand.track)}</span>
                </div>
              </div>
              <span class="badge badge-neutral">二期储备</span>
            </header>
            <div class="card-content">
              <div class="badge-row">${roleChips}</div>
              <p style="margin:0">${escapeHtml(cand.reason)}</p>
            </div>
            <footer>
              ${href ? `<a class="source-link" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">查看公开来源线索</a>` : `<span class="muted">线索待核实</span>`}
            </footer>
          </article>
        `;
      })
      .join("");
  }

  /* =========================================================================
     9. 五大岗位透视
     ========================================================================= */
  function renderRolesPanel() {
    const statMap = new Map(DATA.roleStats.map((r) => [r.roleId, r]));
    document.getElementById("rolesGrid").innerHTML = DATA.roles
      .map((r) => {
        const rs = statMap.get(r.id);
        const topSkills = (rs ? rs.skills : []).slice(0, 6);
        return `
          <article class="role-card">
            <div class="badge-row">
              <span class="badge badge-accent">${escapeHtml(r.category)}</span>
              <span class="badge ${rs.companyCount > 0 ? "badge-ok" : "badge-neutral"}">已统计 ${rs.companyCount} 家企业</span>
            </div>
            <h3>${escapeHtml(r.name)}</h3>
            <p class="muted" style="margin:0">${escapeHtml(r.summary)}</p>
            <div>
              <div class="role-block-title">真实工作一天大概在干嘛</div>
              <p style="margin:0;font-size:0.9rem">${escapeHtml(r.typicalDay)}</p>
            </div>
            <div>
              <div class="role-block-title">已汇总的高频技能（点击可看练习与出处）</div>
              ${
                topSkills.length
                  ? `<div class="skill-chip-list">${topSkills
                      .map((sk) => `<button type="button" class="badge skill-badge-btn ${sk.mustCount > 0 ? "badge-must" : "badge-neutral"}" data-open-skill="${escapeHtml(sk.name)}">${escapeHtml(sk.name)} (${sk.count}/${rs.companyCount})</button>`)
                      .join("")}</div>`
                  : `<p class="muted" style="margin:0">等待队列推进到对应行业企业后自动填充。</p>`
              }
            </div>
            <div>
              <div class="role-block-title">对应你的课程基础</div>
              <div class="skill-chip-list">${r.courseLinks.map((cl) => `<span class="badge badge-neutral">${escapeHtml(cl)}</span>`).join("")}</div>
            </div>
            <div>
              <div class="role-block-title">零硬件简历项目切入方向</div>
              <p style="margin:0;font-size:0.88rem;color:var(--accent);font-weight:600">${escapeHtml(r.starterProjectHint)}</p>
            </div>
          </article>
        `;
      })
      .join("");
  }

  /* =========================================================================
     10. 每日队列与进度（去除 colVars，全部使用 data-col-label + 转义）
     ========================================================================= */
  function renderQueuePanel() {
    document.getElementById("queueSectionTitle").textContent =
      `每日 ${DATA.queue.dailyTargetCount} 企深挖队列与日志（${DATA.overview.totalCompanies} / ${DATA.overview.totalQueue}）`;
    document.getElementById("queueTableHeading").textContent =
      `${DATA.overview.totalQueue} 家厦泉目标企业滚动清单`;

    document.getElementById("changelogTimeline").innerHTML = [...DATA.changelog]
      .reverse()
      .map((item) => {
        const names = item.addedCompanies.map((id) => companyMap.get(id)?.name || id).join(" + ");
        return `
          <div class="changelog-item">
            <div class="changelog-meta">DAY ${escapeHtml(item.day)} · ${escapeHtml(item.date)} · 批次 ${escapeHtml(item.batchId)} · 新增：${escapeHtml(names)}</div>
            <div style="font-weight:700;margin-block-end:4px">${escapeHtml(item.headline)}</div>
            <p class="muted" style="margin:0">${escapeHtml(item.keyTakeaway)}</p>
          </div>
        `;
      })
      .join("");

    document.getElementById("queueTableHost").innerHTML = `
      <div tabindex="0" role="region" aria-labelledby="queue-caption" class="table-wrapper">
        <table class="radar-table">
          <caption id="queue-caption">${DATA.overview.totalQueue} 家厦泉目标企业每日深挖排期（每天推进 ${DATA.queue.dailyTargetCount} 家）</caption>
          <thead>
            <tr>
              <th>序号 / 企业</th>
              <th>城市</th>
              <th>赛道</th>
              <th>优先级</th>
              <th>状态</th>
              <th>深挖关注点</th>
            </tr>
          </thead>
          <tbody>
            ${DATA.queue.items
              .map((it) => {
                const isDone = it.status === "done";
                const statusBadge = isDone
                  ? `<span class="badge badge-ok">已完成（${escapeHtml(it.researchedAt)}）</span>`
                  : `<span class="badge badge-neutral">待深挖</span>`;
                const nameHtml = isDone
                  ? `<button type="button" class="skill-name-btn" data-open-company="${escapeHtml(it.id)}">#${escapeHtml(it.order)} ${escapeHtml(it.name)}</button>`
                  : `#${escapeHtml(it.order)} ${escapeHtml(it.name)}`;
                return `
                  <tr>
                    <th>${nameHtml}</th>
                    <td data-col-label="城市">${escapeHtml(it.city)}</td>
                    <td data-col-label="赛道">${escapeHtml(it.track)}</td>
                    <td data-col-label="优先级"><span class="badge ${it.priority === "S" ? "badge-must" : "badge-accent"}">${escapeHtml(it.priority)} 级</span></td>
                    <td data-col-label="状态">${statusBadge}</td>
                    <td data-col-label="深挖关注点">${escapeHtml(it.focusHint)}</td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  /* =========================================================================
     11. 全局事件绑定与初始化
     ========================================================================= */
  function resetCompanyFilters() {
    state.companyCity = "all";
    state.companyTrack = "all";
    state.companyRole = "all";
    state.companySummer = "all";
    state.companyJdOnly = false;
    state.companyQuery = "";
    document.getElementById("companyCityFilter").value = "all";
    document.getElementById("companyTrackFilter").value = "all";
    document.getElementById("companyRoleFilter").value = "all";
    document.getElementById("companySummerFilter").value = "all";
    document.getElementById("companyJdOnlyCheckbox").checked = false;
    document.getElementById("companySearchInput").value = "";
    renderCompaniesPanel();
  }

  function bindEvents(tabApi) {
    document.getElementById("skillRoleFilter").addEventListener("change", (e) => {
      state.skillRole = e.target.value;
      renderSkillsPanel();
    });
    document.getElementById("skillCategoryFilter").addEventListener("change", (e) => {
      state.skillCategory = e.target.value;
      renderSkillsPanel();
    });
    document.getElementById("skillStatusFilter").addEventListener("change", (e) => {
      state.skillStatus = e.target.value;
      renderSkillsPanel();
    });

    document.getElementById("companyCityFilter").addEventListener("change", (e) => {
      state.companyCity = e.target.value;
      renderCompaniesPanel();
    });
    document.getElementById("companyTrackFilter").addEventListener("change", (e) => {
      state.companyTrack = e.target.value;
      renderCompaniesPanel();
    });
    document.getElementById("companyRoleFilter").addEventListener("change", (e) => {
      state.companyRole = e.target.value;
      renderCompaniesPanel();
    });
    document.getElementById("companySummerFilter").addEventListener("change", (e) => {
      state.companySummer = e.target.value;
      renderCompaniesPanel();
    });
    document.getElementById("companyJdOnlyCheckbox").addEventListener("change", (e) => {
      state.companyJdOnly = e.target.checked;
      renderCompaniesPanel();
    });
    document.getElementById("companySearchInput").addEventListener("input", (e) => {
      state.companyQuery = e.target.value;
      renderCompaniesPanel();
    });
    document.getElementById("companyResetFiltersBtn").addEventListener("click", resetCompanyFilters);
    document.getElementById("jumpToCompareBtn").addEventListener("click", () => tabApi.activateByPanelId("panel-compare"));

    document.getElementById("copyCompanyLinkBtn").addEventListener("click", async () => {
      if (!state.activeDialogCompanyId) return;
      const url = new URL(window.location.href);
      url.hash = `company=${encodeURIComponent(state.activeDialogCompanyId)}`;
      try {
        await navigator.clipboard.writeText(url.href);
        showNotice("已复制该企业档案直达链接到剪贴板。");
      } catch {
        showNotice(`直达链接已更新到地址栏：${url.hash}`);
      }
    });

    document.getElementById("exportCompanyMdBtn").addEventListener("click", () => {
      const c = companyMap.get(state.activeDialogCompanyId);
      if (!c) return;
      const md = buildCompanyMarkdownCard(c);
      const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${c.id}-备战卡.md`;
      a.click();
      URL.revokeObjectURL(url);
      showNotice(`已导出「${c.name}」Markdown 备战卡。`);
    });

    document.addEventListener("click", (e) => {
      if (e.target.closest("#emptyResetBtn")) {
        resetCompanyFilters();
        return;
      }

      const skillBtn = e.target.closest("[data-open-skill]");
      if (skillBtn) {
        openSkillDialog(skillBtn.dataset.openSkill);
        return;
      }

      const companyBtn = e.target.closest("[data-open-company]");
      if (companyBtn) {
        openCompanyDialog(companyBtn.dataset.openCompany);
        return;
      }

      const removeCmp = e.target.closest("[data-remove-compare]");
      if (removeCmp) {
        const rid = removeCmp.dataset.removeCompare;
        state.compareIds = state.compareIds.filter((x) => x !== rid);
        renderCompaniesPanel();
        renderComparePanel();
        return;
      }

      const reportBtn = e.target.closest("[data-report-id]");
      if (reportBtn) {
        state.activeReportId = reportBtn.dataset.reportId;
        renderTimelinePanel();
        return;
      }

      const statusBtn = e.target.closest(".status-btn");
      if (statusBtn) {
        const skillName = statusBtn.dataset.skill;
        const targetState = statusBtn.dataset.state;
        state.skillProgress[skillName] = targetState;
        saveSkillProgress();
        renderKpis();
        renderSkillsPanel();
        renderCompaniesPanel();
        renderComparePanel();
        // 重绘后精确恢复键盘/辅助技术焦点
        const sameBtn = Array.from(document.querySelectorAll(".status-btn")).find(
          (b) => b.dataset.skill === skillName && b.dataset.state === targetState
        );
        if (sameBtn) sameBtn.focus();
      }
    });

    document.addEventListener("change", (e) => {
      const trackerSel = e.target.closest("[data-tracker-id]");
      if (trackerSel) {
        const cid = trackerSel.dataset.trackerId;
        if (VALID_TRACKER_STATES.has(trackerSel.value)) {
          state.appTracker[cid] = trackerSel.value;
          saveAppTracker();
          renderKpis();
          renderCompaniesPanel();
          showNotice(`已更新「${companyMap.get(cid)?.name || cid}」状态为：${TRACKER_LABELS[trackerSel.value]}`);
        }
        return;
      }

      const chk = e.target.closest(".compare-check");
      if (!chk) return;
      const id = chk.dataset.compareId;
      if (chk.checked) {
        if (!state.compareIds.includes(id)) {
          if (state.compareIds.length >= 4) {
            chk.checked = false;
            showNotice("最多同时对比 4 家企业，请先在对比区或卡片取消 1 家再加入。");
            return;
          }
          state.compareIds.push(id);
        }
      } else {
        state.compareIds = state.compareIds.filter((x) => x !== id);
      }
      renderCompaniesPanel();
      renderComparePanel();
    });

    document.getElementById("exportProgressBtn").addEventListener("click", () => {
      const payload = {
        schemaVersion: 2,
        exportedAt: new Date().toISOString(),
        skillProgress: state.skillProgress,
        appTracker: state.appTracker
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `xiaquan-ee-progress-${DATA.generatedAt}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showNotice("已导出个人技能自检与投递跟踪 JSON。");
    });

    document.getElementById("importProgressBtn").addEventListener("click", () => {
      document.getElementById("importProgressInput").click();
    });

    document.getElementById("importProgressInput").addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const parsed = JSON.parse(await file.text());
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
          throw new Error("根对象格式无效");
        }
        const nextSkills = sanitizePlainMap(parsed.skillProgress, VALID_SKILL_STATES);
        if (Object.keys(nextSkills).length === 0) {
          throw new Error("未找到有效的 skillProgress 记录");
        }
        const nextTracker = parsed.appTracker ? sanitizePlainMap(parsed.appTracker, VALID_TRACKER_STATES) : state.appTracker;
        state.skillProgress = nextSkills;
        state.appTracker = nextTracker;
        saveSkillProgress();
        saveAppTracker();
        renderKpis();
        renderSkillsPanel();
        renderCompaniesPanel();
        renderComparePanel();
        renderTimelinePanel();
        showNotice(`导入成功：已恢复 ${Object.keys(nextSkills).length} 项技能进度与 ${Object.keys(nextTracker).length} 条投递状态。`);
      } catch (err) {
        showNotice(`导入失败：${err.message}`);
      }
      e.target.value = "";
    });
  }

  function openCompanyFromHash() {
    const m = window.location.hash.match(/^#company=([a-z0-9-]+)$/i);
    if (m && companyMap.has(m[1])) {
      openCompanyDialog(m[1], false);
    }
  }

  initThemeToggle();
  attachDialogFallback(document.getElementById("companyDialog"));
  attachDialogFallback(document.getElementById("skillDialog"));
  const tabApi = initTabs();
  populateFilters();
  bindEvents(tabApi);

  renderKpis();
  renderSkillsPanel();
  renderCompaniesPanel();
  renderComparePanel();
  renderTimelinePanel();
  renderRolesPanel();
  renderQueuePanel();
  openCompanyFromHash();
  window.addEventListener("hashchange", openCompanyFromHash);
})();
