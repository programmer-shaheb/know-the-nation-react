import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  const totalPopulation = cart.reduce(
    (total, current) => total + current.population,
    0
  );
  console.log(totalPopulation);
  return (
    <div>
      <h1>Country Added: {props.cart.length}</h1>
      <h1>Population: {totalPopulation}</h1>
    </div>
  );
};

export default Cart;
