import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import BienCard from '../components/BienCard'
import SEO from '../components/SEO'
import styles from './FicheBienPage.module.css'

export default function FicheBienPage() {
  const { slug } = useParams()
  const [bien, setBien] = useState(null)
  const [similaires, setSimilaires] = useState([])
  const [loading, setLoading] = useState(true)
  const [photoIndex, setPhotoIndex] = useState(0)

  useEffect(() => {
    fetch('/data/properties.json')
      .then((res) => res.json())
      .then((data) => {
        // Trouver le bien par slug
        const found = data.find((p) => p.slug === slug)

        if (found) {
          setBien(found)

          // Sélectionner les biens similaires:
          // - Même type de bien
          // - Transaction !== Location
          // - Exclure le bien courant
          // - Limiter à 3
          const similar = data
            .filter(
              (p) =>
                p.id !== found.id &&
                p.type === found.type &&
                p.transaction !== 'Location'
            )
            .slice(0, 3)

          setSimilaires(similar)
        }

        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading property:', err)
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return (
      <div className={styles.page}>
        <div style={{ textAlign: 'center', padding: '60px 24px' }}>
          Chargement du bien...
        </div>
      </div>
    )
  }

  if (!bien) {
    return (
      <div className={styles.page}>
        <div style={{ textAlign: 'center', padding: '60px 24px' }}>
          <h2>Bien non trouvé</h2>
          <p>Le bien que vous cherchez n'existe pas ou a été supprimé.</p>
          <Link to="/acheter" style={{ color: 'var(--color-primary)' }}>
            Retour à la liste des biens
          </Link>
        </div>
      </div>
    )
  }

  // Préparer les photos (pour la galerie)
  // Pour cet MVP, on utilise juste la photo principale si elle existe
  const photos = bien.photo ? [{ photo: bien.photo }] : []

  // Formater le prix
  const formatPrice = (price) => {
    if (!price) return 'Prix sur demande'
    return new Intl.NumberFormat('fr-SN', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Calculer prix au m²
  const prixM2 = bien.superficie && bien.prix ? bien.prix / bien.superficie : null

  // Générer titre et description SEO dynamiques
  const seoTitle = `${bien.type} - ${bien.zone} | NORO Immobilier`
  const seoDesc = `${bien.type} à ${bien.zone}. ${bien.superficie ? bien.superficie + ' m². ' : ''}${bien.prix ? formatPrice(bien.prix) : 'Prix sur demande'}`

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDesc}
        ogImage={bien.photo || 'https://noro-immobilier.sn/og-image.png'}
        ogType="product"
        canonicalUrl={`https://noro-immobilier.sn/biens/${bien.slug || bien.id}`}
      />
      <div className={styles.page}>
      {/* === BREADCRUMB / HERO === */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span>/</span>
            <Link to="/acheter">Acheter</Link>
            <span>/</span>
            <span>{bien.type} — {bien.zone}</span>
          </nav>

          <div className={styles.heroHeader}>
            <div className={styles.heroLeft}>
              <div className={styles.badge}>Exclusivité NORO</div>
              <h1 className={styles.title}>
                {bien.type} {bien.superficie ? bien.superficie + ' m²' : ''}
              </h1>
              <div className={styles.location}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {bien.zone} — Réf. NR-{bien.id}
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.priceMainBig}>{formatPrice(bien.prix)}</div>
              {prixM2 && (
                <div className={styles.pricePer}>
                  {formatPrice(prixM2)} / m² · {bien.superficie} m²
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* === GALLERY === */}
      <section className={styles.gallerySection}>
        <div className={styles.mainPhotoContainer}>
          {photos.length > 0 && photos[photoIndex] ? (
            <img
              src={photos[photoIndex].photo}
              alt={`Photo ${photoIndex + 1}`}
              className={styles.mainPhoto}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', background: '#F5F5F5' }} />
          )}
          <span className={styles.photoCounter}>
            {photos.length ? `${photoIndex + 1} / ${photos.length} photos` : 'Pas de photo'}
          </span>
        </div>

        {photos.length > 1 && (
          <div className={styles.thumbnailGrid}>
            {photos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setPhotoIndex(idx)}
                className={`${styles.thumbnail} ${idx === photoIndex ? styles.active : ''}`}
                aria-label={`Photo ${idx + 1}`}
              >
                <img src={photo.photo} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* === MAIN CONTENT === */}
      <section className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          {/* === LEFT COLUMN === */}
          <div className={styles.mainContent}>
            {/* Specs Grid */}
            <div className={styles.specsGrid}>
              <div className={styles.specCard}>
                <div className={styles.specLabel}>Type</div>
                <div className={styles.specValue}>{bien.type}</div>
              </div>
              <div className={styles.specCard}>
                <div className={styles.specLabel}>Surface</div>
                <div className={styles.specValue}>
                  {bien.superficie ? `${bien.superficie} m²` : '—'}
                </div>
              </div>
              <div className={styles.specCard}>
                <div className={styles.specLabel}>Zone</div>
                <div className={styles.specValue}>{bien.zone}</div>
              </div>
              <div className={styles.specCard}>
                <div className={styles.specLabel}>Titre foncier</div>
                <div className={styles.specValue}>{bien.titre}</div>
              </div>
              <div className={styles.specCard}>
                <div className={styles.specLabel}>Statut</div>
                <div className={styles.specValue}>
                  {bien.statut === 'disponible' ? 'Disponible' : 'Réservé'}
                </div>
              </div>
              <div className={styles.specCard}>
                <div className={styles.specLabel}>Transaction</div>
                <div className={styles.specValue}>{bien.transaction}</div>
              </div>
            </div>

            {/* Description */}
            <h2 className={styles.descriptionTitle}>Description</h2>
            {bien.commentaire && (
              <>
                <p className={styles.descriptionText}>{bien.commentaire}</p>
                <p className={styles.descriptionText}>
                  Bien vérifié par nos équipes. Titre foncier contrôlé et bornes validées.
                </p>
              </>
            )}

            {/* Legal Section */}
            <h3 className={styles.sectionTitle}>Situation juridique</h3>
            <div className={styles.legalBox}>
              <div className={styles.legalRow}>
                <span className={styles.legalLabel}>Titre foncier</span>
                <strong className={styles.legalValue}>Vérifié — {bien.titre}</strong>
              </div>
              <div className={styles.legalRow}>
                <span className={styles.legalLabel}>Bornage</span>
                <strong className={styles.legalValue}>Contradictoire, géomètre agréé</strong>
              </div>
              <div className={styles.legalRow}>
                <span className={styles.legalLabel}>Servitudes</span>
                <strong className={styles.legalValue}>À vérifier</strong>
              </div>
              {bien.moratoire && bien.moratoire.duree && (
                <div className={styles.legalRow}>
                  <span className={styles.legalLabel}>Moratoire</span>
                  <strong className={styles.legalValue}>
                    Possible sur {bien.moratoire.duree} mois, acompte{' '}
                    {bien.moratoire.acompte
                      ? `${Math.round((bien.moratoire.acompte / bien.moratoire.prix) * 100)}%`
                      : '—'}
                  </strong>
                </div>
              )}
            </div>

            {/* Localisation */}
            <h3 className={styles.sectionTitle}>Localisation</h3>
            <div className={styles.mapContainer}>
              <iframe
                title={`Carte de ${bien.zone}`}
                className={styles.mapIframe}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-17.53%2C14.73%2C-17.47%2C14.76&layer=mapnik"
              />
            </div>
            <p className={styles.mapNote}>
              Emplacement approximatif — adresse exacte communiquée lors de la visite.
            </p>
          </div>

          {/* === RIGHT SIDEBAR === */}
          <aside className={styles.sidebar}>
            {/* Price Box */}
            <div className={styles.priceBox}>
              <div className={styles.priceLabel}>Prix de vente</div>
              <div className={styles.priceMain}>{formatPrice(bien.prix)}</div>
              {prixM2 && <div className={styles.priceSub}>{formatPrice(prixM2)} / m²</div>}

              {bien.moratoire && bien.moratoire.duree && (
                <>
                  <div className={styles.priceDivider} />
                  <div className={styles.moratoireLabel}>
                    Avec moratoire {bien.moratoire.duree} mois
                  </div>
                  <div className={styles.morataireMontant}>
                    {formatPrice(bien.moratoire.mensualite)} / mois
                  </div>
                  <div className={styles.morataireCondition}>
                    après acompte de{' '}
                    {bien.moratoire.acompte
                      ? `${Math.round((bien.moratoire.acompte / bien.moratoire.prix) * 100)}% (${formatPrice(bien.moratoire.acompte)})`
                      : '—'}
                  </div>
                </>
              )}

              <div className={styles.actionButtons}>
                <Link to="/contact" className={styles.btnVisit}>
                  Organiser une visite
                </Link>
                <a href="https://wa.me/221770000000" className={styles.btnWhatsapp}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4-2.4 10 10 0 0 1-2-3c-.2-.6-.3-1.3 0-1.8.2-.4.6-.8 1-1 .3-.1.7 0 .9.3l.8 1.4c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.4 0 .6.5.9 1.5 1.9 2.5 2.4.2.1.4 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.8c.2.1.3.4.3.6 0 .1 0 .2-.1.3Z" />
                  </svg>
                  Discuter sur WhatsApp
                </a>
                <a href="tel:+221338000000" className={styles.btnPhone}>
                  +221 33 800 00 00
                </a>
              </div>
            </div>

            {/* Abroad Box */}
            <div className={styles.abroadBox}>
              <p className={styles.abroadTitle}>Vous êtes à l'étranger ?</p>
              <p className={styles.abroadText}>
                Visite vidéo en direct, dossier juridique envoyé par e-mail, achat possible par
                procuration notariée.
              </p>
              <Link to="/contact" className={styles.abroadLink}>
                Planifier une visite vidéo →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* === SIMILAR PROPERTIES === */}
      {similaires.length > 0 && (
        <section className={styles.similarSection}>
          <div className={styles.similarContainer}>
            <div className={styles.similarHeader}>
              <h2 className={styles.similarTitle}>Biens similaires</h2>
              <Link to="/acheter" className={styles.viewAllBtn}>
                Tous les biens →
              </Link>
            </div>
            <div className={styles.similarGrid}>
              {similaires.map((item) => (
                <BienCard key={item.id} bien={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  )
}
