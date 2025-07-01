import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Dining from "./pages/Dining";  

//COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//ANIMATION
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <>
     
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
