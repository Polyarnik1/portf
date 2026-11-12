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
.e-hero{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(20px,5vw,70px);align-items:end;padding-top:clamp(24px,5vw,64px)}
.e-hero h1{font-size:clamp(2.3rem,5.8vw,4.8rem)}
.e-hero p{color:#b9c4bc;margin-top:22px;max-width:28em}
.e-btn{display:inline-block;margin:30px 0 clamp(36px,6vw,80px);padding:16px 30px;border:1px solid var(--brass);color:var(--stone);text-decoration:none;font-weight:600;letter-spacing:.02em;transition:.25s}
.e-btn:hover{background:var(--brass);color:var(--deep)}
.e-tower{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;padding:14px 14px 0;background:var(--deep);border:1px solid #23463a;border-bottom:0;max-width:420px;width:100%;justify-self:end;position:relative}
.e-tower::before{content:"";position:absolute;left:40%;right:40%;top:-26px;height:26px;border:1px solid #23463a;border-bottom:0;background:var(--deep)}
.e-tower i{aspect-ratio:.8;background:#16352b;transition:background 1.2s,box-shadow 1.2s}
.e-tower i.on{background:#f1cf8f;box-shadow:0 0 14px rgba(241,207,143,.55)}
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
@media(max-width:700px){.e-hero,.e-calc{grid-template-columns:1fr}.e-tower{justify-self:center;max-width:300px;grid-template-columns:repeat(6,1fr)}.e-btn{margin-bottom:36px}.e-list{grid-template-columns:1fr}.e-top span:last-child{display:none}}
@media(max-width:480px){.e-serv{grid-template-columns:1fr}.e-serv li{padding-left:0;border-right:0;border-top:1px solid #cfc9bb}.e-serv li:first-child{border-top:0}}
`,
html: `
<div class="e-head">
  <header class="wrap e-top"><span class="e-logo">Высота</span><span>Агентство недвижимости</span></header>
  <section class="wrap e-hero">
    <div>
      <h1>Квартиры, в&nbsp;которых хочется остаться</h1>
      <p>Подбираем жильё под ваш уклад, проверяем документы и ведём сделку до ключей. Показываем только то, что видели сами.</p>
      <a class="e-btn" href="#estate" data-e-scroll>Смотреть квартиры</a>
    </div>
    <div class="e-tower" id="e-tower" aria-hidden="true"></div>
  </section>
</div>
<section class="wrap e-sec" id="e-flats">
  <h2>Квартиры в продаже</h2>
  <p>Шесть объектов с планировками. Отфильтруйте по числу комнат.</p>
  <div class="e-filter" id="e-filter"></div>
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
  /* башня: окна зажигаются и гаснут */
  var tower = root.querySelector('#e-tower'), wins = [];
  for (var i = 0; i < 63; i++) { var w = document.createElement('i'); if ((i * 7 + 3) % 5 < 2) w.className = 'on'; tower.appendChild(w); wins.push(w); }
  var tick = PORTF.reduce ? 0 : setInterval(function () { wins[Math.floor(Math.random() * wins.length)].classList.toggle('on'); }, 450);

  /* планировки: стены (w), перегородки (t), двери (d) */
  var PLANS = {
    0: '<path class="w" d="M10 10h220v140H10z"/><path class="t" d="M10 105h70M110 105h40v45M150 105h80"/><path class="d" d="M80 105a30 30 0 0 1 30-30"/><text x="92" y="60">Комната-кухня 21,4</text><text x="30" y="132">Прихожая</text><text x="168" y="132">Санузел</text>',
    1: '<path class="w" d="M10 10h220v140H10z"/><path class="t" d="M130 10v70M130 110v40M10 100h60M100 100h30"/><path class="d" d="M130 80a30 30 0 0 0-30 30M70 100a30 30 0 0 1 30-30"/><text x="42" y="58">Спальня 14,2</text><text x="152" y="70">Кухня 11,8</text><text x="24" y="130">Холл</text>',
    2: '<path class="w" d="M10 10h220v140H10z"/><path class="t" d="M95 10v60M95 100v50M165 10v60M165 100v50M10 85h55M195 85h35"/><path class="d" d="M95 70a30 30 0 0 0-30 30M165 70a30 30 0 0 1 30 30"/><text x="20" y="50">Спальня 13</text><text x="103" y="50">Гостиная 18</text><text x="174" y="50">Кухня 12</text><text x="110" y="130">Холл</text>',
    3: '<path class="w" d="M10 10h220v140H10z"/><path class="t" d="M80 10v55M150 10v55M10 65h40M110 65h40M180 65h50M80 95v55M150 95v55"/><path class="d" d="M50 65a30 30 0 0 1 30 30M150 65a30 30 0 0 1 30-30"/><text x="18" y="42">Спальня 12</text><text x="88" y="42">Спальня 14</text><text x="160" y="42">Детская 11</text><text x="20" y="128">Кухня 13</text><text x="90" y="128">Холл</text><text x="158" y="128">Гостиная 20</text>'
  };
  var FLATS = [
    { r: 0, name: 'Студия у парка', area: '28,6', floor: '7 из 16', where: 'Зелёный квартал', price: 5.2 },
    { r: 1, name: 'Однокомнатная с эркером', area: '41,3', floor: '4 из 9', where: 'Старый центр', price: 7.9 },
    { r: 2, name: 'Двухкомнатная с видом на реку', area: '63,8', floor: '12 из 18', where: 'Набережная', price: 12.4 },
    { r: 1, name: 'Однокомнатная в сданном доме', area: '38,9', floor: '2 из 12', where: 'Северный', price: 6.6 },
    { r: 3, name: 'Трёхкомнатная для семьи', area: '86,5', floor: '9 из 14', where: 'Зелёный квартал', price: 15.8 },
    { r: 2, name: 'Двухкомнатная с террасой', area: '71,2', floor: '5 из 5', where: 'Старый центр', price: 14.9 }
  ];
  var RN = ['Студия', '1 комната', '2 комнаты', '3 комнаты'];
  var list = root.querySelector('#e-list'), fbox = root.querySelector('#e-filter'), priceIn = root.querySelector('#e-price');
  function draw(f) {
    list.innerHTML = FLATS.filter(function (x) { return f < 0 || x.r === f; }).map(function (x) {
      return '<article class="e-flat"><div class="e-plan"><svg viewBox="0 0 240 160" role="img" aria-label="Планировка: ' + RN[x.r] + '">' + PLANS[x.r] + '</svg></div><div class="e-info"><h3>' + x.name + '</h3><p>' + x.area + ' м², этаж ' + x.floor + ', ' + x.where + '</p><b>' + x.price.toLocaleString('ru-RU') + ' млн ₽</b><small>' + Math.round(x.price * 1e6 / parseFloat(x.area.replace(',', '.')) / 1000).toLocaleString('ru-RU') + ' тыс. ₽ за м²</small></div></article>';
    }).join('');
  }
  ['Все'].concat(RN).forEach(function (n, i) {
    var b = document.createElement('button'); b.textContent = n; b.setAttribute('aria-pressed', i === 0);
    b.onclick = function () { fbox.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); draw(i - 1); };
    fbox.appendChild(b);
  });
  draw(-1);

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
  return function () { clearInterval(tick); };
}
});
