import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
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

function Layout({ children }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/acheter" element={<Layout><AcheterPage /></Layout>} />
        <Route path="/louer" element={<Layout><LouerPage /></Layout>} />
        <Route path="/vendre" element={<Layout><VendrePage /></Layout>} />
        <Route path="/gestion-locative" element={<Layout><GestionLocativePage /></Layout>} />
        <Route path="/construction" element={<Layout><ConstructionPage /></Layout>} />
        <Route path="/programmes" element={<Layout><ProgrammesPage /></Layout>} />
        <Route path="/programmes/:id" element={<Layout><FicheProgrammePage /></Layout>} />
        <Route path="/biens/:slug" element={<Layout><FicheBienPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/mentions-legales" element={<Layout><MentionsLegalesPage /></Layout>} />
        <Route path="/confidentialite" element={<Layout><ConfidentialitePage /></Layout>} />
        <Route path="/cgu" element={<Layout><CGUPage /></Layout>} />
      </Routes>
    </Router>
  )
}
