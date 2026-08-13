import { useState } from 'react'

export function SearchBar({ onFilter }) {
  const [filters, setFilters] = useState({
    type: '',
    zone: '',
    prixMin: '',
    prixMax: '',
    transaction: 'vente',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const newFilters = { ...filters, [name]: value }
    setFilters(newFilters)
    onFilter(newFilters)
  }

  const handleReset = () => {
    const emptyFilters = {
      type: '',
      zone: '',
      prixMin: '',
      prixMax: '',
      transaction: 'vente',
    }
    setFilters(emptyFilters)
    onFilter(emptyFilters)
  }

  return (
    <div className="search-card">
      <div className="search-grid">
        <div className="field">
          <label htmlFor="type">Type de bien</label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
          >
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
          <label htmlFor="zone">Zone / Localisation</label>
          <select
            id="zone"
            name="zone"
            value={filters.zone}
            onChange={handleChange}
          >
            <option value="">Toutes les zones</option>
            <option value="Kounoune 2">Kounoune 2</option>
            <option value="Tivaoune">Tivaoune</option>
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
          <label htmlFor="prixMin">Prix min (M FCFA)</label>
          <input
            id="prixMin"
            name="prixMin"
            type="number"
            placeholder="0"
            value={filters.prixMin}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="prixMax">Prix max (M FCFA)</label>
          <input
            id="prixMax"
            name="prixMax"
            type="number"
            placeholder="999"
            value={filters.prixMax}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="transaction">Transaction</label>
          <select
            id="transaction"
            name="transaction"
            value={filters.transaction}
            onChange={handleChange}
          >
            <option value="vente">Vente</option>
            <option value="location">Location</option>
            <option value="moratoire">Moratoire</option>
          </select>
        </div>

        <button className="btn-search" onClick={handleReset}>
          Réinitialiser
        </button>
      </div>
    </div>
  )
}
