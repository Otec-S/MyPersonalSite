# MyPersonalSite — контекст для Cursor

Персональный сайт-портфолио Сергея Григораша. Одностраничное React-приложение с i18n, адаптивной вёрсткой и деплоем на GitHub Pages и reg.ru.

**Продакшен:** https://otec-s.github.io/MyPersonalSite/

## Стек

- React 18 + TypeScript
- Vite 5 (сборщик, `@vitejs/plugin-react-swc`)
- CSS Modules (`.module.css`) + PostCSS с autoprefixer
- i18next / react-i18next / i18next-http-backend / i18next-browser-languagedetector (локали: `ru`, `en`)
- vite-plugin-svgr (SVG как React-компоненты)
- ESLint 9 (flat config) + Prettier

## Команды

```bash
npm run dev           # локальная разработка
npm run build         # tsc -b && vite build → dist/ (base: /MyPersonalSite/)
npm run build:dist2   # tsc -b && VITE_BUILD_TARGET=root vite build → dist2/ (base: /)
npm run lint          # eslint
npm run preview       # предпросмотр production-сборки из dist/
npm run preview:dist2 # предпросмотр сборки из dist2/
```

## Структура проекта

```
src/
  App.tsx, main.tsx
  components/
    about/               # секция «Обо мне»
    experience/          # секция «Опыт» (карточки работ)
    certificates/        # карусель сертификатов + модальное окно
      certificates.data.ts # автоподхват изображений через import.meta.glob
    header/              # шапка, переключатель RU/EN
    navigation/          # якорная навигация (скрыта < 1000px)
      navigation-item/
    social-media/        # GitHub, LinkedIn, Telegram, email
    main/                # обёртка секций About + Experience + Certificates
    gradient/            # фоновый градиент, следует за курсором
    smooth-scroll/       # плавная прокрутка по якорным ссылкам
    card/, stack-item/   # вспомогательные UI-компоненты
    og-image/            # компонент для OG-изображения
    shared/
      constants.ts       # TOP_OFFSET и прочие константы
      links.ts           # RESUME_LINKS, SOCIAL_LINKS
      hooks/
        useSectionVisibility.ts
  assets/
    icons/               # SVG-иконки + index.ts для реэкспорта
    certificates/        # изображения сертификатов (.png, .jpg, .jpeg, .webp)
  utils/i18n/i18n.js     # конфигурация i18next
  styles/reset.css
public/locales/
  ru/translation.json
  en/translation.json
.github/workflows/
  deploy.yml             # GitHub Pages
  deploy-regru.yml       # FTP на reg.ru
```

### Алиасы импортов

Настроены в `vite.config.ts` и `tsconfig.app.json`:

- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`
- `@pages/*` → `src/pages/*` (папка пока не используется)
- `@shared/*` → `src/shared/*` (папка пока не используется; общий код лежит в `src/components/shared/`)

Используй алиасы вместо относительных путей вида `../../../`.

## Соглашения по коду

### React-компоненты

- Функциональные компоненты с типом `FC`
- Один компонент — одна папка: `component-name.tsx` + `component-name.module.css`
- Default export в конце файла
- Стили импортируются как `import styles from "./component-name.module.css"`
- Классы применяются через `styles.className`

### Стили

- Только CSS Modules, без Tailwind и CSS-in-JS
- Глобальные стили — минимально (`reset.css`, `App.module.css`, `index.css`)
- Основной брейкпоинт: **1000px** (`max-width: 1000px`)
- Дополнительные брейкпоинты: 768px, 640px (в отдельных компонентах)
- Логика, зависящая от ширины экрана в JS, использует порог `1000` (см. `gradient.tsx`, `header.tsx`, `experience.tsx`)

### i18n

- Все пользовательские тексты — через `useTranslation()` и ключи в `public/locales/{lng}/translation.json`
- Fallback-язык: `en`
- Автоопределение языка браузера через `i18next-browser-languagedetector`
- При добавлении текста обновляй **оба** файла локализации (`ru` и `en`)
- Ключи группируются по секциям: `header`, `nav`, `about`, `experience`, `certificates` и т.д.
- Переключатель языка — в `header.tsx` (кнопки ENG | RUS)

### Внешние ссылки

- Социальные сети и email — `src/components/shared/links.ts` (`SOCIAL_LINKS`)
- Ссылки на резюме (RU/EN) — `RESUME_LINKS` в том же файле

### SVG-иконки

- Файлы в `src/assets/icons/`
- Импорт через svgr: `import { GitHubIcon } from "@assets/icons"`
- Новые иконки добавляй в `src/assets/icons/index.ts`

### Доступность

- У интерактивных и смысловых блоков — `aria-label`
- Внешние ссылки: `target="_blank"` + `rel="noreferrer noopener"` + описательный `aria-label`
- Секции с `id` для якорной навигации (`#about`, `#experience`, `#certificates`)

## Ключевые фичи (не ломать без явного запроса)

- Градиент следует за курсором на экранах ≥ 1000px; на меньших — фиксированная позиция
- Навигация отслеживает видимые секции через `useSectionVisibility` (IntersectionObserver, `rootMargin: "-50% 0px -50% 0px"`)
- На экранах < 1000px навигация скрыта, у секций появляются sticky-заголовки
- Клик по имени в header прокручивает к `#about` (только ≥ 1000px; на узких экранах ссылка ведёт на `#`)
- `SmoothScroll` перехватывает клики по `a[href^="#"]` и прокручивает с учётом `TOP_OFFSET`
- Hover-эффекты в блоке Experience: подсветка активного раздела, затемнение остальных
- **Сертификаты** — горизонтальная карусель (CSS scroll-snap) в конце страницы; клик открывает полноэкранное модальное окно с изображением
- Раздел и пункт навигации скрываются, если в `src/assets/certificates/` нет файлов

## Сертификаты

- Изображения кладутся в `src/assets/certificates/` (`.png`, `.jpg`, `.jpeg`, `.webp`)
- Автоподхват через `import.meta.glob` в `certificates.data.ts` — ручная регистрация не нужна
- Заголовок карточки формируется из имени файла: `claude-101.webp` → «Claude 101»
- Компоненты: `certificates.tsx`, `certificate-carousel.tsx`, `certificate-modal.tsx`
- PDF не поддерживается — только изображения

## Деплой

### GitHub Pages

- Workflow: `.github/workflows/deploy.yml`
- Триггер: push в `main` или `workflow_dispatch`
- Сборка: `npm run build` → артефакт из `dist/`
- `base` в `vite.config.ts`: `/MyPersonalSite/` — не менять без обновления настроек Pages

### reg.ru (FTP)

- Workflow: `.github/workflows/deploy-regru.yml`
- Триггер: push в `main` или `workflow_dispatch`
- Сборка: `npm run build:dist2` → загрузка `dist2/` по FTPS
- Секреты: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
- `VITE_BUILD_TARGET=root` переключает `base` на `/` и `outDir` на `dist2`

## Правила для AI-агента

1. **Минимальный diff** — меняй только то, что нужно для задачи
2. **Следуй существующим паттернам** — не вводи новые библиотеки и подходы без запроса
3. **Не коммить** изменения, пока пользователь явно не попросит
4. **Не создавай** лишние абстракции, хелперы и тесты без необходимости
5. **Проверяй** `npm run build` и `npm run lint` после существенных изменений
6. **Язык общения** — русский, если пользователь пишет по-русски
7. **Комментарии в коде** — только для нетривиальной логики, не для очевидного
