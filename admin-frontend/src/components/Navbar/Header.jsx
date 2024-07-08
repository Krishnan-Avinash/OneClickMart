import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Left/Logo";
import AllPages from "./Mid/AllPages";

const Header = () => {
  return (
    <>
      <main className="header-container">
        <Logo />
        <AllPages />
      </main>
      <Outlet />
    </>
  );
};

export default Header;
