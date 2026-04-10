import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-16 md:py-20 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 w-full max-w-screen-2xl mx-auto">
        <Link to="/" className="text-lg font-bold text-black mb-8 md:mb-0 font-headline">
          Farhin Bhuiyan
        </Link>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-8 mb-6">
            <Link to="/#work" className="font-body text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 hover:text-primary transition-colors">
              Work
            </Link>
            <a href="mailto:farhinbhuiyan2003@gmail.com" className="font-body text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 hover:text-primary transition-colors">
              Contact
            </a>
            <a href="https://www.linkedin.com/in/farhin-bhuiyan/" target="_blank" rel="noreferrer" className="font-body text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="font-body text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 hover:text-primary transition-colors">
              GitHub
            </a>
          </div>
          <p className="font-body text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">
            © {new Date().getFullYear()} Farhin Bhuiyan · All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
