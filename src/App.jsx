import "./index.css";
import Nike from "./icons/Nike.svg";
import Cart from "./icons/Cart.svg";
import User from "./icons/User.svg";
import hamburger from "./icons/hamburger.svg";

function Nav() {
  return (
    <nav class="nav-container">
      <div class="nav-logo">
        <img src={Nike} class="NikeLogo" alt="NikeLogo" />
      </div>
      <div class="nav_links">
        <ul class="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Testimonials">Testimonials</a>
          </li>
          <li>
            <a href="/collections">Collections</a>
          </li>
        </ul>
      </div>
      <div class="svg-container">
        <img src={User} alt="user profile" />
        <img src={Cart} alt="shopping cart" />
        <img src={hamburger} alt="" />
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
