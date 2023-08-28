import "./index.css";
import Hero from "./Components/Hero";
import { Route, Routes } from "react-router-dom";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import Jordan from "./Components/Jordan.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/jordan" element={<Jordan />} />
    </Routes>
  );
}
export default App;
