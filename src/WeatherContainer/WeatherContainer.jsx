import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Header from "./Header/Header";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import Diagram from "./Diagram/Diagram";

const WeatherContainer = () => {
  const [data, setData] = useState();
  const [city, setCity] = useState("Gdansk");
  const [temp, setTemp] = useState([]);
  const shouldLog = useRef(true);
  const getWeather = async () => {
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
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      return async () => await getWeather();
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row col-xxl-6 col-xl-6 col-md-8 col-sm-10">
        <Header
          setTemp={setTemp}
          setData={setData}
          city={city}
          setCity={setCity}
        />
        <div className="container-content col-12">
          {data && <WeatherInfo data={data} />}
        </div>
        <Diagram temp={temp} />
      </div>
    </div>
  );
};

export default WeatherContainer;
