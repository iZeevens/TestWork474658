"use client"
import { useWeatherStore } from "@/store/weatherStore";
import ForecastWeatherCard from "../ForecastWeatherCard/ForecastWeatherCard";

function ForecastWeather() {
  const { forecast } = useWeatherStore();

  return <>{forecast && <ForecastWeatherCard forecast={forecast} />}</>;
}

export default ForecastWeather;
