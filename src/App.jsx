import { useEffect, useState } from 'react'
import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PropertyGrid } from './components/PropertyGrid'
import { Programmes } from './components/Programmes'
import { Services } from './components/Services'
import { Simulateur } from './components/Simulateur'
import { Testimonials } from './components/Testimonials'
import { CtaBand } from './components/CtaBand'
import { Footer, WhatsAppFloat } from './components/Footer'
import { ContactModal } from './components/ContactModal'
import { useProperties } from './data/useProperties'
import logoSrc from './assets/noro-logo.jpeg'

function App() {
  const { properties, loading } = useProperties()
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactModalType, setContactModalType] = useState('contact')

  const openContact = (type = 'contact') => {
    setContactModalType(type)
    setContactModalOpen(true)
  }

  useEffect(() => {
    const handleOpenModal = (event) => {
      openContact(event.detail?.type || 'contact')
    }
    window.addEventListener('openContactModal', handleOpenModal)
    return () => window.removeEventListener('openContactModal', handleOpenModal)
  }, [])

  if (loading) {
    return <div>Chargement...</div>
  }

  return (
    <>
      <TopBar onOpenContact={openContact} />
      <Header onOpenContact={openContact} />
      <Hero onOpenContact={openContact} />
      <PropertyGrid properties={properties} />
      <Programmes />
      <Services />
      <Simulateur />
      <Testimonials />
      <CtaBand onOpenContact={openContact} />
      <Footer logoSrc={logoSrc} />
      <WhatsAppFloat />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        type={contactModalType}
      />
    </>
  )
}

export default App
