import { useEffect, useState } from 'react'

export function PropertyModal({ property, onClose }) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleClose = () => {
    setIsActive(false)
    setTimeout(onClose, 300)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const getDefaultImage = (type) => {
    const images = {
      Terrain: 'https://images.unsplash.com/photo-1500382017468-7049faf12a51?w=600&h=400&fit=crop',
      Maison: 'https://images.unsplash.com/photo-1570129477492-45a003537e07?w=600&h=400&fit=crop',
      Villa: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
      Appartement: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
      Bureau: 'https://images.unsplash.com/photo-1554995207-c18fbb1d4a02?w=600&h=400&fit=crop',
      Immeuble: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      'Local commercial': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    }
    return images[type] || images.Terrain
  }

  const formatPrice = (price) => {
    if (!price) return 'Nous consulter'
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const imageUrl = property.photo || getDefaultImage(property.type)

  return (
    <div className={`modal-overlay ${isActive ? 'active' : ''}`} onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          ✕
        </button>

        <img
          src={imageUrl}
          alt={property.titre}
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        />

        <h2 className="modal-title">{property.titre || `${property.type} à ${property.zone}`}</h2>

        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: 'var(--blue)', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>
            {property.zone}
          </p>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
            Type : {property.type}
          </p>
          {property.superficie && (
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
              Superficie : {property.superficie} m²
            </p>
          )}
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
            Titre foncier : {property.titre}
          </p>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
            Statut : {property.statut === 'disponible' ? '✓ Disponible' : property.statut === 'reserve' ? '⏱ Réservé' : '✕ Vendu'}
          </p>
        </div>

        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'var(--gray)', borderRadius: '8px' }}>
          <div style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase', marginBottom: '5px' }}>
            Prix de vente
          </div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: 'var(--orange)' }}>
            {formatPrice(property.prix)}
          </div>
        </div>

        {property.description && (
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--blue-ink)', marginBottom: '10px' }}>
              Description
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
              {property.description}
            </p>
          </div>
        )}

        {property.moratoire && (
          <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#e8f4f8', borderRadius: '8px', borderLeft: '4px solid var(--blue)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--blue)', marginBottom: '10px' }}>
              💳 Options de paiement échelonné
            </h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
              Prix (moratoire) : <strong>{formatPrice(property.moratoire.prix)}</strong>
            </p>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
              Acompte : <strong>{formatPrice(property.moratoire.acompte)}</strong>
            </p>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
              Mensualité : <strong>{formatPrice(property.moratoire.mensualite)}</strong>
            </p>
            <p style={{ fontSize: '14px', color: '#666' }}>
              Durée : <strong>{property.moratoire.duree} mois</strong>
            </p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            className="btn-primary"
            style={{ flex: 1 }}
            onClick={() => {
              const message = `Bonjour, je suis intéressé par cette propriété : ${property.titre || `${property.type} à ${property.zone}`}\n\nPrix : ${formatPrice(property.prix)}\n\nPourriez-vous me fournir plus de détails ?`
              window.open(`https://wa.me/221775000000?text=${encodeURIComponent(message)}`, '_blank')
            }}
          >
            💬 Contacter sur WhatsApp
          </button>
          <button
            className="btn-ghost"
            style={{ flex: 1 }}
            onClick={handleClose}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  )
}
