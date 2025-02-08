"use client";
import { useWeatherStore } from "@/store/weatherStore";
import { useFavoritesStore } from "@/store/favoritesStore";
import SearchCity from "../SearchCity/SearchCity";
import CurrentWeatherCard from "../WeatherCard/WeatherCard";

function CurrentWeather() {
  const {
    setCurrentWeather,
    setLoading,
    setError,
    setForecast,
    currentWeather,
    loading,
    error,
  } = useWeatherStore();
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorite = currentWeather ? favorites.includes(currentWeather.name) : false;

  return (
    <>
      <SearchCity
        setCurrentWeather={setCurrentWeather}
        setForecast={setForecast}
        setLoading={setLoading}
        setError={setError}
      />
      {loading && <div className="text-center">Загрузка...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {currentWeather && (
        <CurrentWeatherCard
          city={currentWeather.name}
          temperature={currentWeather.main.temp}
          description={currentWeather.weather[0].description}
          icon={currentWeather.weather[0].icon}
          humidity={currentWeather.main.humidity}
          windSpeed={currentWeather.wind.speed}
          favorite={isFavorite}
          handleFavorite={isFavorite ? removeFavorite : addFavorite}
        />
      )}
    </>
  );
}

export default CurrentWeather;
