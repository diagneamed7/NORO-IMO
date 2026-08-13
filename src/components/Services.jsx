import { RouteDivider } from './RouteDivider'

export function Services() {
  const services = [
    {
      icon: '🔍',
      title: 'Recherche',
      description: 'Trouvez la propriété idéale parmi nos sélections',
    },
    {
      icon: '📋',
      title: 'Documentation',
      description: 'Assistance complète pour la documentation foncière',
    },
    {
      icon: '💳',
      title: 'Financement',
      description: 'Options de paiement échelonné et moratoires',
    },
    {
      icon: '🏗️',
      title: 'Viabilisation',
      description: 'Terrains viabilisés et prêts à construire',
    },
    {
      icon: '✓',
      title: 'Garantie',
      description: 'Titre foncier attesté et transactions sécurisées',
    },
    {
      icon: '🤝',
      title: 'Suivi',
      description: 'Accompagnement personnalisé avant et après vente',
    },
    {
      icon: '🌐',
      title: 'Proximité',
      description: 'Présence dans les principales zones du Sénégal',
    },
    {
      icon: '📱',
      title: 'Réactivité',
      description: 'Disponibilité 24h/24 pour vos questions',
    },
  ]

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow">Ce que nous offrons</div>
          <RouteDivider />
          <h2>Nos services</h2>
          <p>NORO Immobilier met à votre disposition une gamme complète de services pour faciliter votre projet immobilier au Sénégal.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}>
          {services.map((service, idx) => (
            <div
              key={idx}
              style={{
                padding: '24px',
                borderRadius: '12px',
                backgroundColor: idx % 2 === 0 ? 'var(--blue)' : 'var(--orange)',
                color: '#fff',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '13px', lineHeight: '1.5', opacity: 0.95 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
