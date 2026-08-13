import { useState } from 'react'
import { PropertyCard } from './PropertyCard'
import { PropertyModal } from './PropertyModal'

export function PropertyGrid({ properties }) {
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

  if (!properties || properties.length === 0) {
    return null
  }

  return (
    <>
      <section className="section gray">
        <div className="container">
          <div className="search-card">
            <div className="search-grid">
              <div className="field">
                <label>Type de bien</label>
                <select value={filters.type} onChange={(e) => handleFilter({ ...filters, type: e.target.value })}>
                  <option value="">Tous les types</option>
                  <option value="Terrain">Terrain</option>
                  <option value="Maison">Maison</option>
                  <option value="Villa">Villa</option>
                  <option value="Appartement">Appartement</option>
                  <option value="Bureau">Bureau</option>
                  <option value="Immeuble">Immeuble</option>
                  <option value="Local commercial">Local commercial</option>
                </select>
              </div>

              <div className="field">
                <label>Zone</label>
                <select value={filters.zone} onChange={(e) => handleFilter({ ...filters, zone: e.target.value })}>
                  <option value="">Toutes les zones</option>
                  <option value="Kounoune 2">Kounoune 2</option>
                  <option value="Tivaoune Peulh">Tivaoune Peulh</option>
                  <option value="Yené Kao">Yené Kao</option>
                  <option value="Guéréo">Guéréo</option>
                  <option value="Pout">Pout</option>
                  <option value="Bambilor">Bambilor</option>
                  <option value="Bayakh">Bayakh</option>
                  <option value="Thiès">Thiès</option>
                  <option value="Toubab Dialaw">Toubab Dialaw</option>
                  <option value="Yené Guédj">Yené Guédj</option>
                </select>
              </div>

              <div className="field">
                <label>Prix min (M)</label>
                <input type="number" placeholder="0" value={filters.prixMin} onChange={(e) => handleFilter({ ...filters, prixMin: e.target.value })} />
              </div>

              <div className="field">
                <label>Prix max (M)</label>
                <input type="number" placeholder="999" value={filters.prixMax} onChange={(e) => handleFilter({ ...filters, prixMax: e.target.value })} />
              </div>

              <div className="field">
                <label>Transaction</label>
                <select>
                  <option>Vente</option>
                  <option>Location</option>
                  <option>Moratoire</option>
                </select>
              </div>

              <button className="btn-search" onClick={() => handleFilter({ type: '', zone: '', prixMin: '', prixMax: '' })}>
                Réinitialiser
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">Notre catalogue</div>
            <div className="route-divider">
              <svg viewBox="0 0 64 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--blue)" />
                    <stop offset="100%" stopColor="var(--orange)" />
                  </linearGradient>
                </defs>
                <path d="M0 8 Q 16 2, 32 8 T 64 8" stroke="url(#gradient2)" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <h2>Nos propriétés d'exception</h2>
            <p>Découvrez nos sélections de terrains, maisons et villas aux meilleurs prix du Sénégal.</p>
          </div>

          <div className="grid-biens">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={() => setSelectedProperty(property)}
              />
            ))}
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
