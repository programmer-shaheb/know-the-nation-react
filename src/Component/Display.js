import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";

const Display = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);
  const history = useHistory();
  const btnHandler = () => {
    history.goBack();
  };

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div>
      <h4>Country Details</h4>
      {country.map((details) => {
        const {
          borders,
          name,
          capital,
          population,
          timezones,
          currencies,
        } = details;

        return (
          <>
            <h1> Name: {name}</h1>
            <h2>Capital: {capital}</h2>
            <h2>Population: {population}</h2>
            <h2>Timezones: {timezones[0]}</h2>
            <p>
              Currencies: {currencies[0].code}-{currencies[0].name}
            </p>
            <p>
              {borders.map((border) => (
                <ul>
                  <li>{border}</li>
                </ul>
              ))}
            </p>
            <button onClick={btnHandler}>Back</button>
          </>
        );
      })}
    </div>
  );
};

export default Display;
