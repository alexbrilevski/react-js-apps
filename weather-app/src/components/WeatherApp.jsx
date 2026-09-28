import { useState } from "react";
import sunny from "./../assets/images/sunny.png";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [data, setData] = useState();

  const search = async () => {
    const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const searchData = await response.json();
    console.log(searchData);
    setData(searchData);
  };

  return (
    <div className="container">
      <div className="weather-app">
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">London</div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Enter Location" />
            <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
          </div>
        </div>
        <div className="weather">
          <img src={sunny} alt="sunny" />
          <div className="weather-type">Sunny</div>
          <div className="temp">25°</div>
        </div>
        <div className="weather-date">
          <p>Mon, 28 Sep</p>
        </div>
        <div className="weather-data">
          <div className="humidity">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">12%</div>
          </div>
          <div className="wind">
            <div className="data-name">Wind</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">1 km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
