import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ContactPage.module.css'
import SEO from '../components/SEO'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    typeDemande: '',
    pays: 'Sénégal',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `
*Nouvelle demande de contact - NORO Immobilier*

Nom: ${formData.nom}
Téléphone: ${formData.telephone}
Email: ${formData.email}
Type de demande: ${formData.typeDemande}
Écrit de: ${formData.pays}

Message:
${formData.message}
    `.trim()

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/221770000000?text=${encodedMessage}`, '_blank')

    setSent(true)
    setTimeout(() => {
      setSent(false)
      setFormData({
        nom: '',
        telephone: '',
        email: '',
        typeDemande: '',
        pays: 'Sénégal',
        message: '',
      })
    }, 3000)
  }

  return (
    <>
      <SEO
        title="Nous contacter | NORO Immobilier"
        description="Contactez l'agence immobilière NORO. Formulaire en ligne, WhatsApp, téléphone. Réponse rapide garantie."
        canonicalUrl="https://noro-immobilier.sn/contact"/>
      <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>Contact</span>
          </nav>
          <h1 className={styles.title}>Parlons de votre projet</h1>
          <p className={styles.description}>
            Achat, location, construction ou gestion : un conseiller NORO vous répond sous 24h, au Sénégal comme depuis l'étranger.
          </p>
        </div>
      </section>

      {/* Contact Quick Cards */}
      <section className={styles.contactCardsSection}>
        <div className={styles.contactCardsContainer}>
          <a href="https://wa.me/221770000000" className={styles.contactCard}>
            <span className={styles.contactIconBox} style={{ background: '#25D366' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4-2.4 10 10 0 0 1-2-3c-.2-.6-.3-1.3 0-1.8.2-.4.6-.8 1-1 .3-.1.7 0 .9.3l.8 1.4c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.4 0 .6.5.9 1.5 1.9 2.5 2.4.2.1.4 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.8c.2.1.3.4.3.6 0 .1 0 .2-.1.3Z" />
              </svg>
            </span>
            <span className={styles.contactCardText}>
              <strong>WhatsApp</strong>
              <br />
              <span className={styles.contactCardSubtext}>+221 77 000 00 00 — réponse rapide</span>
            </span>
          </a>

          <a href="tel:+221338000000" className={styles.contactCard}>
            <span className={styles.contactIconBox} style={{ background: '#0A4D9B' }}>
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z" />
              </svg>
            </span>
            <span className={styles.contactCardText}>
              <strong>Téléphone</strong>
              <br />
              <span className={styles.contactCardSubtext}>+221 33 800 00 00 — Lun-Sam 8h30-19h</span>
            </span>
          </a>

          <a href="mailto:contact@noroimmo.sn" className={styles.contactCard}>
            <span className={styles.contactIconBox} style={{ background: '#F57C00' }}>
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2.5 6.5 9.5 6.5 9.5-6.5" />
              </svg>
            </span>
            <span className={styles.contactCardText}>
              <strong>E-mail</strong>
              <br />
              <span className={styles.contactCardSubtext}>contact@noroimmo.sn</span>
            </span>
          </a>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className={styles.formSection}>
        <div className={styles.formGrid}>
          {/* Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <h2 className={styles.formTitle}>Écrivez-nous</h2>
              <p className={styles.formSubtitle}>Tous les champs marqués sont nécessaires pour vous répondre utilement.</p>
            </div>

            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className={styles.formLabelText}>Nom complet</span>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  placeholder="Aminata Diop"
                />
              </label>
              <label className={styles.formLabel}>
                <span className={styles.formLabelText}>Téléphone / WhatsApp</span>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  placeholder="+221 77 000 00 00"
                />
              </label>
            </div>

            <label className={styles.formLabel}>
              <span className={styles.formLabelText}>E-mail</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="vous@email.com"
              />
            </label>

            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className={styles.formLabelText}>Votre demande</span>
                <select name="typeDemande" value={formData.typeDemande} onChange={handleChange} required>
                  <option value="">Choisir…</option>
                  <option>Acheter un bien</option>
                  <option>Louer un bien</option>
                  <option>Faire estimer / vendre</option>
                  <option>Gestion locative</option>
                  <option>Construction</option>
                  <option>Réserver un lot</option>
                  <option>Autre</option>
                </select>
              </label>
              <label className={styles.formLabel}>
                <span className={styles.formLabelText}>Vous nous écrivez de</span>
                <select name="pays" value={formData.pays} onChange={handleChange}>
                  <option>Sénégal</option>
                  <option>France</option>
                  <option>Italie / Espagne</option>
                  <option>Amérique du Nord</option>
                  <option>Autre pays</option>
                </select>
              </label>
            </div>

            <label className={styles.formLabel}>
              <span className={styles.formLabelText}>Votre message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Décrivez votre projet, votre budget et vos zones préférées…"
              ></textarea>
            </label>

            <button type="submit" className={styles.submitButton}>
              Envoyer ma demande
            </button>

            {sent && (
              <p className={styles.successMessage}>
                Message envoyé. Nous vous répondons sous 24h ouvrées.
              </p>
            )}

            <p className={styles.privacyNote}>
              Vos coordonnées servent uniquement à traiter votre demande et ne sont jamais revendues.
            </p>
          </form>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            {/* Map */}
            <div className={styles.mapContainer}>
              <iframe
                title="Carte — Sacré-Cœur 3, Dakar"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-17.49%2C14.69%2C-17.43%2C14.73&layer=mapnik"
                style={{ width: '100%', height: '100%', border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            {/* Agency Info */}
            <div className={styles.agencyBox}>
              <h3 className={styles.agencyTitle}>Notre agence</h3>
              <div className={styles.agencyInfo}>
                <p>
                  <strong>Adresse</strong>
                  <br />
                  Sacré-Cœur 3, VDN — Dakar, Sénégal
                </p>
                <p>
                  <strong>Horaires</strong>
                  <br />
                  Lundi – Vendredi : 8h30 – 19h
                  <br />
                  Samedi : 9h – 14h · Dimanche : fermé
                </p>
                <p>
                  <strong>Rendez-vous</strong>
                  <br />
                  Sur place, en visio ou sur site — au choix.
                </p>
              </div>

              {/* Social Icons */}
              <div className={styles.socialLinks}>
                <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.5l.5-3H13v-2c0-.6.4-1 1-1Z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" aria-label="TikTok" className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 3h-3v11.2a2.3 2.3 0 1 1-2.3-2.3c.2 0 .5 0 .7.1V9a5.3 5.3 0 1 0 4.6 5.2V8.6c1 .7 2.1 1.1 3.4 1.2V6.9a3.9 3.9 0 0 1-3.4-3.9Z" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className={styles.socialIcon}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing before footer */}
      <div style={{ height: '80px' }}></div>
    </div>
    </>
  )
}
