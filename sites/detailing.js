/* Глянец: автодетейлинг. Тёмный бокс, свет софтбоксов, 3D-машина, на которой видно разницу до и после. */
PORTF.register('detailing', {
css: `
.s-detailing{--bg:#07090c;--panel:#0e1318;--line:#1b2630;--ice:#46d6ff;--steel:#c9d3da;--mute:#7f8c97;
  background:var(--bg);color:#eaf3f8;font:400 17px/1.6 'Manrope',system-ui,sans-serif}
.s-detailing h1,.s-detailing h2,.s-detailing h3{font-family:'Tektur',sans-serif;font-weight:700;text-transform:uppercase;line-height:1.02;margin:0;letter-spacing:.01em}
.s-detailing .wrap{max-width:1280px;margin:0 auto;padding-inline:clamp(18px,4.5vw,56px)}
.d-top{display:flex;justify-content:space-between;align-items:center;padding-top:20px;padding-bottom:20px}
.d-logo{font:700 20px/1 'Tektur',sans-serif;letter-spacing:.14em;text-transform:uppercase}
.d-logo i{display:inline-block;width:26px;height:3px;background:var(--ice);vertical-align:middle;margin-right:10px;box-shadow:0 0 12px var(--ice);transform:skewX(-30deg)}
.d-top span:last-child{font-size:14px;color:var(--mute)}
.d-hero{position:relative;display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);align-items:center;gap:12px;padding-bottom:30px}
.d-hero h1{font-size:clamp(2rem,5.4vw,4.3rem)}
.d-hero h1 + p{color:var(--steel);margin-top:20px;max-width:27em}
.d-stage{position:relative;aspect-ratio:1.25;min-width:0}
.d-stage canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:pan-y;cursor:grab}
.d-stage canvas:active{cursor:grabbing}
.d-stage::before{content:"";position:absolute;left:8%;right:8%;bottom:8%;height:26%;border-radius:50%;background:radial-gradient(closest-side,rgba(70,214,255,.28),transparent);filter:blur(14px)}
.d-ctl{display:grid;gap:16px;margin-top:30px;padding:18px 20px;border:1px solid var(--line);background:var(--panel);border-radius:6px;max-width:440px;clip-path:polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))}
.d-ctl label{display:flex;justify-content:space-between;font-size:14px;color:var(--mute)}
.d-ctl label b{color:var(--ice);font-weight:600}
.d-ctl input[type=range]{width:100%;accent-color:var(--ice);height:26px}
.d-paint{display:flex;gap:10px;align-items:center;font-size:14px;color:var(--mute)}
.d-paint button{width:30px;height:30px;border-radius:50%;border:2px solid var(--line);background:var(--c);transition:.2s}
.d-paint button[aria-pressed=true]{border-color:var(--ice);box-shadow:0 0 14px rgba(70,214,255,.7);transform:scale(1.1)}
.d-nogl{background:url(img/detailing/polish-hood.webp) center/cover;border:1px solid var(--line)}.d-nogl canvas,.d-nogl .d-hint{display:none}
.d-hint{position:absolute;right:0;bottom:0;font-size:13px;color:var(--mute)}
.d-nums{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.d-nums div{padding:26px 20px 26px 0;border-right:1px solid var(--line);padding-left:20px}
.d-nums div:first-child{padding-left:0}.d-nums div:last-child{border:0}
.d-nums b{display:block;font:700 clamp(1.8rem,4vw,3rem)/1 'Tektur',sans-serif;color:var(--ice);text-shadow:0 0 24px rgba(70,214,255,.45)}
.d-nums span{font-size:14.5px;color:var(--mute)}
.d-sec{padding-top:clamp(52px,8vw,104px);padding-bottom:clamp(20px,3vw,40px)}
.d-sec h2{font-size:clamp(1.6rem,4vw,2.8rem);margin-bottom:28px}
.d-svc{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
.d-svc img{display:block;width:calc(100% + 52px);max-width:none;margin:-26px -26px 8px;aspect-ratio:16/10;object-fit:cover;filter:saturate(.75) contrast(1.05);transition:filter .4s,transform .6s}
.d-svc article:hover img{filter:none;transform:scale(1.03)}
.d-svc article{background:var(--bg);padding:26px;display:grid;gap:10px;align-content:start;transition:background .3s;position:relative;overflow:hidden}
.d-svc article::after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.07) 48%,transparent 56%);transform:translateX(-100%);transition:transform .7s}
.d-svc article:hover{background:var(--panel)}.d-svc article:hover::after{transform:translateX(100%)}
.d-svc h3{font-size:1.15rem;font-weight:500}
.d-svc p{font-size:15.5px;color:var(--mute)}
.d-svc em{font-style:normal;font-weight:600;color:var(--ice);margin-top:6px}
.d-calc{display:grid;grid-template-columns:1fr 1fr;gap:clamp(20px,4vw,56px);align-items:center;background:var(--panel);border:1px solid var(--line);padding:clamp(22px,4vw,44px)}
.d-seg{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 22px}
.d-seg button{padding:11px 16px;border:1px solid var(--line);font-size:15px;font-weight:600;color:var(--steel);transition:.2s}
.d-seg button[aria-pressed=true]{border-color:var(--ice);color:#04121a;background:var(--ice);box-shadow:0 0 18px rgba(70,214,255,.45)}
.d-calc small{color:var(--mute);font-size:14px}
.d-total big{display:block;font:700 clamp(2.4rem,7vw,4.4rem)/1 'Tektur',sans-serif;font-variant-numeric:tabular-nums}
.d-total p{color:var(--mute);margin:10px 0 20px;font-size:15.5px}
.d-btn{display:inline-block;padding:15px 26px;background:var(--ice);color:#04121a;font:700 16px/1 'Tektur',sans-serif;text-transform:uppercase;letter-spacing:.06em;text-decoration:none;clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))}
.d-btn:hover{background:#8ee6ff}
.d-foot{margin-top:clamp(40px,6vw,80px);border-top:1px solid var(--line);padding-top:22px;padding-bottom:16px;display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;font-size:14px;color:var(--mute)}
.d-foot a{color:var(--ice)}
@media(max-width:860px){.d-hero,.d-calc{grid-template-columns:1fr}.d-stage{order:-1;aspect-ratio:1.3;margin:0 -10px}.d-ctl{max-width:none;margin-top:22px}.d-svc{grid-template-columns:1fr}.d-nums{grid-template-columns:1fr 1fr}.d-nums div{padding-left:0;border-right:0}.d-nums div:nth-child(-n+2){border-bottom:1px solid var(--line)}.d-hint{position:static;text-align:center}}
`,
html: `
<header class="wrap d-top"><span class="d-logo"><i></i>Глянец</span><span>Детейлинг-центр, 9:00–21:00</span></header>
<section class="wrap d-hero">
  <div>
    <h1>Блеск, которого не было даже в&nbsp;салоне</h1>
    <p>Полируем кузов, наносим керамику, чистим салон до состояния нового автомобиля. Сдвиньте ползунок и посмотрите на разницу.</p>
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
</section>
<section class="wrap"><div class="d-nums">
  <div><b>9H</b><span>твёрдость керамики по карандашной шкале</span></div>
  <div><b>110°</b><span>угол смачивания: вода скатывается шариками</span></div>
  <div><b>3 года</b><span>держится покрытие при правильной мойке</span></div>
  <div><b>2 слоя</b><span>наносим с сушкой под ИК-лампой</span></div>
</div></section>
<section class="wrap d-sec">
  <h2>Что делаем</h2>
  <div class="d-svc">
    <article><img src="img/detailing/polish.webp" alt="Полировка кузова" width="800" height="530" loading="lazy" decoding="async"><h3>Полировка кузова</h3><p>Убираем паутинку, мелкие царапины и голограммы в два или три этапа.</p><em>от 18 000 ₽</em></article>
    <article><img src="img/detailing/polish-hood.webp" alt="Керамическое покрытие" width="800" height="530" loading="lazy" decoding="async"><h3>Керамическое покрытие</h3><p>Защищает лак от реагентов и ультрафиолета, машина дольше остаётся чистой.</p><em>от 32 000 ₽</em></article>
    <article><img src="img/detailing/foam-bay.webp" alt="Детейлинг-мойка" width="800" height="530" loading="lazy" decoding="async"><h3>Детейлинг-мойка</h3><p>Трёхфазная мойка, очистка дисков и арок, сушка воздухом без разводов.</p><em>от 3 500 ₽</em></article>
    <article><img src="img/detailing/seat-clean.webp" alt="Химчистка сидений" width="800" height="530" loading="lazy" decoding="async"><h3>Химчистка сидений</h3><p>Экстрактор вытягивает грязь из ткани, сушим тёплым воздухом.</p><em>от 12 000 ₽</em></article>
    <article><img src="img/detailing/interior-spray.webp" alt="Уход за пластиком и кожей" width="800" height="530" loading="lazy" decoding="async"><h3>Уход за пластиком и кожей</h3><p>Чистим, матируем пластик, питаем кожу кондиционером.</p><em>от 6 000 ₽</em></article>
    <article><img src="img/detailing/carpet-split.webp" alt="Чистка ковров и багажника" width="800" height="530" loading="lazy" decoding="async"><h3>Чистка ковров и багажника</h3><p>Разница видна сразу: половина до, половина после.</p><em>от 4 500 ₽</em></article>
  </div>
</section>
<section class="wrap d-sec">
  <h2>Расчёт за минуту</h2>
  <div class="d-calc">
    <div>
      <small>Класс автомобиля</small><div class="d-seg" id="d-class"></div>
      <small>Пакет</small><div class="d-seg" id="d-pack"></div>
    </div>
    <div class="d-total" aria-live="polite"><big id="d-sum"></big><p id="d-what"></p><button class="d-btn" id="d-order">Записаться на осмотр</button></div>
  </div>
  <footer class="d-foot"><span>Демо-сайт детейлинг-центра. Компания вымышленная.</span><a href="#photo">Следующее демо: фотоагентство «Выдержка»</a></footer>
</section>
`,
mount: function (root) {
  /* ----- калькулятор ----- */
  var CL = [['Седан', 1], ['Кроссовер', 1.2], ['Внедорожник', 1.45]], PK = [['Свежесть', 14000, 'Детейлинг-мойка и химчистка салона, 1 день'], ['Блеск', 38000, 'Полировка в три этапа и керамика в один слой, 2 дня'], ['Броня', 96000, 'Полировка, керамика в два слоя, плёнка на зоны риска, 4 дня']];
  var ci = 0, pi = 1;
  function seg(id, arr, get, set) {
    var box = root.querySelector(id);
    arr.forEach(function (a, i) { var b = document.createElement('button'); b.textContent = a[0]; b.onclick = function () { set(i); calc(); }; box.appendChild(b); });
    return function () { box.querySelectorAll('button').forEach(function (b, i) { b.setAttribute('aria-pressed', i === get()); }); };
  }
  var u1 = seg('#d-class', CL, function () { return ci; }, function (i) { ci = i; }), u2 = seg('#d-pack', PK, function () { return pi; }, function (i) { pi = i; });
  function calc() { u1(); u2(); root.querySelector('#d-sum').textContent = (Math.round(PK[pi][1] * CL[ci][1] / 500) * 500).toLocaleString('ru-RU') + ' ₽'; root.querySelector('#d-what').textContent = PK[pi][2]; }
  calc();
  root.querySelector('#d-order').onclick = function () { this.textContent = 'Записали. Это демо'; };

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

  return function () { dead = true; if (dispose3d) dispose3d(); };
}
});
