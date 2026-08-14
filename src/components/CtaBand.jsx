export function CtaBand({ onOpenContact }) {
  return (
    <div className="cta-band" id="contact-cta">
      <h2>Pret a concretiser votre projet immobilier ?</h2>
      <p>Ou que vous soyez, notre equipe vous repond et vous accompagne pas a pas.</p>
      <div className="cta-actions">
        <a href="https://wa.me/221770000000" target="_blank" rel="noreferrer" className="btn-primary">
          Discuter sur WhatsApp
        </a>
        <a
          href="#"
          className="btn-ghost-white"
          onClick={(e) => {
            e.preventDefault()
            onOpenContact('rdv')
          }}
        >
          Prendre rendez-vous
        </a>
      </div>
    </div>
  )
}
