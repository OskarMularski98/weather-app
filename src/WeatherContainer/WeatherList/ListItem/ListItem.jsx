import React from "react";
import "./ListItem.scss";
const ListItem = ({ src, avgtemp_c, sunrise, sunset, date }) => {
  return (
    <div className="list-content">
      <img src={src} />
      <div>
        <h6>Date</h6>
        {date}
      </div>
      <div>
        <h6>Avg temp</h6>
        {avgtemp_c}
      </div>
      <div>
        {" "}
        <h6>Sunrise</h6>
        {sunrise}
      </div>
      <div>
        {" "}
        <h6>Sunset</h6>
        {sunset}
      </div>
    </div>
  );
};

export default ListItem;
