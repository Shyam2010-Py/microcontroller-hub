/* ============================================
   Microcontroller Hub — Roadmap reveal
   v1.0.0
   ============================================ */
(function () {
  const steps = document.querySelectorAll(".roadmap-step");
  if (!steps.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  steps.forEach((s, i) => {
    s.style.opacity = "0";
    s.style.transform = "translateY(20px)";
    s.style.transition = `opacity .5s ease ${i * 0.08}s, transform .5s ease ${i * 0.08}s`;
    io.observe(s);
  });

  document.addEventListener("scroll", () => {
    document.querySelectorAll(".roadmap-step.in").forEach((s) => {
      s.style.opacity = "1";
      s.style.transform = "translateY(0)";
    });
  });
})();
