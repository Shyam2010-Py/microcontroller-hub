/* ============================================
   Microcontroller Hub — Copy Code
   v1.0.0
   ============================================ */
(function () {
  document.querySelectorAll(".code-block").forEach((block) => {
    const btn = block.querySelector(".copy-btn");
    const code = block.querySelector("pre code");
    if (!btn || !code) return;

    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(code.innerText);
        btn.textContent = "Copied!";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = "Copy";
          btn.classList.remove("copied");
        }, 1500);
      } catch (err) {
        btn.textContent = "Error";
        setTimeout(() => (btn.textContent = "Copy"), 1500);
      }
    });
  });

  // TOC scroll-spy
  const tocLinks = document.querySelectorAll(".docs-toc a");
  if (tocLinks.length) {
    const sections = Array.from(tocLinks)
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);

    const setActive = () => {
      const y = window.scrollY + 120;
      let activeIdx = 0;
      sections.forEach((s, i) => {
        if (s.offsetTop <= y) activeIdx = i;
      });
      tocLinks.forEach((l, i) =>
        l.classList.toggle("active", i === activeIdx)
      );
    };
    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }
})();
