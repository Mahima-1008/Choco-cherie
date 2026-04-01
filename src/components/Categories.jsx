import "../styles/categories.css";

export default function Categories() {
  const data = [
  {
    name: "Classic Chocolate Types",
    img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1000", // dark + milk + white mix
  },
  {
  name: "Filled & Flavoured Chocolates",
  img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1000", // chocolate truffles (filled inside)
},
{
  name: "Nut, Fruit & Crunch Chocolates",
  img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000", // chocolate with nuts (almond/hazelnut)
},
  {
    name: "Gourmet & Luxury Collection",
    img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1000", // premium bonbons
  },

  // KEEP THESE SAME
  {
    name: "Healthy & Special Diet",
    img: "https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=1000",
  },
  {
    name: "Gifting & Combos",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000",
  },
];

  return (
    <section className="categories">
      <h2 className="cat-title">Our Collection</h2>

      <div className="cat-grid">
        {data.map((item, i) => (
          <div className="cat-card" key={i}>
            <img src={item.img} alt={item.name} />
            <div className="overlay">
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}