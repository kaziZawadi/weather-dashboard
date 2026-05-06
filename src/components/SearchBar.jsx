import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (city.trim().length === 0) return;

    onSearch(city);
    setCity("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Rechercher une ville..."
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}

export default SearchBar;
