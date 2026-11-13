/* Выдержка: фотоагентство. Белая галерея, контактный лист, жёлтый восковой карандаш.
   Фото для демо: Unsplash. */
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
.f-reel img{height:clamp(150px,24vw,280px);width:auto;display:block}
@keyframes f-reel{to{transform:translateX(-50%)}}
.f-sec{padding-top:clamp(48px,8vw,104px);padding-bottom:clamp(24px,4vw,48px)}
.f-sec h2{font-size:clamp(2.2rem,6vw,4.6rem);margin-bottom:26px}
.f-filter{display:flex;flex-wrap:wrap;gap:6px 22px;margin-bottom:26px;font-weight:500}
.f-filter button{padding:4px 0;border-bottom:2px solid transparent;color:var(--grey);transition:.2s}
.f-filter button[aria-pressed=true]{color:var(--ink);border-color:var(--wax)}
.f-grid{columns:3;column-gap:14px}
.f-shot{break-inside:avoid;margin:0 0 14px;position:relative;cursor:zoom-in;display:block;width:100%;text-align:left;overflow:hidden}
.f-shot img{display:block;width:100%;height:auto;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.f-shot:hover img,.f-shot:focus-visible img{transform:scale(1.04)}
.f-shot .cap{position:relative;background:var(--white);display:flex;justify-content:space-between;gap:10px;padding:8px 0 2px;color:var(--grey)}
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
.f-box img{max-width:100%;max-height:calc(100svh - 190px);width:auto;height:auto;display:block}
.f-box figure{margin:0;display:grid;gap:12px;justify-items:start}
.f-box .x{position:absolute;top:16px;right:18px;font:500 16px/1 'Jost',sans-serif;color:#eee;padding:10px 14px;border:1px solid #444;border-radius:999px}
.f-box::before,.f-box::after{content:"";position:absolute;left:0;right:0;height:50%;background:#000;z-index:2;pointer-events:none;animation:f-shut .55s cubic-bezier(.7,0,.2,1) forwards}
.f-box::before{top:0;transform-origin:top}.f-box::after{bottom:0;transform-origin:bottom}
@keyframes f-shut{0%{transform:scaleY(1)}100%{transform:scaleY(0)}}
@media(max-width:860px){.f-grid{columns:2;column-gap:10px}.f-hero{grid-template-columns:1fr}.f-hero p{padding-bottom:0}.f-price li{grid-template-columns:1fr auto}.f-price span{grid-column:1/-1;grid-row:2}.f-shot .cap span:last-child{display:none}}
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
  <p class="mono" style="color:var(--grey);margin-top:10px">Фото для демо взяты с Unsplash. На рабочем сайте здесь будут ваши снимки.</p>
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
  var SHOTS = [
    ['s1', 'Портрет', 1000, 1250, '85 мм  f/1.8  1/200  ISO 100'], ['s2', 'Еда', 1000, 1418, '50 мм  f/4  1/125  ISO 200'],
    ['s3', 'Интерьер', 1000, 527, '24 мм  f/8  1/60  ISO 100'], ['s4', 'Событие', 1000, 667, '35 мм  f/2  1/160  ISO 3200'],
    ['s5', 'Предметка', 1000, 726, '100 мм  f/11  1/160  ISO 100'], ['s6', 'Портрет', 1000, 1250, '50 мм  f/2  1/160  ISO 200'],
    ['s7', 'Еда', 1000, 1000, '50 мм  f/5.6  1/125  ISO 200'], ['s8', 'Событие', 1000, 667, '85 мм  f/1.4  1/500  ISO 400'],
    ['s9', 'Интерьер', 1000, 563, '17 мм  f/9  1/60  ISO 200'], ['s10', 'Событие', 1000, 668, '35 мм  f/2.8  1/100  ISO 800']
  ];
  var grid = root.querySelector('#f-grid'), reel = root.querySelector('#f-reel'), box = null;
  function img(s, lazy) { return '<img src="img/photo/' + s[0] + '.webp" alt="' + s[1] + '" width="' + s[2] + '" height="' + s[3] + '"' + (lazy ? ' loading="lazy"' : '') + ' decoding="async">'; }
  grid.innerHTML = SHOTS.map(function (s, i) {
    return '<button class="f-shot" data-i="' + i + '" data-k="' + s[1] + '" aria-label="Открыть кадр ' + (i + 1) + ', ' + s[1] + '">' + img(s, true) + '<span class="cap mono"><span>' + String(i + 1).padStart(2, '0') + 'A  ' + s[1] + '</span><span>' + s[4] + '</span></span></button>';
  }).join('');
  grid.addEventListener('click', function (e) { var b = e.target.closest('.f-shot'); if (b) open(+b.dataset.i); });
  // плёнка: те же кадры дважды подряд для бесшовной прокрутки
  reel.innerHTML = SHOTS.concat(SHOTS).map(function (s) { return img(s, false); }).join('');

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
    box.innerHTML = '<figure>' + img(s, false) + '<figcaption class="mono">' + s[1] + '   ' + s[4] + '</figcaption></figure><button class="x">Закрыть</button>';
    box.addEventListener('click', function (e) { if (e.target === box || e.target.closest('.x')) close(); });
    root.appendChild(box); document.addEventListener('keydown', esc); box.querySelector('.x').focus();
  }
  return close;
}
});
