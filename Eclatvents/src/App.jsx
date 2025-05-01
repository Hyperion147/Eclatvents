import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FooterSection from './components/FooterSection'
import TeamSection from './components/TeamSection'
import Story from './components/Story'
import ImageSection from './components/ImageSection'
import WhatsAppButton from './components/ui/whatsapp-button'

function App() {

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <HeroSection />
      <ImageSection />
      <AboutSection />
      <Story />
      <TeamSection />
      <FooterSection />
    </>
  )
}

export default App
