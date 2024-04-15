import React from "react";
import Cart from "./Cart";

const SearchNCart = () => {
  return (
    <div className="header-right">
      <input type="text" placeholder="What are you looking for?" />
      <Cart />
    </div>
  );
};

export default SearchNCart;
