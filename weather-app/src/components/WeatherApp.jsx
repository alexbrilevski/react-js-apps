import { useEffect, useState } from "react";
import sunny from "./../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/snowy.png";
import "./WeatherApp.css";

const WeatherApp = () => {
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      const defaultLocation = "Minsk";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=metric&appid=${apiKey}`;
      const res = await fetch(url);
      const defaultData = await res.json();
      setData(defaultData);
    };

    fetchDefaultWeather();
  }, []);

  const search = async () => {
    if (location.trim() !== "") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const searchData = await response.json();
      console.log(searchData);
      setData(searchData);
      setLocation("");
    }
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const weatherStyleData = {
    Clear: {
      image: sunny,
      backgroundImage: "linear-gradient(to right, #f3b07c, #fcd283)",
    },
    Clouds: {
      image: cloudy,
      backgroundImage: "linear-gradient(to right, #57d6d4, #71eeec)",
    },
    Rain: {
      image: rainy,
      backgroundImage: "linear-gradient(to right, #5bc8fb, #80eaff)",
    },
    Snow: {
      image: snowy,
      backgroundImage: "linear-gradient(to right, #aff2ff, #fff)",
    },
    Haze: {
      image: cloudy,
      backgroundImage: "linear-gradient(to right, #57d6d4, #71eeec)",
    },
    Mist: {
      image: cloudy,
      backgroundImage: "linear-gradient(to right, #57d6d4, #71eeec)",
    },
  };

  const weatherImage = data.weather
    ? weatherStyleData[data.weather[0].main].image
    : null;
  const backgroundImage = data.weather
    ? weatherStyleData[data.weather[0].main].backgroundImage
    : "linear-gradient(to right, #f3b07c, #fcd283)";
  const backgroundImageApp =
    backgroundImage && backgroundImage.replace
      ? backgroundImage.replace("to right", "to top")
      : "linear-gradient(to top, #f3b07c, #fcd283)";

  return (
    <div className="container" style={{ backgroundImage }}>
      <div
        className="weather-app"
        style={{ backgroundImage: backgroundImageApp }}
      >
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">{data.name}</div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
          </div>
        </div>
        <div className="weather">
          <img
            src={weatherImage}
            alt={`${data.weather ? data.weather[0].main : ""}`}
          />
          <div className="weather-type">
            {data.weather ? data.weather[0].main : null}
          </div>
          <div className="temp">
            {data.main ? `${Math.floor(data.main.temp)}°` : null}
          </div>
        </div>
        <div className="weather-date">
          <p>Mon, 28 Sep</p>
        </div>
        <div className="weather-data">
          <div className="humidity">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">{data.main ? data.main.humidity : null}%</div>
          </div>
          <div className="wind">
            <div className="data-name">Wind</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">
              {data.wind ? data.wind.speed : null} km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
