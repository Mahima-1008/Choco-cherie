import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer"; // ✅ IMPORTANT
import Contact from "./components/Contact";
import WhyUs from "./components/WhyUs";
import CustomChocolate from "./components/CustomChocolate";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <CustomChocolate />
      <Contact />
      <Footer />
    </>
  );
}
export default App;