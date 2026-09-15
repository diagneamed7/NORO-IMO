import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ConstructionPage.module.css'
import SEO from '../components/SEO'

export default function ConstructionPage() {
  const [formData, setFormData] = useState({
    type: '',
    surface: '',
    localisation: '',
    terrain: 'Oui',
    demarrage: 'Dès que possible',
    nom: '',
    telephone: '',
    projet: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Format message for WhatsApp
    const message = `
*Demande de devis - NORO Immobilier*

Type de projet: ${formData.type}
Surface visée: ${formData.surface} m²
Localisation: ${formData.localisation}
Terrain: ${formData.terrain}
Démarrage souhaité: ${formData.demarrage}
Description du projet: ${formData.projet}

Nom: ${formData.nom}
Téléphone: ${formData.telephone}
    `.trim()

    // Send to WhatsApp
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/221777923906?text=${encodedMessage}`, '_blank')

    setSent(true)
    setTimeout(() => {
      setSent(false)
      setFormData({
        type: '',
        surface: '',
        localisation: '',
        terrain: 'Oui',
        demarrage: 'Dès que possible',
        nom: '',
        telephone: '',
        projet: '',
      })
    }, 3000)
  }

  const realizations = [
    {
      title: 'Villa 4 chambres — Saly',
      desc: '320 m² bâtis, piscine, livrée en 11 mois. Clé en main pour un client basé à Milan.',
      image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=70&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Maison R+1 — Bambilor',
      desc: '260 m², 4 chambres, budget tenu à 2 % près. Financement échelonné sur 24 mois.',
      image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?fm=jpg&q=70&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Immeuble R+2 — Keur Massar',
      desc: '6 appartements pour investissement locatif, mis en gestion dès la livraison.',
      image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?fm=jpg&q=70&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <>
      <SEO
        title="Services de construction immobilière | NORO Immobilier"
        description="Construction clé en main, devis détaillé, suivi de chantier photo. Gros œuvre et plans architecturaux sur mesure."
        canonicalUrl="https://noro-immobilier.sn/construction"/>
      <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection} style={{
        position: 'relative',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'flex-end',
        isolation: 'isolate',
        backgroundImage: 'url(https://images.unsplash.com/photo-1601622962666-d0b6d43a7ac7?fm=jpg&q=70&w=1800&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(105deg,rgba(6,38,79,.94) 0%,rgba(10,77,155,.84) 50%,rgba(10,77,155,.45) 100%)',
        }}></div>
        <div style={{ position: 'relative', zIndex: 2 }} className={styles.heroContainer}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>Construction</span>
          </nav>
          <h1 className={styles.title}>Du plan à la remise des clés</h1>
          <p className={styles.description}>
            Plans architecturaux, devis détaillé, chantier suivi semaine après semaine. Un seul contrat, un seul
            interlocuteur, un budget tenu.
          </p>
          <div className={styles.heroButtons}>
            <a href="#devis" className={styles.buttonPrimary}>Demander un devis</a>
            <a href="#realisations" className={styles.buttonSecondary}>Voir nos réalisations</a>
          </div>
        </div>
      </section>

      {/* Étapes Section */}
      <section className={styles.etapesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Méthode NORO</span>
            <h2 className={styles.sectionTitle}>Les étapes de votre projet</h2>
            <p className={styles.sectionDesc}>
              Chaque étape est validée par écrit avant de passer à la suivante — vous gardez la main sur le
              budget et le calendrier.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {[
              {
                num: '1',
                title: 'Étude du terrain',
                desc: 'Vérification du titre, des bornes et de la nature du sol avant tout engagement.',
                color: 'primary',
              },
              {
                num: '2',
                title: 'Plans architecturaux',
                desc: 'Plans sur mesure, rendus 3D et dépôt du permis de construire.',
                color: 'accent',
              },
              {
                num: '3',
                title: 'Devis détaillé',
                desc: 'Poste par poste, matériaux chiffrés, échéancier de paiement par phase.',
                color: 'primary',
              },
              {
                num: '4',
                title: 'Suivi de chantier',
                desc: 'Rapport photo hebdomadaire, visites vidéo, contrôle qualité à chaque phase.',
                color: 'accent',
              },
              {
                num: '5',
                title: 'Livraison',
                desc: 'Réception avec réserves levées, garantie d\'un an sur le gros œuvre.',
                color: 'primary',
              },
            ].map((step, idx) => (
              <div key={idx} className={styles.step}>
                <div className={`${styles.stepNumber} ${styles[`num_${step.color}`]}`}>
                  {step.num}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations Section */}
      <section id="realisations" className={styles.realisationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Chantiers livrés</span>
            <h2 className={styles.sectionTitle}>Nos réalisations</h2>
          </div>

          <div className={styles.realizationsGrid}>
            {realizations.map((project, idx) => (
              <figure key={idx} className={styles.realizationCard}>
                <div className={styles.projectImage} style={{ backgroundImage: `url(${project.image})` }}></div>
                <figcaption className={styles.projectCaption}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Devis Section */}
      <section id="devis" className={styles.devisSection}>
        <div className={styles.container}>
          <div className={styles.devisLayout}>
            <div className={styles.devisInfo}>
              <span className={styles.sectionLabel}>Devis gratuit</span>
              <h2 className={styles.sectionTitle}>Chiffrons votre projet</h2>
              <p className={styles.formDescription}>
                Donnez-nous les grandes lignes : nous revenons avec une fourchette de budget et un calendrier
                réaliste, gratuitement.
              </p>

              <div className={styles.budgetBox}>
                <p className={styles.budgetTitle}>Repères de budget</p>
                <ul className={styles.budgetList}>
                  <li>Gros œuvre : à partir de 120 000 FCFA / m²</li>
                  <li>Clé en main standard : 210 000 – 280 000 FCFA / m²</li>
                  <li>Clé en main haut de gamme : à partir de 350 000 FCFA / m²</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <label className={styles.formLabel}>
                  <span>Type de projet</span>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choisir…</option>
                    <option value="Maison individuelle">Maison individuelle</option>
                    <option value="Villa">Villa</option>
                    <option value="Immeuble">Immeuble</option>
                    <option value="Extension / rénovation">Extension / rénovation</option>
                    <option value="Plans seuls">Plans seuls</option>
                  </select>
                </label>

                <label className={styles.formLabel}>
                  <span>Surface visée (m²)</span>
                  <input
                    type="number"
                    name="surface"
                    value={formData.surface}
                    onChange={handleChange}
                    placeholder="250"
                    min="20"
                    required
                  />
                </label>
              </div>

              <label className={styles.formLabel}>
                <span>Où se situe le terrain ?</span>
                <input
                  type="text"
                  name="localisation"
                  value={formData.localisation}
                  onChange={handleChange}
                  placeholder="Quartier, ville"
                  required
                />
              </label>

              <div className={styles.formRow}>
                <label className={styles.formLabel}>
                  <span>Terrain déjà acquis ?</span>
                  <select
                    name="terrain"
                    value={formData.terrain}
                    onChange={handleChange}
                  >
                    <option>Oui</option>
                    <option>Non, à trouver avec NORO</option>
                  </select>
                </label>

                <label className={styles.formLabel}>
                  <span>Démarrage souhaité</span>
                  <select
                    name="demarrage"
                    value={formData.demarrage}
                    onChange={handleChange}
                  >
                    <option>Dès que possible</option>
                    <option>Dans 3 à 6 mois</option>
                    <option>Dans plus de 6 mois</option>
                  </select>
                </label>
              </div>

              <div className={styles.formRow}>
                <label className={styles.formLabel}>
                  <span>Nom complet</span>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Cheikh Ndiaye"
                    required
                  />
                </label>

                <label className={styles.formLabel}>
                  <span>Téléphone / WhatsApp</span>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="+221 +221 77 792 39 06"
                    required
                  />
                </label>
              </div>

              <label className={styles.formLabel}>
                <span>Votre projet en quelques mots</span>
                <textarea
                  name="projet"
                  value={formData.projet}
                  onChange={handleChange}
                  placeholder="Nombre de chambres, étages, finitions souhaitées…"
                  rows="3"
                />
              </label>

              <button type="submit" className={styles.submitButton}>
                Recevoir mon devis
              </button>

              {sent && (
                <p className={styles.successMessage}>
                  Demande reçue. Notre bureau d'études vous rappelle sous 72h.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Pas encore de terrain pour construire ?</h2>
              <p className={styles.ctaDesc}>
                Nos lotissements sont viabilisés, sous titre foncier, avec paiement échelonné possible.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <Link to="/programmes" className={styles.buttonPrimary}>Voir les programmes</Link>
              <Link to="/acheter" className={styles.buttonSecondary}>Terrains disponibles</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
