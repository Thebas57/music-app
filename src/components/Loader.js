import React from "react";
import loader from "../assets/loader.svg"

const Loader = ({ title }) => {
  return (
    <div className="loader">
      <img src={loader} alt="loader" />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
};

export default Loader;
