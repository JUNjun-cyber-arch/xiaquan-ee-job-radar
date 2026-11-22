# 厦泉电气自动化 2027 暑期实习情报雷达

面向厦门理工学院电气工程及其自动化本科生（2028 届）打造的**增量式企业调研、岗位技能统计与横向对比平台**。  
采用“**每天深挖 1～2 家企业 → 校验落盘 → 自动重算全库技能热力榜**”的滚动模式，随着调研企业增多，5 大目标岗位的核心技能要求会越来越清晰。

## 快速打开网站（线上公网 + 本地离线双可用）
- **线上公网网址（任何电脑和手机随时打开）**：[https://junjun-cyber-arch.github.io/xiaquan-ee-job-radar/](https://junjun-cyber-arch.github.io/xiaquan-ee-job-radar/)
- **本机离线打开**：直接双击 [`web/index.html`](file:///D:/Antigravity/XiaQuan_EE_Job_Radar/web/index.html)（已内嵌离线数据包 `web/data-bundle.js`，无需启动服务器）。
- **本地校验重建**：
  ```powershell
  node D:/Antigravity/XiaQuan_EE_Job_Radar/scripts/build_and_verify.mjs
  ```
- **校验并自动推送至 GitHub Pages**：
  ```powershell
  python D:/Antigravity/XiaQuan_EE_Job_Radar/scripts/publish_pages.py
  ```

## 目录结构
- `data/roles.json`：5 大探索岗位定义（设备电气 / PLC 调试 / 设备工程 / 产品测试 / 技术支持）。
- `data/queue.json`：20 家厦泉目标企业每日深挖队列与进度状态。
- `data/companies/*.json`：每家企业一份独立的结构化深度档案（强制带公开信息来源，未知项如实标明“待核实”）。
- `data/changelog.json`：每日深挖更新日志与趋势洞察。
- `scripts/build_and_verify.mjs`：Schema 校验 + 跨企业/分岗位技能频次自动统计 + 网站数据包与 Markdown 汇总生成器。
- `reports/`：每日双企深挖简报与自动更新的跨企业技能总榜。
- `web/`：支持亮/暗双色、手机自适应的统计分析与多企横向对比网站。
