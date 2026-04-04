import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">

      <div className="logo">Choco Cherie</div>

      <ul className="nav-links">

        {/* ABOUT */}
        <li className="dropdown">
          About
          <ul className="dropdown-menu">
            <li>
              <Link to="/our-story">Our Story</Link>
            </li>
            <li>Our Craft</li>
          </ul>
        </li>

        {/* EXPLORE */}
        <li className="dropdown">
          Explore
          <ul className="dropdown-menu">
            <li>Collections</li>
            <li>Seasonal</li>
          </ul>
        </li>

        {/* PRODUCTS */}
        <li className="dropdown">
          Products
          <ul className="dropdown-menu">
            <li>Dark Chocolate</li>
            <li>Milk Chocolate</li>
            <li>Gift Boxes</li>
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
  );
}

export default Navbar;