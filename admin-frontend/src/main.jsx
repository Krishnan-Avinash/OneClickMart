import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Navbar/Header";

import "./styles/common.scss";

import { Auth0Provider } from "@auth0/auth0-react";
import Add from "./components/Add/Add";
import List from "./components/list/List";
import MainBody from "./components/MainBody";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-wdlr56ndce87jp4y.us.auth0.com"
    clientId="sbaxur5ydr2YG4jBTJ6h8veQOE16SmuG"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainBody />} />
          <Route path="add" element={<Add />} />
          <Route path="list" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);
