import { create } from "zustand";
import { ResponseCurrentWeather, ResponseWeatherForecast } from "@/types/types";

interface WeatherState {
  currentWeather: ResponseCurrentWeather | null;
  forecast: ResponseWeatherForecast[];
  loading: boolean;
  error: string | null;
  setCurrentWeather: (weather: ResponseCurrentWeather | null) => void;
  setForecast: (forecast: ResponseWeatherForecast[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  currentWeather: null,
  forecast: [],
  loading: false,
  error: null,
  setCurrentWeather: (weather) => set({ currentWeather: weather }),
  setForecast: (forecast) => set({ forecast }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
