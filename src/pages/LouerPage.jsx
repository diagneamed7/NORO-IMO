import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BienCard from '../components/BienCard'
import SEO from '../components/SEO'
import styles from './PagesListing.module.css'

export default function LouerPage() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    type: '',
    zone: '',
    minPrice: 0,
    maxPrice: 0,
  })

  useEffect(() => {
    fetch('/data/properties.json')
      .then((res) => res.json())
      .then((data) => {
        // Filter properties for rental (Location)
        const rentalProperties = data.filter((p) => p.transaction === 'Location')
        setProperties(rentalProperties)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading properties:', err)
        setLoading(false)
      })
  }, [])

  const filtered = properties.filter((p) => {
    if (filters.type && p.type !== filters.type) return false
    if (filters.zone && !p.zone.includes(filters.zone)) return false
    if (filters.minPrice && p.prix < filters.minPrice) return false
    if (filters.maxPrice && p.prix > filters.maxPrice) return false
    return true
  })

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value })
  }

  const handleReset = () => {
    setFilters({ type: '', zone: '', minPrice: 0, maxPrice: 0 })
  }

  const parsePrice = (str) => {
    const num = Number(String(str).replace(/[^0-9]/g, ''))
    return isNaN(num) ? 0 : num
  }

  return (
    <>
      <SEO
        title="Louer un bien immobilier au Sénégal | NORO Immobilier"
        description="Appartements et villas meublés ou nus en location courte et longue durée au Sénégal."
        canonicalUrl="https://noro-immobilier.sn/louer"/>
      <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>Louer</span>
          </nav>
          <h1 className={styles.title}>Biens en location</h1>
          <p className={styles.description}>
            Appartements, villas et maisons meublés ou nus, en courte et longue durée. État des
            lieux, bail et caution gérés par NORO.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <label>
            <span>Type de bien</span>
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="">Tous les biens</option>
              <option>Appartement</option>
              <option>Maison</option>
              <option>Villa</option>
            </select>
          </label>

          <label>
            <span>Localisation</span>
            <select
              value={filters.zone}
              onChange={(e) => handleFilterChange('zone', e.target.value)}
            >
              <option value="">Toutes les zones</option>
              <option>Dakar</option>
              <option>Saly</option>
              <option>Thiès</option>
            </select>
          </label>

          <label>
            <span>Loyer min</span>
            <input
              type="text"
              placeholder="0 FCFA"
              onChange={(e) => handleFilterChange('minPrice', parsePrice(e.target.value))}
            />
          </label>

          <label>
            <span>Loyer max</span>
            <input
              type="text"
              placeholder="2 000 000 FCFA"
              onChange={(e) => handleFilterChange('maxPrice', parsePrice(e.target.value))}
            />
          </label>

          <button onClick={handleReset} className={styles.resetBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4.3-4.3" />
            </svg>
            Réinitialiser
          </button>
        </div>
      </div>

      {/* Properties Grid */}
      <section className={styles.gridSection}>
        <div className={styles.gridHeader}>
          <p className={styles.countLabel}>
            {filtered.length} {filtered.length > 1 ? 'biens en location' : 'bien en location'}
          </p>
          <p className={styles.pageLabel}>Loyers charges non comprises</p>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px' }}>Chargement des biens...</p>
        ) : filtered.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '60px 24px', color: '#6A7480' }}>
            Aucun bien en location actuellement. Revenez bientôt !
          </p>
        ) : (
          <div className={styles.propertyGrid}>
            {filtered.map((bien) => (
              <BienCard key={bien.id} bien={bien} />
            ))}
          </div>
        )}
      </section>

      {/* Property Management CTA */}
      <section className={styles.propertyMgmtSection}>
        <div className={styles.propertyMgmtInner}>
          <div>
            <span className={styles.sectionLabel}>Propriétaires</span>
            <h2 className={styles.mgmtTitle}>Vous avez un bien à mettre en location ?</h2>
            <p className={styles.mgmtText}>
              Nous sélectionnons le locataire, rédigeons le bail et encaissons les loyers pour vous
              — y compris si vous vivez à l'étranger.
            </p>
            <div className={styles.mgmtButtons}>
              <Link to="/gestion-locative" className={styles.mgmtPrimary}>
                Découvrir la gestion locative
              </Link>
              <Link to="/contact" className={styles.mgmtSecondary}>
                Nous confier un bien
              </Link>
            </div>
          </div>

          <ul className={styles.benefitsList}>
            <li>
              <strong>Sélection du locataire</strong>
              <span>Dossier vérifié, garanties contrôlées.</span>
            </li>
            <li>
              <strong>Loyer versé à date fixe</strong>
              <span>Virement local ou international.</span>
            </li>
            <li>
              <strong>Rapport mensuel</strong>
              <span>Encaissements, charges, interventions.</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
    </>
  )
}
