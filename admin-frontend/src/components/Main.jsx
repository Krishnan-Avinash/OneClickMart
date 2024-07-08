import React from "react";
import Header from "./Navbar/Header";

import img from "../assets/longLogo.png";
import { useAuth0 } from "@auth0/auth0-react";

const Main = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  console.log("authenticated: ", isAuthenticated);
  return (
    <div className="main-body">
      <img src={img} alt="" />
    </div>
  );
};

export default Main;
