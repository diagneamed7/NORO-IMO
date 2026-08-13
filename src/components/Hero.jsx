export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="eyebrow">Trouvez votre rêve immobilier</div>
          <div className="route-divider">
            <svg viewBox="0 0 64 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--blue)" />
                  <stop offset="100%" stopColor="var(--orange)" />
                </linearGradient>
              </defs>
              <path d="M0 8 Q 16 2, 32 8 T 64 8" stroke="url(#gradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          <h1>L'avenir s'habite avec <span className="accent">NORO Immo</span></h1>

          <p className="lead">
            Découvrez nos propriétés d'exception au Sénégal. Terrains viabilisés, maisons modernes et investissements rentables.
          </p>

          <div className="hero-ctas">
            <button className="btn-primary">Découvrir nos biens</button>
            <button className="btn-ghost">Demander un devis</button>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  )
}
