# 🏠 NORO Immobilier - Site React + Vite

**Version:** React 19 + Vite 8  
**Status:** ✅ Production Ready  
**Déploiement:** Netlify

---

## 📋 Vue d'ensemble

**NORO Immobilier** est un site de catalogue immobilier pour une agence sénégalaise. 

Cette version est une migration complète du site statique HTML original vers **React + Vite**, tout en conservant :
- ✅ L'interface admin **Decap CMS** (pas de modification)
- ✅ La gestion du contenu via GitHub
- ✅ La charte graphique identique (couleurs, polices, animations)
- ✅ 16 propriétés catalaguées

### Avant (index.html statique)
```
HTML monolithique 982 lignes
└─ CSS inline + JS inline
```

### Après (React moderne)
```
src/
├─ 13 composants React réutilisables
├─ CSS modulaire (8 fichiers thématiques)
├─ Hook useProperties() pour les données
└─ Build optimisé Vite
```

---

## 🚀 Démarrage

### En local

```bash
# Installation
npm install

# Générer les données
node scripts/build-data.js
mkdir -p public/data
cp data/properties.json public/data/properties.json

# Dev avec hot-reload
npm run dev
# → http://localhost:5173

# Build production
npm run build
# → dist/ prêt pour Netlify
```

### Sur Netlify

1. **Connecter le repo GitHub**
2. **Build command:** `node scripts/build-data.js && mkdir -p public/data && cp data/properties.json public/data/properties.json && npm run build`
3. **Publish directory:** `dist`
4. **Node version:** 20

---

## 📁 Structure

```
NORO-IMO/
├── src/
│   ├── App.jsx                    # App principal
│   ├── main.jsx                   # Entry React
│   ├── components/                # 13 composants
│   │   ├── TopBar.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── SearchBar.jsx          (filtres temps réel)
│   │   ├── PropertyGrid.jsx       (grille responsive)
│   │   ├── PropertyCard.jsx       (carte propriété)
│   │   ├── PropertyModal.jsx      (détail + WhatsApp)
│   │   ├── ContactModal.jsx       (RDV/devis/contact)
│   │   ├── Services.jsx           (8 services)
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx
│   │   └── RouteDivider.jsx       (élément SVG)
│   ├── data/
│   │   └── useProperties.js       (hook fetch)
│   └── styles/
│       ├── index.css              (imports)
│       ├── tokens.css             (CSS vars)
│       └── components/            (8 fichiers CSS)
│
├── public/
│   ├── data/properties.json       (données générées)
│   ├── admin/                     (Decap CMS, non modifié)
│   └── uploads/                   (images propriétés)
│
├── content/biens/                 (16 JSON, gérés par Decap CMS)
├── scripts/build-data.js          (compile content → data/properties.json)
│
├── index.html                     (Vite entry point)
├── vite.config.js
├── package.json
├── netlify.toml                   (build + redirects)
│
├── MIGRATION.md                   (détails migration)
├── dev.md                         (guide dev)
└── README.md                      (ce fichier)
```

---

## 🎨 Charte graphique

Respectée pixel-à-pixel :

| Couleur | Hex | Usage |
|---------|-----|-------|
| **Bleu** | #0A4D9B | Primaire, textes |
| **Bleu foncé** | #083b78 | Footer |
| **Orange** | #F57C00 | Accent, CTA |
| **Gris** | #F5F5F5 | Bg sections |
| **Texte** | #222222 | Texte courant |

**Polices :**
- **Bricolage Grotesque** (Google Fonts) - Titres
- **Plus Jakarta Sans** (Google Fonts) - Texte courant

---

## ✨ Fonctionnalités

### Propriétés
- ✅ Grille responsive 3→2→1 colonnes
- ✅ Images par défaut si non uploadées
- ✅ Statut (Disponible/Réservé/Vendu) avec ruban coloré
- ✅ Détail complet en modale
- ✅ Paiement échelonné (moratoire) si disponible

### Recherche & Filtrage
- ✅ Filtrer par type (Terrain, Maison, Villa, etc.)
- ✅ Filtrer par zone/localisation (10+ zones)
- ✅ Filtrer par prix (min/max en millions FCFA)
- ✅ Filtrage en temps réel
- ✅ Bouton réinitialiser

### Interaction
- ✅ Lien WhatsApp pré-rempli par propriété
- ✅ Modal contact (RDV/devis/contact) → WhatsApp
- ✅ Menu burger sur mobile
- ✅ Scroll smooth
- ✅ Animations fade-up et transitions

### Admin
- ✅ Decap CMS à `/admin/`
- ✅ Gestion de contenu via interface
- ✅ Push auto sur GitHub (git-gateway)
- ✅ Webhook → redéploiement Netlify

---

## 📊 Performance

**Vite build:**
- HTML: 166 KB (before gzip: 80 KB)
- CSS: Minifiée, variables CSS natives
- JS: React 19 minifié + plugins Vite
- Temps build: ~115ms

**Netlify:**
- CDN global
- Gestion cache automatique
- Certificat SSL gratuit

---

## 🔄 Workflow

### Ajouter une propriété

**Via Decap CMS (recomandé):**
1. Accéder à `https://votre-site.netlify.app/admin/`
2. Cliquer "Nouveau bien"
3. Remplir formulaire
4. Publier → Git push automatique → Redéploiement Netlify

**Via fichier JSON (dev):**
1. Créer `content/biens/XXX-nom.json`
2. Lancer `node scripts/build-data.js`
3. Restart dev server

### Modifier la charte graphique

1. Éditer `src/styles/tokens.css` (couleurs, espacements)
2. Les fichiers CSS modulaires (topbar.css, grid.css, etc.) héritent automatiquement
3. Relancer dev ou build

### Ajouter une section

1. Créer composant dans `src/components/NomSection.jsx`
2. Importer dans `src/App.jsx`
3. Ajouter CSS dans `src/styles/components/nomsection.css`
4. Importer CSS dans `src/styles/index.css`

---

## 🐛 Troubleshooting

### Données ne chargent pas en dev
```bash
node scripts/build-data.js
mkdir -p public/data
cp data/properties.json public/data/properties.json
```

### Admin `/admin/` affiche 404
```bash
cp -r admin public/
npm run build
```

### Erreur "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Documentation complète

- **`MIGRATION.md`** - Détails techniques de la migration
- **`dev.md`** - Guide démarrage rapide
- **`admin/config.yml`** - Configuration Decap CMS

---

## 🔐 Admin Decap CMS

Accès : `https://votre-site.netlify.app/admin/`

**Champs disponibles :**
- Titre annonce
- Type de bien (select: 7 types)
- Zone/Localisation
- Superficie (m²)
- Prix (FCFA)
- Titre foncier
- Statut (Disponible/Réservé/Vendu)
- Description
- Photo (upload)
- Moratoire (5 champs: prix, acompte, mensualité, durée)

**Backend:** Git-based (github.com)  
**Workflow:** Édition → Commit → Push → Webhook Netlify

---

## 🌐 URLs utiles

- **Site live:** https://votre-site.netlify.app
- **Admin:** https://votre-site.netlify.app/admin/
- **Données:** https://votre-site.netlify.app/data/properties.json
- **GitHub:** https://github.com/diagneamed7/...

---

## 📞 Contact

- **Téléphone:** +221 77 500 00 00
- **Email:** contact@noro-immobilier.com
- **WhatsApp:** [Lien dans footer]

---

## 📜 Licence

© 2024 NORO Immobilier. Tous droits réservés.

---

**Migration complétée** | React 19 + Vite 8 | Netlify Ready ✅
