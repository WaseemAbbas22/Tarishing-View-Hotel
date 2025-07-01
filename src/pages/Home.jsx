import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutCom from '../components/AboutCom' 
import GalleryCom from '../components/GalleryCom'
import VG from '../components/VG' 
import Services from '../components/Services'
import Footer from '../components/Footer' 



const Home = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <AboutCom />
      <GalleryCom />
      <VG />
      <Services />
      <Footer />
      {/* Add more components as needed */}
    </div>
  )
}

export default Home