"use strict";

// Load the section-specific visual layer separately so the core project-page
// stylesheet stays compact and easy to maintain.
const sectionStyles = document.createElement("link");
sectionStyles.rel = "stylesheet";
sectionStyles.href = "sections.css?v=20260917c";
document.head.appendChild(sectionStyles);

// Keep the public project page focused on the research idea itself rather than
// internal review/rebuttal context.
const rebuttalEyebrow = [...document.querySelectorAll("#idea .eyebrow")]
  .find((node) => node.textContent.trim() === "FROM THE AUTHORS’ REBUTTAL CLARIFICATION");
if (rebuttalEyebrow) rebuttalEyebrow.remove();

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

// Citation section: keep it at the end of the project page and make the
// BibTeX entry directly copyable.
const main = document.querySelector("main");
if (main && !document.getElementById("citation")) {
  main.insertAdjacentHTML("beforeend", `
    <section class="section citation-section" id="citation">
      <div class="section-label">CITATION</div>
      <div class="citation-layout">
        <div class="citation-intro">
          <p class="eyebrow">CITE THIS WORK</p>
          <h2>If you find this work useful, <span class="accent-text">please cite it.</span></h2>
          <p>Current citation for the arXiv version.</p>
          <a class="citation-arxiv" href="https://arxiv.org/abs/2609.25887" target="_blank" rel="noopener">arXiv:2609.25887 ↗</a>
        </div>
        <div class="citation-card">
          <div class="citation-card-head">
            <span>BibTeX</span>
            <button type="button" class="copy-citation" data-copy-citation>Copy</button>
          </div>
          <pre><code id="bibtex-citation">@article{feng2026bettercurriculum,
  title={What is the Better Curriculum: Controller-Shaped Grasping Behavior for Contact Force-Sensitive Manipulation},
  author={Feng, Ziyan and Yuan, Zizhao and Fu, Yulong and He, Yuxin and Zhang, Zhiyuan and Zhang, Zhengjie and Zhou, Jinni and Xu, Renjing and Nie, Qiang},
  journal={arXiv preprint arXiv:2609.25887},
  year={2026}
}</code></pre>
        </div>
      </div>
    </section>
  `);

  const nav = document.querySelector(".topbar nav");
  if (nav && !nav.querySelector('a[href="#citation"]')) {
    const homeLink = nav.querySelector('a[href="../"]');
    const citationLink = document.createElement("a");
    citationLink.href = "#citation";
    citationLink.textContent = "Citation";
    if (homeLink) nav.insertBefore(citationLink, homeLink);
    else nav.appendChild(citationLink);
  }

  const citationStyles = document.createElement("style");
  citationStyles.textContent = `
    .citation-section{background:#f8fbff}
    .citation-layout{display:grid;grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr);gap:70px;align-items:start}
    .citation-intro h2{max-width:620px}
    .citation-intro>p:last-of-type{margin:22px 0 14px;color:#5b6a80}
    .citation-arxiv{display:inline-flex;color:var(--accent);font-weight:760}
    .citation-card{overflow:hidden;border:1px solid var(--line);border-radius:16px;background:#0d1d34;box-shadow:0 12px 34px rgba(17,35,63,.08)}
    .citation-card-head{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid #263a57;color:#b8c7da;font-size:.78rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    .copy-citation{padding:8px 12px;border:1px solid #38506f;border-radius:8px;background:#152b49;color:#fff;font:inherit;font-size:.74rem;letter-spacing:0;text-transform:none;cursor:pointer;transition:.18s ease}
    .copy-citation:hover{background:#1d3a61;border-color:#4e6d95}
    .citation-card pre{margin:0;padding:24px;overflow:auto;color:#e8eef7;font:500 .84rem/1.65 ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono",monospace;white-space:pre}
    .citation-card code{font:inherit}
    @media(max-width:1000px){.citation-layout{grid-template-columns:1fr;gap:32px}}
    @media(max-width:620px){.citation-card pre{padding:18px;font-size:.76rem}.citation-card-head{padding:13px 15px}}
  `;
  document.head.appendChild(citationStyles);

  const copyButton = document.querySelector("[data-copy-citation]");
  const bibtex = document.getElementById("bibtex-citation");
  if (copyButton && bibtex) {
    copyButton.addEventListener("click", async () => {
      const original = copyButton.textContent;
      try {
        await navigator.clipboard.writeText(bibtex.textContent);
        copyButton.textContent = "Copied";
      } catch {
        const range = document.createRange();
        range.selectNodeContents(bibtex);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        copyButton.textContent = "Selected";
      }
      setTimeout(() => { copyButton.textContent = original; }, 1600);
    });
  }
}
