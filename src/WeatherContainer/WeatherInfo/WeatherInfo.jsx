import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowDownLeft } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowUpLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";
const WeatherInfo = ({data}) => {
    const directions = {
        NE: ["NNE", "ENE"],
        SE: ["ESE", "SSE"],
        SW: ["SSW", "WSW"],
        NW: ["WNW", "NNW"],
      };
  return (
    <div>
      <h5 className="text-center">Todays forecast in {data.location.name}</h5>
      <div className="d-flex">
        <div className="col-6 text-center">
          <img src={data.current.condition.icon} alt="loading image..." />
          <label className="form-label d-flex justify-content-center">
            {`${data.current.temp_c}° C`}
          </label>
          <label className="form-label d-flex justify-content-center">
            Wind {data.current.wind_kph.toFixed()} km/h
            {data.current.wind_dir === "N" && <FiArrowUp className="mt-1" />}
            {directions.NE.includes(data.current.wind_dir) && (
              <FiArrowUpLeft className="mt-1" />
            )}
            {data.current.wind_dir === "E" && <FiArrowLeft className="mt-1" />}
            {directions.SE.includes(data.current.wind_dir) && (
              <FiArrowDownLeft className="mt-1" />
            )}
            {data.current.wind_dir === "S" && <FiArrowDown className="mt-1" />}
            {directions.SW.includes(data.current.wind_dir) && (
              <FiArrowDownRight className="mt-1" />
            )}
            {data.current.wind_dir === "W" && <FiArrowRight className="mt-1" />}
            {directions.NW.includes(data.current.wind_dir) && (
              <FiArrowUpRight className="mt-1" />
            )}
          </label>
        </div>
        <div>
          <label className="form-label d-flex">
            Feels like temperature: {data.current.feelslike_c.toFixed()}° C
          </label>
          <label className="form-label d-flex">
            Max Temp: {data.forecast.forecastday[0].day.maxtemp_c.toFixed()}° C
          </label>
          <label className="form-label d-flex">
            Min Temp: {data.forecast.forecastday[0].day.mintemp_c.toFixed()}° C
          </label>
          <label className="form-label d-flex">
            Total precipitation:{" "}
            {data.forecast.forecastday[0].day.totalprecip_mm} mm
          </label>
          <label className="form-label d-flex">
            Chance of rain:{" "}
            {data.forecast.forecastday[0].hour[0].chance_of_rain}%
          </label>
          <label className="form-label d-flex">
            Pressure: {data.current.pressure_mb} hPa
          </label>
          <label className="form-label d-flex">
            Humidity: {data.current.humidity}%
          </label>
          <label className="form-label d-flex">
            Updated: {data.current.last_updated}
          </label>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
