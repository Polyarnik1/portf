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
.d-hint{position:absolute;right:0;bottom:0;font-size:13px;color:var(--mute)}
.d-nums{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.d-nums div{padding:26px 20px 26px 0;border-right:1px solid var(--line);padding-left:20px}
.d-nums div:first-child{padding-left:0}.d-nums div:last-child{border:0}
.d-nums b{display:block;font:700 clamp(1.8rem,4vw,3rem)/1 'Tektur',sans-serif;color:var(--ice);text-shadow:0 0 24px rgba(70,214,255,.45)}
.d-nums span{font-size:14.5px;color:var(--mute)}
.d-sec{padding-top:clamp(52px,8vw,104px);padding-bottom:clamp(20px,3vw,40px)}
.d-sec h2{font-size:clamp(1.6rem,4vw,2.8rem);margin-bottom:28px}
.d-svc{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
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
      <div><label for="d-gloss">Кузов <b id="d-gloss-v">после керамики</b></label><input type="range" id="d-gloss" min="0" max="100" value="100"></div>
      <div class="d-paint"><span>Цвет</span>
        <button style="--c:#0b0d10" data-c="0b0d10" aria-label="Чёрный" aria-pressed="true"></button>
        <button style="--c:#0c3c8a" data-c="0a2f78" aria-label="Синий" aria-pressed="false"></button>
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
    <article><h3>Полировка кузова</h3><p>Убираем паутинку, мелкие царапины и голограммы в два или три этапа.</p><em>от 18 000 ₽</em></article>
    <article><h3>Керамическое покрытие</h3><p>Защищает лак от реагентов и ультрафиолета, машина дольше остаётся чистой.</p><em>от 32 000 ₽</em></article>
    <article><h3>Антигравийная плёнка</h3><p>Полиуретан на капот, бампер, фары и зоны риска. Сколы остаются на плёнке.</p><em>от 45 000 ₽</em></article>
    <article><h3>Химчистка салона</h3><p>Сиденья, потолок, ковры, багажник. Сушим и обрабатываем кожу кондиционером.</p><em>от 12 000 ₽</em></article>
    <article><h3>Детейлинг-мойка</h3><p>Трёхфазная мойка, очистка дисков и арок, сушка воздухом без разводов.</p><em>от 3 500 ₽</em></article>
    <article><h3>Подготовка к продаже</h3><p>Лёгкая полировка, салон, моторный отсек. Машина выглядит на свою цену.</p><em>от 15 000 ₽</em></article>
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

  /* ----- 3D ----- */
  var T = window.THREE, canvas = root.querySelector('canvas'), gloss = root.querySelector('#d-gloss'), glossV = root.querySelector('#d-gloss-v');
  if (!T) return;
  var renderer; try { renderer = new T.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true }); } catch (e) { return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, PORTF.touch ? 1.75 : 2));
  renderer.outputEncoding = T.sRGBEncoding; renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
  var scene = new T.Scene(), cam = new T.PerspectiveCamera(30, 1.25, .1, 60);
  cam.position.set(0, 2.1, 10.6); cam.lookAt(0, .55, 0);

  // студия: софтбоксы на чёрном, от них блики на лаке
  var ec = document.createElement('canvas'); ec.width = 1024; ec.height = 512; var e2 = ec.getContext('2d');
  e2.fillStyle = '#020304'; e2.fillRect(0, 0, 1024, 512);
  function box(x, y, w, h, c, blur) { e2.save(); e2.filter = 'blur(' + blur + 'px)'; e2.fillStyle = c; e2.fillRect(x, y, w, h); e2.restore(); }
  box(90, 110, 240, 16, '#e6eef2', 4); box(600, 100, 260, 14, '#e6eef2', 4); box(430, 30, 90, 10, '#6fc8ee', 6); box(0, 150, 1024, 10, '#bfefff', 3);
  box(230, 190, 120, 70, '#eaf8ff', 14); box(720, 200, 150, 60, '#46d6ff', 18); box(0, 330, 1024, 182, '#0a1016', 0);
  var pm = new T.PMREMGenerator(renderer), envTex = new T.CanvasTexture(ec); envTex.mapping = T.EquirectangularReflectionMapping;
  var env = pm.fromEquirectangular(envTex).texture; scene.environment = env; envTex.dispose(); pm.dispose();

  var car = new T.Group(); scene.add(car);
  var paint = new T.MeshPhysicalMaterial({ color: 0x0b0d10, metalness: .55, roughness: .12, clearcoat: 1, clearcoatRoughness: .03, envMapIntensity: 1.3 });
  var glass = new T.MeshPhysicalMaterial({ color: 0x05070a, metalness: .9, roughness: .04, clearcoat: 1, envMapIntensity: 1.8 });
  var ext = function (shape, depth, bevel) { var g = new T.ExtrudeGeometry(shape, { depth: depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 6, curveSegments: 28 }); g.translate(0, 0, -depth / 2); return g; };

  var s = new T.Shape();
  s.moveTo(-2.12, .3); s.lineTo(-2.2, .58); s.quadraticCurveTo(-2.2, .84, -1.95, .88);
  s.lineTo(-1.3, .93); s.lineTo(.95, .9); s.bezierCurveTo(1.5, .86, 1.95, .76, 2.14, .64);
  s.quadraticCurveTo(2.24, .52, 2.2, .3); s.lineTo(1.78, .3); s.absarc(1.38, .3, .4, 0, Math.PI, false);
  s.lineTo(-.95, .3); s.absarc(-1.35, .3, .4, 0, Math.PI, false); s.lineTo(-2.12, .3);
  car.add(new T.Mesh(ext(s, 1.56, .12), paint));

  var c = new T.Shape();
  c.moveTo(-1.42, .9); c.bezierCurveTo(-1.0, 1.24, -.55, 1.36, -.1, 1.36); c.bezierCurveTo(.3, 1.36, .62, 1.16, .98, .88); c.lineTo(-1.42, .9);
  car.add(new T.Mesh(ext(c, 1.26, .1), glass));
  // крыша в цвет кузова поверх остекления
  var r = new T.Shape();
  r.moveTo(-.95, 1.3); r.bezierCurveTo(-.6, 1.4, -.3, 1.41, -.1, 1.41); r.bezierCurveTo(.1, 1.41, .25, 1.36, .38, 1.3); r.lineTo(-.95, 1.3);
  var roof = new T.Mesh(ext(r, 1.2, .1), paint); roof.position.y = -.035; car.add(roof);

  var tire = new T.MeshStandardMaterial({ color: 0x08090a, roughness: .85 }), rim = new T.MeshStandardMaterial({ color: 0xcfd6dc, metalness: 1, roughness: .18, envMapIntensity: 1.6 });
  var tg = new T.CylinderGeometry(.36, .36, .3, 40), rg = new T.CylinderGeometry(.23, .23, .32, 10), hg = new T.CylinderGeometry(.07, .07, .34, 16);
  [[1.38, .88], [1.38, -.88], [-1.35, .88], [-1.35, -.88]].forEach(function (p) {
    var w = new T.Group(); w.position.set(p[0], .36, p[1]); w.rotation.x = Math.PI / 2;
    w.add(new T.Mesh(tg, tire), new T.Mesh(rg, rim), new T.Mesh(hg, tire)); car.add(w);
  });
  var lampF = new T.Mesh(new T.BoxGeometry(.05, .07, 1.5), new T.MeshBasicMaterial({ color: 0xe8fbff })); lampF.position.set(2.2, .62, 0); car.add(lampF);
  var lampR = new T.Mesh(new T.BoxGeometry(.05, .06, 1.6), new T.MeshBasicMaterial({ color: 0xff2a2a })); lampR.position.set(-2.24, .72, 0); car.add(lampR);

  var floor = new T.Mesh(new T.CircleGeometry(3.25, 72), new T.MeshStandardMaterial({ color: 0x06090c, metalness: .85, roughness: .42, envMapIntensity: .3 })); floor.rotation.x = -Math.PI / 2; scene.add(floor);
  var ring = new T.Mesh(new T.TorusGeometry(3.25, .012, 6, 160), new T.MeshBasicMaterial({ color: 0x46d6ff })); ring.rotation.x = Math.PI / 2; ring.position.y = .01; scene.add(ring);
  var shadow = new T.Mesh(new T.PlaneGeometry(5.4, 2.6), new T.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: .75, alphaMap: (function () { var k = document.createElement('canvas'); k.width = k.height = 128; var x = k.getContext('2d'), g = x.createRadialGradient(64, 64, 10, 64, 64, 64); g.addColorStop(0, '#fff'); g.addColorStop(1, '#000'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); return new T.CanvasTexture(k); })() }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = .02; car.add(shadow);
  scene.add(new T.HemisphereLight(0xcfeaff, 0x05070a, .25));
  var key = new T.DirectionalLight(0xffffff, .45); key.position.set(3, 6, 4); scene.add(key);

  var clean = new T.Color(0x0b0d10), dull = new T.Color();
  function applyGloss() {
    var t = gloss.value / 100;
    paint.roughness = .72 - .6 * t; paint.clearcoat = t; paint.envMapIntensity = .3 + 1.0 * t; paint.metalness = .25 + .3 * t;
    dull.copy(clean).lerp(new T.Color(0x6b6f72), .35); paint.color.copy(dull).lerp(clean, t);
    glossV.textContent = t > .8 ? 'после керамики' : t > .4 ? 'после полировки' : 'до обработки';
  }
  gloss.addEventListener('input', applyGloss);
  root.querySelectorAll('.d-paint button').forEach(function (b) {
    b.onclick = function () { root.querySelectorAll('.d-paint button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); clean.set('#' + b.dataset.c); applyGloss(); };
  });
  applyGloss();

  function resize() { var w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return; renderer.setSize(w, h, false); cam.aspect = w / h; cam.position.z = w / h < 1.1 ? 12 : 10.6; cam.updateProjectionMatrix(); }
  var ro = window.ResizeObserver ? new ResizeObserver(resize) : null; if (ro) ro.observe(canvas); resize();

  var rot = -.65, vel = .003, drag = false, lx = 0, raf = 0, alive = true, vis = true, last = 0;
  canvas.addEventListener('pointerdown', function (e) { drag = true; lx = e.clientX; try { canvas.setPointerCapture(e.pointerId); } catch (x) {} });
  canvas.addEventListener('pointermove', function (e) { if (!drag) return; vel = (e.clientX - lx) * .008; rot += vel; lx = e.clientX; });
  function up() { drag = false; } canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
  function frame(t) {
    raf = 0; if (!alive || !vis || document.hidden) return;
    var dt = Math.min(50, t - last || 16) / 16.67; last = t;
    if (!drag) { rot += vel * dt; vel += (.003 - vel) * .03 * dt; }
    car.rotation.y = rot; renderer.render(scene, cam);
    if (!PORTF.reduce || drag) raf = requestAnimationFrame(frame);
  }
  function kick() { if (!raf && alive) { last = 0; raf = requestAnimationFrame(frame); } }
  var io = window.IntersectionObserver ? new IntersectionObserver(function (en) { vis = en[0].isIntersecting; kick(); }) : null; if (io) io.observe(canvas);
  document.addEventListener('visibilitychange', kick);
  if (PORTF.reduce) { gloss.addEventListener('input', kick); canvas.addEventListener('pointermove', kick); root.querySelector('.d-paint').addEventListener('click', kick); }
  kick();

  return function () {
    alive = false; cancelAnimationFrame(raf); if (ro) ro.disconnect(); if (io) io.disconnect();
    document.removeEventListener('visibilitychange', kick);
    scene.traverse(function (o) { if (o.geometry) o.geometry.dispose(); if (o.material) { if (o.material.alphaMap) o.material.alphaMap.dispose(); o.material.dispose(); } });
    env.dispose(); renderer.dispose(); try { renderer.forceContextLoss(); } catch (e) {}
  };
}
});
