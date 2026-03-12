import './Header.css'
import Link from 'next/link'

export default function Header() {
  const gold = "#c5a059";

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          {/* Consistency: Making 'Associates' gold to match the rest of the site */}
          <Link href="/">
            ADL Law Associates
          </Link>
        </div>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/services">Our Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  )
}