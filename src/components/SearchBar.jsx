export function SearchBar({ filters, setFilters, zones, onSearch }) {
  const update = (key) => (e) => setFilters({ ...filters, [key]: e.target.value })

  return (
    <div className="container">
      <div className="search-card">
        <div className="search-grid">
          <div className="field">
            <label>Type de bien</label>
            <select value={filters.type} onChange={update('type')}>
              <option value="">Tous types</option>
              <option value="Terrain">Terrain</option>
              <option value="Maison">Maison</option>
            </select>
          </div>
          <div className="field">
            <label>Localisation</label>
            <select value={filters.zone} onChange={update('zone')}>
              <option value="">Toutes zones</option>
              {zones.map((z) => (
                <option key={z} value={z}>
                  {z}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Transaction</label>
            <select value={filters.transaction} onChange={update('transaction')}>
              <option value="">Vente cash / moratoire</option>
              <option value="cash">Vente cash</option>
              <option value="moratoire">Avec moratoire</option>
            </select>
          </div>
          <div className="field">
            <label>Prix min (FCFA)</label>
            <input type="number" placeholder="0" value={filters.prixMin} onChange={update('prixMin')} />
          </div>
          <div className="field">
            <label>Prix max (FCFA)</label>
            <input
              type="number"
              placeholder="40 000 000"
              value={filters.prixMax}
              onChange={update('prixMax')}
            />
          </div>
          <div className="field">
            <button className="btn-search" onClick={onSearch}>
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
