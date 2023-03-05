import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowDownLeft } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowUpLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";
import "./WeatherInfo.scss";
const WeatherInfo = ({ data, weatherInfo, isTodaySelected }) => {
  const directions = {
    NE: ["NNE", "ENE", "NE"],
    SE: ["ESE", "SSE", "SE"],
    SW: ["SSW", "WSW", "SW"],
    NW: ["WNW", "NNW", "NW"],
  };
  return (
    <div className="weather-info">
      <h5 className="text-center weather-info-title">
        {isTodaySelected ? "Today's " : <div> {weatherInfo.date}</div>}
        weather forecast in {data.location.name}
      </h5>
      <div className="col-12 d-flex">
        {isTodaySelected ? (
          <div className="col-6 text-center">
            <label className="form-label d-flex justify-content-center">
              Current weather
            </label>
            <img src={data.current.condition.icon} alt="loading image..." />
            <label className="form-label d-flex justify-content-center">
              {data.current.temp_c}° C
            </label>
            <label className="form-label d-flex justify-content-center">
              Wind: {data.current.wind_kph.toFixed()} km/h
              {data.current.wind_dir === "N" && <FiArrowUp className="mt-1" />}
              {directions.NE.includes(data.current.wind_dir) && (
                <FiArrowUpLeft className="mt-1" />
              )}
              {data.current.wind_dir === "E" && (
                <FiArrowLeft className="mt-1" />
              )}
              {directions.SE.includes(data.current.wind_dir) && (
                <FiArrowDownLeft className="mt-1" />
              )}
              {data.current.wind_dir === "S" && (
                <FiArrowDown className="mt-1" />
              )}
              {directions.SW.includes(data.current.wind_dir) && (
                <FiArrowDownRight className="mt-1" />
              )}
              {data.current.wind_dir === "W" && (
                <FiArrowRight className="mt-1" />
              )}
              {directions.NW.includes(data.current.wind_dir) && (
                <FiArrowUpRight className="mt-1" />
              )}
            </label>
          </div>
        ) : (
          <div className="col-6 text-center">
            <img src={weatherInfo.day.condition.icon} alt="loading image..." />
            <label className="form-label d-flex justify-content-center">
              {weatherInfo.day.avgtemp_c.toFixed()}° C
            </label>
            <label className="form-label d-flex justify-content-center">
              Max wind: {weatherInfo.day.maxwind_kph.toFixed()} km/h
            </label>
          </div>
        )}
        <div className="col-6 weather-info-content">
          <label className="form-label d-flex">
            Country: {data.location.country}
          </label>
          <label className="form-label d-flex">
            Average temperature: {weatherInfo.day.avgtemp_c.toFixed()}° C
          </label>
          <label className="form-label d-flex">
            Feels like temperature: {data.current.feelslike_c.toFixed()}° C
          </label>
          <label className="form-label d-flex">
            Max Temp: {weatherInfo.day.maxtemp_c.toFixed()}° C
          </label>
          <label className="form-label d-flex">
            Min Temp: {weatherInfo.day.mintemp_c.toFixed()}° C
          </label>
          <label className="form-label d-flex">
            Sunrise: {weatherInfo.astro.sunrise}
          </label>
          <label className="form-label d-flex">
            Sunset: {weatherInfo.astro.sunset}
          </label>
          <label className="form-label d-flex">
            Total precipitation: {weatherInfo.day.totalprecip_mm} mm
          </label>
          <label className="form-label d-flex">
            Chance of rain: {weatherInfo.hour[0].chance_of_rain}%
          </label>
          <label className="form-label d-flex">
            Pressure: {data.current.pressure_mb} hPa
          </label>
          <label className="form-label d-flex">
            Humidity: {data.current.humidity}%
          </label>
          <label className="form-label d-flex">Date: {weatherInfo.date}</label>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
