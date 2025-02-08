import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const DEFAULT_PARAMS = {
  appid: API_KEY,
  lang: "ru",
  units: "metric",
};

const fetchWeatherData = async (endpoint: string, params: object) => {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}`, {
      params: { ...DEFAULT_PARAMS, ...params },
    });

    return response.data;
  } catch (error) {
    console.error(`Ошибка при получении ${endpoint}:`, error);
    return null;
  }
};

const getWeatherData = async (cityName: string) =>
  fetchWeatherData("weather", { q: cityName });

const getForecastData = async (cityName: string) =>
  fetchWeatherData("forecast", { q: cityName });

const getWeatherAndForecastData = async (cityName: string) => {
  const [weather, forecast] = await Promise.all([
    getWeatherData(cityName),
    getForecastData(cityName),
  ]);

  return { weather, forecast };
};

export { getWeatherData, getForecastData, getWeatherAndForecastData };
