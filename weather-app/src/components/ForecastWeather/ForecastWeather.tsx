"use client";
import { useState, useEffect } from "react";
import { ResponseWeatherForecast } from "@/types/types";
import { fetchWithErrorHandling } from "../../../utils/utils";
import { getForecastData } from "@/api/weather";
import { useCityStore } from "@/store/cityStore";
import WeatherCard from "../WeatherCard/WeatherCard";

function ForecastWeather() {
  const { cityInput } = useCityStore();
  const [forecast, setForecast] = useState<ResponseWeatherForecast | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const dailyForecast = forecast?.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  useEffect(() => {
    if (!cityInput.trim()) return;

    fetchWithErrorHandling<ResponseWeatherForecast>(
      () => getForecastData(cityInput),
      setForecast,
      setError,
      setLoading
    );
  }, [cityInput]);

  return (
    <>
      {loading && <div className="text-center">Загрузка...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {dailyForecast && forecast ? (
        <div className="row justify-content-center mt-5 gap-3">
          <h2>{forecast.city.name}</h2>
          {dailyForecast.map((item) => {
            const date = new Date(item.dt_txt);
            const dayOfWeek = new Intl.DateTimeFormat("ru-RU", {
              weekday: "long",
            }).format(date);

            return (
              <div
                key={item.dt}
                className="col-12 col-sm-8 col-lg-4 col-xl-2 p-0"
              >
                <WeatherCard
                  temperature={item.main.temp}
                  description={item.weather[0].description}
                  icon={item.weather[0].icon}
                  humidity={item.main.humidity}
                  windSpeed={item.wind.speed}
                  dayOfWeek={dayOfWeek}
                />
              </div>
            );
          })}
        </div>
      ) : (
        !loading && !error && <span>Сначала выберите город</span>
      )}
    </>
  );
}

export default ForecastWeather;
