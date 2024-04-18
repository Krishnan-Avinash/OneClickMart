import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";

const Universal = () => {
  return (
    <>
      <div className="universal-container">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">404 Error</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="universal-main">
          <h1>404 NOT FOUND</h1>
          <h5>
            Your requested page was not found. Kindly go back to Home page
          </h5>
          <button>Back To Home Page</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Universal;
