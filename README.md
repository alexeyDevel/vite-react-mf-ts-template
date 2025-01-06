# Vite + React + Microfrontends + TypeScript Template

Этот шаблон предназначен для быстрого создания микрофронтендов с использованием **Vite**, **React**, **TypeScript** и **Module Federation**. Он включает базовую конфигурацию и структуру проекта, чтобы вы могли сразу приступить к разработке.

## 🚀 Быстрый старт

### 1. Клонируйте репозиторий

Склонируйте репозиторий и перейдите в папку проекта:

```bash
git clone https://github.com/alexeyDevel/vite-react-mf-ts-template.git
cd vite-react-mf-ts-template
2. Установите зависимости
Установите все необходимые зависимости:

bash
Insert Code
Run
Copy code
npm install
или

bash
Insert Code
Run
Copy code
yarn install
3. Запустите проект
Запустите проект в режиме разработки:

bash
Insert Code
Run
Copy code
npm run dev
или

bash
Insert Code
Run
Copy code
yarn dev
🛠️ Использование шаблона
1. Создание нового микрофронтенда
Чтобы использовать этот шаблон для создания нового микрофронтенда:

Скопируйте структуру проекта в новую папку.

Обновите имя микрофронтенда в vite.config.ts:

typescript
Insert Code
Run
Copy code
{
  name: "new-microfrontend-name",
}
Обновите экспортируемые компоненты в vite.config.ts:

typescript
Insert Code
Run
Copy code
exposes: {
  "./new-component": "./src/components/new-component",
},
2. Подключение к хост-приложению
Чтобы подключить микрофронтенд к хост-приложению:

Убедитесь, что хост-приложение поддерживает Module Federation.

Добавьте конфигурацию для загрузки микрофронтенда:

typescript
Insert Code
Run
Copy code
remotes: {
  "new-microfrontend-name": "http://localhost:3000/remoteEntry.js",
},
3. Сборка проекта
Для сборки проекта выполните:

bash
Insert Code
Run
Copy code
npm run build
или

bash
Insert Code
Run
Copy code
yarn build
📂 Структура проекта
Insert Code
Run
Copy code
vite-react-mf-ts-template/
├── src/
│   ├── components/          # Компоненты React
│   ├── App.tsx              # Основной компонент приложения
│   └── main.tsx             # Точка входа
├── vite.config.ts           # Конфигурация Vite
├── package.json             # Зависимости и скрипты
├── tsconfig.json            # Конфигурация TypeScript
└── README.md                # Документация
⚙️ Конфигурация
Vite Config
Конфигурация Vite включает настройки для Module Federation:

typescript
Insert Code
Run
Copy code
export default defineConfig({
  base: "http://localhost:3000",
  plugins: [
    react(),
    federation({
      name: "vite-react-mf-ts-template",
      filename: "remoteEntry.js",
      manifest: true,
      exposes: {
        "./button": "./src/components/button",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
      },
    }),
  ],
});
📦 Зависимости
Основные зависимости:

Vite — сборщик и сервер разработки.
React — библиотека для создания пользовательских интерфейсов.
TypeScript — язык программирования с поддержкой типов.
Module Federation — плагин для микрофронтендов.
🔧 Скрипты
npm run dev — запуск сервера разработки.
npm run build — сборка проекта.
npm run preview — предпросмотр собранного проекта.
📄 Лицензия
Этот проект распространяется под лицензией MIT. Подробнее см. в файле LICENSE.

🤝 Вклад
Если вы хотите внести свой вклад в проект, пожалуйста, создайте Pull Request или Issue. Мы будем рады вашим улучшениям!

📞 Контакты
Если у вас есть вопросы или предложения, свяжитесь с автором:

GitHub: alexeyDevel
**
