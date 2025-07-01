import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutCom from '../components/AboutCom' 
import GalleryCom from '../components/GalleryCom'
import VG from '../components/VG' 
import Services from '../components/Services'



const Home = () => {
  return (
    <div>
      <Hero />
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