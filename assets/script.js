"use strict";
const translations = {
  "t1": "论文",
  "t2": "研究",
  "t3": "经历",
  "t4": "教育",
  "t5": "冯紫嫣 <span class=\"name-note\">Shay</span>",
  "t6": "香港科技大学（广州） · MPhil 研究生",
  "t7": "我研究<strong>面向通用机器人操作的物理智能</strong>，连接触觉感知、闭环控制与机器人学习。",
  "t8": "研究从触觉反射控制出发，发展到控制器引导的策略学习，目前探索 VLA 的主动物理感知与触觉适应。",
  "t9": "导师：Qiang Nie 教授、Jinni Zhou 教授",
  "t10": "学术简历 (PDF)",
  "t11": "联系",
  "t12": "第一作者 · 已接收",
  "t13": "第一作者 · 已接收",
  "t14": "冠军",
  "t15": "代表性论文",
  "t16": "第一作者 · 已接收",
  "t17": "利用传感器固有噪声自校准控制阈值，以三类优先级反射调节滑移、过度夹持与过载，无需外部力标定、材料模型或人工阈值调参。",
  "t18": "<strong>动态倒水：9/10，固定夹持基线为 0/10</strong>；在 <strong>5/5 次实验</strong>中避免不可逆形变。",
  "t19": "第一作者 · 已接收",
  "t20": "在示教采集阶段用高频触觉控制器塑形数据，使推理时不使用触觉的 ACT 与 π0.5 学到更安全的力敏感抓取，无需改变策略推理输入。",
  "t21": "<strong>稳定抓取：ACT 15% → 95%；π0.5 5% → 95%。</strong>扰动实验区分了策略学到的常态行为与恢复时仍需的快速反馈。",
  "t22": "共同第一作者",
  "t23": "参与设计边缘部署流程，完成嵌入式设备实现、数据分析及论文撰写相关工作。",
  "t24": "第一作者",
  "t25": "负责实验数据处理与定量分析，解释显微组织与性能变化，并参与论文撰写。",
  "t26": "当前研究",
  "t27": "进行中",
  "t28": "VLA 如何主动获取缺失的物理信息，在接触中调整行为，并在后续决策中利用交互历史？",
  "t29": "主动物理感知",
  "t30": "行动前先试探：通过微抬、挤压、微滑或倾斜，辨别视觉难以判断的质量、刚度、摩擦与质心。",
  "t31": "快速物理适应",
  "t32": "将 VLA 语义控制与高频触觉残差或反射结合，实现接触稳定、滑移恢复与安全夹持。",
  "t33": "具备物理感知的通用 VLA",
  "t34": "探索物理交互记忆与事件触发的重新 grounding，指导试探、重抓、夹持调整与重规划。",
  "t35": "研究与工程经历",
  "t36": "2025.09 – 至今",
  "t37": "搭建从传感器到策略的完整链路：触觉集成、高频夹爪控制、自主开发 Meta Quest 3–Unity–ROS2 遥操作、多模态同步采集、π0.5/ACT 微调，以及 JAKA、PiPER、LimX、NERO 真机评测。",
  "t38": "Motphys · 机器人强化学习实习生",
  "t39": "2026.07 – 至今",
  "t40": "开展视触觉仿真与 Sim-to-Real 基准评测，比较接触精度、形变、计算成本及规模化机器人学习数据生成适用性。",
  "t41": "冠军",
  "t42": "基于 InternVLA + RLinf、GRPO、AttenA+ 与分阶段稠密奖励，构建 RoboTwin 2.0 多任务强化学习系统。<strong>最终得分：90.1/100。</strong>",
  "t43": "清华 AIR × 地瓜机器人",
  "t44": "冠军",
  "t45": "在具身智能强化营开发高层 VLM 任务理解与低层 PPO 分层控制框架，获得桌面机器人赛道冠军。",
  "t46": "三等奖",
  "t47": "搭建双臂数据采集与 π0.5 / WALL-OSS 训练流程，面向水果分类、套环、插接与字母拼装。",
  "t48": "西南大学 · DW 工作室",
  "t49": "主导嵌入式 AI 部署与机器人系统集成，连接边缘设备、算法及 Web 可视化。",
  "t50": "教育背景",
  "t51": "香港科技大学（广州）",
  "t52": "机器人与自主系统 MPhil · 全额奖学金",
  "t53": "西南大学",
  "t54": "自动化工学学士 · GPA 3.53/4.0 · 全英文课程 · IELTS 7.0",
  "t55": "代表性荣誉",
  "t56": "<strong>重庆市普通高校创新能力提升先进个人（省级）</strong>",
  "t57": "中国机器人及人工智能大赛 — <strong>全国二等奖</strong>",
  "t58": "“挑战杯”全国大学生课外学术科技作品竞赛 — <strong>省级特等奖</strong>",
  "t59": "技术能力",
  "t60": "机器人系统",
  "t61": "VLA 与模仿学习",
  "t62": "触觉与控制",
  "t63": "强化学习与仿真",
  "t64": "编程",
  "t65": "数据与集成",
  "t66": "视觉 / 触觉 / 状态 / 动作同步采集 · TCP · 软硬件调试",
  "t67": "机器人与自主系统 · 香港科技大学（广州）"
};
const toggle = document.getElementById("langToggle");
const nodes = [...document.querySelectorAll("[data-i18n]")];
const english = new Map(nodes.map(node => [node, node.innerHTML]));
let language = "en";
try { if (localStorage.getItem("shay-site-lang") === "zh") language = "zh"; } catch {}
function applyLanguage(next) {
  language = next === "zh" ? "zh" : "en";
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  for (const node of nodes) node.innerHTML = language === "zh" ? (translations[node.dataset.i18n] || english.get(node)) : english.get(node);
  toggle.textContent = language === "zh" ? "EN" : "中文";
  toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "Switch to Chinese");
  try { localStorage.setItem("shay-site-lang", language); } catch {}
}
toggle.hidden = false;
toggle.addEventListener("click", () => applyLanguage(language === "en" ? "zh" : "en"));
applyLanguage(language);
