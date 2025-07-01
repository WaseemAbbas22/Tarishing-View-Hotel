
//import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutCom from '../components/AboutCom';
import VideoCards from '../components/VideoCards';
import OwnerGallery from '../components/OwnerGallery';
import img2404 from '/src/assets/IMG_2404.jpg';

const About = () => (
  <>
    <Navbar />
    
    <HeroSection
      image={img2404}
      title="Discover Our Story"
      subtitle="From humble beginnings to a mountain paradise" 
    />

    <AboutCom />
    <VideoCards />
    <OwnerGallery />
  </>
);

export default About;
