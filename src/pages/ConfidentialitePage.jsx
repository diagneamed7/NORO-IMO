import { Link } from 'react-router-dom'
import styles from './LegalPages.module.css'

import SEO from '../components/SEO'
export default function ConfidentialitePage() {
  return (
    <>
      <SEO
        title="Politique de confidentialité | NORO Immobilier"
        description="Politique de confidentialité de NORO Immobilier. Protection des données personnelles et transparence."
        canonicalUrl="https://noro-immobilier.sn/confidentialite"/>
      <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>Confidentialité</span>
          </nav>
          <h1 className={styles.title}>Politique de confidentialité</h1>
          <p className={styles.description}>
            Quelles données nous collectons quand vous nous écrivez, à quoi elles servent, combien de temps nous les gardons et comment les faire supprimer.
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
                <strong>Document à finaliser.</strong> Durée de conservation et champs entre crochets à confirmer, puis relecture par un juriste sénégalais avant publication.
              </p>
            </div>

            {/* Données collectées */}
            <h2 id="donnees" className={styles.sectionTitle}>Données collectées</h2>
            <p className={styles.sectionText}>
              Dans le cadre de l'utilisation de ce site, NORO Immobilier peut collecter les données suivantes lorsque vous remplissez un formulaire — contact, demande de rendez-vous, demande de devis, demande d'estimation :
            </p>
            <ul className={styles.itemsList}>
              <li>Nom et prénom</li>
              <li>Numéro de téléphone / WhatsApp</li>
              <li>Adresse e-mail</li>
              <li>Informations relatives à votre projet immobilier : type de bien recherché, budget, localisation souhaitée</li>
            </ul>

            {/* Finalité du traitement */}
            <h2 id="finalite" className={styles.sectionTitle}>Finalité du traitement</h2>
            <p className={styles.sectionText}>Ces données sont utilisées exclusivement pour :</p>
            <ul className={styles.checkmarkList}>
              <li>
                <span className={styles.checkmark}>✓</span> Répondre à vos demandes de contact, de rendez-vous ou de devis
              </li>
              <li>
                <span className={styles.checkmark}>✓</span> Vous accompagner dans votre projet d'achat, de vente, de location ou de gestion locative
              </li>
              <li>
                <span className={styles.checkmark}>✓</span> Améliorer la qualité de nos services
              </li>
            </ul>

            {/* Partage des données */}
            <h2 id="partage" className={styles.sectionTitle}>Partage des données</h2>
            <p className={styles.sectionText}>
              Vos données ne sont ni vendues, ni louées, ni partagées avec des tiers à des fins commerciales. Elles peuvent être transmises aux partenaires strictement nécessaires à la réalisation de votre demande — notaire, partenaire bancaire — avec votre accord préalable.
            </p>

            {/* Durée de conservation */}
            <h2 id="conservation" className={styles.sectionTitle}>Durée de conservation</h2>
            <p className={styles.sectionText}>
              Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, et au maximum <span style={{ color: '#8A929C' }}>[3 ans]</span> après notre dernier contact, sauf obligation légale contraire.
            </p>

            {/* Vos droits */}
            <h2 id="droits" className={styles.sectionTitle}>Vos droits</h2>
            <p className={styles.sectionText}>
              Conformément à la loi sénégalaise n° 2008-12 du 25 janvier 2008 relative à la protection des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
            </p>
            <div className={styles.ctaBox}>
              <p>Exercer vos droits</p>
              <p>Écrivez-nous en précisant votre demande : nous vous répondons sous 30 jours.</p>
              <a href="mailto:immonoro@gmail.com" className={styles.ctaButton}>
                immonoro@gmail.com
              </a>
            </div>

            {/* Cookies */}
            <h2 id="cookies" className={styles.sectionTitle}>Cookies</h2>
            <p className={styles.sectionText}>
              Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement, par exemple la préférence de langue. Aucun cookie publicitaire tiers n'est utilisé sans votre consentement.
            </p>

            {/* Footer Links */}
            <div className={styles.footerLinks}>
              <Link to="/mentions-legales" className={styles.linkPill}>
                Mentions légales →
              </Link>
              <Link to="/cgu" className={styles.linkPill}>
                Conditions d'utilisation →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <p className={styles.tocLabel}>Sur cette page</p>
            <nav className={styles.tocNav}>
              <a href="#donnees">Données collectées</a>
              <a href="#finalite">Finalité du traitement</a>
              <a href="#partage">Partage des données</a>
              <a href="#conservation">Durée de conservation</a>
              <a href="#droits">Vos droits</a>
              <a href="#cookies">Cookies</a>
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
