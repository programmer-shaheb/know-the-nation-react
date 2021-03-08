import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

function Country(props) {
  const btnHandler = props.handler;
  const { name, capital, flag } = props.country;
  return (
    <div className="container">
      <div className="sub-container">
        <h2>{name}</h2>
        <h2>{capital}</h2>
        <img style={{ width: "100px" }} src={flag} alt="" />
        <button className="btn" onClick={() => btnHandler(props.country)}>
          +
        </button>
        <Link to={"/country/" + name}>
          <button>Show Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Country;
