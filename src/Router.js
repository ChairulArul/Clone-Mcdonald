import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import "./App.css";
import Menu from "./Menu/Menu";
import Promo from "./Promo/Promo";

const Rooter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Promo" element={<Promo />} />
    </Routes>
  );
};
export default Rooter;
