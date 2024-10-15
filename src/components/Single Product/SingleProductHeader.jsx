import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "@chakra-ui/react";
import { PiLineVertical } from "react-icons/pi";
import "./style-single product/singleproductheader.css";
import { div } from "framer-motion/client";

const SingleProductHeader = () => {
  return (
    <div style={{ backgroundColor: "#F9F1E7" }}>
      <div className="single-product-header-container">
        <div className="home-link">
          <Link href="/">Home</Link>
          <IoIosArrowForward fontSize="25px" fontWeight="bold" />
        </div>
        <div className="home-link">
          <Link href="/">Shop</Link>
          <IoIosArrowForward fontSize="25px" fontWeight="bold" />
        </div>
        <div className="home-link">
          <PiLineVertical />
        </div>
        <div className="home-link">Asgaard sofa</div>
      </div>
    </div>
  );
};

export default SingleProductHeader;
