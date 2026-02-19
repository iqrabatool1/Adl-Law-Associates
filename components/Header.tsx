

import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          ADL Law Associates
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
