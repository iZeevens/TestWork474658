"use client";
import { useState } from "react";
import { useWeatherStore } from "@/store/weatherStore";
import SearchCity from "../SearchCity/SearchCity";

function CurrentWeather() {
  const [cityInput, setCityInput] = useState<string>("");
  const {setCurrentWeather, setLoading, setError, setForecast, currentWeather, loading, error} = useWeatherStore();

  return (
    <>
      <SearchCity cityInput={cityInput} setCityInput={setCityInput} />
      {loading && <div className="text-center">Загрузка...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
}

export default CurrentWeather;
