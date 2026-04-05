import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import TermsConditions from "./pages/TermsConditions";

import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Accessibility from "./pages/Accessibility";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accessibility" element={<Accessibility />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;