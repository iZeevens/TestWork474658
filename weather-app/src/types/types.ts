interface WeatherData {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
  };
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { speed: number; deg: number };
  clouds: { all: number };
  visibility: number;
  pop: number;
  sys: { pod: string };
  dt_txt: string;
}

type ResponseCurrentWeather = WeatherData & { cod: string, name: string };

type ResponseWeatherForecast = {
  code: string;
  list: WeatherData[];
  city: {
    name: string;
  };
};

export type { WeatherData, ResponseWeatherForecast, ResponseCurrentWeather };
