import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

const getForecastData = async (cityName: string) => {
  try {
    const request = await axios(
      "https://api.openweathermap.org/data/2.5/forecast",
      { params: { q: cityName, appid: API_KEY } }
    );

    const result = request.data;

    return result
  } catch (error) {
    console.error("Ошибка при получении данных о погоде:", error);
    return null;
  }
};

export { getForecastData };
