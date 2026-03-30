import "../styles/products.css";

const products = [
  { name: "Dark Truffle", price: "₹299" },
  { name: "Caramel Bliss", price: "₹249" },
  { name: "Hazelnut Delight", price: "₹349" }
];

export default function Products() {
  return (
    <section className="products">
      <h2>Our Collection</h2>

      <div className="cards">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}