import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './GestionLocativePage.module.css'
import SEO from '../components/SEO'

export default function GestionLocativePage() {
  const [formData, setFormData] = useState({
    type: '',
    lots: '',
    localisation: '',
    residence: 'Au Sénégal',
    nom: '',
    telephone: '',
    precisions: '',
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
*Demande de mise en gestion - NORO Immobilier*

Type de bien: ${formData.type}
Nombre de lots: ${formData.lots}
Localisation: ${formData.localisation}
Résidence: ${formData.residence}
Précisions: ${formData.precisions}

Nom: ${formData.nom}
Téléphone: ${formData.telephone}
    `.trim()

    // Send to WhatsApp
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/221770000000?text=${encodedMessage}`, '_blank')

    setSent(true)
    setTimeout(() => {
      setSent(false)
      setFormData({
        type: '',
        lots: '',
        localisation: '',
        residence: 'Au Sénégal',
        nom: '',
        telephone: '',
        precisions: '',
      })
    }, 3000)
  }

  return (
    <>
      <SEO
        title="Gestion locative de propriétés | NORO Immobilier"
        description="Service de gestion locative complet : encaissement des loyers, entretien, rapport mensuel. Idéal pour les propriétaires bailleurs au Sénégal et en diaspora."
        canonicalUrl="https://noro-immobilier.sn/gestionlocative"/>
      <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection} style={{
        position: 'relative',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'flex-end',
        isolation: 'isolate',
        backgroundImage: 'url(https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?fm=jpg&q=70&w=1800&auto=format&fit=crop)',
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
            <span>Gestion locative</span>
          </nav>
          <h1 className={styles.title}>Votre bien géré comme si vous étiez sur place</h1>
          <p className={styles.description}>
            Encaissement des loyers, entretien, relances, rapports mensuels : NORO prend la main sur la vie
            quotidienne de votre bien, au Sénégal comme depuis l'étranger.
          </p>
          <div className={styles.heroButtons}>
            <a href="#mandat" className={styles.buttonPrimary}>Confier mon bien</a>
            <a href="#prestations" className={styles.buttonSecondary}>Voir les prestations</a>
          </div>
        </div>
      </section>

      {/* Prestations Section */}
      <section id="prestations" className={styles.prestationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Ce que comprend le mandat</span>
            <h2 className={styles.sectionTitle}>Nos prestations de gestion</h2>
          </div>

          <div className={styles.servicesGrid}>
            {[
              {
                title: 'Encaissement des loyers',
                desc: 'Quittances émises, loyers reversés à date fixe, relances en cas de retard.',
                color: 'primary',
              },
              {
                title: 'Entretien & réparations',
                desc: 'Artisans vérifiés, devis soumis avant intervention, suivi photo des travaux.',
                color: 'accent',
              },
              {
                title: 'Rapport mensuel',
                desc: 'Encaissements, charges, incidents et solde net, envoyés par e-mail ou WhatsApp.',
                color: 'primary',
              },
              {
                title: 'Sélection du locataire',
                desc: 'Dossiers étudiés, garanties contrôlées, bail et état des lieux rédigés.',
                color: 'accent',
              },
              {
                title: 'Sécurité juridique',
                desc: 'Baux conformes, gestion des congés et des litiges, appui d\'un huissier partenaire.',
                color: 'primary',
              },
              {
                title: 'Interlocuteur diaspora',
                desc: 'Un conseiller dédié, joignable sur votre fuseau horaire, virements internationaux acceptés.',
                color: 'accent',
              },
            ].map((service, idx) => (
              <div key={idx} className={styles.serviceCard}>
                <div className={`${styles.serviceIcon} ${styles[`icon_${service.color}`]}`}>
                  {service.color === 'primary' ? '📋' : '🔧'}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceText}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>7%</div>
              <div className={styles.statLabel}>d'honoraires sur les loyers encaissés</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>130<span className={styles.accent}>+</span></div>
              <div className={styles.statLabel}>lots en gestion pour nos clients</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>96<span className={styles.accent}>%</span></div>
              <div className={styles.statLabel}>de taux d'occupation moyen</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>48h</div>
              <div className={styles.statLabel}>délai moyen d'intervention technique</div>
            </div>
          </div>
        </div>
      </section>

      {/* Diaspora Section */}
      <section className={styles.diasporaSection}>
        <div className={styles.container}>
          <div className={styles.diasporaLayout}>
            <div className={styles.diasporaText}>
              <span className={styles.sectionLabel}>Propriétaires à l'étranger</span>
              <h2 className={styles.sectionTitle}>Pensé pour la diaspora</h2>
              <ul className={styles.benefitsList}>
                <li>✓ Mise en gestion à distance, par procuration notariée</li>
                <li>✓ Reversement par virement international ou mobile money</li>
                <li>✓ Visites vidéo du bien sur simple demande</li>
                <li>✓ Suivi des taxes et charges locales à votre place</li>
              </ul>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <blockquote className={styles.testimonialText}>
                « NORO gère mon immeuble à Keur Massar depuis deux ans. Les loyers arrivent à date fixe et
                je reçois un rapport clair chaque mois. »
              </blockquote>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}></div>
                <div>
                  <div className={styles.authorName}>Ousmane F.</div>
                  <div className={styles.authorRole}>Propriétaire bailleur, Dakar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="mandat" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formInfo}>
              <span className={styles.sectionLabel}>Mise en gestion</span>
              <h2 className={styles.sectionTitle}>Confiez-nous votre bien</h2>
              <p className={styles.formDescription}>
                Décrivez votre bien : nous vous envoyons une proposition de mandat détaillée, honoraires
                et prestations inclus, sous 72h.
              </p>
            </div>

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
                    <option value="Appartement">Appartement</option>
                    <option value="Maison">Maison</option>
                    <option value="Villa">Villa</option>
                    <option value="Immeuble">Immeuble</option>
                  </select>
                </label>

                <label className={styles.formLabel}>
                  <span>Nombre de lots</span>
                  <input
                    type="number"
                    name="lots"
                    value={formData.lots}
                    onChange={handleChange}
                    placeholder="1"
                    min="1"
                    required
                  />
                </label>
              </div>

              <label className={styles.formLabel}>
                <span>Localisation du bien</span>
                <input
                  type="text"
                  name="localisation"
                  value={formData.localisation}
                  onChange={handleChange}
                  placeholder="Quartier, ville"
                  required
                />
              </label>

              <label className={styles.formLabel}>
                <span>Vous résidez</span>
                <select
                  name="residence"
                  value={formData.residence}
                  onChange={handleChange}
                >
                  <option>Au Sénégal</option>
                  <option>En Europe</option>
                  <option>En Amérique du Nord</option>
                  <option>Ailleurs</option>
                </select>
              </label>

              <div className={styles.formRow}>
                <label className={styles.formLabel}>
                  <span>Nom complet</span>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Ousmane Fall"
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
                    placeholder="+221 77 000 00 00"
                    required
                  />
                </label>
              </div>

              <label className={styles.formLabel}>
                <span>Précisions</span>
                <textarea
                  name="precisions"
                  value={formData.precisions}
                  onChange={handleChange}
                  placeholder="Bien déjà loué ? Travaux en cours ? Attentes particulières ?"
                  rows="3"
                />
              </label>

              <button type="submit" className={styles.submitButton}>
                Recevoir une proposition de mandat
              </button>

              {sent && (
                <p className={styles.successMessage}>
                  Merci ! Votre demande de mandat est enregistrée, réponse sous 72h.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
