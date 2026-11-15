/* Блок «Мой продукт»: плавающие телефоны, лёгкий параллакс за курсором, пауза вне экрана */
(function () {
  var st = document.getElementById('prodStage'); if (!st) return;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (window.IntersectionObserver) new IntersectionObserver(function (en) { st.classList.toggle('paused', !en[0].isIntersecting); }, { threshold: .05 }).observe(st);
  if (reduce || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  var pend = 0, ex = 0, ey = 0;
  function apply() { pend = 0; var r = st.getBoundingClientRect(); st.style.setProperty('--mx', (((ex - r.left) / r.width) * 2 - 1).toFixed(3)); st.style.setProperty('--my', (((ey - r.top) / r.height) * 2 - 1).toFixed(3)); }
  st.addEventListener('pointermove', function (e) { ex = e.clientX; ey = e.clientY; if (!pend) pend = requestAnimationFrame(apply); }, { passive: true });
  st.addEventListener('pointerleave', function () { st.style.setProperty('--mx', 0); st.style.setProperty('--my', 0); });
})();
