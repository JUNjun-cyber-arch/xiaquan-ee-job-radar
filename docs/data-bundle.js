/* 自动生成文件，请勿手动编辑。运行 node scripts/build_and_verify.mjs 更新 */
window.__RADAR_DATA__ = {
  "generatedAt": "2026-11-22",
  "overview": {
    "totalCompanies": 4,
    "totalQueue": 20,
    "pendingQueue": 16,
    "completionPct": 20,
    "totalMatchedRoleInstances": 12,
    "uniqueSkillCount": 25,
    "cityCounts": {
      "厦门": 3,
      "泉州": 1
    },
    "trackCounts": {
      "电力电子/储能与配电": 3,
      "高端装备与智能制造": 1
    }
  },
  "roles": [
    {
      "id": "equip-elec",
      "name": "设备电气工程师",
      "shortName": "设备电气",
      "category": "设计与集成",
      "summary": "负责非标自动化产线、成套装备或工业控制柜的电气方案设计、原理图/接线图绘制、低压元器件与驱动选型、BOM 编制及配电规范把关。",
      "typicalDay": "画 EPLAN/AutoCAD 电气图、算负载选断路器/接触器/变频器/线径、跟机械和装配核对电柜布局、处理车间接线与上电调试问题。",
      "courseLinks": [
        "电路（三相/功率）",
        "电机学（异步电机与起动）",
        "电气控制（待补）"
      ],
      "starterProjectHint": "低压电机与控制柜国标选型器 + 经典控制回路接线排故沙盒"
    },
    {
      "id": "plc-debug",
      "name": "PLC 控制与调试工程师",
      "shortName": "PLC 调试",
      "category": "控制与调试",
      "summary": "负责工业产线或成套装备的 PLC 程序编写、HMI 触摸屏/上位机组态、伺服与变频器参数调试以及厂内/客户现场联机交付。",
      "typicalDay": "写西门子/三菱/汇川梯形图或 ST 程序、对 I/O 点表、调气缸传感器动作时序、排查通信丢包与联机动作卡滞。",
      "courseLinks": [
        "自动控制原理",
        "电路逻辑基础",
        "电气控制与 PLC（待补）"
      ],
      "starterProjectHint": "浏览器 PLC 梯形图/ST 逻辑仿真与安全互锁校验平台"
    },
    {
      "id": "fab-equip",
      "name": "设备工程师（制造/晶圆/面板/电池）",
      "shortName": "设备工程",
      "category": "产线运维与改善",
      "summary": "负责半导体、显示面板、锂电或精密制造工厂大型生产设备的日常点检维护、故障快速复机、OEE 良率提升与自动化改善。",
      "typicalDay": "看设备报警日志、排查传感器/气动/电气故障缩短停机时间、执行预防性保养（PM）、做备件与工艺稳定性改善项目。",
      "courseLinks": [
        "电路基础",
        "自动控制原理",
        "机电综合基础"
      ],
      "starterProjectHint": "设备故障树排故 SOP 知识库 + Modbus/传感器运行日志分析工具"
    },
    {
      "id": "ee-test",
      "name": "电气产品测试工程师",
      "shortName": "产品测试",
      "category": "研发验证与质量",
      "summary": "负责电源（UPS）、储能变流器（PCS）、光伏逆变器、继电器或开关设备的测试用例设计、电性能/安规/EMC/可靠性测试、波形分析与缺陷闭环。",
      "typicalDay": "搭测试台架、用示波器/功率分析仪/电子负载抓纹波与效率数据、复现偶发保护/炸机异常、定位根因并输出规范测试报告。",
      "courseLinks": [
        "电力电子技术",
        "电路（正弦/三相/磁耦合）",
        "电机学",
        "自动控制原理"
      ],
      "starterProjectHint": "示波器/Multisim 波形 CSV 自动分析（有效值/纹波/THD/效率）与测试报告生成器"
    },
    {
      "id": "tech-support",
      "name": "电气技术支持 / 现场服务（FAE/FSE）",
      "shortName": "技术支持",
      "category": "客户与现场交付",
      "summary": "面向国内外客户与项目现场，承担设备安装指导、现场通电调试、紧急故障排查、技术培训以及售前配置选型与研发问题回传。",
      "typicalDay": "看电气图纸定位客户现场跳闸/通信中断故障、远程或出差现场带电调试、写排故报告、向研发反馈现场共性缺陷。",
      "courseLinks": [
        "电路基础",
        "电力电子技术",
        "电机学"
      ],
      "starterProjectHint": "工业现场 Modbus/串口协议调试瑞士军刀 + 典型设备故障决策树"
    }
  ],
  "queue": {
    "updatedAt": "2026-11-22",
    "dailyTargetCount": 2,
    "items": [
      {
        "order": 1,
        "id": "kehua-data",
        "name": "科华数据",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "S",
        "status": "done",
        "researchedAt": "2026-11-22",
        "focusHint": "UPS/储能PCS/光伏逆变器，重点扒硬件测试与技术支持岗"
      },
      {
        "order": 2,
        "id": "nflg",
        "name": "南方路机",
        "city": "泉州",
        "track": "高端装备与智能制造",
        "priority": "S",
        "status": "done",
        "researchedAt": "2026-11-22",
        "focusHint": "泉州洛江上市装备龙头，重点扒设备电气设计与PLC调试/售后"
      },
      {
        "order": 3,
        "id": "abb-xiamen",
        "name": "ABB（厦门工业中心）",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "S",
        "status": "done",
        "researchedAt": "2026-11-22",
        "focusHint": "中低压开关柜与配电外企标杆，扒电气工程/设备维护/技术支持与英语门槛"
      },
      {
        "order": 4,
        "id": "hithium",
        "name": "海辰储能",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "S",
        "status": "done",
        "researchedAt": "2026-11-22",
        "focusHint": "厦门同安储能独角兽，扒设备工程/电气测试/储能系统技术支持"
      },
      {
        "order": 5,
        "id": "hongfa",
        "name": "宏发股份",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "S",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "全球继电器龙头，重点扒设备电气/自动化装备开发/产品测试岗"
      },
      {
        "order": 6,
        "id": "schneider-xiamen",
        "name": "施耐德电气（厦门）",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "外企中低压配电与工业自动化，对比ABB看实习门槛与岗位差异"
      },
      {
        "order": 7,
        "id": "fara-electronics",
        "name": "法拉电子",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "薄膜电容全球龙头，扒设备电气/测试与产线自动化岗"
      },
      {
        "order": 8,
        "id": "tianma-xiamen",
        "name": "天马微电子（厦门）",
        "city": "厦门",
        "track": "半导体/光电与精密制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "翔安显示面板大厂，扒设备工程师/厂务电气真实倒班与培养情况"
      },
      {
        "order": 9,
        "id": "sanan-opto",
        "name": "三安光电（厦门/泉州）",
        "city": "厦门/泉州",
        "track": "半导体/光电与精密制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "跨厦泉双基地，对比光电芯片设备工程与厂务动力电气岗"
      },
      {
        "order": 10,
        "id": "uscxm",
        "name": "联芯集成电路",
        "city": "厦门",
        "track": "半导体/光电与精密制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "翔安晶圆厂，扒设备工程师/厂务电力系统要求与双非匹配度"
      },
      {
        "order": 11,
        "id": "silan-xiamen",
        "name": "士兰集科 / 士兰明镓",
        "city": "厦门",
        "track": "半导体/光电与精密制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "海沧功率半导体晶圆制造，扒设备工程与测试岗"
      },
      {
        "order": 12,
        "id": "intretech",
        "name": "盈趣科技",
        "city": "厦门",
        "track": "高端装备与智能制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "海沧智能制造与电子产品测试大户，扒自动化电气与测试工程岗"
      },
      {
        "order": 13,
        "id": "xiamen-ampace",
        "name": "厦门新能安（Ampace）",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "宁德时代与ATL合资储能/小动力电池企业，扒测试/设备/自动化岗"
      },
      {
        "order": 14,
        "id": "jomoo",
        "name": "九牧集团（智能工厂）",
        "city": "泉州",
        "track": "高端装备与智能制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "南安5G智能工厂标杆，扒PLC自动化控制与产线设备电气岗"
      },
      {
        "order": 15,
        "id": "ttm-quanzhou",
        "name": "铁拓机械",
        "city": "泉州",
        "track": "高端装备与智能制造",
        "priority": "B",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "泉州洛江北交所上市装备厂，与南方路机横向对比电控与PLC栈"
      },
      {
        "order": 16,
        "id": "kinglong",
        "name": "金龙客车",
        "city": "厦门",
        "track": "高端装备与智能制造",
        "priority": "B",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "集美新能源整车，扒三电测试/整车电气与售后技术支持"
      },
      {
        "order": 17,
        "id": "runner-xiamen",
        "name": "建霖家居（智能制造）",
        "city": "厦门",
        "track": "高端装备与智能制造",
        "priority": "B",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "集美上市制造企业，扒自动化设备电气与测试工程岗"
      },
      {
        "order": 18,
        "id": "tpv-xiamen",
        "name": "冠捷显示科技（厦门）",
        "city": "厦门",
        "track": "半导体/光电与精密制造",
        "priority": "B",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "翔安大型电子制造厂，扒测试工程与产线自动化设备岗"
      },
      {
        "order": 19,
        "id": "sinochem-quanzhou",
        "name": "中化泉州石化",
        "city": "泉州",
        "track": "流程工业与能源央国企",
        "priority": "B",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "泉州惠安大型流程工业，扒电气运行维护/继电保护与仪表自动化"
      },
      {
        "order": 20,
        "id": "xiamen-tungsten",
        "name": "厦门钨业 / 厦钨新能",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "B",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "厦门新能源电池正极材料龙头，扒工厂设备电气与自动化控制岗"
      }
    ]
  },
  "changelog": [
    {
      "day": 1,
      "date": "2026-11-22",
      "addedCompanies": [
        "kehua-data",
        "nflg"
      ],
      "headline": "雷达建站首发：厦门电力电子龙头「科华数据」× 泉州高端装备龙头「南方路机」深度对撞",
      "keyTakeaway": "首轮双企对比立刻暴露出两条截然不同的技能路线：电力电子测试/技术支持看重示波器、功率分析仪、Buck/Boost/逆变拓扑与 Modbus/CAN；高端装备电控/PLC 调试看重 AutoCAD/EPLAN、西门子 PLC、HMI 与变频器选型。而「电气原理图识读」与「现场排故逻辑」在两家 100% 重合。"
    },
    {
      "day": 2,
      "date": "2026-11-22",
      "addedCompanies": [
        "abb-xiamen",
        "hithium"
      ],
      "headline": "自动化试运行补齐 5/5 全岗位覆盖：「ABB 厦门工业中心」×「海辰储能」深度入库",
      "keyTakeaway": "样本扩至 4 家（12 条岗位）后趋势明显拉清：① 电气原理图识读、低压配电选型、现场故障诊断、技术文档编写、客户沟通 5 项均达到 4/4（100%）全覆盖；② AutoCAD/EPLAN、主流 PLC 编程与英语技术交流飙升至 3/4（75%）；③ 新增的「设备工程师（制造）」岗位明确暴露产线两班倒/白夜班特征，选岗决策必须把“是否接受倒班”和“是否接受出差”前置。"
    }
  ],
  "companies": [
    {
      "id": "kehua-data",
      "name": "科华数据",
      "fullName": "科华数据股份有限公司",
      "city": "厦门",
      "districts": [
        "湖里区火炬高新区（马垄路总部/研发）",
        "翔安区（大型产业园/智造基地）"
      ],
      "track": "电力电子/储能与配电",
      "companyType": "A股上市民企（SZ 002335）",
      "coreProducts": [
        "高端电源（UPS）",
        "数据中心（IDC）",
        "光伏逆变器（PV）",
        "储能变流器（PCS）",
        "充电桩"
      ],
      "researchedAt": "2026-11-22",
      "fitForXmut": {
        "level": "高匹配（厦门本地核心对口）",
        "reason": "本科及以上面向电气工程及其自动化等专业开放硬件测试与技术支持岗；厦门总部及翔安基地就在本地，常覆盖福建高校宣讲，与电力电子/电路课程高度吻合。"
      },
      "internshipAndRecruit": {
        "channels": [
          "科华数据官方校招网站",
          "“科华招聘”微信公众号",
          "厦门/福建高校宣讲会（现场可投递）"
        ],
        "program": "“科班计划”应届生培养体系（入职集训 + 车间/基地实践 + 导师一对一带教 + 专业/管理双通道）",
        "timelineNote": "历年覆盖秋招、春招及暑期实习生招聘；2027 届暑期实习具体开放日期与实习日薪待 2027 春季官网公告核实。",
        "benefits": [
          "六险一金",
          "应届生宿舍/人才公寓",
          "园区食堂与免费班车",
          "带薪年假与定期体检"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "无产线倒班（研发测试坐班为主）",
        "travelLevel": "分岗位：硬件测试极少出差；技术支持/FAE 高频国内或海外出差/驻场",
        "certNote": "公开校招 JD 未强制要求提前持有电工证，但现场技术支持要求掌握强弱电安全常识（入职后按岗位安排培训取证，具体待核实）。"
      },
      "matchedRoles": [
        {
          "roleId": "ee-test",
          "officialTitles": [
            "硬件测试工程师（电力电子/电源方向）",
            "自动化测试工程师"
          ],
          "responsibilities": [
            "负责 UPS、储能变流器（PCS）、光伏逆变器、充电桩等电力电子产品的测试方案、测试计划拟定与用例设计",
            "搭建实验室测试环境，完成样机的电气性能、安规、EMC、环境及可靠性验证",
            "对软硬件缺陷进行定位、跟踪、分析与闭环，协助研发找根因（Root Cause）并输出规范测试报告"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "运放、逻辑门、二极管/三极管/MOS 管特性与过流过压保护电路"
            },
            {
              "name": "电力电子拓扑（整流/斩波/逆变）",
              "category": "基础理论",
              "level": "must",
              "detail": "AC/DC、DC/DC（Buck/Boost）、DC/AC 逆变与 PWM/SPWM 原理"
            },
            {
              "name": "示波器与万用表实操",
              "category": "仪器测试",
              "level": "must",
              "detail": "重点考察用示波器测开关电源纹波与噪声、异常波形抓取"
            },
            {
              "name": "功率分析仪与电子负载",
              "category": "仪器测试",
              "level": "must",
              "detail": "可编程交直流电源、电子负载、高精度功率分析仪等大功率测试设备"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "看懂功率板与控制板原理图，协助定位硬件失效点"
            },
            {
              "name": "安规与 EMC 测试基础",
              "category": "仪器测试",
              "level": "must",
              "detail": "熟悉基本安规、电磁兼容（EMC）与环境可靠性测试规范"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "测试用例编写、数据整理与缺陷闭环报告输出"
            },
            {
              "name": "C 语言与自动化脚本基础",
              "category": "软件与脚本",
              "level": "plus",
              "detail": "便于烧录调试或开发自动化测试脚本"
            },
            {
              "name": "竞赛或电源实测项目经历",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "全国电赛、实验室电源/逆变器调试或故障排查闭环经历优先"
            }
          ],
          "interviewFocus": [
            "线上机考通常含行测 + 模电/数电/电力电子基础（Buck/Boost、MOS 管、运放）",
            "高频技术问：如何用示波器准确测量开关电源纹波与噪声？",
            "高频技术问：MOS 管、电容、电感/变压器选型思路及过流/过压保护怎么做？",
            "项目深挖：板子烧过或出过什么 Bug，你是怎么一步步定位并闭环解决的？"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "tech-support",
          "officialTitles": [
            "技术支持工程师",
            "售后技术支持工程师",
            "现场技术支持（FAE/FES）"
          ],
          "responsibilities": [
            "负责高端电源（UPS）、数据中心及光储充产品在国内外市场的技术支持、现场安装指导与系统调试",
            "远程或赴项目现场快速诊断与排查设备电气故障，保障系统安全稳定运行",
            "开展客户技术培训，收集现场运行数据与痛点并反馈至研发与质量团队"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "能现场看懂整机强弱电控制回路图纸"
            },
            {
              "name": "电力电子拓扑（整流/斩波/逆变）",
              "category": "基础理论",
              "level": "must",
              "detail": "理解 UPS、光伏逆变器、储能变流器的基本工作原理"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "掌握强弱电安全常识与基本配电系统结构"
            },
            {
              "name": "Modbus / CAN / RS485 通信",
              "category": "通信协议",
              "level": "must",
              "detail": "现场设备监控、后台通信联调常用总线协议"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "能用万用表/常规仪表按步骤隔离定位现场报错与跳闸故障"
            },
            {
              "name": "客户沟通与现场抗压",
              "category": "工程与软实力",
              "level": "must",
              "detail": "能安抚紧急故障现场客户情绪并清晰传达技术方案，适应出差驻场"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "海外 FAE/技术支持方向重点考察英语听说读写"
            }
          ],
          "interviewFocus": [
            "经典场景题：如果现场一台大功率 UPS 开机报错并跳闸，你的排查步骤是什么？",
            "压力情景题：客户现场情绪激动且设备突发停机，如何第一时间安抚并推进排查？",
            "稳定性考察：能否接受国内或海外高频出差、项目现场驻场？"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "高频出差/驻场"
        }
      ],
      "prosAndCons": {
        "pros": [
          "厦门本土上市龙头，研发与生产基地都在本地（火炬园/翔安），离校近、对福建工科本科生友好",
          "硬件测试岗与你在学的《电力电子》《电路》《电机学》课程契合度极高，无需先精通 PLC 就能切入",
          "“科班计划”应届生培养与食宿班车配套较完整"
        ],
        "watchouts": [
          "技术支持/FAE 方向出差和项目驻场频率高，投递前需明确自己对出差的接受度",
          "核心电力电子研发岗偏向硕士或强竞赛背景，本科生优先瞄准「硬件测试」与「技术支持」成功率更高"
        ]
      },
      "sources": [
        {
          "label": "科华数据官网校招/人才培养介绍（kehua.com.cn）",
          "date": "2026-11-22"
        },
        {
          "label": "高校就业网科华数据校招简章（lzu.edu.cn / ncu.edu.cn / xujc.com）",
          "date": "2026-11-22"
        },
        {
          "label": "公开招聘平台科华硬件测试与技术支持岗位 JD 与面经汇总（liepin / nowcoder）",
          "date": "2026-11-22"
        }
      ]
    },
    {
      "id": "nflg",
      "name": "南方路机",
      "fullName": "福建南方路面机械股份有限公司",
      "city": "泉州",
      "districts": [
        "泉州市洛江区/丰泽区高新产业园（总部及核心制造研发基地）"
      ],
      "track": "高端装备与智能制造",
      "companyType": "A股上市民企（SH 603280）",
      "coreProducts": [
        "沥青/混凝土搅拌站",
        "机制砂成套设备",
        "固废资源化处理生产线",
        "装备智控自动化系统"
      ],
      "researchedAt": "2026-11-22",
      "fitForXmut": {
        "level": "高匹配（福建省内高校重点宣讲）",
        "reason": "公开校招信息明确重视福建省内工科院校（含厦门理工学院、华侨大学、福州大学），本科面向电气工程及其自动化招收研发智控、PLC 调试与售后技术支持，且接受优秀在校生实习。"
      },
      "internshipAndRecruit": {
        "channels": [
          "南方路机官网校园招聘（nflg.com）",
          "福建省内高校线下/线上宣讲会（现场常直接初试）",
          "招聘平台实习生通道"
        ],
        "program": "导师一对一带教 + “车间实践 + 研发/调试轮岗 + 课题研究”培养体系",
        "timelineNote": "历年面向 2024–2027 届高校本科及硕士校招，并接受优秀在校生日常或暑期实习；2027 暑期实习具体名额与批次时间待官网最新简章核实。",
        "benefits": [
          "集体宿舍（空调/热水器）",
          "厂区福利食堂",
          "对接泉州/洛江工科毕业生安居、社保及落户补贴政策",
          "公开参考本科起薪约 5k–8k（以当年简章为准）"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "无流水线倒班（研发/厂内调试正常作息）",
        "travelLevel": "分岗位：智控研发以泉州总部为主偶尔出差；PLC 现场调试与售后技术支持需高频全国/海外出差",
        "certNote": "公开校招 JD 未强制要求提前持证，但强调低压配电安全、控制柜元器件认识与现场调试动手能力（电工证要求待核实）。"
      },
      "matchedRoles": [
        {
          "roleId": "equip-elec",
          "officialTitles": [
            "电气工程师（技术研发类/智控事业部）",
            "电气控制系统设计工程师"
          ],
          "responsibilities": [
            "负责搅拌站、机制砂及环保装备电气控制系统方案设计与优化",
            "绘制控制柜电气原理图、接线图，编制 PLC、变频器、低压电器、传感器选型与 BOM 清单",
            "编制电气使用说明书、操作规程、调试大纲及出厂技术文件"
          ],
          "skills": [
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "熟练应用 AutoCAD 或 EPLAN 绘制电气原理图与接线图"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "面试高频必查基础能力，能读懂成套设备强弱电图纸"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "了解低压配电、断路器/接触器/传感器/执行机构接线与 BOM 编制"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "must",
              "detail": "熟悉至少一种主流 PLC（如西门子 S7-1200/1500、施耐德、三菱）"
            },
            {
              "name": "变频器与电机调试",
              "category": "PLC与自动化",
              "level": "must",
              "detail": "了解三相电机控制、变频器参数配置与调速应用"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "能规范编制操作规程、调试大纲与出厂电气说明书"
            },
            {
              "name": "SolidWorks 机械识图基础",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "方便与机械结构团队协作确定电柜与传感器安装位"
            }
          ],
          "interviewFocus": [
            "宣讲会现场常直接安排一轮初试，建议带纸质简历并坐前排",
            "必问专业项：能不能看懂电气原理图？熟悉哪家 PLC 品牌？电路基础是否扎实？",
            "追问在校电赛、单片机或实习项目里自己独立负责的具体模块"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "偶尔出差"
        },
        {
          "roleId": "plc-debug",
          "officialTitles": [
            "PLC 调试工程师",
            "自动化控制工程师（智控方向）"
          ],
          "responsibilities": [
            "编写并优化大型工程机械与成套生产线的 PLC 控制程序",
            "参与人机界面（HMI/触摸屏）及上位机组态软件画面与逻辑开发",
            "负责设备在泉州厂内或项目现场的电气联调、PLC 程序现场调试与信号异常排除"
          ],
          "skills": [
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "must",
              "detail": "主流西门子 S7-1200/1500、施耐德、三菱等控制逻辑编写与联调"
            },
            {
              "name": "HMI 触摸屏与组态软件",
              "category": "PLC与自动化",
              "level": "must",
              "detail": "触摸屏画面与上位机监控逻辑开发"
            },
            {
              "name": "变频器与电机调试",
              "category": "PLC与自动化",
              "level": "must",
              "detail": "多电机协同启停、变频调速与传感器信号接入"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "按图查线、查 I/O 点表与控制柜回路"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "解决联调和运行中的信号异常、电气故障与控制逻辑 Bug"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "熟悉现场传感器、气动/电动执行机构接线规范"
            }
          ],
          "interviewFocus": [
            "考察 PLC 编程与基本控制逻辑（如电机启停互锁、时序控制、模拟量采集思路）",
            "考察厂内/现场联调动手能力与跨部门（机械/工艺）协作沟通"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "中～高频出差"
        },
        {
          "roleId": "tech-support",
          "officialTitles": [
            "售后服务工程师（电气方向）",
            "工程技术支持工程师"
          ],
          "responsibilities": [
            "负责搅拌站、破碎筛分等大型装备在国内外客户现场的电气安装调试指导",
            "开展现场电气故障诊断、PLC 与控制系统维护及客户操作培训"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "现场独立按图纸查线定位电气故障"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "应对复杂工程现场突发停机与信号干扰问题"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "must",
              "detail": "能在线监控 PLC 状态排查程序与传感器故障"
            },
            {
              "name": "变频器与电机调试",
              "category": "PLC与自动化",
              "level": "must",
              "detail": "现场处理电机过载、变频器报警与参数重置"
            },
            {
              "name": "客户沟通与现场抗压",
              "category": "工程与软实力",
              "level": "must",
              "detail": "能适应全国及海外项目现场长期/频繁出差，具备良好培训与沟通能力"
            }
          ],
          "interviewFocus": [
            "几乎必问：对“设备在哪里，人就在哪里”的频繁出差怎么看？能否吃苦耐劳？",
            "考察是否愿意扎根泉州及工程机械行业的长期职业规划"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "高频出差/驻场"
        }
      ],
      "prosAndCons": {
        "pros": [
          "泉州本土高端装备上市龙头，对厦门理工等省内工科院校校招非常友好，进面门槛务实",
          "能完整接触成套重型装备的电控柜设计 + 西门子 PLC + HMI + 变频器全链路，极适合练就扎实工控基本功",
          "泉州洛江食宿配套完善，可叠加泉州工科人才安居与落户补贴"
        ],
        "watchouts": [
          "售后与现场调试岗出差强度非常大（常赴工地/矿山/海外项目现场），若偏好坐班应优先冲「智控研发/电气设计」",
          "相比科华数据，极度看重 AutoCAD/EPLAN 制图与西门子 PLC 实操，属于你需要大三下/寒假重点补齐的技能板块"
        ]
      },
      "sources": [
        {
          "label": "南方路机官网招聘与校招公告（nflg.com）",
          "date": "2026-11-22"
        },
        {
          "label": "高校就业网南方路机宣讲与培养简章（jlu.edu.cn / nankai.edu.cn / sdu.edu.cn）",
          "date": "2026-11-22"
        },
        {
          "label": "公开招聘平台南方路机电气与智控岗位信息（liepin / eoffcn）",
          "date": "2026-11-22"
        }
      ]
    },
    {
      "id": "abb-xiamen",
      "name": "ABB（厦门工业中心）",
      "fullName": "ABB 厦门工业中心（含厦门ABB开关/低压电器/电力设备等）",
      "city": "厦门",
      "districts": [
        "厦门火炬高新区（翔安）产业区 ABB 工业园"
      ],
      "track": "电力电子/储能与配电",
      "companyType": "跨国电气巨头（外企）",
      "coreProducts": [
        "中压/低压成套开关柜（如 MNS / UniGear）",
        "断路器与低压元器件",
        "互感器与绝缘件",
        "数字化智慧配电解决方案"
      ],
      "researchedAt": "2026-11-22",
      "fitForXmut": {
        "level": "中高匹配（极看重英语、标准化与实习转正）",
        "reason": "本科及以上面向电气工程及其自动化开放项目工程、设备维护、测试及技术支持实习/培训生；日常实习表现优异有转正绿色通道，但外企流程规范、英语口语和读写是关键分水岭。"
      },
      "internshipAndRecruit": {
        "channels": [
          "ABB 官方网站校招/实习页面",
          "“ABB中国招聘”微信公众号",
          "高校宣讲与日常实习生（Intern）内推通道"
        ],
        "program": "Power U / E Next / EngineerX 等系统化培训生与轮岗项目；日常实习生转正机会受重视",
        "timelineNote": "常年开放日常实习（Intern）及春秋校招培训生；2027 届暑期实习具体开放日期与实习补贴标准待官方渠道公布后核实。",
        "benefits": [
          "规范外企管理与 EHS 安全体系",
          "系统化轮岗与国际标准培训",
          "其余具体薪资/食宿细则以对应实体（开关/低压）当期 Offer 为准（待核实）"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "研发/项目工程/技术支持无倒班；工厂产线设备维护岗按工厂生产排班安排（具体是否倒班待面试核实）",
        "travelLevel": "分岗位：项目工程与设备维护以翔安园区为主偶尔出差；售后技术服务/海外支持需配合海内外项目出差",
        "certNote": "高度重视 EHS（环境、健康与安全）及 IEC/GB 电气安全标准；具体电工证要求依细分岗位而定（待核实）。"
      },
      "matchedRoles": [
        {
          "roleId": "equip-elec",
          "officialTitles": [
            "电气工程师（开关柜一次/二次设计）",
            "助理项目工程师",
            "Power U / E Next 工程培训生"
          ],
          "responsibilities": [
            "根据海内外客户及项目需求，负责中低压开关柜与配电系统的电气原理图设计、方案配置及优化",
            "参与国内外技术澄清会议与技术谈判，协助确认技术协议并支持数字化智能开关柜推广",
            "跟进项目交付进度，处理生产、安装或调试阶段的电气技术问题"
          ],
          "skills": [
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "外企极看重 EPLAN（宏、部件库、端子排、自动 BOM、规则检查）与 AutoCAD 规范出图"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "熟练读懂中低压成套开关柜一次主回路与二次控制/保护回路图纸"
            },
            {
              "name": "中低压开关柜一次/二次回路与继保",
              "category": "基础理论",
              "level": "must",
              "detail": "熟悉电力系统、高低压技术、断路器、互感器与继电保护基础及 IEC/GB 标准"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "掌握成套配电柜内断路器、继电器等元器件选型与技术协议配置"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "must",
              "detail": "外企硬门槛：英文自我介绍、英文技术手册阅读及邮件/会议沟通"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "熟悉西门子 S7-1200/1500 或 ABB AC500 及基本 I/O 分配逻辑更受青睐"
            },
            {
              "name": "Modbus / CAN / RS485 通信",
              "category": "通信协议",
              "level": "plus",
              "detail": "了解 Modbus、Profinet 或电力常用 IEC 61850 通信协议大加分"
            }
          ],
          "interviewFocus": [
            "几乎标配 2 分钟英文自我介绍 + 英文情景提问（如用英语介绍项目或沟通图纸修改）",
            "高频技术问：用 EPLAN 画过什么图？和 AutoCAD 相比 EPLAN 的核心优势是什么？",
            "专业基础：中低压开关柜一次/二次回路区别、断路器/互感器与继电保护基础概念",
            "外企文化面：看重 STAR 法则结构化表达、EHS 安全意识与合规规范性"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "偶尔出差"
        },
        {
          "roleId": "fab-equip",
          "officialTitles": [
            "设备维护培训生",
            "设备/制造工程师",
            "生产工程与持续改进专员"
          ],
          "responsibilities": [
            "负责翔安工厂生产设备、自动化产线及测试设备的日常维护、点检保养与大修计划落实，提升 OEE",
            "快速响应并排除产线设备电气与机械故障，缩短停机时间",
            "推动自动化升级改造与精益（Lean/IE）改善项目，编写并更新设备 SOP 与安全规程"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "能独立看懂产线自动化设备电气原理图与接线图"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "must",
              "detail": "熟悉 PLC 编程及在线排查产线自动化控制故障"
            },
            {
              "name": "设备点检保养（PM）与 OEE 改善",
              "category": "产线设备运维",
              "level": "must",
              "detail": "落实点检、预防性维护计划、OEE 综合效率提升与精益持续改进"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "快速定位工厂自动化产线电气/控制停机故障"
            },
            {
              "name": "机械识图与气动液压基础",
              "category": "产线设备运维",
              "level": "plus",
              "detail": "看懂机械装配图，了解产线气动/液压执行元件者优先"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "了解车间低压配电及自动化设备常用低压电器"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "编写设备作业指导书（SOP）与安全操作规程"
            }
          ],
          "interviewFocus": [
            "考察过往 PLC/电路项目中实际排故过程（遇到什么 Bug、如何定位解决）",
            "考察动手能力、对制造工厂环境的适应度以及精益/安全规范意识"
          ],
          "shiftWork": "待核实（按产线排班）",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "tech-support",
          "officialTitles": [
            "海外销售支持工程师（配置报价方向）",
            "售后技术服务培训生"
          ],
          "responsibilities": [
            "为海内外客户及销售团队提供开关柜产品选型、技术答疑、方案诊断与系统配置报价支持",
            "衔接前端销售与后端翔安工厂/研发/供应链，跟进订单技术澄清、交付与售后问题闭环"
          ],
          "skills": [
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "must",
              "detail": "海外支持方向将英语作为核心工作语言，重口语流利与书面技术沟通"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "理解中低压配电方案与开关柜配置选型逻辑"
            },
            {
              "name": "中低压开关柜一次/二次回路与继保",
              "category": "基础理论",
              "level": "must",
              "detail": "具备电气配电系统知识以完成技术澄清与方案诊断"
            },
            {
              "name": "客户沟通与现场抗压",
              "category": "工程与软实力",
              "level": "must",
              "detail": "出色的客户服务意识、跨部门协作与多任务处理能力"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "售后技术服务方向侧重现场问题诊断与闭环跟踪"
            }
          ],
          "interviewFocus": [
            "英文口语与邮件技术沟通实战考察",
            "面对客户临时修改图纸或交期紧张时的跨部门协调思路"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "中～高频出差（售后方向）"
        }
      ],
      "prosAndCons": {
        "pros": [
          "全球电气与自动化顶尖外企在华最大综合工业园之一就在厦门翔安，简历背书含金量极高",
          "标准化（EPLAN/IEC/EHS）与培训生培养体系极为规范，极适合建立正统工程规范",
          "重视日常实习生（Intern）转正渠道，大三下/暑期切入机会好"
        ],
        "watchouts": [
          "英语是硬门槛（英文自我介绍、英文手册阅读、海外沟通），若英语口语薄弱必须提前专项练",
          "开关柜/配电方向涉及 EPLAN 与电力系统继保知识，需要提前补齐基础概念"
        ]
      },
      "sources": [
        {
          "label": "ABB 官网厦门工业中心及业务介绍（abb.com）",
          "date": "2026-11-22"
        },
        {
          "label": "高校就业网 ABB 厦门校招与 Power U / E Next 简章（fzu.edu.cn / sjtu.edu.cn / gdut.edu.cn）",
          "date": "2026-11-22"
        },
        {
          "label": "公开校招面试经验与岗位 JD 汇总（nowcoder / yingjiesheng / liepin）",
          "date": "2026-11-22"
        }
      ]
    },
    {
      "id": "hithium",
      "name": "海辰储能",
      "fullName": "厦门海辰储能科技股份有限公司",
      "city": "厦门",
      "districts": [
        "厦门市同安区（总部及大型智能制造灯塔基地）"
      ],
      "track": "电力电子/储能与配电",
      "companyType": "新能源储能头部独角兽（民企）",
      "coreProducts": [
        "储能专用锂离子电芯",
        "储能模组与电池簇",
        "液冷储能集装箱系统（集成 BMS/PCS/EMS）"
      ],
      "researchedAt": "2026-11-22",
      "fitForXmut": {
        "level": "高匹配（厦门同安本地大户，极欢迎提前实习）",
        "reason": "明确面向本科及以上招收电气工程及其自动化等专业，覆盖电气设计、制造设备、实验室测试与技术支持全线岗位；常驻厦门本地高校宣讲，且鼓励提前 3 个月以上实习并支持实习转正/抵扣试用期。"
      },
      "internshipAndRecruit": {
        "channels": [
          "海辰储能官网/官方招聘小程序（Moka 系统）",
          "“海辰储能招聘”微信公众号",
          "厦门本地高校（含厦门理工）专场宣讲会"
        ],
        "program": "“未来星”校招项目：双导师制（业务导师 + 职业/HR 导师）、制造/工艺岗一线车间轮转、入职半年即开放快速晋升窗口",
        "timelineNote": "非常鼓励大三/大四提前到岗实习（建议 3 个月以上，优异者可直通转正并抵扣试用期）；2027 届暑期实习具体开放时间与日薪待官网当期公告核实。",
        "benefits": [
          "免费员工宿舍（空调/独立卫浴）或人才公寓",
          "员工食堂与餐补、通勤班车",
          "园区健身房/文体中心",
          "可叠加厦门市“留厦六条”及新引进人才补贴"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "强区分：制造产线设备/工艺岗因 24 小时产线运转，通常需配合两班倒/白夜班；研发与实验室测试以正常作息为主（行业节奏较快）",
        "travelLevel": "分岗位：同安基地设备/测试/研发出差少；国内及海外储能技术支持（AE）出差频率高",
        "certNote": "公开校招 JD 未强制要求提前持电工证，但制造设备与测试岗重视安全规范与动手能力（具体入职取证要求待核实）。"
      },
      "matchedRoles": [
        {
          "roleId": "equip-elec",
          "officialTitles": [
            "电气工程师",
            "电气设计工程师（储能系统/产线方向）"
          ],
          "responsibilities": [
            "负责储能系统、电池舱、PCS 相关或工厂产线的电气系统设计、原理图绘制及 BOM 清单输出",
            "参与电气设备选型、评审及高低压配电系统设计与调试，输出技术规范与测试验证报告",
            "协同工艺、结构与研发团队解决生产制造或项目交付中的电气技术异常"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "扎实的电路分析、电力电子技术与自动控制原理基础"
            },
            {
              "name": "电力电子拓扑（整流/斩波/逆变）",
              "category": "基础理论",
              "level": "must",
              "detail": "熟悉储能系统 PCS 及交直流变换电气原理"
            },
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "熟练掌握 AutoCAD、EPLAN 等主流电气制图软件"
            },
            {
              "name": "Altium Designer 硬件/PCB 基础",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "部分储能硬件电气设计岗要求掌握 Altium Designer"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "高低压配电设计、电气器件选型与 BOM 输出"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "独立绘制并审读储能系统/产线电气原理图"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "编写电气技术规范、说明书及验证报告"
            }
          ],
          "interviewFocus": [
            "考察电路、电力电子、自控基础知识及电气软件实操经历",
            "核心研发/设计岗竞争偏激烈（部分倾向硕士），本科生需突出清晰项目与动手能力"
          ],
          "shiftWork": "无倒班（节奏较快）",
          "travelLevel": "偶尔出差"
        },
        {
          "roleId": "fab-equip",
          "officialTitles": [
            "设备工程师（制造与工艺类，同安基地）"
          ],
          "responsibilities": [
            "负责同安基地电芯、模组、电池簇或系统集成自动化产线设备的安装、调试、维护与升级",
            "制定优化日常点检与定期保养（PM）计划，降低故障率、提升设备综合效率（OEE）与良率",
            "配合新设备导入、FAT/SAT（工厂/现场验收）及一线操作工技能培训"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "看懂锂电自动化生产设备电气原理图"
            },
            {
              "name": "机械识图与气动液压基础",
              "category": "产线设备运维",
              "level": "must",
              "detail": "能看懂机械图纸并理解自动化产线机械/电气协同结构"
            },
            {
              "name": "设备点检保养（PM）与 OEE 改善",
              "category": "产线设备运维",
              "level": "must",
              "detail": "执行 PM 计划、FAT/SAT 设备验收、降故障提良率与 OEE"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "熟悉西门子/三菱 PLC 编程或工业机器人调试者优先"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "快速定位并处理锂电制造产线突发设备异常"
            }
          ],
          "interviewFocus": [
            "必问专业与实操：电路基础、PLC 编程、机械制图及在校动手项目经历",
            "必问工作意愿：能否接受 24 小时电池制造工厂的车间环境与两班倒/白夜班排班？"
          ],
          "shiftWork": "可能两班倒/白夜班",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "ee-test",
          "officialTitles": [
            "测试工程师（实验室测试 / 质量与测试方向）"
          ],
          "responsibilities": [
            "负责锂离子电芯、模组、电池簇及液冷储能系统的性能测试、安规测试及可靠性验证",
            "按 CNAS / TUV 等实验室标准执行测试、记录分析数据并输出专业测试报告",
            "参与测试方法改进与自动化测试工具/脚本开发，协同研发推动缺陷闭环"
          ],
          "skills": [
            {
              "name": "电池充放电与环境可靠性测试设备",
              "category": "仪器测试",
              "level": "must",
              "detail": "熟悉充放电测试机、温湿度箱等新能源电池测试设备操作与数据分析"
            },
            {
              "name": "安规与 EMC 测试基础",
              "category": "仪器测试",
              "level": "must",
              "detail": "熟悉 CNAS / TUV 实验室标准规范下的安规与可靠性验证流程"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "具备严谨数据敏感度，输出合规实验室测试报告并推动缺陷闭环"
            },
            {
              "name": "C 语言与自动化脚本基础",
              "category": "软件与脚本",
              "level": "plus",
              "detail": "参与测试脚本或自动化数据处理工具开发以提升测试效率"
            },
            {
              "name": "示波器与万用表实操",
              "category": "仪器测试",
              "level": "plus",
              "detail": "具备高校实验室电子电路调试与常规仪表实测经验优先"
            }
          ],
          "interviewFocus": [
            "考察对测试数据异常的敏感度、实验严谨性及实验室/电子电路调试经历",
            "看重“实干、结果导向、抗压”的工程落地风格"
          ],
          "shiftWork": "无倒班（视测试排期可能加班）",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "tech-support",
          "officialTitles": [
            "技术支持工程师",
            "应用工程师（AE / 储能现场服务）"
          ],
          "responsibilities": [
            "负责储能系统售前技术支持、方案宣讲、客户需求对接及技术方案编制",
            "参与电源侧/电网侧/海外工商业储能项目现场技术交底、安装指导、调试运行与故障排查",
            "收集一线客户痛点反馈研发优化，并为客户与内部团队提供产品技术培训"
          ],
          "skills": [
            {
              "name": "储能系统架构（BMS / PCS / EMS）",
              "category": "基础理论",
              "level": "must",
              "detail": "扎实掌握储能电气知识及 BMS、PCS、EMS 系统协同架构"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "能完成储能项目现场技术交底与电气调试指导"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "处理储能项目现场调试运行与故障排查"
            },
            {
              "name": "客户沟通与现场抗压",
              "category": "工程与软实力",
              "level": "must",
              "detail": "优秀的方案宣讲、客户需求对接与抗压沟通能力"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "海外技术支持（欧美/中东非等）通常要求 CET-6 及以上并可作为工作语言"
            }
          ],
          "interviewFocus": [
            "考察对储能行业及 BMS/PCS/EMS 架构的理解、沟通表达与对出差的接受度",
            "海外 AE 方向会重点核查英语读写与口语交流能力"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "高频出差/海外支持"
        }
      ],
      "prosAndCons": {
        "pros": [
          "全球储能赛道头部企业且总部就在厦门同安，招聘体量大、成长快、可叠加厦门人才补贴",
          "明确鼓励提前 3 个月以上实习且支持转正与抵扣试用期，非常契合你 2027 暑期实习目标",
          "4 类核心岗位（电气设计/制造设备/测试/技术支持）全覆盖，可根据是否接受倒班/出差精准选择"
        ],
        "watchouts": [
          "新能源行业整体工作节奏偏快、抗压要求高",
          "制造类「设备工程师」需认真评估对车间环境与两班倒/白夜班的接受度；若不想倒班也不想高频出差，优先看「实验室测试」或「电气设计」"
        ]
      },
      "sources": [
        {
          "label": "高校就业网海辰储能“未来星”校招简章（jlu.edu.cn / lzu.edu.cn / sdu.edu.cn / nankai.edu.cn / xmu.edu.cn）",
          "date": "2026-11-22"
        },
        {
          "label": "海辰储能公开招聘平台职位职责与要求（iguopin / wondercv / liepin）",
          "date": "2026-11-22"
        },
        {
          "label": "公开海辰储能实习转正、培养机制与基地福利信息（mxdx / dlmu.edu.cn）",
          "date": "2026-11-22"
        }
      ]
    }
  ],
  "skillCategories": [
    "电气制图与选型",
    "工程与软实力",
    "PLC与自动化",
    "基础理论",
    "仪器测试",
    "产线设备运维",
    "通信协议",
    "软件与脚本"
  ],
  "skillStatsOverall": [
    {
      "name": "电气原理图识读",
      "category": "电气制图与选型",
      "companyCount": 4,
      "companyPct": 100,
      "roleCount": 5,
      "roleIds": [
        "ee-test",
        "tech-support",
        "equip-elec",
        "plc-debug",
        "fab-equip"
      ],
      "mustRoleCount": 10,
      "plusRoleCount": 0,
      "totalRoleMentions": 10,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "detail": "看懂功率板与控制板原理图，协助定位硬件失效点"
        },
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "detail": "能现场看懂整机强弱电控制回路图纸"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "面试高频必查基础能力，能读懂成套设备强弱电图纸"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "must",
          "detail": "按图查线、查 I/O 点表与控制柜回路"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "must",
          "detail": "现场独立按图纸查线定位电气故障"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "熟练读懂中低压成套开关柜一次主回路与二次控制/保护回路图纸"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "能独立看懂产线自动化设备电气原理图与接线图"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "独立绘制并审读储能系统/产线电气原理图"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "看懂锂电自动化生产设备电气原理图"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "must",
          "detail": "能完成储能项目现场技术交底与电气调试指导"
        }
      ]
    },
    {
      "name": "现场故障诊断与排故思维",
      "category": "工程与软实力",
      "companyCount": 4,
      "companyPct": 100,
      "roleCount": 3,
      "roleIds": [
        "tech-support",
        "plc-debug",
        "fab-equip"
      ],
      "mustRoleCount": 6,
      "plusRoleCount": 1,
      "totalRoleMentions": 7,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "detail": "能用万用表/常规仪表按步骤隔离定位现场报错与跳闸故障"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "must",
          "detail": "解决联调和运行中的信号异常、电气故障与控制逻辑 Bug"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "must",
          "detail": "应对复杂工程现场突发停机与信号干扰问题"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "快速定位工厂自动化产线电气/控制停机故障"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "plus",
          "detail": "售后技术服务方向侧重现场问题诊断与闭环跟踪"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "快速定位并处理锂电制造产线突发设备异常"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "must",
          "detail": "处理储能项目现场调试运行与故障排查"
        }
      ]
    },
    {
      "name": "低压配电与元器件选型",
      "category": "电气制图与选型",
      "companyCount": 4,
      "companyPct": 100,
      "roleCount": 4,
      "roleIds": [
        "tech-support",
        "equip-elec",
        "plc-debug",
        "fab-equip"
      ],
      "mustRoleCount": 5,
      "plusRoleCount": 2,
      "totalRoleMentions": 7,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "detail": "掌握强弱电安全常识与基本配电系统结构"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "了解低压配电、断路器/接触器/传感器/执行机构接线与 BOM 编制"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "plus",
          "detail": "熟悉现场传感器、气动/电动执行机构接线规范"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "掌握成套配电柜内断路器、继电器等元器件选型与技术协议配置"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "plus",
          "detail": "了解车间低压配电及自动化设备常用低压电器"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "must",
          "detail": "理解中低压配电方案与开关柜配置选型逻辑"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "高低压配电设计、电气器件选型与 BOM 输出"
        }
      ]
    },
    {
      "name": "技术文档与测试报告编写",
      "category": "工程与软实力",
      "companyCount": 4,
      "companyPct": 100,
      "roleCount": 3,
      "roleIds": [
        "ee-test",
        "equip-elec",
        "fab-equip"
      ],
      "mustRoleCount": 5,
      "plusRoleCount": 0,
      "totalRoleMentions": 5,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "detail": "测试用例编写、数据整理与缺陷闭环报告输出"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "能规范编制操作规程、调试大纲与出厂电气说明书"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "编写设备作业指导书（SOP）与安全操作规程"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "编写电气技术规范、说明书及验证报告"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "must",
          "detail": "具备严谨数据敏感度，输出合规实验室测试报告并推动缺陷闭环"
        }
      ]
    },
    {
      "name": "客户沟通与现场抗压",
      "category": "工程与软实力",
      "companyCount": 4,
      "companyPct": 100,
      "roleCount": 1,
      "roleIds": [
        "tech-support"
      ],
      "mustRoleCount": 4,
      "plusRoleCount": 0,
      "totalRoleMentions": 4,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "detail": "能安抚紧急故障现场客户情绪并清晰传达技术方案，适应出差驻场"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "must",
          "detail": "能适应全国及海外项目现场长期/频繁出差，具备良好培训与沟通能力"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "must",
          "detail": "出色的客户服务意识、跨部门协作与多任务处理能力"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "must",
          "detail": "优秀的方案宣讲、客户需求对接与抗压沟通能力"
        }
      ]
    },
    {
      "name": "主流 PLC 编程（西门子/三菱等）",
      "category": "PLC与自动化",
      "companyCount": 3,
      "companyPct": 75,
      "roleCount": 4,
      "roleIds": [
        "equip-elec",
        "plc-debug",
        "tech-support",
        "fab-equip"
      ],
      "mustRoleCount": 4,
      "plusRoleCount": 2,
      "totalRoleMentions": 6,
      "evidences": [
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "熟悉至少一种主流 PLC（如西门子 S7-1200/1500、施耐德、三菱）"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "must",
          "detail": "主流西门子 S7-1200/1500、施耐德、三菱等控制逻辑编写与联调"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "must",
          "detail": "能在线监控 PLC 状态排查程序与传感器故障"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "熟悉西门子 S7-1200/1500 或 ABB AC500 及基本 I/O 分配逻辑更受青睐"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "熟悉 PLC 编程及在线排查产线自动化控制故障"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "plus",
          "detail": "熟悉西门子/三菱 PLC 编程或工业机器人调试者优先"
        }
      ]
    },
    {
      "name": "AutoCAD / EPLAN 电气制图",
      "category": "电气制图与选型",
      "companyCount": 3,
      "companyPct": 75,
      "roleCount": 1,
      "roleIds": [
        "equip-elec"
      ],
      "mustRoleCount": 3,
      "plusRoleCount": 0,
      "totalRoleMentions": 3,
      "evidences": [
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "熟练应用 AutoCAD 或 EPLAN 绘制电气原理图与接线图"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "外企极看重 EPLAN（宏、部件库、端子排、自动 BOM、规则检查）与 AutoCAD 规范出图"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "熟练掌握 AutoCAD、EPLAN 等主流电气制图软件"
        }
      ]
    },
    {
      "name": "英语读写与技术交流",
      "category": "工程与软实力",
      "companyCount": 3,
      "companyPct": 75,
      "roleCount": 2,
      "roleIds": [
        "tech-support",
        "equip-elec"
      ],
      "mustRoleCount": 2,
      "plusRoleCount": 2,
      "totalRoleMentions": 4,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "plus",
          "detail": "海外 FAE/技术支持方向重点考察英语听说读写"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "外企硬门槛：英文自我介绍、英文技术手册阅读及邮件/会议沟通"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "must",
          "detail": "海外支持方向将英语作为核心工作语言，重口语流利与书面技术沟通"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "plus",
          "detail": "海外技术支持（欧美/中东非等）通常要求 CET-6 及以上并可作为工作语言"
        }
      ]
    },
    {
      "name": "电力电子拓扑（整流/斩波/逆变）",
      "category": "基础理论",
      "companyCount": 2,
      "companyPct": 50,
      "roleCount": 3,
      "roleIds": [
        "ee-test",
        "tech-support",
        "equip-elec"
      ],
      "mustRoleCount": 3,
      "plusRoleCount": 0,
      "totalRoleMentions": 3,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "detail": "AC/DC、DC/DC（Buck/Boost）、DC/AC 逆变与 PWM/SPWM 原理"
        },
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "detail": "理解 UPS、光伏逆变器、储能变流器的基本工作原理"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "熟悉储能系统 PCS 及交直流变换电气原理"
        }
      ]
    },
    {
      "name": "安规与 EMC 测试基础",
      "category": "仪器测试",
      "companyCount": 2,
      "companyPct": 50,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 2,
      "plusRoleCount": 0,
      "totalRoleMentions": 2,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "detail": "熟悉基本安规、电磁兼容（EMC）与环境可靠性测试规范"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "must",
          "detail": "熟悉 CNAS / TUV 实验室标准规范下的安规与可靠性验证流程"
        }
      ]
    },
    {
      "name": "电路与模数电基础",
      "category": "基础理论",
      "companyCount": 2,
      "companyPct": 50,
      "roleCount": 2,
      "roleIds": [
        "ee-test",
        "equip-elec"
      ],
      "mustRoleCount": 2,
      "plusRoleCount": 0,
      "totalRoleMentions": 2,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "detail": "运放、逻辑门、二极管/三极管/MOS 管特性与过流过压保护电路"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "扎实的电路分析、电力电子技术与自动控制原理基础"
        }
      ]
    },
    {
      "name": "设备点检保养（PM）与 OEE 改善",
      "category": "产线设备运维",
      "companyCount": 2,
      "companyPct": 50,
      "roleCount": 1,
      "roleIds": [
        "fab-equip"
      ],
      "mustRoleCount": 2,
      "plusRoleCount": 0,
      "totalRoleMentions": 2,
      "evidences": [
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "落实点检、预防性维护计划、OEE 综合效率提升与精益持续改进"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "执行 PM 计划、FAT/SAT 设备验收、降故障提良率与 OEE"
        }
      ]
    },
    {
      "name": "机械识图与气动液压基础",
      "category": "产线设备运维",
      "companyCount": 2,
      "companyPct": 50,
      "roleCount": 1,
      "roleIds": [
        "fab-equip"
      ],
      "mustRoleCount": 1,
      "plusRoleCount": 1,
      "totalRoleMentions": 2,
      "evidences": [
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "plus",
          "detail": "看懂机械装配图，了解产线气动/液压执行元件者优先"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "能看懂机械图纸并理解自动化产线机械/电气协同结构"
        }
      ]
    },
    {
      "name": "示波器与万用表实操",
      "category": "仪器测试",
      "companyCount": 2,
      "companyPct": 50,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 1,
      "plusRoleCount": 1,
      "totalRoleMentions": 2,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "detail": "重点考察用示波器测开关电源纹波与噪声、异常波形抓取"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "具备高校实验室电子电路调试与常规仪表实测经验优先"
        }
      ]
    },
    {
      "name": "Modbus / CAN / RS485 通信",
      "category": "通信协议",
      "companyCount": 2,
      "companyPct": 50,
      "roleCount": 2,
      "roleIds": [
        "tech-support",
        "equip-elec"
      ],
      "mustRoleCount": 1,
      "plusRoleCount": 1,
      "totalRoleMentions": 2,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "detail": "现场设备监控、后台通信联调常用总线协议"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "了解 Modbus、Profinet 或电力常用 IEC 61850 通信协议大加分"
        }
      ]
    },
    {
      "name": "C 语言与自动化脚本基础",
      "category": "软件与脚本",
      "companyCount": 2,
      "companyPct": 50,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 2,
      "totalRoleMentions": 2,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "便于烧录调试或开发自动化测试脚本"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "参与测试脚本或自动化数据处理工具开发以提升测试效率"
        }
      ]
    },
    {
      "name": "变频器与电机调试",
      "category": "PLC与自动化",
      "companyCount": 1,
      "companyPct": 25,
      "roleCount": 3,
      "roleIds": [
        "equip-elec",
        "plc-debug",
        "tech-support"
      ],
      "mustRoleCount": 3,
      "plusRoleCount": 0,
      "totalRoleMentions": 3,
      "evidences": [
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "了解三相电机控制、变频器参数配置与调速应用"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "must",
          "detail": "多电机协同启停、变频调速与传感器信号接入"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "must",
          "detail": "现场处理电机过载、变频器报警与参数重置"
        }
      ]
    },
    {
      "name": "中低压开关柜一次/二次回路与继保",
      "category": "基础理论",
      "companyCount": 1,
      "companyPct": 25,
      "roleCount": 2,
      "roleIds": [
        "equip-elec",
        "tech-support"
      ],
      "mustRoleCount": 2,
      "plusRoleCount": 0,
      "totalRoleMentions": 2,
      "evidences": [
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "熟悉电力系统、高低压技术、断路器、互感器与继电保护基础及 IEC/GB 标准"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "must",
          "detail": "具备电气配电系统知识以完成技术澄清与方案诊断"
        }
      ]
    },
    {
      "name": "储能系统架构（BMS / PCS / EMS）",
      "category": "基础理论",
      "companyCount": 1,
      "companyPct": 25,
      "roleCount": 1,
      "roleIds": [
        "tech-support"
      ],
      "mustRoleCount": 1,
      "plusRoleCount": 0,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "must",
          "detail": "扎实掌握储能电气知识及 BMS、PCS、EMS 系统协同架构"
        }
      ]
    },
    {
      "name": "电池充放电与环境可靠性测试设备",
      "category": "仪器测试",
      "companyCount": 1,
      "companyPct": 25,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 1,
      "plusRoleCount": 0,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "must",
          "detail": "熟悉充放电测试机、温湿度箱等新能源电池测试设备操作与数据分析"
        }
      ]
    },
    {
      "name": "功率分析仪与电子负载",
      "category": "仪器测试",
      "companyCount": 1,
      "companyPct": 25,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 1,
      "plusRoleCount": 0,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "detail": "可编程交直流电源、电子负载、高精度功率分析仪等大功率测试设备"
        }
      ]
    },
    {
      "name": "HMI 触摸屏与组态软件",
      "category": "PLC与自动化",
      "companyCount": 1,
      "companyPct": 25,
      "roleCount": 1,
      "roleIds": [
        "plc-debug"
      ],
      "mustRoleCount": 1,
      "plusRoleCount": 0,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "must",
          "detail": "触摸屏画面与上位机监控逻辑开发"
        }
      ]
    },
    {
      "name": "竞赛或电源实测项目经历",
      "category": "工程与软实力",
      "companyCount": 1,
      "companyPct": 25,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 1,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "全国电赛、实验室电源/逆变器调试或故障排查闭环经历优先"
        }
      ]
    },
    {
      "name": "Altium Designer 硬件/PCB 基础",
      "category": "电气制图与选型",
      "companyCount": 1,
      "companyPct": 25,
      "roleCount": 1,
      "roleIds": [
        "equip-elec"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 1,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "部分储能硬件电气设计岗要求掌握 Altium Designer"
        }
      ]
    },
    {
      "name": "SolidWorks 机械识图基础",
      "category": "电气制图与选型",
      "companyCount": 1,
      "companyPct": 25,
      "roleCount": 1,
      "roleIds": [
        "equip-elec"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 1,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "方便与机械结构团队协作确定电柜与传感器安装位"
        }
      ]
    }
  ],
  "roleStats": [
    {
      "roleId": "equip-elec",
      "roleName": "设备电气工程师",
      "shortName": "设备电气",
      "category": "设计与集成",
      "companyCount": 3,
      "companies": [
        {
          "id": "nflg",
          "name": "南方路机",
          "city": "泉州",
          "officialTitles": [
            "电气工程师（技术研发类/智控事业部）",
            "电气控制系统设计工程师"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "偶尔出差"
        },
        {
          "id": "abb-xiamen",
          "name": "ABB（厦门工业中心）",
          "city": "厦门",
          "officialTitles": [
            "电气工程师（开关柜一次/二次设计）",
            "助理项目工程师",
            "Power U / E Next 工程培训生"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "偶尔出差"
        },
        {
          "id": "hithium",
          "name": "海辰储能",
          "city": "厦门",
          "officialTitles": [
            "电气工程师",
            "电气设计工程师（储能系统/产线方向）"
          ],
          "shiftWork": "无倒班（节奏较快）",
          "travelLevel": "偶尔出差"
        }
      ],
      "skills": [
        {
          "name": "低压配电与元器件选型",
          "category": "电气制图与选型",
          "count": 3,
          "pct": 100,
          "mustCount": 3,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "了解低压配电、断路器/接触器/传感器/执行机构接线与 BOM 编制"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "掌握成套配电柜内断路器、继电器等元器件选型与技术协议配置"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "高低压配电设计、电气器件选型与 BOM 输出"
            }
          ]
        },
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 3,
          "pct": 100,
          "mustCount": 3,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "面试高频必查基础能力，能读懂成套设备强弱电图纸"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "熟练读懂中低压成套开关柜一次主回路与二次控制/保护回路图纸"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "独立绘制并审读储能系统/产线电气原理图"
            }
          ]
        },
        {
          "name": "AutoCAD / EPLAN 电气制图",
          "category": "电气制图与选型",
          "count": 3,
          "pct": 100,
          "mustCount": 3,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "熟练应用 AutoCAD 或 EPLAN 绘制电气原理图与接线图"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "外企极看重 EPLAN（宏、部件库、端子排、自动 BOM、规则检查）与 AutoCAD 规范出图"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "熟练掌握 AutoCAD、EPLAN 等主流电气制图软件"
            }
          ]
        },
        {
          "name": "技术文档与测试报告编写",
          "category": "工程与软实力",
          "count": 2,
          "pct": 67,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "能规范编制操作规程、调试大纲与出厂电气说明书"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "编写电气技术规范、说明书及验证报告"
            }
          ]
        },
        {
          "name": "主流 PLC 编程（西门子/三菱等）",
          "category": "PLC与自动化",
          "count": 2,
          "pct": 67,
          "mustCount": 1,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "熟悉至少一种主流 PLC（如西门子 S7-1200/1500、施耐德、三菱）"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "detail": "熟悉西门子 S7-1200/1500 或 ABB AC500 及基本 I/O 分配逻辑更受青睐"
            }
          ]
        },
        {
          "name": "变频器与电机调试",
          "category": "PLC与自动化",
          "count": 1,
          "pct": 33,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "了解三相电机控制、变频器参数配置与调速应用"
            }
          ]
        },
        {
          "name": "电力电子拓扑（整流/斩波/逆变）",
          "category": "基础理论",
          "count": 1,
          "pct": 33,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "熟悉储能系统 PCS 及交直流变换电气原理"
            }
          ]
        },
        {
          "name": "电路与模数电基础",
          "category": "基础理论",
          "count": 1,
          "pct": 33,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "扎实的电路分析、电力电子技术与自动控制原理基础"
            }
          ]
        },
        {
          "name": "英语读写与技术交流",
          "category": "工程与软实力",
          "count": 1,
          "pct": 33,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "外企硬门槛：英文自我介绍、英文技术手册阅读及邮件/会议沟通"
            }
          ]
        },
        {
          "name": "中低压开关柜一次/二次回路与继保",
          "category": "基础理论",
          "count": 1,
          "pct": 33,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "熟悉电力系统、高低压技术、断路器、互感器与继电保护基础及 IEC/GB 标准"
            }
          ]
        },
        {
          "name": "Altium Designer 硬件/PCB 基础",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 33,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "部分储能硬件电气设计岗要求掌握 Altium Designer"
            }
          ]
        },
        {
          "name": "Modbus / CAN / RS485 通信",
          "category": "通信协议",
          "count": 1,
          "pct": 33,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "detail": "了解 Modbus、Profinet 或电力常用 IEC 61850 通信协议大加分"
            }
          ]
        },
        {
          "name": "SolidWorks 机械识图基础",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 33,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "detail": "方便与机械结构团队协作确定电柜与传感器安装位"
            }
          ]
        }
      ],
      "travelCounts": {
        "偶尔出差": 3
      },
      "shiftCounts": {
        "无倒班": 2,
        "无倒班（节奏较快）": 1
      }
    },
    {
      "roleId": "plc-debug",
      "roleName": "PLC 控制与调试工程师",
      "shortName": "PLC 调试",
      "category": "控制与调试",
      "companyCount": 1,
      "companies": [
        {
          "id": "nflg",
          "name": "南方路机",
          "city": "泉州",
          "officialTitles": [
            "PLC 调试工程师",
            "自动化控制工程师（智控方向）"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "中～高频出差"
        }
      ],
      "skills": [
        {
          "name": "变频器与电机调试",
          "category": "PLC与自动化",
          "count": 1,
          "pct": 100,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "多电机协同启停、变频调速与传感器信号接入"
            }
          ]
        },
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 100,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "按图查线、查 I/O 点表与控制柜回路"
            }
          ]
        },
        {
          "name": "现场故障诊断与排故思维",
          "category": "工程与软实力",
          "count": 1,
          "pct": 100,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "解决联调和运行中的信号异常、电气故障与控制逻辑 Bug"
            }
          ]
        },
        {
          "name": "主流 PLC 编程（西门子/三菱等）",
          "category": "PLC与自动化",
          "count": 1,
          "pct": 100,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "主流西门子 S7-1200/1500、施耐德、三菱等控制逻辑编写与联调"
            }
          ]
        },
        {
          "name": "HMI 触摸屏与组态软件",
          "category": "PLC与自动化",
          "count": 1,
          "pct": 100,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "触摸屏画面与上位机监控逻辑开发"
            }
          ]
        },
        {
          "name": "低压配电与元器件选型",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 100,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "detail": "熟悉现场传感器、气动/电动执行机构接线规范"
            }
          ]
        }
      ],
      "travelCounts": {
        "中～高频出差": 1
      },
      "shiftCounts": {
        "无倒班": 1
      }
    },
    {
      "roleId": "fab-equip",
      "roleName": "设备工程师（制造/晶圆/面板/电池）",
      "shortName": "设备工程",
      "category": "产线运维与改善",
      "companyCount": 2,
      "companies": [
        {
          "id": "abb-xiamen",
          "name": "ABB（厦门工业中心）",
          "city": "厦门",
          "officialTitles": [
            "设备维护培训生",
            "设备/制造工程师",
            "生产工程与持续改进专员"
          ],
          "shiftWork": "待核实（按产线排班）",
          "travelLevel": "极少出差"
        },
        {
          "id": "hithium",
          "name": "海辰储能",
          "city": "厦门",
          "officialTitles": [
            "设备工程师（制造与工艺类，同安基地）"
          ],
          "shiftWork": "可能两班倒/白夜班",
          "travelLevel": "极少出差"
        }
      ],
      "skills": [
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 2,
          "pct": 100,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "能独立看懂产线自动化设备电气原理图与接线图"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "看懂锂电自动化生产设备电气原理图"
            }
          ]
        },
        {
          "name": "设备点检保养（PM）与 OEE 改善",
          "category": "产线设备运维",
          "count": 2,
          "pct": 100,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "落实点检、预防性维护计划、OEE 综合效率提升与精益持续改进"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "执行 PM 计划、FAT/SAT 设备验收、降故障提良率与 OEE"
            }
          ]
        },
        {
          "name": "现场故障诊断与排故思维",
          "category": "工程与软实力",
          "count": 2,
          "pct": 100,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "快速定位工厂自动化产线电气/控制停机故障"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "快速定位并处理锂电制造产线突发设备异常"
            }
          ]
        },
        {
          "name": "机械识图与气动液压基础",
          "category": "产线设备运维",
          "count": 2,
          "pct": 100,
          "mustCount": 1,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "detail": "看懂机械装配图，了解产线气动/液压执行元件者优先"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "能看懂机械图纸并理解自动化产线机械/电气协同结构"
            }
          ]
        },
        {
          "name": "主流 PLC 编程（西门子/三菱等）",
          "category": "PLC与自动化",
          "count": 2,
          "pct": 100,
          "mustCount": 1,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "熟悉 PLC 编程及在线排查产线自动化控制故障"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "熟悉西门子/三菱 PLC 编程或工业机器人调试者优先"
            }
          ]
        },
        {
          "name": "技术文档与测试报告编写",
          "category": "工程与软实力",
          "count": 1,
          "pct": 50,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "编写设备作业指导书（SOP）与安全操作规程"
            }
          ]
        },
        {
          "name": "低压配电与元器件选型",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 50,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "detail": "了解车间低压配电及自动化设备常用低压电器"
            }
          ]
        }
      ],
      "travelCounts": {
        "极少出差": 2
      },
      "shiftCounts": {
        "待核实（按产线排班）": 1,
        "可能两班倒/白夜班": 1
      }
    },
    {
      "roleId": "ee-test",
      "roleName": "电气产品测试工程师",
      "shortName": "产品测试",
      "category": "研发验证与质量",
      "companyCount": 2,
      "companies": [
        {
          "id": "kehua-data",
          "name": "科华数据",
          "city": "厦门",
          "officialTitles": [
            "硬件测试工程师（电力电子/电源方向）",
            "自动化测试工程师"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "id": "hithium",
          "name": "海辰储能",
          "city": "厦门",
          "officialTitles": [
            "测试工程师（实验室测试 / 质量与测试方向）"
          ],
          "shiftWork": "无倒班（视测试排期可能加班）",
          "travelLevel": "极少出差"
        }
      ],
      "skills": [
        {
          "name": "安规与 EMC 测试基础",
          "category": "仪器测试",
          "count": 2,
          "pct": 100,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "熟悉基本安规、电磁兼容（EMC）与环境可靠性测试规范"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "熟悉 CNAS / TUV 实验室标准规范下的安规与可靠性验证流程"
            }
          ]
        },
        {
          "name": "技术文档与测试报告编写",
          "category": "工程与软实力",
          "count": 2,
          "pct": 100,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "测试用例编写、数据整理与缺陷闭环报告输出"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "具备严谨数据敏感度，输出合规实验室测试报告并推动缺陷闭环"
            }
          ]
        },
        {
          "name": "示波器与万用表实操",
          "category": "仪器测试",
          "count": 2,
          "pct": 100,
          "mustCount": 1,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "重点考察用示波器测开关电源纹波与噪声、异常波形抓取"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "具备高校实验室电子电路调试与常规仪表实测经验优先"
            }
          ]
        },
        {
          "name": "C 语言与自动化脚本基础",
          "category": "软件与脚本",
          "count": 2,
          "pct": 100,
          "mustCount": 0,
          "plusCount": 2,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "detail": "便于烧录调试或开发自动化测试脚本"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "参与测试脚本或自动化数据处理工具开发以提升测试效率"
            }
          ]
        },
        {
          "name": "电池充放电与环境可靠性测试设备",
          "category": "仪器测试",
          "count": 1,
          "pct": 50,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "熟悉充放电测试机、温湿度箱等新能源电池测试设备操作与数据分析"
            }
          ]
        },
        {
          "name": "电力电子拓扑（整流/斩波/逆变）",
          "category": "基础理论",
          "count": 1,
          "pct": 50,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "AC/DC、DC/DC（Buck/Boost）、DC/AC 逆变与 PWM/SPWM 原理"
            }
          ]
        },
        {
          "name": "电路与模数电基础",
          "category": "基础理论",
          "count": 1,
          "pct": 50,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "运放、逻辑门、二极管/三极管/MOS 管特性与过流过压保护电路"
            }
          ]
        },
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 50,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "看懂功率板与控制板原理图，协助定位硬件失效点"
            }
          ]
        },
        {
          "name": "功率分析仪与电子负载",
          "category": "仪器测试",
          "count": 1,
          "pct": 50,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "可编程交直流电源、电子负载、高精度功率分析仪等大功率测试设备"
            }
          ]
        },
        {
          "name": "竞赛或电源实测项目经历",
          "category": "工程与软实力",
          "count": 1,
          "pct": 50,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "detail": "全国电赛、实验室电源/逆变器调试或故障排查闭环经历优先"
            }
          ]
        }
      ],
      "travelCounts": {
        "极少出差": 2
      },
      "shiftCounts": {
        "无倒班": 1,
        "无倒班（视测试排期可能加班）": 1
      }
    },
    {
      "roleId": "tech-support",
      "roleName": "电气技术支持 / 现场服务（FAE/FSE）",
      "shortName": "技术支持",
      "category": "客户与现场交付",
      "companyCount": 4,
      "companies": [
        {
          "id": "kehua-data",
          "name": "科华数据",
          "city": "厦门",
          "officialTitles": [
            "技术支持工程师",
            "售后技术支持工程师",
            "现场技术支持（FAE/FES）"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "高频出差/驻场"
        },
        {
          "id": "nflg",
          "name": "南方路机",
          "city": "泉州",
          "officialTitles": [
            "售后服务工程师（电气方向）",
            "工程技术支持工程师"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "高频出差/驻场"
        },
        {
          "id": "abb-xiamen",
          "name": "ABB（厦门工业中心）",
          "city": "厦门",
          "officialTitles": [
            "海外销售支持工程师（配置报价方向）",
            "售后技术服务培训生"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "中～高频出差（售后方向）"
        },
        {
          "id": "hithium",
          "name": "海辰储能",
          "city": "厦门",
          "officialTitles": [
            "技术支持工程师",
            "应用工程师（AE / 储能现场服务）"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "高频出差/海外支持"
        }
      ],
      "skills": [
        {
          "name": "客户沟通与现场抗压",
          "category": "工程与软实力",
          "count": 4,
          "pct": 100,
          "mustCount": 4,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "能安抚紧急故障现场客户情绪并清晰传达技术方案，适应出差驻场"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "能适应全国及海外项目现场长期/频繁出差，具备良好培训与沟通能力"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "出色的客户服务意识、跨部门协作与多任务处理能力"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "优秀的方案宣讲、客户需求对接与抗压沟通能力"
            }
          ]
        },
        {
          "name": "现场故障诊断与排故思维",
          "category": "工程与软实力",
          "count": 4,
          "pct": 100,
          "mustCount": 3,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "能用万用表/常规仪表按步骤隔离定位现场报错与跳闸故障"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "应对复杂工程现场突发停机与信号干扰问题"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "detail": "售后技术服务方向侧重现场问题诊断与闭环跟踪"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "处理储能项目现场调试运行与故障排查"
            }
          ]
        },
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 3,
          "pct": 75,
          "mustCount": 3,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "能现场看懂整机强弱电控制回路图纸"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "现场独立按图纸查线定位电气故障"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "能完成储能项目现场技术交底与电气调试指导"
            }
          ]
        },
        {
          "name": "英语读写与技术交流",
          "category": "工程与软实力",
          "count": 3,
          "pct": 75,
          "mustCount": 1,
          "plusCount": 2,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "detail": "海外 FAE/技术支持方向重点考察英语听说读写"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "海外支持方向将英语作为核心工作语言，重口语流利与书面技术沟通"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "海外技术支持（欧美/中东非等）通常要求 CET-6 及以上并可作为工作语言"
            }
          ]
        },
        {
          "name": "低压配电与元器件选型",
          "category": "电气制图与选型",
          "count": 2,
          "pct": 50,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "掌握强弱电安全常识与基本配电系统结构"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "理解中低压配电方案与开关柜配置选型逻辑"
            }
          ]
        },
        {
          "name": "变频器与电机调试",
          "category": "PLC与自动化",
          "count": 1,
          "pct": 25,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "现场处理电机过载、变频器报警与参数重置"
            }
          ]
        },
        {
          "name": "储能系统架构（BMS / PCS / EMS）",
          "category": "基础理论",
          "count": 1,
          "pct": 25,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "扎实掌握储能电气知识及 BMS、PCS、EMS 系统协同架构"
            }
          ]
        },
        {
          "name": "电力电子拓扑（整流/斩波/逆变）",
          "category": "基础理论",
          "count": 1,
          "pct": 25,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "理解 UPS、光伏逆变器、储能变流器的基本工作原理"
            }
          ]
        },
        {
          "name": "中低压开关柜一次/二次回路与继保",
          "category": "基础理论",
          "count": 1,
          "pct": 25,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "具备电气配电系统知识以完成技术澄清与方案诊断"
            }
          ]
        },
        {
          "name": "主流 PLC 编程（西门子/三菱等）",
          "category": "PLC与自动化",
          "count": 1,
          "pct": 25,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "能在线监控 PLC 状态排查程序与传感器故障"
            }
          ]
        },
        {
          "name": "Modbus / CAN / RS485 通信",
          "category": "通信协议",
          "count": 1,
          "pct": 25,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "现场设备监控、后台通信联调常用总线协议"
            }
          ]
        }
      ],
      "travelCounts": {
        "高频出差/驻场": 2,
        "中～高频出差（售后方向）": 1,
        "高频出差/海外支持": 1
      },
      "shiftCounts": {
        "无倒班": 4
      }
    }
  ]
};
