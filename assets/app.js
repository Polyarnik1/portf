/* Полярник: роутер, переходы между сайтами, 3D-звезда */
(function () {
  'use strict';
  var TG = 'https://t.me/Polyarnikznak';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var touch = matchMedia('(pointer: coarse)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };

  var META = {
    coffee:    { name: 'Зерно и пар', bg: '#1d3a2b', ink: '#f3e6d0', font: "400 1em 'Yeseva One',Georgia,serif" },
    barber:    { name: 'ЦИРЮЛЬНЯ №7', bg: '#0F1923', ink: '#EDF0F3', font: "700 1em 'Oswald',Impact,sans-serif" },
    tattoo:    { name: 'Тушь',        bg: '#090909', ink: '#e9e3d7', font: "italic 500 1.2em 'Cormorant Garamond',Georgia,serif" },
    detailing: { name: 'ГЛЯНЕЦ',      bg: '#07090c', ink: '#46d6ff', font: "700 1em 'Tektur',sans-serif" },
    photo:     { name: 'Выдержка',    bg: '#0c0b0a', ink: '#ece6da', font: "400 1em 'Prata',Georgia,serif" },
    estate:    { name: 'Высота',      bg: '#10291f', ink: '#ebe7de', font: "400 1em 'Tenor Sans',Georgia,serif" }
  };
  var ORDER = ['coffee', 'barber', 'tattoo', 'detailing', 'photo', 'estate'];
  var HOME = { name: 'Полярник', bg: '#d97757', ink: '#160905', font: "700 .8em 'Unbounded',sans-serif" };

  var PORTF = window.PORTF = {
    tg: TG, sites: {}, reduce: reduce, touch: touch,
    register: function (id, def) { this.sites[id] = def; },
    /* общий подвал демо-сайта: ссылка на следующий проект */
    next: function (id) {
      var n = ORDER[(ORDER.indexOf(id) + 1) % ORDER.length];
      return { id: n, name: META[n].name };
    }
  };

  var home = $('#home'), site = $('#site'), dock = $('#dock'), veil = $('#veil'), veilName = $('#veilName');
  var styleTag = document.createElement('style'); document.head.appendChild(styleTag);
  var current = null, cleanup = null, homeScroll = 0, busy = false, lastPoint = null;
  var baseTitle = document.title;

  function loadSite(id) {
    return new Promise(function (res, rej) {
      if (PORTF.sites[id]) return res();
      var s = document.createElement('script');
      s.src = 'sites/' + id + '.js';
      s.onload = function () { PORTF.sites[id] ? res() : rej(); };
      s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function jump(y) { try { window.scrollTo({ top: y, left: 0, behavior: 'instant' }); } catch (e) { window.scrollTo(0, y); } }

  function swap(id) {
    if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
    if (id) {
      if (!current) homeScroll = window.scrollY;
      var def = PORTF.sites[id];
      styleTag.textContent = def.css;
      site.className = 'site s-' + id;
      site.innerHTML = def.html;
      home.hidden = true; site.hidden = false; dock.hidden = false;
      document.title = META[id].name + ' · демо от Полярника';
      jump(0);
      cleanup = def.mount(site) || null;
      current = id;
    } else {
      site.hidden = true; dock.hidden = true; site.innerHTML = ''; styleTag.textContent = '';
      home.hidden = false; document.title = baseTitle; current = null;
      jump(homeScroll);
    }
    Star.setActive(!id); Relief.setActive(!id);
  }

  function go(id, instant) {
    if (busy || id === current) return;
    var m = id ? META[id] : HOME;
    var ready = id ? loadSite(id) : Promise.resolve();
    if (instant || reduce) { ready.then(function () { swap(id); }, function () { location.hash = ''; }); return; }
    busy = true;
    var p = lastPoint || { x: innerWidth / 2, y: innerHeight / 2 }; lastPoint = null;
    veil.style.setProperty('--vx', p.x + 'px'); veil.style.setProperty('--vy', p.y + 'px');
    veil.style.setProperty('--vbg', m.bg); veil.style.setProperty('--vink', m.ink);
    veilName.style.font = m.font; veilName.style.fontSize = 'clamp(2.4rem,10vw,7rem)';
    if (id) veilName.textContent = m.name; else veilName.innerHTML = '<img src="assets/logo.png" alt="Полярник">';
    veil.className = 'veil on';
    Promise.all([ready, wait(820)]).then(function () {
      swap(id);
      return wait(180);
    }).catch(function () { location.hash = ''; }).then(function () {
      veil.className = 'veil on out';
      return wait(460);
    }).then(function () {
      veil.className = 'veil'; busy = false;
      route(); // если хэш успел смениться во время перехода
    });
  }

  function route(instant) {
    var h = location.hash.replace('#', '');
    go(META[h] ? h : null, instant === true);
  }
  window.addEventListener('hashchange', function () { route(); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (a) lastPoint = { x: e.clientX || innerWidth / 2, y: e.clientY || innerHeight / 2 };
    var sc = e.target.closest('[data-scroll]');
    if (sc) {
      var t = document.getElementById(sc.dataset.scroll);
      if (t) window.scrollTo({ top: sc.dataset.scroll === 'top' ? 0 : t.getBoundingClientRect().top + scrollY - 60, behavior: reduce ? 'auto' : 'smooth' });
    }
  });

  /* nav + свечение карточек услуг под курсором */
  var nav = $('#nav');
  addEventListener('scroll', function () { nav.classList.toggle('stuck', scrollY > 30); }, { passive: true });
  if (!touch) document.querySelectorAll('.svc').forEach(function (c) {
    c.addEventListener('pointermove', function (e) {
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
  if (touch) $('#stageHint').textContent = 'Покрутите звезду пальцем';

  /* ---------- 3D: полярная звезда ---------- */
  var Star = (function () {
    var canvas = $('#star'), T = window.THREE, active = true, visible = true, raf = 0;
    var api = { setActive: function (v) { active = v; kick(); } };
    if (!T || !canvas) return api;
    var renderer;
    try { renderer = new T.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true, powerPreference: 'high-performance' }); }
    catch (e) { return api; }
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, touch ? 1.75 : 2));
    var scene = new T.Scene();
    var cam = new T.PerspectiveCamera(36, 1, .1, 50); cam.position.z = 9.2;

    var follow = new T.Group(), spin = new T.Group(); follow.add(spin); scene.add(follow);

    // звёздчатый икосаэдр: на каждую грань ставим пирамиду
    var base = new T.IcosahedronGeometry(1.05, 0).attributes.position, pos = [];
    var a = new T.Vector3(), b = new T.Vector3(), c = new T.Vector3(), tip = new T.Vector3();
    for (var i = 0; i < base.count; i += 3) {
      a.fromBufferAttribute(base, i); b.fromBufferAttribute(base, i + 1); c.fromBufferAttribute(base, i + 2);
      tip.copy(a).add(b).add(c).normalize().multiplyScalar(2.15);
      [[a, b, tip], [b, c, tip], [c, a, tip]].forEach(function (t) { t.forEach(function (v) { pos.push(v.x, v.y, v.z); }); });
    }
    var g = new T.BufferGeometry(); g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.computeVertexNormals();
    var body = new T.Mesh(g, new T.MeshStandardMaterial({ color: 0x1a0d07, metalness: .92, roughness: .22, flatShading: true, emissive: 0x4a1a08, emissiveIntensity: .9 }));
    spin.add(body);
    var edges = new T.LineSegments(new T.EdgesGeometry(g), new T.LineBasicMaterial({ color: 0xff9a66, transparent: true, opacity: .55 }));
    spin.add(edges);

    var cage = new T.LineSegments(new T.EdgesGeometry(new T.IcosahedronGeometry(2.75, 1)), new T.LineBasicMaterial({ color: 0xd97757, transparent: true, opacity: .22 }));
    follow.add(cage);
    var ringMat = new T.MeshBasicMaterial({ color: 0xff8f5a, transparent: true, opacity: .7 });
    var r1 = new T.Mesh(new T.TorusGeometry(3.15, .012, 6, 160), ringMat); r1.rotation.x = 1.25;
    var r2 = new T.Mesh(new T.TorusGeometry(3.4, .008, 6, 160), ringMat); r2.rotation.set(.5, .7, 0);
    follow.add(r1, r2);
    var sat = new T.Mesh(new T.SphereGeometry(.07, 12, 12), new T.MeshBasicMaterial({ color: 0xffd0b0 })); r1.add(sat);

    // пыль
    var N = touch ? 260 : 520, pp = new Float32Array(N * 3);
    for (i = 0; i < N; i++) {
      var r = 3 + Math.random() * 2.2, th = Math.random() * 6.283, ph = Math.acos(2 * Math.random() - 1);
      pp[i * 3] = r * Math.sin(ph) * Math.cos(th); pp[i * 3 + 1] = r * Math.cos(ph); pp[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
    }
    var pg = new T.BufferGeometry(); pg.setAttribute('position', new T.BufferAttribute(pp, 3));
    var dust = new T.Points(pg, new T.PointsMaterial({ color: 0xffb48c, size: .035, transparent: true, opacity: .8, blending: T.AdditiveBlending, depthWrite: false }));
    scene.add(dust);

    scene.add(new T.AmbientLight(0x331a10, 1.2));
    var l1 = new T.PointLight(0xff8f5a, 4.4, 30); l1.position.set(4, 3, 6); scene.add(l1);
    var l2 = new T.PointLight(0xffffff, 1.3, 30); l2.position.set(-6, 4, 2); scene.add(l2);
    var l3 = new T.PointLight(0xd95a2b, 2.4, 30); l3.position.set(-2, -5, 3); scene.add(l3);
    var chase = new T.PointLight(0xffe0c8, 2.2, 14); chase.position.set(0, 0, 5); scene.add(chase);

    function resize() {
      var w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
      renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix();
    }
    if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas); else addEventListener('resize', resize);
    resize();

    var tx = 0, ty = 0, vx = 0, vy = .0035, drag = false, lx = 0, ly = 0;
    if (!touch) addEventListener('pointermove', function (e) {
      var r = canvas.getBoundingClientRect();
      var nx = (e.clientX - (r.left + r.width / 2)) / innerWidth, ny = (e.clientY - (r.top + r.height / 2)) / innerHeight;
      ty = Math.max(-1, Math.min(1, nx * 2)) * .95; tx = Math.max(-1, Math.min(1, ny * 2)) * .7;
      chase.position.set(nx * 9, -ny * 9, 5);
    }, { passive: true });
    canvas.addEventListener('pointerdown', function (e) { drag = true; lx = e.clientX; ly = e.clientY; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', function (e) {
      if (!drag) return;
      vy = (e.clientX - lx) * .008; vx = (e.clientY - ly) * .008; lx = e.clientX; ly = e.clientY;
      spin.rotation.y += vy; spin.rotation.x += vx;
    });
    function up() { drag = false; }
    canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);

    var last = 0;
    function frame(t) {
      raf = 0;
      if (!active || !visible || document.hidden) return;
      var dt = Math.min(50, t - last || 16) / 16.67; last = t;
      follow.rotation.y += (ty - follow.rotation.y) * .06 * dt;
      follow.rotation.x += (tx - follow.rotation.x) * .06 * dt;
      if (!drag) {
        spin.rotation.y += vy * dt; spin.rotation.x += vx * dt;
        vx *= Math.pow(.95, dt); vy += (.0035 - vy) * (1 - Math.pow(.97, dt));
      }
      cage.rotation.y -= .0016 * dt; cage.rotation.z += .0009 * dt;
      r1.rotation.z += .004 * dt; r2.rotation.z -= .0025 * dt;
      sat.position.set(Math.cos(t * .0012) * 3.15, Math.sin(t * .0012) * 3.15, 0);
      dust.rotation.y += .0007 * dt;
      renderer.render(scene, cam);
      if (!reduce) raf = requestAnimationFrame(frame);
    }
    function kick() { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }
    if (window.IntersectionObserver) new IntersectionObserver(function (en) { visible = en[0].isIntersecting; kick(); }).observe(canvas);
    document.addEventListener('visibilitychange', kick);
    if (reduce) { canvas.addEventListener('pointermove', kick); addEventListener('pointermove', kick, { passive: true }); }
    kick();
    return api;
  })();

  /* ---------- рельеф: пунктирная сетка в перспективе, у краёв плавно поднимается ---------- */
  var Relief = (function () {
    var list = [], active = true;
    document.querySelectorAll('.relief canvas').forEach(function (cv) {
      var ctx = cv.getContext('2d'); if (!ctx) return;
      var item = { cv: cv, ctx: ctx, vis: false, w: 0, h: 0 };
      list.push(item);
      if (window.IntersectionObserver) new IntersectionObserver(function (en) { item.vis = en[0].isIntersecting; kick(); }).observe(cv); else item.vis = true;
    });
    var dpr = Math.min(devicePixelRatio || 1, 1.5), raf = 0, last = 0, flow = 0, acc = 0;
    function size(it) {
      var w = it.cv.clientWidth, h = it.cv.clientHeight; if (!w || !h) return false;
      if (w !== it.w || h !== it.h) { it.w = w; it.h = h; it.cv.width = Math.round(w * dpr); it.cv.height = Math.round(h * dpr); it.ctx.setTransform(dpr, 0, 0, dpr, 0, 0); it.bgW = 0; }
      return true;
    }
    function smooth(e0, e1, x) { var t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); }
    function height(x, z) { // x от -1 до 1; у краёв холмы, в центре ровно
      var edge = smooth(.28, 1, Math.abs(x));
      return edge * edge * (1.25 + .35 * Math.sin(z * .55 + x * 3.1) + .22 * Math.sin(z * 1.3 - x * 7)) ;
    }
    function smoothstep(a, b, x) { return smooth(a, b, x); }
    // сцена с горизонтом: плоский коридор в центре, по бокам гребни с перекрытием линий
    function terrainBg(it) {
      var W = it.w, H = it.h, o = document.createElement('canvas'); o.width = W; o.height = H;
      var g = o.getContext('2d'), hz = H * .3;
      g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
      var r = g.createRadialGradient(W / 2, hz, 0, W / 2, hz, W * .4);
      r.addColorStop(0, 'rgba(255,143,90,.62)'); r.addColorStop(.35, 'rgba(217,119,87,.22)'); r.addColorStop(1, 'rgba(217,119,87,0)');
      g.save(); g.translate(0, hz); g.scale(1, .3); g.translate(0, -hz); g.fillStyle = r; g.fillRect(0, -H * 2, W, H * 6); g.restore();
      it.bg = o; it.bgPat = it.ctx.createPattern(o, 'no-repeat'); it.bgW = W; it.bgH = H;
    }
    function tH(X, wz) {
      var ax = Math.abs(X), e = smoothstep(3.2, 9.5, ax);
      return e * e * (1.5 + .75 * Math.sin(wz * .5 + ax * .9) + .45 * Math.sin(wz * 1.15 - ax * .6)) + .12 * e * Math.sin(wz * 2.3 + X);
    }
    function drawTerrain(it) {
      var c = it.ctx, W = it.w, H = it.h;
      if (it.bgW !== W || it.bgH !== H) terrainBg(it);
      var hz = H * .3, f = W * .56, fy = f * .5, camH = 1.3, zmin = 1.1, rows = 46, cols = 64, xs = .62;
      var tt = flow * 5.5, fr = tt % 1, fi = Math.floor(tt);
      c.setLineDash([]); c.globalCompositeOperation = 'source-over';
      c.drawImage(it.bg, 0, 0);
      // линия горизонта
      var hg = c.createLinearGradient(0, 0, W, 0); hg.addColorStop(0, 'rgba(255,143,90,0)'); hg.addColorStop(.5, 'rgba(255,170,120,.85)'); hg.addColorStop(1, 'rgba(255,143,90,0)');
      c.fillStyle = hg; c.fillRect(0, hz - .5, W, 1);
      function pt(i, z, wz) { var X = (i - cols / 2) * xs, Y = tH(X, wz); return [W / 2 + X * f / z, hz + (camH - Y) * fy / z]; }
      var prev = null;
      for (var r = rows; r >= 0; r--) {
        var z = zmin * Math.pow(1.11, r - fr), wz = (r + fi) * .62; // мировая координата ряда
        var P = [], i; for (i = 0; i <= cols; i++) P.push(pt(i, z, wz));
        var a = Math.pow(1 - r / (rows + 1), 1.1);
        // закрашиваем всё под гребнем фоном, чтобы скрыть дальние линии
        c.beginPath(); c.moveTo(P[0][0], H + 4); for (i = 0; i <= cols; i++) c.lineTo(P[i][0], P[i][1]); c.lineTo(P[cols][0], H + 4); c.closePath();
        c.fillStyle = it.bgPat; c.fill();
        // поперечные отрезки к более дальнему ряду
        if (prev) {
          c.setLineDash([4, 4]); c.lineWidth = 1; c.strokeStyle = 'rgba(255,143,90,' + (a * .62).toFixed(3) + ')'; c.beginPath();
          for (i = 0; i <= cols; i++) { c.moveTo(P[i][0], P[i][1]); c.lineTo(prev[i][0], prev[i][1]); }
          c.stroke();
        }
        // сам ряд
        c.setLineDash([6, 5]); c.lineWidth = 1.1; c.strokeStyle = 'rgba(255,150,100,' + Math.min(1, a * .78).toFixed(3) + ')'; c.beginPath();
        for (i = 0; i <= cols; i++) { if (i) c.lineTo(P[i][0], P[i][1]); else c.moveTo(P[i][0], P[i][1]); }
        c.stroke();
        prev = P;
      }
      c.setLineDash([]);
    }
    function draw(it) {
      if (!size(it)) return;
      if (it.cv.dataset.mode === 'terrain' && it.w >= 900) { drawTerrain(it); return; }
      var c = it.ctx, W = it.w, H = it.h, cols = W < 700 ? 22 : 34, rows = 26, f = H * 1.05, camY = 1.1, horizon = H * .02;
      c.clearRect(0, 0, W, H); c.lineWidth = 1; c.setLineDash([3, 5]);
      var dz = .55, zoff = flow % dz, spread = 2.6;
      function P(xn, z) { var X = xn * spread * (1 + z * .25), y = height(xn, z + flow); return [W / 2 + X * f / (z + 1.2) * .55, horizon + (camY - y * .9 + 1.4) * f / (z + 1.2) * .62]; }
      // строки (по x), от дальних к ближним
      for (var r = rows; r >= 0; r--) {
        var z = r * dz - zoff; if (z < 0) continue;
        var a = Math.max(0, Math.min(1, 1 - z / (rows * dz))) * .85;
        c.strokeStyle = 'rgba(217,119,87,' + a.toFixed(3) + ')'; c.beginPath();
        for (var i = 0; i <= cols; i++) { var p = P(i / cols * 2 - 1, z); if (i) c.lineTo(p[0], p[1]); else c.moveTo(p[0], p[1]); }
        c.stroke();
      }
      // столбцы (по z)
      for (var k = 0; k <= cols; k++) {
        var xn = k / cols * 2 - 1, g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, 'rgba(217,119,87,0)'); g.addColorStop(1, 'rgba(255,143,90,.55)');
        c.strokeStyle = g; c.beginPath();
        for (var r2 = 0; r2 <= rows; r2++) { var z2 = r2 * dz - zoff; if (z2 < 0) z2 = 0; var q = P(xn, z2); if (r2) c.lineTo(q[0], q[1]); else c.moveTo(q[0], q[1]); }
        c.stroke();
      }
    }
    function frame(t) {
      raf = 0; if (!active || document.hidden) return;
      var dt = Math.min(64, t - (last || t)); last = t; acc += dt;
      if (acc < 33) { raf = requestAnimationFrame(frame); return; } // ~30 кадров в секунду достаточно
      if (!reduce) flow += acc * .00018; acc = 0;
      var any = false; list.forEach(function (it) { if (it.vis) { draw(it); any = true; } });
      if (any && !reduce) raf = requestAnimationFrame(frame);
    }
    function kick() { if (!raf && active) { last = 0; acc = 99; raf = requestAnimationFrame(frame); } }
    addEventListener('resize', function () { list.forEach(function (it) { it.w = 0; }); kick(); });
    document.addEventListener('visibilitychange', kick);
    kick();
    return { setActive: function (v) { active = v; if (v) { list.forEach(function (it) { it.w = 0; }); kick(); } } };
  })();

  route(true);
})();
