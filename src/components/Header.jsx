import { useState } from 'react'
import { Logo } from './Logo'

export function Header({ onBurgerClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    onBurgerClick?.(!isMenuOpen)
  }

  const scrollToSection = (id) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="main">
      <div className="container">
        <div className="logo-wrap">
          <Logo />
          <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--blue)' }}>
            NORO
          </span>
        </div>

        <nav className="main-menu">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('proprietes') }}>
            Propriétés
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>
            Services
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('simulateur') }}>
            Simulateur
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
            Contact
          </a>
        </nav>

        <button className="btn-rdv" onClick={() => {
          const event = new CustomEvent('openContactModal', { detail: { type: 'rdv' } })
          window.dispatchEvent(event)
        }}>
          Prendre RDV
        </button>

        <button className="burger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  )
}
