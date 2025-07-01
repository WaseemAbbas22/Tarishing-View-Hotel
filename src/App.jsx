import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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


function App() {
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
