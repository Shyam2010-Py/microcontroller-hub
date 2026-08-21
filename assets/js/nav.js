/* ============================================
   Microcontroller Hub — Mobile Nav
   v1.0.0
   ============================================ */
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        toggle.classList.remove("open");
        links.classList.remove("open");
      });
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".site-header")) {
        toggle.classList.remove("open");
        links.classList.remove("open");
      }
    });
  }

  // Load the isolated LearningHub tracker on every page without changing page-specific code.
  if (!document.querySelector('script[data-learninghub-activity]')) {
    const script = document.createElement('script');
    script.src = 'assets/js/learning-activity.js';
    script.async = true;
    script.dataset.learninghubActivity = 'true';
    document.head.appendChild(script);
  }
})();
