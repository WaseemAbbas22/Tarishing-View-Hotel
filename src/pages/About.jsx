import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutCom from '../components/AboutCom';
import VideoCards from '../components/VideoCards';
import OwnerGallery from '../components/OwnerGallery';

const About = () => (
  <>
    <Navbar />
    
    <HeroSection
      image="./assets/IMG_2404.jpg"
      title="Discover Our Story"
      subtitle="From humble beginnings to a mountain paradise"
    />

    <AboutCom />
    <VideoCards />
    <OwnerGallery />
  </>
);

export default About;
