import WeatherCard from "../WeatherCard/WeatherCard";
import { useFavoritesStore } from "@/store/favoritesStore";
import { getWeathersForCites } from "@/api/weather";

function FavoritesWeather() {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();

  const favoritesResult = getWeathersForCites(favorites);

  return <div className="flex flex-wrap justify-center"></div>;
}

export default FavoritesWeather;
