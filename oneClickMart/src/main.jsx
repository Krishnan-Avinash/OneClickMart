import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import MainHeroSection from "./components/Main Body/MainHeroSection.jsx";
import Sale from "./components/Main Body/Second Section/mid/Sale.jsx";

import "./styles/header/allpages.scss";
import "./styles/mediaQueries.scss";
import "./styles/header/logo.scss";
import "./styles/header/headercontainer.scss";
import "./styles/header/individualelement.scss";
import "./styles/header/searchNcart.scss";
import "./styles/header/cart.scss";
import "./styles/first/mainfirstleft.scss";
import "./styles/first/mainfirstleftindividual.scss";
import "./styles/first/first.scss";
import "./styles/first/mainherosection.scss";
import "./styles/first/carouseldisplay.scss";
import "./styles/second/sale.scss";
import "./styles/second/secondtop.scss";
import "./styles/second/card.scss";
import "./styles/third/thirdtop.scss";
import "./styles/third/individualcategory.scss";
import "./styles/third/third.scss";
import "./styles/third/categories.scss";
import "./styles/forth/forth.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainHeroSection />} />
        </Route>
        <Route path="/second" element={<Sale />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
