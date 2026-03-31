import "../styles/whyus.css";

export default function WhyUs() {
  return (
    <section className="whyus">
      <h2 className="whyus-title">Why Choose Choco Cherie</h2>

      <div className="whyus-cards">
        <div className="whyus-card">
          <h3>🍫 Handmade</h3>
          <p>Crafted with love and precision for every bite.</p>
        </div>

        <div className="whyus-card">
          <h3>🌿 Premium Ingredients</h3>
          <p>Only the finest cocoa and natural ingredients used.</p>
        </div>

        <div className="whyus-card">
          <h3>🎁 Personalized</h3>
          <p>Customize chocolates for your special moments.</p>
        </div>
      </div>
    </section>
  );
}