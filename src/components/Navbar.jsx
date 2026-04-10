const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a href="#top" className="brand">
          FB
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
