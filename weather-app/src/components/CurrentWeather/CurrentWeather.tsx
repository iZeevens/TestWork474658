"use client";
import { useState, useEffect } from "react";
import { useCityStore } from "@/store/cityStore";
import { useFavoritesStore } from "@/store/favoritesStore";
import { ResponseCurrentWeather } from "@/types/types";
import { getWeatherData } from "@/api/weather";
import { fetchWithErrorHandling } from "../../../utils/utils";
import SearchCity from "../SearchCity/SearchCity";
import CurrentWeatherCard from "../WeatherCard/WeatherCard";

function CurrentWeather() {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const { cityInput, addInput } = useCityStore();
  const [weather, setWeather] = useState<ResponseCurrentWeather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const isFavorite = weather ? favorites.includes(weather.name) : false;

  useEffect(() => {
    if (!cityInput.trim()) return;

    fetchWithErrorHandling<ResponseCurrentWeather>(
      () => getWeatherData(cityInput),
      setWeather,
      setError,
      setLoading
    );
  }, [cityInput]);

  return (
    <>
      <SearchCity addInput={addInput} />

      {loading && <div className="text-center">Загрузка...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {weather && (
        <CurrentWeatherCard
          city={weather.name}
          temperature={weather.main.temp}
          description={weather.weather[0].description}
          icon={weather.weather[0].icon}
          humidity={weather.main.humidity}
          windSpeed={weather.wind.speed}
          favorite={isFavorite}
          handleFavorite={
            isFavorite
              ? () => removeFavorite(weather.name)
              : () => addFavorite(weather.name)
          }
        />
      )}
    </>
  );
}

export default CurrentWeather;
