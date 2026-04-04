import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;