import Navbar from '../../components/navbar/Navbar'
import Hero from '../../sections/home/Hero'
import AureaValues from '../../sections/home/AureaValues'
import Concept from '../../sections/home/Concept'
import FeaturedTerrains from '../../sections/home/FeaturedTerrains'
import ChaletModels from '../../sections/home/ChaletModels'
import HowItWorks from '../../sections/home/HowItWorks'
import BuildCTA from '../../sections/home/BuildCTA'
import PresentationVideo from '../../sections/home/PresentationVideo'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <main className="aurea-story">
      <Navbar contained />
      <Hero />
      <AureaValues />
      <Concept />
      <FeaturedTerrains />
      <ChaletModels />
      <HowItWorks />
      <PresentationVideo />
      <BuildCTA />
      <Footer />
    </main>
  )
}

export default Home