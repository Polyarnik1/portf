/* Высота: агентство недвижимости. Бутылочный зелёный, камень, латунь. Вместо фото квартир говорят планировки. */
PORTF.register('estate', {
css: `
.s-estate{--green:#10291f;--deep:#0b1d16;--stone:#ebe7de;--card:#f6f3ec;--brass:#b08d57;--ink:#1b241f;--mute:#6f7a72;
  background:var(--stone);color:var(--ink);font:400 17px/1.6 'Manrope',system-ui,sans-serif}
.s-estate h1,.s-estate h2,.s-estate h3{font-family:'Tenor Sans',Georgia,serif;font-weight:400;margin:0;line-height:1.08;text-wrap:balance}
.s-estate .wrap{max-width:1240px;margin:0 auto;padding-inline:clamp(18px,4.5vw,56px)}
.e-head{background:var(--green);color:var(--stone);overflow:hidden}
.e-top{display:flex;justify-content:space-between;align-items:center;padding-top:22px;padding-bottom:22px}
.e-logo{font:400 22px/1 'Tenor Sans',serif;letter-spacing:.22em;text-transform:uppercase}
.e-logo::before{content:"";display:inline-block;width:10px;height:22px;border:1px solid var(--brass);border-bottom:0;margin-right:12px;vertical-align:-3px}
.e-top span:last-child{font-size:15px;color:#b9c4bc}
.e-hero{display:grid;grid-template-columns:.95fr 1.05fr;gap:clamp(12px,3vw,40px);align-items:center;padding-top:clamp(24px,5vw,64px)}
.e-hero h1{font-size:clamp(2.3rem,5.8vw,4.8rem)}
.e-hero p{color:#b9c4bc;margin-top:22px;max-width:28em}
.e-btn{display:inline-block;margin:30px 0 clamp(24px,4vw,48px);padding:16px 30px;border:1px solid var(--brass);color:var(--stone);text-decoration:none;font-weight:600;letter-spacing:.02em;transition:.25s}
.e-btn:hover{background:var(--brass);color:var(--deep)}
.e-city{position:relative;aspect-ratio:1.05;width:100%;min-width:0;align-self:stretch}
.e-city canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:pan-y;cursor:grab}
.e-city canvas:active{cursor:grabbing}
.e-legend{position:absolute;left:0;bottom:14px;display:flex;flex-wrap:wrap;gap:6px 18px;font-size:14px;color:#b9c4bc;pointer-events:none}
.e-legend i{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:7px;background:var(--c);box-shadow:0 0 10px var(--c)}
.e-tip{position:absolute;z-index:2;min-width:190px;max-width:240px;padding:12px 14px;background:rgba(11,29,22,.94);border:1px solid var(--c,#b08d57);color:var(--stone);font-size:14px;line-height:1.35;pointer-events:none;transform:translate(-50%,calc(-100% - 16px));box-shadow:0 10px 30px rgba(0,0,0,.4)}
.e-tip b{display:block;font:400 1.05rem/1.2 'Tenor Sans',serif;margin-bottom:4px}
.e-tip em{font-style:normal;color:var(--c,#f1cf8f)}
.e-media{position:relative;aspect-ratio:3/2;overflow:hidden;border-bottom:1px solid #d9d3c5}
.e-media img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.e-flat:hover .e-media img{transform:scale(1.05)}
.e-media .e-plan{position:absolute;inset:0;display:grid;place-items:center;border:0;opacity:0;visibility:hidden;transition:opacity .3s,visibility .3s}
.e-flat.plan .e-media .e-plan{opacity:1;visibility:visible}
.e-tag{position:absolute;left:12px;top:12px;padding:5px 11px;font-size:13px;font-weight:600;background:var(--green);color:#f1cf8f;z-index:1}
.e-tag.rent{color:#8fe8cd}
.e-toggle{position:absolute;right:12px;bottom:12px;z-index:1;padding:7px 12px;font-size:13px;font-weight:600;background:var(--card);border:1px solid var(--green);color:var(--green)}
.e-toggle:hover{background:var(--green);color:var(--stone)}
.e-flat.hit{border-color:var(--brass);box-shadow:0 0 0 3px rgba(176,141,87,.45)}
.e-filter-row{display:flex;flex-wrap:wrap;gap:8px 28px;margin-bottom:22px}
.e-filter-row .e-filter{margin-bottom:0}
.e-sec{padding-top:clamp(52px,8vw,110px);padding-bottom:clamp(20px,3vw,40px)}
.e-sec>h2{font-size:clamp(1.9rem,4.4vw,3.3rem);margin-bottom:14px}
.e-sec>p{color:var(--mute);max-width:36em;margin-bottom:26px}
.e-filter{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px}
.e-filter button{padding:10px 18px;border:1px solid #c9c3b5;font-weight:600;font-size:15px;transition:.2s;background:var(--card)}
.e-filter button[aria-pressed=true]{background:var(--green);border-color:var(--green);color:var(--stone)}
.e-list{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.e-flat{background:var(--card);border:1px solid #d9d3c5;display:grid;grid-template-rows:auto 1fr;transition:transform .35s,box-shadow .35s,border-color .35s}
.e-flat:hover{transform:translateY(-4px);box-shadow:0 22px 40px -24px rgba(16,41,31,.5);border-color:var(--brass)}
.e-plan{padding:22px;border-bottom:1px solid #d9d3c5;color:var(--green);background:linear-gradient(#f6f3ec,#f6f3ec),repeating-linear-gradient(0deg,transparent 0 19px,#e6e0d2 19px 20px)}
.e-plan svg{display:block;width:100%;height:auto}
.e-plan .w{fill:none;stroke:currentColor;stroke-width:3;stroke-linejoin:miter}
.e-plan .t{fill:none;stroke:currentColor;stroke-width:1.2}
.e-plan .d{fill:none;stroke:var(--brass);stroke-width:1.2;stroke-dasharray:3 3}
.e-plan text{font:600 9px 'Manrope',sans-serif;fill:var(--mute)}
.e-info{padding:18px 22px 22px;display:grid;gap:6px;align-content:start}
.e-info h3{font-size:1.45rem}
.e-info p{color:var(--mute);font-size:15px}
.e-info b{font:400 1.5rem/1.2 'Tenor Sans',serif;margin-top:8px;font-variant-numeric:tabular-nums}
.e-info small{color:var(--mute);font-size:14px}
.e-calc{background:var(--green);color:var(--stone);display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(22px,5vw,70px);padding:clamp(24px,5vw,60px);align-items:center}
.e-row{display:grid;gap:8px;margin-bottom:22px}
.e-row label{display:flex;justify-content:space-between;gap:12px;color:#b9c4bc;font-size:15px}
.e-row label b{color:var(--stone);font-weight:600;font-variant-numeric:tabular-nums}
.e-row input{width:100%;accent-color:var(--brass);height:28px}
.e-pay small{color:#b9c4bc}
.e-pay big{display:block;font:400 clamp(2.4rem,6vw,4.2rem)/1.05 'Tenor Sans',serif;color:#f1cf8f;margin:6px 0 14px;font-variant-numeric:tabular-nums}
.e-pay dl{margin:0;display:grid;gap:8px;font-size:15px}
.e-pay dl div{display:flex;justify-content:space-between;border-top:1px solid #23463a;padding-top:8px}
.e-pay dt{color:#b9c4bc}.e-pay dd{margin:0;font-variant-numeric:tabular-nums}
.e-serv{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-top:1px solid var(--ink)}
.e-serv li{padding:22px 22px 22px 0;border-right:1px solid #cfc9bb;padding-left:22px}
.e-serv li:first-child{padding-left:0}.e-serv li:last-child{border-right:0}
.e-serv h3{font-size:1.3rem;margin-bottom:8px}
.e-serv p{font-size:15.5px;color:var(--mute)}
.e-foot{margin-top:clamp(40px,6vw,80px);border-top:1px solid #cfc9bb;padding-top:20px;padding-bottom:16px;display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;font-size:14px;color:var(--mute)}
.e-foot a{color:var(--green)}
@media(max-width:900px){.e-list{grid-template-columns:1fr 1fr}.e-serv{grid-template-columns:1fr 1fr}.e-serv li:nth-child(2){border-right:0}.e-serv li:nth-child(3){padding-left:0}.e-serv li:nth-child(n+3){border-top:1px solid #cfc9bb}}
@media(max-width:700px){.e-city{aspect-ratio:1;margin-top:-10px}.e-hero,.e-calc{grid-template-columns:1fr}.e-btn{margin-bottom:36px}.e-list{grid-template-columns:1fr}.e-top span:last-child{display:none}}
@media(max-width:480px){.e-serv{grid-template-columns:1fr}.e-serv li{padding-left:0;border-right:0;border-top:1px solid #cfc9bb}.e-serv li:first-child{border-top:0}}
`,
html: `
<div class="e-head">
  <header class="wrap e-top"><span class="e-logo">Высота</span><span>Агентство недвижимости</span></header>
  <section class="wrap e-hero">
    <div>
      <h1>Квартиры, в&nbsp;которых хочется остаться</h1>
      <p>Продаём и сдаём квартиры в четырёх районах. На карте подсвечены дома, где прямо сейчас есть наши объекты: наведите и посмотрите цену.</p>
      <a class="e-btn" href="#estate" data-e-scroll>Смотреть квартиры</a>
    </div>
    <div class="e-city" id="e-city"><canvas aria-label="Трёхмерная карта района. Подсвечены дома, где есть квартиры в продаже и в аренду."></canvas><div class="e-tip" id="e-tip" hidden></div><div class="e-legend"><span><i style="--c:#f1cf8f"></i>Продаётся</span><span><i style="--c:#7fe3c4"></i>Сдаётся</span><span id="e-city-hint">Наведите на дом</span></div></div>
  </section>
</div>
<section class="wrap e-sec" id="e-flats">
  <h2>Квартиры</h2>
  <p>Девять объектов: шесть в продаже и три в аренду. У каждого есть фото и планировка.</p>
  <div class="e-filter-row"><div class="e-filter" id="e-deal"></div><div class="e-filter" id="e-filter"></div></div>
  <div class="e-list" id="e-list"></div>
</section>
<section class="wrap e-sec">
  <h2>Ипотечный калькулятор</h2>
  <p>Двигайте ползунки и смотрите платёж. Ставку подставьте ту, что предлагает ваш банк.</p>
  <div class="e-calc">
    <div>
      <div class="e-row"><label for="e-price">Стоимость квартиры <b id="e-price-v"></b></label><input type="range" id="e-price" min="3" max="30" step="0.1" value="9.4"></div>
      <div class="e-row"><label for="e-down">Первый взнос <b id="e-down-v"></b></label><input type="range" id="e-down" min="10" max="90" step="1" value="30"></div>
      <div class="e-row"><label for="e-term">Срок <b id="e-term-v"></b></label><input type="range" id="e-term" min="1" max="30" step="1" value="20"></div>
      <div class="e-row"><label for="e-rate">Ставка <b id="e-rate-v"></b></label><input type="range" id="e-rate" min="1" max="25" step="0.1" value="12"></div>
    </div>
    <div class="e-pay" aria-live="polite"><small>Платёж в месяц</small><big id="e-pay"></big>
      <dl><div><dt>Сумма кредита</dt><dd id="e-loan"></dd></div><div><dt>Переплата за весь срок</dt><dd id="e-over"></dd></div></dl>
    </div>
  </div>
</section>
<section class="wrap e-sec">
  <h2>Чем помогаем</h2>
  <ul class="e-serv" style="margin-top:26px">
    <li><h3>Подбор</h3><p>Собираем варианты под бюджет, район и привычки. Возим на просмотры.</p></li>
    <li><h3>Проверка</h3><p>Выписка из ЕГРН, история собственников, долги, перепланировки.</p></li>
    <li><h3>Сделка</h3><p>Договор, безопасные расчёты через аккредитив, регистрация.</p></li>
    <li><h3>Продажа</h3><p>Оцениваем, снимаем, показываем покупателям и торгуемся за вас.</p></li>
  </ul>
  <footer class="e-foot"><span>Демо-сайт агентства недвижимости. Компания и объекты вымышленные.</span><a href="#coffee">Следующее демо: кофейня «Зерно и пар»</a></footer>
</section>
`,
mount: function (root) {
  /* планировки: стены (w), перегородки (t), двери (d) */
  var PLANS = {
    0: '<path class="w" d="M10 10h220v140H10z"/><path class="t" d="M10 105h70M110 105h40v45M150 105h80"/><path class="d" d="M80 105a30 30 0 0 1 30-30"/><text x="92" y="60">Комната-кухня 21,4</text><text x="30" y="132">Прихожая</text><text x="168" y="132">Санузел</text>',
    1: '<path class="w" d="M10 10h220v140H10z"/><path class="t" d="M130 10v70M130 110v40M10 100h60M100 100h30"/><path class="d" d="M130 80a30 30 0 0 0-30 30M70 100a30 30 0 0 1 30-30"/><text x="42" y="58">Спальня 14,2</text><text x="152" y="70">Кухня 11,8</text><text x="24" y="130">Холл</text>',
    2: '<path class="w" d="M10 10h220v140H10z"/><path class="t" d="M95 10v60M95 100v50M165 10v60M165 100v50M10 85h55M195 85h35"/><path class="d" d="M95 70a30 30 0 0 0-30 30M165 70a30 30 0 0 1 30 30"/><text x="20" y="50">Спальня 13</text><text x="103" y="50">Гостиная 18</text><text x="174" y="50">Кухня 12</text><text x="110" y="130">Холл</text>',
    3: '<path class="w" d="M10 10h220v140H10z"/><path class="t" d="M80 10v55M150 10v55M10 65h40M110 65h40M180 65h50M80 95v55M150 95v55"/><path class="d" d="M50 65a30 30 0 0 1 30 30M150 65a30 30 0 0 1 30-30"/><text x="18" y="42">Спальня 12</text><text x="88" y="42">Спальня 14</text><text x="160" y="42">Детская 11</text><text x="20" y="128">Кухня 13</text><text x="90" y="128">Холл</text><text x="158" y="128">Гостиная 20</text>'
  };
  var FLATS = [
    { r: 0, deal: 'sale', name: 'Студия у парка', area: '28,6', floor: '7 из 16', where: 'Зелёный квартал', price: 5.2, img: 'f1' },
    { r: 1, deal: 'sale', name: 'Однокомнатная с эркером', area: '41,3', floor: '4 из 9', where: 'Старый центр', price: 7.9, img: 'f2' },
    { r: 2, deal: 'sale', name: 'Двухкомнатная с видом на реку', area: '63,8', floor: '12 из 18', where: 'Набережная', price: 12.4, img: 'f3' },
    { r: 1, deal: 'rent', name: 'Однокомнатная у метро', area: '38,9', floor: '2 из 12', where: 'Северный', rent: 48, img: 'f4' },
    { r: 3, deal: 'sale', name: 'Трёхкомнатная для семьи', area: '86,5', floor: '9 из 14', where: 'Зелёный квартал', price: 15.8, img: 'f5' },
    { r: 2, deal: 'sale', name: 'Двухкомнатная с террасой', area: '71,2', floor: '5 из 5', where: 'Старый центр', price: 14.9, img: 'f6' },
    { r: 0, deal: 'rent', name: 'Студия с кухней-нишей', area: '31,0', floor: '10 из 16', where: 'Набережная', rent: 39, img: 'f7' },
    { r: 2, deal: 'rent', name: 'Двухкомнатная с панорамой', area: '68,4', floor: '15 из 18', where: 'Набережная', rent: 85, img: 'f8' },
    { r: 3, deal: 'sale', name: 'Трёхкомнатная в сданном доме', area: '92,0', floor: '3 из 12', where: 'Северный', price: 13.6, img: 'f9' }
  ];
  var RN = ['Студия', '1 комната', '2 комнаты', '3 комнаты'];
  var list = root.querySelector('#e-list'), fbox = root.querySelector('#e-filter'), dbox = root.querySelector('#e-deal'), priceIn = root.querySelector('#e-price');
  var fRooms = -1, fDeal = '';
  function priceText(x) { return x.deal === 'rent' ? x.rent + ' 000 ₽ в месяц' : x.price.toLocaleString('ru-RU') + ' млн ₽'; }
  function draw() {
    list.innerHTML = FLATS.map(function (x, i) {
      if ((fRooms >= 0 && x.r !== fRooms) || (fDeal && x.deal !== fDeal)) return '';
      var sub = x.deal === 'rent' ? 'Залог один месяц, без комиссии' : Math.round(x.price * 1e6 / parseFloat(x.area.replace(',', '.')) / 1000).toLocaleString('ru-RU') + ' тыс. ₽ за м²';
      return '<article class="e-flat" data-i="' + i + '"><div class="e-media"><span class="e-tag ' + x.deal + '">' + (x.deal === 'rent' ? 'Аренда' : 'Продажа') + '</span><img src="img/estate/' + x.img + '.webp" alt="' + x.name + ', интерьер" loading="lazy" decoding="async"><div class="e-plan"><svg viewBox="0 0 240 160" role="img" aria-label="Планировка: ' + RN[x.r] + '">' + PLANS[x.r] + '</svg></div><button class="e-toggle">Планировка</button></div><div class="e-info"><h3>' + x.name + '</h3><p>' + x.area + ' м², этаж ' + x.floor + ', ' + x.where + '</p><b>' + priceText(x) + '</b><small>' + sub + '</small></div></article>';
    }).join('');
  }
  list.addEventListener('click', function (e) {
    var t = e.target.closest('.e-toggle'); if (!t) return;
    var on = t.closest('.e-flat').classList.toggle('plan'); t.textContent = on ? 'Фото' : 'Планировка';
  });
  function chips(box, items, cur, set) {
    items.forEach(function (it) {
      var b = document.createElement('button'); b.textContent = it[0]; b.setAttribute('aria-pressed', it[1] === cur);
      b.onclick = function () { box.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); set(it[1]); draw(); };
      box.appendChild(b);
    });
  }
  chips(dbox, [['Все', ''], ['Купить', 'sale'], ['Снять', 'rent']], '', function (v) { fDeal = v; });
  chips(fbox, [['Любая', -1]].concat(RN.map(function (n, i) { return [n, i]; })), -1, function (v) { fRooms = v; });
  draw();

  /* ----- 3D-район: дома с нашими объектами светятся ----- */
  var city = (function () {
    var T = window.THREE, wrap = root.querySelector('#e-city'), canvas = wrap.querySelector('canvas'), tip = root.querySelector('#e-tip');
    if (PORTF.touch) root.querySelector('#e-city-hint').textContent = 'Нажмите на дом';
    if (!T) return null;
    var renderer; try { renderer = new T.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true }); } catch (e) { return null; }
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, PORTF.touch ? 1.5 : 2));
    var scene = new T.Scene(), cam = new T.PerspectiveCamera(32, 1, .1, 80);
    cam.position.set(0, 15, 24); cam.lookAt(0, .4, 0);
    scene.fog = new T.Fog(0x10291f, 26, 44);
    var world = new T.Group(); scene.add(world);
    var rnd = (function (s) { return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; })(21);

    var ground = new T.Mesh(new T.CircleGeometry(9.6, 64), new T.MeshStandardMaterial({ color: 0x0c2119, roughness: 1 })); ground.rotation.x = -Math.PI / 2; world.add(ground);
    // окна: одна маленькая текстура, повторяется по высоте дома
    function winTex(seed) {
      var c = document.createElement('canvas'); c.width = 32; c.height = 32; var x = c.getContext('2d'), r = (function (s) { return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; })(seed);
      x.fillStyle = '#000'; x.fillRect(0, 0, 32, 32);
      for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) { x.fillStyle = r() < .3 ? '#ffd9a0' : '#12241d'; x.fillRect(i * 8 + 2, j * 8 + 2, 4, 5); }
      var t = new T.CanvasTexture(c); t.wrapS = t.wrapT = T.RepeatWrapping; t.magFilter = T.NearestFilter; return t;
    }
    var texA = winTex(3), texB = winTex(9);
    var box = new T.BoxGeometry(1, 1, 1); box.translate(0, .5, 0);
    var edge = new T.EdgesGeometry(box), edgeMat = new T.LineBasicMaterial({ color: 0x2f6350, transparent: true, opacity: .7 });
    var roofMat = new T.MeshStandardMaterial({ color: 0x24503f, roughness: .9 });
    var N = 7, STEP = 2.25, lots = [], picks = [], hot = [];
    for (var i = 0; i < N; i++) for (var j = 0; j < N; j++) {
      var x = (i - (N - 1) / 2) * STEP, z = (j - (N - 1) / 2) * STEP, d = Math.hypot(x, z);
      if (d > 8.2) continue;
      lots.push({ x: x, z: z, d: d });
    }
    // объекты ставим в разные кварталы
    var hotIdx = [3, 8, 12, 16, 20, 24, 29, 33, 37].map(function (k) { return k % lots.length; });
    lots.forEach(function (l, k) {
      var fi = hotIdx.indexOf(k), h = fi >= 0 ? 1.8 + rnd() * 1.6 : (rnd() < .12 ? 0 : .5 + rnd() * rnd() * 4.2 * (1 - l.d / 12));
      if (!h) { // сквер
        var park = new T.Mesh(new T.CircleGeometry(.75, 20), new T.MeshStandardMaterial({ color: 0x1d5a3c, roughness: 1 })); park.rotation.x = -Math.PI / 2; park.position.set(l.x, .01, l.z); world.add(park); return;
      }
      var w = 1.05 + rnd() * .55, dp = 1.05 + rnd() * .55, tex = (k % 2 ? texA : texB).clone(); tex.needsUpdate = true; tex.repeat.set(Math.round(w * 2), Math.max(1, Math.round(h * 1.6)));
      var mat = new T.MeshStandardMaterial({ color: 0x1a4133, roughness: .85, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: .55 });
      var b = new T.Mesh(box, [mat, mat, roofMat, roofMat, mat, mat]); b.scale.set(w, h, dp); b.position.set(l.x, 0, l.z); world.add(b);
      var e = new T.LineSegments(edge, edgeMat); e.scale.copy(b.scale); e.position.copy(b.position); world.add(e);
      if (fi >= 0) {
        var f = FLATS[fi], col = f.deal === 'rent' ? 0x7fe3c4 : 0xf1cf8f;
        var glow = new T.MeshBasicMaterial({ color: col, transparent: true, opacity: .9 });
        var shell = new T.Mesh(box, new T.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: .5, roughness: .6 })); shell.scale.set(w + .04, h + .02, dp + .04); shell.position.copy(b.position); world.add(shell);
        var he = new T.LineSegments(edge, new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: .8 })); he.scale.copy(shell.scale); he.position.copy(b.position); world.add(he);
        var beam = new T.Mesh(new T.CylinderGeometry(.02, .02, 2, 6), new T.MeshBasicMaterial({ color: col, transparent: true, opacity: .55, blending: T.AdditiveBlending, depthWrite: false })); beam.position.set(l.x, h + 1, l.z); world.add(beam);
        var pin = new T.Mesh(new T.SphereGeometry(.13, 12, 12), glow); pin.position.set(l.x, h + 2, l.z); world.add(pin);
        var halo = new T.Mesh(new T.RingGeometry(.95, 1.08, 40), new T.MeshBasicMaterial({ color: col, transparent: true, opacity: .7, side: T.DoubleSide, depthWrite: false })); halo.rotation.x = -Math.PI / 2; halo.position.set(l.x, .03, l.z); world.add(halo);
        shell.userData = { i: fi, top: h + 2, halo: halo, pin: pin, mat: shell.material, col: col }; picks.push(shell); hot.push(shell);
      }
    });
    scene.add(new T.HemisphereLight(0xbfe8d6, 0x07140f, .9));
    var sun = new T.DirectionalLight(0xfff0d0, .9); sun.position.set(6, 10, 4); scene.add(sun);

    function resize() { var w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return; renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); kick(); }
    var ro = window.ResizeObserver ? new ResizeObserver(resize) : null; if (ro) ro.observe(canvas);

    var rot = .6, vel = .0016, drag = false, moved = 0, lx = 0, raf = 0, alive = true, vis = true, last = 0, sel = null;
    var ray = new T.Raycaster(), m2 = new T.Vector2(), v3 = new T.Vector3();
    function pick(e) {
      var r = canvas.getBoundingClientRect(); m2.set((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(m2, cam); var hit = ray.intersectObjects(picks, false)[0]; return hit ? hit.object : null;
    }
    function select(o) {
      sel = o; canvas.style.cursor = o ? 'pointer' : '';
      if (!o) { tip.hidden = true; return; }
      var f = FLATS[o.userData.i]; tip.style.setProperty('--c', '#' + o.userData.col.toString(16));
      tip.innerHTML = '<b>' + f.name + '</b>' + f.where + ', ' + f.area + ' м²<br><em>' + (f.deal === 'rent' ? 'Сдаётся: ' : 'Продаётся: ') + priceText(f) + '</em>'; tip.hidden = false; place();
    }
    function place() {
      if (!sel) return; v3.set(sel.position.x, sel.userData.top, sel.position.z).applyMatrix4(world.matrixWorld).project(cam);
      tip.style.left = Math.max(125, Math.min(canvas.clientWidth - 125, (v3.x + 1) / 2 * canvas.clientWidth)) + 'px'; tip.style.top = Math.max(96, (1 - v3.y) / 2 * canvas.clientHeight) + 'px';
    }
    function goCard(o) {
      var f = o.userData.i; if ((fRooms >= 0 && FLATS[f].r !== fRooms) || (fDeal && FLATS[f].deal !== fDeal)) return;
      var card = list.querySelector('[data-i="' + f + '"]'); if (!card) return;
      card.scrollIntoView({ behavior: PORTF.reduce ? 'auto' : 'smooth', block: 'center' }); card.classList.add('hit'); setTimeout(function () { card.classList.remove('hit'); }, 2200);
    }
    canvas.addEventListener('pointerdown', function (e) { drag = true; moved = 0; lx = e.clientX; try { canvas.setPointerCapture(e.pointerId); } catch (x) {} });
    canvas.addEventListener('pointermove', function (e) {
      if (drag) { var dx = e.clientX - lx; moved += Math.abs(dx); vel = dx * .006; rot += vel; lx = e.clientX; kick(); }
      else if (!PORTF.touch) { var o = pick(e); if (o !== sel) select(o); }
    });
    canvas.addEventListener('pointerup', function (e) {
      drag = false; if (moved > 6) return;
      var o = pick(e); if (PORTF.touch) { if (o && o === sel) goCard(o); else select(o); } else if (o) goCard(o);
    });
    canvas.addEventListener('pointercancel', function () { drag = false; });
    canvas.addEventListener('pointerleave', function () { if (!PORTF.touch) select(null); });

    function frame(t) {
      raf = 0; if (!alive || !vis || document.hidden) return;
      var dt = Math.min(50, t - last || 16) / 16.67; last = t;
      if (!drag && !sel) { rot += vel * dt; vel += (.0016 - vel) * .03 * dt; }
      world.rotation.y = rot; world.updateMatrixWorld();
      var p = .5 + .5 * Math.sin(t * .003);
      for (var k = 0; k < hot.length; k++) { var u = hot[k].userData, on = hot[k] === sel; u.mat.emissiveIntensity = on ? .95 : .35 + .3 * p; u.halo.scale.setScalar(on ? 1.5 : 1 + .25 * p); u.halo.material.opacity = on ? .95 : .75 - .45 * p; u.pin.position.y = u.top + .12 * Math.sin(t * .003 + k); }
      place(); renderer.render(scene, cam);
      if (!PORTF.reduce || drag) raf = requestAnimationFrame(frame);
    }
    function kick() { if (!raf && alive) { last = 0; raf = requestAnimationFrame(frame); } }
    var io = window.IntersectionObserver ? new IntersectionObserver(function (en) { vis = en[0].isIntersecting; kick(); }) : null; if (io) io.observe(canvas);
    document.addEventListener('visibilitychange', kick);
    if (PORTF.reduce) canvas.addEventListener('pointermove', kick);
    resize(); kick();
    return function () {
      alive = false; cancelAnimationFrame(raf); if (ro) ro.disconnect(); if (io) io.disconnect(); document.removeEventListener('visibilitychange', kick);
      scene.traverse(function (o) { if (o.geometry) o.geometry.dispose(); [].concat(o.material || []).forEach(function (m) { if (m.emissiveMap) m.emissiveMap.dispose(); m.dispose(); }); });
      renderer.dispose(); try { renderer.forceContextLoss(); } catch (e) {}
    };
  })();

  /* аннуитетный платёж */
  var $ = function (s) { return root.querySelector(s); }, fmt = function (n) { return Math.round(n).toLocaleString('ru-RU') + ' ₽'; };
  function calc() {
    var P = +priceIn.value * 1e6, d = +$('#e-down').value, y = +$('#e-term').value, r = +$('#e-rate').value;
    var loan = P * (1 - d / 100), m = r / 1200, n = y * 12, pay = loan * m / (1 - Math.pow(1 + m, -n));
    $('#e-price-v').textContent = (+priceIn.value).toLocaleString('ru-RU') + ' млн ₽';
    $('#e-down-v').textContent = d + '%, ' + fmt(P * d / 100);
    $('#e-term-v').textContent = y + ' ' + (y % 10 === 1 && y !== 11 ? 'год' : y % 10 >= 2 && y % 10 <= 4 && (y < 12 || y > 14) ? 'года' : 'лет');
    $('#e-rate-v').textContent = r.toLocaleString('ru-RU') + '%';
    $('#e-pay').textContent = fmt(pay); $('#e-loan').textContent = fmt(loan); $('#e-over').textContent = fmt(pay * n - loan);
  }
  root.querySelectorAll('.e-calc input').forEach(function (el) { el.addEventListener('input', calc); });
  calc();
  root.querySelector('[data-e-scroll]').addEventListener('click', function (e) { e.preventDefault(); root.querySelector('#e-flats').scrollIntoView({ behavior: PORTF.reduce ? 'auto' : 'smooth' }); });
  return function () { if (city) city(); };
}
});
