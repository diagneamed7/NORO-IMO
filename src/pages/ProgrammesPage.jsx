import { Link } from 'react-router-dom'
import styles from './ProgrammesPage.module.css'
import { PROGRAMMES } from '../data/programmes'
import SEO from '../components/SEO'

export default function ProgrammesPage() {
  return (
    <>
      <SEO
        title="Programmes immobiliers neufs | NORO Immobilier"
        description="Cité NORO Diamniadio, Résidence Les Filaos, Domaine de Bambilor. Parcelles viabilisées et villas neuves."
        canonicalUrl="https://noro-immobilier.sn/programmes"/>
      <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>Programmes</span>
          </nav>
          <h1 className={styles.title}>Nos lotissements et résidences</h1>
          <p className={styles.description}>
            Des programmes que nous commercialisons directement : plan de masse disponible, titre vérifié,
            paiement échelonné possible sur la plupart des lots.
          </p>
        </div>
      </section>

      {/* Programmes Grid */}
      <section className={styles.programmesSection}>
        <div className={styles.programmesGrid}>
          {PROGRAMMES.map((prog) => (
            <article key={prog.id} className={styles.programmeCard}>
              <div className={styles.cardImage} style={{ backgroundImage: `url(${prog.photo})` }}>
                <span
                  className={styles.statut}
                  style={{
                    background: prog.statutTon === 'orange' ? '#F57C00' : '#0A4D9B',
                  }}
                >
                  {prog.statut}
                </span>
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{prog.nom}</h2>
                <p className={styles.cardDesc}>{prog.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.prix}>{prog.prixDep}</span>
                  <span className={styles.dispo}>{prog.dispo}</span>
                </div>
                <div className={styles.cardActions}>
                  <Link to={`/programmes/${prog.id}`} className={styles.btnPrimary}>
                    Voir le programme
                  </Link>
                  <a
                    href="https://wa.me/221777923906"
                    className={styles.btnWhatsapp}
                    aria-label="Contacter par WhatsApp"
                    title="WhatsApp"
                  >
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4-2.4 10 10 0 0 1-2-3c-.2-.6-.3-1.3 0-1.8.2-.4.6-.8 1-1 .3-.1.7 0 .9.3l.8 1.4c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.4 0 .6.5.9 1.5 1.9 2.5 2.4.2.1.4 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.8c.2.1.3.4.3.6 0 .1 0 .2-.1.3Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Avantages Section */}
      <section className={styles.avantagesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Acheter en lotissement</span>
            <h2 className={styles.sectionTitle}>Pourquoi passer par un programme NORO</h2>
          </div>

          <div className={styles.avantagesGrid}>
            {[
              {
                titre: 'Titre vérifié en amont',
                desc: 'Aucun lot n\'est mis en vente sans contrôle du titre, des bornes et des servitudes.',
              },
              {
                titre: 'Paiement échelonné',
                desc: 'Moratoire jusqu\'à 24 mois sans intérêt, échéancier formalisé par contrat.',
              },
              {
                titre: 'Viabilisation réelle',
                desc: 'Voirie tracée, eau et électricité raccordées avant la remise du lot.',
              },
              {
                titre: 'Construction possible',
                desc: 'Nous bâtissons ensuite sur votre lot, avec plans et suivi de chantier NORO.',
              },
            ].map((avantage, idx) => (
              <div key={idx} className={styles.avantageCard}>
                <h3 className={styles.avantageTitle}>{avantage.titre}</h3>
                <p className={styles.avantageText}>{avantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Réservez votre lot avant l'ouverture publique</h2>
              <p className={styles.ctaDesc}>
                Nos clients inscrits accèdent aux nouveaux programmes deux semaines avant leur mise
                en ligne.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <a href="https://wa.me/221777923906" className={styles.btnWhatsappCta}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4-2.4 10 10 0 0 1-2-3c-.2-.6-.3-1.3 0-1.8.2-.4.6-.8 1-1 .3-.1.7 0 .9.3l.8 1.4c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.4 0 .6.5.9 1.5 1.9 2.5 2.4.2.1.4 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.8c.2.1.3.4.3.6 0 .1 0 .2-.1.3Z" />
                </svg>
                Réserver sur WhatsApp
              </a>
              <Link to="/contact" className={styles.btnContact}>
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
