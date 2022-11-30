import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
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
      <BrowserRouter>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cartthree" element={<CartThree />} />
          <Route path="/carttwo" element={<CartTwo />} />
          <Route path="/cartOne" element={<CartOne />} />
          <Route path="/bodybath" element={<BodyBath />} />
          <Route path="/haircare" element={<HairCare />} />
          <Route path="/makeup" element={<MakeUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
