import "../styles/hero.css";

export default function Hero() {
  return (
<section className="hero">
  <div className="hero-content">
    <h1 className="brand">Luxury in Every Bite</h1>
    <p className="tagline">Made to melt hearts</p>
    <button>Explore Collection</button>
  </div>

<div className="hero-image">
  <img
    src="https://images.unsplash.com/photo-1511381939415-e44015466834"
    alt="dark premium chocolate"
  />
</div>
</section>
  );
}