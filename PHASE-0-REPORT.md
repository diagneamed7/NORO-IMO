# PHASE 0 - Rapport de Nettoyage Frontend + Socle Technique

**Date** : 19 août 2026  
**Status** : ✅ COMPLÉTÉ  

## 1. Fichiers et Dossiers Supprimés

Les éléments suivants ont été supprimés pour recommencer sur une base propre :

- ❌ `src/` (ancien frontend)
- ❌ `index.html` (ancien)
- ❌ `package.json` (ancien)
- ❌ `package-lock.json` (ancien)
- ❌ `vite.config.js` (ancien)
- ❌ `dist/` (ancien build)
- ❌ Tous les composants React orphelins du commit précédent

## 2. Vérification d'Intégrité du Backend

**Status** : ✅ INTACT — Aucun fichier backend n'a été modifié

### `admin/` (Decap CMS)
- `admin/config.yml` — Configuration CMS
- `admin/index.html` — Interface d'administration

### `content/`
- `content/biens/` — 16 fiches biens (terrains, maisons, villas)
  - Localités : Kounoune, Tivaoune Peulh, Yéné, Guéréo, Pout, Bambilor, Bayakh, Thiès, Toubab Dialaw

### `scripts/`
- `scripts/build-data.js` — Compilation des données biens en JSON (fonctionnel ✅)

### `data/`
- `data/properties.json` — JSON des 16 biens (généré par build-data.js)

### `uploads/`
- Dossier des assets uploadés via Decap CMS (1 image présente)

## 3. Design Reference Identifié

**Fichier source principal** : `design-reference/SiteHeader.dc.html` et `SiteFooter.dc.html`

### Polices Google Fonts Extraites

```
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
```

**Familles** :
- **Manrope** : wght 400, 500, 600, 700, 800
- **IBM Plex Sans** : wght 400, 500, 600

Ces liens sont maintenant dans `index.html`.

### Couleurs Hexa Extraites et Définies dans `src/styles/tokens.css`

| Nom | Valeur | Usage |
|-----|--------|-------|
| `--color-primary` | `#0A4D9B` | Bleu principal (header, boutons) |
| `--color-accent` | `#F57C00` | Orange (hover, CTA) |
| `--color-white` | `#FFFFFF` | Blanc |
| `--color-black` | `#222222` | Noir/texte principal |
| `--color-gray-100` | `#F5F5F5` | Gris très clair (backgrounds) |
| `--color-gray-200` | `#ECECEC` | Gris clair (bordures) |
| `--color-gray-500` | `rgba(255,255,255,.78)` | Gris secondaire |
| `--color-gray-700` | `rgba(255,255,255,.85)` | Gris tertiaire |

## 4. Structure Finale du Frontend

```
src/
├── main.jsx                    # Entry point React
├── App.jsx                     # React Router setup (routes vides pour Phase 1)
├── styles/
│   ├── tokens.css              # Design tokens (couleurs, typo, espacement)
│   └── global.css              # Styles globaux de base
├── components/                 # Vide - sera rempli Phase 1
└── pages/                      # Vide - sera rempli Phase 1
```

### Routes Configurées dans `App.jsx`

```
/                           → HomePage
/acheter                    → AcheterPage
/louer                      → LouerPage
/vendre                     → VendrePage
/gestion-locative           → GestionLocativePage
/construction               → ConstructionPage
/programmes                 → ProgrammesPage
/programmes/:id             → FicheProgrammePage
/biens/:id                  → FicheBienPage
/contact                    → ContactPage
/mentions-legales           → MentionsLegalesPage
/confidentialite            → ConfidentialitePage
/cgu                        → CGUPage
```

Routes temporaires (placeholders) pour l'instant. Seront implémentées en Phase 1.

## 5. Configuration Vite + React

### `vite.config.js`
- Configuré pour React (plugin @vitejs/plugin-react)
- Sortie : `dist/`
- Mode production optimisé

### `index.html`
- DOCTYPE HTML5 complet
- Meta charset UTF-8
- Google Fonts importées (Manrope + IBM Plex Sans)
- Viewport mobile-friendly
- Élément racine `<div id="root">` pour React
- Script d'entrée : `src/main.jsx`

### `package.json`
- Dépendances : react 18.3.1, react-dom 18.3.1, react-router-dom 6.26.2
- Dev : vite 5.4.1, @vitejs/plugin-react 4.3.0
- Scripts :
  - `npm run dev` → Lance Vite en développement
  - `npm run build` → Compile Decap CMS data + Vite build
  - `npm run preview` → Préview local du build

## 6. Configuration Netlify

**Fichier** : `netlify.toml`

### Build Command Mis à Jour
```toml
command = "node scripts/build-data.js && mkdir -p public/data && cp data/properties.json public/data/properties.json && npm run build"
```

Flux :
1. Script Decap CMS compile `content/biens/` → `data/properties.json`
2. Copie les données dans `public/data/`
3. Vite build → `dist/`
4. Netlify publie depuis `dist/`

### Redirects Configurées
1. `/admin/*` → `/admin/index.html` (Decap CMS)
2. `/uploads/*` → `/uploads/:splat` (Assets uploadés)
3. `/*` → `/index.html` (React Router SPA) ✅ **AJOUTÉE CETTE PHASE**

La dernière redirection est **cruciale** pour que React Router fonctionne correctement sur Netlify (sinon les routes directs donneraient 404).

## 7. Vérifications Finales

### ✅ npm run dev
Confirme que Vite démarre sans erreur.

### ✅ npm run build
```
OK: 16 biens compiles dans data/properties.json
vite v5.4.21 building for production...
transforming...
✓ 34 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.80 kB │ gzip:  0.45 kB
dist/assets/index-BvCL-zKC.css    2.07 kB │ gzip:  0.79 kB
dist/assets/index-Cdvqeg_W.js   160.10 kB │ gzip: 51.92 kB
✓ built in 746ms
```

**Status** : ✅ Build réussi

## 8. Points Clés pour les Phases Suivantes

1. **Source de Vérité** : Chaque composant Phase 1 doit correspondre au fichier `.dc.html` correspondant dans `design-reference/`
2. **Tokens.css** : Utiliser les CSS custom properties pour les couleurs (jamais hard-coder)
3. **Architecture** : Composants dans `src/components/`, pages dans `src/pages/`
4. **Decap CMS** : Les données biens sont gérées dynamiquement via CMS → pas de hard-code

## ✅ Prêt pour Phase 1

La base technique est en place. Aucune anticipation sur les pages/composants.  
Attendre validation avant de passer à Phase 1 (Accueil + composants principaux).

---

**Prochaine étape** : Phase 1 — Implémentation de l'Accueil (HomePage) en répliquant exactement le design `design-reference/Accueil NORO Immo.dc.html`
