"use client";
import { useState, useEffect } from "react";
import { ResponseCurrentWeather } from "@/types/types";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useFavoritesStore } from "@/store/favoritesStore";
import { getWeathersForCites } from "@/api/weather";

function FavoritesWeather() {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const [favoritesResult, setFavoritesResult] = useState<
    ResponseCurrentWeather[]
  >([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await getWeathersForCites(favorites);

      if (data) setFavoritesResult(data as ResponseCurrentWeather[]);
    };

    if (favorites.length > 0) {
      fetchFavorites();
    }
  }, [favorites]);

  return (
    <div className="flex flex-wrap justify-center">
      {favoritesResult.length > 0 ? (
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
