import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import WeatherDisplay from "./components/WeatherDisplay";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

// ✅ Your working API Key here
const API_KEY = "c381c01eb5e33e21c2c33103c5a97633";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
      console.log("Fetching:", url);

      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City not found.");
        } else if (response.status === 429) {
          throw new Error("API rate limit exceeded. Try again later.");
        } else {
          throw new Error("Failed to fetch weather data.");
        }
      }

      const data = await response.json();
      console.log("Fetched Weather:", data);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || "Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app" style={{ maxWidth: 600, margin: "20px auto", padding: 20, border: "1px solid #ccc", borderRadius: 10 }}>
      <h1>🌦️ Weather Info Dashboard</h1>
      <SearchInput city={city} setCity={setCity} onSearch={fetchWeather} />

      {loading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;
