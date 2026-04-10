import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Curation', to: '/#work' },
  { label: 'Philosophy', to: '/#philosophy' },
  { label: 'Process', to: '/#experience' },
  { label: 'About', to: '/#about' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center w-full px-6 md:px-12 py-6 md:py-8 max-w-screen-2xl mx-auto">
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold tracking-tighter text-black font-headline"
        >
          Farhin Bhuiyan
        </Link>
        <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.to}
              className={
                i === 0 && onHome
                  ? 'text-black border-b-2 border-primary pb-1 font-body tracking-tight leading-none text-sm'
                  : 'text-gray-400 hover:text-black transition-colors font-body tracking-tight leading-none text-sm'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href="mailto:farhinbhuiyan2003@gmail.com"
          className="bg-primary text-on-primary px-6 md:px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-90 active:scale-95 transition-opacity"
        >
          Connect
        </a>
      </div>
    </nav>
  )
}
