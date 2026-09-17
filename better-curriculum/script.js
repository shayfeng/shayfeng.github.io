"use strict";

const evidenceData = {
  act: {
    meta: "ACT · primary controlled comparison",
    rows: [
      { label: "Reflex-shaped data", sub: "Policy only", value: 95, count: "19 / 20", tone: "blue" },
      { label: "Visually screened manual data", sub: "Policy only", value: 15, count: "3 / 20", tone: "warm" },
      { label: "Contact-quality screened manual data", sub: "Policy only", value: 30, count: "6 / 20", tone: "slate" }
    ],
    takeaway: "<strong>Collection-time shaping matters.</strong> Offline screening improves the manual pool, but it does not close the gap to reflex-shaped demonstrations.",
    footnote: "30 training demonstrations per source · 20 nominal trials per condition · student inference uses no tactile input."
  },
  pi05: {
    meta: "π₀.₅ · cross-backbone validation · Table 3",
    rows: [
      { label: "Reflex-shaped data", sub: "Policy only", value: 95, count: "19 / 20", tone: "blue" },
      { label: "Visually screened manual data", sub: "Policy only", value: 5, count: "1 / 20", tone: "warm" },
      { label: "Visually screened manual data", sub: "Policy + runtime arbiter", value: 55, count: "11 / 20", tone: "slate" }
    ],
    takeaway: "<strong>Collection-time shaping matters.</strong> Runtime arbitration only partially recovers the nominal performance of a policy trained on manual data.",
    footnote: "30 training demonstrations per source · 20 nominal trials per condition · student inference uses no tactile input."
  }
};

const switcher = document.querySelector("[data-evidence-switch]");
const rows = [...document.querySelectorAll("[data-evidence-row]")];
const meta = document.getElementById("evidence-meta");
const takeaway = document.getElementById("evidence-takeaway");
const footnote = document.getElementById("evidence-footnote");

function renderEvidence(model) {
  const data = evidenceData[model];
  if (!data) return;

  meta.textContent = data.meta;
  takeaway.innerHTML = data.takeaway;
  footnote.textContent = data.footnote;

  rows.forEach((row, index) => {
    const item = data.rows[index];
    row.querySelector("[data-row-label]").textContent = item.label;
    row.querySelector("[data-row-sub]").textContent = item.sub;
    row.querySelector("[data-row-score]").textContent = `${item.value}%`;
    row.querySelector("[data-row-count]").textContent = item.count;
    const fill = row.querySelector("[data-row-fill]");
    fill.className = `bar-fill ${item.tone}`;
    requestAnimationFrame(() => { fill.style.width = `${item.value}%`; });
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
    const next = event.key === "ArrowRight" ? (current + 1) % buttons.length : (current - 1 + buttons.length) % buttons.length;
    buttons[next].focus();
    renderEvidence(buttons[next].dataset.model);
  });

  renderEvidence("pi05");
}
