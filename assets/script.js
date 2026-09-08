"use strict";
const translations = {
  "corl_teaser": "Teaser：通过控制器塑造示范，实现易损物体的稳定抓取。",
  "corl_system": "系统总览：示范采集、无触觉输入的策略学习与部署。",
  "iros_pouring": "倒水对比：左侧未启用反射控制，杯体滑移；右侧启用 TactileReflex，稳定完成倒水。",
  "t1": "论文",
  "t2": "研究",
  "t3": "经历",
  "t4": "教育",
  "t5": "冯紫嫣 <span class=\"name-note\">Shay</span>",
  "t6": "香港科技大学（广州） · MPhil 研究生",
  "t7": "我研究<strong>面向通用机器人操作的物理智能</strong>，连接触觉感知、闭环控制与机器人学习。",
  "t9": "导师：Qiang Nie 教授、Jinni Zhou 教授",
  "t11": "联系",
  "t12": "第一作者 · 已接收",
  "t13": "第一作者 · 已接收",
  "t14": "冠军",
  "t15": "代表性论文",
  "t16": "第一作者 · 已接收",
  "t17": "<strong>创新点：</strong>将触觉传感器的固有噪声转化为自校准控制阈值，无需外部力标定、材料模型或人工阈值调参；通过滑移抑制、夹持调节与过载保护三类协同反射，实现力敏感操作中的闭环控制。",
  "t19": "第一作者 · 已接收",
  "t20": "<strong>创新点：</strong>将触觉反馈作为数据采集阶段的老师，利用高频闭环控制塑形示教，使 ACT 与 π0.5 在推理时无需触觉输入，也能学到更安全的抓取行为。研究揭示示教质量如何影响策略的接触行为，并区分可通过学习获得的行为与仍需实时反馈的能力。",
  "t22": "共同第一作者",
  "t23": "面向嵌入式边缘 AI 应用的轻量化视觉识别。我负责边缘计算算法设计、部署与加速。",
  "t26": "研究兴趣",
  "t28": "我的研究围绕<strong>机器人学习、多模态感知与物理交互</strong>展开，关注如何结合视觉—语言—动作模型、触觉感知与强化学习，让机器人理解任务，并在真实环境中可靠地操作物体。",
  "t35": "代表性经历",
  "t36": "2025.09 – 至今",
  "t37": "研究面向真实机器人操作的触觉感知与机器人学习。",
  "t38": "Motphys · 机器人强化学习实习生",
  "t39": "2026.07 – 至今",
  "t40": "从事触觉仿真与机器人学习研究。",
  "t41": "冠军",
  "t42": "开发基于强化学习的多任务机器人操作系统。",
  "t43": "清华 AIR × 地瓜机器人",
  "t44": "冠军",
  "t45": "具身智能强化营桌面机器人赛道冠军。",
  "t50": "教育背景",
  "t51": "香港科技大学（广州）",
  "t52": "机器人与自主系统 MPhil",
  "t53": "西南大学",
  "t54": "自动化工学学士",
  "t67": "机器人与自主系统 · 香港科技大学（广州）",
  "research_more": "我尤其关注接触丰富与力敏感的操作场景、感知反馈在学习和控制中的作用，以及策略跨物体与环境的泛化能力。我的工作结合学习方法与闭环控制，重视真机验证，希望提升机器人面对复杂物理交互时的适应性与稳健性。",
  "personal_honors": "个人荣誉",
  "honor_drobotics": "地瓜机器人年度星推官",
  "honor_provincial": "省级创新创业先进个人",
  "swu_honors": "一等奖学金 · 优秀毕业生 · 创新奖",
  "paper_more": "更多",
  "paper_less": "收起",
  "iros_figure": "TactileReflex 系统框架",
  "asc_figure": "CM2-Net 图形摘要",
  "figure_full": "查看大图",
  "figure_source": "图片来源"
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
