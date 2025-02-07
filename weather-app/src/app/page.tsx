import CurrentWeather from "@/components/CurrentWeather/CurrentWeather";

function Home() {
  return (
    <>
      <h1 className="mb-4">Погода сейчас</h1>
      <CurrentWeather />
    </>
  );
}

export default Home;
