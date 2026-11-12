/* Тушь: тату-салон. Бумага, чёрная линия, красная печать. Главный приём: лист, на котором рисуется орнамент. */
PORTF.register('tattoo', {
css: `
.s-tattoo{--paper:#f2efe8;--ink:#111;--red:#c8102e;--grey:#6d6a63;
  background:var(--paper);color:var(--ink);font:400 17px/1.6 'Onest',system-ui,sans-serif}
.s-tattoo h1,.s-tattoo h2,.s-tattoo h3{font-family:'Cormorant Garamond',Georgia,serif;margin:0}
.s-tattoo .wrap{max-width:1200px;margin:0 auto;padding-inline:clamp(18px,4.5vw,56px)}
.t-top{display:flex;justify-content:space-between;align-items:center;padding-top:20px;padding-bottom:20px;font-size:15px}
.t-seal{display:inline-grid;place-items:center;width:46px;height:46px;border-radius:50%;border:2px solid var(--red);color:var(--red);font:600 22px/1 'Cormorant Garamond',serif;transform:rotate(-8deg)}
.t-hero{display:grid;grid-template-columns:.85fr 1.15fr;gap:clamp(20px,4vw,56px);align-items:center;padding-bottom:clamp(40px,7vw,90px)}
.t-hero h1{font:italic 500 clamp(5.5rem,17vw,13rem)/.9 'Cormorant Garamond',serif;letter-spacing:-.03em;margin-left:-.05em}
.t-hero p{margin-top:36px;max-width:26em}
.t-link{display:inline-block;margin-top:24px;font-weight:600;color:var(--ink);border-bottom:2px solid var(--red);padding-bottom:3px;text-decoration:none}
.t-sheet{position:relative;aspect-ratio:1;background:#fbfaf6;border:1px solid #d9d4c8;box-shadow:0 1px 0 #fff inset,0 24px 50px -24px rgba(0,0,0,.35)}
.t-sheet canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none;cursor:crosshair}
.t-sheet{margin-bottom:48px}
.t-sheet-bar{position:absolute;left:0;right:0;bottom:-46px;display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:13.5px;color:var(--grey);pointer-events:none}
.t-sheet-bar button{pointer-events:auto;padding:7px 14px;border:1px solid var(--ink);border-radius:999px;color:var(--ink);background:var(--paper);font-size:13.5px}
.t-sheet-bar button:hover{background:var(--ink);color:var(--paper)}
.t-sec{padding-top:clamp(48px,8vw,100px);padding-bottom:clamp(48px,8vw,100px);border-top:1px solid var(--ink)}
.t-sec>h2{font:italic 500 clamp(2.4rem,6vw,4.4rem)/1 'Cormorant Garamond',serif;margin-bottom:30px}
.t-styles li{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:8px 32px;align-items:baseline;padding:18px 0;border-bottom:1px solid #cfcabd;transition:background .3s,color .3s,padding .3s}
.t-styles li:hover{background:var(--ink);color:var(--paper);padding-left:18px;padding-right:18px}
.t-styles b{font:600 clamp(1.7rem,4vw,2.8rem)/1 'Cormorant Garamond',serif}
.t-styles span{font-size:16px;opacity:.8}
.t-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;counter-reset:t}
.t-steps li{counter-increment:t}
.t-steps li::before{content:counter(t,upper-roman);display:block;font:italic 500 2.6rem/1 'Cormorant Garamond',serif;color:var(--red);margin-bottom:10px}
.t-steps h3{font-weight:600;font-size:1.5rem;margin-bottom:6px}
.t-steps p{font-size:15.5px;color:#3b3934}
.t-calc{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,5vw,64px);align-items:center}
.t-field{display:grid;gap:10px;margin-bottom:26px}
.t-field label{display:flex;justify-content:space-between;font-weight:600}
.t-field input[type=range]{width:100%;accent-color:var(--red);height:28px}
.t-seg{display:flex;flex-wrap:wrap;gap:8px}
.t-seg button{padding:9px 16px;border:1px solid var(--ink);border-radius:999px;font-size:15px}
.t-seg button[aria-pressed=true]{background:var(--ink);color:var(--paper)}
.t-out{border:1px solid var(--ink);padding:clamp(22px,4vw,40px);background:#fbfaf6;position:relative}
.t-out big{display:block;font:600 clamp(2.6rem,7vw,4.6rem)/1 'Cormorant Garamond',serif;font-variant-numeric:tabular-nums}
.t-out p{color:var(--grey);font-size:15px;margin-top:10px}
.t-out .t-seal{position:absolute;top:-20px;right:18px;background:#fbfaf6}
.t-foot{border-top:1px solid var(--ink);padding-top:22px;padding-bottom:16px;display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;font-size:14px}
@media(max-width:820px){.t-hero,.t-calc{grid-template-columns:1fr}.t-steps{grid-template-columns:1fr 1fr}.t-styles li{grid-template-columns:1fr}}
`,
html: `
<header class="wrap t-top"><span class="t-seal" aria-hidden="true">Т</span><span>Студия татуировки, приём по записи</span></header>
<section class="wrap t-hero">
  <div>
    <h1>Тушь</h1>
    <p>Рисуем эскиз под вас и переносим на кожу. Графика, орнамент, тонкая линия. Стерильно, спокойно, без спешки.</p>
    <a class="t-link" href="#tattoo" data-t-scroll>Прикинуть стоимость</a>
  </div>
  <div class="t-sheet">
    <canvas aria-label="Лист для эскиза. Проведите по нему, и появится симметричный орнамент."></canvas>
    <div class="t-sheet-bar"><span id="t-tip">Проведите по листу, орнамент дорисуется сам</span><button id="t-clear">Чистый лист</button></div>
  </div>
</section>
<section class="wrap t-sec">
  <h2>Стили</h2>
  <ul class="t-styles">
    <li><b>Графика</b><span>Чёткий контур, штриховка, как гравюра в старой книге.</span></li>
    <li><b>Орнаментал</b><span>Симметрия и ритм: мандалы, узоры, браслеты.</span></li>
    <li><b>Тонкая линия</b><span>Одна игла, лёгкий рисунок, который читается вблизи.</span></li>
    <li><b>Дотворк</b><span>Тени из тысяч точек, мягкие переходы без заливки.</span></li>
    <li><b>Леттеринг</b><span>Надписи: от строгого шрифта до каллиграфии.</span></li>
  </ul>
</section>
<section class="wrap t-sec">
  <h2>Как проходит работа</h2>
  <ol class="t-steps">
    <li><h3>Разговор</h3><p>Обсуждаем идею, место и размер. Это бесплатно.</p></li>
    <li><h3>Эскиз</h3><p>Рисуем за три-пять дней, правим до согласования.</p></li>
    <li><h3>Сеанс</h3><p>Одноразовые иглы и картриджи, перерывы когда нужно.</p></li>
    <li><h3>Заживление</h3><p>Плёнка на четыре-пять дней, памятка по уходу, коррекция бесплатно.</p></li>
  </ol>
</section>
<section class="wrap t-sec" id="t-calc">
  <h2>Сколько это стоит</h2>
  <div class="t-calc">
    <div>
      <div class="t-field"><label for="t-size">Размер <span id="t-size-v"></span></label><input type="range" id="t-size" min="3" max="40" value="12"></div>
      <div class="t-field"><span style="font-weight:600">Сложность</span><div class="t-seg" id="t-cx"></div></div>
    </div>
    <div class="t-out" aria-live="polite"><span class="t-seal" aria-hidden="true">Т</span><big id="t-price"></big><p id="t-time"></p><p>Расчёт примерный. Точную цену мастер назовёт после эскиза.</p></div>
  </div>
</section>
<footer class="wrap t-foot"><span>Демо-сайт тату-салона. Студия вымышленная.</span><a href="#detailing">Следующее демо: детейлинг «Глянец»</a></footer>
`,
mount: function (root) {
  var cv = root.querySelector('canvas'), ctx = cv.getContext('2d'), tip = root.querySelector('#t-tip');
  var S = 0, dpr = Math.min(devicePixelRatio || 1, 2), SYM = 10, timer = 0, alive = true;
  function size() {
    var w = cv.clientWidth; if (!w || w === S) return; S = w;
    cv.width = cv.height = Math.round(w * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); guide(); demo();
  }
  function guide() {
    ctx.clearRect(0, 0, S, S); ctx.save(); ctx.translate(S / 2, S / 2); ctx.strokeStyle = 'rgba(17,17,17,.08)'; ctx.lineWidth = 1;
    for (var i = 0; i < SYM; i++) { ctx.rotate(Math.PI * 2 / SYM); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -S * .46); ctx.stroke(); }
    [.15, .3, .46].forEach(function (r) { ctx.beginPath(); ctx.arc(0, 0, S * r, 0, 6.3); ctx.stroke(); }); ctx.restore();
  }
  // отрезок в координатах от центра, повторяем по лучам и зеркалим
  function seg(x0, y0, x1, y1, w) {
    ctx.save(); ctx.translate(S / 2, S / 2); ctx.strokeStyle = '#111'; ctx.lineCap = 'round'; ctx.lineWidth = w;
    for (var i = 0; i < SYM; i++) {
      ctx.rotate(Math.PI * 2 / SYM);
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-x0, y0); ctx.lineTo(-x1, y1); ctx.stroke();
    }
    ctx.restore();
  }
  // стартовый орнамент, чтобы лист не был пустым
  function demo() {
    clearInterval(timer);
    var R = S * .42, t = 0, px = 0, py = 0, started = false;
    function pt(t) { var r = R * (.18 + .78 * t) * (1 + .16 * Math.sin(t * 22)), a = Math.sin(t * 9) * .3 * (1 - t * .3); return [Math.sin(a) * r, -Math.cos(a) * r]; }
    function step() { var p = pt(t); if (started) seg(px, py, p[0], p[1], 1.5); px = p[0]; py = p[1]; started = true; t += .004; return t <= 1; }
    if (PORTF.reduce) { while (step()); return; }
    timer = setInterval(function () { for (var k = 0; k < 3; k++) if (!step()) { clearInterval(timer); break; } }, 16);
  }
  var down = false, lx = 0, ly = 0;
  function pos(e) { var r = cv.getBoundingClientRect(); return [e.clientX - r.left - S / 2, e.clientY - r.top - S / 2]; }
  cv.addEventListener('pointerdown', function (e) { clearInterval(timer); down = true; var p = pos(e); lx = p[0]; ly = p[1]; cv.setPointerCapture(e.pointerId); tip.textContent = 'Красиво. Продолжайте'; });
  cv.addEventListener('pointermove', function (e) {
    if (!down) return; var p = pos(e), d = Math.hypot(p[0] - lx, p[1] - ly);
    seg(lx, ly, p[0], p[1], Math.max(.8, 2.6 - d * .06)); lx = p[0]; ly = p[1];
  });
  function up() { down = false; }
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  root.querySelector('#t-clear').onclick = function () { clearInterval(timer); guide(); tip.textContent = 'Лист чистый. Рисуйте'; };
  var ro = window.ResizeObserver ? new ResizeObserver(size) : null; if (ro) ro.observe(cv); size();

  // калькулятор
  var CX = [['Контур', 1], ['С тенями', 1.5], ['Плотная графика', 2.1]], cx = 1;
  var sizeIn = root.querySelector('#t-size'), segBox = root.querySelector('#t-cx');
  CX.forEach(function (c, i) { var b = document.createElement('button'); b.textContent = c[0]; b.onclick = function () { cx = i; calc(); }; segBox.appendChild(b); });
  function calc() {
    var s = +sizeIn.value, price = Math.max(5000, Math.round((s * s * 22 * CX[cx][1] + 3000) / 500) * 500), h = Math.max(1, Math.round(s * s * CX[cx][1] / 55 * 2) / 2);
    root.querySelector('#t-size-v').textContent = s + ' см';
    segBox.querySelectorAll('button').forEach(function (b, i) { b.setAttribute('aria-pressed', i === cx); });
    root.querySelector('#t-price').textContent = 'от ' + price.toLocaleString('ru-RU') + ' ₽';
    root.querySelector('#t-time').textContent = 'Около ' + String(h).replace('.', ',') + ' ч работы' + (h > 5 ? ', в два сеанса' : '');
  }
  sizeIn.addEventListener('input', calc); calc();
  root.querySelector('[data-t-scroll]').addEventListener('click', function (e) { e.preventDefault(); root.querySelector('#t-calc').scrollIntoView({ behavior: PORTF.reduce ? 'auto' : 'smooth' }); });
  return function () { clearInterval(timer); if (ro) ro.disconnect(); };
}
});
