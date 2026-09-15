import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './VendrePage.module.css'
import SEO from '../components/SEO'

export default function VendrePage() {
  const [formData, setFormData] = useState({
    type: '',
    superficie: '',
    localisation: '',
    documents: 'Titre foncier',
    description: '',
    nom: '',
    telephone: '',
    email: '',
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
*Demande d'estimation - NORO Immobilier*

Type de bien: ${formData.type}
Superficie: ${formData.superficie} m²
Localisation: ${formData.localisation}
Documents: ${formData.documents}
Description: ${formData.description}

Nom: ${formData.nom}
Téléphone: ${formData.telephone}
Email: ${formData.email}
    `.trim()

    // Send to WhatsApp
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/221777923906?text=${encodedMessage}`, '_blank')

    setSent(true)
    setTimeout(() => {
      setSent(false)
      setFormData({
        type: '',
        superficie: '',
        localisation: '',
        documents: 'Titre foncier',
        description: '',
        nom: '',
        telephone: '',
        email: '',
      })
    }, 3000)
  }

  return (
    <>
      <SEO
        title="Vendre votre bien immobilier | NORO Immobilier"
        description="Vendez votre propriété au Sénégal. Mise en avant, visite en ligne, négociation et accompagnement notarial."
        canonicalUrl="https://noro-immobilier.sn/vendre"/>
      <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>Vendre</span>
          </nav>
          <h1 className={styles.title}>Faites estimer votre bien gratuitement</h1>
          <p className={styles.description}>
            Terrain, maison, villa, appartement ou immeuble : nous évaluons votre bien au prix réel
            du marché de votre quartier et vous remettons une estimation écrite sous 48h.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.processHeader}>
          <span className={styles.sectionLabel}>Comment ça se passe</span>
          <h2 className={styles.sectionTitle}>Le processus d'estimation NORO</h2>
        </div>

        <div className={styles.stepsGrid}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>1</span>
            <h3 className={styles.stepTitle}>Vous nous décrivez le bien</h3>
            <p className={styles.stepText}>
              Le formulaire ci-dessous suffit : type, quartier, superficie et documents disponibles.
            </p>
          </div>

          <div className={styles.step}>
            <span className={styles.stepNumber} style={{ background: 'var(--color-accent)' }}>2</span>
            <h3 className={styles.stepTitle}>Visite sur place</h3>
            <p className={styles.stepText}>
              Un conseiller se rend sur le bien sous 72h, mesure, photographie et vérifie le titre.
            </p>
          </div>

          <div className={styles.step}>
            <span className={styles.stepNumber}>3</span>
            <h3 className={styles.stepTitle}>Évaluation chiffrée</h3>
            <p className={styles.stepText}>
              Prix au m² du quartier, comparables vendus, fourchette basse et haute, délai estimé.
            </p>
          </div>

          <div className={styles.step}>
            <span className={styles.stepNumber} style={{ background: 'var(--color-accent)' }}>4</span>
            <h3 className={styles.stepTitle}>Offre sous 48h</h3>
            <p className={styles.stepText}>
              Estimation écrite + proposition de mandat, sans engagement de votre part.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formWrapper}>
          {/* Left Column - Info */}
          <div className={styles.formInfo}>
            <span className={styles.sectionLabel}>Demande d'estimation</span>
            <h2 className={styles.sectionTitle}>Parlez-nous de votre bien</h2>
            <p className={styles.formDescription}>
              Estimation gratuite et sans engagement. Vos informations restent confidentielles et ne
              sont jamais transmises à des tiers.
            </p>

            <ul className={styles.benefitsList}>
              <li>
                <span className={styles.checkmark}>✓</span>
                Réponse écrite sous 48h ouvrées
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Vérification du titre foncier incluse
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Possible depuis l'étranger, par procuration
              </li>
            </ul>

            <div className={styles.whatsappBox}>
              <p className={styles.whatsappText}>Vous préférez parler à quelqu'un ?</p>
              <a href="https://wa.me/221777923906" className={styles.whatsappButton}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4-2.4 10 10 0 0 1-2-3c-.2-.6-.3-1.3 0-1.8.2-.4.6-.8 1-1 .3-.1.7 0 .9.3l.8 1.4c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.4 0 .6.5.9 1.5 1.9 2.5 2.4.2.1.4 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.8c.2.1.3.4.3.6 0 .1 0 .2-.1.3Z" />
                </svg>
                WhatsApp +221 77 792 39 06
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span>Type de bien</span>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisir…</option>
                  <option value="Terrain">Terrain</option>
                  <option value="Maison">Maison</option>
                  <option value="Villa">Villa</option>
                  <option value="Appartement">Appartement</option>
                  <option value="Immeuble">Immeuble</option>
                </select>
              </label>

              <label className={styles.formLabel}>
                <span>Superficie (m²)</span>
                <input
                  type="number"
                  name="superficie"
                  value={formData.superficie}
                  onChange={handleChange}
                  placeholder="300"
                  min="1"
                  required
                />
              </label>
            </div>

            <label className={styles.formLabel}>
              <span>Localisation</span>
              <input
                type="text"
                name="localisation"
                value={formData.localisation}
                onChange={handleChange}
                placeholder="Quartier, ville (ex. Tivaoune Peulh Apix, Cite Socabeg)"
                required
              />
            </label>

            <label className={styles.formLabel}>
              <span>Documents disponibles</span>
              <select
                name="documents"
                value={formData.documents}
                onChange={handleChange}
              >
                <option>Titre foncier</option>
                <option>Bail</option>
                <option>Délibération</option>
                <option>Acte de vente</option>
                <option>Je ne sais pas</option>
              </select>
            </label>

            <label className={styles.formLabel}>
              <span>Description du bien</span>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Nombre de chambres, état, année de construction, particularités…"
                rows="4"
              />
            </label>

            <div className={styles.formDivider} />

            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span>Nom complet</span>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Aminata Diop"
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
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="vous@email.com"
                required
              />
            </label>

            <button type="submit" className={styles.submitButton}>
              Demander mon estimation gratuite
            </button>

            {sent && (
              <p className={styles.successMessage}>
                Demande enregistrée. Un conseiller NORO vous contacte sous 48h ouvrées.
              </p>
            )}

            <p className={styles.disclaimer}>
              En envoyant ce formulaire, vous acceptez d'être contacté par NORO Immobilier au
              sujet de votre bien.
            </p>
          </form>
        </div>
      </section>
    </div>
    </>
  )
}
