import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Services from "./components/Services.jsx"; // create this file
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="main-content"> {/* Add this wrapper */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:category" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;