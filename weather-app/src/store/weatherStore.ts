import { create } from "zustand";
import { WeatherData } from "@/types/types";

interface WeatherState {
  currentWeather: WeatherData | null;
  forecast: WeatherData[];
  loading: boolean;
  error: string | null;
  setCurrentWeather: (weather: WeatherData | null) => void;
  setForecast: (forecast: WeatherData[]) => void;
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
