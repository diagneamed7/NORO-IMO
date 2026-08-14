import { fmt, PHOTO_TERRAIN, PHOTO_MAISON } from './PropertyCard'

export function PropertyModal({ property, onClose }) {
  const isOpen = !!property

  return (
    <div className={isOpen ? 'modal-overlay open' : 'modal-overlay'} onClick={(e) => {
      if (e.target.classList.contains('modal-overlay')) onClose()
    }}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        {isOpen && <ModalContent property={property} onClose={onClose} />}
      </div>
    </div>
  )
}

function ModalContent({ property, onClose }) {
  const statut = property.statut || 'disponible'
  const statutLabel = statut === 'vendu' ? 'Vendu' : statut === 'reserve' ? 'Reserve' : 'Disponible'
  const fallbackPhoto = property.type === 'Maison' ? PHOTO_MAISON : PHOTO_TERRAIN
  const photo = property.photo ? property.photo : fallbackPhoto

  return (
    <>
      <img
        src={photo}
        alt={property.zone}
        style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 14, marginBottom: 16 }}
      />
      <p className="eyebrow">
        {property.type} · {property.zone} · {statutLabel}
      </p>
      <h3>
        {property.zone} — Ref. NORO-{String(property.id).padStart(3, '0')}
      </h3>
      <div className="modal-meta">
        <span>{property.superficie ? `${property.superficie} m2` : 'Superficie sur plan'}</span>
        <span>{property.titre}</span>
      </div>
      <div className="modal-price">{fmt(property.prix)}</div>
      <p className="desc">{property.commentaire}</p>

      {property.moratoire && (
        <div className="modal-moratoire">
          <h4>Formule moratoire disponible</h4>
          <div className="row">
            <span>Prix moratoire</span>
            <b>{fmt(property.moratoire.prix)}</b>
          </div>
          <div className="row">
            <span>Acompte</span>
            <b>{fmt(property.moratoire.acompte)}</b>
          </div>
          <div className="row">
            <span>Mensualite</span>
            <b>{fmt(property.moratoire.mensualite)}</b>
          </div>
          <div className="row">
            <span>Duree</span>
            <b>{property.moratoire.duree} mois</b>
          </div>
        </div>
      )}

      <div className="modal-actions">
        <a href="https://wa.me/221770000000" target="_blank" rel="noreferrer" className="btn-primary">
          Reserver via WhatsApp
        </a>
        <a href="#contact" className="btn-ghost" onClick={onClose}>
          Demande d'info
        </a>
      </div>
    </>
  )
}
