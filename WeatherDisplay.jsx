import React from "react";

function WeatherDisplay({ data }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>
        📍 {data.name}, {data.sys.country}
      </h2>
      <p>🌡️ Temperature: {data.main.temp}°C</p>
      <p>🤔 Feels like: {data.main.feels_like}°C</p>
      <p>🌥️ Weather: {data.weather[0].description}</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>🌬️ Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherDisplay;
