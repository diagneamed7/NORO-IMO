import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BienCard from '../components/BienCard'
import SEO from '../components/SEO'
import styles from './HomePage.module.css'

// Données par défaut en cas d'erreur de chargement (fallback)
const DEFAULT_TESTIMONIALS = [
  {
    nom: 'Aminata D.',
    role: 'Diaspora, Paris',
    note: 5,
    avis: '« J\'ai acheté mon terrain à Diamniadio depuis Paris. Visite en visio, documents vérifiés, virement sécurisé : tout s\'est fait en six semaines, sans un seul déplacement. »',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=70&w=300&auto=format&fit=crop',
  },
  {
    nom: 'Ousmane F.',
    role: 'Propriétaire bailleur, Dakar',
    note: 5,
    avis: '« NORO gère mon immeuble à Keur Massar depuis deux ans. Les loyers arrivent à date fixe et je reçois un rapport clair chaque mois. »',
    photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?fm=jpg&q=70&w=300&auto=format&fit=crop',
  },
  {
    nom: 'Fatou & Cheikh N.',
    role: 'Construction, Saly',
    note: 5,
    avis: '« Plans, devis, chantier : l\'équipe a construit notre villa à Saly en respectant le budget annoncé. Le suivi photo hebdomadaire nous a rassurés. »',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?fm=jpg&q=70&w=300&auto=format&fit=crop',
  },
]

const PROGRAMMES = [
  {
    id: 1,
    title: 'Cité NORO — Diamniadio',
    description: '120 parcelles viabilisées de 200 à 400 m², à 8 min du pôle urbain. Voirie, eau et électricité raccordées.',
    badge: 'En commercialisation',
    badgeBg: '#F57C00',
    image: 'https://images.unsplash.com/photo-1669003152631-c953ac9f3ed3?fm=jpg&q=70&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Résidence Les Filaos — Saly',
    description: '18 villas de 3 et 4 chambres avec piscine commune, à 900 m de la plage. Idéal résidence secondaire.',
    badge: 'Livraison 2027',
    badgeBg: '#0A4D9B',
    image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?fm=jpg&q=70&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Domaine de Bambilor',
    description: '80 parcelles de 150 à 300 m² sous titre foncier, avec paiement échelonné sans intérêt.',
    badge: 'Moratoire 24 mois',
    badgeBg: '#F57C00',
    image: 'https://images.unsplash.com/photo-1764223531702-1614efb82e40?fm=jpg&q=70&w=1400&auto=format&fit=crop',
  },
]

const SERVICES = [
  {
    id: 1,
    title: 'Vente de terrains',
    description: 'Parcelles viabilisées, bail ou titre foncier, dans nos zones de référence.',
    icon: 'M3 7h18v12H3z M3 12h18M9 7v12',
    bgColor: '#0A4D9B',
  },
  {
    id: 2,
    title: 'Vente de maisons & villas',
    description: 'Biens visités et vérifiés, avec accompagnement notarial jusqu\'à la signature.',
    icon: 'M4 20V9l8-5 8 5v11 M9 20v-6h6v6',
    bgColor: '#F57C00',
  },
  {
    id: 3,
    title: 'Location',
    description: 'Appartements et villas meublés ou nus, courte et longue durée.',
    icon: 'M4 21V8l7-4 7 4v13 M14 12h4v9h-4z M8 12h3M8 16h3',
    bgColor: '#0A4D9B',
  },
  {
    id: 4,
    title: 'Gestion locative',
    description: 'Loyers encaissés, entretien suivi, rapport mensuel envoyé où que vous soyez.',
    icon: 'M12 3 3 8v13h18V8Z M12 13 C13.66 13 15 11.66 15 10 C15 8.34 13.66 7 12 7 C10.34 7 9 8.34 9 10 C9 11.66 10.34 13 12 13Z M15.5 8h-7',
    bgColor: '#F57C00',
  },
  {
    id: 5,
    title: 'Construction',
    description: 'Gros œuvre au clé en main, avec devis détaillé et suivi de chantier photo.',
    icon: 'M3 21h18 M6 21V10l6-5 6 5v11 M10 21v-5h4v5',
    bgColor: '#0A4D9B',
  },
  {
    id: 6,
    title: 'Plans architecturaux',
    description: 'Plans sur mesure et rendus 3D avant le premier coup de pioche.',
    icon: 'M3 4h18v16H3Z M7 8h5v5H7Z M15 8h2M15 12h2M7 16h10',
    bgColor: '#F57C00',
  },
  {
    id: 7,
    title: 'Vérification foncière',
    description: 'Contrôle du titre, des bornes et des servitudes avant tout engagement.',
    icon: 'M12 3 4 6v6c0 5 3.4 8.2 8 9 4.6-.8 8-4 8-9V6Z M9 12l2.2 2.2L15.5 10',
    bgColor: '#0A4D9B',
  },
  {
    id: 8,
    title: 'Accompagnement diaspora',
    description: 'Visites vidéo, procuration, virement sécurisé : votre projet avance sans vous déplacer.',
    icon: 'M12 3a9 9 0 019 9M3 12h18M12 3c-2.5 3-2.5 15 0 18M12 3c2.5 3 2.5 15 0 18',
    bgColor: '#F57C00',
  },
]

export default function HomePage() {
  const [properties, setProperties] = useState([])
  const [testimonials, setTestimonials] = useState(DEFAULT_TESTIMONIALS)
  const [loading, setLoading] = useState(true)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [simulatorInputs, setSimulatorInputs] = useState({
    price: 100000000,
    downPayment: 20000000,
    duration: 120,
  })

  useEffect(() => {
    // Fetch properties from generated JSON
    fetch('/data/properties.json')
      .then((res) => res.json())
      .then((data) => {
        setProperties(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading properties:', err)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    // Fetch testimonials from generated JSON
    fetch('/data/testimonials.json')
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data)
      })
      .catch((err) => {
        console.error('Error loading testimonials:', err)
        // Garder les données par défaut en cas d'erreur
      })
  }, [])

  const handleSimulatorChange = (field, value) => {
    const newInputs = { ...simulatorInputs, [field]: Number(value) }
    setSimulatorInputs(newInputs)

    // Calculate monthly payment: (price - downPayment) / duration (in months)
    const remaining = newInputs.price - newInputs.downPayment
    const monthly = Math.max(0, remaining / newInputs.duration)
    setMonthlyPayment(Math.round(monthly))
  }

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('fr-SN', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(num)
  }

  return (
    <>
      <SEO
        title="Accueil | NORO Immobilier"
        description="Agence immobilière au Sénégal. Vente, location, construction, gestion locative de terrains et maisons. Solutions immobilières pour les clients locaux et la diaspora sénégalaise."
        canonicalUrl="https://noro-immobilier.sn/"
      />
      <div className={styles.page}>
        {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img
            src="https://images.unsplash.com/photo-1748063578185-3d68121b11ff?fm=jpg&q=75&w=1800&auto=format&fit=crop"
            alt="Villa"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Agence immobilière au Sénégal — Dakar, Diamniadio, Saly
          </span>

          <h1 className={styles.heroTitle}>
            Construisons ensemble votre avenir immobilier.
          </h1>

          <p className={styles.heroText}>
            Vente, location, construction et gestion locative de terrains, maisons, villas et
            appartements. Un interlocuteur unique, au Sénégal comme depuis l'étranger.
          </p>

          <div className={styles.heroCta}>
            <Link to="/acheter" className={styles.ctaPrimary}>
              Voir les biens
            </Link>
            <Link to="/contact" className={styles.ctaSecondary}>
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <div className={styles.linkCard}>
            <a href="/vendre" className={styles.linkCardContent}>
              <span className={styles.linkIcon} style={{ background: 'var(--color-primary)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 20V9l8-5 8 5v11" />
                  <path d="M9 20v-6h6v6" />
                </svg>
              </span>
              <span>
                <strong>Estimer mon bien</strong>
                <em>Gratuit, sous 48h</em>
              </span>
            </a>
          </div>

          <div className={styles.linkCard}>
            <a href="#simulateur" className={styles.linkCardContent}>
              <span className={styles.linkIcon} style={{ background: 'var(--color-accent)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 7h8M8 11h2m3 0h3M8 15h2m3 0h3" />
                </svg>
              </span>
              <span>
                <strong>Simuler mon financement</strong>
                <em>Mensualité en 10 s</em>
              </span>
            </a>
          </div>

          <div className={styles.linkCard}>
            <a href="/acheter" className={styles.linkCardContent}>
              <span className={styles.linkIcon} style={{ background: 'var(--color-primary)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 7h18v12H3z" />
                  <path d="M3 12h18M9 7v12" />
                </svg>
              </span>
              <span>
                <strong>Terrains disponibles</strong>
                <em>Titres vérifiés</em>
              </span>
            </a>
          </div>

          <div className={styles.linkCard}>
            <a href="/contact" className={styles.linkCardContent}>
              <span className={styles.linkIcon} style={{ background: 'var(--color-accent)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
                </svg>
              </span>
              <span>
                <strong>Nous contacter</strong>
                <em>WhatsApp / rendez-vous</em>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <label>
            <span>Type de bien</span>
            <select defaultValue="all">
              <option value="all">Tous les biens</option>
              <option value="terrain">Terrain</option>
              <option value="maison">Maison</option>
              <option value="villa">Villa</option>
              <option value="appartement">Appartement</option>
              <option value="immeuble">Immeuble</option>
            </select>
          </label>

          <label>
            <span>Localisation</span>
            <select defaultValue="all">
              <option value="all">Toutes les zones</option>
              <option value="dakar">Dakar</option>
              <option value="diamniadio">Diamniadio</option>
              <option value="saly">Saly / Mbour</option>
              <option value="bambilor">Bambilor</option>
              <option value="keur-massar">Keur Massar</option>
              <option value="thies">Thiès</option>
            </select>
          </label>

          <label>
            <span>Transaction</span>
            <select defaultValue="vente">
              <option value="vente">Vente</option>
              <option value="location">Location</option>
              <option value="moratoire">Moratoire</option>
            </select>
          </label>

          <label>
            <span>Prix min</span>
            <input type="text" placeholder="0 FCFA" />
          </label>

          <label>
            <span>Prix max</span>
            <input type="text" placeholder="200 000 000 FCFA" />
          </label>

          <button className={styles.searchBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4.3-4.3" />
            </svg>
            Rechercher
          </button>
        </div>
      </div>

      {/* Properties Section */}
      <section className={styles.propertiesSection} id="biens">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>Nos annonces</span>
            <h2 className={styles.sectionTitle}>Derniers biens publiés</h2>
            <p className={styles.sectionDescription}>
              Une sélection actualisée chaque semaine, vérifiée par nos équipes sur place avant
              publication.
            </p>
          </div>
          <Link to="/acheter" className={styles.seeAllBtn}>
            Tous les biens <span>→</span>
          </Link>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px' }}>Chargement des biens...</p>
        ) : (
          <div className={styles.propertyGrid}>
            {properties.slice(0, 6).map((bien) => (
              <BienCard key={bien.id} bien={bien} />
            ))}
          </div>
        )}
      </section>

      {/* Trust Banner */}
      <section className={styles.trustSection}>
        <div className={styles.trustGrid}>
          <div className={styles.trustItem}>
            <div className={styles.trustNumber}>16</div>
            <div className={styles.trustLabel}>Biens disponibles</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNumber}>12 ans</div>
            <div className={styles.trustLabel}>D'expérience au Sénégal</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNumber}>100%</div>
            <div className={styles.trustLabel}>Titres vérifiés</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNumber}>24/7</div>
            <div className={styles.trustLabel}>Support client</div>
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className={styles.programmesSection} id="programmes">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>Lotissements NORO</span>
            <h2 className={styles.sectionTitle}>Nos programmes</h2>
            <p className={styles.sectionDescription}>
              Des parcelles et résidences que nous commercialisons directement, avec plan de masse,
              titre vérifié et facilités de paiement.
            </p>
          </div>
        </div>

        <div className={styles.programmeGrid}>
          {PROGRAMMES.map((prog) => (
            <article key={prog.id} className={styles.programmeCard}>
              <div className={styles.programmeImage}>
                <img src={prog.image} alt={prog.title} />
                <div className={styles.programmeOverlay} />
                <span className={styles.programmeBadge} style={{ background: prog.badgeBg }}>
                  {prog.badge}
                </span>
                <div className={styles.programmeContent}>
                  <h3 className={styles.programmeTitle}>{prog.title}</h3>
                  <p className={styles.programmeText}>{prog.description}</p>
                  <Link to={`/programmes/${prog.id}`} className={styles.programmeLink}>
                    Découvrir le programme →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>Ce que nous faisons</span>
            <h2 className={styles.sectionTitle}>Nos services</h2>
            <p className={styles.sectionDescription}>
              De la recherche du terrain à la remise des clés, puis à la gestion de votre bien — un
              seul interlocuteur.
            </p>
          </div>
        </div>

        <div className={styles.serviceGrid}>
          {SERVICES.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <span className={styles.serviceIcon} style={{ background: service.bgColor }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d={service.icon} />
                </svg>
              </span>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Simulator Section */}
      <section className={styles.simulatorSection} id="simulateur">
        <div className={styles.simulatorContent}>
          <h2 className={styles.simulatorTitle}>Simulez votre financement</h2>
          <p className={styles.simulatorDescription}>
            Calculez votre mensualité en quelques secondes
          </p>

          <div className={styles.simulatorForm}>
            <div className={styles.formGroup}>
              <label>
                <span>Prix du bien</span>
                <div className={styles.inputGroup}>
                  <input
                    type="range"
                    min="10000000"
                    max="500000000"
                    step="1000000"
                    value={simulatorInputs.price}
                    onChange={(e) => handleSimulatorChange('price', e.target.value)}
                  />
                  <input
                    type="number"
                    value={simulatorInputs.price}
                    onChange={(e) => handleSimulatorChange('price', e.target.value)}
                  />
                </div>
              </label>
            </div>

            <div className={styles.formGroup}>
              <label>
                <span>Acompte</span>
                <div className={styles.inputGroup}>
                  <input
                    type="range"
                    min="0"
                    max={simulatorInputs.price}
                    step="1000000"
                    value={simulatorInputs.downPayment}
                    onChange={(e) => handleSimulatorChange('downPayment', e.target.value)}
                  />
                  <input
                    type="number"
                    value={simulatorInputs.downPayment}
                    onChange={(e) => handleSimulatorChange('downPayment', e.target.value)}
                  />
                </div>
              </label>
            </div>

            <div className={styles.formGroup}>
              <label>
                <span>Durée (mois)</span>
                <input
                  type="number"
                  min="12"
                  max="360"
                  value={simulatorInputs.duration}
                  onChange={(e) => handleSimulatorChange('duration', e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className={styles.simulatorResult}>
            <div className={styles.resultLabel}>Mensualité estimée</div>
            <div className={styles.resultValue}>{formatCurrency(monthlyPayment)}</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsHeader}>
          <span className={styles.sectionLabel}>Ils nous font confiance</span>
          <h2 className={styles.sectionTitle}>Ce que disent nos clients</h2>
        </div>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <figure key={index} className={styles.testimonialCard}>
              <div className={styles.stars}>{'★'.repeat(testimonial.note || 5)}</div>
              <blockquote className={styles.quote}>{testimonial.avis}</blockquote>
              <figcaption className={styles.author}>
                <img src={testimonial.photo} alt={testimonial.nom} className={styles.authorImage} />
                <span>
                  <strong>{testimonial.nom}</strong>
                  <em>{testimonial.role}</em>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className={styles.ctaBand}>
        <h2>Prêt à franchir le pas ?</h2>
        <p>Contactez notre équipe pour explorer vos options immobilières</p>
        <Link to="/contact" className={styles.ctaButton}>
          Prendre rendez-vous
        </Link>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <h2>Restez informé de nos nouveautés</h2>
        <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Votre adresse email" required />
          <button type="submit">S'abonner</button>
        </form>
      </section>
    </div>
    </>
  )
}
