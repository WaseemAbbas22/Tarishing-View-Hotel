
import HeroSection from '../components/HeroSection'
import Grid from '../components/Grid';
import imgE6024 from '/src/assets/IMG_E6024.jpg';

const Gallery = () => {
  return(
    <>
    
    <HeroSection
      image={imgE6024}
      title="Discover The Beauty of Tarishing"
      subtitle="From humble beginnings to a mountain paradise"
    />
    <br />

    <Grid />
    </>
  );
}

export default Gallery;