import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IСityState {
  cityInput: string;
  addInput: (city: string) => void;
}

export const useCityStore = create<IСityState>()(
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
