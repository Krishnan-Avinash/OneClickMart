import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndividualName = ({ name }) => {
  const { loginWithPopup, user, isAuthenticated, logout } = useAuth0();
  console.log("User: ", user);

  const handleLogin = () => {
    loginWithPopup({ screen_hint: "login" }).then(() => {
      if (!isAuthenticated && !user) {
        toast.error("Login to continue", {
          position: "bottom-right",
        });
      }
      if (isAuthenticated && user) {
        toast.success("Logged In", {
          position: "bottom-right",
        });
      }
    });
  };

  return (
    <div className="individualname">
      {(() => {
        if (name === "Login") {
          return (
            <button className="login-btn" onClick={handleLogin}>
              {name}
            </button>
          );
        } else if (name === "Logout") {
          return (
            <button className="login-btn-2" onClick={logout}>
              {name}
            </button>
          );
        } else {
          return <p>{name}</p>;
        }
      })()}
      {/* {name != "Login" ? (
        <p>{name}</p>
      ) : (
        <button className="login-btn" onClick={handleLogin}>
          {name}
        </button>
      )} */}
      <ToastContainer />
    </div>
  );
};

export default IndividualName;
