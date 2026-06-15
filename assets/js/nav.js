/* ============================================
   Microcontroller Hub — Mobile Nav
   v1.0.0
   ============================================ */
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });

  // Close on link click (mobile)
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".site-header")) {
      toggle.classList.remove("open");
      links.classList.remove("open");
    }
  });
})();
