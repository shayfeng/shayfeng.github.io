const translations = {
  zh: {
    nav_research: "研究方向", nav_publications: "论文", nav_projects: "项目", nav_awards: "竞赛荣誉", nav_skills: "技术能力", cv_short: "联系",
    hero_eyebrow: "机器人操作 · Vision-Language-Action · 强化学习 · 视触觉融合",
    hero_name: "冯紫嫣 Shay Feng", hero_title: "机器人学习与操作方向 MPhil 研究生",
    hero_intro: "我关注真实机器人操作中的视觉—语言—动作模型、触觉感知与强化学习，尤其希望让机器人在力敏感、接触丰富的交互中更可靠。",
    hero_sub: "现就读于香港科技大学（广州）机器人与自主系统学域。研究工作覆盖传感器、遥操作、多模态数据采集、闭环控制、策略训练与真机部署。",
    see_work: "查看代表工作", download_cv: "技术栈",
    affiliation_label: "单位", affiliation_value: "香港科技大学（广州） · 机器人与自主系统",
    focus_label: "当前研究", focus_value: "VLA · 触觉反馈 · 力敏感机器人操作",
    platform_label: "系统链路", platform_value: "传感器 → 遥操作 → 数据 → 学习 → 真机",
    stat_iros: "第一作者论文", stat_iros_sub: "面向力敏感操作的触觉反射控制",
    stat_corl: "第一作者论文", stat_corl_sub: "用闭环控制塑形示教数据以改善策略学习",
    stat_icra: "ManipDojo Challenge · 冠军", stat_icra_sub: "InternVLA + RLinf + GRPO · RoboTwin 2.0",
    research_title: "研究方向", research_desc: "核心问题：当真实物理接触成为任务成败关键时，如何让机器人策略更可靠。",
    research_1_title: "高频触觉闭环控制", research_1_desc: "设计高频反射层，在较慢的学习策略失效之前对滑移、接触强度与形变做出反应。",
    research_2_title: "Vision-Language-Action", research_2_desc: "面向真机操作微调与评测 VLA 策略，包括 π0.5、ACT、WALL-OSS 与 InternVLA 系统。",
    research_3_title: "视触觉机器人学习", research_3_desc: "研究触觉信息究竟应进入控制环、示教数据生成过程，还是直接作为策略输入。",
    research_4_title: "机器人强化学习", research_4_desc: "在仿真与真机迁移中构建分阶段奖励、策略优化和复杂操作训练流程。",
    pub_title: "代表性论文", pub_desc: "触觉机器人操作与机器人学习方向的代表性第一作者工作。",
    first_author: "第一作者", co_first_author: "共同第一作者",
    iros_summary: "提出基于传感器噪声统计的自校准触觉反射控制器，不依赖外部力标定、材料模型或人工阈值调参。",
    corl_summary: "不直接把触觉加入策略推理，而是在数据采集阶段用高频触觉闭环控制塑形示教，使标准策略学到更安全的力敏感行为。",
    problem: "问题", method: "方法", result: "结果",
    iros_problem: "学习策略或遥操作在滑移和过大接触力出现时可能响应过慢。",
    iros_method: "约 25 Hz 的滑移抑制、重量自适应释放和过载保护三通道触觉反射。",
    iros_result: "动态倒水成功率 90%；软杯不可逆形变防护 5/5。",
    corl_problem: "直接增加触觉输入并不一定能改善策略学习。",
    corl_method: "保持策略输入和架构不变，仅使用触觉闭环控制改变示教数据来源。",
    corl_result: "稳定抓取：ACT 15%→95%，π0.5 5%→95%；扰动时可重新接入触觉反射恢复。",
    asc_summary: "负责边缘计算方案、数据分析、AI 嵌入式部署与论文撰写。",
    jmrt_summary: "负责 HCPEB 处理后的实验数据、显微组织与材料性能变化分析。",
    projects_title: "系统与项目", projects_desc: "偏好端到端的真机系统工作：感知、采集、控制、学习与部署。",
    proj_1_title: "视触觉机器人智能操作 · HKUST(GZ) RIL-LAB", proj_1_desc: "从零搭建研究链路：触觉传感器集成、25 Hz 反射控制、Meta Quest 3 遥操作、多模态同步采集与 VLA 策略训练/部署。",
    proj_2_title: "机器人强化学习实习生 · Motphys", proj_2_desc: "围绕视触觉仿真与 Sim-to-Real 进行技术调研和系统设计，比较 TacSL、Tactile Genesis、XenSim、Kinematic Taxel、Elastomer Taxel 等路线。",
    proj_3_title: "具身智能强化营 · 清华 AIR × 地瓜机器人", proj_3_desc: "搭建高层 VLM 任务理解 + 低层 PPO 控制的分层系统，并获桌面机器人赛道冠军。",
    proj_4_title: "边缘智能与嵌入式系统 · 西南大学 DW 工作室", proj_4_desc: "负责 AI 嵌入式部署、机器人系统调试与 Web 可视化，实现算法、边缘设备与网页端联动。",
    awards_title: "竞赛与荣誉", awards_desc: "机器人、人工智能、工程实践与创新类代表性成果。",
    award_icra_desc: "基于 InternVLA + RLinf 构建 RoboTwin 2.0 多任务强化学习系统，采用 GRPO、AttenA+ 与分阶段稠密奖励，最终 90.1/100。",
    award_eaidc_title: "EAIDC 具亮计划大湾区巅峰赛 · 三等奖", award_eaidc_desc: "搭建双臂数据采集与 π0.5 / WALL-OSS 策略训练流程，完成多任务真机操作。",
    award_air_title: "清华 AIR × 地瓜机器人具身智能强化营 · 冠军", award_air_desc: "桌面机器人赛道；VLM + PPO 分层控制系统。",
    honor_provincial: "重庆市普通高校创新能力提升先进个人", honor_provincial_tag: "省级先进个人",
    award_robot: "中国机器人及人工智能大赛", award_robot_tag: "全国二等奖",
    award_challenge: "“挑战杯”全国大学生课外学术科技作品竞赛", award_challenge_tag: "省级特等奖",
    award_media: "全国大学生数字媒体科技作品及创意竞赛", award_media_tag: "全国三等奖",
    award_ai: "全国高校计算机能力挑战赛 · AI / 大数据", award_ai_tag: "两项本研组三等奖",
    award_internet: "中国国际“互联网+”大学生创新创业大赛", award_internet_tag: "省级铜奖",
    skills_title: "技术能力", skills_desc: "面向机器人学习研究与真机系统集成的完整技术栈。",
    skill_robotics: "机器人系统与真机部署", skill_vla: "VLA 与模仿学习", skill_rl: "强化学习", skill_tactile: "触觉与力敏感控制", skill_sim: "仿真与机器学习", skill_eng: "编程与工程开发",
    contact_title: "联系", contact_desc: "欢迎就科研合作、机器人项目或学术问题交流。",
    footer_text: "轻量级静态页面，可直接部署到 GitHub Pages。"
  }
};

let lang = localStorage.getItem("shay-site-lang") || "en";
const toggle = document.getElementById("langToggle");

function applyLanguage(nextLang) {
  lang = nextLang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (lang === "zh" && translations.zh[key]) {
      if (!node.dataset.en) node.dataset.en = node.textContent;
      node.textContent = translations.zh[key];
    } else if (lang === "en" && node.dataset.en) {
      node.textContent = node.dataset.en;
    }
  });
  toggle.textContent = lang === "zh" ? "EN" : "中文";
  localStorage.setItem("shay-site-lang", lang);
}

toggle.addEventListener("click", () => applyLanguage(lang === "en" ? "zh" : "en"));
document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage(lang);
