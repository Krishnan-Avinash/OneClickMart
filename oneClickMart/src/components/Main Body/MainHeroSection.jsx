import React from "react";
import First from "./First Section/First";
import Second from "./Second Section/Second";
import Third from "./Third Section/Third";
import Forth from "./Forth Section/Forth";

const MainHeroSection = () => {
  return (
    <div className="container">
      <First />
      <Second />
      <Third />
      <Forth />
      Hello world
    </div>
  );
};

export default MainHeroSection;
