(() => {
  const CATEGORIES = ["全部", "选型评测", "Sketch", "海报排版", "人像角色", "电商改图", "场景视觉", "像素动效", "UX产品"];
  const grid = document.getElementById("grid");
  const chipsEl = document.getElementById("chips");
  const searchEl = document.getElementById("search");
  const matchEl = document.getElementById("match-count");
  const toastEl = document.getElementById("toast");

  let cases = [];
  let category = "全部";
  let query = "";

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toastEl.classList.remove("is-show"), 1600);
  }

  function renderChips() {
    chipsEl.innerHTML = "";
    CATEGORIES.forEach((c) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (c === category ? " is-active" : "");
      btn.textContent = c;
      btn.addEventListener("click", () => {
        category = c;
        renderChips();
        renderGrid();
      });
      chipsEl.appendChild(btn);
    });
  }

  function filtered() {
    const q = query.trim().toLowerCase();
    return cases.filter((item) => {
      if (category !== "全部" && item.category !== category) return false;
      if (!q) return true;
      const hay = `${item.title} ${item.blurb} ${item.author} ${item.category} ${item.prompt || ''}`.toLowerCase();
      return hay.includes(q);
    });
  }

  function placeholderIcon(cat) {
    const map = {
      选型评测: "⚡",
      Sketch: "✏️",
      海报排版: "🖼",
      人像角色: "👤",
      电商改图: "🛒",
      场景视觉: "🏞",
      像素动效: "👾",
      UX产品: "🧭",
    };
    return map[cat] || "🖼";
  }

  function truncatePrompt(s, max) {
    const t = String(s || "").replace(/\s+/g, " ").trim();
    if (t.length <= max) return t;
    return t.slice(0, max).trimEnd() + "…";
  }

  function cardHTML(item) {
    const hasPrompt = !!(item.prompt && String(item.prompt).trim());
    const promptBlock = hasPrompt
      ? `<div class="card-prompt">
    <div class="card-prompt-label">提示词</div>
    <pre class="card-prompt-preview">${escapeHtml(truncatePrompt(item.prompt, 160))}</pre>
  </div>`
      : "";
    const promptBtn = hasPrompt
      ? `<button type="button" class="cta-prompt" data-copy-prompt="${escapeAttr(item.id)}" title="复制提示词">复制提示词</button>`
      : "";
    return `
<article class="card" data-id="${item.id}" data-category="${item.category}">
  <div class="card-media">
    <span class="badge">${item.category}</span>
    <div class="card-ph" aria-hidden="true">
      <span>${placeholderIcon(item.category)}</span>
      <small>GPT Image 2.5</small>
    </div>
    <img alt="" loading="lazy" decoding="async" data-status="${item.id}" />
  </div>
  <div class="card-body">
    <h3 class="card-title">${escapeHtml(item.title)}</h3>
    <p class="card-blurb">${escapeHtml(item.blurb)}</p>
    ${promptBlock}
    <div class="card-meta">
      <span class="author">${escapeHtml(item.author)}</span>
      <div class="card-actions">
        <button type="button" class="icon-btn" data-copy="${escapeAttr(item.url)}" title="复制链接" aria-label="复制链接">⧉</button>
        ${promptBtn}
        <a class="cta-link" href="${escapeAttr(item.url)}" target="_blank" rel="noopener noreferrer">查看原帖 ↗</a>
      </div>
    </div>
  </div>
</article>`;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, "&#39;");
  }

  function renderGrid() {
    const list = filtered();
    matchEl.textContent = `${list.length} 条匹配`;
    if (!list.length) {
      grid.innerHTML = `<div class="empty">没有匹配的案例，试试其他分类或关键词。</div>`;
      return;
    }
    grid.innerHTML = list.map(cardHTML).join("");
    grid.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const url = btn.getAttribute("data-copy");
        try {
          await navigator.clipboard.writeText(url);
          showToast("已复制原帖链接");
        } catch {
          showToast("复制失败，请手动复制");
        }
      });
    });
    grid.querySelectorAll("[data-copy-prompt]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-copy-prompt");
        const item = cases.find((c) => c.id === id);
        const text = item && item.prompt ? String(item.prompt) : "";
        if (!text) {
          showToast("该条目暂无提示词");
          return;
        }
        try {
          await navigator.clipboard.writeText(text);
          showToast("已复制提示词");
        } catch {
          showToast("复制失败，请手动复制");
        }
      });
    });
    lazyLoadPreviews();
  }

  const previewCache = new Map();

  async function fetchPreview(id) {
    if (previewCache.has(id)) return previewCache.get(id);
    const endpoints = [
      `https://api.fxtwitter.com/status/${id}`,
      `https://api.vxtwitter.com/status/${id}`,
    ];
    let url = null;
    for (const ep of endpoints) {
      try {
        const res = await fetch(ep, { signal: AbortSignal.timeout(6000) });
        if (!res.ok) continue;
        const data = await res.json();
        const media =
          data?.tweet?.media?.photos?.[0]?.url ||
          data?.tweet?.media?.videos?.[0]?.thumbnail_url ||
          data?.media_extended?.[0]?.thumbnail_url ||
          data?.media_extended?.[0]?.url ||
          data?.mediaURLs?.[0] ||
          null;
        if (media) {
          url = media;
          break;
        }
      } catch {
        /* try next */
      }
    }
    previewCache.set(id, url);
    return url;
  }

  function lazyLoadPreviews() {
    const imgs = grid.querySelectorAll("img[data-status]");
    if (!imgs.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (!entry.isIntersecting) return;
          const img = entry.target;
          io.unobserve(img);
          const id = img.getAttribute("data-status");
          const src = await fetchPreview(id);
          if (!src) return;
          img.src = src;
          img.onload = () => img.classList.add("is-loaded");
          img.onerror = () => {
            img.removeAttribute("src");
          };
        });
      },
      { rootMargin: "120px" }
    );
    imgs.forEach((img) => io.observe(img));
  }

  searchEl.addEventListener("input", () => {
    query = searchEl.value;
    renderGrid();
  });

  async function init() {
    renderChips();
    try {
      const res = await fetch("./data/cases.json", { cache: "no-cache" });
      if (!res.ok) throw new Error("cases.json " + res.status);
      cases = await res.json();
      const n = document.getElementById("stat-cases");
      if (n) n.textContent = String(cases.length);
      renderGrid();
    } catch (err) {
      grid.innerHTML = `<div class="empty">无法加载案例数据（${escapeHtml(String(err.message || err))}）。请确认 ./data/cases.json 可访问。</div>`;
      matchEl.textContent = "0 条匹配";
    }
  }

  init();
})();
