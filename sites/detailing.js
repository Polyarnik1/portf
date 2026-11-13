/* Глянец: автодетейлинг. Структура, фото и калькулятор из blik-demo; палитра тёмная с ледяным голубым; 3D-машина из архива. */
PORTF.register('detailing', {
css: `
.s-detailing{--bg:#07090c;--panel:#0e1318;--card:#111820;--line:#1b2630;--ice:#46d6ff;--ice2:#8ee6ff;--steel:#c9d3da;--mute:#7f8c97;--ink:#eaf3f8;
  background:var(--bg);color:var(--ink);font:400 17px/1.6 'Onest',system-ui,sans-serif}
.s-detailing h1,.s-detailing h2,.s-detailing h3,.s-detailing .disp{font-family:'Tektur','Onest',sans-serif;font-weight:700;margin:0}
.s-detailing .wrap{max-width:1180px;margin:0 auto;padding-inline:clamp(18px,4vw,40px)}
.s-detailing img{display:block;max-width:100%}
.d-btn{display:inline-block;background:var(--ice);color:#04121a;padding:16px 30px;font:700 1rem 'Tektur',sans-serif;letter-spacing:.02em;text-decoration:none;clip-path:polygon(14px 0,100% 0,calc(100% - 14px) 100%,0 100%);transition:filter .25s,transform .25s;cursor:pointer}
.d-btn:hover{filter:brightness(1.12);transform:translateY(-2px)}
.d-btn.dark{background:#04121a;color:var(--ice)}
/* hero */
.d-hero{position:relative;min-height:min(100svh,900px);display:flex;flex-direction:column;overflow:hidden;isolation:isolate}
.d-hero>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 50%;z-index:-3;transform:scale(1.08);will-change:transform;filter:saturate(.85) hue-rotate(-8deg)}
.d-hero::before{content:"";position:absolute;inset:0;z-index:-2;background:linear-gradient(180deg,rgba(7,9,12,.7),rgba(7,9,12,.15) 42%,rgba(7,9,12,.92)),radial-gradient(70% 50% at 20% 100%,rgba(70,214,255,.18),transparent)}
.d-glare{position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(420px circle at var(--x,70%) var(--y,40%),rgba(190,240,255,.24),transparent 60%);mix-blend-mode:soft-light}
.d-sweep{position:absolute;top:-10%;bottom:-10%;width:22%;left:-30%;pointer-events:none;background:linear-gradient(100deg,transparent,rgba(200,245,255,.32),transparent);transform:skewX(-18deg);animation:d-sweep 2.2s cubic-bezier(.5,0,.2,1) .6s forwards}
@keyframes d-sweep{to{left:120%}}
.d-nav{display:flex;justify-content:space-between;align-items:center;padding:22px 0;font-weight:500;gap:16px}
.d-logo{font:900 1.5rem 'Tektur',sans-serif;letter-spacing:.06em}
.d-logo b{color:var(--ice)}
.d-links{display:flex;gap:26px;align-items:center;font-size:15px}
.d-links button:not(.d-btn){color:var(--steel)}.d-links button:not(.d-btn):hover{color:#fff}
.d-hero .in{margin-top:auto;padding-bottom:clamp(34px,7vw,80px)}
.d-hero h1{font-weight:700;font-size:clamp(2.7rem,9vw,7.6rem);line-height:.92;letter-spacing:-.03em;text-transform:uppercase}
.d-hero h1 .l{display:block;overflow:hidden;padding-bottom:.05em}
.d-hero h1 .l span{display:block;transform:translateY(110%);animation:d-up .9s cubic-bezier(.2,.8,.2,1) .15s forwards}
.d-hero h1 .l:nth-child(2) span{animation-delay:.27s;color:var(--ice);text-shadow:0 0 40px rgba(70,214,255,.45)}
@keyframes d-up{to{transform:none}}
.d-hero p{max-width:40ch;margin:26px 0 30px;font-size:1.15rem;color:var(--steel)}
/* sections */
.d-sec{padding:clamp(70px,10vw,130px) 0}
.d-sec h2{font-size:clamp(1.9rem,5vw,3.5rem);line-height:1.04;letter-spacing:-.02em;max-width:18ch;text-transform:uppercase}
.d-nums{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:50px;border-top:2px solid var(--line);padding-top:24px;color:var(--steel)}
.d-nums b{display:block;font:700 clamp(2.4rem,6vw,4.2rem)/1 'Tektur',sans-serif;color:var(--ice);text-shadow:0 0 30px rgba(70,214,255,.35);margin-bottom:6px}
/* services */
.d-svc-wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,5vw,70px);margin-top:50px;align-items:start}
.d-stage2{position:sticky;top:16px;aspect-ratio:4/5;max-height:80vh;overflow:hidden;background:#000;border:1px solid var(--line)}
.d-stage2 img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.06);transition:opacity .7s ease,transform 1.2s cubic-bezier(.2,.8,.2,1)}
.d-stage2 img.on{opacity:1;transform:none}
.d-stage2::after{content:"";position:absolute;inset:0;box-shadow:inset 0 0 0 1px rgba(70,214,255,.18);pointer-events:none}
.d-svc{padding:0 0 clamp(60px,14vh,150px);min-height:36vh;opacity:.35;transition:opacity .5s}
.d-svc.on{opacity:1}
.d-svc small{font:700 .95rem 'Tektur',sans-serif;color:var(--ice)}
.d-svc h3{font-size:clamp(1.5rem,3.4vw,2.4rem);margin:6px 0 10px;text-transform:uppercase}
.d-svc p{max-width:42ch;color:var(--steel)}
.d-svc em{display:block;margin-top:14px;font:600 1.1rem 'Tektur',sans-serif;font-style:normal;color:var(--ice)}
/* 3D */
.d-3d{background:radial-gradient(70% 60% at 70% 50%,rgba(70,214,255,.08),transparent),var(--panel);border-block:1px solid var(--line)}
.d-3d-grid{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(16px,3vw,40px);align-items:center}
.d-3d p{color:var(--steel);margin-top:18px;max-width:34ch}
.d-stage{position:relative;aspect-ratio:1.3;min-width:0}
.d-stage canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:pan-y;cursor:grab}
.d-stage canvas:active{cursor:grabbing}
.d-stage::before{content:"";position:absolute;left:8%;right:8%;bottom:8%;height:26%;border-radius:50%;background:radial-gradient(closest-side,rgba(70,214,255,.25),transparent);filter:blur(14px)}
.d-nogl{background:url(img/detailing2/hero.webp) center/cover;border:1px solid var(--line)}.d-nogl canvas,.d-nogl .d-hint{display:none}
.d-hint{position:absolute;right:0;bottom:0;font-size:13px;color:var(--mute)}
.d-ctl{display:grid;gap:16px;margin-top:28px;padding:18px 20px;border:1px solid var(--line);background:var(--bg);max-width:440px;clip-path:polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))}
.d-ctl label{display:flex;justify-content:space-between;font-size:14px;color:var(--mute)}
.d-ctl label b{color:var(--ice);font-weight:600}
.d-ctl input[type=range]{width:100%;accent-color:var(--ice);height:26px}
.d-paint{display:flex;gap:10px;align-items:center;font-size:14px;color:var(--mute)}
.d-paint button{width:30px;height:30px;border-radius:50%;border:2px solid var(--line);background:var(--c);transition:.2s}
.d-paint button[aria-pressed=true]{border-color:var(--ice);box-shadow:0 0 14px rgba(70,214,255,.7);transform:scale(1.1)}
/* before / after */
.d-ba-g{display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(30px,6vw,80px);align-items:center}
.d-ba-g p{margin-top:20px;max-width:34ch;color:var(--steel)}
.d-ba{position:relative;--p:50%;aspect-ratio:342/540;max-width:440px;width:100%;overflow:hidden;user-select:none;touch-action:pan-y;background:#000;cursor:ew-resize;justify-self:center}
.d-ba img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.d-ba .b{clip-path:inset(0 calc(100% - var(--p)) 0 0)}
.d-ba .h{position:absolute;top:0;bottom:0;left:var(--p);width:3px;background:var(--ice);transform:translateX(-50%);box-shadow:0 0 18px rgba(70,214,255,.9)}
.d-ba .h::after{content:"";position:absolute;top:50%;left:50%;width:46px;height:46px;border-radius:50%;background:#04121a;border:3px solid var(--ice);transform:translate(-50%,-50%);box-shadow:0 0 20px rgba(70,214,255,.6)}
.d-ba .t{position:absolute;bottom:12px;font:700 .8rem 'Tektur',sans-serif;background:rgba(0,0,0,.7);color:#fff;padding:4px 10px;letter-spacing:.06em}
.d-ba .t1{left:12px}.d-ba .t2{right:12px}
.d-ba input{position:absolute;inset:0;width:100%;height:100%;opacity:0;margin:0;pointer-events:none}
.d-ba:focus-within{outline:3px solid var(--ice);outline-offset:3px}
/* works */
.d-works{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:46px}
.d-works figure{position:relative;overflow:hidden;aspect-ratio:3/4;background:#000;margin:0}
.d-works figure:nth-child(2),.d-works figure:nth-child(3){margin-top:36px}
.d-works img{width:100%;height:100%;object-fit:cover;transition:transform .9s cubic-bezier(.2,.8,.2,1)}
.d-works figure:hover img{transform:scale(1.07)}
.d-works figcaption{position:absolute;left:0;right:0;bottom:0;padding:34px 14px 12px;color:#fff;font:600 .9rem 'Tektur',sans-serif;background:linear-gradient(transparent,rgba(0,0,0,.85))}
/* calc */
.d-calc-sec{background:var(--panel);border-top:1px solid var(--line)}
.d-calc{display:grid;grid-template-columns:1.2fr .8fr;gap:clamp(30px,5vw,70px);margin-top:46px}
.d-calc fieldset{border:0;margin:0 0 16px;padding:20px 22px 22px;background:var(--card);min-width:0}
.d-calc legend{float:left;width:100%;display:flex;align-items:center;gap:12px;padding:0 0 12px;margin:0 0 16px;border-bottom:2px solid var(--line);font:700 1.05rem 'Tektur',sans-serif;text-transform:uppercase;letter-spacing:.03em}
.d-calc legend::before{content:"";width:10px;height:16px;background:var(--ice);transform:skewX(-18deg);flex:none;box-shadow:0 0 10px rgba(70,214,255,.6)}
.d-calc legend+*{clear:both}
.d-opts{display:flex;flex-wrap:wrap;gap:10px}
.d-opts input{position:absolute;opacity:0;pointer-events:none}
.d-opts label{padding:12px 18px;background:#18212b;cursor:pointer;font-weight:500;transition:background .2s,color .2s,box-shadow .2s;display:inline-flex;gap:10px;font-size:15.5px;color:var(--steel)}
.d-opts label:hover{background:#1e2a36}
.d-opts label small{opacity:.65}
.d-opts input:checked+label{background:var(--ice);color:#04121a;box-shadow:0 0 18px rgba(70,214,255,.35)}
.d-opts input:focus-visible+label{outline:3px solid var(--ice);outline-offset:3px}
.d-sum{background:#04070a;border:1px solid var(--line);padding:30px;position:sticky;top:20px;align-self:start}
.d-sum>span{color:var(--mute)}
.d-sum b{display:block;font:700 clamp(2.1rem,6vw,3.6rem)/1.05 'Tektur',sans-serif;margin:8px 0;color:#fff;white-space:nowrap;text-shadow:0 0 30px rgba(70,214,255,.35);font-variant-numeric:tabular-nums}
.d-sum p{color:var(--mute);font-size:.95rem;margin:0 0 22px}
.d-rc{margin:0 0 22px;font-size:.9rem}
.d-rc div{display:flex;justify-content:space-between;gap:14px;padding:8px 0;border-bottom:1px solid var(--line);color:var(--steel)}
.d-rc span:last-child{white-space:nowrap;font-weight:600;color:#fff}
.d-mini{display:none}
.d-sent{margin:14px 0 0;font-size:14px;color:var(--ice)}
/* cta */
.d-cta{background:var(--ice);color:#04121a}
.d-cta h2{max-width:13ch;font-size:clamp(2.4rem,7vw,5.4rem);margin-bottom:30px}
.d-cta p{margin-top:34px;font-weight:500}
.d-foot{padding:26px 0 30px;font-size:.9rem;color:var(--mute);border-top:1px solid var(--line)}
.d-foot .wrap{display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px}
.d-foot a{color:var(--ice)}
@media(max-width:820px){.d-calc,.d-ba-g,.d-3d-grid{grid-template-columns:1fr}.d-sum{position:static}.d-mini{display:flex;position:sticky;bottom:76px;justify-content:space-between;background:#04070a;border:1px solid var(--ice);color:#fff;padding:14px 18px;font:700 1.1rem 'Tektur',sans-serif;z-index:5;margin-top:10px}.d-ctl{max-width:none}.d-hint{position:static;text-align:center}.d-stage{margin:0 -10px}}
@media(max-width:760px){.d-svc-wrap{grid-template-columns:1fr}.d-stage2{aspect-ratio:16/10;top:8px;z-index:3}.d-svc{min-height:0;padding-bottom:70px}.d-works{grid-template-columns:1fr 1fr}.d-works figure:nth-child(2),.d-works figure:nth-child(3){margin-top:0}}
@media(max-width:640px){.d-links button:not(.d-btn){display:none}.d-links .d-btn{padding:12px 20px}.d-nums{grid-template-columns:1fr}.d-calc fieldset{padding:16px 14px 18px}}
@media(prefers-reduced-motion:reduce){.d-hero h1 .l span{animation:none;transform:none}.d-sweep{display:none}.d-stage2 img{transition:none}}
`,
html: `
<header class="d-hero" id="d-top">
  <img src="img/detailing2/hero.webp" alt="Спорткар с каплями воды на кузове" width="1280" height="853" fetchpriority="high">
  <div class="d-glare" id="d-glare"></div><div class="d-sweep"></div>
  <div class="wrap" style="width:100%">
    <nav class="d-nav"><span class="d-logo">ГЛЯНЕЦ<b>.</b></span><div class="d-links"><button data-d="d-services">Услуги</button><button data-d="d-studio">3D-студия</button><button data-d="d-result">Результат</button><button class="d-btn" data-d="d-calc">Расчёт</button></div></nav>
  </div>
  <div class="wrap in" style="width:100%">
    <h1 aria-label="Лак как зеркало"><span class="l"><span>Лак как</span></span><span class="l"><span>зеркало.</span></span></h1>
    <p>Детейлинг-студия: полировка, керамика и уход за автомобилем руками мастеров, которые видят каждую царапину.</p>
    <button class="d-btn" data-d="d-calc">Рассчитать стоимость</button>
  </div>
</header>

<section class="d-sec"><div class="wrap">
  <h2>Делаем медленно, чтобы результат держался годами</h2>
  <div class="d-nums">
    <div><b>5 дней</b>на полный комплекс: мойка, полировка и керамика</div>
    <div><b>5 лет</b>гарантия на профессиональное керамическое покрытие</div>
    <div><b>1</b>машина в боксе одновременно, без конвейера</div>
  </div>
</div></section>

<section class="d-sec" id="d-services" style="padding-top:0"><div class="wrap">
  <h2>Что мы делаем</h2>
  <div class="d-svc-wrap">
    <div class="d-stage2" aria-hidden="true">
      <img class="on" src="img/detailing2/svc-polish.webp" alt="" data-i="0"><img src="img/detailing2/svc-ceramic.webp" alt="" data-i="1" loading="lazy"><img src="img/detailing2/svc-wash.webp" alt="" data-i="2" loading="lazy"><img src="img/detailing2/svc-wheels.webp" alt="" data-i="3" loading="lazy"><img src="img/detailing2/svc-film.webp" alt="" data-i="4" loading="lazy">
    </div>
    <div>
      <div class="d-svc on" data-i="0"><small>01</small><h3>Полировка кузова</h3><p>Убираем царапины, голограммы и потускневший лак. Снимаем минимум слоя: мастер замеряет толщину и подбирает пасту под каждую деталь.</p><em>от 18 000 ₽</em></div>
      <div class="d-svc" data-i="1"><small>02</small><h3>Керамика</h3><p>Нано-покрытие, после которого вода скатывается, грязь не липнет, а цвет глубже. Работает годами, а не до первой мойки.</p><em>от 25 000 ₽</em></div>
      <div class="d-svc" data-i="2"><small>03</small><h3>Мойка и химчистка</h3><p>Двухфазная мойка пеной, деконтаминация кузова, глубокая чистка салона и кожи без разводов.</p><em>от 3 500 ₽</em></div>
      <div class="d-svc" data-i="3"><small>04</small><h3>Диски и шины</h3><p>Чистим тормозную пыль, защищаем диски керамикой, возвращаем резине чёрный цвет без липкого блеска.</p><em>от 4 000 ₽</em></div>
      <div class="d-svc" data-i="4"><small>05</small><h3>Защита плёнкой</h3><p>Прозрачная плёнка на капот, бампер и зеркала. Принимает на себя камни и реагенты, а при необходимости снимается без следов.</p><em>от 60 000 ₽</em></div>
    </div>
  </div>
</div></section>

<section class="d-sec d-3d" id="d-studio"><div class="wrap d-3d-grid">
  <div>
    <h2>Отмойте машину сами</h2>
    <p>Трёхмерная модель прямо в браузере. Сдвиньте ползунок: грязь уходит, лак начинает блестеть, а после керамики вода собирается в капли. Машину можно покрутить.</p>
    <div class="d-ctl">
      <div><label for="d-gloss">Мойка и покрытие <b id="d-gloss-v">после керамики</b></label><input type="range" id="d-gloss" min="0" max="100" value="100"></div>
      <div class="d-paint"><span>Цвет</span>
        <button style="--c:#24364c" data-c="1b2a3c" aria-label="Графит" aria-pressed="true"></button>
        <button style="--c:#0b0d10" data-c="0b0d10" aria-label="Чёрный" aria-pressed="false"></button>
        <button style="--c:#9c1420" data-c="8a0f1a" aria-label="Красный" aria-pressed="false"></button>
        <button style="--c:#d9dde0" data-c="c9ced2" aria-label="Серебристый" aria-pressed="false"></button>
      </div>
    </div>
  </div>
  <div class="d-stage"><canvas aria-label="Трёхмерная модель автомобиля. Её можно вращать."></canvas><span class="d-hint">Потяните, чтобы повернуть</span></div>
</div></section>

<section class="d-sec" id="d-result"><div class="wrap d-ba-g">
  <div><h2>Тяните и смотрите</h2><p>Слева автомобиль с грязным, потускневшим кузовом, справа он же после мойки и полировки. Двигайте ползунок пальцем или мышью.</p></div>
  <div class="d-ba" id="d-ba">
    <img src="img/detailing2/after.webp" alt="Автомобиль после обработки" width="342" height="540"><img class="b" src="img/detailing2/before.webp" alt="Автомобиль до обработки" width="342" height="540">
    <div class="h"></div><span class="t t1">ДО</span><span class="t t2">ПОСЛЕ</span>
    <input type="range" min="0" max="100" value="50" aria-label="Сравнение до и после">
  </div>
</div></section>

<section class="d-sec" style="padding-top:0"><div class="wrap">
  <h2>Из мастерской</h2>
  <div class="d-works">
    <figure><img src="img/detailing2/w-headlight.webp" alt="Полировка фары с защитной лентой" width="800" height="1000" loading="lazy"><figcaption>Полировка, подготовка</figcaption></figure>
    <figure><img src="img/detailing2/w-retro.webp" alt="Ретро-автомобиль с аэрографией" width="760" height="1140" loading="lazy"><figcaption>Реставрация лака</figcaption></figure>
    <figure><img src="img/detailing2/w-purple.webp" alt="Фиолетовый кабриолет" width="760" height="1140" loading="lazy"><figcaption>Керамика, перламутр</figcaption></figure>
    <figure><img src="img/detailing2/w-foam.webp" alt="Кроссовер в пене" width="760" height="1140" loading="lazy"><figcaption>Бесконтактная мойка</figcaption></figure>
  </div>
</div></section>

<section class="d-sec d-calc-sec" id="d-calc"><div class="wrap">
  <h2>Прикиньте стоимость</h2>
  <div class="d-calc">
    <div>
      <fieldset><legend>Кузов</legend><div class="d-opts">
        <span><input type="radio" name="d-s" id="d-s1" value="1" checked><label for="d-s1">Седан</label></span>
        <span><input type="radio" name="d-s" id="d-s2" value="1.25"><label for="d-s2">Кроссовер <small>×1,25</small></label></span>
        <span><input type="radio" name="d-s" id="d-s3" value="1.5"><label for="d-s3">Внедорожник <small>×1,5</small></label></span></div></fieldset>
      <div id="d-groups"></div>
      <div class="d-mini" id="d-mini"></div>
    </div>
    <div class="d-sum"><span>Ориентировочно</span><b id="d-total">0 ₽</b><p id="d-days"></p><div class="d-rc" id="d-rc"></div><button class="d-btn" id="d-send">Отправить расчёт</button><p class="d-sent" id="d-sent" hidden aria-live="polite"></p></div>
  </div>
</div></section>

<section class="d-sec d-cta"><div class="wrap">
  <h2>Привезите машину, покажем что можно сделать</h2>
  <button class="d-btn dark" id="d-tg">Записаться через Telegram</button>
  <p>ул. Заводская, 7, бокс 4. Ежедневно 9:00–21:00</p>
</div></section>
<footer class="d-foot"><div class="wrap"><span>Демо-проект: вымышленная студия, сайт сделан для портфолио.</span><a href="#photo">Следующее демо: фотоагентство «Выдержка»</a></div></footer>
`,
mount: function (root) {
  var reduce = PORTF.reduce, offs = [];
  function on(t, ev, fn, o) { t.addEventListener(ev, fn, o); offs.push(function () { t.removeEventListener(ev, fn, o); }); }
  root.addEventListener('click', function (e) {
    var t = e.target.closest('[data-d]'); if (!t) return;
    var el = root.querySelector('#' + t.dataset.d); if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  });
  /* блик под курсором и параллакс героя */
  var hero = root.querySelector('.d-hero'), gl = root.querySelector('#d-glare'), hi = hero.querySelector('img');
  hero.addEventListener('pointermove', function (e) { var r = hero.getBoundingClientRect(); gl.style.setProperty('--x', (e.clientX - r.left) + 'px'); gl.style.setProperty('--y', (e.clientY - r.top) + 'px'); });
  if (!reduce) on(window, 'scroll', function () {
    var y = Math.min(scrollY, innerHeight); hi.style.transform = 'scale(' + (1.08 + y / innerHeight * .08) + ') translateY(' + y * .12 + 'px)';
    if (PORTF.touch) { gl.style.setProperty('--x', '50%'); gl.style.setProperty('--y', (30 + y / innerHeight * 50) + '%'); }
  }, { passive: true });
  /* услуги: фото слева меняется по мере прокрутки */
  var imgs = [].slice.call(root.querySelectorAll('.d-stage2 img')), items = [].slice.call(root.querySelectorAll('.d-svc'));
  var so = window.IntersectionObserver ? new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { var i = +x.target.dataset.i; items.forEach(function (s) { s.classList.toggle('on', s === x.target); }); imgs.forEach(function (m) { m.classList.toggle('on', +m.dataset.i === i); }); } }); }, { rootMargin: '-42% 0px -42% 0px' }) : null;
  if (so) items.forEach(function (s) { so.observe(s); }); else items.forEach(function (s) { s.classList.add('on'); });
  offs.push(function () { if (so) so.disconnect(); });
  /* до / после */
  var ba = root.querySelector('#d-ba'), rg = ba.querySelector('input');
  function setP(v) { ba.style.setProperty('--p', v + '%'); }
  function fromX(e) { var r = ba.getBoundingClientRect(), v = Math.max(0, Math.min(100, (e.clientX - r.left) / r.width * 100)); setP(v); rg.value = v; rg.dataset.t = 1; }
  ba.addEventListener('pointerdown', function (e) { try { ba.setPointerCapture(e.pointerId); } catch (x) {} ba.dataset.d = 1; fromX(e); });
  ba.addEventListener('pointermove', function (e) { if (ba.dataset.d) fromX(e); });
  ['pointerup', 'pointercancel'].forEach(function (n) { ba.addEventListener(n, function () { delete ba.dataset.d; }); });
  rg.addEventListener('input', function () { setP(rg.value); rg.dataset.t = 1; });
  if (!reduce && window.IntersectionObserver) {
    var bo = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { bo.disconnect(); var t0 = performance.now(); (function f(t) { var k = (t - t0) / 1600; if (k >= 1 || rg.dataset.t) return; var v = 50 + 28 * Math.sin(k * Math.PI * 2) * (1 - k); setP(v); rg.value = v; requestAnimationFrame(f); })(t0); } }, { threshold: .6 });
    bo.observe(ba); offs.push(function () { bo.disconnect(); });
  }
  /* калькулятор (логика из blik-demo) */
  var G = [
    { t: 'Мойка и чистка', d: 2, o: [['Не нужна', 0, 0], ['Бесконтактная мойка', 3500, 1], ['Мойка + очистка кузова от металла и битума', 5500, 1], ['Мойка, очистка кузова и салон', 11000, 2]] },
    { t: 'Полировка', d: 2, o: [['Не нужна', 0, 0], ['1 этап, освежение', 18000, 1], ['2 этапа, коррекция', 24000, 2], ['3 этапа, глубокая', 32000, 3]] },
    { t: 'Защитное покрытие', d: 0, o: [['Не нужно', 0, 0], ['Воск на 3–6 месяцев', 4000, 1], ['Керамика, 1 слой, 2 года', 25000, 2], ['Керамика, 2 слоя, 5 лет', 35000, 2]] },
    { t: 'Диски и шины', d: 0, o: [['Не нужны', 0, 0], ['Чистка и чернение шин', 4000, 1], ['С керамикой на диски', 9000, 1]] },
    { t: 'Защитная плёнка', d: 0, o: [['Не нужна', 0, 0], ['Капот, бампер, зеркала', 60000, 2], ['Передняя часть, пороги, арки', 95000, 3], ['Весь кузов', 240000, 6]] }];
  var X = [['Полировка фар', 3500], ['Антидождь на стёкла', 3000], ['Озонация салона', 2500], ['Чернение пластика', 2000]];
  var $ = function (s) { return root.querySelector(s); }, nf = function (n) { return Math.round(n).toLocaleString('ru-RU'); };
  $('#d-groups').innerHTML = G.map(function (g, i) { return '<fieldset><legend>' + g.t + '</legend><div class="d-opts">' + g.o.map(function (x, j) { return '<span><input type="radio" name="d-g' + i + '" id="d-g' + i + '_' + j + '" value="' + j + '"' + (j == g.d ? ' checked' : '') + '><label for="d-g' + i + '_' + j + '">' + x[0] + (x[1] ? ' <small data-p="' + x[1] + '"></small>' : '') + '</label></span>'; }).join('') + '</div></fieldset>'; }).join('') +
    '<fieldset><legend>Дополнительно</legend><div class="d-opts">' + X.map(function (x, j) { return '<span><input type="checkbox" id="d-x' + j + '"><label for="d-x' + j + '">' + x[0] + ' <small>' + nf(x[1]) + '</small></label></span>'; }).join('') + '</div></fieldset>';
  var cur = 0, craf = 0, tot = $('#d-total'), mini = $('#d-mini'), rows = [], sum = 0;
  function calc() {
    var m = +root.querySelector('[name=d-s]:checked').value, days = 0; sum = 0; rows = [];
    G.forEach(function (g, i) { var o = g.o[+root.querySelector('[name=d-g' + i + ']:checked').value]; if (o[1]) { var p = o[1] * m; sum += p; days += o[2]; rows.push([g.t + ': ' + o[0], p]); } });
    X.forEach(function (x, j) { if ($('#d-x' + j).checked) { sum += x[1]; rows.push([x[0], x[1]]); } });
    root.querySelectorAll('#d-groups small[data-p]').forEach(function (s) { s.textContent = nf(s.dataset.p * m); });
    $('#d-rc').innerHTML = rows.map(function (r) { return '<div><span>' + r[0] + '</span><span>' + nf(r[1]) + ' ₽</span></div>'; }).join('');
    var n = days || 1;
    $('#d-days').textContent = rows.length ? ('Срок: примерно ' + n + (n == 1 ? ' день' : n < 5 ? ' дня' : ' дней') + '. Точную цену назовём после осмотра.') : 'Выберите хотя бы одну услугу.';
    $('#d-sent').hidden = true;
    var from = cur, t0 = performance.now(); cancelAnimationFrame(craf);
    (function f(t) { var k = Math.min((t - t0) / 500, 1); cur = from + (sum - from) * (1 - Math.pow(1 - k, 3)); var s = nf(cur) + ' ₽'; tot.textContent = s; mini.innerHTML = '<span>Итого</span><span>' + s + '</span>'; if (k < 1 && !reduce) craf = requestAnimationFrame(f); else { cur = sum; tot.textContent = nf(sum) + ' ₽'; mini.innerHTML = '<span>Итого</span><span>' + nf(sum) + ' ₽</span>'; } })(t0);
  }
  root.querySelectorAll('.d-calc input').forEach(function (i) { i.addEventListener('change', calc); }); calc();
  $('#d-send').onclick = function () { var s = $('#d-sent'); s.hidden = false; s.textContent = rows.length ? 'Это демо. На рабочем сайте расчёт на ' + nf(sum) + ' ₽ уйдёт студии в Telegram.' : 'Сначала выберите услуги.'; };
  $('#d-tg').onclick = function () { this.textContent = 'Это демо: здесь будет ссылка на бота'; };

  /* ----- 3D: процедурная модель купе из модуля car/ (three r178, грузится только здесь) ----- */
  var canvas = root.querySelector('canvas'), gloss = root.querySelector('#d-gloss'), glossV = root.querySelector('#d-gloss-v'), stage = root.querySelector('.d-stage');
  var dead = false, dispose3d = null;
  function fallback() { stage.classList.add('d-nogl'); }
  var load;
  try { load = Promise.all([import('three'), import(new URL('car/js/car.js', document.baseURI).href)]); }
  catch (e) { load = Promise.reject(e); }
  load.then(function (mods) {
    if (dead) return;
    var T = mods[0], C = mods[1], renderer;
    try { renderer = new T.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true, powerPreference: 'high-performance' }); } catch (e) { return fallback(); }
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, PORTF.touch ? 1.5 : 2));
    renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.2;
    var scene = new T.Scene(), cam = new T.PerspectiveCamera(30, 1.25, .1, 60);
    cam.position.set(0, 1.75, 9.8); cam.lookAt(0, .55, 0);
    var pm = new T.PMREMGenerator(renderer), envRT = pm.fromScene(C.studioEnvScene({ dark: true, warm: 0x46d6ff, cool: 0xbfe6ff }), .02);
    scene.environment = envRT.texture; pm.dispose();
    var car = C.buildCar({ paint: 0x1b2a3c, accent: 0x46d6ff, metalness: .55, roughness: .16, envPaint: 1.5, envGlass: 1.3, detail: PORTF.touch ? 'low' : 'high', lightBoost: 2.4, plate: 'ГЛЯНЕЦ' });
    var rig = new T.Group(); rig.add(car.root); scene.add(rig);
    var U = car.uniforms; U.uDirt.value = 1; U.uCleanDir.value = 1;
    var floor = new T.Mesh(new T.CircleGeometry(3.3, 72), new T.MeshBasicMaterial({ color: 0x0a0f14 })); floor.rotation.x = -Math.PI / 2; floor.position.y = -.002; scene.add(floor);
    var ring = new T.Mesh(new T.TorusGeometry(3.3, .012, 6, 160), new T.MeshBasicMaterial({ color: 0x46d6ff })); ring.rotation.x = Math.PI / 2; ring.position.y = .01; scene.add(ring);
    scene.add(new T.HemisphereLight(0xcfeaff, 0x05070a, .35));
    var key = new T.DirectionalLight(0xffffff, .6); key.position.set(3, 6, 4); scene.add(key);

    function applyGloss() {
      var t = gloss.value / 100;
      U.uClean.value = 2.6 - 5.2 * t; U.uBeads.value = t > .97 ? .5 : 0;
      glossV.textContent = t > .97 ? 'после керамики' : t > .03 ? 'в работе' : 'до мойки';
    }
    gloss.addEventListener('input', applyGloss);
    root.querySelectorAll('.d-paint button').forEach(function (b) {
      b.onclick = function () { root.querySelectorAll('.d-paint button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); car.setPaint('#' + b.dataset.c); kick(); };
    });
    applyGloss();

    function resize() { var w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return; renderer.setSize(w, h, false); cam.aspect = w / h; cam.position.z = w / h < 1.1 ? 12.4 : 9.8; cam.updateProjectionMatrix(); kick(); }
    var ro = window.ResizeObserver ? new ResizeObserver(resize) : null; if (ro) ro.observe(canvas);

    var rot = -.7, vel = .003, drag = false, lx = 0, raf = 0, vis = true, last = 0;
    canvas.addEventListener('pointerdown', function (e) { drag = true; lx = e.clientX; try { canvas.setPointerCapture(e.pointerId); } catch (x) {} kick(); });
    canvas.addEventListener('pointermove', function (e) { if (!drag) return; vel = (e.clientX - lx) * .008; rot += vel; lx = e.clientX; });
    function up() { drag = false; } canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
    function frame(t) {
      raf = 0; if (dead || !vis || document.hidden) return;
      var dt = Math.min(50, t - last || 16) / 16.67; last = t;
      if (!drag) { rot += vel * dt; vel += (.003 - vel) * .03 * dt; }
      rig.rotation.y = rot; car.update(t / 1000); renderer.render(scene, cam);
      if (!PORTF.reduce || drag) raf = requestAnimationFrame(frame);
    }
    function kick() { if (!raf && !dead) { last = 0; raf = requestAnimationFrame(frame); } }
    var io = window.IntersectionObserver ? new IntersectionObserver(function (en) { vis = en[0].isIntersecting; kick(); }) : null; if (io) io.observe(canvas);
    document.addEventListener('visibilitychange', kick);
    gloss.addEventListener('input', kick);
    resize(); kick();
    dispose3d = function () {
      cancelAnimationFrame(raf); if (ro) ro.disconnect(); if (io) io.disconnect(); document.removeEventListener('visibilitychange', kick);
      scene.traverse(function (o) {
        if (o.geometry) o.geometry.dispose();
        [].concat(o.material || []).forEach(function (m) { for (var k in m) if (m[k] && m[k].isTexture) m[k].dispose(); m.dispose(); });
      });
      envRT.dispose(); renderer.dispose(); try { renderer.forceContextLoss(); } catch (e) {}
    };
  }).catch(fallback);

  return function () { dead = true; cancelAnimationFrame(craf); offs.forEach(function (f) { f(); }); if (dispose3d) dispose3d(); };
}
});
