import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './SiteHeader.module.css'

export default function SiteHeader({ openContact }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => {
      const m = window.innerWidth < 1120
      if (m !== isMobile) setIsMobile(m)
    }

    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [isMobile])

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <a href="https://wa.me/221777923906" className={styles.contactItem}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4-2.4 10 10 0 0 1-2-3c-.2-.6-.3-1.3 0-1.8.2-.4.6-.8 1-1 .3-.1.7 0 .9.3l.8 1.4c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.4 0 .6.5.9 1.5 1.9 2.5 2.4.2.1.4 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.8c.2.1.3.4.3.6 0 .1 0 .2-.1.3Z" />
            </svg>
            WhatsApp : +221 77 792 39 06
          </a>

          <a href="tel:+221777923906" className={styles.contactItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z" />
            </svg>
            +221 77 792 39 06
          </a>

          <a href="mailto:immonoro@gmail.com" className={styles.contactItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2.5 6.5 9.5 6.5 9.5-6.5" />
            </svg>
            immonoro@gmail.com
          </a>

          <span className={styles.hours}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5.5l3.5 2" />
            </svg>
            Lun – Sam : 8h30 – 19h
          </span>

          <div style={{ flex: 1 }} />

          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/share/1BvgPkRH49/" aria-label="Facebook" className={styles.socialIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.5l.5-3H13v-2c0-.6.4-1 1-1Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/noro_immo_lofficiel" aria-label="Instagram" className={styles.socialIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@noro_immo" aria-label="TikTok" className={styles.socialIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 3h-3v11.2a2.3 2.3 0 1 1-2.3-2.3c.2 0 .5 0 .7.1V9a5.3 5.3 0 1 0 4.6 5.2V8.6c1 .7 2.1 1.1 3.4 1.2V6.9a3.9 3.9 0 0 1-3.4-3.9Z" />
              </svg>
            </a>
            <a href="https://youtube.com/@noroimmo" aria-label="YouTube" className={styles.socialIcon}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </a>

            <a
              href="#"
              className={styles.quoteBtn}
              onClick={(e) => {
                e.preventDefault()
                openContact('devis')
              }}
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            <img src="/noro-logo.png" alt="NORO IMMO" style={{ width: '56px', height: '56px', objectFit: 'contain' }} />
            <span className={styles.divider} />
            <span className={styles.tagline}>
              Avec NORO Immo,<br />
              <span className={styles.accent}>l'avenir s'habite</span>
            </span>
          </Link>

          <div style={{ flex: 1 }} />

          {!isMobile && (
            <>
              <nav className={styles.nav}>
                <Link to="/acheter">Acheter</Link>
                <Link to="/louer">Louer</Link>
                <Link to="/vendre">Vendre</Link>
                <Link to="/gestion-locative">Gestion locative</Link>
                <Link to="/construction">Construction</Link>
                <Link to="/programmes">Programmes</Link>
                <Link to="/contact">Contact</Link>
              </nav>

              <a
                href="#"
                className={styles.cta}
                onClick={(e) => {
                  e.preventDefault()
                  openContact('rdv')
                }}
              >
                Prendre rendez-vous
              </a>
            </>
          )}

          {isMobile && (
            <button
              className={styles.menuBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          )}
        </div>

        {isMobile && menuOpen && (
          <nav className={styles.mobileNav}>
            <Link to="/acheter">Acheter</Link>
            <Link to="/louer">Louer</Link>
            <Link to="/vendre">Vendre</Link>
            <Link to="/gestion-locative">Gestion locative</Link>
            <Link to="/construction">Construction</Link>
            <Link to="/programmes">Programmes</Link>
            <Link to="/contact">Contact</Link>
            <a
              href="#"
              className={styles.mobileCta}
              onClick={(e) => {
                e.preventDefault()
                openContact('rdv')
              }}
            >
              Prendre rendez-vous
            </a>
          </nav>
        )}
      </header>
    </>
  )
}
