function WeatherCard({ weather }) {
  function getWeatherDescription(code) {
    if (code === 0) return "Ensoleillé";

    if (code <= 3) return "Partiellement nuageux";

    if (code <= 48) return "Brouillard";

    if (code <= 67) return "Pluie";

    if (code <= 77) return "Neige";

    if (code <= 99) return "Orage";

    return "Météo inconnue";
  }

  function getWeatherIcon(code) {
    if (code === 0) return "☀️";

    if ([1, 2, 3].includes(code)) return "☁️";

    if ([51, 53, 55, 61, 63, 65].includes(code)) return "🌧️";

    if ([71, 73, 75].includes(code)) return "❄️";

    if ([95, 96, 99].includes(code)) return "⛈️";

    return "🌍";
  }

  function getWeatherClass(code) {
    if (code === 0) return "sunny";
    if ([1, 2, 3].includes(code)) return "cloudy";
    if ([51, 53, 55, 61, 63, 65].includes(code)) return "rainy";
    if ([71, 73, 75].includes(code)) return "snowy";
    if ([95, 96, 99].includes(code)) return "stormy";

    return "default-weather";
  }
  return (
    <div className={`weather-card ${getWeatherClass(weather.code)}`}>
      <h2>
        {weather.city}, {weather.country}
      </h2>

      <p>{weather.temperature}°C</p>
      <p>Ressenti : {weather.feelsLike}°C</p>
      <p>
        {getWeatherIcon(weather.code)} {getWeatherDescription(weather.code)}
      </p>
      <p>Vent : {weather.wind} km/h</p>
    </div>
  );
}

export default WeatherCard;
