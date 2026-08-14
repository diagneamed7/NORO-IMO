import { useState } from 'react'

const CONTACT_CONFIG = {
  rdv: {
    title: 'Prendre rendez-vous',
    subtitle: 'Choisissez un creneau, un conseiller NORO vous confirme le rendez-vous.',
    showDate: true,
  },
  devis: {
    title: 'Demander un devis',
    subtitle: 'Decrivez votre projet, nous vous envoyons un devis personnalise.',
    showDate: false,
  },
  contact: {
    title: 'Nous contacter',
    subtitle: 'Une question ? Ecrivez-nous, nous revenons vers vous rapidement.',
    showDate: false,
  },
}

export function ContactModal({ isOpen, onClose, type = 'contact' }) {
  const cfg = CONTACT_CONFIG[type] || CONTACT_CONFIG.contact
  const [nom, setNom] = useState('')
  const [tel, setTel] = useState('')
  const [date, setDate] = useState('')
  const [msg, setMsg] = useState('')
  const [feedback, setFeedback] = useState(null)

  const submit = () => {
    if (!nom.trim() || !tel.trim()) {
      setFeedback({ error: true, text: 'Merci de renseigner au moins votre nom et votre telephone.' })
      return
    }
    let text = `Bonjour NORO Immobilier, je souhaite : ${cfg.title}.\nNom : ${nom}\nTelephone : ${tel}`
    if (cfg.showDate && date) text += `\nDate souhaitee : ${date}`
    if (msg) text += `\nMessage : ${msg}`

    window.open(`https://wa.me/221770000000?text=${encodeURIComponent(text)}`, '_blank')
    setFeedback({
      error: false,
      text: 'Votre demande a ete preparee et ouverte dans WhatsApp. Envoyez le message pour la transmettre a NORO Immobilier.',
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

  return (
    <div
      className={isOpen ? 'modal-overlay open' : 'modal-overlay'}
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) handleClose()
      }}
    >
      <div className="modal">
        <button className="modal-close" onClick={handleClose}>
          ✕
        </button>
        {isOpen && (
          <>
            <p className="eyebrow">NORO Immobilier</p>
            <h3>{cfg.title}</h3>
            <p className="desc" style={{ marginTop: 6 }}>
              {cfg.subtitle}
            </p>
            <div style={{ marginTop: 20, display: 'grid', gap: 12 }}>
              <div className="field">
                <label>Nom complet</label>
                <input type="text" placeholder="Votre nom" value={nom} onChange={(e) => setNom(e.target.value)} />
              </div>
              <div className="field">
                <label>Telephone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+221 77 000 00 00"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                />
              </div>
              {cfg.showDate && (
                <div className="field" style={{ marginBottom: 12 }}>
                  <label>Date souhaitee</label>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
              )}
              <div className="field">
                <label>Message</label>
                <input
                  type="text"
                  placeholder="Precisez votre besoin (bien, zone, budget...)"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
            </div>
            {feedback && (
              <div
                style={{
                  marginTop: 14,
                  padding: '12px 14px',
                  background: 'var(--gray)',
                  borderRadius: 10,
                  fontSize: '13.5px',
                  color: feedback.error ? '#b3261e' : 'var(--blue-ink)',
                }}
              >
                {feedback.text}
              </div>
            )}
            <div className="modal-actions">
              <button className="btn-primary" style={{ flex: 1 }} onClick={submit}>
                Envoyer via WhatsApp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
