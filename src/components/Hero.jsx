import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* ✨ CLEAN DIVIDER */}
      <div className="hero-divider"></div>

      {/* LEFT CONTENT */}
      <div className="hero-content">
        <h1 className="brand">Luxury in Every Bite</h1>
        <p className="tagline">Made to melt hearts</p>
        <button className="hero-btn">Explore Collection</button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1511381939415-e44015466834"
          alt="dark chocolate"
        />
      </div>
    </section>
  );
}