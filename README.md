# 厦泉电气自动化 2027 暑期实习情报雷达（v2）

面向厦门理工学院电气工程及其自动化本科生（2028 届）打造的**增量式企业调研、岗位技能统计与横向对比平台**。  
采用“**每天深挖 1～2 家企业 → 严格契约校验 → 自动重算双口径技能榜与 GitHub Pages 同步**”模式，区分往年真实实习 JD、校招折算与待核实线索。

## 快速打开网站（线上公网 + 本地离线双可用）
- **线上公网网址**：[https://junjun-cyber-arch.github.io/xiaquan-ee-job-radar/](https://junjun-cyber-arch.github.io/xiaquan-ee-job-radar/)
- **本机离线打开**：直接双击 [`web/index.html`](file:///D:/Antigravity/XiaQuan_EE_Job_Radar/web/index.html)（内嵌离线数据包 `web/data-bundle.js`，打包分发请保持 `web/` 目录下 4 个文件同目录）。
- **本地校验重建**：
  ```powershell
  node D:/Antigravity/XiaQuan_EE_Job_Radar/scripts/build_and_verify.mjs
  ```
- **安全推送至 GitHub Pages**：
  - 日常增量发布（仅允许 `data/`、`reports/`、`web/data-bundle.js`、`docs/` 变更）：
    ```powershell
    python D:/Antigravity/XiaQuan_EE_Job_Radar/scripts/publish_pages.py
    ```
  - 人工发版（含前端/脚本代码变更）：
    ```powershell
    python D:/Antigravity/XiaQuan_EE_Job_Radar/scripts/publish_pages.py --allow-all "feat: release message"
    ```

## 目录结构
- `data/roles.json`：5 大探索岗位定义（设备电气 / PLC 调试 / 设备工程 / 产品测试 / 技术支持）。
- `data/skills_catalog.json`：v2 标准技能词典（8 大分类 + 28 项标准技能 + 厦理对应课程 + 零硬件微练习）。
- `data/queue.json`：20 家厦泉目标企业滚动队列与 `phase2Candidates` 二期候选池。
- `data/companies/*.json`：分企业结构化档案（含 `summerFit` 8 周适配枚举、`windowGroup` 投递窗口与带 `sourceKind`/`url`/`lead` 的可核验来源）。
- `data/changelog.json`：按唯一 `batchId` 与 `reportFile` 精确关联的每日推进日志。
- `scripts/build_and_verify.mjs`：v2 严格 Schema 校验 + 企业去重/岗位提及双口径统计 + 网站数据包与 `reports/summary_skills_ranking.md` 生成器。
- `scripts/publish_pages.py`：带单实例锁、远端分叉检查、日常写范围门禁与一次性临时凭据辅助的自动发布脚本。
- `web/` 与 `docs/`：支持亮/暗双色、手机自适应、8 周筛选、2027 投递日历与日报阅读、岗位准备度、URL 直达及 Markdown 备战卡导出的前端站点。
