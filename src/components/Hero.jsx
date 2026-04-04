import "../styles/hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* HERO CONTENT */}
      <div className="hero-center">
        <p className="hero-small">PREMIUM COLLECTION</p>

        <h1>
          LUXURY CHOCOLATES <br />
          MADE TO MELT HEARTS
        </h1>

        <p className="hero-sub">
          Discover handcrafted chocolates designed for every occasion.
        </p>

        <button
          className="hero-btn"
          onClick={() => navigate("/")}
        >
          Explore Collection
        </button>
      </div>

    </section>
  );
}

export default Hero;