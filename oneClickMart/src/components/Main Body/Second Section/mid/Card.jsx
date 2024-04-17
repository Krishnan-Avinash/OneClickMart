import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, link, name, price, blur }) => {
  return (
    <Link
      to=""
      className={`whole card ${blur ? "blurred" : ""}`}
      style={{ filter: blur ? "blur(3px)" : "none" }}
    >
      <img src={image} alt="" />
      <h1>{name}</h1>
      <h3>$ {price}</h3>
      <button>Add to Cart</button>
    </Link>
  );
};

export default Card;
