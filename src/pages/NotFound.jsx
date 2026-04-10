import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div className="bg-surface min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-secondary mb-4">404</p>
        <h1 className="text-5xl md:text-7xl font-headline mb-8">Page not found.</h1>
        <Link
          to="/"
          className="border-b-2 border-on-surface pb-2 font-headline hover:text-primary hover:border-primary transition-colors"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
