import { useMemo, useState } from 'react'
import { SearchBar } from './SearchBar'
import { PropertyCard } from './PropertyCard'
import { PropertyModal } from './PropertyModal'
import { RouteDivider } from './RouteDivider'

export function PropertyGrid({ properties }) {
  const [filters, setFilters] = useState({ type: '', zone: '', transaction: '', prixMin: '', prixMax: '' })
  const [appliedFilters, setAppliedFilters] = useState(filters)
  const [openId, setOpenId] = useState(null)

  const zones = useMemo(
    () => [...new Set(properties.map((p) => p.zone))].sort(),
    [properties]
  )

  const filtered = useMemo(() => {
    const min = parseFloat(appliedFilters.prixMin) || 0
    const max = parseFloat(appliedFilters.prixMax) || Infinity
    return properties.filter((p) => {
      if (appliedFilters.type && p.type !== appliedFilters.type) return false
      if (appliedFilters.zone && p.zone !== appliedFilters.zone) return false
      if (appliedFilters.transaction === 'cash' && p.moratoire) return false
      if (appliedFilters.transaction === 'moratoire' && !p.moratoire) return false
      if (p.prix != null && (p.prix < min || p.prix > max)) return false
      return true
    })
  }, [properties, appliedFilters])

  const openProperty = properties.find((p) => p.id === openId)

  return (
    <>
      <SearchBar
        filters={filters}
        setFilters={setFilters}
        zones={zones}
        onSearch={() => setAppliedFilters(filters)}
      />

      <section className="section" id="biens">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Nos biens</p>
            <h2>Terrains et maisons disponibles</h2>
            <RouteDivider />
            <p>
              Une selection de terrains viabilises et de biens repartis entre Kounoune, Tivaoune Peulh, Yene,
              Guereo, Pout, Bambilor, Bayakh, Thies et Toubab Dialaw.
            </p>
          </div>
          <div className="results-bar">
            <div className="count">
              {filtered.length} bien{filtered.length > 1 ? 's' : ''} trouve{filtered.length > 1 ? 's' : ''}
            </div>
          </div>
          <div className="grid-biens">
            {filtered.length === 0 ? (
              <div className="no-results">
                Aucun bien ne correspond a votre recherche. Essayez d'elargir vos criteres.
              </div>
            ) : (
              filtered.map((p) => <PropertyCard key={p.id} property={p} onOpen={setOpenId} />)
            )}
          </div>
        </div>
      </section>

      <PropertyModal property={openProperty} onClose={() => setOpenId(null)} />
    </>
  )
}
