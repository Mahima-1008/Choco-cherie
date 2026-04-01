import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Luxury in Every Bite</h1>
        <p>Made to melt hearts</p>
        <button>Explore Collection</button>
      </div>

      <div className="hero-right">
        <img src="https://images.unsplash.com/photo-1549007994-cb92caebd54b" />
      </div>
    </section>
  );
}