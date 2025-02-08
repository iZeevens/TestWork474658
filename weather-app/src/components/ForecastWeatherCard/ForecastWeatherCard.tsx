import { ResponseWeatherForecast } from "@/types/types";
import Image from "next/image";

interface IForecastWeatherCardProps {
  forecast: ResponseWeatherForecast;
}

function ForecastWeatherCard({ forecast }: IForecastWeatherCardProps) {
  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="row justify-content-center mt-5 gap-3">
      {dailyForecast ? (
        dailyForecast.map((item) => (
          <div key={item.dt} className="col-12 col-lg-2 card text-center">
            <div className="card-body">
              <h4 className="card-title">
                {new Date(item.dt * 1000).toLocaleDateString("ru-RU", {
                  weekday: "long",
                })}
              </h4>
              <Image
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                width={80}
                height={80}
              />
              <h3>{Math.round(item.main.temp)}°C</h3>
              <p>{item.weather[0].description}</p>
              <div>
                <p>💧 Влажность: {item.main.humidity}%</p>
                <p>🌬️ Ветер: {item.wind.speed} м/с</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <span>Прогноз отсутствует</span>
      )}
    </div>
  );
}

export default ForecastWeatherCard;
