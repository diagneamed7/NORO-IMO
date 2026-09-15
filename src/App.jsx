import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import ContactModal from './components/ContactModal'
import HomePage from './pages/HomePage'
import AcheterPage from './pages/AcheterPage'
import LouerPage from './pages/LouerPage'
import FicheBienPage from './pages/FicheBienPage'
import VendrePage from './pages/VendrePage'
import GestionLocativePage from './pages/GestionLocativePage'
import ConstructionPage from './pages/ConstructionPage'
import ProgrammesPage from './pages/ProgrammesPage'
import FicheProgrammePage from './pages/FicheProgrammePage'
import ContactPage from './pages/ContactPage'
import MentionsLegalesPage from './pages/MentionsLegalesPage'
import ConfidentialitePage from './pages/ConfidentialitePage'
import CGUPage from './pages/CGUPage'

function Layout({ children, openContact }) {
  return (
    <>
      <SiteHeader openContact={openContact} />
      <main>{children}</main>
      <SiteFooter openContact={openContact} />
    </>
  )
}

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactModalType, setContactModalType] = useState('contact')

  const openContact = (type = 'contact') => {
    setContactModalType(type)
    setContactModalOpen(true)
  }

  return (
    <Router>
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        type={contactModalType}
      />
      <Routes>
        <Route path="/" element={<Layout openContact={openContact}><HomePage /></Layout>} />
        <Route path="/acheter" element={<Layout openContact={openContact}><AcheterPage /></Layout>} />
        <Route path="/louer" element={<Layout openContact={openContact}><LouerPage /></Layout>} />
        <Route path="/vendre" element={<Layout openContact={openContact}><VendrePage /></Layout>} />
        <Route path="/gestion-locative" element={<Layout openContact={openContact}><GestionLocativePage /></Layout>} />
        <Route path="/construction" element={<Layout openContact={openContact}><ConstructionPage /></Layout>} />
        <Route path="/programmes" element={<Layout openContact={openContact}><ProgrammesPage /></Layout>} />
        <Route path="/programmes/:id" element={<Layout openContact={openContact}><FicheProgrammePage /></Layout>} />
        <Route path="/biens/:slug" element={<Layout openContact={openContact}><FicheBienPage /></Layout>} />
        <Route path="/contact" element={<Layout openContact={openContact}><ContactPage /></Layout>} />
        <Route path="/mentions-legales" element={<Layout openContact={openContact}><MentionsLegalesPage /></Layout>} />
        <Route path="/confidentialite" element={<Layout openContact={openContact}><ConfidentialitePage /></Layout>} />
        <Route path="/cgu" element={<Layout openContact={openContact}><CGUPage /></Layout>} />
      </Routes>
    </Router>
  )
}
