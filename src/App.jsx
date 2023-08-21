import "./index.css";
import Hero from "./Components/Hero/Hero";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Jordan from "./Components/Jordan";
import Kobe from "./Components/Kobe";
import Sabrina from "./Components/Sabrina";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaTimes } from "react-icons/fa";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <header className="nav-bar">
          <div className="nav-logo">
            <img src="" className="NikeLogo" alt="NikeLogo" />
          </div>
          <nav className="nav_links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/jordan">Jordan</Link>
              </li>
              <li>
                <Link to="/kobe">Kobe</Link>
              </li>
              <li>
                <Link to="/sabrina">Sabrina</Link>
              </li>
            </ul>
          </nav>
          <div className="svg-container">
            <BsFillSuitHeartFill className="heart" />
            <PiShoppingCartThin className="cart" />
          </div>
          <div className="burger">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
          </div>
        </header>
        {isOpen && (
          <div className="drawer" onMouseLeave={() => setIsOpen(false)}>
            <nav className="nav_links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jordan">Jordan</Link>
                </li>
                <li>
                  <Link to="/kobe">Kobe</Link>
                </li>
                <li>
                  <Link to="/sabrina">Sabrina</Link>
                </li>
              </ul>
            </nav>
            <FaTimes onClick={() => setIsOpen(false)} />
          </div>
        )}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/jordan" element={<Jordan />} />
          <Route path="/kobe" element={<Kobe />} />
          <Route path="/sabrina" element={<Sabrina />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
