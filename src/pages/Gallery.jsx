import React from 'react'
//import Gallery from '../components/Gallery'
import VG from '../components/VG'
import HeroSection from '../components/HeroSection'
import InfoSectionImageText from '../components/InfoSectionImageText';
import Grid from '../components/Grid';

const Gallery = () => {
  return(
    <>
    
    <HeroSection
      image="./assets/IMG_E6024.jpg"
      title="Discover The Beauty of Tarishing"
      subtitle="From humble beginnings to a mountain paradise"
    />
    <br />

    <Grid />
    </>
  );
}

export default Gallery;