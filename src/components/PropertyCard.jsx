export function PropertyCard({ property, onClick }) {
  const formatPrice = (price) => {
    if (!price) return 'Nous consulter'
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getDefaultImage = (type) => {
    const images = {
      Terrain: 'https://images.unsplash.com/photo-1500382017468-7049faf12a51?w=400&h=250&fit=crop',
      Maison: 'https://images.unsplash.com/photo-1570129477492-45a003537e07?w=400&h=250&fit=crop',
      Villa: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
      Appartement: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop',
      Bureau: 'https://images.unsplash.com/photo-1554995207-c18fbb1d4a02?w=400&h=250&fit=crop',
      Immeuble: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
      'Local commercial': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
    }
    return images[type] || images.Terrain
  }

  const imageUrl = property.photo || getDefaultImage(property.type)
  const hasImage = property.photo && property.photo.trim() !== ''

  return (
    <div className="card-bien" onClick={onClick}>
      <div className="card-media" style={{ backgroundImage: `url(${imageUrl})` }}>
        {!hasImage && (
          <div className="card-media-overlay">
            <div className="card-media-overlay-text">{property.type}</div>
          </div>
        )}

        <div className={`status-ribbon ${property.statut === 'reserve' ? 'reserve' : property.statut === 'vendu' ? 'vendu' : ''}`}>
          {property.statut === 'disponible' ? 'Disponible' : property.statut === 'reserve' ? 'Réservé' : 'Vendu'}
        </div>
      </div>

      <div className="card-content">
        <div className="card-zone">{property.zone}</div>
        <div className="card-type">{property.type}</div>
        <h3 className="card-title">{property.titre || `${property.type} à ${property.zone}`}</h3>

        <div className="card-details">
          {property.superficie && (
            <span>
              📐 {property.superficie} m²
            </span>
          )}
          {property.type && (
            <span>
              🏠 {property.type}
            </span>
          )}
        </div>

        <div className="card-price">
          <div className="card-price-label">À partir de</div>
          {formatPrice(property.prix)}
        </div>

        {property.moratoire && (
          <div className="badge-moratoire">
            ✓ Paiement échelonné disponible
          </div>
        )}
      </div>
    </div>
  )
}
