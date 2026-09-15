import { Link } from 'react-router-dom'
import styles from './LegalPages.module.css'

import SEO from '../components/SEO'
export default function MentionsLegalesPage() {
  return (
    <>
      <SEO
        title="Mentions légales | NORO Immobilier"
        description="Mentions légales et informations sur l'agence NORO Immobilier, hébergement et propriété intellectuelle."
        canonicalUrl="https://noro-immobilier.sn/mentionslegales"/>
      <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>Mentions légales</span>
          </nav>
          <h1 className={styles.title}>Mentions légales</h1>
          <p className={styles.description}>
            Informations relatives à l'éditeur du site noro-immobilier.sn et aux droits attachés à ses contenus.
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
                <strong>Document à finaliser.</strong> Les éléments entre crochets doivent être complétés avec les informations réelles de l'entreprise, et l'ensemble relu par un juriste ou un comptable sénégalais avant publication.
              </p>
            </div>

            {/* Éditeur du site */}
            <h2 id="editeur" className={styles.sectionTitle}>Éditeur du site</h2>
            <div className={styles.editorTable}>
              <div className={styles.editorTableRow}>
                <div className={styles.editorTableLabel}>Dénomination</div>
                <div className={styles.editorTableValue}>NORO Immobilier</div>
              </div>
              <div className={styles.editorTableRow}>
                <div className={styles.editorTableLabel}>Forme juridique</div>
                <div className={`${styles.editorTableValue} ${styles.placeholder}`}>
                  [SARL / Entreprise individuelle / etc.]
                </div>
              </div>
              <div className={styles.editorTableRow}>
                <div className={styles.editorTableLabel}>Siège social</div>
                <div className={`${styles.editorTableValue} ${styles.placeholder}`}>
                  [adresse complète, Dakar, Sénégal]
                </div>
              </div>
              <div className={styles.editorTableRow}>
                <div className={styles.editorTableLabel}>RCCM</div>
                <div className={`${styles.editorTableValue} ${styles.placeholder}`}>
                  [numéro Registre du Commerce et du Crédit Mobilier]
                </div>
              </div>
              <div className={styles.editorTableRow}>
                <div className={styles.editorTableLabel}>NINEA</div>
                <div className={`${styles.editorTableValue} ${styles.placeholder}`}>
                  [numéro d'identification fiscale]
                </div>
              </div>
              <div className={styles.editorTableRow}>
                <div className={styles.editorTableLabel}>Téléphone</div>
                <div className={styles.editorTableValue}>
                  <a href="tel:+221770000000">+221 +221 77 792 39 06</a>
                </div>
              </div>
              <div className={styles.editorTableRow}>
                <div className={styles.editorTableLabel}>E-mail</div>
                <div className={styles.editorTableValue}>
                  <a href="mailto:immonoro@gmail.com">immonoro@gmail.com</a>
                </div>
              </div>
              <div className={styles.editorTableRow}>
                <div className={styles.editorTableLabel}>Directeur de la publication</div>
                <div className={`${styles.editorTableValue} ${styles.placeholder}`}>
                  [nom du représentant légal]
                </div>
              </div>
            </div>

            {/* Hébergement */}
            <h2 id="hebergement" className={styles.sectionTitle}>Hébergement</h2>
            <p className={styles.sectionText}>
              Ce site est hébergé par Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis — <a href="https://www.netlify.com">www.netlify.com</a>.
            </p>

            {/* Propriété intellectuelle */}
            <h2 id="propriete" className={styles.sectionTitle}>Propriété intellectuelle</h2>
            <p className={styles.sectionText}>
              L'ensemble des contenus présents sur ce site — textes, images, logos, graphismes, structure — sont la propriété exclusive de NORO Immobilier, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
            </p>

            {/* Activité réglementée */}
            <h2 id="activite" className={styles.sectionTitle}>Activité réglementée</h2>
            <p className={styles.sectionText}>
              L'activité d'agent immobilier au Sénégal est <span style={{ color: '#8A929C' }}>[préciser si elle est soumise à une carte professionnelle, un agrément, ou une inscription à un ordre ou une association professionnelle — à vérifier auprès des autorités compétentes]</span>.
            </p>

            {/* Footer Links */}
            <div className={styles.footerLinks}>
              <Link to="/confidentialite" className={styles.linkPill}>
                Politique de confidentialité →
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
              <a href="#editeur">Éditeur du site</a>
              <a href="#hebergement">Hébergement</a>
              <a href="#propriete">Propriété intellectuelle</a>
              <a href="#activite">Activité réglementée</a>
            </nav>
            <div className={styles.tocDivider}></div>
            <p className={styles.tocQuestion}>Une question sur ces mentions ?</p>
            <a href="mailto:immonoro@gmail.com" className={styles.tocCta}>
              Nous écrire →
            </a>
          </aside>
        </div>
      </section>

      {/* Spacing before footer */}
      <div style={{ height: '80px' }}></div>
    </div>
    </>
  )
}
