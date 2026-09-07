import { Link } from 'react-router-dom'
import styles from './LegalPages.module.css'

import SEO from '../components/SEO'
export default function CGUPage() {
  return (
    <>
      <SEO
        title="Conditions générales d'utilisation | NORO Immobilier"
        description="Conditions générales d'utilisation du site noro-immobilier.sn. Droits et responsabilités."
        canonicalUrl="https://noro-immobilier.sn/cgu"/>
      <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>Conditions d'utilisation</span>
          </nav>
          <h1 className={styles.title}>Conditions générales d'utilisation</h1>
          <p className={styles.description}>
            Règles d'accès et d'usage du site noro-immobilier.sn, portée des informations publiées et limites de responsabilité.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentGrid}>
          {/* Main Content */}
          <div className={styles.mainContent}>
            {/* Warning Box */}
            <div className={styles.warningBox}>
              <p>
                <strong>Document à finaliser.</strong> À faire relire par un juriste sénégalais avant publication.
              </p>
            </div>

            {/* Objet */}
            <h2 id="objet" className={styles.sectionTitle}>Objet</h2>
            <p className={styles.sectionText}>
              Les présentes conditions générales d'utilisation régissent l'accès et l'utilisation du site noro-immobilier.sn, édité par NORO Immobilier.
            </p>

            {/* Accès au site */}
            <h2 id="acces" className={styles.sectionTitle}>Accès au site</h2>
            <p className={styles.sectionText}>
              Le site est accessible gratuitement à tout utilisateur disposant d'un accès internet. NORO Immobilier met tout en œuvre pour assurer un accès continu au site, sans garantie absolue de disponibilité.
            </p>

            {/* Informations sur les biens */}
            <h2 id="annonces" className={styles.sectionTitle}>Informations sur les biens</h2>
            <p className={styles.sectionText}>
              Les annonces publiées — terrains, maisons, programmes immobiliers — sont fournies à titre indicatif. Les prix, superficies, disponibilités et statuts (disponible, réservé, vendu) sont susceptibles d'évoluer sans préavis. NORO Immobilier s'efforce d'assurer l'exactitude des informations mais ne peut être tenu responsable d'une erreur ou d'un délai de mise à jour.
            </p>

            {/* Simulateur de paiement */}
            <h2 id="simulateur" className={styles.sectionTitle}>Simulateur de paiement</h2>
            <div className={styles.greyBox}>
              <p>
                Le simulateur de mensualités disponible sur le site fournit une estimation indicative et non contractuelle. Les conditions financières réelles — acompte, durée, mensualité — sont fixées exclusivement par accord écrit entre NORO Immobilier et le client.
              </p>
            </div>

            {/* Responsabilité */}
            <h2 id="responsabilite" className={styles.sectionTitle}>Responsabilité</h2>
            <p className={styles.sectionText}>
              NORO Immobilier ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site, d'une interruption de service, ou d'informations erronées transmises par un tiers.
            </p>

            {/* Liens externes */}
            <h2 id="liens" className={styles.sectionTitle}>Liens externes</h2>
            <p className={styles.sectionText}>
              Le site peut contenir des liens vers des plateformes tierces — WhatsApp, réseaux sociaux. NORO Immobilier n'est pas responsable du contenu de ces sites externes.
            </p>

            {/* Droit applicable */}
            <h2 id="droit" className={styles.sectionTitle}>Droit applicable</h2>
            <p className={styles.sectionText}>
              Les présentes conditions sont soumises au droit sénégalais. En cas de litige, les tribunaux sénégalais compétents seront seuls habilités, à défaut de résolution amiable.
            </p>

            {/* Contact */}
            <h2 id="contact" className={styles.sectionTitle}>Contact</h2>
            <p className={styles.sectionText}>
              Pour toute question relative aux présentes conditions : <a href="mailto:contact@noro-immobilier.sn">contact@noro-immobilier.sn</a>
            </p>

            {/* Footer Links */}
            <div className={styles.footerLinks}>
              <Link to="/mentions-legales" className={styles.linkPill}>
                Mentions légales →
              </Link>
              <Link to="/confidentialite" className={styles.linkPill}>
                Politique de confidentialité →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <p className={styles.tocLabel}>Sur cette page</p>
            <nav className={styles.tocNav}>
              <a href="#objet">Objet</a>
              <a href="#acces">Accès au site</a>
              <a href="#annonces">Informations sur les biens</a>
              <a href="#simulateur">Simulateur de paiement</a>
              <a href="#responsabilite">Responsabilité</a>
              <a href="#liens">Liens externes</a>
              <a href="#droit">Droit applicable</a>
              <a href="#contact">Contact</a>
            </nav>
          </aside>
        </div>
      </section>

      {/* Spacing before footer */}
      <div style={{ height: '80px' }}></div>
    </div>
    </>
  )
}
