import { useState } from 'react'
import logoSrc from '../assets/noro-logo.jpeg'

export function Header({ onOpenContact }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="main">
      <div className="container">
        <div className="logo-wrap">
          <img src={logoSrc} alt="NORO Immobilier" />
        </div>
        <nav className={menuOpen ? 'main-menu open' : 'main-menu'} id="mainMenu">
          <a href="#accueil" onClick={() => setMenuOpen(false)}>
            Accueil
          </a>
          <a href="#biens" onClick={() => setMenuOpen(false)}>
            Acheter
          </a>
          <a href="#biens" onClick={() => setMenuOpen(false)}>
            Louer
          </a>
          <a href="#programmes" onClick={() => setMenuOpen(false)}>
            Programmes
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Construction
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Gestion Locative
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Nos Services
          </a>
          <a href="#apropos" onClick={() => setMenuOpen(false)}>
            A propos
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="#"
            className="btn-rdv"
            onClick={(e) => {
              e.preventDefault()
              onOpenContact('rdv')
            }}
          >
            Prendre rendez-vous
          </a>
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </button>
        </div>
      </div>
    </header>
  )
}
