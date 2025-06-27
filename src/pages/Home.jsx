    // src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Rooms from './Rooms';
//import Gallery from './Gallery';
//import HotelAbout from '../components/HotelAbout';
import GalleryCom from '../components/GalleryCom';
import VG from '../components/VG';
import Services from '../components/Services';
import AboutCom from '../components/AboutCom';
//import About from '../components/About';


const Home = () => {
  return (
    <>
    <Hero />
    <AboutCom />
    <GalleryCom />
    <VG/>
    <Services />
             
    </>
  );
};

export default Home;
