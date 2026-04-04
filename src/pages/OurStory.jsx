import "../styles/ourstory.css";
import { useNavigate } from "react-router-dom";

function OurStory() {
  const navigate = useNavigate();

  return (
    <div className="story">

      {/* HERO SECTION */}
      <div className="story-hero">
        <div className="overlay"></div>

        <div className="story-hero-content">
          <h1>Our Story</h1>
          <p>Crafting moments of sweetness, one chocolate at a time</p>
        </div>
      </div>

      {/* STORY CONTENT */}
      <div className="story-content">

        <h2>Where It All Began</h2>

        <p>
          Choco Cherie was born from a simple idea — to turn everyday moments
          into something unforgettable. What started as a passion for rich,
          handcrafted chocolates quickly became a journey of creativity,
          love, and indulgence.
        </p>

        <p>
          Every piece we create is a blend of carefully sourced cocoa,
          artistic craftsmanship, and a desire to bring joy. From luxurious
          gift boxes to personalized treats, we believe chocolate should
          feel special — not ordinary.
        </p>

        <p>
          Today, Choco Cherie stands as a symbol of elegance and taste,
          delivering experiences that melt hearts across every occasion.
        </p>

      </div>

      {/* CTA SECTION */}
      <div className="story-cta">
        <h2>Ready to Explore Our Collection?</h2>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>

    </div>
  );
}

export default OurStory;