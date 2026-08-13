import { useState } from 'react'
import { PropertyCard } from './PropertyCard'
import { PropertyModal } from './PropertyModal'
import { RouteDivider } from './RouteDivider'

export function PropertyGrid({ properties, loading, error }) {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [filters, setFilters] = useState({
    type: '',
    zone: '',
    prixMin: '',
    prixMax: '',
  })

  const filteredProperties = properties.filter((prop) => {
    if (filters.type && prop.type !== filters.type) return false
    if (filters.zone && prop.zone !== filters.zone) return false
    if (filters.prixMin && prop.prix < parseInt(filters.prixMin) * 1000000) return false
    if (filters.prixMax && prop.prix > parseInt(filters.prixMax) * 1000000) return false
    return true
  })

  const handleFilter = (newFilters) => {
    setFilters(newFilters)
  }

  if (loading) {
    return (
      <section id="proprietes" className="section">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">Chargement...</div>
            <RouteDivider />
            <h2>Chargement des propriétés</h2>
          </div>
        </div>
      </section>
    )
  }

  if (error || properties.length === 0) {
    return (
      <section id="proprietes" className="section">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">Aucune propriété</div>
            <RouteDivider />
            <h2>Aucune propriété trouvée</h2>
            <p>Veuillez vérifier votre connexion ou revenir plus tard.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section id="proprietes" className="section gray">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">Notre catalogue</div>
            <RouteDivider />
            <h2>Nos propriétés d'exception</h2>
            <p>Découvrez nos sélections de terrains, maisons et villas aux meilleurs prix du Sénégal.</p>
          </div>

          <div className="grid-biens">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onClick={() => setSelectedProperty(property)}
                />
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                <p style={{ fontSize: '16px', color: '#666' }}>
                  Aucune propriété ne correspond à vos critères de recherche.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </>
  )
}
