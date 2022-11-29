import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import About from "./screens/about";
import NavBar from "./components/navbar";
import SocialNavBar from "./components/socialnavbar";
import MakeUp from "./screens/makeup";
import HairCare from "./screens/haircare";
import BodyBath from "./screens/bodybath";
import CartOne from "./screens/cartOne";
import CartTwo from "./screens/cartTwo";
import CartThree from "./screens/cartThree";
import Checkout from "./screens/checkout";

function AppRouter() {
  return (
    <>
      {/* <Home /> */}
      {/* <MakeUp /> */}
      {/* <HairCare /> */}
      {/* <BodyBath /> */}
      {/* <CartOne /> */}
      {/* <CartTwo /> */}
      {/* <CartThree /> */}
      <Checkout />

      {/* <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
    </>
  );
}

export default AppRouter;
