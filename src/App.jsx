import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="site-shell">
      <div className="background-glow glow-1" />
      <div className="background-glow glow-2" />
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
