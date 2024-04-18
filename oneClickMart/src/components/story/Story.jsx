import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import img1 from "../../assets/story2.jpg";
import Sixth from "../Main Body/Sixth Section/Sixth";
import Footer from "../Footer/Footer";

const Story = () => {
  return (
    <>
      <div className="story-container">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Story</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="story-main">
          <div className="story-left">
            <h1>Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="story-right">
            <img src={img1} alt="Error" />
          </div>
        </div>
        <Sixth />
      </div>
      <Footer />
    </>
  );
};

export default Story;
