import React, { useEffect, useState } from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaSearch } from "react-icons/fa";
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
  };
  const submitCityHandler = async (e) => {
    e.preventDefault();
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
        <form className="form" onSubmit={submitCityHandler}>
          <input
            disabled={isLoading}
            onChange={inputCityHandler}
            placeholder="Enter your city"
            className="input-city"
            type="text"
            value={city}
          />
          <button onClick={submitCityHandler} className="icon-search">
            <FaSearch />
          </button>
          {city === "" && (
            <p className="error-message">This field is required.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Header;
