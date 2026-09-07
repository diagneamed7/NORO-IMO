import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './BienCard.module.css'

export default function BienCard({ bien }) {
  if (!bien) return null

  // State pour gérer les images cassées
  const [imageError, setImageError] = useState(false)

  // Réinitialiser imageError quand le bien change
  useEffect(() => {
    setImageError(false)
  }, [bien.id])

  // Support pour format personnalisé (ancien style avec ruban)
  const rubanBg = bien.rubanTon === 'orange' ? '#F57C00' : '#0A4D9B'

  // Support pour format data/properties.json
  const titre = bien.titre || `${bien.type} - ${bien.zone}`
  const detail = bien.detail || bien.commentaire || bien.zone

  // Formater prix
  const formatPrice = (price) => {
    if (!price) return 'Prix sur demande'
    return new Intl.NumberFormat('fr-SN', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const prixLabel = bien.prixLabel || (bien.prix ? formatPrice(bien.prix) : null)
  const prixM2 = bien.superficie && bien.prix ? bien.prix / bien.superficie : null
  const prixM2Label =
    bien.prixM2Label || (prixM2 ? `${formatPrice(prixM2)} / m²` : null)

  // Placeholder basé sur le type de bien
  const getPlaceholderIcon = () => {
    if (bien.type === 'Villa') return '🏠'
    if (bien.type === 'Maison') return '🏘️'
    if (bien.type === 'Terrain') return '🏞️'
    if (bien.type === 'Appartement') return '🏢'
    if (bien.type === 'Bureau') return '🏢'
    if (bien.type === 'Immeuble') return '🏢'
    return '🏘️'
  }

  return (
    <article className={styles.card}>
      {/* Image Section */}
      <div className={styles.imageContainer}>
        {bien.photo && !imageError ? (
          <img
            src={bien.photo}
            alt={titre}
            className={styles.image}
            onError={() => {
              setImageError(true)
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#F5F5F5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '64px',
              color: '#D0D0D0',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
              flexDirection: 'column',
              boxSizing: 'border-box',
            }}
          >
            {getPlaceholderIcon()}
          </div>
        )}
        {bien.ruban && (
          <span className={styles.badge} style={{ background: rubanBg }}>
            {bien.ruban}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        {bien.zone && (
          <span className={styles.location}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {bien.zone}
          </span>
        )}

        <h3 className={styles.title}>{titre}</h3>

        {detail && <p className={styles.detail}>{detail}</p>}

        {/* Price Section */}
        {(prixLabel || prixM2Label) && (
          <div className={styles.priceSection}>
            {prixLabel && <div className={styles.prix}>{prixLabel}</div>}
            {prixM2Label && <div className={styles.prixM2}>{prixM2Label}</div>}
          </div>
        )}

        {/* Actions */}
        <div className={styles.actions}>
          <Link to={`/biens/${bien.slug || bien.id}`} className={styles.detailBtn}>
            Voir le détail
          </Link>
          <a
            href="https://wa.me/221770000000"
            aria-label="Contacter par WhatsApp"
            className={styles.whatsappBtn}
            title="Contacter sur WhatsApp"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4-2.4 10 10 0 0 1-2-3c-.2-.6-.3-1.3 0-1.8.2-.4.6-.8 1-1 .3-.1.7 0 .9.3l.8 1.4c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.4 0 .6.5.9 1.5 1.9 2.5 2.4.2.1.4 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.8c.2.1.3.4.3.6 0 .1 0 .2-.1.3Z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}
