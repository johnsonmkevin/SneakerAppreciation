import "./index.css";
import Hero from "./Components/Hero";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Jordan from "./Components/Jordan";
import Kobe from "./Components/Kobe";
import Lebron from "./Components/Lebron";
import Durant from "./Components/Durant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/jordan" element={<Jordan />} />
      <Route path="/kobe" element={<Kobe />} />
      <Route path="/durant" element={<Durant />} />
      <Route path="/lebron" element={<Lebron />} />
    </Routes>
  );
}
export default App;
