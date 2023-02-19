import React from "react";
import axios from "axios";
import { WiDayCloudy } from "react-icons/wi";
import "./Header.scss";
const Header = ({ setCity, city, setTemp, setData }) => {
  const inputCityHandler = (e) => {
    setCity(e.target.value);
  };
  const submitCityHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${city}&days=7`
      );
      setData(response.data);
      setTemp(
        response.data.forecast.forecastday[0].hour.map((day) => day.temp_c)
      );
    } catch (error) {
      console.log(error);
    }
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
            className="form-control input-form"
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
