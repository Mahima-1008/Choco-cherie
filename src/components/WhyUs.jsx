import "../styles/whyus.css";

function WhyUs() {
  return (
    <section className="whyus">
      <h2>Why Choose Choco Cherie?</h2>

      <p className="whyus-subtext">
        At Choco Cherie, every piece of chocolate is more than just a treat — 
        it’s an experience crafted with passion, precision, and premium ingredients.
      </p>

      <div className="whyus-grid">

        <div className="why-card">
          <h3>🍫 Handmade with Love</h3>
          <p>
            Each chocolate is carefully handcrafted by skilled artisans,
            ensuring attention to detail and a personal touch in every bite.
          </p>
        </div>

        <div className="why-card">
          <h3>🌿 Premium Ingredients</h3>
          <p>
            We use only the finest cocoa, nuts, and natural flavors to deliver
            a rich and luxurious taste you won’t forget.
          </p>
        </div>

        <div className="why-card">
          <h3>🎁 Perfect for Every Occasion</h3>
          <p>
            Whether it’s a celebration, gift, or personal indulgence,
            our chocolates are designed to make every moment special.
          </p>
        </div>

        <div className="why-card">
          <h3>✨ Fully Customizable</h3>
          <p>
            From flavors to packaging, create chocolates that reflect your
            personality or make your gifts truly unique and memorable.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyUs;