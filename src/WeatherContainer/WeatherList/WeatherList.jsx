import React, { useEffect, useState } from "react";
import ListItem from "./ListItem/ListItem";
import "./WeatherList.scss";
const WeatherList = ({ data, ListItemHandler }) => {
  return (
    <div>
      <h5 className="text-center">Future Days</h5>{" "}
      {data &&
        data.forecast.forecastday.map((day) => (
          <ListItem
            day={day}
            data={data}
            ListItemHandler={ListItemHandler}
            date={day.date}
            src={day.day.condition.icon}
            sunrise={day.astro.sunrise}
            sunset={day.astro.sunset}
            avgtemp_c={day.day.avgtemp_c.toFixed() + "° C"}
            key={day.date}
          />
        ))}
    </div>
  );
};

export default WeatherList;
