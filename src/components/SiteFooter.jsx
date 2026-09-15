import { Link } from 'react-router-dom'
import styles from './SiteFooter.module.css'

export default function SiteFooter({ openContact }) {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.mainContent}>
          {/* Logo Column */}
          <div className={styles.column}>
            <div className={styles.logoBg}>
              <img src="/noro-logo-full.png" alt="NORO IMMO" style={{ width: '150px', height: '148px' }} />
            </div>
            <p className={styles.description}>
              Avec NORO Immo, l'avenir s'habite. Agence immobilière au Sénégal : vente, location, construction et gestion locative.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h3 className={styles.heading}>Liens rapides</h3>
            <nav className={styles.nav}>
              <Link to="/acheter">Acheter un bien</Link>
              <Link to="/louer">Louer un bien</Link>
              <Link to="/vendre">Estimer mon bien</Link>
              <Link to="/gestion-locative">Gestion locative</Link>
              <Link to="/construction">Construction</Link>
              <Link to="/programmes">Nos programmes</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h3 className={styles.heading}>Contact</h3>
            <div className={styles.contactList}>
              <span>Tivaoune Peulh Apix, Cite Socabeg — Sénégal</span>
              <a href="tel:+221777923906">+221 77 792 39 06</a>
              <a href="https://wa.me/221777923906">WhatsApp : +221 77 792 39 06</a>
              <a href="mailto:immonoro@gmail.com">immonoro@gmail.com</a>
              <span>Lun – Sam : 8h30 – 19h</span>
            </div>
          </div>

          {/* Social & CTA */}
          <div className={styles.column}>
            <h3 className={styles.heading}>Suivez-nous</h3>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/share/1BvgPkRH49/" aria-label="Facebook" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.5l.5-3H13v-2c0-.6.4-1 1-1Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/noro_immo_lofficiel" aria-label="Instagram" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@noro_immo" aria-label="TikTok" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 3h-3v11.2a2.3 2.3 0 1 1-2.3-2.3c.2 0 .5 0 .7.1V9a5.3 5.3 0 1 0 4.6 5.2V8.6c1 .7 2.1 1.1 3.4 1.2V6.9a3.9 3.9 0 0 1-3.4-3.9Z" />
                </svg>
              </a>
              <a href="https://youtube.com/@noroimmo" aria-label="YouTube" className={styles.socialIcon}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </a>
            </div>

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

        {/* Copyright */}
        <div className={styles.copyright}>
          <span>© 2026 NORO Immobilier — Tous droits réservés</span>
          <div style={{ flex: 1 }} />
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/confidentialite">Politique de confidentialité</Link>
          <Link to="/cgu">Conditions d'utilisation</Link>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/221777923906"
        aria-label="Discuter sur WhatsApp"
        className={styles.whatsappBtn}
        title="Contacter NORO Immo sur WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4-2.4 10 10 0 0 1-2-3c-.2-.6-.3-1.3 0-1.8.2-.4.6-.8 1-1 .3-.1.7 0 .9.3l.8 1.4c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.4 0 .6.5.9 1.5 1.9 2.5 2.4.2.1.4 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.8c.2.1.3.4.3.6 0 .1 0 .2-.1.3Z" />
        </svg>
      </a>
    </>
  )
}
