import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="nav-bar">
        <div className="nav-logo">
          <img
            src="./images/nikeLogo.jpg"
            className="NikeLogo"
            alt="NikeLogo"
          />
        </div>
        <nav className="nav_links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/kids">Kids</Link>
            </li>
          </ul>
        </nav>
        <div className="svg-container">
          <Link to="/favorites">
            <BiHeart className="heart" />
          </Link>
          <Link to="/signin">
            <AiOutlineUser className="signin" />
          </Link>
          <Link to="/cart" className="cartContainer">
            <AiOutlineShopping className="cart" />
            <span className="cartQty">
              <span>5</span>
            </span>
          </Link>
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
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link href="/kids">Kids</Link>
              </li>
            </ul>
          </nav>
          <FaTimes onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
