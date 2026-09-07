import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BienCard from '../components/BienCard'
import SEO from '../components/SEO'
import styles from './PagesListing.module.css'

export default function AcheterPage() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    type: '',
    zone: '',
    transaction: '',
    minPrice: 0,
    maxPrice: 0,
  })
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  useEffect(() => {
    fetch('/data/properties.json')
      .then((res) => res.json())
      .then((data) => {
        // Filter properties for sale (Vente or Moratoire)
        const salesProperties = data.filter(
          (p) => p.transaction === 'Vente' || p.transaction === 'Moratoire'
        )
        setProperties(salesProperties)
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
    if (filters.transaction && filters.transaction !== 'Vente et moratoire') {
      // Filter by transaction type using real CMS data
      if (filters.transaction === 'Vente' && p.transaction !== 'Vente') return false
      if (filters.transaction === 'Moratoire' && p.transaction !== 'Moratoire') return false
    }
    if (filters.minPrice && p.prix < filters.minPrice) return false
    if (filters.maxPrice && p.prix > filters.maxPrice) return false
    return true
  })

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage))
  const pageItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value })
    setCurrentPage(1)
  }

  const handleReset = () => {
    setFilters({ type: '', zone: '', transaction: '', minPrice: 0, maxPrice: 0 })
    setCurrentPage(1)
  }

  const parsePrice = (str) => {
    const num = Number(String(str).replace(/[^0-9]/g, ''))
    return isNaN(num) ? 0 : num
  }

  return (
    <>
      <SEO
        title="Acheter un bien immobilier au Sénégal | NORO Immobilier"
        description="Découvrez nos terrains, maisons et villas à vendre au Sénégal. Visite en ligne, documents vérifiés, accompagnement notarial complet."
        canonicalUrl="https://noro-immobilier.sn/acheter"/>
      <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>Acheter</span>
          </nav>
          <h1 className={styles.title}>Biens à vendre au Sénégal</h1>
          <p className={styles.description}>
            Terrains, maisons, villas, appartements et immeubles vérifiés par nos équipes. Titres et
            bornes contrôlés avant toute mise en ligne.
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
              <option>Terrain</option>
              <option>Maison</option>
              <option>Villa</option>
              <option>Appartement</option>
              <option>Immeuble</option>
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
              <option>Diamniadio</option>
              <option>Saly</option>
              <option>Bambilor</option>
              <option>Keur Massar</option>
              <option>Thiès</option>
            </select>
          </label>

          <label>
            <span>Transaction</span>
            <select
              value={filters.transaction}
              onChange={(e) => handleFilterChange('transaction', e.target.value)}
            >
              <option value="">Vente et moratoire</option>
              <option value="Vente">Vente</option>
              <option value="Moratoire">Moratoire</option>
            </select>
          </label>

          <label>
            <span>Prix min</span>
            <input
              type="text"
              placeholder="0 FCFA"
              onChange={(e) => handleFilterChange('minPrice', parsePrice(e.target.value))}
            />
          </label>

          <label>
            <span>Prix max</span>
            <input
              type="text"
              placeholder="400 000 000 FCFA"
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
            {filtered.length} {filtered.length > 1 ? 'biens à vendre' : 'bien à vendre'}
          </p>
          <p className={styles.pageLabel}>
            Page {currentPage} sur {totalPages}
          </p>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px' }}>Chargement des biens...</p>
        ) : (
          <div className={styles.propertyGrid}>
            {pageItems.map((bien) => (
              <BienCard key={bien.id} bien={bien} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={styles.paginationBtn}
            >
              ← Précédent
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${styles.paginationBtn} ${currentPage === page ? styles.active : ''}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={styles.paginationBtn}
            >
              Suivant →
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaSectionInner}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Vous ne trouvez pas le bien que vous cherchez ?</h2>
            <p className={styles.ctaText}>
              Décrivez votre projet : nous activons notre réseau de propriétaires et vous rappelons
              avec une sélection sur mesure.
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <a href="https://wa.me/221770000000" className={styles.whatsappBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4-2.4 10 10 0 0 1-2-3c-.2-.6-.3-1.3 0-1.8.2-.4.6-.8 1-1 .3-.1.7 0 .9.3l.8 1.4c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.4 0 .6.5.9 1.5 1.9 2.5 2.4.2.1.4 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.8c.2.1.3.4.3.6 0 .1 0 .2-.1.3Z" />
              </svg>
              Écrire sur WhatsApp
            </a>
            <Link to="/contact" className={styles.contactBtn}>
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
