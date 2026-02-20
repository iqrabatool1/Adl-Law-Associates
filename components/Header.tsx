

import './Header.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link href="/">ADL Law Associates</Link>
        </div>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
