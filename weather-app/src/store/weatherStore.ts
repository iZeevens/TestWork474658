import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ResponseCurrentWeather, ResponseWeatherForecast } from "@/types/types";

interface WeatherState {
  currentWeather: ResponseCurrentWeather | null;
  forecast: ResponseWeatherForecast | null;
  loading: boolean;
  error: string | null;
  setCurrentWeather: (weather: ResponseCurrentWeather | null) => void;
  setForecast: (forecast: ResponseWeatherForecast | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useWeatherStore = create<WeatherState>()(
  persist(
    (set) => ({
      currentWeather: null,
      forecast: null,
      loading: false,
      error: null,
      setCurrentWeather: (weather) => set({ currentWeather: weather }),
      setForecast: (forecast) => set({ forecast }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: "weather-storage",
      partialize: (state) => ({
        currentWeather: state.currentWeather,
        forecast: state.forecast,
      }),
    }
  )
);
