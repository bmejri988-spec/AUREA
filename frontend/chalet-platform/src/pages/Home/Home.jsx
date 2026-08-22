import Navbar from '../../components/navbar/Navbar'
import Hero from '../../sections/home/Hero'
import Concept from '../../sections/home/Concept'
import FeaturedTerrains from '../../sections/home/FeaturedTerrains'
import ChaletModels from '../../sections/home/ChaletModels'
import HowItWorks from '../../sections/home/HowItWorks'
import BuildCTA from '../../sections/home/BuildCTA'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Concept />

      <FeaturedTerrains />

      <ChaletModels />

      <HowItWorks />

      <BuildCTA />

      <Footer />
    </main>
  )
}

export default Home