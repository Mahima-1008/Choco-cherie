import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Choco Cherie</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>

      <button className="nav-btn">Shop</button>
    </nav>
  );
}