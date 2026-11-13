# Полярник — портфолио

Сайт-витрина разработчика: сайты, Telegram-боты, мини-приложения. Внутри шесть демо-сайтов для разных ниш.

## Структура

- `index.html` — главный сайт и каркас для демо
- `assets/main.css`, `assets/app.js` — стили, роутер, переходы, 3D-звезда
- `assets/fonts/` — шрифты с кириллицей (лежат локально, без CDN)
- `vendor/three.min.js` — Three.js r128
- `car/` — процедурная 3D-модель купе для «Глянца» (three r178, грузится только на этом демо)
- `img/` — фото для демо (Unsplash и свои для детейлинга)
- `assets/logo.png` — логотип без фона
- `sites/*.js` — демо-сайты: `coffee`, `barber`, `tattoo`, `detailing`, `photo`, `estate`. Каждый подгружается только при открытии

## Запуск

Сборка не нужна. Локально: `python3 -m http.server` и открыть `http://localhost:8000`.
Для GitHub Pages: Settings → Pages → ветка `main`, папка `/`.

## Что поменять под себя

- Ссылка на Telegram: поиск по `Polyarnikznak` в `index.html`, `assets/app.js`
- Логотип: блок `.brand` в `index.html` (сейчас звезда в SVG)
- Тексты главной: `index.html`
