import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="main">
      <div className="container">
        <div className="logo-wrap">
          <img src="data:image/svg+xml,%3Csvg width='52' height='52' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='52' height='52' rx='8' fill='%230A4D9B'/%3E%3Ctext x='26' y='35' fontSize='28' fontWeight='700' fill='white' textAnchor='middle' fontFamily='Bricolage Grotesque, sans-serif'%3EN%3C/text%3E%3Ccircle cx='38' cy='14' r='6' fill='%23F57C00'/%3E%3C/svg%3E" alt="NORO Immobilier" />
        </div>

        <nav className="main-menu">
          <a href="#accueil">Accueil</a>
          <a href="#acheter">Acheter</a>
          <a href="#louer">Louer</a>
          <a href="#programmes">Programmes</a>
          <a href="#construction">Construction</a>
          <a href="#gestion">Gestion Locative</a>
          <a href="#services">Nos Services</a>
          <a href="#apropos">A propos</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="btn-rdv">Prendre RDV</button>

        <button className="burger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
      </div>
    </header>
  )
}
