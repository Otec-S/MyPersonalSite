# Мой персональный сайт

Одностраничное портфолио Сергея Григораша: React-приложение с i18n, адаптивной вёрсткой и автоматическим деплоем.

**Продакшен:** [otec-s.github.io/MyPersonalSite](https://otec-s.github.io/MyPersonalSite/)

## Возможности

- **Интернационализация** — переключение языка RU / EN в шапке; тексты загружаются из `public/locales/`
- **Интерактивный градиент** — следует за курсором на экранах ≥ 1000px; на меньших — фиксированная позиция
- **Якорная навигация** — отслеживает видимые секции через `IntersectionObserver`; плавная прокрутка по клику
- **Адаптивная вёрстка** — основной брейкпоинт 1000px: на узких экранах навигация скрывается, у секций появляются sticky-заголовки
- **Блок «Опыт»** — при наведении активный раздел подсвечивается, остальные затемняются
- **Сертификаты** — горизонтальная карусель (CSS scroll-snap); клик открывает полноэкранное модальное окно; раздел скрывается, если нет изображений
- **Социальные ссылки** — GitHub, LinkedIn, Telegram, email в шапке
- **Доступность** — `aria-label` на интерактивных элементах, семантическая разметка

## Технологии

| Категория | Стек |
|-----------|------|
| UI | React 18, TypeScript |
| Сборка | Vite 5, `@vitejs/plugin-react-swc` |
| Стили | CSS Modules, PostCSS + autoprefixer |
| i18n | i18next, react-i18next, i18next-http-backend |
| Иконки | vite-plugin-svgr (SVG как React-компоненты) |
| Качество кода | ESLint 9 (flat config), Prettier |

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/vitejs/vitejs-original.svg" title="Vite" alt="Vite" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/postcss/postcss-original.svg" title="PostCSS" alt="PostCSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" title="CSS" alt="CSS" width="40" height="40"/>&nbsp;
</div>

## Быстрый старт

```bash
npm install        # установка зависимостей
npm run dev        # локальная разработка (Vite dev server)
npm run build      # production-сборка в dist/ (base: /MyPersonalSite/)
npm run preview    # предпросмотр сборки из dist/
npm run lint       # проверка ESLint
```

Сборка для корневого домена (reg.ru и аналоги):

```bash
npm run build:dist2   # сборка в dist2/ (base: /)
npm run preview:dist2 # предпросмотр сборки из dist2/
```

## Структура проекта

```
src/
  components/
    about/             # секция «Обо мне»
    experience/        # секция «Опыт»
    certificates/      # карусель сертификатов + модальное окно
    header/            # шапка, переключатель языка
    navigation/        # якорная навигация
    social-media/      # ссылки на соцсети
    gradient/          # фоновый градиент
    smooth-scroll/     # плавная прокрутка по якорям
    card/, stack-item/ # вспомогательные UI-компоненты
    shared/
      constants.ts
      links.ts         # внешние ссылки (резюме, соцсети)
      hooks/           # useSectionVisibility
  assets/
    icons/             # SVG-иконки
    certificates/      # изображения сертификатов (.webp и др.)
  utils/i18n/          # конфигурация i18next
  styles/reset.css
public/locales/
  ru/translation.json
  en/translation.json
```

## Сертификаты

Изображения кладутся в `src/assets/certificates/` (`.png`, `.jpg`, `.jpeg`, `.webp`). Файлы подхватываются автоматически через `import.meta.glob` в `certificates.data.ts` — ручная регистрация не нужна. Заголовок карточки формируется из имени файла: `claude-101.webp` → «Claude 101».

## Деплой

| Цель | Workflow | Сборка | Папка |
|------|----------|--------|-------|
| GitHub Pages | `.github/workflows/deploy.yml` | `npm run build` | `dist/` |
| reg.ru (FTP) | `.github/workflows/deploy-regru.yml` | `npm run build:dist2` | `dist2/` |

Оба workflow запускаются при push в ветку `main` и вручную через `workflow_dispatch`.

Для GitHub Pages `base` в `vite.config.ts` задан как `/MyPersonalSite/`. Для reg.ru используется переменная окружения `VITE_BUILD_TARGET=root`, которая переключает `base` на `/` и выходную папку на `dist2/`.

## Контекст для AI

Файл [`cursor.md`](./cursor.md) содержит соглашения по коду, структуру компонентов и правила для AI-агентов в Cursor.
