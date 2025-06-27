import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoSectionText from '../components/InfoSectionText';
import InfoSectionImageText from '../components/InfoSectionImageText';
import Grid from '../components/Grid';

const Dining = () => {
  return (
    <div>
      <HeroSection
      image="./assets/IMG_6288.jpg"
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