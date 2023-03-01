import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import "./Header.scss";
const Header = ({ setCity, getWeather, timeout, setIsLoading, city }) => {
  const inputCityHandler = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);
  };
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
        <h3>Weather App</h3>
        <WiDayCloudy className="icon" />
      </div>
      <div className="col-12">
        <form onSubmit={submitCityHandler}>
          <input
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
