import "./index.css";
import Hero from "./Components/Hero";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
    </Routes>
  );
}
export default App;
