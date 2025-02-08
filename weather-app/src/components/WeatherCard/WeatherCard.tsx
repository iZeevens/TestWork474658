import styles from "./WeatherCard.module.scss";
import Image from "next/image";

interface IWeatherCardProps {
  city: string;
  temperature: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}

function WeatherCard({
  city,
  temperature,
  description,
  icon,
  humidity,
  windSpeed,
}: IWeatherCardProps) {
  return (
    <div className={`card mt-5 ${styles.weatherCard}`}>
      <div className="card-body text-center">
        <h5 className="card-title">{city}</h5>
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          width={80}
          height={80}
        />
        <h2>{Math.round(temperature)}°C</h2>
        <p>{description}</p>
        <div>
          <p>💧 Влажность: {humidity}%</p>
          <p>🌬️ Ветер: {windSpeed} м/с</p>
        </div>
      </div>
      <Image
        src="/icons/favorites-off.svg"
        className={styles.favsImg}
        alt="favorite"
        height={40}
        width={40}
      />
    </div>
  );
}

export default WeatherCard;
