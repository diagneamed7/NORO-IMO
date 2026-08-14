import { useMemo, useState } from 'react'

function fmt(n) {
  return n == null ? 'Prix sur demande' : Math.round(n).toLocaleString('fr-FR') + ' FCFA'
}

export function Simulateur() {
  const [prix, setPrix] = useState(4000000)
  const [acompte, setAcompte] = useState(800000)
  const [duree, setDuree] = useState(18)

  const { solde, mensualite, fin } = useMemo(() => {
    const p = parseFloat(prix) || 0
    const a = parseFloat(acompte) || 0
    const d = parseInt(duree, 10) || 1
    const s = Math.max(p - a, 0)
    const m = s / d
    const now = new Date()
    now.setMonth(now.getMonth() + d)
    const finLabel = now.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })
    return { solde: s, mensualite: m, fin: finLabel }
  }, [prix, acompte, duree])

  return (
    <section className="section gray">
      <div className="container">
        <div className="simu-box">
          <div>
            <p className="eyebrow" style={{ color: '#ffd9ad' }}>
              Simulateur de paiement
            </p>
            <h2>Estimez votre mensualite en toute simplicite</h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', marginTop: 12, fontSize: 15 }}>
              Renseignez le prix du terrain, l'acompte et la duree souhaitee pour estimer votre plan de
              paiement.
            </p>
          </div>
          <div>
            <div className="simu-form">
              <div className="field">
                <label>Prix du bien (FCFA)</label>
                <input type="number" value={prix} onChange={(e) => setPrix(e.target.value)} />
              </div>
              <div className="field">
                <label>Acompte (FCFA)</label>
                <input type="number" value={acompte} onChange={(e) => setAcompte(e.target.value)} />
              </div>
              <div className="field">
                <label>Duree (mois)</label>
                <input type="number" value={duree} onChange={(e) => setDuree(e.target.value)} />
              </div>
            </div>
            <div className="simu-result" style={{ marginTop: 18 }}>
              <div className="row">
                <span>Solde restant</span>
                <b>{fmt(solde)}</b>
              </div>
              <div className="row">
                <span>Mensualite estimee</span>
                <b>{fmt(mensualite)}</b>
              </div>
              <div className="row">
                <span>Date de fin estimee</span>
                <b>{fin}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
