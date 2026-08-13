export function Services() {
  const services = [
    { icon: '🔍', title: 'Recherche', description: 'Trouvez la propriété idéale' },
    { icon: '📋', title: 'Documentation', description: 'Assistance foncière complète' },
    { icon: '💳', title: 'Financement', description: 'Options de paiement échelonné' },
    { icon: '🏗️', title: 'Viabilisation', description: 'Terrains prêts à construire' },
    { icon: '✓', title: 'Garantie', description: 'Titre foncier attesté' },
    { icon: '🤝', title: 'Suivi', description: 'Accompagnement personnalisé' },
    { icon: '🌐', title: 'Proximité', description: 'Présence nationale' },
    { icon: '📱', title: 'Réactivité', description: 'Disponibilité 24h/24' },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow">Ce que nous offrons</div>
          <div className="route-divider">
            <svg viewBox="0 0 64 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--blue)" />
                  <stop offset="100%" stopColor="var(--orange)" />
                </linearGradient>
              </defs>
              <path d="M0 8 Q 16 2, 32 8 T 64 8" stroke="url(#gradient3)" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <h2>Nos services</h2>
          <p>Une gamme complète pour faciliter votre projet immobilier.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {services.map((service, idx) => (
            <div
              key={idx}
              style={{
                padding: '24px',
                borderRadius: '12px',
                backgroundColor: idx % 2 === 0 ? 'var(--blue)' : 'var(--orange)',
                color: '#fff',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{service.title}</h3>
              <p style={{ fontSize: '13px', lineHeight: '1.5', opacity: 0.95 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
