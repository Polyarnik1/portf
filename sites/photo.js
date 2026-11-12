/* Выдержка: фотоагентство. Белая галерея, контактный лист, жёлтый восковой карандаш.
   Кадры в демо нарисованы кодом, на боевом сайте здесь стоят настоящие снимки. */
PORTF.register('photo', {
css: `
.s-photo{--white:#fafaf7;--ink:#111;--wax:#ffb700;--grey:#77756f;--film:#141414;
  background:var(--white);color:var(--ink);font:300 18px/1.55 'Jost',system-ui,sans-serif}
.s-photo h1,.s-photo h2,.s-photo h3{font-family:'Jost',sans-serif;font-weight:300;margin:0;letter-spacing:-.03em;line-height:1}
.s-photo .wrap{max-width:1320px;margin:0 auto;padding-inline:clamp(18px,4.5vw,56px)}
.s-photo .mono{font:400 11.5px/1.4 'Martian Mono',ui-monospace,monospace;letter-spacing:.02em}
.f-top{display:flex;justify-content:space-between;align-items:baseline;padding-top:22px;padding-bottom:22px;font-weight:500}
.f-hero{padding-top:clamp(10px,3vw,40px);padding-bottom:clamp(28px,5vw,60px);display:grid;grid-template-columns:1fr auto;align-items:end;gap:24px}
.f-hero h1{font-size:clamp(3.2rem,14vw,12.5rem);margin-left:-.05em;white-space:nowrap}
.f-hero h1 i{font-style:normal;display:inline-block;width:.16em;height:.16em;border-radius:50%;background:var(--wax);margin-left:.04em}
.f-hero p{max-width:19em;padding-bottom:1.2em}
.f-strip{background:var(--film);padding:26px 0;overflow:hidden;position:relative}
.f-strip::before,.f-strip::after{content:"";position:absolute;left:0;right:0;height:10px;top:8px;background:repeating-linear-gradient(90deg,transparent 0 10px,#fafaf7 10px 20px,transparent 20px 34px);opacity:.85;border-radius:2px}
.f-strip::after{top:auto;bottom:8px}
.f-reel{display:flex;gap:10px;width:max-content;animation:f-reel 60s linear infinite}
.f-reel:hover{animation-play-state:paused}
.f-reel canvas{height:clamp(150px,24vw,280px);width:auto;display:block}
@keyframes f-reel{to{transform:translateX(-50%)}}
.f-sec{padding-top:clamp(48px,8vw,104px);padding-bottom:clamp(24px,4vw,48px)}
.f-sec h2{font-size:clamp(2.2rem,6vw,4.6rem);margin-bottom:26px}
.f-filter{display:flex;flex-wrap:wrap;gap:6px 22px;margin-bottom:26px;font-weight:500}
.f-filter button{padding:4px 0;border-bottom:2px solid transparent;color:var(--grey);transition:.2s}
.f-filter button[aria-pressed=true]{color:var(--ink);border-color:var(--wax)}
.f-grid{columns:3;column-gap:14px}
.f-shot{break-inside:avoid;margin:0 0 14px;position:relative;cursor:zoom-in;display:block;width:100%;text-align:left;overflow:hidden}
.f-shot canvas{display:block;width:100%;height:auto;transition:transform .7s cubic-bezier(.2,.7,.2,1),filter .5s}
.f-shot:hover canvas,.f-shot:focus-visible canvas{transform:scale(1.04)}
.f-shot figcaption{display:flex;justify-content:space-between;gap:10px;padding:8px 0 2px;color:var(--grey)}
.f-shot::after{content:"";position:absolute;left:12px;top:12px;width:34px;height:34px;border:3px solid var(--wax);border-radius:50%;opacity:0;transform:scale(.6) rotate(-20deg);transition:.3s}
.f-shot:hover::after{opacity:1;transform:none}
.f-shot.hide{display:none}
.f-price{border-top:1px solid var(--ink)}
.f-price li{display:grid;grid-template-columns:1.1fr 1.4fr auto;gap:6px 28px;padding:20px 0;border-bottom:1px solid #d8d6cf;align-items:baseline}
.f-price b{font-weight:500;font-size:clamp(1.2rem,2.4vw,1.7rem)}
.f-price span{color:var(--grey)}
.f-price em{font-style:normal;font-weight:500;font-size:clamp(1.2rem,2.4vw,1.7rem);white-space:nowrap;font-variant-numeric:tabular-nums}
.f-foot{margin-top:clamp(30px,5vw,60px);border-top:1px solid var(--ink);padding-top:20px;padding-bottom:16px;display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;font-size:15px}
.f-box{position:fixed;inset:0;z-index:50;background:#0c0c0c;display:grid;place-items:center;padding:20px 20px 96px;color:#eee}
.f-box canvas{max-width:100%;max-height:calc(100svh - 190px);width:auto;height:auto;display:block}
.f-box figure{margin:0;display:grid;gap:12px;justify-items:start}
.f-box .x{position:absolute;top:16px;right:18px;font:500 16px/1 'Jost',sans-serif;color:#eee;padding:10px 14px;border:1px solid #444;border-radius:999px}
.f-box::before,.f-box::after{content:"";position:absolute;left:0;right:0;height:50%;background:#000;z-index:2;pointer-events:none;animation:f-shut .55s cubic-bezier(.7,0,.2,1) forwards}
.f-box::before{top:0;transform-origin:top}.f-box::after{bottom:0;transform-origin:bottom}
@keyframes f-shut{0%{transform:scaleY(1)}100%{transform:scaleY(0)}}
@media(max-width:860px){.f-grid{columns:2;column-gap:10px}.f-hero{grid-template-columns:1fr}.f-hero p{padding-bottom:0}.f-price li{grid-template-columns:1fr auto}.f-price span{grid-column:1/-1;grid-row:2}.f-shot figcaption span:last-child{display:none}}
`,
html: `
<header class="wrap f-top"><span>Выдержка</span><span class="mono">фотоагентство</span></header>
<section class="wrap f-hero">
  <h1>Выдержка<i></i></h1>
  <p>Снимаем людей, еду, интерьеры, предметы и события. Команда из шести фотографов, своя студия с дневным светом.</p>
</section>
<div class="f-strip" aria-hidden="true"><div class="f-reel" id="f-reel"></div></div>
<section class="wrap f-sec">
  <h2>Портфолио</h2>
  <div class="f-filter" id="f-filter"></div>
  <div class="f-grid" id="f-grid"></div>
  <p class="mono" style="color:var(--grey);margin-top:10px">Кадры в этом демо нарисованы кодом. На рабочем сайте здесь будут ваши снимки.</p>
</section>
<section class="wrap f-sec">
  <h2>Съёмки и цены</h2>
  <ul class="f-price">
    <li><b>Портрет</b><span>Два часа в студии, 25 кадров в ретуши, помощь с образом</span><em>12 000 ₽</em></li>
    <li><b>Еда и напитки</b><span>Меню ресторана или кафе, до 20 блюд за смену, фуд-стилист</span><em>28 000 ₽</em></li>
    <li><b>Интерьер</b><span>Квартира, отель или офис, до 15 ракурсов, выровненная геометрия</span><em>18 000 ₽</em></li>
    <li><b>Предметная</b><span>Каталог для маркетплейса, белый фон и стилизованные кадры</span><em>от 350 ₽ за кадр</em></li>
    <li><b>Событие</b><span>Репортаж от трёх часов, первые 20 кадров на следующее утро</span><em>6 000 ₽ в час</em></li>
  </ul>
  <footer class="f-foot"><span>Демо-сайт фотоагентства. Агентство вымышленное.</span><a href="#estate">Следующее демо: недвижимость «Высота»</a></footer>
</section>
`,
mount: function (root) {
  function rng(seed) { return function () { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; }
  function lg(x, a, b, stops) { var g = x.createLinearGradient(a[0], a[1], b[0], b[1]); stops.forEach(function (s, i) { g.addColorStop(i / (stops.length - 1), s); }); return g; }
  function rg(x, cx, cy, r, stops) { var g = x.createRadialGradient(cx, cy, 0, cx, cy, r); stops.forEach(function (s, i) { g.addColorStop(i / (stops.length - 1), s); }); return g; }
  /* художники кадров: каждый рисует сцену в поле w×h */
  var PAINT = {
    portrait: function (x, w, h) {
      x.fillStyle = lg(x, [0, 0], [w, h], ['#2a1a14', '#0e0b0b']); x.fillRect(0, 0, w, h);
      x.fillStyle = rg(x, w * .78, h * .2, w * .8, ['rgba(255,170,90,.55)', 'rgba(255,170,90,0)']); x.fillRect(0, 0, w, h);
      x.fillStyle = '#050404'; x.beginPath(); x.ellipse(w * .47, h * .4, w * .17, h * .17, -.1, 0, 7); x.fill();
      x.beginPath(); x.moveTo(w * .08, h); x.bezierCurveTo(w * .12, h * .62, w * .36, h * .6, w * .42, h * .52); x.lineTo(w * .54, h * .52); x.bezierCurveTo(w * .6, h * .62, w * .9, h * .64, w * .95, h); x.fill();
      x.strokeStyle = 'rgba(255,190,120,.9)'; x.lineWidth = w * .008; x.beginPath(); x.ellipse(w * .47, h * .4, w * .17, h * .17, -.1, -1.2, .9); x.stroke();
      x.beginPath(); x.moveTo(w * .56, h * .55); x.bezierCurveTo(w * .62, h * .63, w * .9, h * .65, w * .95, h); x.stroke();
    },
    bokeh: function (x, w, h, r) {
      x.fillStyle = lg(x, [0, 0], [0, h], ['#070b1c', '#1a1030']); x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'lighter';
      var cols = ['255,170,80', '255,90,120', '90,170,255', '255,230,160'];
      for (var i = 0; i < 46; i++) { var cx = r() * w, cy = h * (.25 + r() * .7), rad = w * (.03 + r() * .09), c = cols[i % 4]; x.fillStyle = rg(x, cx, cy, rad, ['rgba(' + c + ',.34)', 'rgba(' + c + ',.3)', 'rgba(' + c + ',0)']); x.beginPath(); x.arc(cx, cy, rad, 0, 7); x.fill(); }
      x.globalCompositeOperation = 'source-over';
    },
    dunes: function (x, w, h) {
      x.fillStyle = lg(x, [0, 0], [0, h], ['#f3b27a', '#f6d7a8', '#f1c48d']); x.fillRect(0, 0, w, h);
      x.fillStyle = '#fff3d6'; x.beginPath(); x.arc(w * .7, h * .3, w * .07, 0, 7); x.fill();
      ['#d98c55', '#b8683c', '#7a3f26', '#3c1d16'].forEach(function (c, i) { x.fillStyle = c; x.beginPath(); x.moveTo(0, h); for (var px = 0; px <= w; px += 6) x.lineTo(px, h * (.5 + i * .12) + Math.sin(px / w * (3 + i) + i * 2) * h * .06); x.lineTo(w, h); x.fill(); });
    },
    facade: function (x, w, h) {
      x.fillStyle = '#dfe6ea'; x.fillRect(0, 0, w, h); x.save(); x.transform(1, -.22, 0, 1, 0, h * .2);
      for (var r0 = 0; r0 < 9; r0++) for (var c = 0; c < 6; c++) { var bx = c * w / 5 - w * .05, by = r0 * h / 7; x.fillStyle = '#f7f9fa'; x.fillRect(bx, by, w / 5 - 6, h / 7 - 6); x.fillStyle = (r0 * 3 + c) % 5 ? '#27323a' : '#ffb700'; x.fillRect(bx + w * .02, by + h * .02, w * .1, h * .085); x.fillStyle = 'rgba(20,30,40,.25)'; x.fillRect(bx, by + h / 7 - 14, w / 5 - 6, 8); }
      x.restore(); x.fillStyle = lg(x, [0, 0], [w, 0], ['rgba(10,20,30,.45)', 'rgba(10,20,30,0)']); x.fillRect(0, 0, w, h);
    },
    food: function (x, w, h, r) {
      x.fillStyle = '#2f4a3f'; x.fillRect(0, 0, w, h);
      function plate(cx, cy, R, fill) { x.fillStyle = 'rgba(0,0,0,.3)'; x.beginPath(); x.arc(cx + R * .08, cy + R * .1, R, 0, 7); x.fill(); x.fillStyle = '#f4efe6'; x.beginPath(); x.arc(cx, cy, R, 0, 7); x.fill(); x.fillStyle = '#e7dfd0'; x.beginPath(); x.arc(cx, cy, R * .72, 0, 7); x.fill(); fill(cx, cy, R * .6); }
      plate(w * .42, h * .44, w * .3, function (cx, cy, R) { ['#d9532b', '#f0b429', '#6aa84f', '#f7e3b0', '#b03a2e'].forEach(function (c) { for (var i = 0; i < 6; i++) { x.fillStyle = c; x.beginPath(); x.ellipse(cx + (r() - .5) * R * 1.4, cy + (r() - .5) * R * 1.4, R * .2, R * .13, r() * 3, 0, 7); x.fill(); } }); });
      plate(w * .84, h * .8, w * .17, function (cx, cy, R) { x.fillStyle = '#5a341d'; x.beginPath(); x.arc(cx, cy, R, 0, 7); x.fill(); });
      x.fillStyle = '#c9ced2'; x.fillRect(w * .82, h * .1, w * .018, h * .42); x.fillRect(w * .88, h * .1, w * .018, h * .42);
    },
    bottle: function (x, w, h) {
      x.fillStyle = lg(x, [0, 0], [0, h], ['#ffb700', '#ff9d00']); x.fillRect(0, 0, w, h); x.fillStyle = '#f08a00'; x.fillRect(0, h * .72, w, h * .28);
      x.fillStyle = 'rgba(80,30,0,.3)'; x.beginPath(); x.ellipse(w * .62, h * .78, w * .3, h * .035, 0, 0, 7); x.fill();
      x.fillStyle = '#141414'; x.fillRect(w * .44, h * .2, w * .12, h * .12); x.beginPath(); x.moveTo(w * .36, h * .78); x.lineTo(w * .36, h * .42); x.quadraticCurveTo(w * .36, h * .32, w * .44, h * .32); x.lineTo(w * .56, h * .32); x.quadraticCurveTo(w * .64, h * .32, w * .64, h * .42); x.lineTo(w * .64, h * .78); x.fill();
      x.fillStyle = '#fafaf7'; x.fillRect(w * .36, h * .5, w * .28, h * .15); x.fillStyle = 'rgba(255,255,255,.35)'; x.fillRect(w * .39, h * .35, w * .025, h * .4);
    },
    stage: function (x, w, h, r) {
      x.fillStyle = '#090611'; x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'lighter';
      [['255,60,120', .2], ['80,120,255', .5], ['255,183,0', .8]].forEach(function (b) { var g = lg(x, [w * b[1], 0], [w * b[1], h * .9], ['rgba(' + b[0] + ',.75)', 'rgba(' + b[0] + ',0)']); x.fillStyle = g; x.beginPath(); x.moveTo(w * b[1], -10); x.lineTo(w * (b[1] - .28), h * .9); x.lineTo(w * (b[1] + .28), h * .9); x.fill(); });
      x.globalCompositeOperation = 'source-over'; x.fillStyle = '#020203';
      for (var i = 0; i < 16; i++) { var cx = i * w / 15 + (r() - .5) * 20, hh = h * (.8 + r() * .08); x.beginPath(); x.arc(cx, hh, w * .045, 0, 7); x.fill(); x.fillRect(cx - w * .06, hh + w * .03, w * .12, h); if (i % 4 === 1) x.fillRect(cx + w * .03, hh - h * .13, w * .02, h * .16); }
    },
    room: function (x, w, h) {
      x.fillStyle = '#e9e2d6'; x.fillRect(0, 0, w, h); x.fillStyle = '#cdbfa9'; x.beginPath(); x.moveTo(0, h); x.lineTo(w * .22, h * .66); x.lineTo(w * .8, h * .66); x.lineTo(w, h); x.fill();
      x.fillStyle = '#d9cfbf'; x.beginPath(); x.moveTo(0, 0); x.lineTo(w * .22, h * .12); x.lineTo(w * .22, h * .66); x.lineTo(0, h); x.fill();
      x.fillStyle = '#bfe0f2'; x.fillRect(w * .4, h * .2, w * .26, h * .32); x.strokeStyle = '#fff'; x.lineWidth = w * .012; x.strokeRect(w * .4, h * .2, w * .26, h * .32); x.beginPath(); x.moveTo(w * .53, h * .2); x.lineTo(w * .53, h * .52); x.stroke();
      x.fillStyle = 'rgba(255,240,200,.75)'; x.beginPath(); x.moveTo(w * .36, h * .7); x.lineTo(w * .62, h * .7); x.lineTo(w * .52, h * .96); x.lineTo(w * .14, h * .96); x.fill();
      x.fillStyle = '#2f4a3f'; x.fillRect(w * .7, h * .5, w * .22, h * .2); x.fillRect(w * .68, h * .62, w * .26, h * .1); x.fillStyle = '#111'; x.fillRect(w * .1, h * .3, w * .004, h * .42); x.fillStyle = '#ffb700'; x.beginPath(); x.arc(w * .1, h * .3, w * .035, 0, 7); x.fill();
    }
  };
  function grain(x, w, h, r) {
    var d = x.getImageData(0, 0, w, h), p = d.data;
    for (var i = 0; i < p.length; i += 4) { var n = (r() - .5) * 26; p[i] += n; p[i + 1] += n; p[i + 2] += n; }
    x.putImageData(d, 0, 0);
    x.fillStyle = rg(x, w / 2, h / 2, Math.max(w, h) * .75, ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,.35)']); x.fillRect(0, 0, w, h);
  }
  function make(kind, w, h, seed) { var c = document.createElement('canvas'); c.width = w; c.height = h; var x = c.getContext('2d'), r = rng(seed); PAINT[kind](x, w, h, r); grain(x, w, h, r); return c; }

  var SHOTS = [
    ['portrait', 'Портрет', 480, 600, '85 мм  f/1.8  1/200  ISO 100'], ['food', 'Еда', 480, 480, '50 мм  f/5.6  1/125  ISO 200'],
    ['facade', 'Интерьер', 480, 640, '24 мм  f/8  1/320  ISO 100'], ['stage', 'Событие', 480, 360, '35 мм  f/2  1/160  ISO 3200'],
    ['bottle', 'Предметка', 480, 600, '100 мм  f/11  1/160  ISO 100'], ['room', 'Интерьер', 480, 360, '17 мм  f/9  1/60  ISO 200'],
    ['bokeh', 'Событие', 480, 480, '50 мм  f/1.4  1/80  ISO 1600'], ['dunes', 'Портрет', 480, 320, '70 мм  f/8  1/500  ISO 100']
  ];
  var grid = root.querySelector('#f-grid'), reel = root.querySelector('#f-reel'), box = null;
  SHOTS.forEach(function (s, i) {
    var c = make(s[0], s[2], s[3], 7 + i * 13);
    var b = document.createElement('button'); b.className = 'f-shot'; b.dataset.k = s[1]; b.setAttribute('aria-label', 'Открыть кадр ' + (i + 1) + ', ' + s[1]);
    var cap = document.createElement('figcaption'); cap.className = 'mono'; cap.innerHTML = '<span>' + String(i + 1).padStart(2, '0') + 'A  ' + s[1] + '</span><span>' + s[4] + '</span>';
    b.appendChild(c); b.appendChild(cap); b.onclick = function () { open(i); }; grid.appendChild(b);
    s.canvas = c;
  });
  // плёнка: те же кадры, уменьшенные, дважды подряд для бесшовной прокрутки
  for (var k = 0; k < 2; k++) SHOTS.forEach(function (s) { var c = document.createElement('canvas'); c.width = 240; c.height = Math.round(240 * s[3] / s[2]); c.getContext('2d').drawImage(s.canvas, 0, 0, c.width, c.height); reel.appendChild(c); });

  var kinds = ['Все'].concat(SHOTS.map(function (s) { return s[1]; }).filter(function (v, i, a) { return a.indexOf(v) === i; })), fbox = root.querySelector('#f-filter');
  kinds.forEach(function (kd, i) {
    var b = document.createElement('button'); b.textContent = kd; b.setAttribute('aria-pressed', i === 0);
    b.onclick = function () { fbox.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); grid.querySelectorAll('.f-shot').forEach(function (el) { el.classList.toggle('hide', kd !== 'Все' && el.dataset.k !== kd); }); };
    fbox.appendChild(b);
  });

  function close() { if (box) { box.remove(); box = null; document.removeEventListener('keydown', esc); } }
  function esc(e) { if (e.key === 'Escape') close(); }
  function open(i) {
    close(); var s = SHOTS[i]; box = document.createElement('div'); box.className = 'f-box'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'Просмотр кадра');
    var big = make(s[0], s[2] * 2, s[3] * 2, 7 + i * 13), fig = document.createElement('figure'), cap = document.createElement('figcaption'); cap.className = 'mono'; cap.textContent = s[1] + '   ' + s[4];
    var x = document.createElement('button'); x.className = 'x'; x.textContent = 'Закрыть'; x.onclick = close;
    fig.appendChild(big); fig.appendChild(cap); box.appendChild(fig); box.appendChild(x);
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    root.appendChild(box); document.addEventListener('keydown', esc); x.focus();
  }
  return close;
}
});
