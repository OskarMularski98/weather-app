import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Header from "./Header/Header";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import Diagram from "./Diagram/Diagram";
import WeatherList from "./WeatherList/WeatherList";
import Error from "./Error/Error";
import cloudLoading from "../assets/gifs/loading.gif";
import "./WeatherContainer.scss";
import { CSSTransition } from "react-transition-group";
const WeatherContainer = () => {
  const [data, setData] = useState();
  const [city, setCity] = useState("Gdansk");
  const [temp, setTemp] = useState([]);
  const [isCityValid, setCityValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState();
  const [isTodaySelected, setIsTodaySelected] = useState(true);
  const timeout = 2000;
  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${city}&days=14`
      );
      setCityValid(true);
      setData(response.data);
      setTemp(
        response.data.forecast.forecastday[0].hour.map((day) => day.temp_c)
      );
      setWeatherInfo(response.data.forecast.forecastday[0]);
      setIsLoading(false);
    } catch (error) {
      setCityValid(false);
      console.log(error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      await getWeather();
      setIsLoading(false);
    }, timeout);
  }, []);

  Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
  };
  const newDate = new Date().addHours(1);
  const ListItemHandler = (dataDay) => {
    if (newDate.toISOString().split("T")[0] === dataDay.date) {
      setIsTodaySelected(true);
    } else {
      setIsTodaySelected(false);
    }
    setWeatherInfo(dataDay);
    setTemp(dataDay.hour.map((day) => day.temp_c));
  };

  return (
    <div className="container-fluid">
      <div className="content row col-xxl-6 col-xl-6 col-md-8 col-sm-12 col-12">
        <Header
          setTemp={setTemp}
          setData={setData}
          city={city}
          isLoading={isLoading}
          setCity={setCity}
          getWeather={getWeather}
          setIsLoading={setIsLoading}
          setCityValid={setCityValid}
          timeout={timeout}
        />
        <CSSTransition in={isLoading} timeout={2000} classNames="fade-class">
          {!isLoading ? (
            <div>
              <div className="container-content col-12">
                {isCityValid ? (
                  <WeatherInfo
                    isTodaySelected={isTodaySelected}
                    weatherInfo={weatherInfo}
                    data={data}
                  />
                ) : (
                  <Error />
                )}
              </div>
              {isCityValid && (
                <div>
                  <Diagram temp={temp} />
                  <WeatherList
                    ListItemHandler={ListItemHandler}
                    setWeatherInfo={setWeatherInfo}
                    weatherInfo={weatherInfo}
                    city={city}
                    data={data}
                  />
                </div>
              )}
            </div>
          ) : (
            <div>
              <img
                className="loading-cloud"
                src={cloudLoading}
                alt="loading..."
              />
            </div>
          )}
        </CSSTransition>
      </div>
    </div>
  );
};

export default WeatherContainer;
