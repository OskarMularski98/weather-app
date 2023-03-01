import React from "react";
import sadCloud from "../../assets/img/sad-cloud.png";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error-container">
      <h2>Error has occured...</h2>
      <img src={sadCloud} width="200" height="200" alt="loading..." />
    </div>
  );
};

export default Error;
