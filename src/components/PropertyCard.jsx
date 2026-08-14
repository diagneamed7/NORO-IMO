const PHOTO_TERRAIN =
  'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?fm=jpg&q=70&w=800&auto=format&fit=crop'
const PHOTO_MAISON =
  'https://images.unsplash.com/photo-1760473537243-72168ffd273c?fm=jpg&q=70&w=800&auto=format&fit=crop'

function fmt(n) {
  return n == null ? 'Prix sur demande' : n.toLocaleString('fr-FR') + ' FCFA'
}

export function PropertyCard({ property, onOpen }) {
  const statut = property.statut || 'disponible'

  let ribbon = null
  if (statut === 'vendu') {
    ribbon = <span className="ribbon alt">Vendu</span>
  } else if (statut === 'reserve') {
    ribbon = (
      <span className="ribbon" style={{ background: '#b3261e' }}>
        Reserve
      </span>
    )
  } else if (property.moratoire) {
    ribbon = <span className="ribbon">Moratoire</span>
  } else {
    ribbon = <span className="ribbon alt">Exclusivite</span>
  }

  const txnBadge = property.moratoire ? 'Vente / Moratoire' : 'Vente'
  const supText = property.superficie ? `${property.superficie} m2` : 'Sur plan'
  const fallbackPhoto = property.type === 'Maison' ? PHOTO_MAISON : PHOTO_TERRAIN
  const photo = property.photo ? property.photo : fallbackPhoto

  return (
    <div className="card-bien" onClick={() => onOpen(property.id)}>
      <div className="card-media" style={{ backgroundImage: `url('${photo}')` }}>
        <div className="card-media-overlay"></div>
        {ribbon}
        <span className="txn-badge">{txnBadge}</span>
        <span className="media-badge">{property.type === 'Maison' ? '🏠' : '🌍'}</span>
      </div>
      <div className="card-body">
        <div className="card-type">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {property.zone}
        </div>
        <div className="card-zone">
          {property.type} · Reference NORO-{String(property.id).padStart(3, '0')}
        </div>
        <div className="card-meta">
          <span>{property.type}</span>
          <span>·</span>
          <span>{supText}</span>
          <span>·</span>
          <span>{property.titre}</span>
        </div>
        <div className="card-price-row">
          <span className="card-price">{fmt(property.prix)}</span>
          <span
            className="btn-detail"
            onClick={(e) => {
              e.stopPropagation()
              onOpen(property.id)
            }}
          >
            Voir le detail
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export { fmt, PHOTO_TERRAIN, PHOTO_MAISON }
