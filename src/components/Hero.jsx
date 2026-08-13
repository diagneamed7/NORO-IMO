import { RouteDivider } from './RouteDivider'

export function Hero() {
  const handleExplore = () => {
    const section = document.getElementById('proprietes')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="eyebrow">Trouvez votre rêve immobilier</div>
          <RouteDivider />

          <h1>
            L'avenir s'habite avec <span className="accent">NORO Immo</span>
          </h1>

          <p className="lead">
            Découvrez nos propriétés d'exception au Sénégal. Terrains viabilisés, maisons modernes et investissements rentables.
          </p>

          <div className="hero-ctas">
            <button className="btn-primary" onClick={handleExplore}>
              Découvrir nos biens
            </button>
            <button className="btn-ghost" onClick={() => {
              const event = new CustomEvent('openContactModal', { detail: { type: 'devis' } })
              window.dispatchEvent(event)
            }}>
              Demander un devis
            </button>
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
