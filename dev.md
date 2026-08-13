# 🚀 Guide Démarrage Rapide - NORO Immobilier React

## Installation & Lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Générer les données
node scripts/build-data.js

# 3. Copier en dev
mkdir -p public/data
cp data/properties.json public/data/properties.json

# 4. Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

---

## Commandes utiles

```bash
# Développement avec hot-reload
npm run dev

# Build production
npm run build

# Prévisualiser la build
npm run preview

# Regénérer les données
node scripts/build-data.js
```

---

## Structure des composants

```
src/components/
├── TopBar.jsx           → Barre supérieure (contact, socials, devis)
├── Header.jsx           → Menu sticky avec logo et navigation
├── Hero.jsx             → Section hero avec CTA
├── SearchBar.jsx        → Filtres de recherche
├── PropertyCard.jsx     → Carte d'une propriété
├── PropertyGrid.jsx     → Grille de propriétés avec filtrage
├── PropertyModal.jsx    → Modale de détail propriété
├── ContactModal.jsx     → Formulaire de contact/RDV/devis
├── Services.jsx         → 8 services alternant bleu/orange
├── Footer.jsx           → Pied de page
├── Logo.jsx             → Logo SVG
└── RouteDivider.jsx     → Élément SVG (courbe dégradée)
```

---

## Architecture

```
App.jsx
├── TopBar
├── Header
├── Hero
├── SearchBar (dans section gray)
├── PropertyGrid
│   ├── PropertyCard × N
│   └── PropertyModal (conditionnel)
├── Services
├── Footer
└── ContactModal (conditionnel)
```

---

## Données

Les données sont fetchées depuis `/data/properties.json` via le hook `useProperties()`:

```jsx
import { useProperties } from './data/useProperties'

function MyComponent() {
  const { properties, loading, error } = useProperties()
  // properties = [{ id, zone, type, prix, statut, ... }]
}
```

---

## Variables CSS (tokens)

Éditer `src/styles/tokens.css`:

```css
--blue: #0A4D9B        /* Bleu principal */
--orange: #F57C00      /* Orange accent */
--ink: #222222         /* Texte foncé */
--gray: #F5F5F5        /* Gris clair */
/* ... etc */
```

---

## Ajouter une propriété

1. Via l'admin Decap CMS : `http://localhost:5173/admin/`
2. Ou créer un fichier JSON dans `content/biens/`
3. Relancer : `node scripts/build-data.js`

---

## Mobile

Le site est 100% responsive:
- Desktop: 3 colonnes
- Tablet: 2 colonnes
- Mobile: 1 colonne + burger menu

---

## WhatsApp Integration

Tous les appels à l'action ouvrent WhatsApp pré-rempli:
- Message personnalisé par propriété
- Support de la numérotation internationale
- Numéro: `+221 77 500 00 00`

---

Bon développement ! 🎉
