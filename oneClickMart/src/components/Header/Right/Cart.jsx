import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartImg from "../../../assets/cart2.png";

const Cart = () => {
  const [data, setData] = useState(0);
  return (
    <div className="cart">
      <Link to={"/cart"} className="">
        <img src={cartImg} alt="Cart" />
      </Link>
      <span>{data}</span>
    </div>
  );
};

export default Cart;
