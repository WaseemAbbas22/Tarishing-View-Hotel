//import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoSectionText from '../components/InfoSectionText';
import InfoSectionImageText from '../components/InfoSectionImageText';
import Grid from '../components/Grid';
import img6288 from '/src/assets/IMG_6288.jpg';

const Dining = () => {
  return (
    <div>
      <HeroSection
        image={img6288}
        title="Discover Our Story"
        subtitle="From humble beginnings to a mountain paradise"
      />
    <InfoSectionText />
    <InfoSectionImageText />
    <Grid />
    </div>
  )
}

export default Dining;