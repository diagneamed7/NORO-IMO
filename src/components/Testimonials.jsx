import { RouteDivider } from './RouteDivider'

const TESTIMONIALS = [
  {
    name: 'Astou D.',
    role: 'Acquereuse a Yene',
    quote:
      "Un accompagnement clair du premier appel jusqu'a la remise du titre. Je recommande NORO a toute la diaspora.",
  },
  {
    name: 'Moussa K.',
    role: 'Investisseur, Dakar',
    quote: 'Le suivi du moratoire a ete simple a comprendre, avec des echeances respectees a chaque fois.',
  },
  {
    name: 'Fatou S.',
    role: 'Proprietaire a Kounoune',
    quote:
      'Une equipe disponible et transparente sur les prix, la superficie et les demarches administratives.',
  },
]

export function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head center" style={{ margin: '0 auto 44px' }}>
          <p className="eyebrow">Temoignages</p>
          <h2>Ce que disent nos clients</h2>
          <RouteDivider center />
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testi-card" key={t.name}>
              <div className="testi-person">
                <div className="avatar">{t.name[0]}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <p>« {t.quote} »</p>
            </div>
          ))}
        </div>
        <p className="testi-note" style={{ textAlign: 'center' }}>
          Temoignages d'exemple a remplacer par de vrais avis clients NORO Immobilier.
        </p>
      </div>
    </section>
  )
}
