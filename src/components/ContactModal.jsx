import { useEffect, useState } from 'react'

export function ContactModal({ isOpen, onClose, type = 'contact' }) {
  const [isActive, setIsActive] = useState(isOpen)
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
  })

  useEffect(() => {
    setIsActive(isOpen)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    setIsActive(false)
    setTimeout(onClose, 300)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let message = ''
    if (type === 'rdv') {
      message = `Bonjour,\n\nJe souhaite prendre un rendez-vous.\n\nMon nom : ${formData.nom}\nMon email : ${formData.email}\nMon téléphone : ${formData.telephone}\n\nMessage : ${formData.message}`
    } else if (type === 'devis') {
      message = `Bonjour,\n\nJe souhaite demander un devis.\n\nMon nom : ${formData.nom}\nMon email : ${formData.email}\nMon téléphone : ${formData.telephone}\n\nDétails de ma demande : ${formData.message}`
    } else {
      message = `Bonjour,\n\nMon nom : ${formData.nom}\nMon email : ${formData.email}\nMon téléphone : ${formData.telephone}\n\nMessage : ${formData.message}`
    }

    const whatsappUrl = `https://wa.me/221775000000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    handleClose()
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const titles = {
    rdv: 'Prendre un rendez-vous',
    devis: 'Demander un devis',
    contact: 'Nous contacter',
  }

  return (
    <div className={`modal-overlay ${isActive ? 'active' : ''}`} onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          ✕
        </button>

        <h2 className="modal-title">{titles[type] || 'Nous contacter'}</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom complet *</label>
            <input
              id="nom"
              name="nom"
              type="text"
              required
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre nom"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Téléphone *</label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              required
              value={formData.telephone}
              onChange={handleChange}
              placeholder="+221 77 000 00 00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={
                type === 'rdv'
                  ? 'Décrivez vos besoins...'
                  : type === 'devis'
                  ? 'Détails de votre demande de devis...'
                  : 'Votre message...'
              }
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Envoyer via WhatsApp
            </button>
            <button type="button" className="btn-secondary" onClick={handleClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
