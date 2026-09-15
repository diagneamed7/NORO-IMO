import { useState } from 'react'
import styles from './ContactModal.module.css'

const CONTACT_CONFIG = {
  rdv: {
    title: 'Prendre rendez-vous',
    subtitle: 'Choisissez un créneau, un conseiller NORO vous confirme le rendez-vous.',
    showDate: true,
  },
  devis: {
    title: 'Demander un devis',
    subtitle: 'Décrivez votre projet, nous vous envoyons un devis personnalisé.',
    showDate: false,
  },
  contact: {
    title: 'Nous contacter',
    subtitle: 'Une question ? Écrivez-nous, nous revenons vers vous rapidement.',
    showDate: false,
  },
}

export default function ContactModal({ isOpen, onClose, type = 'contact' }) {
  const cfg = CONTACT_CONFIG[type] || CONTACT_CONFIG.contact
  const [nom, setNom] = useState('')
  const [tel, setTel] = useState('')
  const [date, setDate] = useState('')
  const [msg, setMsg] = useState('')
  const [feedback, setFeedback] = useState(null)

  const submit = () => {
    if (!nom.trim() || !tel.trim()) {
      setFeedback({ error: true, text: 'Merci de renseigner au moins votre nom et votre téléphone.' })
      return
    }
    let text = `Bonjour NORO Immobilier, je souhaite : ${cfg.title}.\nNom : ${nom}\nTéléphone : ${tel}`
    if (cfg.showDate && date) text += `\nDate souhaitée : ${date}`
    if (msg) text += `\nMessage : ${msg}`

    window.open(`https://wa.me/221777923906?text=${encodeURIComponent(text)}`, '_blank')
    setFeedback({
      error: false,
      text: 'Votre demande a été préparée et ouverte dans WhatsApp. Envoyez le message pour la transmettre à NORO Immobilier.',
    })
  }

  const handleClose = () => {
    setNom('')
    setTel('')
    setDate('')
    setMsg('')
    setFeedback(null)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose()
      }}
    >
      <div className={styles.modal}>
        <button className={styles.close} onClick={handleClose}>
          ✕
        </button>
        <p className={styles.eyebrow}>NORO Immobilier</p>
        <h3 className={styles.title}>{cfg.title}</h3>
        <p className={styles.subtitle}>{cfg.subtitle}</p>

        <div className={styles.fields}>
          <div className={styles.field}>
            <label>Nom complet</label>
            <input
              type="text"
              placeholder="Votre nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label>Téléphone / WhatsApp</label>
            <input
              type="tel"
              placeholder="+221 77 792 39 06"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          {cfg.showDate && (
            <div className={styles.field}>
              <label>Date souhaitée</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          )}
          <div className={styles.field}>
            <label>Message</label>
            <input
              type="text"
              placeholder="Précisez votre besoin"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
        </div>

        {feedback && (
          <div className={`${styles.feedback} ${feedback.error ? styles.error : styles.success}`}>
            {feedback.text}
          </div>
        )}

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={submit}>
            Envoyer via WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}
