"use strict";

// Load the section-specific visual layer separately so the core project-page
// stylesheet stays compact and easy to maintain.
const sectionStyles = document.createElement("link");
sectionStyles.rel = "stylesheet";
sectionStyles.href = "sections.css?v=20260917c";
document.head.appendChild(sectionStyles);

const evidenceData = {
  act: {
    meta: "ACT · primary controlled comparison",
    rows: [
      { label: "Reflex-shaped data", sub: "Policy only", value: 95, count: "19 / 20", tone: "blue" },
      { label: "Video-screened manual data", sub: "Policy only", value: 15, count: "3 / 20", tone: "warm" },
      { label: "Contact-quality screened manual data", sub: "Policy only", value: 30, count: "6 / 20", tone: "slate" }
    ],
    takeaway: "<strong>Selection ≠ shaping.</strong> Offline contact-quality screening strengthens the manual baseline, but it does not close the gap to demonstrations whose actions were corrected online during collection.",
    footnote: "30 training demonstrations per source · 20 nominal trials per condition · student inference uses no tactile input."
  },
  pi05: {
    meta: "π₀.₅ · cross-backbone validation",
    rows: [
      { label: "Reflex-shaped data", sub: "Policy only", value: 95, count: "19 / 20", tone: "blue" },
      { label: "Manual data", sub: "Policy only", value: 5, count: "1 / 20", tone: "warm" }
    ],
    takeaway: "<strong>Same student interface. Different demonstration source.</strong> The reflex-shaped collection transfers the nominal grasping behavior across a second policy backbone without tactile input at inference.",
    footnote: "30 training demonstrations per source · 20 nominal trials per condition · student inference uses no tactile input. Disturbance reactivity is evaluated separately below."
  }
};

const switcher = document.querySelector("[data-evidence-switch]");
const rows = [...document.querySelectorAll("[data-evidence-row]")];
const meta = document.getElementById("evidence-meta");
const takeaway = document.getElementById("evidence-takeaway");
const footnote = document.getElementById("evidence-footnote");

function renderEvidence(model) {
  const data = evidenceData[model];
  if (!data || !switcher || !meta || !takeaway || !footnote) return;

  meta.textContent = data.meta;
  takeaway.innerHTML = data.takeaway;
  footnote.textContent = data.footnote;

  rows.forEach((row, index) => {
    const item = data.rows[index];
    row.hidden = !item;
    if (!item) return;

    row.querySelector("[data-row-label]").textContent = item.label;
    row.querySelector("[data-row-sub]").textContent = item.sub;
    row.querySelector("[data-row-score]").textContent = `${item.value}%`;
    row.querySelector("[data-row-count]").textContent = item.count;
    const fill = row.querySelector("[data-row-fill]");
    fill.className = `bar-fill ${item.tone}`;
    fill.style.width = "0%";
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.width = `${item.value}%`;
    }));
  });

  switcher.querySelectorAll("button[data-model]").forEach((button) => {
    const active = button.dataset.model === model;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
    button.setAttribute("tabindex", active ? "0" : "-1");
  });
}

if (switcher) {
  switcher.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-model]");
    if (button) renderEvidence(button.dataset.model);
  });

  switcher.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    const buttons = [...switcher.querySelectorAll("button[data-model]")];
    const current = buttons.findIndex((button) => button.classList.contains("active"));
    const next = event.key === "ArrowRight"
      ? (current + 1) % buttons.length
      : (current - 1 + buttons.length) % buttons.length;
    buttons[next].focus();
    renderEvidence(buttons[next].dataset.model);
  });

  renderEvidence("pi05");
}

const loopSwitcher = document.querySelector("[data-loop-switch]");
const loopPanels = [...document.querySelectorAll("[data-loop-panel]")];

function renderLoop(loop) {
  if (!loopSwitcher) return;
  loopPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.loopPanel === loop);
  });
  loopSwitcher.querySelectorAll("button[data-loop]").forEach((button) => {
    const active = button.dataset.loop === loop;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
    button.setAttribute("tabindex", active ? "0" : "-1");
  });
}

if (loopSwitcher) {
  loopSwitcher.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-loop]");
    if (button) renderLoop(button.dataset.loop);
  });

  loopSwitcher.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    const buttons = [...loopSwitcher.querySelectorAll("button[data-loop]")];
    const current = buttons.findIndex((button) => button.classList.contains("active"));
    const next = event.key === "ArrowRight"
      ? (current + 1) % buttons.length
      : (current - 1 + buttons.length) % buttons.length;
    buttons[next].focus();
    renderLoop(buttons[next].dataset.loop);
  });

  renderLoop("reflex");
}
