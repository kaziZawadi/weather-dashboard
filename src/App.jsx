import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);

  async function handleSearch(city) {
    try {
      // 1. Chercher la ville
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
      );

      const geoData = await geoResponse.json();

      if (!geoData.results) {
        alert("Ville introuvable");
        return;
      }

      const latitude = geoData.results[0].latitude;
      const longitude = geoData.results[0].longitude;

      // 2. Chercher la météo
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`,
      );

      const weatherData = await weatherResponse.json();

      setWeather({
        city: geoData.results[0].name,
        temperature: weatherData.current.temperature_2m,
        code: weatherData.current.weather_code,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>

      <SearchBar onSearch={handleSearch} />

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
