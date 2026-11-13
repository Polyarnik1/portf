/* Зерно и пар: кофейня-обжарка. Зелень кофейного листа, крема, красная ягода. */
PORTF.register('coffee', {
css: `
.s-coffee{--leaf:#1d3a2b;--leaf2:#16301f;--crema:#f3e6d0;--foam:#fbf5ea;--berry:#c43a2c;--bean:#2a1810;
  background:var(--leaf);color:var(--crema);font:400 17px/1.6 'Golos Text',system-ui,sans-serif}
.s-coffee h1,.s-coffee h2,.s-coffee h3{font-family:'Yeseva One',Georgia,serif;font-weight:400;line-height:1.05;text-wrap:balance}
.s-coffee .wrap{max-width:1180px;margin:0 auto;padding-inline:clamp(18px,4.5vw,56px)}
.c-top{display:flex;justify-content:space-between;align-items:center;gap:16px;padding-top:22px;padding-bottom:22px}
.c-logo{font:400 22px/1 'Yeseva One',serif}
.c-open{font-size:14px;padding:7px 14px;border-radius:999px;background:var(--leaf2);border:1px solid #2f5540}
.c-open b{color:#9fe0a8;font-weight:600}
.c-hero{display:grid;grid-template-columns:1.15fr .85fr;gap:32px;align-items:center;padding-top:clamp(20px,5vw,60px);padding-bottom:clamp(48px,8vw,100px)}
.c-hero h1{font-size:clamp(2.3rem,7vw,5.4rem)}
.c-hero p{max-width:30em;margin-top:22px;opacity:.85}
.c-btn{display:inline-flex;margin-top:28px;padding:16px 28px;border-radius:14px;background:var(--berry);color:var(--foam);font-weight:600;text-decoration:none;box-shadow:0 6px 0 #7f2219;transition:transform .15s,box-shadow .15s}
.c-btn:hover{transform:translateY(2px);box-shadow:0 4px 0 #7f2219}
.c-cup{position:relative;width:min(100%,420px);aspect-ratio:1;justify-self:center}
.c-saucer{position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle,#e8d7bb 0 58%,#fbf5ea 59% 100%);box-shadow:0 30px 60px rgba(0,0,0,.4),inset 0 -8px 20px rgba(0,0,0,.12)}
.c-mug{position:absolute;inset:17%;border-radius:50%;background:var(--foam);box-shadow:0 10px 24px rgba(0,0,0,.3)}
.c-mug::after{content:"";position:absolute;right:-24%;top:38%;width:30%;height:24%;border-radius:0 50% 50% 0;border:14px solid var(--foam);border-left:0;box-shadow:6px 8px 14px rgba(0,0,0,.2)}
.c-liquid{position:absolute;inset:9%;border-radius:50%;overflow:hidden;background:#5a341d;box-shadow:inset 0 6px 16px rgba(0,0,0,.5)}
.c-liquid::before{content:"";position:absolute;inset:-20%;background:conic-gradient(from 0deg,#5a341d,#c9a377 12%,#f3e6d0 20%,#b98a5a 30%,#5a341d 45%,#d8bb93 60%,#f3e6d0 68%,#8a5a36 82%,#5a341d);filter:blur(10px);animation:c-swirl 14s linear infinite}
.c-liquid::after{content:"";position:absolute;inset:30%;border-radius:50%;background:radial-gradient(circle,#fbf5ea 0 30%,transparent 70%);filter:blur(6px)}
@keyframes c-swirl{to{transform:rotate(360deg)}}
.c-steam{position:absolute;left:50%;top:-4%;width:40%;height:40%;transform:translateX(-50%);pointer-events:none}
.c-steam i{position:absolute;bottom:0;width:18%;height:100%;border-radius:50%;border-left:3px solid rgba(251,245,234,.5);filter:blur(2px);animation:c-steam 4s ease-in-out infinite}
.c-steam i:nth-child(1){left:10%}.c-steam i:nth-child(2){left:42%;animation-delay:1.2s}.c-steam i:nth-child(3){left:74%;animation-delay:2.3s}
@keyframes c-steam{0%{transform:translateY(30%) scaleY(.5);opacity:0}40%{opacity:1}100%{transform:translateY(-40%) scaleY(1.2) translateX(12px);opacity:0}}
.c-tape{background:var(--berry);color:var(--foam);overflow:hidden;white-space:nowrap;padding:14px 0;font:400 20px/1 'Yeseva One',serif;transform:rotate(-1.2deg);margin:0 -10px}
.c-tape div{display:inline-block;animation:c-tape 30s linear infinite}
.c-tape span{margin:0 22px}.c-tape span::after{content:"";display:inline-block;width:10px;height:14px;margin-left:44px;border-radius:50%;background:var(--bean);transform:rotate(25deg)}
@keyframes c-tape{to{transform:translateX(-50%)}}
.c-shots{display:grid;grid-template-columns:1.25fr 1fr 1fr;grid-template-rows:repeat(2,clamp(130px,17vw,230px));gap:12px;padding-top:clamp(40px,6vw,72px);padding-bottom:clamp(48px,7vw,90px)}
.c-shots figure{margin:0;border-radius:20px;overflow:hidden;position:relative}
.c-shots figure:first-child{grid-row:span 2}
.c-shots figure:last-child{grid-column:span 2}
.c-shots img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .9s cubic-bezier(.2,.7,.2,1)}
.c-shots figure:hover img{transform:scale(1.05)}
.c-shots figcaption{position:absolute;left:12px;bottom:12px;padding:6px 12px;border-radius:999px;background:var(--leaf);color:var(--crema);font-size:13.5px}
.c-card-pic{margin:calc(-1*clamp(22px,3vw,34px));margin-bottom:0;height:150px;overflow:hidden;border-radius:20px 20px 0 0}
.c-card-pic img{display:block;width:100%;height:100%;object-fit:cover}
.c-menu{background:var(--foam);color:var(--bean);padding:clamp(56px,9vw,110px) 0}
.c-menu h2,.c-bean h2,.c-visit h2{font-size:clamp(1.9rem,4.6vw,3.4rem);margin-bottom:26px}
.c-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:26px}
.c-tabs button{padding:10px 18px;border-radius:999px;border:1.5px solid var(--bean);font-weight:600;font-size:15px;transition:.2s}
.c-tabs button[aria-selected=true]{background:var(--bean);color:var(--foam)}
.c-list{display:grid;grid-template-columns:1fr 1fr;gap:6px 56px}
.c-item{display:grid;grid-template-columns:1fr auto;gap:2px 16px;padding:14px 0;border-bottom:1px dashed #cdb894;animation:c-in .4s both}
.c-item b{font:400 1.25rem/1.2 'Yeseva One',serif}
.c-item em{font-style:normal;font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap}
.c-item small{grid-column:1/-1;font-size:14.5px;opacity:.7}
@keyframes c-in{from{opacity:0;transform:translateY(8px)}}
.c-bean{padding-top:clamp(56px,9vw,110px);padding-bottom:clamp(56px,9vw,110px)}
.c-bean-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(24px,5vw,64px);align-items:start}
.c-origins{display:grid;gap:10px}
.c-origins button{text-align:left;padding:18px 20px;border-radius:16px;background:var(--leaf2);border:1.5px solid #2f5540;transition:.25s;display:grid;gap:2px}
.c-origins button b{font:400 1.3rem/1.2 'Yeseva One',serif}
.c-origins button span{font-size:14px;opacity:.7}
.c-origins button[aria-pressed=true]{background:var(--crema);color:var(--bean);border-color:var(--crema)}
.c-card{background:var(--leaf2);border-radius:22px;padding:clamp(22px,3vw,34px);border:1.5px solid #2f5540;display:grid;gap:18px}
.c-card h3{font-size:1.7rem}
.c-notes{display:flex;flex-wrap:wrap;gap:8px}
.c-notes span{padding:6px 14px;border-radius:999px;background:var(--berry);color:var(--foam);font-size:14px;font-weight:600}
.c-bars{display:grid;gap:12px}
.c-bars div{display:grid;grid-template-columns:110px 1fr 28px;gap:12px;align-items:center;font-size:15px}
.c-bars i{height:10px;border-radius:5px;background:#2f5540;overflow:hidden;display:block}
.c-bars i::after{content:"";display:block;height:100%;width:calc(var(--v)*10%);background:var(--crema);border-radius:5px;transition:width .6s cubic-bezier(.2,.7,.2,1)}
.c-facts{display:flex;flex-wrap:wrap;gap:8px 28px;font-size:15px;opacity:.85}
.c-visit{background:var(--bean);padding:clamp(56px,9vw,100px) 0}
.c-visit-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px}
.c-visit dl{margin:0;display:grid;gap:12px}
.c-visit dt{font-size:14px;opacity:.6}.c-visit dd{margin:0;font-size:1.15rem}
.c-foot{padding:26px 0 10px;font-size:14px;display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;opacity:.85}
.c-foot a{color:var(--crema)}
@media(max-width:800px){.c-hero,.c-bean-grid,.c-visit-grid{grid-template-columns:1fr}.c-cup{width:min(74vw,320px);order:-1}.c-list{grid-template-columns:1fr}.c-shots{grid-template-columns:1fr 1fr;grid-template-rows:none;grid-auto-rows:42vw}.c-shots figure:first-child{grid-row:span 2}.c-shots figure:last-child{grid-column:span 2}.c-open span{display:none}}
`,
html: `
<header class="wrap c-top"><span class="c-logo">Зерно и пар</span><span class="c-open"><b>Открыто</b><span> сегодня до 22:00</span></span></header>
<section class="wrap c-hero">
  <div>
    <h1>Кофе, который обжарили в&nbsp;этот четверг</h1>
    <p>Обжариваем зерно каждую неделю небольшими партиями прямо в зале. Варим эспрессо и фильтр с восьми утра, печём свои круассаны.</p>
    <a class="c-btn" href="#coffee" data-c-scroll="c-menu">Открыть меню</a>
  </div>
  <div class="c-cup" aria-hidden="true">
    <div class="c-saucer"></div><div class="c-mug"><div class="c-liquid"></div></div>
    <div class="c-steam"><i></i><i></i><i></i></div>
  </div>
</section>
<div class="c-tape" aria-hidden="true"><div>${'<span>эспрессо</span><span>воронка</span><span>флэт уайт</span><span>свежая обжарка</span><span>круассаны</span><span>колд брю</span>'.repeat(4)}</div></div>
<section class="wrap c-shots">
  <figure><img src="img/coffee/c1.webp" alt="Две чашки капучино с латте-артом" width="900" height="1350" loading="lazy" decoding="async"><figcaption>Капучино на свежей обжарке</figcaption></figure>
  <figure><img src="img/coffee/c5.webp" alt="Бариста заваривает кофе в воронке" width="900" height="600" loading="lazy" decoding="async"><figcaption>Воронка</figcaption></figure>
  <figure><img src="img/coffee/c4.webp" alt="Свежий круассан" width="900" height="720" loading="lazy" decoding="async"><figcaption>Круассаны утром</figcaption></figure>
  <figure><img src="img/coffee/c2.webp" alt="Зал кофейни с деревянными столами" width="1200" height="800" loading="lazy" decoding="async"><figcaption>Зал на сорок мест</figcaption></figure>
</section>
<section class="c-menu" id="c-menu"><div class="wrap">
  <h2>Меню</h2>
  <div class="c-tabs" role="tablist" aria-label="Разделы меню"></div>
  <div class="c-list" id="c-list"></div>
</div></section>
<section class="wrap c-bean">
  <h2>Зерно на этой неделе</h2>
  <div class="c-bean-grid">
    <div class="c-origins" id="c-origins"></div>
    <div class="c-card" id="c-card" aria-live="polite"></div>
  </div>
</section>
<section class="c-visit"><div class="wrap">
  <h2>Заходите</h2>
  <div class="c-visit-grid">
    <dl><div><dt>Адрес</dt><dd>ул. Тёплая, 12, вход со двора</dd></div><div><dt>Часы</dt><dd>Будни 8:00–22:00, выходные 9:00–23:00</dd></div></dl>
    <dl><div><dt>Обжарка</dt><dd>По четвергам, можно посмотреть</dd></div><div><dt>С собой</dt><dd>Скидка 10% в свою кружку</dd></div></dl>
  </div>
  <div class="c-foot"><span>Демо-сайт кофейни. Заведение вымышленное. Фото: Unsplash.</span><a href="#barber">Следующее демо: барбершоп «Остриё»</a></div>
</div></section>
`,
mount: function (root) {
  var MENU = {
    'Классика': [['Эспрессо','Двойной, смесь Бразилия и Эфиопия','60 мл','190 ₽'],['Капучино','Плотная молочная пена','250 мл','290 ₽'],['Флэт уайт','Двойной эспрессо, чуть молока','180 мл','310 ₽'],['Латте','Мягкий, много молока','350 мл','320 ₽'],['Раф','Сливки и ванильный сахар','300 мл','360 ₽'],['Американо','Эспрессо и горячая вода','250 мл','220 ₽']],
    'Фильтр': [['Воронка V60','Зерно недели на выбор','300 мл','340 ₽'],['Аэропресс','Плотное тело, чистый вкус','220 мл','320 ₽'],['Батч-брю','Фильтр дня, наливаем сразу','300 мл','210 ₽'],['Колд брю','Настаиваем 16 часов','300 мл','290 ₽']],
    'Не кофе': [['Какао','На молоке, с морской солью','300 мл','310 ₽'],['Матча латте','Церемониальная матча','300 мл','360 ₽'],['Чай с облепихой','Облепиха, мёд, розмарин','400 мл','290 ₽']],
    'К кофе': [['Круассан','Печём утром, 27 слоёв','1 шт','230 ₽'],['Сырник','Творог 9%, сметана','2 шт','290 ₽'],['Банановый хлеб','С грецким орехом','ломтик','210 ₽'],['Гранола','Йогурт, ягоды, мёд','250 г','340 ₽']]
  };
  var tabs = root.querySelector('.c-tabs'), list = root.querySelector('#c-list');
  function show(name) {
    tabs.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-selected', b.textContent === name); });
    list.innerHTML = MENU[name].map(function (m, i) { return '<div class="c-item" style="animation-delay:' + i * 40 + 'ms"><b>' + m[0] + '</b><em>' + m[3] + '</em><small>' + m[1] + ', ' + m[2] + '</small></div>'; }).join('');
  }
  Object.keys(MENU).forEach(function (k) { var b = document.createElement('button'); b.textContent = k; b.setAttribute('role', 'tab'); b.onclick = function () { show(k); }; tabs.appendChild(b); });
  show('Классика');

  var BEANS = [
    { n: 'Эфиопия Гуджи', s: 'Натуральная обработка', notes: ['черника', 'жасмин', 'какао'], v: [8, 7, 5], h: '2 100 м', sort: 'Эйрлум', price: '890 ₽ за 250 г' },
    { n: 'Колумбия Уила', s: 'Мытая обработка', notes: ['красное яблоко', 'карамель', 'миндаль'], v: [6, 8, 6], h: '1 750 м', sort: 'Катурра', price: '790 ₽ за 250 г' },
    { n: 'Бразилия Серрадо', s: 'Для эспрессо и молока', notes: ['шоколад', 'фундук', 'ириска'], v: [3, 7, 9], h: '1 100 м', sort: 'Катуаи', price: '690 ₽ за 250 г' }
  ];
  var ori = root.querySelector('#c-origins'), card = root.querySelector('#c-card');
  card.innerHTML = '<div class="c-card-pic"><img src="img/coffee/c3.webp" alt="Обжаренные кофейные зёрна" width="900" height="686" loading="lazy" decoding="async"></div><h3></h3><div class="c-notes"></div><div class="c-bars">' + ['Кислотность', 'Сладость', 'Тело'].map(function (l) { return '<div><span>' + l + '</span><i style="--v:0"></i><span></span></div>'; }).join('') + '</div><div class="c-facts"></div>';
  function bean(i) {
    var b = BEANS[i];
    ori.querySelectorAll('button').forEach(function (x, j) { x.setAttribute('aria-pressed', j === i); });
    card.querySelector('h3').textContent = b.n;
    card.querySelector('.c-notes').innerHTML = b.notes.map(function (x) { return '<span>' + x + '</span>'; }).join('');
    card.querySelectorAll('.c-bars div').forEach(function (d, j) { d.children[1].style.setProperty('--v', b.v[j]); d.children[2].textContent = b.v[j]; });
    card.querySelector('.c-facts').innerHTML = '<span>Высота: ' + b.h + '</span><span>Сорт: ' + b.sort + '</span><span>' + b.price + '</span>';
  }
  BEANS.forEach(function (b, i) { var x = document.createElement('button'); x.innerHTML = '<b>' + b.n + '</b><span>' + b.s + '</span>'; x.onclick = function () { bean(i); }; ori.appendChild(x); });
  bean(0);

  root.querySelector('[data-c-scroll]').addEventListener('click', function (e) {
    e.preventDefault(); root.querySelector('#c-menu').scrollIntoView({ behavior: PORTF.reduce ? 'auto' : 'smooth' });
  });
}
});
