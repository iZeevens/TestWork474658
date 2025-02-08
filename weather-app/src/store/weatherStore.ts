import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IWeatherState {
  cityInput: string;
  addInput: (city: string) => void;
}

export const useWeatherStore = create<IWeatherState>()(
  persist(
    (set) => ({
      cityInput: "",
      addInput(city) {
        return set({ cityInput: city });
      },
    }),
    {
      name: "weather-storage",
    }
  )
);
