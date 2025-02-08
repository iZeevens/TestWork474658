"use client"
import { useWeatherStore } from "@/store/weatherStore";
import SearchCity from "../SearchCity/SearchCity";
import CurrentWeatherCard from "../CurrentWeatherCard/CurrentWeatherCard";
import { getWeatherAndForecastData } from "@/api/weather";

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

  const handleSearch = async (city: string) => {
    if (!city) return

    try { 
      setLoading(true);
      setError(null);
      
      const weather = await getWeatherAndForecastData(city);

      if (weather) {
        setCurrentWeather(weather.weather);
        setForecast(weather.forecast);
        console.log(weather)
      }
    } catch (err) {
      setError("Ошибка при загрузке данных");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchCity
        onSearch={handleSearch}
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
        />
      )}
    </>
  );
}

export default CurrentWeather;
