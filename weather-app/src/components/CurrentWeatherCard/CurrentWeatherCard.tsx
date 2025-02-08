import Image from "next/image";

interface ICurrentWeatherCardProps {
  city: string;
  temperature: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}

function CurrentWeatherCard({
  city,
  temperature,
  description,
  icon,
  humidity,
  windSpeed,
}: ICurrentWeatherCardProps) {
  return (
    <div className="weather-card card">
      <div className="card-body text-center">
        <h5 className="card-title">{city}</h5>
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Weather Icon"
          width={80}
          height={80}
        />
        <h2 className="temperature">{Math.round(temperature)}°C</h2>
        <p className="description">{description}</p>
        <div className="details">
          <p>💧 Влажность: {humidity}%</p>
          <p>🌬️ Ветер: {windSpeed} м/с</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
