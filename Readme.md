# Weather App

## Описание
Приложение для просмотра текущей погоды и прогноза на несколько дней вперед, используя OpenWeatherMap API. Пользователи могут искать погоду в разных городах и сохранять избранные города.

## Технологии
- **Next.js** **TypeScript**
- **SCSS Modules** **Bootstrap**
- **Zustand**
- **Axios** 
- **ESLint**

## Функциональность
- Поиск города и отображение текущей погоды
- Просмотр прогноза на несколько дней вперед
- Добавление городов в избранное (сохранение в Zustand + локальное хранилище)
- Индикация загрузки и обработка ошибок

## Установка и запуск
1. Клонируйте репозиторий:
   ```sh
   git clone https://github.com/iZeevens/TestWork474658
   cd weather-app
   ```
2. Установите зависимости:
   ```sh
   npm install
   # или
   yarn install
   ```
3. Создайте файл `.env` и добавьте API-ключ:
   ```sh
   NEXT_PUBLIC_WEATHER_API_KEY=your_api_key
   ```
4. Запустите проект в режиме разработки:
   ```sh
   npm run dev
   # или
   yarn dev
   ```
5. Откройте в браузере: [http://localhost:3000](http://localhost:3000)

