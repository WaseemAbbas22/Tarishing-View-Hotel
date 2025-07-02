import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import AboutCom from '../components/AboutCom' 
import GalleryCom from '../components/GalleryCom'
import VG from '../components/VG' 
import Services from '../components/Services'
import img2404 from '/src/assets/IMG_6011.jpg'



const Home = () => {
  return (
    <div>
      <HeroSection
            image={img2404}
            title="Start Your Journey with Us"
            subtitle="From humble beginnings to a mountain paradise" 
          />
      <Navbar />
      <AboutCom />
      <GalleryCom />
      <VG />
      <Services />
      
      
      {/* Add more components as needed */}
    </div>
  )
}

export default Home