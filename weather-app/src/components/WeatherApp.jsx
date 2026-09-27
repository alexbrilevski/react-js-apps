import sunny from "./../assets/images/sunny.png";
import "./WeatherApp.css";

const WeatherApp = () => {
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
            <i className="fa-solid fa-magnifying-glass"></i>
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
