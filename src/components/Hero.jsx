import { RouteDivider } from './RouteDivider'

export function Hero({ onOpenContact }) {
  return (
    <section className="hero" id="accueil">
      <div className="container">
        <div className="hero-inner">
          <p className="eyebrow">SENEGAL &amp; DIASPORA</p>
          <h1>
            Construisons ensemble
            <br />
            votre <span className="accent">avenir immobilier.</span>
          </h1>
          <RouteDivider />
          <p className="lead">
            NORO Immobilier vous accompagne dans l'achat, la vente, la location, la construction et la
            gestion de votre patrimoine immobilier au Senegal — et aupres de la diaspora.
          </p>
          <div className="hero-ctas">
            <a href="#biens" className="btn-primary">
              Voir les biens
            </a>
            <a
              href="#"
              className="btn-ghost"
              onClick={(e) => {
                e.preventDefault()
                onOpenContact('contact')
              }}
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
