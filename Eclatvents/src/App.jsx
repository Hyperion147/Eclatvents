import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FooterSection from './components/FooterSection'
import TeamSection from './components/TeamSection'
import Story from './components/Story'
import ImageSection from './components/ImageSection'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ImageSection />
      <Story />
      <TeamSection />
      <FooterSection />
    </>
  )
}

export default App
