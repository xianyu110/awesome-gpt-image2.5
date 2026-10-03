/* Try-online CTA helper: builds gptimage2.asia links with UTM + locale (zh visitors → /zh). */
(() => {
  const ORIGIN = "https://gptimage2.asia";
  const lang = (navigator.languages && navigator.languages[0]) || navigator.language || "";
  const isZh = /^zh\b/i.test(lang);

  function tryUrl(path, content, params) {
    const p = path || "/";
    const localized = isZh ? "/zh" + (p === "/" ? "" : p) : p;
    const u = new URL(ORIGIN + localized);
    Object.entries(params || {}).forEach(([k, v]) => {
      if (v != null && v !== "") u.searchParams.set(k, v);
    });
    u.searchParams.set("utm_source", "github");
    u.searchParams.set("utm_medium", "pages");
    u.searchParams.set("utm_campaign", "awesome-gpt-image25");
    if (content) u.searchParams.set("utm_content", content);
    return u.toString();
  }

  window.TryOnline = { tryUrl, isZh };

  function rewrite() {
    document.querySelectorAll("a[data-try]").forEach((a) => {
      a.href = tryUrl(a.getAttribute("data-try-path") || "/", a.getAttribute("data-try"));
    });
    const bar = document.getElementById("promo-bar");
    const close = document.getElementById("promo-close");
    if (bar && close) {
      try {
        if (sessionStorage.getItem("promoClosed") === "1") bar.hidden = true;
      } catch {}
      close.addEventListener("click", () => {
        bar.hidden = true;
        try { sessionStorage.setItem("promoClosed", "1"); } catch {}
      });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", rewrite);
  else rewrite();
})();
