function WeatherCard({ weather }) {
  return (
    <div>
      <h2>{weather.city}</h2>
      <p>{weather.temperature}°C</p>
      <p>Code météo: {weather.code}</p>
    </div>
  );
}

export default WeatherCard;
