import "../styles/hero.css";
import { FaSearch } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      {/* DARK OVERLAY */}
      <div className="hero-overlay"></div>

      {/* NAVBAR */}
      <div className="hero-navbar">
        <div className="logo">Choco Cherie</div>

        <ul className="nav-links">

          <li className="dropdown">
            About
            <ul className="dropdown-menu">
              <li>Our Story</li>
              <li>Our Craft</li>
            </ul>
          </li>

          <li className="dropdown">
            Explore
            <ul className="dropdown-menu">
              <li>Collections</li>
              <li>Flavours</li>
            </ul>
          </li>

          <li className="dropdown">
            Products
            <ul className="dropdown-menu">
              <li>Dark Chocolate</li>
              <li>Milk Chocolate</li>
              <li>Truffles</li>
            </ul>
          </li>

          <li>Recipes</li>
          <li>Gifting</li>
          <li>Contact</li>

        </ul>

        <div className="search">
          <FaSearch />
          <span>Search</span>
        </div>
      </div>

      {/* HERO CENTER CONTENT */}
      <div className="hero-center">
        <p className="hero-small">PREMIUM COLLECTION</p>

        <h1>
          LUXURY CHOCOLATES <br />
          MADE TO MELT HEARTS
        </h1>

        <p className="hero-sub">
          Discover handcrafted chocolates designed for every occasion.
        </p>

        <button className="hero-btn">Explore Collection</button>
      </div>

    </section>
  );
}

export default Hero;