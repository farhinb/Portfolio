import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedWork from '../components/FeaturedWork'
import Philosophy from '../components/Philosophy'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Philosophy />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
