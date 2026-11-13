/* Тушь: тату-салон. Чёрный зал, костяной текст, красная печать. Работы на фото, лист для наброска орнамента. */
PORTF.register('tattoo', {
css: `
.s-tattoo{--black:#090909;--coal:#131211;--line:#2a2725;--bone:#e9e3d7;--red:#d1162f;--grey:#8d877d;
  background:var(--black);color:var(--bone);font:400 17px/1.6 'Onest',system-ui,sans-serif}
.s-tattoo h1,.s-tattoo h2,.s-tattoo h3{font-family:'Cormorant Garamond',Georgia,serif;margin:0}
.s-tattoo .wrap{max-width:1240px;margin:0 auto;padding-inline:clamp(18px,4.5vw,56px)}
.t-seal{display:inline-grid;place-items:center;width:46px;height:46px;border-radius:50%;border:2px solid var(--red);color:var(--red);font:600 22px/1 'Cormorant Garamond',serif;transform:rotate(-8deg);flex:none}
.t-hero{position:relative;min-height:min(92svh,820px);display:grid;grid-template-rows:auto 1fr;overflow:hidden;isolation:isolate}
.t-hero>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2;filter:grayscale(1) contrast(1.1) brightness(.62)}
.t-hero::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(9,9,9,.55),rgba(9,9,9,.15) 40%,var(--black) 98%)}
.t-top{display:flex;justify-content:space-between;align-items:center;gap:16px;padding-top:20px;padding-bottom:20px;font-size:15px}
.t-hero-body{align-self:end;padding-bottom:clamp(28px,5vw,60px)}
.t-hero h1{font:italic 500 clamp(6rem,24vw,19rem)/.78 'Cormorant Garamond',serif;letter-spacing:-.04em;margin-left:-.05em;text-shadow:0 4px 60px rgba(0,0,0,.6)}
.t-hero-row{display:grid;grid-template-columns:1fr auto;gap:20px 40px;align-items:end;margin-top:clamp(26px,4vw,44px)}
.t-hero p{max-width:27em;font-size:clamp(1rem,1.5vw,1.2rem)}
.t-cta{display:inline-block;padding:16px 30px;background:var(--red);color:#fff;font-weight:600;text-decoration:none;transition:background .2s,transform .2s}
.t-cta:hover{background:#ee2440;transform:translateY(-2px)}
.t-tape{border-block:1px solid var(--line);overflow:hidden;white-space:nowrap;padding:14px 0;font:italic 500 1.5rem/1 'Cormorant Garamond',serif;color:var(--grey)}
.t-tape div{display:inline-block;animation:t-tape 40s linear infinite}
.t-tape span{margin:0 26px}.t-tape span::after{content:"";display:inline-block;width:7px;height:7px;background:var(--red);transform:rotate(45deg);margin-left:52px;vertical-align:middle}
@keyframes t-tape{to{transform:translateX(-50%)}}
.t-sec{padding-top:clamp(56px,9vw,120px);padding-bottom:clamp(8px,2vw,24px)}
.t-sec>h2,.t-split h2,.t-process h2{font:italic 500 clamp(2.6rem,7vw,5.2rem)/.95 'Cormorant Garamond',serif;margin-bottom:14px}
.t-sec>h2+p{color:var(--grey);max-width:34em;margin-bottom:32px}
.t-works{columns:3;column-gap:14px}
.t-work{position:relative;display:block;width:100%;margin:0 0 14px;break-inside:avoid;overflow:hidden;cursor:zoom-in;text-align:left;background:var(--coal)}
.t-work img{display:block;width:100%;height:auto;filter:grayscale(1) contrast(1.08);transition:filter .6s,transform .9s cubic-bezier(.2,.7,.2,1)}
.t-work:hover img,.t-work:focus-visible img{filter:none;transform:scale(1.04)}
.t-work span{position:absolute;left:0;right:0;bottom:0;padding:44px 16px 14px;background:linear-gradient(transparent,rgba(0,0,0,.85));font-size:14px;color:#cfc8bb;display:flex;justify-content:space-between;gap:12px;align-items:end}
.t-work b{font:600 1.5rem/1 'Cormorant Garamond',serif;color:var(--bone)}
.t-work i{font-style:normal}
.t-split{display:grid;grid-template-columns:1fr 1fr;gap:clamp(22px,5vw,70px);align-items:center}
.t-sheet-wrap{position:relative;padding-bottom:50px}
.t-sheet{position:relative;aspect-ratio:1;background:radial-gradient(circle at 50% 45%,#1a1817,#0c0b0b);border:1px solid var(--line)}
.t-sheet canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none;cursor:crosshair}
.t-sheet-bar{position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:14px;color:var(--grey)}
.t-sheet-bar button{padding:8px 16px;border:1px solid var(--bone);border-radius:999px;font-size:14px;flex:none}
.t-sheet-bar button:hover{background:var(--bone);color:var(--black)}
.t-split p{color:#bdb6a9;max-width:28em}
.t-split p+p{margin-top:14px}
.t-styles{margin-top:8px;border-top:1px solid var(--line)}
.t-styles li{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:8px 32px;align-items:baseline;padding:20px 0;border-bottom:1px solid var(--line);transition:background .3s,color .3s,padding .3s}
.t-styles li:hover{background:var(--bone);color:var(--black);padding-left:18px;padding-right:18px}
.t-styles b{font:600 clamp(1.8rem,4.4vw,3.2rem)/1 'Cormorant Garamond',serif}
.t-styles span{font-size:16px;opacity:.75}
.t-process{display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(22px,5vw,70px);align-items:start}
.t-process h2{margin-bottom:26px}
.t-pics{display:grid;gap:14px;position:sticky;top:20px}
.t-pics img{display:block;width:100%;height:auto;filter:grayscale(1) contrast(1.05)}
.t-pics img:last-child{width:72%;margin-left:auto;margin-top:-18%;border:6px solid var(--black)}
.t-steps{counter-reset:t;display:grid;gap:0;border-top:1px solid var(--line)}
.t-steps li{counter-increment:t;display:grid;grid-template-columns:70px 1fr;gap:4px 12px;padding:24px 0;border-bottom:1px solid var(--line)}
.t-steps li::before{content:counter(t,upper-roman);grid-row:1/3;font:italic 500 2.4rem/1 'Cormorant Garamond',serif;color:var(--red)}
.t-steps h3{font-weight:600;font-size:1.7rem;line-height:1.1}
.t-steps p{font-size:16px;color:#bdb6a9}
.t-calc{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,5vw,64px);align-items:center;background:var(--coal);border:1px solid var(--line);padding:clamp(22px,4vw,48px)}
.t-field{display:grid;gap:10px;margin-bottom:26px}
.t-field label,.t-field>span{display:flex;justify-content:space-between;font-weight:600}
.t-field input[type=range]{width:100%;accent-color:var(--red);height:28px}
.t-seg{display:flex;flex-wrap:wrap;gap:8px}
.t-seg button{padding:9px 16px;border:1px solid #4a4541;border-radius:999px;font-size:15px}
.t-seg button[aria-pressed=true]{background:var(--bone);color:var(--black);border-color:var(--bone)}
.t-out big{display:block;font:600 clamp(2.8rem,7.5vw,5rem)/1 'Cormorant Garamond',serif;font-variant-numeric:tabular-nums}
.t-out p{color:var(--grey);font-size:15px;margin-top:10px}
.t-faq details{border-bottom:1px solid var(--line)}
.t-faq details:first-of-type{border-top:1px solid var(--line)}
.t-faq summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;gap:16px;align-items:center;padding:20px 0;font:600 clamp(1.4rem,2.6vw,1.9rem)/1.15 'Cormorant Garamond',serif}
.t-faq summary::-webkit-details-marker{display:none}
.t-faq summary::after{content:"+";font:300 1.8rem/1 'Onest';color:var(--red);transition:transform .3s}
.t-faq details[open] summary::after{transform:rotate(45deg)}
.t-faq details p{padding:0 0 22px;color:#bdb6a9;max-width:42em}
.t-foot{margin-top:clamp(48px,8vw,100px);border-top:1px solid var(--line);padding-top:22px;padding-bottom:16px;display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;font-size:14px;color:var(--grey)}
.t-foot a{color:var(--bone)}
.t-box{position:fixed;inset:0;z-index:50;background:rgba(0,0,0,.94);display:grid;place-items:center;padding:20px 20px 96px;cursor:zoom-out;animation:t-fade .3s}
.t-box img{max-width:100%;max-height:calc(100svh - 150px);display:block}
@keyframes t-fade{from{opacity:0}}
@media(max-width:860px){.t-works{columns:2;column-gap:10px}.t-work{margin-bottom:10px}.t-work span{font-size:12.5px;padding:30px 10px 10px}.t-work i{display:none}.t-split,.t-process,.t-calc,.t-hero-row{grid-template-columns:1fr}.t-pics{position:static}.t-styles li{grid-template-columns:1fr}.t-top span:last-child{font-size:13.5px;text-align:right}.t-cta{text-align:center}}
`,
html: `
<section class="t-hero">
  <img src="img/tattoo/p1.webp" alt="Мастер работает над татуировкой" width="1400" height="788" fetchpriority="high">
  <header class="wrap t-top"><span class="t-seal" aria-hidden="true">Т</span><span>Студия татуировки. Каждый день с 12 до 22, по записи</span></header>
  <div class="wrap t-hero-body">
    <h1>Тушь</h1>
    <div class="t-hero-row">
      <p>Рисуем эскиз под вас и переносим на кожу. Графика, орнамент, тонкая линия. Стерильно, спокойно, без спешки.</p>
      <a class="t-cta" href="#tattoo" data-t-scroll>Прикинуть стоимость</a>
    </div>
  </div>
</section>
<div class="t-tape" aria-hidden="true"><div>${'<span>графика</span><span>орнаментал</span><span>тонкая линия</span><span>дотворк</span><span>леттеринг</span><span>перекрытие</span>'.repeat(4)}</div></div>

<section class="wrap t-sec">
  <h2>Работы</h2>
  <p>Наведите на фото, чтобы увидеть его в цвете. Нажмите, чтобы открыть крупно.</p>
  <div class="t-works" id="t-works"></div>
</section>

<section class="wrap t-sec">
  <div class="t-split">
    <div>
      <h2>Набросайте свой орнамент</h2>
      <p>Проведите по листу пальцем или мышью. Линия повторится по десяти лучам, и получится мандала. Так мы начинаем работу над орнаментом: с простого ритма.</p>
      <p>Понравилось, что вышло? Сделайте скриншот и приносите на консультацию.</p>
    </div>
    <div class="t-sheet-wrap">
      <div class="t-sheet"><canvas aria-label="Лист для эскиза. Проведите по нему, и появится симметричный орнамент."></canvas></div>
      <div class="t-sheet-bar"><span id="t-tip">Проведите по листу</span><button id="t-clear">Чистый лист</button></div>
    </div>
  </div>
</section>

<section class="wrap t-sec">
  <h2>Стили</h2>
  <p>Пять направлений, в которых мы сильны.</p>
  <ul class="t-styles">
    <li><b>Графика</b><span>Чёткий контур, штриховка, как гравюра в старой книге.</span></li>
    <li><b>Орнаментал</b><span>Симметрия и ритм: мандалы, узоры, браслеты.</span></li>
    <li><b>Тонкая линия</b><span>Одна игла, лёгкий рисунок, который читается вблизи.</span></li>
    <li><b>Дотворк</b><span>Тени из тысяч точек, мягкие переходы без заливки.</span></li>
    <li><b>Леттеринг</b><span>Надписи: от строгого шрифта до каллиграфии.</span></li>
  </ul>
</section>

<section class="wrap t-sec">
  <div class="t-process">
    <div class="t-pics">
      <img src="img/tattoo/p3.webp" alt="Мастер за работой в студии" width="1000" height="667" loading="lazy" decoding="async">
      <img src="img/tattoo/p2.webp" alt="Руки мастера в перчатках с тату-машинкой" width="1000" height="667" loading="lazy" decoding="async">
    </div>
    <div>
      <h2>Как проходит работа</h2>
      <ol class="t-steps">
        <li><h3>Разговор</h3><p>Обсуждаем идею, место и размер. Это бесплатно и ни к чему не обязывает.</p></li>
        <li><h3>Эскиз</h3><p>Рисуем за три-пять дней и правим, пока вы не скажете «да».</p></li>
        <li><h3>Сеанс</h3><p>Одноразовые иглы и картриджи, вскрываем при вас. Перерывы, когда нужно.</p></li>
        <li><h3>Заживление</h3><p>Плёнка на четыре-пять дней, памятка по уходу. Коррекция в первые два месяца бесплатно.</p></li>
      </ol>
    </div>
  </div>
</section>

<section class="wrap t-sec" id="t-calc">
  <h2>Сколько это стоит</h2>
  <p>Подвигайте ползунок. Точную цену мастер назовёт после эскиза.</p>
  <div class="t-calc">
    <div>
      <div class="t-field"><label for="t-size">Размер <span id="t-size-v"></span></label><input type="range" id="t-size" min="3" max="40" value="12"></div>
      <div class="t-field"><span>Сложность</span><div class="t-seg" id="t-cx"></div></div>
    </div>
    <div class="t-out" aria-live="polite"><big id="t-price"></big><p id="t-time"></p></div>
  </div>
</section>

<section class="wrap t-sec t-faq">
  <h2>Частые вопросы</h2>
  <p>Коротко о том, что спрашивают перед первым сеансом.</p>
  <details><summary>Это больно?</summary><p>Зависит от места. Плечо и предплечье переносятся легко, рёбра и стопа ощутимее. Делаем паузы и не торопимся.</p></details>
  <details><summary>С какого возраста делаете?</summary><p>С 18 лет, по паспорту.</p></details>
  <details><summary>Можно прийти со своим эскизом?</summary><p>Да. Адаптируем его под место и анатомию, чтобы рисунок хорошо лёг и не поплыл со временем.</p></details>
  <details><summary>Как ухаживать после сеанса?</summary><p>Четыре-пять дней под заживляющей плёнкой, потом крем два раза в день. Месяц без бани, моря и солнца. Памятку дадим с собой.</p></details>
  <details><summary>Перекрываете старые татуировки?</summary><p>Перекрываем, если новая работа будет темнее и крупнее старой. Пришлите фото, и мы скажем, что получится.</p></details>
  <footer class="t-foot"><span>Демо-сайт тату-салона. Студия вымышленная. Фото: Unsplash.</span><a href="#detailing">Следующее демо: детейлинг «Глянец»</a></footer>
</section>
`,
mount: function (root) {
  /* ----- работы ----- */
  var WORKS = [['w1', 'Пион', 'Графика, предплечье', 900, 1350], ['w2', 'Мандала', 'Орнаментал, спина', 900, 1350], ['w5', 'Рукав', 'Чёрно-серый реализм', 900, 1350], ['w3', 'Цветы', 'Тонкая линия, плечо', 900, 1169], ['w4', 'Спина', 'Японский стиль', 900, 1350], ['w6', 'Надписи', 'Леттеринг, рука', 900, 1200]];
  var works = root.querySelector('#t-works'), box = null;
  works.innerHTML = WORKS.map(function (w, i) { return '<button class="t-work" data-i="' + i + '" aria-label="Открыть работу: ' + w[1] + '"><img src="img/tattoo/' + w[0] + '.webp" alt="' + w[1] + '. ' + w[2] + '" width="' + w[3] + '" height="' + w[4] + '" loading="lazy" decoding="async"><span><b>' + w[1] + '</b><i>' + w[2] + '</i></span></button>'; }).join('');
  function close() { if (box) { box.remove(); box = null; document.removeEventListener('keydown', esc); } }
  function esc(e) { if (e.key === 'Escape') close(); }
  works.addEventListener('click', function (e) {
    var b = e.target.closest('.t-work'); if (!b) return; close();
    var w = WORKS[b.dataset.i]; box = document.createElement('div'); box.className = 't-box'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', w[1]);
    box.innerHTML = '<img src="img/tattoo/' + w[0] + '.webp" alt="' + w[1] + '">'; box.onclick = close; root.appendChild(box); document.addEventListener('keydown', esc);
  });

  /* ----- лист с орнаментом ----- */
  var cv = root.querySelector('canvas'), ctx = cv.getContext('2d'), tip = root.querySelector('#t-tip');
  var S = 0, dpr = Math.min(devicePixelRatio || 1, 2), SYM = 10, timer = 0;
  function size() {
    var w = cv.clientWidth; if (!w || w === S) return; S = w;
    cv.width = cv.height = Math.round(w * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); guide(); demo();
  }
  function guide() {
    ctx.clearRect(0, 0, S, S); ctx.save(); ctx.translate(S / 2, S / 2); ctx.strokeStyle = 'rgba(233,227,215,.07)'; ctx.lineWidth = 1;
    for (var i = 0; i < SYM; i++) { ctx.rotate(Math.PI * 2 / SYM); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -S * .46); ctx.stroke(); }
    [.15, .3, .46].forEach(function (r) { ctx.beginPath(); ctx.arc(0, 0, S * r, 0, 6.3); ctx.stroke(); }); ctx.restore();
  }
  function seg(x0, y0, x1, y1, w) {
    ctx.save(); ctx.translate(S / 2, S / 2); ctx.strokeStyle = '#e9e3d7'; ctx.lineCap = 'round'; ctx.lineWidth = w;
    for (var i = 0; i < SYM; i++) {
      ctx.rotate(Math.PI * 2 / SYM);
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-x0, y0); ctx.lineTo(-x1, y1); ctx.stroke();
    }
    ctx.restore();
  }
  function demo() {
    clearInterval(timer);
    var R = S * .42, t = 0, px = 0, py = 0, started = false;
    function pt(t) { var r = R * (.18 + .78 * t) * (1 + .16 * Math.sin(t * 22)), a = Math.sin(t * 9) * .3 * (1 - t * .3); return [Math.sin(a) * r, -Math.cos(a) * r]; }
    function step() { var p = pt(t); if (started) seg(px, py, p[0], p[1], 1.4); px = p[0]; py = p[1]; started = true; t += .004; return t <= 1; }
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

  /* ----- калькулятор ----- */
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
  return function () { clearInterval(timer); if (ro) ro.disconnect(); close(); };
}
});
