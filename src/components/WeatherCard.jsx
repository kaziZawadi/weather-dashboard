function WeatherCard({ weather }) {
  function getWeatherDescription(code) {
    if (code === 0) return "☀️ Ensoleillé";

    if (code <= 3) return "🌥️ Partiellement nuageux";

    if (code <= 48) return "🌫️ Brouillard";

    if (code <= 67) return "🌧️ Pluie";

    if (code <= 77) return "❄️ Neige";

    if (code <= 99) return "⛈️ Orage";

    return "Météo inconnue";
  }
  return (
    <div className="weather-card">
      <h2>
        {weather.city}, {weather.country}
      </h2>
      <p>{weather.temperature}°C</p>
      <p>{getWeatherDescription(weather.code)}</p>
      <p>Vent: {weather.wind} km/h</p>
    </div>
  );
}

export default WeatherCard;
