/* Карусель шести сайтов. Листается стрелками, свайпом, клавишами и вкладками;
   по бокам активной карточки выезжают плашки с тем, что умеет сайт. */
(function () {
  var root = document.getElementById('portals');
  if (!root || !root.classList.contains('cf')) return;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hover = matchMedia('(hover:hover) and (pointer:fine)').matches;
  var mq = matchMedia('(max-width:899px)');

  var INFO = {
    coffee: { acc: '#d9a066', font: "'Yeseva One',Georgia,serif", ghost: 'Зерно и пар',
      l: ['Что внутри', ['Меню по вкладкам с фото каждого раздела', 'Калькулятор заваривания: граммы, вода, помол, время', 'Статус «открыто сейчас» по реальным часам']],
      r: ['Чем полезен кофейне', ['Карта гостя в мини-приложении Telegram', 'Зерно недели и путь от фермы до чашки', 'Тёплый крафтовый стиль, который хочется листать']] },
    barber: { acc: '#e0364c', font: "'Oswald',Impact,sans-serif", ghost: 'ЦИРЮЛЬНЯ №7',
      l: ['Что внутри', ['Крутящийся барбер-пол прямо в первом экране', 'Фото услуги при наведении на прайс', 'Тёмная тема одним переключателем']],
      r: ['Чем полезен барбершопу', ['Мастера с фото, опытом и записью к конкретному', 'Запись через Telegram, WhatsApp и ВКонтакте', 'Чёткий прайс без звонков и уточнений']] },
    tattoo: { acc: '#ff2d55', font: "'Cormorant Garamond',Georgia,serif", it: 1, ghost: 'Тушь',
      l: ['Что внутри', ['Мерцающий неоновый заголовок', 'Галерея работ с полноэкранным просмотром', 'Рисовалка симметричного орнамента']],
      r: ['Чем полезен студии', ['Калькулятор цены по размеру и сложности', 'Этапы сеанса и ответы на частые вопросы', 'Ночной чёрный стиль под характер студии']] },
    detailing: { acc: '#46d6ff', font: "'Tektur',sans-serif", ghost: 'ГЛЯНЕЦ',
      l: ['Что внутри', ['3D-машина: меняйте цвет и степень блеска', 'Шторка «до / после» на реальной работе', 'Блик, который бежит за курсором']],
      r: ['Чем полезен детейлингу', ['Калькулятор с чеком: пакет, опции, класс авто', 'Итог всегда виден внизу экрана телефона', 'Услуги со сменой фото при прокрутке']] },
    photo: { acc: '#d8c39a', font: "'Prata',Georgia,serif", ghost: 'Выдержка',
      l: ['Что внутри', ['Серии листаются вбок и открываются кадр за кадром', 'Фото-пример плывёт за курсором по прайсу', 'Просмотр с анимацией затвора']],
      r: ['Чем полезен фотографу', ['Портфолио с фильтрами по жанрам', 'Форма брони съёмки без лишних полей', 'Премиальная палитра, где главное — кадры']] },
    estate: { acc: '#c9a25f', font: "'Tenor Sans',Georgia,serif", ghost: 'Высота',
      l: ['Что внутри', ['3D-квартал, где подсвечены свободные квартиры', 'Клик по дому ведёт к карточке квартиры', 'Подсказка с ценой при наведении на здание']],
      r: ['Чем полезен агентству', ['Фильтр «купить / снять» и по комнатам', 'Планировка у каждой квартиры', 'Ипотечный калькулятор с платежом в месяц']] }
  };
  var CHECK = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var stage = root.querySelector('.cf-stage'), items = [].slice.call(root.querySelectorAll('.cf-item'));
  var pl = root.querySelector('.cf-l'), pr = root.querySelector('.cf-r');
  var ghosts = root.querySelectorAll('.cf-ghost span'), gi = 0;
  var glows = [document.createElement('div'), document.createElement('div')], gl = 0;
  glows.forEach(function (g) { g.className = 'cf-glow'; g.setAttribute('aria-hidden', 'true'); root.insertBefore(g, root.firstChild); });
  var tabs = root.querySelector('.cf-tabs'), count = root.querySelector('.cf-count b'), open = root.querySelector('.cf-open');
  var N = items.length, cur = 0, timers = [], auto = null, AUTO_MS = 7000, autoOn = !reduce, inView = false, started = false;
  var ids = items.map(function (it) { return it.querySelector('.portal').dataset.site; });

  // вкладки
  ids.forEach(function (id, i) {
    var b = document.createElement('button'); b.type = 'button'; b.className = 'cf-tab'; b.setAttribute('role', 'tab');
    b.innerHTML = items[i].querySelector('.p-kind').textContent.split(',')[0].replace('Агентство недвижимости', 'Недвижимость') + '<i></i>';
    b.addEventListener('click', function () { user(); go(i); });
    tabs.appendChild(b);
  });
  var tabEls = [].slice.call(tabs.children);

  // на телефоне плашки живут под сценой
  var below = document.createElement('div'); below.className = 'cf-panels';
  function place() {
    if (mq.matches) { below.appendChild(pl); below.appendChild(pr); stage.after(below); }
    else { stage.insertBefore(pl, stage.firstChild); stage.appendChild(pr); if (below.parentNode) below.remove(); }
  }
  // на телефоне высота плашек одинакова для всех сайтов, чтобы блок и сетка за ним не прыгали
  function fixHeights() {
    pl.style.minHeight = pr.style.minHeight = '';
    if (!mq.matches) return;
    var mh = [0, 0], keep = [pl.innerHTML, pr.innerHTML];
    ids.forEach(function (id) {
      fill(pl, 'l', INFO[id]); fill(pr, 'r', INFO[id]);
      mh[0] = Math.max(mh[0], pl.offsetHeight); mh[1] = Math.max(mh[1], pr.offsetHeight);
    });
    pl.innerHTML = keep[0]; pr.innerHTML = keep[1];
    pl.style.minHeight = mh[0] + 'px'; pr.style.minHeight = mh[1] + 'px';
  }
  place(); (mq.addEventListener ? mq.addEventListener('change', function () { place(); fixHeights(); }) : mq.addListener(place));

  function rel(i) { var d = ((i - cur) % N + N) % N; if (d > N / 2) d -= N; return d; }
  function layout(intro) {
    var m = mq.matches, cw = items[0].offsetWidth || 300;
    items.forEach(function (it, i) {
      var d = rel(i), a = Math.abs(d), s = d < 0 ? -1 : 1, t, o, dim;
      if (m) {
        if (a === 0) { t = 'translate3d(0,0,0)'; o = 1; dim = 0; }
        else if (a === 1) { t = 'translate3d(' + (s * cw * .8) + 'px,0,-180px) rotateY(' + (-s * 32) + 'deg) scale(.82)'; o = .5; dim = .45; }
        else { t = 'translate3d(' + (s * cw * 1.3) + 'px,0,-400px) rotateY(' + (-s * 40) + 'deg) scale(.7)'; o = 0; dim = .6; }
      } else {
        if (a === 0) { t = 'translate3d(0,0,0)'; o = 1; dim = 0; }
        else if (a === 1) { t = 'translate3d(' + (s * cw * 1.08) + 'px,0,-260px) rotateY(' + (-s * 34) + 'deg) scale(.86)'; o = .62; dim = .45; }
        else if (a === 2) { t = 'translate3d(' + (s * cw * 1.86) + 'px,0,-520px) rotateY(' + (-s * 44) + 'deg) scale(.74)'; o = .28; dim = .6; }
        else { t = 'translate3d(0,0,-760px) scale(.6)'; o = 0; dim = .7; }
      }
      it.style.transform = t; it.style.opacity = o; it.style.setProperty('--dim', dim); it.style.zIndex = 10 - a;
      it.style.setProperty('--sd', intro ? (a * .09) + 's' : '0s');
      it.classList.toggle('is-on', a === 0);
      it.style.visibility = o === 0 ? 'hidden' : '';
      var p = it.querySelector('.portal'); p.tabIndex = a === 0 ? 0 : -1; p.setAttribute('aria-hidden', a === 0 ? 'false' : 'true');
    });
  }

  function fill(panel, side, info) {
    var d = info[side];
    panel.innerHTML = '<p class="cf-kick" style="--i:0">' + items[cur].querySelector('.p-kind').textContent + '</p><h4 style="--i:1">' + d[0] + '</h4><ul>' +
      d[1].map(function (t, k) { return '<li style="--i:' + (k + 2) + '">' + CHECK + t + '</li>'; }).join('') + '</ul>';
  }
  function clear() { timers.forEach(clearTimeout); timers = []; }
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }

  function show(first) {
    var id = ids[cur], info = INFO[id];
    root.style.setProperty('--acc', info.acc);
    var ng = glows[gl]; ng.style.setProperty('--g', info.acc); ng.classList.add('on'); glows[1 - gl].classList.remove('on'); gl = 1 - gl;
    // призрачное название
    var g = ghosts[gi], o = ghosts[1 - gi];
    if (!first) { g.classList.remove('on'); g.classList.add('off'); }
    gi = 1 - gi;
    o.classList.remove('off'); o.textContent = info.ghost; o.style.setProperty('--ga', info.acc); o.style.fontFamily = info.font; o.style.fontStyle = info.it ? 'italic' : 'normal';
    o.offsetWidth; o.classList.add('on');
    // счётчик и вкладки
    count.textContent = (cur < 9 ? '0' : '') + (cur + 1); count.classList.remove('roll'); count.offsetWidth; count.classList.add('roll');
    tabEls.forEach(function (t, k) { t.classList.toggle('on', k === cur); t.setAttribute('aria-selected', k === cur); });
    open.href = '#' + id; open.textContent = 'Открыть «' + items[cur].querySelector('.p-name').textContent + '»';
    // плашки: спрятать, подменить текст, выдвинуть
    pl.classList.remove('show'); pr.classList.remove('show');
    later(function () { fill(pl, 'l', info); fill(pr, 'r', info); }, first ? 0 : 380);
    later(function () { pl.classList.add('show'); later(function () { pr.classList.add('show'); }, 120); }, first ? 650 : 620);
    restartAuto();
  }

  function go(i, first) {
    i = ((i % N) + N) % N;
    if (i === cur && !first) return;
    clear(); cur = i; layout(false); show(first);
  }
  function step(d) { go(cur + d); }

  // автопрокрутка, пока человек не начал листать сам
  function restartAuto() {
    clearTimeout(auto); root.classList.remove('auto');
    if (!autoOn || !inView) return;
    root.style.setProperty('--dur', AUTO_MS + 'ms');
    root.offsetWidth; root.classList.add('auto');
    auto = setTimeout(function () { if (!root.classList.contains('hold')) step(1); else restartAuto(); }, AUTO_MS);
  }
  function user() { if (autoOn) { autoOn = false; clearTimeout(auto); root.classList.remove('auto'); } }
  if (hover) {
    stage.addEventListener('mouseenter', function () { root.classList.add('hold'); clearTimeout(auto); });
    stage.addEventListener('mouseleave', function () { root.classList.remove('hold'); if (autoOn) { root.classList.remove('auto'); restartAuto(); } });
  }

  // стрелки
  function bump(b) { b.classList.remove('bump'); b.offsetWidth; b.classList.add('bump'); }
  root.querySelector('.cf-prev').addEventListener('click', function () { user(); bump(this); step(-1); });
  root.querySelector('.cf-next').addEventListener('click', function () { user(); bump(this); step(1); });
  root.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { user(); step(-1); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { user(); step(1); e.preventDefault(); }
  });

  // клик по боковой карточке выбирает её, по активной открывает сайт
  var dragged = false;
  items.forEach(function (it, i) {
    it.querySelector('.portal').addEventListener('click', function (e) {
      if (dragged) { e.preventDefault(); e.stopPropagation(); return; }
      if (i !== cur) { e.preventDefault(); e.stopPropagation(); user(); go(i); }
    }, true);
  });

  // свайп и перетаскивание
  var sx = 0, sy = 0, down = false, pid = null;
  stage.addEventListener('pointerdown', function (e) {
    if (e.target.closest('.cf-arrow')) return;
    down = true; dragged = false; sx = e.clientX; sy = e.clientY; pid = e.pointerId;
  });
  stage.addEventListener('pointermove', function (e) {
    if (!down || e.pointerId !== pid) return;
    var dx = e.clientX - sx;
    if (!dragged && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(e.clientY - sy)) dragged = true;
    if (dragged) { var on = items[cur]; on.style.transition = 'none'; on.style.transform = 'translate3d(' + dx * .35 + 'px,0,0) rotateY(' + (dx * .04) + 'deg)'; }
  });
  function up(e) {
    if (!down || e.pointerId !== pid) return; down = false;
    var dx = e.clientX - sx, on = items[cur]; on.style.transition = '';
    if (dragged && Math.abs(dx) > 45) { user(); step(dx < 0 ? 1 : -1); }
    else layout(false);
    setTimeout(function () { dragged = false; }, 0);
  }
  stage.addEventListener('pointerup', up); stage.addEventListener('pointercancel', up);

  // наклон и блик активной карточки за курсором
  if (hover && !reduce) items.forEach(function (it) {
    var p = it.querySelector('.portal');
    p.addEventListener('pointermove', function (e) {
      if (!it.classList.contains('is-on')) return;
      var r = p.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      p.style.setProperty('--rx', ((x - .5) * 12).toFixed(2) + 'deg'); p.style.setProperty('--ry', ((.5 - y) * 10).toFixed(2) + 'deg');
      p.style.setProperty('--gx', (x * 100).toFixed(1) + '%'); p.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
    });
    p.addEventListener('pointerleave', function () { p.style.setProperty('--rx', '0deg'); p.style.setProperty('--ry', '0deg'); });
  });

  var rt = 0; addEventListener('resize', function () { layout(false); clearTimeout(rt); rt = setTimeout(fixHeights, 200); });
  fixHeights(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fixHeights);

  // первое появление: веер из одной точки, затем плашки
  layout(false);
  function start() {
    if (started) return; started = true;
    root.classList.add('intro'); root.offsetWidth;
    root.classList.remove('cf-pre'); layout(true);
    setTimeout(function () { root.classList.remove('intro'); }, 1800);
    setTimeout(function () { go(cur, true); }, reduce ? 0 : 500);
  }
  if (window.IntersectionObserver && !reduce) {
    new IntersectionObserver(function (en) {
      inView = en[0].isIntersecting;
      if (inView) start();
      if (started) { if (inView) restartAuto(); else { clearTimeout(auto); root.classList.remove('auto'); } }
    }, { threshold: .35 }).observe(stage);
  } else { inView = true; start(); }
  document.addEventListener('visibilitychange', function () { if (document.hidden) clearTimeout(auto); else if (started) restartAuto(); });
})();
