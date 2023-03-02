import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import "./Header.scss";
const Header = ({
  setCity,
  getWeather,
  timeout,
  setIsLoading,
  city,
  isLoading,
}) => {
  const inputCityHandler = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);
  };
  const success = (pos) => {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  };
  navigator.geolocation.getCurrentPosition(success);
  const submitCityHandler = async (e) => {
    e.preventDefault();
    console.log(city);
    if (city === "") {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      getWeather();
      setIsLoading(false);
    }, timeout);
  };
  return (
    <div>
      <div className="header">
        <a href="">
          <h3>Weather App</h3>
        </a>
        <WiDayCloudy className="icon" />
      </div>
      <div className="col-12">
        <form onSubmit={submitCityHandler}>
          <input
            disabled={isLoading}
            onChange={inputCityHandler}
            placeholder="Enter your city"
            className="input-city"
            type="text"
            value={city}
          />
          {city === "" && (
            <p className="error-message">This field is required.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Header;
