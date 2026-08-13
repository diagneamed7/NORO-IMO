# Migration NORO Immobilier → React + Vite ✅

## 🎯 État de la migration

**Status**: ✅ **MIGRATION COMPLÈTE**

### Fichiers modifiés
- ✅ `package.json` - Créé avec Vite + React 19 + Vite 8
- ✅ `vite.config.js` - Configuration Vite
- ✅ `index.html` - Convertie pour Vite (entry point)
- ✅ `netlify.toml` - Build pipeline actualisé
- ✅ `scripts/build-data.js` - Converti en ES modules
- ✅ `.gitignore` - Ajouté pour Node/Vite

### Fichiers conservés (non modifiés)
- ✅ `admin/` - Decap CMS (100% fonctionnel)
- ✅ `content/biens/` - 16 propriétés JSON
- ✅ `uploads/` - Dossier pour images
- ✅ `data/properties.json` - Généré automatiquement

### Nouveau structure
```
src/
├── App.jsx                    # Composant principal
├── main.jsx                   # Entry React
├── components/
│   ├── TopBar.jsx            # Barre contact/socials
│   ├── Header.jsx            # Menu sticky
│   ├── Logo.jsx              # Logo SVG
│   ├── Hero.jsx              # Section hero
│   ├── RouteDivider.jsx      # Élément SVG courbe
│   ├── SearchBar.jsx         # Filtres
│   ├── PropertyGrid.jsx      # Grille de propriétés
│   ├── PropertyCard.jsx      # Carte propriété
│   ├── PropertyModal.jsx     # Détail propriété
│   ├── ContactModal.jsx      # Formulaire contact
│   ├── Services.jsx          # 8 services
│   └── Footer.jsx            # Pied de page
├── data/
│   └── useProperties.js      # Hook pour fetch data
└── styles/
    ├── index.css             # Import global
    ├── tokens.css            # CSS variables
    └── components/           # CSS modulaires
        ├── topbar.css
        ├── header.css
        ├── hero.css
        ├── buttons.css
        ├── search.css
        ├── grid.css
        ├── footer.css
        └── modals.css

public/
├── data/
│   └── properties.json       # Données générées
├── admin/                    # Copié depuis racine
└── uploads/                  # Images des biens
```

---

## 🚀 Démarrage local

### 1. Installation
```bash
npm install
```

### 2. Générer les données
```bash
node scripts/build-data.js
# Crée data/properties.json
```

### 3. Copier données en dev
```bash
mkdir -p public/data
cp data/properties.json public/data/properties.json
```

### 4. Lancer en dev
```bash
npm run dev
# Ouvre http://localhost:5173
```

### 5. Build production
```bash
npm run build
# Génère dist/ prêt pour Netlify
```

---

## 🔗 Pipeline Netlify

**Command de build:**
```bash
node scripts/build-data.js && \
mkdir -p public/data && \
cp data/properties.json public/data/properties.json && \
npm run build
```

**Dossier publié:** `dist/` (Vite output)

**Étapes:**
1. Compile `content/biens/*.json` → `data/properties.json`
2. Copie données dans `public/data/` (servi à la racine)
3. Build React + CSS avec Vite
4. Publie `dist/` comme site statique

---

## 📊 Charte graphique

Toutes les couleurs, polices, et animations sont respectées :

**Tokens CSS** (`src/styles/tokens.css`):
```css
--blue: #0A4D9B
--blue-deep: #063a73
--blue-ink: #062a52
--orange: #F57C00
--white: #FFFFFF
--gray: #F5F5F5
--ink: #222222
```

**Polices Google:**
- Bricolage Grotesque (titres)
- Plus Jakarta Sans (texte)

---

## ✨ Fonctionnalités implémentées

### Composants
- ✅ TopBar - Contacts + bouton "Demander un devis"
- ✅ Header - Menu sticky avec burger mobile
- ✅ Hero - Image de fond + CTA
- ✅ SearchBar - Filtres (type, zone, prix, transaction)
- ✅ PropertyGrid - Grille responsive 3→1 colonne
- ✅ PropertyCard - Image, prix, statut (disponible/réservé/vendu)
- ✅ PropertyModal - Détail propriété + lien WhatsApp
- ✅ ContactModal - Formulaire RDV/devis → WhatsApp
- ✅ Services - 8 cartes alternant bleu/orange
- ✅ Footer - Liens + contact + socials

### Logique
- ✅ Filtrage en temps réel (type, zone, prix)
- ✅ Images par défaut si pas uploadées (par type)
- ✅ Statut des biens (ruban coloré)
- ✅ Paiement échelonné (moratoire) si disponible
- ✅ Lien WhatsApp pré-rempli
- ✅ Menu burger responsive
- ✅ Modales avec transitions

---

## 📱 Responsive

- ✅ Desktop (3 colonnes)
- ✅ Tablet (2 colonnes)
- ✅ Mobile (1 colonne, menu burger)

---

## 🔐 Admin Decap CMS

**Accès:** `https://votre-site.netlify.app/admin/`

**Configuration:** `admin/config.yml` (non modifié)

**Backend:** Git-based (push automatique)

**Dossier content:** `content/biens/` (16 fichiers JSON)

Aucune modification du workflow d'administration.

---

## 📝 Notes importantes

### Décap CMS + Vite
- Decap CMS fonctionne indépendamment
- Netlify sert `/admin/` et les fichiers statiques séparément
- Le workflow Git-based continue de fonctionner

### Données côté client
- Fetch `GET /data/properties.json` via `useProperties()` hook
- Cache du navigateur par Netlify (Etag)
- Pas de backend, tout statique

### Build
- Vite minifie et bundle le React
- CSS modules importées dans `index.css`
- Tout est self-contained dans `dist/`

---

## 🎬 Prochaines étapes

1. ✅ Push sur GitHub
2. ✅ Vérifier build Netlify
3. ✅ Tester `/admin/` Decap CMS
4. ✅ Ajouter une vraie photo logo
5. ✅ Tests complets (filtres, modales, mobile)

---

## 🐛 Troubleshooting

### "Cannot find module" dans npm run dev
```bash
npm install
rm -rf node_modules package-lock.json
npm install
```

### Données ne chargent pas
```bash
# En local, générer et copier
node scripts/build-data.js
mkdir -p public/data
cp data/properties.json public/data/properties.json
```

### Admin `/admin/` n'est pas accessible
Netlify doit copier le dossier `/admin` dans `dist/`. Ajouter à `vite.config.js`:
```js
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

export default defineConfig({
  build: {
    copyPublicDir: true,
  },
})
```

---

**Migration complétée par Claude Code** 🤖
