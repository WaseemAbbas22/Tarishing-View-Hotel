// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
//import OurTeam from './pages/OurTeam';
import About from './pages/About';
import 'leaflet/dist/leaflet.css';
import Gallery from './pages/Gallery';
// App.jsx
import AOS from 'aos';
import 'aos/dist/aos.css';
//import { useEffect } from 'react';
import GalleryCom from './components/GalleryCom';
import Dining from './pages/Dining';
import Contact from './pages/Contact';
//import gallery from './pages/Gallery';

//import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner');
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <>
      {!isOwnerPath && <Navbar />}
      
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/About" element={<About />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Dining'  element={<Dining />}/>
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>

          {!isOwnerPath && <Footer />}  

            
    </>
  );
};

export default App;
