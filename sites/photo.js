/* Выдержка: фотоагентство. Премиальная тёмная галерея: чёрный, слоновая кость, шампань.
   Серии, прайс с фото под курсором, просмотр кадра со шторкой затвора. Фото: Unsplash. */
PORTF.register('photo', {
css: `
.s-photo{--black:#0c0b0a;--coal:#151311;--line:#2b2824;--ivory:#ece6da;--champ:#c4ab82;--grey:#8b857b;
  background:var(--black);color:var(--ivory);font:300 18px/1.6 'Jost',system-ui,sans-serif}
.s-photo h1,.s-photo h2,.s-photo h3{font-family:'Prata',Georgia,serif;font-weight:400;margin:0;letter-spacing:-.01em;line-height:1.02}
.s-photo .wrap{max-width:1360px;margin:0 auto;padding-inline:clamp(18px,4.5vw,64px)}
.s-photo img{display:block;max-width:100%}
.s-photo .mono{font:400 11px/1.4 'Martian Mono',ui-monospace,monospace;letter-spacing:.04em;color:var(--grey)}
.f-top{display:flex;justify-content:space-between;align-items:center;gap:20px;padding-top:24px;padding-bottom:24px;border-bottom:1px solid var(--line)}
.f-logo{font:400 1.25rem 'Prata',serif;letter-spacing:.02em}
.f-nav{display:flex;gap:30px;font-size:15px;color:var(--grey)}
.f-nav button:hover{color:var(--ivory)}
.f-book-btn{padding:11px 20px;border:1px solid var(--champ);color:var(--champ);font-size:15px;font-weight:400;transition:.25s}
.f-book-btn:hover{background:var(--champ);color:var(--black)}
.f-hero{position:relative;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:0;align-items:stretch;min-height:min(86svh,820px);border-bottom:1px solid var(--line)}
.f-hero-copy{display:flex;flex-direction:column;justify-content:space-between;padding:clamp(28px,5vw,64px) clamp(18px,4vw,56px) clamp(28px,4vw,48px) 0;position:relative;z-index:2}
.f-hero h1{font-size:clamp(3.6rem,11.5vw,11rem);line-height:.9;margin-right:-28%;letter-spacing:-.03em}
.f-hero p{max-width:26em;color:#c9c2b5;margin:0}
.f-hero-meta{display:flex;gap:28px;flex-wrap:wrap;margin-top:28px;padding-top:20px;border-top:1px solid var(--line)}
.f-hero-meta b{display:block;font:400 1.9rem/1 'Prata',serif;color:var(--ivory)}
.f-hero-meta span{font-size:14px;color:var(--grey)}
.f-hero-pic{position:relative;overflow:hidden;margin:0}
.f-hero-pic img{width:100%;height:100%;object-fit:cover;object-position:50% 20%;animation:f-kb 22s ease-in-out infinite alternate}
@keyframes f-kb{to{transform:scale(1.07) translateY(-1.5%)}}
.f-hero-pic figcaption{position:absolute;left:16px;bottom:14px;right:16px;display:flex;justify-content:space-between;gap:12px;color:#d9d2c5}
.f-statement{padding-top:clamp(70px,11vw,150px);padding-bottom:clamp(70px,11vw,150px)}
.f-statement p{font:400 clamp(1.6rem,3.6vw,3rem)/1.25 'Prata',serif;max-width:24em;margin:0;text-wrap:balance}
.f-statement p span{color:var(--champ)}
.f-sec{padding-bottom:clamp(70px,10vw,140px)}
.f-head{display:flex;justify-content:space-between;align-items:end;gap:14px 40px;flex-wrap:wrap;margin-bottom:clamp(26px,4vw,48px);padding-top:28px;border-top:1px solid var(--line)}
.f-head h2{font-size:clamp(2.2rem,5.5vw,4.4rem)}
.f-head p{max-width:30em;color:var(--grey);margin:0}
.f-series{display:grid;grid-auto-flow:column;grid-auto-columns:clamp(240px,27vw,380px);gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:18px;scrollbar-width:thin;scrollbar-color:var(--line) transparent;cursor:grab}
.f-series.drag{cursor:grabbing;scroll-snap-type:none}
.f-ser{scroll-snap-align:start;display:grid;gap:12px;text-align:left}
.f-ser figure{margin:0;aspect-ratio:3/4;overflow:hidden;position:relative;background:var(--coal)}
.f-ser img{width:100%;height:100%;object-fit:cover;transition:transform 1.1s cubic-bezier(.2,.7,.2,1),filter .6s;filter:grayscale(.15)}
.f-ser:hover img{transform:scale(1.05);filter:none}
.f-ser figure::after{content:"Открыть серию";position:absolute;left:50%;top:50%;transform:translate(-50%,-40%);padding:10px 18px;border:1px solid var(--ivory);color:var(--ivory);font-size:14px;opacity:0;transition:.35s;background:rgba(12,11,10,.35);backdrop-filter:blur(4px)}
.f-ser:hover figure::after{opacity:1;transform:translate(-50%,-50%)}
.f-ser h3{font-size:1.5rem}
.f-ser-meta{display:flex;justify-content:space-between;gap:10px}
.f-filter{display:flex;flex-wrap:wrap;gap:6px 26px;margin-bottom:28px;font-weight:400}
.f-filter button{padding:4px 0;border-bottom:1px solid transparent;color:var(--grey);transition:.2s;font-size:16px}
.f-filter button[aria-pressed=true]{color:var(--ivory);border-color:var(--champ)}
.f-grid{columns:3;column-gap:16px}
.f-shot{break-inside:avoid;margin:0 0 16px;position:relative;cursor:zoom-in;display:block;width:100%;text-align:left;overflow:hidden;background:var(--coal)}
.f-shot img{width:100%;height:auto;transition:transform .9s cubic-bezier(.2,.7,.2,1)}
.f-shot:hover img,.f-shot:focus-visible img{transform:scale(1.035)}
.f-shot .cap{position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:space-between;gap:10px;padding:40px 14px 12px;background:linear-gradient(transparent,rgba(0,0,0,.75));opacity:0;transition:opacity .35s}
.f-shot:hover .cap,.f-shot:focus-visible .cap{opacity:1}
.f-shot .cap span{color:#e6dfd2}
.f-shot.hide{display:none}
.f-price{position:relative;border-top:1px solid var(--line)}
.f-price li{list-style:none;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1.4fr) auto;gap:6px 32px;padding:clamp(20px,2.4vw,30px) 0;border-bottom:1px solid var(--line);align-items:baseline;transition:padding .35s,color .35s}
.f-price li:hover{padding-left:16px;color:#fff}
.f-price b{font:400 clamp(1.5rem,3vw,2.4rem)/1.1 'Prata',serif}
.f-price span{color:var(--grey);font-size:16px}
.f-price em{font-style:normal;font-size:clamp(1.05rem,1.8vw,1.35rem);white-space:nowrap;font-variant-numeric:tabular-nums;color:var(--champ)}
.f-price ul{margin:0;padding:0}
.f-float{position:fixed;left:0;top:0;width:260px;aspect-ratio:3/4;pointer-events:none;z-index:40;overflow:hidden;opacity:0;transform:translate(-50%,-50%) scale(.85);transition:opacity .3s,transform .4s cubic-bezier(.2,.7,.2,1);box-shadow:0 30px 60px rgba(0,0,0,.6)}
.f-float.on{opacity:1;transform:translate(-50%,-50%) scale(1)}
.f-float img{width:100%;height:100%;object-fit:cover}
.f-clients{display:flex;flex-wrap:wrap;gap:12px clamp(28px,5vw,70px);align-items:baseline;font:400 clamp(1.3rem,2.6vw,2rem) 'Prata',serif;color:#6f6a62}
.f-clients span{transition:color .3s}.f-clients span:hover{color:var(--ivory)}
.f-book{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:0;border:1px solid var(--line)}
.f-book figure{margin:0;min-height:360px;position:relative}
.f-book figure img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.f-form{padding:clamp(24px,4vw,56px);display:grid;gap:18px;align-content:center}
.f-form h2{font-size:clamp(2rem,4.4vw,3.4rem)}
.f-form label{display:grid;gap:6px;font-size:14px;color:var(--grey)}
.f-form input,.f-form select{font:300 17px 'Jost',sans-serif;color:var(--ivory);background:transparent;border:0;border-bottom:1px solid var(--line);padding:10px 0;border-radius:0}
.f-form select option{background:var(--coal)}
.f-form input:focus,.f-form select:focus{outline:none;border-color:var(--champ)}
.f-form button{justify-self:start;padding:15px 28px;background:var(--ivory);color:var(--black);font-weight:400;font-size:16px;transition:.25s}
.f-form button:hover{background:var(--champ)}
.f-ok{color:var(--champ);margin:0;font-size:15px}
.f-foot{border-top:1px solid var(--line);padding-top:22px;padding-bottom:16px;display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;font-size:15px;color:var(--grey)}
.f-foot a{color:var(--ivory)}
.f-box{position:fixed;inset:0;z-index:50;background:#070706;display:grid;place-items:center;padding:20px 20px 96px;color:#eee}
.f-box img{max-width:100%;max-height:calc(100svh - 190px);width:auto;height:auto;display:block}
.f-box figure{margin:0;display:grid;gap:12px;justify-items:start}
.f-box .x{position:absolute;top:16px;right:18px;font:300 16px/1 'Jost',sans-serif;color:#eee;padding:10px 16px;border:1px solid #444}
.f-box .nv{position:absolute;top:50%;transform:translateY(-50%);width:48px;height:48px;border:1px solid #444;color:#eee;font-size:20px}
.f-box .pv{left:16px}.f-box .nx{right:16px}
.f-box::before,.f-box::after{content:"";position:absolute;left:0;right:0;height:50%;background:#000;z-index:2;pointer-events:none;animation:f-shut .55s cubic-bezier(.7,0,.2,1) forwards}
.f-box::before{top:0;transform-origin:top}.f-box::after{bottom:0;transform-origin:bottom}
@keyframes f-shut{0%{transform:scaleY(1)}100%{transform:scaleY(0)}}
@media(max-width:900px){.f-hero{grid-template-columns:1fr;min-height:0}.f-hero-pic{order:-1;aspect-ratio:4/5;max-height:70svh}.f-hero h1{margin-right:0;margin-bottom:22px}.f-hero-copy{padding-right:0}.f-grid{columns:2;column-gap:10px}.f-shot{margin-bottom:10px}.f-shot .cap{opacity:1;padding:24px 10px 8px}.f-shot .cap span:last-child{display:none}.f-price li{grid-template-columns:1fr auto}.f-price span{grid-column:1/-1;grid-row:2}.f-book{grid-template-columns:1fr}.f-book figure{min-height:260px}.f-nav{display:none}.f-box .nv{display:none}}
@media(prefers-reduced-motion:reduce){.f-hero-pic img{animation:none}}
`,
html: `
<header class="wrap f-top"><span class="f-logo">Выдержка</span><nav class="f-nav" aria-label="Разделы"><button data-f="f-series">Серии</button><button data-f="f-work">Портфолио</button><button data-f="f-price">Съёмки и цены</button></nav><button class="f-book-btn" data-f="f-book">Забронировать съёмку</button></header>
<section class="wrap f-hero">
  <div class="f-hero-copy">
    <h1>Выдержка</h1>
    <div>
      <p>Фотоагентство полного цикла. Портреты, мода, еда, интерьеры и события. Шесть фотографов, ретушёры и своя студия с дневным светом.</p>
      <div class="f-hero-meta"><div><b>12 лет</b><span>снимаем для брендов</span></div><div><b>340</b><span>съёмок в прошлом году</span></div><div><b>48 ч</b><span>до первых кадров</span></div></div>
    </div>
  </div>
  <figure class="f-hero-pic"><img src="img/photo/e1.webp" alt="Портрет девушки в широкополой шляпе на чёрном фоне" width="1600" height="2133" fetchpriority="high"><figcaption class="mono"><span>Серия «Тень», 2026</span><span>85 мм  f/2  1/200</span></figcaption></figure>
</section>
<section class="wrap f-statement"><p>Мы не просто нажимаем на кнопку. Ставим свет, <span>подбираем образ</span> и снимаем так, чтобы кадр работал на ваш бренд годами.</p></section>

<section class="wrap f-sec" id="f-series">
  <div class="f-head"><h2>Серии</h2><p>Листайте вбок или тяните мышью. Нажмите на серию, и она откроется кадр за кадром.</p></div>
  <div class="f-series" id="f-series-row"></div>
</section>

<section class="wrap f-sec" id="f-work">
  <div class="f-head"><h2>Портфолио</h2><p>Отдельные кадры по направлениям.</p></div>
  <div class="f-filter" id="f-filter"></div>
  <div class="f-grid" id="f-grid"></div>
</section>

<section class="wrap f-sec" id="f-price">
  <div class="f-head"><h2>Съёмки и цены</h2><p>Наведите на строку, чтобы увидеть пример. В стоимость входят ретушь и права на коммерческое использование.</p></div>
  <ul class="f-price" id="f-price-list">
    <li data-img="e3"><b>Портрет</b><span>Два часа в студии, 25 кадров в ретуши, стилист и визажист</span><em>от 18 000 ₽</em></li>
    <li data-img="e5"><b>Мода и лукбук</b><span>Смена в студии или на локации, модели по кастингу</span><em>от 65 000 ₽</em></li>
    <li data-img="s2"><b>Еда и напитки</b><span>Меню ресторана, до 20 блюд за смену, фуд-стилист</span><em>от 32 000 ₽</em></li>
    <li data-img="s3"><b>Интерьер</b><span>Квартира, отель или офис, до 15 ракурсов, выровненная геометрия</span><em>от 22 000 ₽</em></li>
    <li data-img="s5"><b>Предметная</b><span>Каталог и стилизованные кадры для бренда</span><em>от 450 ₽ за кадр</em></li>
    <li data-img="s8"><b>Событие</b><span>Репортаж от трёх часов, первые 20 кадров на следующее утро</span><em>8 000 ₽ в час</em></li>
  </ul>
</section>

<section class="wrap f-sec">
  <div class="f-head"><h2>Снимали для</h2><p>Названия брендов в демо вымышленные.</p></div>
  <div class="f-clients"><span>Северный дом</span><span>Atelier Nord</span><span>Хлебная лавка</span><span>Гранит</span><span>Maison Lumière</span><span>Отель «Причал»</span></div>
</section>

<section class="wrap f-sec" id="f-book">
  <div class="f-book">
    <figure><img src="img/photo/e9.webp" alt="Силуэт с летящей тканью" width="1600" height="703" loading="lazy" decoding="async"></figure>
    <form class="f-form" id="f-form">
      <h2>Забронировать съёмку</h2>
      <label for="f-name">Как вас зовут<input id="f-name" required autocomplete="name"></label>
      <label for="f-type">Что снимаем<select id="f-type"><option>Портрет</option><option>Мода и лукбук</option><option>Еда и напитки</option><option>Интерьер</option><option>Предметная</option><option>Событие</option></select></label>
      <label for="f-tg">Telegram или телефон<input id="f-tg" required></label>
      <button type="submit">Отправить заявку</button>
      <p class="f-ok" id="f-ok" hidden aria-live="polite"></p>
    </form>
  </div>
  <footer class="f-foot" style="margin-top:clamp(40px,6vw,80px)"><span>Демо-сайт фотоагентства. Агентство вымышленное. Фото: Unsplash.</span><a href="#estate">Следующее демо: недвижимость «Высота»</a></footer>
</section>
<div class="f-float" id="f-float" aria-hidden="true"><img alt=""></div>
`,
mount: function (root) {
  var $ = function (s) { return root.querySelector(s); };
  root.addEventListener('click', function (e) { var t = e.target.closest('[data-f]'); if (t) { var el = $('#' + t.dataset.f); if (el) el.scrollIntoView({ behavior: PORTF.reduce ? 'auto' : 'smooth' }); } });

  var P = {
    e2: ['Портрет', 1000, 1500, '85 мм  f/1.8  1/200'], e3: ['Портрет', 1000, 1558, '50 мм  f/2  1/250'], e4: ['Портрет', 1000, 1510, '85 мм  f/2.2  1/160'],
    e7: ['Портрет', 1000, 1500, '105 мм  f/2.8  1/200'], e8: ['Портрет', 1000, 1500, '85 мм  f/2  1/125'],
    e5: ['Мода', 1200, 900, '35 мм  f/8  1/200'], e6: ['Мода', 1000, 1400, '50 мм  f/5.6  1/160'], e10: ['Мода', 1000, 1000, '35 мм  f/8  1/250'],
    s2: ['Еда', 1000, 1418, '50 мм  f/4  1/125'], s7: ['Еда', 1000, 1000, '50 мм  f/5.6  1/125'],
    s3: ['Интерьер', 1000, 527, '24 мм  f/8  1/60'], s9: ['Интерьер', 1000, 563, '17 мм  f/9  1/60'],
    s5: ['Предметка', 1000, 726, '100 мм  f/11  1/160'],
    s4: ['Событие', 1000, 667, '35 мм  f/2  1/160'], s8: ['Событие', 1000, 667, '85 мм  f/1.4  1/500'], s10: ['Событие', 1000, 668, '35 мм  f/2.8  1/100']
  };
  var SERIES = [
    ['Тень', 'Портреты в низком ключе', ['e4', 'e2', 'e7', 'e8', 'e3']],
    ['Белый зал', 'Мода и лукбук', ['e5', 'e6', 'e10']],
    ['Сезонное меню', 'Ресторанная съёмка', ['s2', 's7']],
    ['Тихие комнаты', 'Интерьеры', ['s9', 's3']],
    ['Вечер', 'Свадьбы и события', ['s8', 's4', 's10']]
  ];
  var GRID = ['e2', 's2', 'e5', 's9', 'e7', 's5', 'e6', 's4', 'e8', 's3', 'e10', 's8'];
  function img(id, lazy) { var p = P[id]; return '<img src="img/photo/' + id + '.webp" alt="' + p[0] + '" width="' + p[1] + '" height="' + p[2] + '"' + (lazy ? ' loading="lazy"' : '') + ' decoding="async">'; }

  /* серии */
  var row = $('#f-series-row');
  row.innerHTML = SERIES.map(function (s, i) { return '<button class="f-ser" data-s="' + i + '"><figure>' + img(s[2][0], true) + '</figure><h3>' + s[0] + '</h3><span class="f-ser-meta"><span>' + s[1] + '</span><span class="mono">' + s[2].length + ' кадр' + (s[2].length < 5 ? 'а' : 'ов') + '</span></span></button>'; }).join('');
  var dragX = null, sl = 0, moved = 0;
  row.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; dragX = e.clientX; sl = row.scrollLeft; moved = 0; });
  row.addEventListener('pointermove', function (e) { if (dragX === null) return; var d = e.clientX - dragX; moved = Math.abs(d); if (moved > 4) row.classList.add('drag'); row.scrollLeft = sl - d; });
  function endDrag() { dragX = null; row.classList.remove('drag'); }
  row.addEventListener('pointerup', endDrag); row.addEventListener('pointerleave', endDrag);
  row.addEventListener('click', function (e) { var b = e.target.closest('.f-ser'); if (!b) return; if (moved > 6) { e.preventDefault(); moved = 0; return; } open(SERIES[b.dataset.s][2], 0); });

  /* сетка и фильтр */
  var grid = $('#f-grid');
  grid.innerHTML = GRID.map(function (id, i) { return '<button class="f-shot" data-i="' + i + '" data-k="' + P[id][0] + '" aria-label="Открыть кадр: ' + P[id][0] + '">' + img(id, true) + '<span class="cap mono"><span>' + String(i + 1).padStart(2, '0') + '  ' + P[id][0] + '</span><span>' + P[id][3] + '</span></span></button>'; }).join('');
  grid.addEventListener('click', function (e) {
    var b = e.target.closest('.f-shot'); if (!b) return;
    var vis = [].slice.call(grid.querySelectorAll('.f-shot:not(.hide)')).map(function (x) { return GRID[x.dataset.i]; });
    open(vis, vis.indexOf(GRID[b.dataset.i]));
  });
  var kinds = ['Все'].concat(GRID.map(function (id) { return P[id][0]; }).filter(function (v, i, a) { return a.indexOf(v) === i; })), fbox = $('#f-filter');
  kinds.forEach(function (kd, i) {
    var b = document.createElement('button'); b.textContent = kd; b.setAttribute('aria-pressed', i === 0);
    b.onclick = function () { fbox.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); grid.querySelectorAll('.f-shot').forEach(function (el) { el.classList.toggle('hide', kd !== 'Все' && el.dataset.k !== kd); }); };
    fbox.appendChild(b);
  });

  /* прайс: фото следует за курсором */
  var fl = $('#f-float'), fli = fl.querySelector('img'), plist = $('#f-price-list'), fx = 0, fy = 0, tx = 0, ty = 0, fraf = 0;
  function follow() { fx += (tx - fx) * .18; fy += (ty - fy) * .18; fl.style.left = fx + 'px'; fl.style.top = fy + 'px'; fraf = (Math.abs(tx - fx) + Math.abs(ty - fy) > .5) ? requestAnimationFrame(follow) : 0; }
  if (!PORTF.touch) {
    plist.addEventListener('pointermove', function (e) {
      tx = e.clientX + 150; ty = e.clientY;
      if (!fl.classList.contains('on')) { fx = tx; fy = ty; }
      var li = e.target.closest('li'); if (li && fli.dataset.k !== li.dataset.img) { fli.dataset.k = li.dataset.img; fli.src = 'img/photo/' + li.dataset.img + '.webp'; }
      fl.classList.add('on'); if (!fraf) fraf = requestAnimationFrame(follow);
    });
    plist.addEventListener('pointerleave', function () { fl.classList.remove('on'); });
  }

  /* форма */
  $('#f-form').addEventListener('submit', function (e) {
    e.preventDefault(); var ok = $('#f-ok'); ok.hidden = false;
    ok.textContent = 'Спасибо, ' + $('#f-name').value.trim() + '. Это демо, заявка на «' + $('#f-type').value + '» никуда не отправлена.';
  });

  /* просмотр кадров */
  var box = null, seq = [], at = 0;
  function close() { if (box) { box.remove(); box = null; document.removeEventListener('keydown', key); } }
  function key(e) { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); }
  function paint() { var id = seq[at], p = P[id]; box.querySelector('figure').innerHTML = img(id, false) + '<figcaption class="mono">' + p[0] + '   ' + p[3] + '   ' + (at + 1) + ' / ' + seq.length + '</figcaption>'; }
  function step(d) { if (!box || seq.length < 2) return; at = (at + d + seq.length) % seq.length; paint(); }
  function open(list, i) {
    close(); seq = list; at = Math.max(0, i);
    box = document.createElement('div'); box.className = 'f-box'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'Просмотр кадра');
    box.innerHTML = '<figure></figure><button class="x">Закрыть</button>' + (seq.length > 1 ? '<button class="nv pv" aria-label="Предыдущий кадр">←</button><button class="nv nx" aria-label="Следующий кадр">→</button>' : '');
    box.addEventListener('click', function (e) { if (e.target.closest('.x') || e.target === box) close(); else if (e.target.closest('.pv')) step(-1); else if (e.target.closest('.nx')) step(1); else if (e.target.tagName === 'IMG') step(1); });
    paint(); root.appendChild(box); document.addEventListener('keydown', key); box.querySelector('.x').focus();
  }
  return function () { close(); cancelAnimationFrame(fraf); };
}
});
