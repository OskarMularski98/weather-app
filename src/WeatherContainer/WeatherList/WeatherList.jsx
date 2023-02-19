import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItem from "./ListItem/ListItem";
import "./WeatherList.scss";
const WeatherList = ({ data }) => {
//   const getFutureWeather = async ({data}) => {
//     try {
//       const response = await axios.get(
//         `http://api.weatherapi.com/v1/forecast.json?key=${
//           import.meta.env.VITE_API_KEY
//         }&q=${city}&days=7`
//       );
//       setData(response.data);
//       setWeather(response.data.forecast.forecastday);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     return async () => await getFutureWeather();
//   }, []);
// console.log(data)
  return (
    <div>
      <h5 className="text-center">Future Days</h5>{" "}
      {data &&
        data.forecast.forecastday.map((day) => (
          <ListItem
            date={day.date}
            src={day.day.condition.icon}
            sunrise={day.astro.sunrise}
            sunset={day.astro.sunset}
            avgtemp_c={day.day.avgtemp_c}
            key={day.date}
          />
        ))}
    </div>
  );
};

export default WeatherList;
