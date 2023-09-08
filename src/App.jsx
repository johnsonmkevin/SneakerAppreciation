import React from "react";
import "./index";
import { Route, Routes } from "react-router-dom";
import Video from "./Components/Video";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import Unisex from "./Components/Unisex";
import Kids from "./Components/Kids";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Video />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/unisex" element={<Unisex />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
