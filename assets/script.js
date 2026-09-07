"use strict";
const translations = {
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
  "t17": "面向力敏感操作的自校准触觉反射控制器。",
  "t19": "第一作者 · 已接收",
  "t20": "通过触觉反馈塑形示教数据，使机器人策略学到更安全的抓取行为。",
  "t22": "共同第一作者",
  "t23": "面向嵌入式边缘 AI 应用的轻量化视觉识别。",
  "t26": "研究兴趣",
  "t28": "我的研究聚焦机器人学习与操作，关注视觉—语言—动作模型、触觉感知与强化学习，致力于让机器人在真实物理交互中更加可靠。",
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
