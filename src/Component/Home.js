import React from "react";
import { useEffect, useState } from "react";
import Country from "./Country";
import Cart from "./Cart";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        // const names = data.map((country) => country.name);
        // console.log(names);
      })
      .catch((error) => console.log(error));
  }, []);

  const handler = (countries) => {
    if (cart.indexOf(countries) == -1) {
      const newCart = [...cart, countries];
      setCart(newCart);
    } else {
      alert("country already added");
    }
  };

  return (
    <div>
      <h1>Country Loaded: {countries.length}</h1>
      <Cart cart={cart}></Cart>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {countries.map((countries) => (
          <Country country={countries} handler={handler}></Country>
        ))}
      </div>
    </div>
  );
};

export default Home;
