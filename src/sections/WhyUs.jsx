import Card from "../components/Card";
import "../styles/section.css";

export default function WhyUs() {
  const items = [
    { title: "Handmade", desc: "Crafted with love" },
    { title: "Premium Ingredients", desc: "Only finest cocoa used" },
    { title: "Personalized", desc: "Made just for you" },
  ];

  return (
    <section className="section light">
      <h2 className="title">Why Choose Us</h2>

      <div className="cards">
        {items.map((item, i) => (
          <Card key={i} title={item.title} desc={item.desc} />
        ))}
      </div>
    </section>
  );
}