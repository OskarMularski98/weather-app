import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherContainer = () => {
  const [data, setData] = useState();
  //   const shouldLog = useRef(true);
  useEffect(() => {
    (async () => {
      try {
        // if (shouldLog.current) {
        // shouldLog.current = false;
        // const weatherData = async () => {
        const data = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Gdansk`
        );
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    // }
  }, []);
  return (
    <div className="container-fluid">
      <div className="row col-xxl-6 col-xl-6 col-md-8 col-sm-10">
        <div className="toolbar">
          <div className="col-5">
            <input
              placeholder="Search..."
              className="form-control"
              type="text"
            />
          </div>
          <div className="col-3">
            <label className="form-label">icon</label>
          </div>
        </div>
        <div className="container-content d-flex">
          <div className="container-box col-6">
            todays forecast
            <label className="form-label"></label>
          </div>
          <div className="container-box col-6">diagram</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;
