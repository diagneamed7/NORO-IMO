import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import styles from './FicheProgrammePage.module.css'
import { PROGRAMMES, PH } from '../data/programmes'

export default function FicheProgrammePage() {
  const { id } = useParams()
  const programme = PROGRAMMES.find(p => p.id === id)
  const [galleryIdx, setGalleryIdx] = useState(0)
  const [brochureAsked, setBrochureAsked] = useState(false)

  if (!programme) {
    return (
      <div className={styles.page}>
        <div style={{ padding: '100px 24px', textAlign: 'center' }}>
          <h1>Programme non trouvé</h1>
          <p>
            <Link to="/programmes">Retour aux programmes</Link>
          </p>
        </div>
      </div>
    )
  }

  // Galerie photo pour cette fiche (utilise les photos PH disponibles)
  const galerie = [
    PH.aerienA,
    PH.terrainA,
    PH.aerienB,
    PH.maisons,
  ]

  const autresProgrammes = PROGRAMMES

  const mainPhoto = galerie[galleryIdx] || galerie[0]

  // Prix adapté selon le programme
  const prixCash = programme.prixAPartir || null
  const moratoireMois = 24
  const acompte = prixCash ? Math.round(prixCash * 0.2) : null
  const moratoireMsg = prixCash ? Math.round((prixCash - acompte) / moratoireMois) : null

  // SEO dynamique pour le programme
  const seoTitle = `${programme.titre} | Programmes Immobiliers | NORO Immobilier`
  const seoDesc = `${programme.titre}. ${programme.localisation ? programme.localisation + '. ' : ''}Découvrez notre programme immobilier avec plans, prix et conditions de paiement.`

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDesc}
        ogImage={mainPhoto || 'https://noro-immobilier.sn/og-image.png'}
        ogType="product"
        canonicalUrl={`https://noro-immobilier.sn/programmes/${programme.id}`}
      />
      <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span>/</span>
            <Link to="/programmes">Programmes</Link>
            <span>/</span>
            <span>{programme.nom}</span>
          </nav>
          <div className={styles.heroContent}>
            <div>
              <span className={styles.statut} style={{
                background: programme.statutTon === 'orange' ? '#F57C00' : '#0A4D9B',
              }}>
                {programme.statut}
              </span>
              <h1 className={styles.title}>{programme.nom}</h1>
              <p className={styles.location}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {programme.localisationCourte}
              </p>
            </div>
            <div className={styles.priceBox}>
              <div className={styles.priceLabel}>Prix d'entrée</div>
              <div className={styles.priceValue}>
                {prixCash ? `À partir de ${prixCash.toLocaleString('fr-FR')} FCFA` : 'Sur demande'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.mainImage} style={{ backgroundImage: `url(${mainPhoto.photo})` }}></div>
        <div className={styles.thumbnails}>
          {galerie.map((photo, idx) => (
            <button
              key={idx}
              className={styles.thumbnail}
              onClick={() => setGalleryIdx(idx)}
              style={{
                borderColor: idx === galleryIdx ? '#F57C00' : '#ECECEC',
                backgroundImage: `url(${photo.photo})`,
              }}
              aria-label={`Image ${idx + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentLayout}>
          {/* Main Content */}
          <div className={styles.mainContent}>
            <h2 className={styles.contentTitle}>Le programme</h2>
            {programme.detailComplet ? (
              programme.detailComplet.description.split('\n\n').map((para, idx) => (
                <p key={idx} className={styles.contentText}>{para}</p>
              ))
            ) : (
              <p className={styles.contentText}>{programme.descriptionCourte}</p>
            )}

            {/* Caractéristiques */}
            <h3 className={styles.subTitle}>Caractéristiques</h3>
            {programme.detailComplet ? (
              <div className={styles.caractGrid}>
                {programme.detailComplet.caracteristiques.map((item, idx) => (
                  <div key={idx} className={styles.caractItem}>
                    <div className={styles.caractLabel}>{item.label}</div>
                    <div className={styles.caractValue}>{item.value}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.onDemandBox}>
                <p className={styles.onDemandText}>Détails disponibles sur demande. Contactez un conseiller NORO pour plus d'informations sur les caractéristiques spécifiques de ce programme.</p>
                <Link to="/contact" className={styles.onDemandLink}>Contacter un conseiller →</Link>
              </div>
            )}

            {/* Plan de Masse */}
            <h3 className={styles.subTitle}>Plan de masse</h3>
            <div className={styles.planImage}></div>
            <p className={styles.planNote}>Plan indicatif — le plan de masse coté est remis avec la brochure.</p>

            {/* Disponibilités */}
            <h3 className={styles.subTitle}>Disponibilités</h3>
            {programme.detailComplet ? (
              <div className={styles.table}>
                <div className={styles.tableHeader}>
                  <span>Type de lot</span>
                  <span>Prix cash</span>
                  <span>Restants</span>
                </div>
                {programme.detailComplet.disponibilites.map((dispo, idx) => (
                  <div key={idx} className={styles.tableRow}>
                    <span>{dispo.type}</span>
                    <span className={styles.prix}>{dispo.prix}</span>
                    <span className={styles.dispoCount}>{dispo.restants}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.onDemandBox}>
                <p className={styles.onDemandText}>Tableau détaillé des disponibilités sur demande. Appelez ou écrivez un conseiller pour connaître les lots disponibles et leurs prix.</p>
                <Link to="/contact" className={styles.onDemandLink}>Demander les disponibilités →</Link>
              </div>
            )}

            {/* Localisation */}
            <h3 className={styles.subTitle}>Localisation</h3>
            <iframe
              title="Carte de Diamniadio"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-17.22%2C14.69%2C-17.14%2C14.75&amp;layer=mapnik"
              className={styles.map}
            ></iframe>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Prix Box */}
            <div className={styles.priceCardBox}>
              {prixCash ? (
                <>
                  <div className={styles.priceCardLabel}>Parcelle 200 m² — cash</div>
                  <div className={styles.priceCardValue}>{prixCash.toLocaleString('fr-FR')} FCFA</div>
                  <div className={styles.priceDivider}></div>
                  <div className={styles.priceCardLabel}>En moratoire {moratoireMois} mois</div>
                  <div className={styles.priceCardMonthly}>{moratoireMsg.toLocaleString('fr-FR')} FCFA / mois</div>
                  <div className={styles.priceCardNote}>après acompte de 20 % ({acompte.toLocaleString('fr-FR')} FCFA)</div>
                </>
              ) : (
                <>
                  <div className={styles.priceCardLabel}>Prix</div>
                  <div className={styles.priceCardValue}>Sur demande</div>
                  <p className={styles.priceCardNote} style={{ marginTop: '14px' }}>Contactez un conseiller pour connaître les prix et modalités de paiement.</p>
                </>
              )}
              <div className={styles.priceCardActions}>
                <Link to="/contact" className={styles.btnReserver}>
                  Réserver un lot
                </Link>
                <button
                  onClick={() => setBrochureAsked(true)}
                  className={styles.btnBrochure}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 3v12" />
                    <path d="m7 11 5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                  Télécharger la brochure
                </button>
                <a href="https://wa.me/221777923906" className={styles.btnWhatsappSide}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4-2.4 10 10 0 0 1-2-3c-.2-.6-.3-1.3 0-1.8.2-.4.6-.8 1-1 .3-.1.7 0 .9.3l.8 1.4c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.4 0 .6.5.9 1.5 1.9 2.5 2.4.2.1.4 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.8c.2.1.3.4.3.6 0 .1 0 .2-.1.3Z" />
                  </svg>
                  Poser une question
                </a>
              </div>
              {brochureAsked && (
                <p className={styles.brochureMessage}>
                  La brochure PDF vous sera envoyée par WhatsApp ou e-mail après confirmation de vos
                  coordonnées.
                </p>
              )}
            </div>

            {/* Visite Box */}
            <div className={styles.visitBox}>
              <p className={styles.visitTitle}>Visite du site</p>
              <p className={styles.visitDesc}>
                Visites guidées les samedis matin, sur inscription. Depuis l'étranger : visite vidéo en direct
                avec un conseiller.
              </p>
              <Link to="/contact" className={styles.visitLink}>
                Réserver ma visite →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Autres Programmes */}
      <section className={styles.autresSection}>
        <h2 className={styles.autresTitle}>Autres programmes</h2>
        <div className={styles.autresGrid}>
          {autresProgrammes.map(prog => (
            <article key={prog.id} className={styles.autreCard}>
              <div className={styles.autreImage} style={{ backgroundImage: `url(${prog.photo})` }}></div>
              <div className={styles.autreContent}>
                <span className={styles.autreStatut}>{prog.statut}</span>
                <h3 className={styles.autreName}>{prog.nom}</h3>
                <p className={styles.autrePrix}>{prog.prixDep}</p>
                <Link to={`/programmes/${prog.id}`} className={styles.autreLink}>
                  Voir le programme →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}
