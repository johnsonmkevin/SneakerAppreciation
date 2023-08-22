import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaTimes } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="nav-bar">
        <div className="nav-logo">
          <img src="" className="NikeLogo" alt="NikeLogo" />
        </div>
        <nav className="nav_links">
          <ul>
            <li>
              <a href="/">Kobe</a>
            </li>
            <li>
              <a href="/">Kobe</a>
            </li>
            <li>
              <a href="/">Kobe</a>
            </li>
            <li>
              <a href="/">Kobe</a>
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Jordan</a>
              </li>
              <li>
                <a href="/">Kobe</a>
              </li>
              <li>
                <a href="/">Kobe</a>
              </li>
            </ul>
          </nav>
          <FaTimes onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}

export default Nav;
