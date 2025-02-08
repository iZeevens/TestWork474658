"use client";
import { useState, useEffect } from "react";
import { ResponseCurrentWeather } from "@/types/types";
import { fetchWithErrorHandling } from "../../../utils/utils";
import { useFavoritesStore } from "@/store/favoritesStore";
import { getWeathersForCites } from "@/api/weather";
import WeatherCard from "../WeatherCard/WeatherCard";

function FavoritesWeather() {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [favoritesResult, setFavoritesResult] = useState<
    ResponseCurrentWeather[] | null
  >(null);

  useEffect(() => {
    if (favorites.length === 0) return;

    fetchWithErrorHandling<ResponseCurrentWeather[]>(
      () => getWeathersForCites(favorites),
      setFavoritesResult,
      setError,
      setLoading
    );
  }, [favorites]);

  return (
    <div className="flex flex-wrap justify-center">
      {loading && <div className="text-center">Загрузка...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {favoritesResult && favoritesResult.length > 0 ? (
        favoritesResult.map((weather) => {
          const isFavorite = favorites.includes(weather.name);

          return (
            <WeatherCard
              key={weather.dt}
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
          );
        })
      ) : (
        <span>Вы ещё не добавили в избранное города</span>
      )}
    </div>
  );
}

export default FavoritesWeather;
