(() => {
  "use strict";

  const DATA = window.__RADAR_DATA__;
  if (!DATA) {
    document.body.innerHTML = "<main style='padding:24px'><h2>未加载到数据包</h2><p>请先运行 <code>node scripts/build_and_verify.mjs</code> 生成 <code>web/data-bundle.js</code>。</p></main>";
    return;
  }

  const STORAGE_THEME = "xq-radar-color-scheme";
  const STORAGE_SKILLS = "xq-radar-skill-progress-v1";
  const roleMap = new Map(DATA.roles.map((r) => [r.id, r]));
  const companyMap = new Map(DATA.companies.map((c) => [c.id, c]));

  const state = {
    compareIds: DATA.companies.slice(0, Math.min(3, DATA.companies.length)).map((c) => c.id),
    skillProgress: loadSkillProgress(),
    skillRole: "all",
    skillCategory: "all",
    skillStatus: "all",
    companyCity: "all",
    companyTrack: "all",
    companyRole: "all",
    companyQuery: ""
  };

  function escapeHtml(text) {
    return String(text ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function loadSkillProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_SKILLS);
      if (raw) return JSON.parse(raw);
    } catch (_) {
      // 忽略本地存储异常
    }
    // 预置用户当前大三已学课程对应的合理默认起步状态（可随时点击修改）
    return {
      "电路与模数电基础": "learning",
      "电力电子拓扑（整流/斩波/逆变）": "learning",
      "示波器与万用表实操": "learning",
      "电气原理图识读": "learning"
    };
  }

  function saveSkillProgress() {
    try {
      localStorage.setItem(STORAGE_SKILLS, JSON.stringify(state.skillProgress));
    } catch (_) {
      // 存储不可用时仅保持内存态
    }
  }

  function getSkillState(skillName) {
    return state.skillProgress[skillName] || "todo";
  }

  /* =========================================================================
     1. 主题切换（遵循 dark-mode-toggle：系统默认 + 恢复系统时移除存储值）
     ========================================================================= */
  function initThemeToggle() {
    const meta = document.querySelector('meta[name="color-scheme"]');
    const btn = document.getElementById("themeToggle");
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    function getSystemScheme() {
      return mq.matches ? "dark" : "light";
    }

    function getStoredScheme() {
      try {
        return localStorage.getItem(STORAGE_THEME);
      } catch (_) {
        return null;
      }
    }

    function applyScheme(value) {
      meta.content = value || "light dark";
    }

    btn.addEventListener("click", () => {
      const stored = getStoredScheme();
      const rendered = stored || getSystemScheme();
      const target = rendered === "dark" ? "light" : "dark";

      if (target === getSystemScheme()) {
        try {
          localStorage.removeItem(STORAGE_THEME);
        } catch (_) {}
        applyScheme(null);
      } else {
        try {
          localStorage.setItem(STORAGE_THEME, target);
        } catch (_) {}
        applyScheme(target);
      }
    });

    window.addEventListener("storage", (e) => {
      if (e.key === STORAGE_THEME) {
        applyScheme(e.newValue);
      }
    });
  }

  /* =========================================================================
     2. 原生 Dialog 轻触遮罩关闭降级兼容（Safari Fallback）
     ========================================================================= */
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
        if (inside) return;
        dialog.close();
      });
    }
  }

  /* =========================================================================
     3. 无障碍单行滚动 Tabs（键盘漫游 + beforematch 联动 + 边缘渐隐降级）
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
      panel.addEventListener("beforematch", () => {
        activateTab(tabs[idx], false);
      });
    });

    // 非 scroll-driven animation 浏览器降级：IntersectionObserver 控制边缘渐隐
    if (!CSS.supports("animation-timeline", "scroll()")) {
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

    return { activateByPanelId: (id) => {
      const match = tabs.find((t) => t.dataset.panel === id);
      if (match) activateTab(match, true);
    }};
  }

  /* =========================================================================
     4. 顶部 KPI 概览
     ========================================================================= */
  function renderKpis() {
    const ov = DATA.overview;
    const citySummary = Object.entries(ov.cityCounts)
      .map(([k, v]) => `${k} ${v}`)
      .join(" · ");
    const masteredCount = DATA.skillStatsOverall.filter((s) => getSkillState(s.name) === "mastered").length;
    const learningCount = DATA.skillStatsOverall.filter((s) => getSkillState(s.name) === "learning").length;

    document.getElementById("kpiGrid").innerHTML = `
      <div class="kpi-card">
        <div class="kpi-label">已深挖目标企业</div>
        <div class="kpi-value">${ov.totalCompanies} <span style="font-size:0.9rem;color:var(--text-muted)">/ ${ov.totalQueue}</span></div>
        <div class="kpi-sub">${escapeHtml(citySummary)}（进度 ${ov.completionPct}%）</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">已拆解真实岗位</div>
        <div class="kpi-value">${ov.totalMatchedRoleInstances}</div>
        <div class="kpi-sub">覆盖 ${DATA.roleStats.filter((r) => r.companyCount > 0).length} / 5 个探索方向</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">归集高频技能项</div>
        <div class="kpi-value">${ov.uniqueSkillCount}</div>
        <div class="kpi-sub">随每日深挖自动重算排序</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">我的技能自检</div>
        <div class="kpi-value">${masteredCount} <span style="font-size:0.9rem;color:var(--text-muted)">已掌握</span></div>
        <div class="kpi-sub">学习中 ${learningCount} 项 · 更新于 ${escapeHtml(DATA.generatedAt)}</div>
      </div>
    `;
  }

  /* =========================================================================
     5. 技能热力榜与个人缺口分析
     ========================================================================= */
  function populateFilters() {
    const skillRoleSel = document.getElementById("skillRoleFilter");
    const companyRoleSel = document.getElementById("companyRoleFilter");
    DATA.roleStats.forEach((r) => {
      const opt1 = new Option(`${r.roleName}（已覆盖 ${r.companyCount} 企）`, r.roleId);
      const opt2 = new Option(r.shortName, r.roleId);
      skillRoleSel.append(opt1);
      companyRoleSel.append(opt2);
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
        mustCount: s.mustCount,
        plusCount: s.plusCount,
        evidences: s.companyEntries.map((e) => ({
          companyId: e.companyId,
          companyName: e.companyName,
          roleId: rStat.roleId,
          level: e.level,
          detail: e.detail
        }))
      }))
    };
  }

  function renderSkillsPanel() {
    const { denominator, unitLabel, items } = getActiveSkillList();

    // 自检统计徽章
    const totalAll = items.length;
    const mastered = items.filter((s) => getSkillState(s.name) === "mastered").length;
    const learning = items.filter((s) => getSkillState(s.name) === "learning").length;
    const todo = totalAll - mastered - learning;

    document.getElementById("selfCheckSummary").innerHTML = `
      <span class="badge badge-ok">已掌握 ${mastered}</span>
      <span class="badge badge-warn">学习中 ${learning}</span>
      <span class="badge badge-must">未开始 ${todo}</span>
    `;

    // 高频但未掌握的缺口提示
    const hotGaps = items
      .filter((s) => s.mustCount > 0 && getSkillState(s.name) === "todo")
      .slice(0, 4);

    const gapEl = document.getElementById("gapCallout");
    if (denominator === 0) {
      gapEl.innerHTML = `<strong>当前提示：</strong>该岗位暂未有已深挖企业命中，后续每日调研推进至半导体/面板/制造企业后将自动生成技能排行。`;
    } else if (hotGaps.length > 0) {
      gapEl.innerHTML = `<strong>当前优先补课缺口（高频必备且未开始）：</strong>${hotGaps
        .map((g) => `<strong>${escapeHtml(g.name)}</strong>（${g.count}/${denominator}）`)
        .join("、")}。`;
    } else {
      gapEl.innerHTML = `<strong>状态良好：</strong>当前视角下的全部高频必备技能你均已标记为「学习中」或「已掌握」！`;
    }

    const filtered = items.filter((s) => {
      if (state.skillCategory !== "all" && s.category !== state.skillCategory) return false;
      if (state.skillStatus !== "all" && getSkillState(s.name) !== state.skillStatus) return false;
      return true;
    });

    const host = document.getElementById("skillBarsContainer");
    if (filtered.length === 0) {
      host.innerHTML = `<div class="empty-state">当前筛选条件下暂无技能记录，请调整筛选或等待后续每日深挖补充。</div>`;
      return;
    }

    host.innerHTML = filtered
      .map((sk) => {
        const curState = getSkillState(sk.name);
        const isHot = sk.pct >= 80 && sk.mustCount > 0;
        const companyNames = Array.from(new Set(sk.evidences.map((e) => e.companyName))).join("、");
        return `
          <div class="skill-row">
            <div class="skill-main">
              <div class="skill-head">
                <button type="button" class="skill-name-btn" data-open-skill="${escapeHtml(sk.name)}">${escapeHtml(sk.name)}</button>
                <span class="badge badge-neutral">${escapeHtml(sk.category)}</span>
                ${sk.mustCount > 0 ? `<span class="badge badge-must">必备×${sk.mustCount}</span>` : ""}
                ${sk.plusCount > 0 ? `<span class="badge badge-accent">加分×${sk.plusCount}</span>` : ""}
              </div>
              <div class="skill-bar-track" aria-hidden="true">
                <div class="skill-bar-fill ${isHot ? "skill-bar-fill--hot" : ""}" style="width:${Math.max(sk.pct, 6)}%"></div>
              </div>
              <div class="skill-meta-line">
                命中 <strong>${sk.count} / ${denominator}</strong> ${unitLabel}（<strong>${sk.pct}%</strong>） · 涉及：${escapeHtml(companyNames)}（点击技能名查看具体 JD 要求）
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

    document.getElementById("skillDialogMeta").textContent = `${overall.category} · 跨企业覆盖 ${overall.companyCount}/${DATA.overview.totalCompanies}（${overall.companyPct}%）`;
    document.getElementById("skillDialogTitle").textContent = overall.name;

    document.getElementById("skillDialogBody").innerHTML = overall.evidences
      .map((ev) => {
        const rName = roleMap.get(ev.roleId)?.shortName || ev.roleId;
        const lvBadge = ev.level === "must"
          ? `<span class="badge badge-must">红线必备</span>`
          : `<span class="badge badge-accent">面试加分</span>`;
        return `
          <div class="dialog-section">
            <div class="badge-row" style="margin-block-end:6px">
              <strong>${escapeHtml(ev.companyName)}</strong>
              <span class="badge badge-neutral">${escapeHtml(rName)}</span>
              ${lvBadge}
            </div>
            <p style="margin:0">${escapeHtml(ev.detail)}</p>
          </div>
        `;
      })
      .join("");

    document.getElementById("skillDialog").showModal();
  }

  /* =========================================================================
     6. 企业雷达库卡片
     ========================================================================= */
  function renderCompaniesPanel() {
    const q = state.companyQuery.trim().toLowerCase();
    const list = DATA.companies.filter((c) => {
      if (state.companyCity !== "all" && c.city !== state.companyCity) return false;
      if (state.companyTrack !== "all" && c.track !== state.companyTrack) return false;
      if (state.companyRole !== "all" && !c.matchedRoles.some((m) => m.roleId === state.companyRole)) return false;
      if (q) {
        const haystack = JSON.stringify(c).toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    const host = document.getElementById("companyCardsGrid");
    if (list.length === 0) {
      host.innerHTML = `<div class="empty-state">没有符合条件的企业，请放宽筛选条件。</div>`;
      return;
    }

    host.innerHTML = list
      .map((c) => {
        const checked = state.compareIds.includes(c.id);
        const roleBadges = c.matchedRoles
          .map((m) => `<span class="badge badge-accent">${escapeHtml(roleMap.get(m.roleId)?.shortName || m.roleId)}</span>`)
          .join("");
        const topSkills = Array.from(
          new Set(c.matchedRoles.flatMap((m) => m.skills.filter((s) => s.level === "must").map((s) => s.name)))
        ).slice(0, 5);

        return `
          <article class="card company-card">
            <header>
              <div>
                <h3 class="company-name">${escapeHtml(c.name)}</h3>
                <div class="badge-row">
                  <span class="badge badge-ok">${escapeHtml(c.city)}</span>
                  <span class="badge badge-neutral">${escapeHtml(c.track)}</span>
                </div>
              </div>
              <span class="badge badge-neutral">${escapeHtml(c.researchedAt)}</span>
            </header>

            <div class="card-content">
              <div class="badge-row">${roleBadges}</div>
              <dl class="info-kv">
                <div><dt>核心产品</dt><dd>${escapeHtml(c.coreProducts.join("、"))}</dd></div>
                <div><dt>厦理匹配</dt><dd>${escapeHtml(c.fitForXmut.level)}</dd></div>
                <div><dt>出差倒班</dt><dd>${escapeHtml(c.workConditionSummary.travelLevel)}</dd></div>
                <div><dt>高频必备</dt><dd>${escapeHtml(topSkills.join(" / "))}</dd></div>
              </dl>
            </div>

            <footer>
              <label class="compare-toggle">
                <input type="checkbox" class="compare-check" data-compare-id="${escapeHtml(c.id)}" ${checked ? "checked" : ""}>
                <span>加入对比</span>
              </label>
              <button type="button" class="btn btn-primary" data-open-company="${escapeHtml(c.id)}">查看完整档案</button>
            </footer>
          </article>
        `;
      })
      .join("");
  }

  function openCompanyDialog(companyId) {
    const c = companyMap.get(companyId);
    if (!c) return;

    document.getElementById("companyDialogMeta").textContent = `${c.city} · ${c.track} · ${c.companyType} · 核验于 ${c.researchedAt}`;
    document.getElementById("companyDialogTitle").textContent = `${c.name}（${c.fullName}）`;

    const rolesHtml = c.matchedRoles
      .map((mr) => {
        const rName = roleMap.get(mr.roleId)?.name || mr.roleId;
        const skillTags = mr.skills
          .map((sk) => `<span class="badge ${sk.level === "must" ? "badge-must" : "badge-accent"}" title="${escapeHtml(sk.detail)}">${sk.level === "must" ? "必" : "加"} · ${escapeHtml(sk.name)}</span>`)
          .join("");
        return `
          <div class="dialog-section">
            <div class="badge-row" style="margin-block-end:8px">
              <strong>${escapeHtml(rName)}</strong>
              <span class="badge badge-neutral">倒班：${escapeHtml(mr.shiftWork)}</span>
              <span class="badge badge-warn">出差：${escapeHtml(mr.travelLevel)}</span>
            </div>
            <p class="muted" style="margin-block-end:8px">官方常见岗位名：${escapeHtml(mr.officialTitles.join(" / "))}</p>
            <p style="font-weight:700;margin-block-end:4px">核心职责</p>
            <ul style="margin-block-end:10px">${mr.responsibilities.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
            <p style="font-weight:700;margin-block-end:6px">提取技能栈</p>
            <div class="skill-chip-list" style="margin-block-end:10px">${skillTags}</div>
            <p style="font-weight:700;margin-block-end:4px">笔试 / 面试高频关注点</p>
            <ul>${mr.interviewFocus.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
          </div>
        `;
      })
      .join("");

    document.getElementById("companyDialogBody").innerHTML = `
      <div class="dialog-section">
        <h3>基地位置、产品与校招概览</h3>
        <dl class="info-kv">
          <div><dt>工作地点</dt><dd>${escapeHtml(c.districts.join("；"))}</dd></div>
          <div><dt>核心产品</dt><dd>${escapeHtml(c.coreProducts.join("、"))}</dd></div>
          <div><dt>厦理适配</dt><dd><strong>${escapeHtml(c.fitForXmut.level)}</strong> — ${escapeHtml(c.fitForXmut.reason)}</dd></div>
          <div><dt>培养机制</dt><dd>${escapeHtml(c.internshipAndRecruit.program)}</dd></div>
          <div><dt>投递渠道</dt><dd>${escapeHtml(c.internshipAndRecruit.channels.join("、"))}</dd></div>
          <div><dt>2027 实习</dt><dd>${escapeHtml(c.internshipAndRecruit.timelineNote)}</dd></div>
          <div><dt>配套福利</dt><dd>${escapeHtml(c.internshipAndRecruit.benefits.join("、"))}</dd></div>
          <div><dt>证书/安全</dt><dd>${escapeHtml(c.workConditionSummary.certNote)}</dd></div>
        </dl>
      </div>

      ${rolesHtml}

      <div class="dialog-section">
        <h3>优势与避坑提醒</h3>
        <p style="font-weight:700;color:var(--ok);margin-block-end:4px">主要亮点</p>
        <ul style="margin-block-end:10px">${c.prosAndCons.pros.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
        <p style="font-weight:700;color:var(--warn);margin-block-end:4px">投递前需注意</p>
        <ul>${c.prosAndCons.watchouts.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
      </div>

      <div class="dialog-section">
        <h3>公开信息核验来源</h3>
        <ul>${c.sources.map((s) => `<li>${escapeHtml(s.label)}（核验日期：${escapeHtml(s.date)}）</li>`).join("")}</ul>
      </div>
    `;

    document.getElementById("companyDialog").showModal();
  }

  /* =========================================================================
     7. 多企横向对比（遵循 responsive-table 指南）
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
      host.innerHTML = `<div class="empty-state">请至少勾选 2 家已深挖企业进行横向对比（最多建议同时对比 4 家）。</div>`;
      return;
    }

    const colVars = selected
      .map((c, idx) => `--col-${idx + 2}: "${c.name}（${c.city}）"`)
      .join("; ");

    const rows = [
      {
        label: "所在城市与片区",
        cell: (c) => `${escapeHtml(c.city)}<br><span class="muted">${escapeHtml(c.districts.join("；"))}</span>`
      },
      {
        label: "主营赛道与产品",
        cell: (c) => `<strong>${escapeHtml(c.track)}</strong><br>${escapeHtml(c.coreProducts.join("、"))}`
      },
      {
        label: "匹配你的探索岗位",
        cell: (c) => c.matchedRoles.map((m) => `<span class="badge badge-accent" style="margin:2px 4px 2px 0">${escapeHtml(roleMap.get(m.roleId)?.shortName || m.roleId)}</span>`).join("")
      },
      {
        label: "红线必备硬技能",
        cell: (c) => {
          const musts = Array.from(new Set(c.matchedRoles.flatMap((m) => m.skills.filter((s) => s.level === "must").map((s) => s.name))));
          return `<ul>${musts.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>`;
        }
      },
      {
        label: "加分项",
        cell: (c) => {
          const plus = Array.from(new Set(c.matchedRoles.flatMap((m) => m.skills.filter((s) => s.level === "plus").map((s) => s.name))));
          return plus.length ? `<ul>${plus.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>` : `<span class="muted">暂无单独列示</span>`;
        }
      },
      {
        label: "倒班与出差常态",
        cell: (c) => `<strong>倒班：</strong>${escapeHtml(c.workConditionSummary.shiftWork)}<br><strong>出差：</strong>${escapeHtml(c.workConditionSummary.travelLevel)}`
      },
      {
        label: "笔面试高频考点",
        cell: (c) => {
          const qs = c.matchedRoles.flatMap((m) => m.interviewFocus).slice(0, 4);
          return `<ul>${qs.map((q) => `<li>${escapeHtml(q)}</li>`).join("")}</ul>`;
        }
      },
      {
        label: "校招培养与福利",
        cell: (c) => `${escapeHtml(c.internshipAndRecruit.program)}<br><span class="muted">${escapeHtml(c.internshipAndRecruit.benefits.join(" / "))}</span>`
      },
      {
        label: "厦门理工匹配建议",
        cell: (c) => `<strong>${escapeHtml(c.fitForXmut.level)}</strong><br>${escapeHtml(c.fitForXmut.reason)}`
      }
    ];

    host.innerHTML = `
      <div tabindex="0" role="region" aria-labelledby="compare-caption" class="table-wrapper">
        <table class="radar-table" style="${colVars}">
          <caption id="compare-caption">已选 ${selected.length} 家企业横向对比（窄屏自动切换为纵向卡片对比）</caption>
          <thead>
            <tr>
              <th>对比维度</th>
              ${selected.map((c) => `<th>${escapeHtml(c.name)}（${escapeHtml(c.city)}）</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (r) => `
                  <tr>
                    <th>${escapeHtml(r.label)}</th>
                    ${selected.map((c) => `<td>${r.cell(c)}</td>`).join("")}
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
     8. 五大岗位透视
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
              <div class="role-block-title">已汇总的高频技能（随企业增加自动丰富）</div>
              ${
                topSkills.length
                  ? `<div class="skill-chip-list">${topSkills
                      .map((sk) => `<span class="badge ${sk.mustCount > 0 ? "badge-must" : "badge-neutral"}">${escapeHtml(sk.name)} (${sk.count}/${rs.companyCount})</span>`)
                      .join("")}</div>`
                  : `<p class="muted" style="margin:0">等待队列推进到对应行业企业后自动填充。</p>`
              }
            </div>

            <div>
              <div class="role-block-title">对应你的课程基础</div>
              <div class="skill-chip-list">${r.courseLinks.map((cl) => `<span class="badge badge-neutral">${escapeHtml(cl)}</span>`).join("")}</div>
            </div>

            <div>
              <div class="role-block-title">未来最对口的零硬件简历项目方向</div>
              <p style="margin:0;font-size:0.88rem;color:var(--accent);font-weight:600">${escapeHtml(r.starterProjectHint)}</p>
            </div>
          </article>
        `;
      })
      .join("");
  }

  /* =========================================================================
     9. 每日队列与日志
     ========================================================================= */
  function renderQueuePanel() {
    document.getElementById("changelogTimeline").innerHTML = [...DATA.changelog]
      .reverse()
      .map((item) => {
        const names = item.addedCompanies.map((id) => companyMap.get(id)?.name || id).join(" + ");
        return `
          <div class="changelog-item">
            <div class="changelog-meta">DAY ${item.day} · ${escapeHtml(item.date)} · 新增：${escapeHtml(names)}</div>
            <div style="font-weight:700;margin-block-end:4px">${escapeHtml(item.headline)}</div>
            <p class="muted" style="margin:0">${escapeHtml(item.keyTakeaway)}</p>
          </div>
        `;
      })
      .join("");

    const colVars = `--col-2: "城市"; --col-3: "赛道"; --col-4: "优先级"; --col-5: "状态"; --col-6: "深挖关注点"`;
    document.getElementById("queueTableHost").innerHTML = `
      <div tabindex="0" role="region" aria-labelledby="queue-caption" class="table-wrapper">
        <table class="radar-table" style='${colVars}'>
          <caption id="queue-caption">20 家厦泉目标企业每日深挖排期（每天推进 1～2 家）</caption>
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
                  ? `<button type="button" class="skill-name-btn" data-open-company="${escapeHtml(it.id)}">#${it.order} ${escapeHtml(it.name)}</button>`
                  : `#${it.order} ${escapeHtml(it.name)}`;
                return `
                  <tr>
                    <th>${nameHtml}</th>
                    <td>${escapeHtml(it.city)}</td>
                    <td>${escapeHtml(it.track)}</td>
                    <td><span class="badge ${it.priority === "S" ? "badge-must" : "badge-accent"}">${escapeHtml(it.priority)} 级</span></td>
                    <td>${statusBadge}</td>
                    <td>${escapeHtml(it.focusHint)}</td>
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
     10. 全局事件委托与进度导入导出
     ========================================================================= */
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
    document.getElementById("companySearchInput").addEventListener("input", (e) => {
      state.companyQuery = e.target.value;
      renderCompaniesPanel();
    });

    document.getElementById("jumpToCompareBtn").addEventListener("click", () => {
      tabApi.activateByPanelId("panel-compare");
    });

    document.addEventListener("click", (e) => {
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

      const statusBtn = e.target.closest(".status-btn");
      if (statusBtn) {
        state.skillProgress[statusBtn.dataset.skill] = statusBtn.dataset.state;
        saveSkillProgress();
        renderKpis();
        renderSkillsPanel();
      }
    });

    document.addEventListener("change", (e) => {
      const chk = e.target.closest(".compare-check");
      if (!chk) return;
      const id = chk.dataset.compareId;
      if (chk.checked) {
        if (!state.compareIds.includes(id)) {
          if (state.compareIds.length >= 4) {
            state.compareIds.shift();
          }
          state.compareIds.push(id);
        }
      } else {
        state.compareIds = state.compareIds.filter((x) => x !== id);
      }
      renderCompaniesPanel();
      renderComparePanel();
    });

    // 导出与导入个人技能进度（方便电脑/手机跨设备同步）
    document.getElementById("exportProgressBtn").addEventListener("click", () => {
      const payload = {
        exportedAt: new Date().toISOString(),
        skillProgress: state.skillProgress
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `xiaquan-ee-skill-progress-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    document.getElementById("importProgressInput").addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const parsed = JSON.parse(await file.text());
        if (parsed && typeof parsed.skillProgress === "object") {
          state.skillProgress = parsed.skillProgress;
          saveSkillProgress();
          renderKpis();
          renderSkillsPanel();
          alert("已成功导入你的个人技能自检进度！");
        } else {
          alert("文件格式不正确：缺少 skillProgress 字段。");
        }
      } catch (err) {
        alert("导入失败：" + err.message);
      }
      e.target.value = "";
    });
  }

  /* =========================================================================
     启动初始化
     ========================================================================= */
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
  renderRolesPanel();
  renderQueuePanel();
})();
