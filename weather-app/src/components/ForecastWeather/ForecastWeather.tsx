"use client"
import { useWeatherStore } from "@/store/weatherStore";
import WeatherCard from "../WeatherCard/WeatherCard";

function ForecastWeather() {
  const { forecast } = useWeatherStore();
  const dailyForecast = forecast?.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <>
      {dailyForecast && forecast ? (
        <div className="row justify-content-center mt-5 gap-3">
           <h2>{forecast.city.name}</h2>
           {dailyForecast.map((item) => (
              <WeatherCard
                key={item.dt}
                city={forecast.city.name}
                temperature={item.main.temp}
                description={item.weather[0].description}
                icon={item.weather[0].icon}
                humidity={item.main.humidity}
                windSpeed={item.wind.speed}
              />
           ))}
        </div>
      ) : <span>Прогноз отсутствует</span>}
    </>
  );
}

export default ForecastWeather;
