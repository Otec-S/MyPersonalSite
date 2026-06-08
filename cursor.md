# MyPersonalSite — контекст для Cursor

Персональный сайт-портфолио Сергея Григораша. Одностраничное React-приложение с i18n, адаптивной вёрсткой и деплоем на GitHub Pages.

**Продакшен:** https://otec-s.github.io/MyPersonalSite/

## Стек

- React 18 + TypeScript
- Vite 5 (сборщик, `@vitejs/plugin-react-swc`)
- CSS Modules (`.module.css`) + PostCSS с autoprefixer
- i18next / react-i18next (локали: `ru`, `en`)
- vite-plugin-svgr (SVG как React-компоненты)
- ESLint 9 (flat config) + Prettier

## Команды

```bash
npm run dev      # локальная разработка
npm run build    # tsc -b && vite build
npm run lint     # eslint
npm run preview  # предпросмотр production-сборки
```

## Структура проекта

```
src/
  components/          # UI-компоненты (каждый в своей папке)
    about/
    experience/
    certificates/      # карусель сертификатов + модальное окно
    shared/
      constants.ts
      hooks/           # переиспользуемые хуки (useSectionVisibility)
  assets/
    icons/             # SVG-иконки + index.ts для реэкспорта
    certificates/      # изображения сертификатов (.png, .jpg, .jpeg, .webp)
  utils/i18n/          # конфигурация i18next
  styles/reset.css
  App.tsx, main.tsx
public/locales/
  ru/translation.json
  en/translation.json
```

### Алиасы импортов

Настроены в `vite.config.ts` и `tsconfig.app.json`:

- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`
- `@pages/*` → `src/pages/*`
- `@shared/*` → `src/shared/*`

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
- При добавлении текста обновляй **оба** файла локализации (`ru` и `en`)
- Ключи группируются по секциям: `header`, `nav`, `about`, `experience`, `certificates` и т.д.

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
- Навигация отслеживает видимые секции через `useSectionVisibility` (IntersectionObserver)
- На экранах < 1000px навигация скрыта, у секций появляются sticky-заголовки
- Клик по имени в header прокручивает к Main (только ≥ 1000px)
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

- GitHub Actions: push в `main` → `npm ci` → `npm run build` → GitHub Pages
- `base` в `vite.config.ts`: `MyPersonalSite/` — не менять без обновления настроек Pages

## Правила для AI-агента

1. **Минимальный diff** — меняй только то, что нужно для задачи
2. **Следуй существующим паттернам** — не вводи новые библиотеки и подходы без запроса
3. **Не коммить** изменения, пока пользователь явно не попросит
4. **Не создавай** лишние абстракции, хелперы и тесты без необходимости
5. **Проверяй** `npm run build` и `npm run lint` после существенных изменений
6. **Язык общения** — русский, если пользователь пишет по-русски
7. **Комментарии в коде** — только для нетривиальной логики, не для очевидного
