import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import SingleProduct from "../pages/single product/SingleProduct";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<SingleProduct />} />
      </Routes>
    </div>
  );
};

export default Routing;
