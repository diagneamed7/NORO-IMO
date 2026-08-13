import { useEffect, useState } from 'react'
import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PropertyGrid } from './components/PropertyGrid'
import { ContactModal } from './components/ContactModal'
import { Services } from './components/Services'
import { Footer } from './components/Footer'
import { useProperties } from './data/useProperties'

function App() {
  const { properties, loading } = useProperties()
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactModalType, setContactModalType] = useState('contact')

  useEffect(() => {
    const handleOpenModal = (event) => {
      const type = event.detail?.type || 'contact'
      setContactModalType(type)
      setContactModalOpen(true)
    }

    window.addEventListener('openContactModal', handleOpenModal)
    return () => window.removeEventListener('openContactModal', handleOpenModal)
  }, [])

  if (loading) {
    return <div>Chargement...</div>
  }

  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <PropertyGrid properties={properties} />
      <Services />
      <Footer />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        type={contactModalType}
      />
    </>
  )
}

export default App
