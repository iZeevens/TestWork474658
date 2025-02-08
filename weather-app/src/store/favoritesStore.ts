import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IFavoritesState {
  favorites: string[];
  addFavorite: (city: string) => void;
  removeFavorite: (city: string) => void;
}

export const useFavoritesStore = create<IFavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite(city) {
        const favorites = get().favorites;

        if (!favorites.includes(city)) {
          set({ favorites: [...favorites, city] });
        }
      },
      removeFavorite(city) {
        set({
          favorites: get().favorites.filter((favorite) => favorite !== city),
        });
      },
    }),
    { name: "favorites-storage" }
  )
);
