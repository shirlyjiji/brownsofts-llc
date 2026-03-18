import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Services from "./components/Services.jsx";
import Checkout from "./components/Checkout.jsx";
import Success from "./components/Success.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Blog from "./components/Blog.jsx";
import FAQContactSection from "./components/FAQContactSection.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:category" element={<Services />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/contact" element={<FAQContactSection />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;