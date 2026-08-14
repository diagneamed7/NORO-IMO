export function Footer({ logoSrc }) {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo-badge">
              <img src={logoSrc} alt="NORO Immobilier" className="footer-logo" />
            </div>
            <p style={{ fontSize: '13.5px', maxWidth: 280 }}>
              Avec NORO Immo, l'avenir s'habite. Vente, location, construction et gestion locative au Senegal
              et pour la diaspora.
            </p>
            <div className="newsletter">
              <input type="email" placeholder="Votre email" />
              <button>S'abonner</button>
            </div>
          </div>
          <div>
            <h4>Liens rapides</h4>
            <ul>
              <li>
                <a href="#accueil">Accueil</a>
              </li>
              <li>
                <a href="#biens">Nos biens</a>
              </li>
              <li>
                <a href="#programmes">Programmes</a>
              </li>
              <li>
                <a href="#services">Nos services</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Tel : +221 77 000 00 00</li>
              <li>WhatsApp direct</li>
              <li>contact@noro-immobilier.sn</li>
              <li>Dakar, Senegal</li>
            </ul>
          </div>
          <div>
            <h4>Reseaux sociaux</h4>
            <ul>
              <li>
                <a href="#" className="footer-social">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="footer-social">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.72.35-1.03.66-.31.31-.5.61-.66 1.03-.12.31-.26.78-.3 1.65C4.27 7.7 4.26 8.02 4.26 10.7v.6c0 2.67.01 2.99.06 4.04.04.87.18 1.34.3 1.65.16.42.35.72.66 1.03.31.31.61.5 1.03.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.72-.35 1.03-.66.31-.31.5-.61.66-1.03.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.77 2.77 0 0 0-.66-1.03 2.77 2.77 0 0 0-1.03-.66c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8zm0 3.06a5.14 5.14 0 1 1 0 10.28A5.14 5.14 0 0 1 12 6.86zm0 1.8a3.34 3.34 0 1 0 0 6.68 3.34 3.34 0 0 0 0-6.68zm5.34-1.98a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="footer-social">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.57h-3.05v13.9c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1-1.35-5.08c.42-.24.9-.37 1.4-.37V10.3a5.77 5.77 0 0 0-5.77 5.77 5.77 5.77 0 0 0 11.32 1.63c.15-.5.23-1.03.23-1.58V9.4a7.32 7.32 0 0 0 4.27 1.37V7.72a4.27 4.27 0 0 1-2.93-1.9z" />
                  </svg>
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="footer-social">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.39.58A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.39-.58a3 3 0 0 0 2.11-2.12A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                  </svg>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NORO Immobilier. Tous droits reserves.</span>
          <span>Mentions legales · Politique de confidentialite · CGU</span>
        </div>
      </div>
    </footer>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/221770000000"
      className="wa-float"
      aria-label="Contacter sur WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <svg viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.02h-.01a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.1 8.1 0 0 1-1.24-4.25c0-4.51 3.68-8.19 8.2-8.19 4.51 0 8.19 3.68 8.19 8.2 0 4.51-3.68 8.1-8.2 8.1zm4.5-6.14c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.13-.16.25-.63.8-.77.96-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28z" />
      </svg>
    </a>
  )
}
