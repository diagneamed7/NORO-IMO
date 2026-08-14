import { RouteDivider } from './RouteDivider'

const SERVICES = [
  {
    title: 'Vente de terrains',
    desc: 'Terrains viabilises avec titres securises, dans les zones a fort potentiel autour de Dakar.',
    color: 'blue',
    icon: <path d="M9 2 3 6v16l6-4 6 4 6-4V2l-6 4-6-4z" />,
  },
  {
    title: 'Vente de maisons',
    desc: 'Villas et maisons pretes a habiter, selectionnees pour leur emplacement et leur qualite.',
    color: 'orange',
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
        <path d="M9 22V12h6v10" />
      </>
    ),
  },
  {
    title: 'Location & gestion locative',
    desc: 'Suivi complet de vos biens en location : loyers, entretien et relation locataire.',
    color: 'blue',
    icon: (
      <>
        <path d="M2 20h20" />
        <path d="M4 20V10l4-3 4 3v10" />
        <path d="M12 20V6l4-3 4 3v14" />
      </>
    ),
  },
  {
    title: 'Construction',
    desc: 'Accompagnement de A a Z pour vos projets de construction, du terrassement a la livraison.',
    color: 'orange',
    icon: (
      <>
        <path d="M12 2 2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
  },
  {
    title: 'Plans architecturaux 2D/3D',
    desc: 'Conception de plans sur-mesure adaptes a votre terrain et a votre budget.',
    color: 'blue',
    icon: (
      <>
        <circle cx="7.5" cy="15.5" r="5.5" />
        <path d="m21 2-9.6 9.6" />
        <path d="m15.5 7.5 3 3L22 7l-3-3" />
      </>
    ),
  },
  {
    title: 'Verification fonciere',
    desc: 'Controle des titres et demarches administratives pour securiser votre acquisition.',
    color: 'orange',
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Accompagnement diaspora',
    desc: "Un interlocuteur dedie pour investir depuis l'etranger en toute confiance.",
    color: 'blue',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 0 20" />
        <path d="M12 2a15 15 0 0 0 0 20" />
      </>
    ),
  },
  {
    title: 'Conseil en investissement',
    desc: 'Des recommandations personnalisees pour faire fructifier votre patrimoine.',
    color: 'orange',
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </>
    ),
  },
]

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head center" style={{ margin: '0 auto 44px' }}>
          <p className="eyebrow">Nos services</p>
          <h2>Un accompagnement complet, du terrain aux cles</h2>
          <RouteDivider center />
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <div className={`service-icon ${s.color}`}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
