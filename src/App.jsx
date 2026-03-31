import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer"; // ✅ IMPORTANT

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Footer /> {/* ✅ MUST be here */}
    </>
  );
}

export default App;