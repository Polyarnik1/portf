/* Остриё: барбершоп. Плакатная типографика, крафт, столб цирюльника. */
PORTF.register('barber', {
css: `
.s-barber{--bone:#e9e1cf;--ink:#15130f;--red:#c2311d;--navy:#1e3a5f;--paper:#f6f1e4;
  background:var(--bone);color:var(--ink);font:400 17px/1.55 'Golos Text',system-ui,sans-serif}
.s-barber h1,.s-barber h2,.s-barber h3{font-family:'Oswald',Impact,sans-serif;font-weight:700;text-transform:uppercase;line-height:.95;margin:0}
.s-barber .wrap{max-width:1240px;margin:0 auto;padding-inline:clamp(18px,4.5vw,56px)}
.b-pole{height:18px;background:repeating-linear-gradient(-45deg,var(--red) 0 16px,var(--paper) 16px 32px,var(--navy) 32px 48px,var(--paper) 48px 64px);background-size:90.5px 100%;animation:b-pole 3s linear infinite;border-bottom:3px solid var(--ink)}
@keyframes b-pole{to{background-position:90.5px 0}}
.b-top{display:flex;justify-content:space-between;align-items:center;padding-top:16px;padding-bottom:16px;font:500 15px/1 'Oswald',sans-serif;text-transform:uppercase;letter-spacing:.06em;border-bottom:3px solid var(--ink)}
.b-hero{padding-top:clamp(18px,3vw,36px);padding-bottom:clamp(40px,6vw,80px)}
.b-hero h1{font-size:clamp(5rem,26.5vw,21rem);letter-spacing:-.02em;margin-left:-.04em;white-space:nowrap;padding-top:.1em}
.b-hero-row{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:end;border-top:3px solid var(--ink);padding-top:22px;margin-top:8px}
.b-hero p{font-size:clamp(1.05rem,1.8vw,1.35rem);max-width:28em}
.b-btn{display:inline-block;padding:18px 34px;background:var(--red);color:var(--paper);font:700 20px/1 'Oswald',sans-serif;text-transform:uppercase;letter-spacing:.05em;text-decoration:none;border:3px solid var(--ink);box-shadow:6px 6px 0 var(--ink);transition:transform .12s,box-shadow .12s}
.b-btn:hover{transform:translate(3px,3px);box-shadow:3px 3px 0 var(--ink)}
.b-btn[disabled]{background:#b9b09b;box-shadow:none;cursor:not-allowed;transform:none}
.b-photo{margin:clamp(22px,4vw,44px) 0 0;border:3px solid var(--ink);position:relative;overflow:hidden;aspect-ratio:21/9;background:var(--ink)}
.b-photo img{display:block;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.15)}
.b-photo figcaption{position:absolute;left:0;bottom:0;background:var(--red);color:var(--paper);font:700 clamp(1rem,2.4vw,1.6rem)/1 'Oswald',sans-serif;text-transform:uppercase;letter-spacing:.05em;padding:12px 18px;border-top:3px solid var(--ink);border-right:3px solid var(--ink)}
.b-gal{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:clamp(120px,17vw,230px);gap:10px}
.b-gal figure{margin:0;border:3px solid var(--ink);overflow:hidden;background:var(--ink)}
.b-gal img{display:block;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.12);transition:filter .5s,transform .8s cubic-bezier(.2,.7,.2,1)}
.b-gal figure:hover img{filter:none;transform:scale(1.05)}
.b-gal .tall{grid-row:span 2}.b-gal .wide{grid-column:span 2}
.b-sec{padding-top:clamp(48px,7vw,96px);padding-bottom:clamp(48px,7vw,96px)}
.b-sec h2{font-size:clamp(2.4rem,7vw,5rem);margin-bottom:28px}
.b-dark{background:var(--ink);color:var(--bone)}
.b-price{border-top:3px solid currentColor}
.b-price li{display:grid;grid-template-columns:1fr auto auto;gap:8px 28px;align-items:baseline;padding:18px 0;border-bottom:1px solid rgba(233,225,207,.25);transition:padding .25s,background .25s}
.b-price li:hover{padding-left:16px;background:rgba(233,225,207,.06)}
.b-price b{font:500 clamp(1.3rem,3vw,2rem)/1.1 'Oswald',sans-serif;text-transform:uppercase}
.b-price small{display:block;font:400 15px/1.4 'Golos Text',sans-serif;text-transform:none;opacity:.65;margin-top:4px}
.b-price span{opacity:.6;font-size:15px;white-space:nowrap}
.b-price em{font:700 clamp(1.3rem,3vw,2rem)/1 'Oswald',sans-serif;font-style:normal;color:#f0b9a8;white-space:nowrap}
.b-crew{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.b-man{border:3px solid var(--ink);background:var(--paper);padding:20px;display:grid;gap:10px}
.b-man .mono{aspect-ratio:1.1;overflow:hidden;background:var(--ink);border:3px solid var(--ink)}
.b-man .mono img{display:block;width:100%;height:100%;object-fit:cover;object-position:50% 25%;filter:grayscale(1) contrast(1.1);transition:filter .5s}
.b-man:hover .mono img{filter:none}
.b-man h3{font-size:1.7rem}
.b-man p{font-size:15.5px}
.b-book{display:grid;grid-template-columns:1.2fr .8fr;gap:clamp(20px,4vw,48px);align-items:start}
.b-step{margin-bottom:22px}
.b-step h3{font-size:1.15rem;font-weight:500;letter-spacing:.05em;margin-bottom:10px}
.b-chips{display:flex;flex-wrap:wrap;gap:8px}
.b-chips button{padding:11px 16px;border:2px solid var(--ink);background:var(--paper);font-weight:600;font-size:15px;transition:.15s;font-variant-numeric:tabular-nums}
.b-chips button:hover:not(:disabled){background:#fff}
.b-chips button[aria-pressed=true]{background:var(--ink);color:var(--paper)}
.b-chips button:disabled{opacity:.35;text-decoration:line-through;cursor:not-allowed}
.b-ticket{position:sticky;top:20px;border:3px solid var(--ink);background:var(--paper);padding:24px;display:grid;gap:14px}
.b-ticket h3{font-size:1.6rem}
.b-ticket dl{margin:0;display:grid;gap:8px}
.b-ticket dl div{display:flex;justify-content:space-between;gap:16px;border-bottom:1px dashed #b9b09b;padding-bottom:8px}
.b-ticket dt{opacity:.6}.b-ticket dd{margin:0;font-weight:600;text-align:right}
.b-ok{background:var(--navy);color:var(--paper);padding:14px;font-size:15px}
.b-foot{border-top:3px solid var(--ink);padding-top:22px;padding-bottom:16px;display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;font-size:14px}
@media(max-width:820px){.b-hero-row,.b-book{grid-template-columns:1fr}.b-crew{grid-template-columns:1fr}.b-man{grid-template-columns:120px 1fr;align-items:center;column-gap:16px}.b-man .mono{grid-row:1/3;aspect-ratio:1}.b-gal{grid-template-columns:1fr 1fr;grid-auto-rows:34vw}.b-photo{aspect-ratio:4/3}.b-price li{grid-template-columns:1fr auto}.b-price span{grid-column:1;grid-row:2}.b-ticket{position:static}.b-btn{text-align:center}}
`,
html: `
<div class="b-pole" aria-hidden="true"></div>
<header class="wrap b-top"><span>Барбершоп</span><span>Каждый день 10–22</span></header>
<section class="wrap b-hero">
  <h1>Остриё</h1>
  <div class="b-hero-row">
    <p>Мужские стрижки, борода и бритьё опасной бритвой. Работаем только по записи, поэтому мастер ждёт вас, а не вы мастера.</p>
    <a class="b-btn" href="#barber" data-b-scroll>Выбрать время</a>
  </div>
  <figure class="b-photo"><img src="img/barber/hero.webp" alt="Зал барбершопа: кресла у кирпичной стены" width="1600" height="1063" fetchpriority="high"><figcaption>Три кресла, кирпич и хороший свет</figcaption></figure>
</section>
<section class="b-dark"><div class="wrap b-sec">
  <h2>Цены</h2>
  <ul class="b-price">
    <li><b>Стрижка<small>Ножницы и машинка, мытьё, укладка</small></b><span>60 мин</span><em>1 800 ₽</em></li>
    <li><b>Стрижка машинкой<small>Одна или две насадки</small></b><span>30 мин</span><em>1 100 ₽</em></li>
    <li><b>Борода<small>Форма, контур, масло</small></b><span>30 мин</span><em>1 000 ₽</em></li>
    <li><b>Стрижка и борода<small>Всё сразу</small></b><span>90 мин</span><em>2 500 ₽</em></li>
    <li><b>Бритьё опасной бритвой<small>Горячее полотенце, помазок</small></b><span>45 мин</span><em>1 600 ₽</em></li>
    <li><b>Отец и сын<small>Две стрижки, ребёнку до 12 лет</small></b><span>90 мин</span><em>2 600 ₽</em></li>
  </ul>
</div></section>
<section class="wrap b-sec" style="padding-bottom:0">
  <h2>В зале</h2>
  <div class="b-gal">
    <figure class="wide"><img src="img/barber/g1.webp" alt="Мастер оформляет бороду" width="900" height="600" loading="lazy" decoding="async"></figure>
    <figure class="tall"><img src="img/barber/g4.webp" alt="Бритьё опасной бритвой" width="900" height="1355" loading="lazy" decoding="async"></figure>
    <figure><img src="img/barber/g3.webp" alt="Кожаное барберское кресло" width="900" height="600" loading="lazy" decoding="async"></figure>
    <figure><img src="img/barber/g2.webp" alt="Стрижка машинкой" width="900" height="600" loading="lazy" decoding="async"></figure>
    <figure><img src="img/barber/g7.webp" alt="Инструменты мастера: машинки, ножницы, расчёска" width="900" height="600" loading="lazy" decoding="async"></figure>
    <figure class="tall"><img src="img/barber/g6.webp" alt="Фейд и борода" width="900" height="1348" loading="lazy" decoding="async"></figure>
    <figure><img src="img/barber/g5.webp" alt="Пена и помазок перед бритьём" width="900" height="600" loading="lazy" decoding="async"></figure>
    <figure class="wide"><img src="img/barber/g8.webp" alt="Укладка после стрижки" width="900" height="600" loading="lazy" decoding="async"></figure>
  </div>
</section>
<section class="wrap b-sec">
  <h2>Мастера</h2>
  <div class="b-crew">
    <article class="b-man"><div class="mono"><img src="img/barber/m1.webp" alt="Артём за работой" width="700" height="931" loading="lazy" decoding="async"></div><h3>Артём</h3><p>Фейды и короткие формы. Любит чёткие линии и аккуратные переходы.</p></article>
    <article class="b-man"><div class="mono"><img src="img/barber/m2.webp" alt="Давид за работой" width="700" height="1050" loading="lazy" decoding="async"></div><h3>Давид</h3><p>Борода и бритьё. Соберёт форму бороды под овал лица.</p></article>
    <article class="b-man"><div class="mono"><img src="img/barber/m3.webp" alt="Глеб за работой" width="700" height="465" loading="lazy" decoding="async"></div><h3>Глеб</h3><p>Классика на ножницах. Длинные стрижки и укладки.</p></article>
  </div>
</section>
<section class="wrap b-sec" id="b-book" style="padding-top:0">
  <h2>Запись</h2>
  <div class="b-book">
    <div>
      <div class="b-step"><h3>Услуга</h3><div class="b-chips" data-g="svc"></div></div>
      <div class="b-step"><h3>Мастер</h3><div class="b-chips" data-g="man"></div></div>
      <div class="b-step"><h3>День</h3><div class="b-chips" data-g="day"></div></div>
      <div class="b-step"><h3>Время</h3><div class="b-chips" data-g="time"></div></div>
    </div>
    <aside class="b-ticket" aria-live="polite">
      <h3>Ваша запись</h3>
      <dl id="b-sum"></dl>
      <button class="b-btn" id="b-go" disabled>Записаться</button>
      <div class="b-ok" id="b-ok" hidden></div>
    </aside>
  </div>
</section>
<footer class="wrap b-foot"><span>Демо-сайт барбершопа. Заведение вымышленное. Фото: Unsplash.</span><a href="#tattoo">Следующее демо: тату-салон «Тушь»</a></footer>
`,
mount: function (root) {
  var SVC = [['Стрижка', 1800], ['Машинкой', 1100], ['Борода', 1000], ['Стрижка и борода', 2500], ['Бритьё', 1600]];
  var MEN = ['Артём', 'Давид', 'Глеб', 'Любой'];
  var WD = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'], MO = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  var days = []; for (var i = 0; i < 7; i++) { var d = new Date(); d.setDate(d.getDate() + i); days.push(i === 0 ? 'Сегодня' : i === 1 ? 'Завтра' : WD[d.getDay()] + ', ' + d.getDate() + ' ' + MO[d.getMonth()]); }
  var TIMES = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00', '20:30'];
  var st = { svc: null, man: null, day: null, time: null };
  var groups = {}; root.querySelectorAll('[data-g]').forEach(function (g) { groups[g.dataset.g] = g; });
  var sum = root.querySelector('#b-sum'), goBtn = root.querySelector('#b-go'), ok = root.querySelector('#b-ok');
  function busy(t) { // занятые слоты зависят от мастера и дня, чтобы выбор выглядел живым
    var k = (st.man || 0) * 7 + (st.day || 0) * 3 + t * 5; return (k * 2654435761 >>> 0) % 10 < 3;
  }
  function chips(g, items, key) {
    groups[g].innerHTML = '';
    items.forEach(function (label, i) {
      var b = document.createElement('button'); b.textContent = label; b.setAttribute('aria-pressed', st[key] === i);
      if (g === 'time' && busy(i)) { b.disabled = true; if (st.time === i) st.time = null; }
      b.onclick = function () { st[key] = i; ok.hidden = true; render(); };
      groups[g].appendChild(b);
    });
  }
  function render() {
    chips('svc', SVC.map(function (s) { return s[0] + ' ' + s[1].toLocaleString('ru-RU') + ' ₽'; }), 'svc');
    chips('man', MEN, 'man'); chips('day', days, 'day'); chips('time', TIMES, 'time');
    var rows = [['Услуга', st.svc != null ? SVC[st.svc][0] : 'не выбрана'], ['Мастер', st.man != null ? MEN[st.man] : 'не выбран'], ['Когда', st.day != null && st.time != null ? days[st.day] + ', ' + TIMES[st.time] : st.day != null ? days[st.day] + ', выберите время' : 'не выбрано'], ['К оплате', st.svc != null ? SVC[st.svc][1].toLocaleString('ru-RU') + ' ₽' : '0 ₽']];
    sum.innerHTML = rows.map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>'; }).join('');
    goBtn.disabled = !(st.svc != null && st.man != null && st.day != null && st.time != null);
  }
  goBtn.onclick = function () {
    ok.hidden = false;
    ok.textContent = 'Записали: ' + SVC[st.svc][0].toLowerCase() + ', ' + days[st.day].toLowerCase() + ' в ' + TIMES[st.time] + '. Это демо, настоящая запись никуда не отправлена.';
  };
  render();
  root.querySelector('[data-b-scroll]').addEventListener('click', function (e) { e.preventDefault(); root.querySelector('#b-book').scrollIntoView({ behavior: PORTF.reduce ? 'auto' : 'smooth' }); });
}
});
