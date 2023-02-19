import React from "react";
import axios from "axios";
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
        }&q=${city}`
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
    <div className="toolbar">
      <div className="col-12">
        <form onSubmit={submitCityHandler}>
          <input
            onChange={inputCityHandler}
            placeholder="Enter your city"
            className="form-control"
            type="text"
          />
        </form>
      </div>
      <div className="col-3">
        <label className="form-label">icon</label>
      </div>
    </div>
  );
};

export default Header;
