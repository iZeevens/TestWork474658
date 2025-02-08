"use client";
import { useState } from "react";
import { ResponseCurrentWeather, ResponseWeatherForecast } from "@/types/types";
import { getWeatherAndForecastData } from "@/api/weather";

interface ISearchCityProps {
  setCurrentWeather: (weather: ResponseCurrentWeather) => void;
  setForecast: (forecast: ResponseWeatherForecast) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

function SearchCity({ setCurrentWeather, setForecast, setLoading, setError }: ISearchCityProps) {
  const [cityInput, setCityInput] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cityInput) return

    try { 
      setLoading(true);
      setError(null);
      
      const weather = await getWeatherAndForecastData(cityInput);

      if (weather) {
        setCurrentWeather(weather.weather);
        setForecast(weather.forecast);
      }
    } catch (err) {
      setError("Ошибка при загрузке данных");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название города"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Поиск
        </button>
      </div>
    </form>
  );
}

export default SearchCity;
