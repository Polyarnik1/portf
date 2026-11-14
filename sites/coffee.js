/* Зерно и пар: кофейня-обжарка. Зелень кофейного листа, крема, красная ягода.
   Главные механики: калькулятор заваривания, карта лояльности в мини-приложении Telegram. */
PORTF.register('coffee', {
css: `
.s-coffee{--leaf:#1d3a2b;--leaf2:#16301f;--leaf3:#24473a;--crema:#f3e6d0;--foam:#fbf5ea;--berry:#c43a2c;--bean:#2a1810;--mute:#a9b8ad;
  background:var(--leaf);color:var(--crema);font:400 17px/1.6 'Golos Text',system-ui,sans-serif}
.s-coffee h1,.s-coffee h2,.s-coffee h3{font-family:'Yeseva One',Georgia,serif;font-weight:400;line-height:1.05;text-wrap:balance;margin:0}
.s-coffee h2{font-size:clamp(2rem,4.8vw,3.6rem)}
.s-coffee .wrap{max-width:1200px;margin:0 auto;padding-inline:clamp(18px,4.5vw,56px)}
.s-coffee img{display:block;max-width:100%}
.c-top{display:flex;justify-content:space-between;align-items:center;gap:16px;padding-top:22px;padding-bottom:22px}
.c-logo{font:400 23px/1 'Yeseva One',serif;display:flex;align-items:center;gap:10px}
.c-logo i{width:14px;height:20px;border-radius:50%;background:var(--berry);transform:rotate(25deg);position:relative}
.c-logo i::after{content:"";position:absolute;left:50%;top:10%;bottom:10%;width:2px;background:var(--leaf);transform:translateX(-50%) rotate(-12deg);border-radius:2px}
.c-nav{display:flex;gap:24px;font-size:15px;color:var(--mute)}
.c-nav button:hover{color:var(--crema)}
.c-open{font-size:14px;padding:7px 14px;border-radius:999px;background:var(--leaf2);border:1px solid #2f5540;white-space:nowrap}
.c-open b{font-weight:600}.c-open b.y{color:#9fe0a8}.c-open b.n{color:#f2a196}
.c-hero{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:clamp(24px,5vw,72px);align-items:center;padding-top:clamp(16px,4vw,48px);padding-bottom:clamp(56px,8vw,110px)}
.c-hero h1{font-size:clamp(2.6rem,6.6vw,5.6rem)}
.c-hero p{max-width:30em;margin-top:22px;opacity:.85}
.c-actions{margin-top:30px}
.c-btn{display:inline-flex;padding:16px 28px;border-radius:14px;background:var(--berry);color:var(--foam);font-weight:600;box-shadow:0 6px 0 #7f2219;transition:transform .15s,box-shadow .15s}
.c-btn:hover{transform:translateY(2px);box-shadow:0 4px 0 #7f2219}
.c-link{font-weight:600;text-decoration:underline;text-underline-offset:5px;text-decoration-color:var(--berry)}
.c-actions{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:end;gap:0 clamp(10px,3vw,30px)}
.c-act-l{display:flex;flex-direction:column;align-items:flex-start;gap:22px;padding-bottom:8px}
.c-mach{width:min(100%,262px);justify-self:start;cursor:pointer;-webkit-tap-highlight-color:transparent;filter:drop-shadow(0 18px 24px rgba(0,0,0,.35))}
.c-mach svg{display:block;width:100%;height:auto;overflow:visible}
.c-mach *{animation-duration:9s;animation-iteration-count:infinite;animation-timing-function:linear;transform-box:fill-box}
.c-mach.paused *{animation-play-state:paused}
.m-needle{transform-origin:50% 100%;animation-name:m-needle}
.m-needle{transform-box:view-box;transform-origin:168px 108px}
.m-water{transform-origin:50% 100%;animation-name:m-water}
.m-lamp{animation-name:m-lamp}.m-lamp-glow{animation-name:m-lamp;transform-origin:50% 50%}
.m-bean{animation-name:m-bean}.m-hopper{animation-name:m-hop;transform-origin:50% 100%}
.m-head{animation-name:m-head}
.m-stream{transform-origin:50% 0;animation-name:m-stream;opacity:0}
.m-liquid{transform-origin:50% 100%;animation-name:m-fill}
.m-crema{animation-name:m-crema}
.m-steam path{opacity:0;stroke-dasharray:60;stroke-dashoffset:60}
.m-steam .a{animation-name:m-st1}.m-steam .b{animation-name:m-st2}.m-steam .c{animation-name:m-st3}
.m-steam-top{animation-name:m-top}
.m-steam-top circle{opacity:.0;animation:m-puff 1.9s ease-out infinite}
.m-steam-top .p2{animation-delay:.6s}.m-steam-top .p3{animation-delay:1.2s}
@keyframes m-needle{0%,5%{transform:rotate(-62deg)}15%,66%{transform:rotate(34deg)}70%{transform:rotate(30deg)}80%,100%{transform:rotate(-62deg)}}
@keyframes m-water{0%,14%{transform:scaleY(1)}62%,100%{transform:scaleY(.9)}}
@keyframes m-lamp{0%,3%{opacity:.1}5%,66%{opacity:1}69%,100%{opacity:.1}}
@keyframes m-bean{0%{transform:translateY(0) rotate(0);opacity:0}1%{opacity:1}7%{transform:translateY(20px) rotate(200deg);opacity:1}9%,100%{transform:translateY(24px) rotate(240deg);opacity:0}}
@keyframes m-hop{0%,4%{transform:none}2%{transform:translateX(-.8px)}3%{transform:translateX(.8px)}6%,100%{transform:none}}
@keyframes m-head{0%,12%{transform:translate(0,0)}14%{transform:translate(.5px,.4px)}16%{transform:translate(-.5px,0)}18%{transform:translate(.5px,.3px)}20%{transform:translate(-.4px,0)}22%{transform:translate(.4px,.3px)}24%{transform:translate(-.4px,0)}26%{transform:translate(.4px,.2px)}28%{transform:translate(-.3px,0)}30%{transform:translate(.3px,.2px)}32%{transform:translate(-.3px,0)}34%{transform:translate(.3px,.2px)}36%{transform:translate(-.3px,0)}38%{transform:translate(.3px,.2px)}40%{transform:translate(-.3px,0)}42%{transform:translate(.3px,.2px)}44%{transform:translate(-.3px,0)}46%{transform:translate(.3px,.2px)}48%{transform:translate(-.3px,0)}50%{transform:translate(.3px,.2px)}52%{transform:translate(-.3px,0)}54%{transform:translate(.3px,.2px)}56%{transform:translate(-.3px,0)}58%{transform:translate(.3px,.2px)}60%{transform:translate(-.2px,0)}62%{transform:translate(.2px,.1px)}64%,100%{transform:translate(0,0)}}
@keyframes m-stream{0%,14%{opacity:0;transform:scaleY(0) scaleX(1)}15%{opacity:1;transform:scaleY(.05) scaleX(1)}18%,60%{opacity:1;transform:scaleY(1) scaleX(1)}63%{opacity:1;transform:scaleY(1) scaleX(.45)}65%,100%{opacity:0;transform:scaleY(1) scaleX(.2)}}
@keyframes m-fill{0%,16%{transform:scaleY(0);opacity:1}22%{transform:scaleY(.2)}40%{transform:scaleY(.62)}61%{transform:scaleY(.92)}64%,88%{transform:scaleY(.92);opacity:1}93%{transform:scaleY(.92);opacity:0}94%,100%{transform:scaleY(0);opacity:0}}
@keyframes m-crema{0%,50%{opacity:0}64%,100%{opacity:1}}
@keyframes m-st1{0%,64%{opacity:0;stroke-dashoffset:60;transform:translateY(0)}70%{opacity:.85}88%{opacity:.5;stroke-dashoffset:0;transform:translateY(-8px)}94%,100%{opacity:0;stroke-dashoffset:0;transform:translateY(-14px)}}
@keyframes m-st2{0%,67%{opacity:0;stroke-dashoffset:60;transform:translateY(0)}73%{opacity:.9}90%{opacity:.5;stroke-dashoffset:0;transform:translateY(-9px)}95%,100%{opacity:0;stroke-dashoffset:0;transform:translateY(-15px)}}
@keyframes m-st3{0%,70%{opacity:0;stroke-dashoffset:60;transform:translateY(0)}76%{opacity:.85}91%{opacity:.5;stroke-dashoffset:0;transform:translateY(-8px)}96%,100%{opacity:0;stroke-dashoffset:0;transform:translateY(-14px)}}
@keyframes m-top{0%,8%{opacity:0}11%,60%{opacity:1}64%,100%{opacity:0}}
@keyframes m-puff{0%{opacity:0;transform:translate(0,0) scale(.5)}20%{opacity:.7}100%{opacity:0;transform:translate(4px,-26px) scale(2.1)}}
@media(prefers-reduced-motion:reduce){
  .c-mach *{animation:none!important}
  .m-liquid{transform:scaleY(.92)}.m-crema{opacity:1}.m-lamp,.m-lamp-glow{opacity:1}.m-needle{transform:rotate(20deg)}
}
@media(max-width:900px){.c-mach{width:min(100%,210px);justify-self:end}.c-actions{align-items:center}.c-menu-pic{position:relative}}

.c-facts{display:flex;gap:28px;margin-top:40px;padding-top:22px;border-top:1px solid #2f5540;flex-wrap:wrap}
.c-facts b{display:block;font:400 2rem/1 'Yeseva One',serif;color:var(--foam)}
.c-facts span{font-size:14px;color:var(--mute)}
.c-arch{position:relative;justify-self:center;width:min(100%,460px)}
.c-arch figure{margin:0;aspect-ratio:4/5;border-radius:999px 999px 24px 24px;overflow:hidden;border:10px solid var(--leaf2);box-shadow:0 40px 80px -30px rgba(0,0,0,.6)}
.c-arch figure img{width:100%;height:100%;object-fit:cover;object-position:40% 50%}
.c-badge{position:absolute;left:-34px;bottom:12%;width:136px;height:136px;border-radius:50%;background:var(--berry);display:grid;place-items:center;box-shadow:0 14px 30px rgba(0,0,0,.35)}
.c-badge svg{position:absolute;inset:0;animation:c-rot 18s linear infinite}
.c-badge text{font:600 11.5px 'Golos Text',sans-serif;letter-spacing:.18em;fill:var(--foam)}
.c-badge b{font:400 1.7rem/1 'Yeseva One',serif;color:var(--foam)}
@keyframes c-rot{to{transform:rotate(360deg)}}
.c-tape{background:var(--berry);color:var(--foam);overflow:hidden;white-space:nowrap;padding:14px 0;font:400 20px/1 'Yeseva One',serif;transform:rotate(-1.2deg);margin:0 -10px}
.c-tape div{display:inline-block;animation:c-tape 34s linear infinite}
.c-tape span{margin:0 22px}.c-tape span::after{content:"";display:inline-block;width:10px;height:14px;margin-left:44px;border-radius:50%;background:var(--bean);transform:rotate(25deg)}
@keyframes c-tape{to{transform:translateX(-50%)}}
.c-sec{padding-top:clamp(64px,9vw,120px);padding-bottom:clamp(64px,9vw,120px)}
.c-head{display:flex;justify-content:space-between;align-items:end;gap:12px 32px;flex-wrap:wrap;margin-bottom:clamp(26px,4vw,44px)}
.c-head p{max-width:34em;color:var(--mute);margin:0}
.c-path{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(14px,2vw,24px);counter-reset:p}
.c-path li{counter-increment:p;list-style:none;display:grid;gap:14px}
.c-path figure{margin:0;aspect-ratio:4/5;border-radius:22px;overflow:hidden;position:relative}
.c-path figure img{width:100%;height:100%;object-fit:cover;transition:transform 1s cubic-bezier(.2,.7,.2,1)}
.c-path li:hover figure img{transform:scale(1.05)}
.c-path figure::before{content:counter(p);position:absolute;z-index:1;top:14px;left:14px;width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:var(--foam);color:var(--bean);font:400 1.3rem 'Yeseva One',serif}
.c-path h3{font-size:1.6rem}
.c-path p{color:var(--mute);font-size:15.5px;margin:0}
.c-path ol{padding:0;margin:0;display:contents}
.c-menu{background:var(--foam);color:var(--bean)}
.c-menu .c-head p{color:#6d5a4b}
.c-menu-grid{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(24px,5vw,64px);align-items:start}
.c-menu-pic{position:sticky;top:20px;margin:0;aspect-ratio:4/5;border-radius:24px;overflow:hidden;background:#e7dcc8}
.c-menu-pic img{width:100%;height:100%;object-fit:cover;transition:opacity .3s}
.c-menu-pic figcaption{position:absolute;left:14px;bottom:14px;padding:7px 14px;border-radius:999px;background:var(--foam);font-size:14px;font-weight:600}
.c-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px}
.c-tabs button{padding:10px 18px;border-radius:999px;border:1.5px solid var(--bean);font-weight:600;font-size:15px;transition:.2s}
.c-tabs button[aria-selected=true]{background:var(--bean);color:var(--foam)}
.c-item{display:grid;grid-template-columns:1fr auto;gap:2px 16px;padding:15px 0;border-bottom:1px dashed #cdb894;animation:c-in .4s both}
.c-item b{font:400 1.3rem/1.2 'Yeseva One',serif}
.c-item em{font-style:normal;font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap}
.c-item small{grid-column:1/-1;font-size:14.5px;color:#6d5a4b}
.c-item .tag{display:inline-block;margin-left:8px;padding:2px 9px;border-radius:999px;background:var(--berry);color:var(--foam);font:600 11.5px/1.6 'Golos Text',sans-serif;vertical-align:middle}
@keyframes c-in{from{opacity:0;transform:translateY(8px)}}
.c-brew{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(24px,4vw,56px);background:var(--leaf2);border:1px solid #2f5540;border-radius:28px;padding:clamp(22px,4vw,48px);align-items:center}
.c-methods{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:24px}
.c-methods button{text-align:left;padding:14px 16px;border-radius:16px;border:1.5px solid #2f5540;transition:.2s;display:grid;gap:2px}
.c-methods button b{font:400 1.15rem 'Yeseva One',serif}
.c-methods button span{font-size:13px;color:var(--mute)}
.c-methods button[aria-pressed=true]{background:var(--crema);color:var(--bean);border-color:var(--crema)}
.c-methods button[aria-pressed=true] span{color:#6d5a4b}
.c-cups{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.c-cups button{width:44px;height:44px;border-radius:50%;border:1.5px solid var(--crema);font-size:22px;line-height:1}
.c-cups button:hover{background:var(--crema);color:var(--bean)}
.c-cups output{font:400 1.6rem 'Yeseva One',serif;min-width:5ch;text-align:center}
.c-recipe{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.c-recipe div{background:var(--leaf);border-radius:18px;padding:18px;border:1px solid #2f5540}
.c-recipe span{font-size:13.5px;color:var(--mute)}
.c-recipe b{display:block;font:400 clamp(1.6rem,3vw,2.2rem)/1.1 'Yeseva One',serif;color:var(--foam);font-variant-numeric:tabular-nums}
.c-recipe p{grid-column:1/-1;margin:4px 0 0;font-size:15px;color:var(--mute)}
.c-bean-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(24px,5vw,64px);align-items:start}
.c-origins{display:grid;gap:10px}
.c-origins button{text-align:left;padding:18px 20px;border-radius:16px;background:var(--leaf2);border:1.5px solid #2f5540;transition:.25s;display:grid;gap:2px}
.c-origins button b{font:400 1.3rem/1.2 'Yeseva One',serif}
.c-origins button span{font-size:14px;color:var(--mute)}
.c-origins button[aria-pressed=true]{background:var(--crema);color:var(--bean);border-color:var(--crema)}
.c-origins button[aria-pressed=true] span{color:#6d5a4b}
.c-card{background:var(--leaf2);border-radius:22px;border:1.5px solid #2f5540;overflow:hidden}
.c-card-pic{height:190px;overflow:hidden}
.c-card-pic img{width:100%;height:100%;object-fit:cover}
.c-card-in{padding:clamp(22px,3vw,32px);display:grid;gap:18px}
.c-card h3{font-size:1.7rem}
.c-notes{display:flex;flex-wrap:wrap;gap:8px}
.c-notes span{padding:6px 14px;border-radius:999px;background:var(--berry);color:var(--foam);font-size:14px;font-weight:600}
.c-bars{display:grid;gap:12px}
.c-bars div{display:grid;grid-template-columns:110px 1fr 28px;gap:12px;align-items:center;font-size:15px}
.c-bars i{height:10px;border-radius:5px;background:#2f5540;overflow:hidden;display:block}
.c-bars i::after{content:"";display:block;height:100%;width:calc(var(--v)*10%);background:var(--crema);border-radius:5px;transition:width .6s cubic-bezier(.2,.7,.2,1)}
.c-meta{display:flex;flex-wrap:wrap;gap:8px 28px;font-size:15px;color:var(--mute)}
.c-loyal{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:clamp(24px,5vw,72px);align-items:center}
.c-loyal p{color:var(--mute);max-width:32em;margin:18px 0 0}
.c-loyal ul{margin:22px 0 0;padding:0;list-style:none;display:grid;gap:10px}
.c-loyal li{display:flex;gap:12px;align-items:baseline}
.c-loyal li::before{content:"";flex:none;width:10px;height:14px;border-radius:50%;background:var(--berry);transform:rotate(25deg) translateY(2px)}
.c-phone{justify-self:center;width:min(100%,320px);aspect-ratio:9/18.5;border-radius:42px;background:#0f1a14;padding:12px;box-shadow:0 0 0 2px #2f5540,0 40px 80px -30px rgba(0,0,0,.7)}
.c-scr{height:100%;border-radius:32px;background:var(--foam);color:var(--bean);overflow:hidden;display:flex;flex-direction:column}
.c-tg{background:#17212b;color:#fff;padding:12px 16px;display:flex;align-items:center;gap:10px;font-size:14px}
.c-tg i{width:30px;height:30px;border-radius:50%;background:var(--leaf);flex:none;display:grid;place-items:center;font:400 14px 'Yeseva One',serif;font-style:normal;color:var(--crema)}
.c-tg small{display:block;color:#8aa0b2;font-size:11.5px}
.c-app{padding:18px;display:grid;gap:14px;flex:1;align-content:start}
.c-app h4{margin:0;font:400 1.35rem/1.1 'Yeseva One',serif}
.c-stamps{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.c-stamps span{aspect-ratio:1;border-radius:50%;border:2px dashed #cdb894;display:grid;place-items:center;transition:.35s}
.c-stamps span.on{border:0;background:var(--leaf);animation:c-pop .45s cubic-bezier(.2,1.6,.4,1)}
.c-stamps span.on::after{content:"";width:34%;height:46%;border-radius:50%;background:var(--crema);transform:rotate(25deg)}
.c-stamps span.gift{border-color:var(--berry);color:var(--berry);font-weight:700;font-size:12px}
@keyframes c-pop{from{transform:scale(.4)}}
.c-app .c-prog{font-size:14px;color:#6d5a4b}
.c-app button{padding:14px;border-radius:14px;background:#2aabee;color:#fff;font-weight:600;margin-top:auto}
.c-app button.free{background:var(--berry)}
.c-gal{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:clamp(140px,18vw,250px);gap:12px}
.c-gal figure{margin:0;border-radius:20px;overflow:hidden;position:relative}
.c-gal img{width:100%;height:100%;object-fit:cover;transition:transform .9s cubic-bezier(.2,.7,.2,1)}
.c-gal figure:hover img{transform:scale(1.05)}
.c-gal figcaption{position:absolute;left:12px;bottom:12px;padding:6px 12px;border-radius:999px;background:var(--leaf);font-size:13.5px}
.c-gal .t{grid-row:span 2}.c-gal .w{grid-column:span 2}
.c-visit{background:var(--bean)}
.c-visit-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(24px,5vw,64px);align-items:stretch}
.c-hours{margin:0;padding:0;list-style:none}
.c-hours li{display:flex;justify-content:space-between;gap:16px;padding:12px 0;border-bottom:1px solid #4a3326;font-variant-numeric:tabular-nums}
.c-hours li.today{color:var(--foam);font-weight:600}
.c-hours li.today span:first-child::after{content:"сегодня";margin-left:10px;padding:2px 9px;border-radius:999px;background:var(--berry);font-size:12px;font-weight:600}
.c-addr{margin-top:24px;display:grid;gap:4px}
.c-addr span{color:#b9a596;font-size:14px}
.c-map{position:relative;border-radius:24px;overflow:hidden;min-height:300px;background:url(img/coffee/night.webp) center/cover}
.c-map::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(42,24,16,.85))}
.c-map p{position:absolute;z-index:1;left:20px;right:20px;bottom:18px;margin:0;font-size:15px}
.c-map b{display:block;font:400 1.4rem 'Yeseva One',serif}
.c-foot{padding:26px 0 10px;font-size:14px;display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;color:#b9a596;border-top:1px solid #4a3326;margin-top:clamp(40px,6vw,72px)}
.c-foot a{color:var(--crema)}
@media(max-width:900px){.c-hero,.c-bean-grid,.c-visit-grid,.c-menu-grid,.c-brew,.c-loyal{grid-template-columns:1fr}.c-arch{width:min(80vw,380px);order:-1}.c-badge{left:-14px;width:110px;height:110px}.c-menu-pic{position:relative;aspect-ratio:16/10}.c-path{grid-template-columns:1fr}.c-path li{grid-template-columns:120px 1fr;align-items:center}.c-path figure{aspect-ratio:1;grid-row:span 2}.c-gal{grid-template-columns:1fr 1fr;grid-auto-rows:44vw}.c-gal .w{grid-column:span 2}.c-nav{display:none}}
@media(max-width:480px){.c-recipe b{font-size:1.5rem}.c-methods button{padding:12px}.c-facts{gap:18px}}
@media(prefers-reduced-motion:reduce){.c-badge svg,.c-tape div{animation:none}}
`,
html: `
<header class="wrap c-top">
  <span class="c-logo"><i aria-hidden="true"></i>Зерно и пар</span>
  <nav class="c-nav" aria-label="Разделы"><button data-c="c-menu">Меню</button><button data-c="c-brew">Как заварить</button><button data-c="c-loyal">Карта гостя</button><button data-c="c-visit">Адрес</button></nav>
  <span class="c-open" id="c-open"></span>
</header>
<section class="wrap c-hero">
  <div>
    <h1>Кофе, который обжарили в этот четверг</h1>
    <p>Обжариваем зерно каждую неделю небольшими партиями прямо в зале. Варим эспрессо и фильтр с восьми утра, печём свои круассаны.</p>
    <div class="c-actions"><div class="c-act-l"><button class="c-btn" data-c="c-menu">Открыть меню</button><button class="c-link" data-c="c-brew">Как заварить дома</button></div>
    <div class="c-mach" id="c-mach" role="img" aria-label="Кофемашина наливает эспрессо в стеклянную чашку">
      <svg viewBox="0 0 250 204" aria-hidden="true">
        <defs>
          <linearGradient id="mBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ea5a44"/><stop offset=".5" stop-color="#c43a2c"/><stop offset="1" stop-color="#85231a"/></linearGradient>
          <linearGradient id="mChrome" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f8f3ea"/><stop offset=".45" stop-color="#b9b1a4"/><stop offset=".55" stop-color="#8a8277"/><stop offset="1" stop-color="#dcd5c9"/></linearGradient>
          <linearGradient id="mCoffee" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a5230"/><stop offset=".3" stop-color="#4a2915"/><stop offset="1" stop-color="#1f0f07"/></linearGradient>
          <linearGradient id="mWater" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6f3"/><stop offset="1" stop-color="#6fb4d0"/></linearGradient>
          <radialGradient id="mGlow"><stop offset="0" stop-color="#ffd27a" stop-opacity=".95"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient>
          <clipPath id="mCupClip"><path d="M88 143 H122 L117 168 Q116.5 171 113.5 171 H96.5 Q93.5 171 93 168 Z"/></clipPath>
        </defs>
        <ellipse cx="128" cy="199" rx="108" ry="5" fill="#000" opacity=".28"/>
        <!-- бак с водой сзади -->
        <rect x="204" y="58" width="30" height="112" rx="11" fill="#cfe6ee" fill-opacity=".14" stroke="#cfe6ee" stroke-opacity=".6" stroke-width="1.6"/>
        <rect class="m-water" x="207.5" y="68" width="23" height="98" rx="8" fill="url(#mWater)" opacity=".9"/>
        <rect x="209" y="66" width="3" height="96" rx="1.5" fill="#fff" opacity=".4"/>
        <!-- бункер с зерном -->
        <g class="m-hopper">
          <path d="M139 36 L145 8 H181 L187 36 Z" fill="#ffffff" fill-opacity=".1" stroke="#cfe3d6" stroke-opacity=".55" stroke-width="1.6" stroke-linejoin="round"/>
          <g fill="#4a2915"><ellipse cx="152" cy="28" rx="5.2" ry="3.3" transform="rotate(-20 152 28)"/><ellipse cx="164" cy="29" rx="5.2" ry="3.3" transform="rotate(15 164 29)"/><ellipse cx="175" cy="26" rx="5.2" ry="3.3" transform="rotate(-35 175 26)"/><ellipse cx="157" cy="21" rx="5.2" ry="3.3" transform="rotate(30 157 21)"/><ellipse cx="169" cy="19" rx="5.2" ry="3.3" transform="rotate(-10 169 19)"/><ellipse cx="153" cy="14" rx="4.6" ry="2.9" transform="rotate(25 153 14)"/></g>
          <path d="M145 8 H181" stroke="#e9f2ec" stroke-width="3" stroke-linecap="round" opacity=".7"/>
        </g>
        <ellipse class="m-bean" cx="163" cy="40" rx="4.6" ry="3" fill="#4a2915" transform="rotate(20 163 40)"/>
        <!-- обтекаемый корпус -->
        <path d="M112 176 C106 128 108 92 124 70 C138 50 170 36 198 40 C214 42 218 56 218 74 V176 Z" fill="url(#mBody)"/>
        <path d="M122 84 C130 62 150 50 176 47" fill="none" stroke="#fff" stroke-opacity=".38" stroke-width="3" stroke-linecap="round"/>
        <path d="M118 150 C114 122 116 104 124 90" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="5" stroke-linecap="round"/>
        <path d="M112 176 H218 V186 Q218 190 214 190 H116 Q112 190 112 186 Z" fill="#7f2219"/>
        <g class="m-steam-top" fill="#fff"><circle class="p1" cx="150" cy="38" r="4"/><circle class="p2" cx="158" cy="38" r="3.2"/><circle class="p3" cx="143" cy="40" r="3"/></g>
        <!-- манометр -->
        <circle cx="168" cy="108" r="19" fill="url(#mChrome)"/>
        <circle cx="168" cy="108" r="15" fill="#f6ecd9"/>
        <circle cx="168" cy="108" r="12" fill="none" stroke="#7c6a58" stroke-width="1.4" stroke-dasharray="1.2 3.6" stroke-linecap="round"/>
        <g class="m-needle"><line x1="168" y1="108" x2="168" y2="97" stroke="#7f2219" stroke-width="2.2" stroke-linecap="round"/><circle cx="168" cy="108" r="2.6" fill="#2a1810"/></g>
        <!-- лампа и кнопка -->
        <circle cx="176" cy="68" r="14" fill="url(#mGlow)" class="m-lamp-glow"/>
        <circle cx="176" cy="68" r="6.5" fill="#3a1d14" stroke="#e9d9bd" stroke-width="1.6"/>
        <circle class="m-lamp" cx="176" cy="68" r="4" fill="#ffc04d"/>
        <circle cx="198" cy="68" r="6.5" fill="#3a1d14" stroke="#e9d9bd" stroke-width="1.6"/>
        <!-- паровая трубка -->
        <path d="M216 118 C230 120 238 134 236 156" fill="none" stroke="url(#mChrome)" stroke-width="4.6" stroke-linecap="round"/>
        <rect x="233.4" y="154" width="5.2" height="9" rx="2" fill="#cfc7ba"/>
        <!-- группа и рожок -->
        <g class="m-head">
          <path d="M112 88 H92 Q84 88 84 96 Q84 104 92 104 H112 Z" fill="url(#mChrome)"/>
          <rect x="88" y="90" width="22" height="2.5" rx="1.2" fill="#fff" opacity=".7"/>
          <path d="M88 104 H122 L118 116 H92 Z" fill="#2c2420"/>
          <path d="M88 104 H122" stroke="#fff" stroke-opacity=".35" stroke-width="1.4"/>
          <rect x="40" y="108" width="54" height="8" rx="4" fill="#4a2f22" transform="rotate(8 94 112)"/>
          <rect x="46" y="109.4" width="40" height="2" rx="1" fill="#fff" opacity=".25" transform="rotate(8 94 112)"/>
          <rect x="98" y="116" width="5" height="7" rx="1.5" fill="#cfc7ba"/><rect x="107" y="116" width="5" height="7" rx="1.5" fill="#cfc7ba"/>
        </g>
        <!-- струи -->
        <rect class="m-stream s1" x="99.2" y="122" width="2.6" height="49" rx="1.3" fill="#5c3319"/>
        <rect class="m-stream s2" x="108.2" y="122" width="2.6" height="49" rx="1.3" fill="#5c3319"/>
        <!-- поддон -->
        <path d="M34 172 H132 Q138 172 138 178 V182 Q138 186 134 186 H38 Q32 186 32 181 V176 Q32 172 34 172 Z" fill="#3a2a22"/>
        <path d="M40 176.5 H130" stroke="#8a8277" stroke-width="1.4" stroke-linecap="round" opacity=".8"/>
        <g stroke="#1b0f0a" stroke-width="2" stroke-linecap="round" opacity=".7"><path d="M44 178.4 v4.4 M54 178.4 v4.4 M64 178.4 v4.4 M74 178.4 v4.4 M120 178.4 v4.4 M130 178.4 v4.4"/></g>
        <!-- стеклянная чашка -->
        <path d="M88 143 H122 L117 168 Q116.5 171 113.5 171 H96.5 Q93.5 171 93 168 Z" fill="#fff" fill-opacity=".1"/>
        <g clip-path="url(#mCupClip)"><g class="m-liquid"><rect x="84" y="143" width="42" height="30" fill="url(#mCoffee)"/><rect class="m-crema" x="84" y="143" width="42" height="5" fill="#d9a066"/></g></g>
        <path d="M88 143 H122 L117 168 Q116.5 171 113.5 171 H96.5 Q93.5 171 93 168 Z" fill="none" stroke="#e9f2ec" stroke-opacity=".85" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M92 148 L95.4 166" stroke="#fff" stroke-opacity=".6" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="105" cy="143" rx="17" ry="2.6" fill="none" stroke="#e9f2ec" stroke-opacity=".7" stroke-width="1.2"/>
        <!-- пар над чашкой -->
        <g class="m-steam" fill="none" stroke="#f3e6d0" stroke-width="2.4" stroke-linecap="round"><path class="a" d="M92 136 q-5 -6 0 -11 q5 -5 0 -10"/><path class="b" d="M105 135 q-5 -6 0 -11 q5 -5 0 -10"/><path class="c" d="M118 136 q-5 -6 0 -11 q5 -5 0 -10"/></g>
      </svg>
    </div></div>
    <div class="c-facts"><div><b>4 дня</b><span>от обжарки до чашки</span></div><div><b>3 сорта</b><span>зерна каждую неделю</span></div><div><b>27 слоёв</b><span>в нашем круассане</span></div></div>
  </div>
  <div class="c-arch">
    <figure><img src="img/coffee/hero.webp" alt="Бариста рисует латте-арт" width="1800" height="1200" fetchpriority="high"></figure>
    <div class="c-badge" aria-hidden="true"><svg viewBox="0 0 136 136"><defs><path id="c-circ" d="M68 68m-50 0a50 50 0 1 1 100 0a50 50 0 1 1-100 0"/></defs><text><textPath href="#c-circ">свежая обжарка · каждый четверг · </textPath></text></svg><b>№ 47</b></div>
  </div>
</section>
<div class="c-tape" aria-hidden="true"><div>${'<span>эспрессо</span><span>воронка</span><span>флэт уайт</span><span>свежая обжарка</span><span>круассаны</span><span>колд брю</span>'.repeat(4)}</div></div>

<section class="wrap c-sec">
  <div class="c-head"><h2>Путь зерна</h2><p>От мешка с зелёным зерном до вашей чашки проходит около четырёх дней. Всё это происходит у нас в зале.</p></div>
  <ol class="c-path">
    <li><figure><img src="img/coffee/roast3.webp" alt="Зелёное зерно в барабане ростера" width="900" height="1350" loading="lazy" decoding="async"></figure><h3>Выбираем</h3><p>Берём небольшие лоты у импортёров, каждый сорт сначала пробуем на каппинге.</p></li>
    <li><figure><img src="img/coffee/roast1.webp" alt="Обжаренное зерно остывает в ростере" width="1000" height="667" loading="lazy" decoding="async"></figure><h3>Обжариваем</h3><p>По четвергам на ростере в зале. Профиль подбираем под каждый сорт.</p></li>
    <li><figure><img src="img/coffee/pour.webp" alt="Бариста наливает молоко в капучино" width="1000" height="667" loading="lazy" decoding="async"></figure><h3>Завариваем</h3><p>Даём зерну отдохнуть три дня, потом варим эспрессо и фильтр.</p></li>
  </ol>
</section>

<section class="c-menu c-sec" id="c-menu"><div class="wrap">
  <div class="c-head"><h2>Меню</h2><p>Цены за порцию. Молоко можно заменить на овсяное или миндальное бесплатно.</p></div>
  <div class="c-menu-grid">
    <figure class="c-menu-pic"><img id="c-menu-img" src="img/coffee/c1.webp" alt="Капучино" width="900" height="1350" loading="lazy" decoding="async"><figcaption id="c-menu-cap">Классика</figcaption></figure>
    <div>
      <div class="c-tabs" role="tablist" aria-label="Разделы меню"></div>
      <div id="c-list"></div>
    </div>
  </div>
</div></section>

<section class="wrap c-sec" id="c-brew">
  <div class="c-head"><h2>Как заварить дома</h2><p>Выберите способ и количество чашек. Посчитаем, сколько нужно кофе и воды, и подскажем помол.</p></div>
  <div class="c-brew">
    <div>
      <div class="c-methods" id="c-methods"></div>
      <div class="c-cups"><span>Чашек</span><button id="c-minus" aria-label="Меньше чашек">−</button><output id="c-cups" aria-live="polite">2</output><button id="c-plus" aria-label="Больше чашек">+</button></div>
    </div>
    <div class="c-recipe" aria-live="polite">
      <div><span>Кофе</span><b id="c-r-g"></b></div>
      <div><span>Вода</span><b id="c-r-w"></b></div>
      <div><span>Помол</span><b id="c-r-grind"></b></div>
      <div><span>Время</span><b id="c-r-t"></b></div>
      <p id="c-r-tip"></p>
    </div>
  </div>
</section>

<section class="wrap c-sec" style="padding-top:0">
  <div class="c-head"><h2>Зерно на этой неделе</h2><p>Можно купить пачку в зале или заказать в мини-приложении.</p></div>
  <div class="c-bean-grid">
    <div class="c-origins" id="c-origins"></div>
    <div class="c-card" aria-live="polite">
      <div class="c-card-pic"><img src="img/coffee/beans.webp" alt="Чашка на обжаренных зёрнах" width="900" height="1350" loading="lazy" decoding="async"></div>
      <div class="c-card-in" id="c-card"></div>
    </div>
  </div>
</section>

<section class="wrap c-sec" id="c-loyal" style="padding-top:0">
  <div class="c-loyal">
    <div>
      <h2>Карта гостя в Telegram</h2>
      <p>Никаких пластиковых карт. Открываете мини-приложение в нашем боте, показываете QR-код бариста, и штамп ставится сам.</p>
      <ul><li>Каждая шестая чашка бесплатно</li><li>Предзаказ, чтобы забрать кофе без очереди</li><li>Пачка зерна с доставкой по городу</li></ul>
    </div>
    <div class="c-phone" aria-label="Пример мини-приложения: карта гостя">
      <div class="c-scr">
        <div class="c-tg"><i>З</i><div>Зерно и пар<small>мини-приложение</small></div></div>
        <div class="c-app">
          <h4>Ваша карта</h4>
          <div class="c-stamps" id="c-stamps"></div>
          <span class="c-prog" id="c-prog"></span>
          <button id="c-buy">Купить кофе</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="wrap c-sec" style="padding-top:0">
  <div class="c-head"><h2>У нас в зале</h2><p>Сорок мест, большие окна, розетки у каждого стола.</p></div>
  <div class="c-gal">
    <figure class="t"><img src="img/coffee/room.webp" alt="Бариста за стойкой в солнечном зале" width="1000" height="1508" loading="lazy" decoding="async"><figcaption>Утро у стойки</figcaption></figure>
    <figure class="w"><img src="img/coffee/c2.webp" alt="Зал кофейни" width="1200" height="800" loading="lazy" decoding="async"><figcaption>Зал на сорок мест</figcaption></figure>
    <figure class="t"><img src="img/coffee/barista2.webp" alt="Бариста готовит капучино" width="900" height="1350" loading="lazy" decoding="async"></figure>
    <figure><img src="img/coffee/c4.webp" alt="Круассан" width="900" height="720" loading="lazy" decoding="async"><figcaption>Круассаны</figcaption></figure>
    <figure><img src="img/coffee/cups4.webp" alt="Четыре чашки с латте-артом" width="900" height="1350" loading="lazy" decoding="async"></figure>
  </div>
</section>

<section class="c-visit c-sec" id="c-visit"><div class="wrap">
  <div class="c-head"><h2>Заходите</h2></div>
  <div class="c-visit-grid">
    <div>
      <ul class="c-hours" id="c-hours"></ul>
      <div class="c-addr"><span>Адрес</span>ул. Тёплая, 12, вход со двора<span style="margin-top:10px">С собой</span>Скидка 10%, если придёте со своей кружкой</div>
    </div>
    <div class="c-map"><p><b>Ищите красную дверь</b>Пять минут пешком от метро, вывеска видна с улицы вечером.</p></div>
  </div>
  <div class="c-foot"><span>Демо-сайт кофейни. Заведение вымышленное. Фото: Unsplash.</span><a href="#barber">Следующее демо: барбершоп «Цирюльня №7»</a></div>
</div></section>
`,
mount: function (root) {
  var $ = function (s) { return root.querySelector(s); };
  root.addEventListener('click', function (e) { var t = e.target.closest('[data-c]'); if (t) { var el = $('#' + t.dataset.c); if (el) el.scrollIntoView({ behavior: PORTF.reduce ? 'auto' : 'smooth' }); } });

  /* кофемашина: играет только на экране, по нажатию начинает заново */
  var mach = $('#c-mach'), mio = null;
  if (mach) {
    if (window.IntersectionObserver) { mio = new IntersectionObserver(function (en) { mach.classList.toggle('paused', !en[0].isIntersecting); }, { threshold: .15 }); mio.observe(mach); }
    mach.addEventListener('click', function () { var sv = mach.firstElementChild; sv.style.display = 'none'; sv.getBoundingClientRect(); sv.style.display = ''; });
  }

  /* часы работы и статус */
  var HOURS = [['Понедельник', 8, 22], ['Вторник', 8, 22], ['Среда', 8, 22], ['Четверг', 8, 22], ['Пятница', 8, 23], ['Суббота', 9, 23], ['Воскресенье', 9, 22]];
  var now = new Date(), di = (now.getDay() + 6) % 7, h = now.getHours() + now.getMinutes() / 60, today = HOURS[di], isOpen = h >= today[1] && h < today[2];
  $('#c-hours').innerHTML = HOURS.map(function (r, i) { return '<li' + (i === di ? ' class="today"' : '') + '><span>' + r[0] + '</span><span>' + r[1] + ':00–' + r[2] + ':00</span></li>'; }).join('');
  $('#c-open').innerHTML = isOpen ? '<b class="y">Открыто</b> до ' + today[2] + ':00' : '<b class="n">Закрыто</b>, откроемся в ' + (h < today[1] ? today[1] : HOURS[(di + 1) % 7][1]) + ':00';

  /* меню */
  var MENU = {
    'Классика': { img: 'c1', items: [['Эспрессо', 'Двойной, смесь Бразилия и Эфиопия', '60 мл', '190 ₽'], ['Капучино', 'Плотная молочная пена', '250 мл', '290 ₽', 'хит'], ['Флэт уайт', 'Двойной эспрессо, чуть молока', '180 мл', '310 ₽'], ['Латте', 'Мягкий, много молока', '350 мл', '320 ₽'], ['Раф', 'Сливки и ванильный сахар', '300 мл', '360 ₽'], ['Американо', 'Эспрессо и горячая вода', '250 мл', '220 ₽']] },
    'Фильтр': { img: 'barista', items: [['Воронка V60', 'Зерно недели на выбор', '300 мл', '340 ₽', 'новое зерно'], ['Аэропресс', 'Плотное тело, чистый вкус', '220 мл', '320 ₽'], ['Батч-брю', 'Фильтр дня, наливаем сразу', '300 мл', '210 ₽'], ['Колд брю', 'Настаиваем 16 часов', '300 мл', '290 ₽']] },
    'Не кофе': { img: 'iced', items: [['Какао', 'На молоке, с морской солью', '300 мл', '310 ₽'], ['Матча латте', 'Церемониальная матча', '300 мл', '360 ₽'], ['Чай с облепихой', 'Облепиха, мёд, розмарин', '400 мл', '290 ₽'], ['Айс латте с карамелью', 'Домашняя солёная карамель', '350 мл', '340 ₽']] },
    'К кофе': { img: 'c4', items: [['Круассан', 'Печём утром, 27 слоёв', '1 шт', '230 ₽', 'хит'], ['Сырник', 'Творог 9%, сметана', '2 шт', '290 ₽'], ['Банановый хлеб', 'С грецким орехом', 'ломтик', '210 ₽'], ['Гранола', 'Йогурт, ягоды, мёд', '250 г', '340 ₽']] }
  };
  var tabs = $('.c-tabs'), list = $('#c-list'), mimg = $('#c-menu-img'), mcap = $('#c-menu-cap');
  function show(name) {
    tabs.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-selected', b.textContent === name); });
    list.innerHTML = MENU[name].items.map(function (m, i) { return '<div class="c-item" style="animation-delay:' + i * 40 + 'ms"><b>' + m[0] + (m[4] ? '<span class="tag">' + m[4] + '</span>' : '') + '</b><em>' + m[3] + '</em><small>' + m[1] + ', ' + m[2] + '</small></div>'; }).join('');
    mimg.style.opacity = 0;
    setTimeout(function () { mimg.src = 'img/coffee/' + MENU[name].img + '.webp'; mimg.alt = name; mcap.textContent = name; mimg.style.opacity = 1; }, 150);
  }
  Object.keys(MENU).forEach(function (k) { var b = document.createElement('button'); b.textContent = k; b.setAttribute('role', 'tab'); b.onclick = function () { show(k); }; tabs.appendChild(b); });
  show('Классика');

  /* калькулятор заваривания: граммы на чашку, соотношение, помол, время */
  var METHODS = [
    { n: 'Воронка V60', d: 'чистый, яркий вкус', cup: 250, ratio: 16, grind: 'Средний', t: '3 мин', tip: 'Пролейте фильтр горячей водой, залейте кофе на 30 секунд для цветения, затем лейте по спирали.' },
    { n: 'Аэропресс', d: 'плотно и быстро', cup: 200, ratio: 14, grind: 'Мелкий', t: '2 мин', tip: 'Перемешайте через 30 секунд, через минуту плавно продавите поршень.' },
    { n: 'Френч-пресс', d: 'много тела', cup: 300, ratio: 15, grind: 'Крупный', t: '4 мин', tip: 'Через 4 минуты снимите корочку ложкой и опустите пресс, не нажимая сильно.' },
    { n: 'Гейзер', d: 'как эспрессо дома', cup: 60, ratio: 7, grind: 'Мелкий', t: '5 мин', tip: 'Не трамбуйте кофе и снимите гейзер с огня, как только он зашипит.' }
  ];
  var mi = 0, cups = 2, mbox = $('#c-methods');
  METHODS.forEach(function (m, i) { var b = document.createElement('button'); b.innerHTML = '<b>' + m.n + '</b><span>' + m.d + '</span>'; b.onclick = function () { mi = i; brew(); }; mbox.appendChild(b); });
  function brew() {
    var m = METHODS[mi], water = m.cup * cups, g = Math.round(water / m.ratio);
    mbox.querySelectorAll('button').forEach(function (b, i) { b.setAttribute('aria-pressed', i === mi); });
    $('#c-cups').textContent = cups;
    $('#c-r-g').textContent = g + ' г'; $('#c-r-w').textContent = water + ' мл'; $('#c-r-grind').textContent = m.grind; $('#c-r-t').textContent = m.t;
    $('#c-r-tip').textContent = 'Пропорция 1 к ' + m.ratio + ', вода 92–96 °C. ' + m.tip;
  }
  $('#c-minus').onclick = function () { cups = Math.max(1, cups - 1); brew(); };
  $('#c-plus').onclick = function () { cups = Math.min(8, cups + 1); brew(); };
  brew();

  /* зерно недели */
  var BEANS = [
    { n: 'Эфиопия Гуджи', s: 'Натуральная обработка', notes: ['черника', 'жасмин', 'какао'], v: [8, 7, 5], h: '2 100 м', sort: 'Эйрлум', price: '890 ₽ за 250 г' },
    { n: 'Колумбия Уила', s: 'Мытая обработка', notes: ['красное яблоко', 'карамель', 'миндаль'], v: [6, 8, 6], h: '1 750 м', sort: 'Катурра', price: '790 ₽ за 250 г' },
    { n: 'Бразилия Серрадо', s: 'Для эспрессо и молока', notes: ['шоколад', 'фундук', 'ириска'], v: [3, 7, 9], h: '1 100 м', sort: 'Катуаи', price: '690 ₽ за 250 г' }
  ];
  var ori = $('#c-origins'), card = $('#c-card');
  card.innerHTML = '<h3></h3><div class="c-notes"></div><div class="c-bars">' + ['Кислотность', 'Сладость', 'Тело'].map(function (l) { return '<div><span>' + l + '</span><i style="--v:0"></i><span></span></div>'; }).join('') + '</div><div class="c-meta"></div>';
  function bean(i) {
    var b = BEANS[i];
    ori.querySelectorAll('button').forEach(function (x, j) { x.setAttribute('aria-pressed', j === i); });
    card.querySelector('h3').textContent = b.n;
    card.querySelector('.c-notes').innerHTML = b.notes.map(function (x) { return '<span>' + x + '</span>'; }).join('');
    card.querySelectorAll('.c-bars div').forEach(function (d, j) { d.children[1].style.setProperty('--v', b.v[j]); d.children[2].textContent = b.v[j]; });
    card.querySelector('.c-meta').innerHTML = '<span>Высота: ' + b.h + '</span><span>Сорт: ' + b.sort + '</span><span>' + b.price + '</span>';
  }
  BEANS.forEach(function (b, i) { var x = document.createElement('button'); x.innerHTML = '<b>' + b.n + '</b><span>' + b.s + '</span>'; x.onclick = function () { bean(i); }; ori.appendChild(x); });
  bean(0);

  /* карта гостя */
  var stamps = 3, sbox = $('#c-stamps'), buy = $('#c-buy'), prog = $('#c-prog');
  function card6() {
    sbox.innerHTML = '';
    for (var i = 0; i < 6; i++) { var s = document.createElement('span'); if (i < stamps) s.className = 'on'; else if (i === 5) { s.className = 'gift'; s.textContent = 'даром'; } sbox.appendChild(s); }
    var left = 5 - stamps;
    if (stamps >= 6) { prog.textContent = 'Следующая чашка за наш счёт'; buy.textContent = 'Забрать бесплатный кофе'; buy.className = 'free'; }
    else if (stamps === 5) { prog.textContent = 'Ещё одна чашка, и шестая бесплатно'; buy.textContent = 'Купить кофе'; buy.className = ''; }
    else { prog.textContent = 'Осталось ' + left + ' ' + (left === 1 ? 'чашка' : left < 5 ? 'чашки' : 'чашек') + ' до бесплатной'; buy.textContent = 'Купить кофе'; buy.className = ''; }
  }
  buy.onclick = function () { stamps = stamps >= 6 ? 0 : stamps + 1; card6(); };
  card6();
  return function () { if (mio) mio.disconnect(); };
}
});
