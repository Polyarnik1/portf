/* Цирюльня №7: барбершоп. Основа: репозиторий Barbershop-demo (палитра, шрифты, барбер-пол, тёмная тема).
   Добавлены фото, раскладка для компьютера, заглушки вместо внешних ссылок. */
PORTF.register('barber', {
css: `
.s-barber{--bg:#EDF0F3;--panel:#DFE4EA;--ink:#0F1923;--muted:#566471;--red:#D7263D;--blue:#1E3F7A;--btn:#D7263D;--line:#C5CCD4;--onink:#EDF0F3;
  --head:'Oswald','Arial Narrow',Impact,sans-serif;--body:'Manrope',system-ui,sans-serif;
  color-scheme:light;background:var(--bg);color:var(--ink);font:400 17px/1.6 var(--body);transition:background .35s,color .35s}
.s-barber.dark{color-scheme:dark;--bg:#0E141B;--panel:#17202A;--ink:#F1F3F5;--muted:#93A0AD;--red:#FF4D5E;--blue:#6C93D6;--btn:#E5384B;--line:#2A3541;--onink:#0E141B}
.s-barber .wrap{max-width:1240px;margin:0 auto;padding-inline:clamp(18px,4vw,48px)}
.s-barber h1,.s-barber h2,.s-barber h3{font-family:var(--head);text-transform:uppercase;line-height:1;margin:0;letter-spacing:.01em;font-weight:700}
.s-barber h2{font-size:clamp(2.1rem,5vw,3.6rem)}
.s-barber img{display:block;max-width:100%}
.r-top{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 0;border-bottom:3px solid var(--ink)}
.r-logo{font:700 1.45rem var(--head);text-transform:uppercase;letter-spacing:.04em;white-space:nowrap}
.r-logo span{color:var(--red)}
.r-nav{display:flex;gap:26px;font-weight:600;font-size:15px}
.r-nav button{color:var(--muted);transition:color .2s}
.r-nav button:hover{color:var(--ink)}
.r-hero{display:grid;grid-template-columns:minmax(0,1.05fr) auto minmax(0,.95fr);gap:clamp(20px,3vw,44px);align-items:center;padding:clamp(28px,5vw,64px) 0 clamp(36px,5vw,64px)}
.r-kicker{display:inline-block;font:500 .9rem var(--head);letter-spacing:.14em;text-transform:uppercase;color:var(--red);margin-bottom:1rem}
.r-hero h1{font-size:clamp(3rem,7.4vw,6.4rem)}
.r-hero h1 em{font-style:normal;color:var(--red)}
.r-hero p{max-width:40ch;color:var(--muted);margin:1.4rem 0 2rem}
.r-cta{display:flex;gap:1.4rem;align-items:center;flex-wrap:wrap}
.r-btn{display:inline-block;background:var(--btn);color:#fff;font:700 1rem var(--head);letter-spacing:.08em;text-transform:uppercase;padding:.95rem 1.8rem;transition:transform .2s,filter .2s;cursor:pointer}
.r-btn:hover{transform:translateY(-2px);filter:brightness(1.08)}
.r-link{font-weight:700;text-decoration:underline;text-underline-offset:5px}
.r-pole{position:relative;width:clamp(78px,7vw,120px);height:clamp(300px,34vw,470px);border:5px solid var(--ink);border-radius:90px;
  background:repeating-linear-gradient(-45deg,var(--red) 0 26px,#fff 26px 52px,var(--blue) 52px 78px,#fff 78px 104px);background-size:147px 147px;
  box-shadow:inset 14px 0 18px rgba(255,255,255,.4),inset -16px 0 18px rgba(0,0,0,.28);animation:r-spin 2.6s linear infinite}
.r-pole::before,.r-pole::after{content:"";position:absolute;left:50%;width:120%;height:22px;transform:translateX(-50%);background:var(--ink);border-radius:8px}
.r-pole::before{top:-24px}.r-pole::after{bottom:-24px}
@keyframes r-spin{to{background-position:0 147px}}
.r-photo{position:relative;aspect-ratio:4/5;overflow:hidden;border:3px solid var(--ink);background:var(--panel);margin:0}
.r-photo img{width:100%;height:100%;object-fit:cover}
.r-photo span{position:absolute;left:0;bottom:0;background:var(--ink);color:var(--onink);font:500 .85rem var(--head);letter-spacing:.1em;text-transform:uppercase;padding:9px 14px}
.r-strip{background:var(--ink);color:var(--onink);overflow:hidden;white-space:nowrap;padding:12px 0;font:700 1.15rem var(--head);text-transform:uppercase;letter-spacing:.08em}
.r-strip div{display:inline-block;animation:r-strip 32s linear infinite}
.r-strip span{margin:0 22px}.r-strip span::after{content:"";display:inline-block;width:9px;height:9px;border-radius:50%;background:var(--red);margin-left:44px;vertical-align:middle}
@keyframes r-strip{to{transform:translateX(-50%)}}
.r-sec{padding:clamp(52px,7vw,96px) 0}
.r-sec-head{display:flex;justify-content:space-between;align-items:end;gap:12px 20px;flex-wrap:wrap;margin-bottom:28px}
.r-sec-head p{color:var(--muted);max-width:36ch;margin:0}
.r-svc{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,.8fr);gap:clamp(24px,4vw,60px);align-items:start}
.r-list{list-style:none;margin:0;padding:0}
.r-list li{display:flex;align-items:flex-end;padding:1rem 0;cursor:default}
.r-list .n{font-weight:600;font-size:1.05rem}
.r-list small{display:block;color:var(--muted);font-size:.85rem;font-weight:400}
.r-list i{flex:1;border-bottom:2px dotted var(--line);margin:0 .8rem .45rem;transition:border-color .2s}
.r-list b{font:700 1.4rem var(--head);white-space:nowrap}
.r-list li:hover i,.r-list li.on i{border-color:var(--red)}
.r-svc-pic{position:sticky;top:20px;display:grid;gap:12px}
.r-svc-pic figure{margin:0;aspect-ratio:4/3;overflow:hidden;border:3px solid var(--ink);background:var(--panel)}
.r-svc-pic figure:first-child{aspect-ratio:4/4.2}
.r-svc-pic img{width:100%;height:100%;object-fit:cover;transition:opacity .25s}
.r-masters{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(14px,2vw,24px)}
.r-m{background:var(--panel);border-top:6px solid var(--red);display:grid;grid-template-rows:auto 1fr}
.r-m:nth-child(2){border-color:var(--blue)}
.r-m figure{margin:0;aspect-ratio:4/3;overflow:hidden;position:relative}
.r-m figure img{width:100%;height:100%;object-fit:cover;object-position:50% 30%;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.r-m:hover figure img{transform:scale(1.05)}
.r-m .av{position:absolute;left:14px;bottom:0;width:48px;height:48px;display:grid;place-items:center;background:var(--ink);color:var(--onink);font:700 1.6rem var(--head)}
.r-m div{padding:20px 22px 22px}
.r-m h3{font-size:1.45rem;margin-bottom:.3rem}
.r-m p{margin:0;color:var(--muted);font-size:.95rem}
.r-gal{display:grid;grid-template-columns:repeat(6,1fr);grid-auto-rows:clamp(110px,13vw,190px);gap:10px}
.r-gal figure{margin:0;overflow:hidden;background:var(--panel)}
.r-gal img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.r-gal figure:hover img{transform:scale(1.06)}
.r-gal .a{grid-column:span 3;grid-row:span 2}.r-gal .b{grid-column:span 2}.r-gal .c{grid-column:span 1;grid-row:span 2}.r-gal .d{grid-column:span 2}
.r-reviews{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(18px,3vw,36px)}
.r-reviews blockquote{margin:0;padding:1.2rem 0 0 1.2rem;border-left:4px solid var(--red)}
.r-reviews blockquote::before{content:"\\201C";display:block;font:700 3.4rem/.6 var(--head);color:var(--red);margin-bottom:.6rem}
.r-reviews p{margin:0 0 1rem}
.r-reviews cite{font:500 .9rem var(--head);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-style:normal}
.r-steps{list-style:none;counter-reset:s;padding:0;margin:0 0 28px;display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(16px,3vw,32px)}
.r-steps li{counter-increment:s;border-top:3px solid var(--ink);padding-top:.9rem}
.r-steps li::before{content:counter(s,decimal-leading-zero);display:block;font:700 2rem var(--head);color:var(--red)}
.r-book{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);background:var(--ink);color:var(--onink)}
.r-book-in{padding:clamp(24px,4vw,48px)}
.r-book h3{font-size:1.8rem}
.r-info{list-style:none;padding:0;margin:1.2rem 0 1.6rem}
.r-info li{padding:.7rem 0;border-bottom:1px solid rgba(128,140,152,.4)}
.r-info b{font-weight:600;opacity:.65}
.r-how{margin:0 0 .9rem;opacity:.75}
.r-btns{display:flex;gap:.8rem;flex-wrap:wrap}
.r-btn.alt{background:none;color:var(--onink);box-shadow:inset 0 0 0 2px var(--onink)}
.r-note{margin:14px 0 0;font-size:14px;padding:12px 14px;background:rgba(215,38,61,.18);border-left:3px solid var(--red)}
.r-book figure{margin:0;position:relative;min-height:280px}
.r-book figure img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.r-foot{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;padding:1.6rem 0 1rem;color:var(--muted);font-size:.9rem;border-top:1px solid var(--line);margin-top:clamp(40px,6vw,72px)}
.r-foot a{color:var(--ink)}
.r-sw{margin-left:auto;display:flex;align-items:center;gap:.7rem}
.r-sw button{position:relative;width:46px;height:26px;border-radius:999px;border:2px solid var(--muted)}
.r-sw button::after{content:"";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:var(--ink);transition:transform .25s}
.r-sw button[aria-checked="true"]::after{transform:translateX(20px)}
@media (max-width:1000px){.r-hero{grid-template-columns:1fr auto}.r-hero .r-photo{grid-column:1/-1;aspect-ratio:16/9}}
@media (max-width:820px){.r-svc,.r-book{grid-template-columns:1fr}.r-svc-pic{position:static;grid-template-columns:1fr 1fr}.r-svc-pic figure,.r-svc-pic figure:first-child{aspect-ratio:1}.r-masters,.r-reviews,.r-steps{grid-template-columns:1fr}.r-m{grid-template-columns:130px 1fr;grid-template-rows:none}.r-m figure{aspect-ratio:auto;height:100%}.r-m .av{display:none}.r-m div{padding:18px}.r-gal{grid-template-columns:1fr 1fr;grid-auto-rows:38vw}.r-gal .a,.r-gal .b,.r-gal .c,.r-gal .d{grid-column:span 1;grid-row:span 1}.r-gal .a{grid-column:span 2}.r-book figure{min-height:220px;order:-1}}
@media (max-width:600px){.r-nav{display:none}.r-hero{grid-template-columns:1fr;padding-top:24px}.r-pole{order:-1;width:100%;height:56px;border-radius:30px;animation-name:r-spin-x}.r-pole::before,.r-pole::after{display:none}.r-hero .r-photo{aspect-ratio:4/3}.r-svc-pic{grid-template-columns:1fr}.r-svc-pic figure:nth-child(2){display:none}.r-svc-pic figure:first-child{aspect-ratio:16/10}.r-sw{margin-left:0}}
@keyframes r-spin-x{to{background-position:147px 0}}
@media (prefers-reduced-motion:reduce){.r-pole,.r-strip div{animation:none}}
`,
html: `
<div class="wrap">
  <header class="r-top">
    <span class="r-logo">Цирюльня <span>№7</span></span>
    <nav class="r-nav" aria-label="Разделы"><button data-r="r-services">Услуги</button><button data-r="r-masters">Мастера</button><button data-r="r-reviews">Отзывы</button><button data-r="r-book">Запись</button></nav>
  </header>
  <section class="r-hero">
    <div>
      <span class="r-kicker">Барбершоп в центре города</span>
      <h1>Стрижём. Бреем. <em>Без лишнего.</em></h1>
      <p>Мужские стрижки и уход за бородой. Запись на удобное время, горячее полотенце и кофе в подарок.</p>
      <div class="r-cta"><button class="r-btn" data-r="r-book">Записаться</button><button class="r-link" data-r="r-services">Услуги и цены</button></div>
    </div>
    <div class="r-pole" role="img" aria-label="Барбер-пол"></div>
    <figure class="r-photo"><img src="img/barber/hero.webp" alt="Зал барбершопа: кресла у кирпичной стены" width="1600" height="1063" fetchpriority="high"><span>Ул. Примерная, 7</span></figure>
  </section>
</div>
<div class="r-strip" aria-hidden="true"><div>${'<span>Стрижки</span><span>Борода</span><span>Королевское бритьё</span><span>Камуфляж седины</span><span>Кофе в подарок</span>'.repeat(4)}</div></div>
<div class="wrap">
  <section class="r-sec" id="r-services">
    <div class="r-sec-head"><h2>Услуги и цены</h2><p>Наведите на услугу или нажмите на неё, и справа появится, как это выглядит.</p></div>
    <div class="r-svc">
      <ul class="r-list" id="r-list">
        <li data-p="g2" class="on"><span class="n">Мужская стрижка<small>45 минут</small></span><i></i><b>1 500 ₽</b></li>
        <li data-p="g8"><span class="n">Стрижка машинкой<small>30 минут</small></span><i></i><b>900 ₽</b></li>
        <li data-p="g1"><span class="n">Оформление бороды<small>30 минут</small></span><i></i><b>1 000 ₽</b></li>
        <li data-p="g6"><span class="n">Стрижка и борода<small>1 час 15 минут</small></span><i></i><b>2 200 ₽</b></li>
        <li data-p="g4"><span class="n">Королевское бритьё<small>45 минут</small></span><i></i><b>1 400 ₽</b></li>
        <li data-p="g5"><span class="n">Камуфляж седины<small>40 минут</small></span><i></i><b>1 200 ₽</b></li>
      </ul>
      <div class="r-svc-pic">
        <figure><img id="r-svc-img" src="img/barber/g2.webp" alt="Мужская стрижка" width="900" height="600" loading="lazy" decoding="async"></figure>
        <figure><img src="img/barber/g7.webp" alt="Инструменты мастера" width="900" height="600" loading="lazy" decoding="async"></figure>
      </div>
    </div>
  </section>

  <section class="r-sec" id="r-masters" style="padding-top:0">
    <div class="r-sec-head"><h2>Мастера</h2><p>Три кресла и три мастера. Можно записаться к конкретному.</p></div>
    <div class="r-masters">
      <article class="r-m"><figure><img src="img/barber/m1.webp" alt="Каземир за работой" width="700" height="931" loading="lazy" decoding="async"><span class="av" aria-hidden="true">К</span></figure><div><h3>Каземир</h3><p>Старший барбер, 8 лет опыта. Классика и фейды.</p></div></article>
      <article class="r-m"><figure><img src="img/barber/m2.webp" alt="Федя за работой" width="700" height="1050" loading="lazy" decoding="async"><span class="av" aria-hidden="true">Ф</span></figure><div><h3>Федя:)</h3><p>Барбер, 5 лет опыта. Борода и королевское бритьё.</p></div></article>
      <article class="r-m"><figure><img src="img/barber/m3.webp" alt="Серёжа за работой" width="700" height="465" loading="lazy" decoding="async"><span class="av" aria-hidden="true">С</span></figure><div><h3>Серёжа^^</h3><p>Барбер, 3 года опыта. Современные короткие стрижки.</p></div></article>
    </div>
  </section>

  <section class="r-sec" style="padding-top:0">
    <div class="r-sec-head"><h2>В цирюльне</h2><p>Кирпич, кожаные кресла, горячие полотенца.</p></div>
    <div class="r-gal">
      <figure class="a"><img src="img/barber/g3.webp" alt="Барберское кресло" width="900" height="600" loading="lazy" decoding="async"></figure>
      <figure class="b"><img src="img/barber/g1.webp" alt="Мастер оформляет бороду" width="900" height="600" loading="lazy" decoding="async"></figure>
      <figure class="c"><img src="img/barber/g6.webp" alt="Фейд и борода" width="900" height="1348" loading="lazy" decoding="async"></figure>
      <figure class="b"><img src="img/barber/g5.webp" alt="Пена перед бритьём" width="900" height="600" loading="lazy" decoding="async"></figure>
    </div>
  </section>

  <section class="r-sec" id="r-reviews" style="padding-top:0">
    <div class="r-sec-head"><h2>Отзывы</h2></div>
    <div class="r-reviews">
      <blockquote><p>Хожу уже второй год. Всегда вовремя, стрижка держит форму до следующего визита.</p><cite>Дмитрий, клиент с 2024</cite></blockquote>
      <blockquote><p>Первый раз попробовал королевское бритьё. Горячее полотенце и кофе в подарок, остался очень доволен.</p><cite>Игорь</cite></blockquote>
      <blockquote><p>Записался в Telegram за пять минут. Подтвердили, напомнили, никаких очередей.</p><cite>Андрей</cite></blockquote>
    </div>
  </section>

  <section class="r-sec" id="r-book" style="padding-top:0">
    <div class="r-sec-head"><h2>Как записаться</h2></div>
    <ol class="r-steps">
      <li>Напишите в Telegram, WhatsApp или ВКонтакте: услуга, мастер и время.</li>
      <li>Мы подтвердим запись и напомним о визите за час.</li>
      <li>Приходите, стригитесь, пейте кофе. Оплата на месте.</li>
    </ol>
    <div class="r-book">
      <div class="r-book-in">
        <h3>Работаем каждый день</h3>
        <ul class="r-info">
          <li><b>Адрес:</b> ул. Примерная, 7</li>
          <li><b>Часы работы:</b> ежедневно, 10:00–21:00</li>
          <li><b>Оплата:</b> картой или наличными</li>
        </ul>
        <p class="r-how">Запишитесь там, где вам удобно:</p>
        <div class="r-btns"><button class="r-btn" data-demo="Telegram-бота">Бот в Telegram</button><button class="r-btn alt" data-demo="WhatsApp">WhatsApp</button><button class="r-btn alt" data-demo="ВКонтакте">ВКонтакте</button></div>
        <p class="r-note" id="r-note" hidden aria-live="polite"></p>
      </div>
      <figure><img src="img/barber/g4.webp" alt="Королевское бритьё опасной бритвой" width="900" height="1355" loading="lazy" decoding="async"></figure>
    </div>
  </section>

  <footer class="r-foot">
    <span>Демо-проект для портфолио. Салона, адреса и цен не существует. Фото: Unsplash.</span>
    <a href="#tattoo">Следующее демо: тату-салон «Тушь»</a>
    <div class="r-sw"><span>Тёмная тема</span><button id="r-sw" type="button" role="switch" aria-checked="false" aria-label="Тёмная тема"></button></div>
  </footer>
</div>
`,
mount: function (root) {
  var sw = root.querySelector('#r-sw');
  function theme(d, save) {
    root.classList.toggle('dark', d); sw.setAttribute('aria-checked', d ? 'true' : 'false');
    if (save) { try { localStorage.setItem('bt', d ? 'dark' : 'light'); } catch (e) {} }
  }
  var saved = null; try { saved = localStorage.getItem('bt'); } catch (e) {}
  theme(saved === 'dark', false);
  sw.addEventListener('click', function () { theme(sw.getAttribute('aria-checked') !== 'true', true); });

  root.addEventListener('click', function (e) {
    var t = e.target.closest('[data-r]');
    if (t) { var el = root.querySelector('#' + t.dataset.r); if (el) el.scrollIntoView({ behavior: PORTF.reduce ? 'auto' : 'smooth' }); }
    var d = e.target.closest('[data-demo]');
    if (d) { var n = root.querySelector('#r-note'); n.hidden = false; n.textContent = 'Это демо. На рабочем сайте эта кнопка откроет ' + d.dataset.demo + ' салона.'; }
  });

  /* услуга → фото справа */
  var img = root.querySelector('#r-svc-img'), list = root.querySelector('#r-list'), cur = 'g2', tm = 0;
  function show(li) {
    if (!li || cur === li.dataset.p) return;
    cur = li.dataset.p;
    list.querySelectorAll('li').forEach(function (x) { x.classList.toggle('on', x === li); });
    img.style.opacity = 0; clearTimeout(tm);
    tm = setTimeout(function () { img.src = 'img/barber/' + cur + '.webp'; img.alt = li.querySelector('.n').firstChild.textContent; img.style.opacity = 1; }, 160);
  }
  list.addEventListener('pointerover', function (e) { show(e.target.closest('li')); });
  list.addEventListener('click', function (e) { show(e.target.closest('li')); });
  return function () { clearTimeout(tm); root.classList.remove('dark'); };
}
});
