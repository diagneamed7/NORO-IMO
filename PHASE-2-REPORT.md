# PHASE 2 - Rapport : Pages Acheter + Louer

**Date** : 19 août 2026  
**Status** : ✅ COMPLÉTÉ (avec restriction critique sur les données)

## ⚠️ POINT CRITIQUE DÉTECTÉ

### Le champ `transaction` n'existe PAS dans les données CMS

**Impact** : Les pages Acheter/Louer sont portées correctement, **mais ne peuvent pas réellement filtrer les biens par vente/location** car ce champ manque aux données.

**Situation actuelle** :
- 16 biens dans `content/biens/` — TOUS marqués comme "Vente" (par défaut)
- Aucun bien à louer n'existe dans les données CMS
- Le champ `transaction` est absent de :
  - `admin/config.yml` (schéma Decap CMS)
  - `scripts/build-data.js` (script de compilation)
  - Tous les fichiers `.json` dans `content/biens/`

**Exemple de données générées** (`data/properties.json`) :
```json
{
  "id": 1,
  "zone": "Kounoune 2",
  "type": "Villa",
  "superficie": 224,
  "prix": 16450000,
  "titre": "Titre Foncier Individuel",
  "statut": "disponible",
  "commentaire": "...",
  "moratoire": { "prix": null, ... },
  "photo": "/uploads/log2.jpg"
  // ❌ PAS DE CHAMP "transaction"
}
```

---

## 1. Pages Créées

### 1.1 AcheterPage.jsx (`src/pages/AcheterPage.jsx`)

**Source Design** : `design-reference/Acheter.dc.html`

#### Sections implémentées :

1. **Breadcrumb Navigation** : Accueil / Acheter
2. **Hero Section** (bleu)
   - Titre : "Biens à vendre au Sénégal"
   - Description sur les biens vérifiés et titres contrôlés
3. **Search/Filter Bar**
   - Type de bien : Tous/Terrain/Maison/Villa/Appartement/Immeuble
   - Localisation : Toutes zones/Dakar/Diamniadio/Saly/Bambilor/Keur Massar/Thiès
   - Transaction : Vente et moratoire / Vente / Moratoire ⚠️ **Non fonctionnel (données manquent)**
   - Prix min/max : inputs numériques
   - Bouton Réinitialiser
4. **Properties Grid**
   - Affiche les biens filtrés
   - Réutilise composant `BienCard.jsx` (Phase 1) ✅
   - Compte de biens dynamique
5. **Pagination**
   - 12 biens par page
   - Boutons Précédent/Pages/Suivant
   - Pagination complète comme dans le design
6. **CTA Section** (bleu)
   - Titre : "Vous ne trouvez pas le bien que vous cherchez ?"
   - Boutons : WhatsApp (#25D366) + Prendre rendez-vous
   - Lien vers Contact page

#### CSS : `PagesListing.module.css` (partagé avec Louer)
Structure complète copiée du design source.

---

### 1.2 LouerPage.jsx (`src/pages/LouerPage.jsx`)

**Source Design** : `design-reference/Louer.dc.html`

#### Sections implémentées :

1. **Breadcrumb Navigation** : Accueil / Louer
2. **Hero Section** (bleu)
   - Titre : "Biens en location"
   - Description sur locations meublées/nues, courte/longue durée
3. **Search/Filter Bar**
   - Type de bien : Tous/Appartement/Maison/Villa
   - Localisation : Toutes zones/Dakar/Saly/Thiès
   - Loyer min/max : inputs numériques (pas de Transaction filter)
   - Bouton Réinitialiser
4. **Properties Grid**
   - Affiche les biens en location (actuellement vide)
   - Réutilise composant `BienCard.jsx` ✅
   - Message "Aucun bien en location actuellement" si vide
   - Note : "Loyers charges non comprises"
5. **Property Management CTA Section** (gris)
   - Titre : "Vous avez un bien à mettre en location ?"
   - Description sur la sélection du locataire, bail, versement loyer
   - Boutons : "Découvrir la gestion locative" + "Nous confier un bien"
   - Liste 3 bénéfices : Sélection/Loyer/Rapport mensuel
6. **SiteFooter** (importé)

#### CSS : `PagesListing.module.css` (partagé avec Acheter)

---

## 2. Réutilisation BienCard.jsx ✅

Le composant **BienCard** créé en Phase 1 est réutilisé exactement tel quel :
- Pas de duplication
- Pas de variante séparée
- Utilisé dans HomePage + AcheterPage + LouerPage

**Confirmation** : `src/components/BienCard.jsx` inchangé, importé dans les deux pages.

---

## 3. Données en Provenance de `/data/properties.json`

### ✅ Confirmed : Données réelles utilisées

Les deux pages chargent les données via :
```javascript
fetch('/data/properties.json')
  .then(res => res.json())
  .then(data => { ... })
```

Les 16 biens compilés par `scripts/build-data.js` sont bien chargés.

### ❌ LIMITATION : Filtre Transaction non fonctionnel

**Logique actuelle** :
```javascript
// AcheterPage: tous les biens avec transaction !== "Location"
// (approximation : tous les 16 biens par défaut)

// LouerPage: tous les biens avec transaction === "Location"
// (vide : aucun bien n'a ce champ)
```

**Pourquoi** :
- Le champ `transaction` n'existe pas dans les données
- `data/properties.json` ne génère pas ce champ
- Le CMS n'a pas ce champ dans son schéma

---

## 4. Proposition de Solution (Pour Phase 3)

Pour que les filtres Transaction fonctionnent réellement, **ajouter le champ** au CMS :

### A. Mettre à jour `admin/config.yml`

Ajouter un champ de sélection dans la collection "biens" :
```yaml
- label: "Type de transaction"
  name: "transaction"
  widget: "select"
  options:
    - { label: "Vente", value: "Vente" }
    - { label: "Moratoire", value: "Moratoire" }
    - { label: "Location", value: "Location" }
  default: "Vente"
```

### B. Mettre à jour `scripts/build-data.js`

Ajouter le champ à la compilation :
```javascript
transaction: data.transaction || 'Vente',
```

### C. Résultat

- Les administrateurs CMS pourraient alors marquer chaque bien comme Vente/Moratoire/Location
- Les pages Acheter/Louer filtreraient correctement les biens
- Les 16 biens existants auraient "Vente" par défaut

**Action recommandée** : Cette modification du schéma CMS doit être faite **avant** que des biens à louer soient ajoutés au CMS, afin que les pages Louer affichent des résultats.

---

## 5. Test Build & Déploiement

### ✅ npm run build
```
OK: 16 biens compiles dans data/properties.json
✓ 45 modules transformed
dist/assets/index-C2BT2Cbi.css   32.29 kB │ gzip:  5.77 kB
dist/assets/index-Bs1VFJ7p.js   207.75 kB │ gzip: 64.14 kB
✓ built in 981ms
```

**Status** : ✅ Succès complet

### ✅ npm run dev

Pages accessible à :
- `http://localhost:5173/acheter` — Grille de 16 biens avec filtres
- `http://localhost:5173/louer` — Grille vide (aucun bien à louer)

---

## 6. Fichiers Créés/Modifiés

### Créés
- ✅ `src/pages/AcheterPage.jsx` — Page Acheter avec filtres et pagination
- ✅ `src/pages/LouerPage.jsx` — Page Louer avec filtres
- ✅ `src/pages/PagesListing.module.css` — Styles partagés (Acheter + Louer)

### Modifiés
- ✅ `src/App.jsx` — Imports réels pour AcheterPage et LouerPage

### Inchangés (Backend)
- ✅ `admin/`, `content/`, `scripts/`, `data/` — Intacts (sauf `data/properties.json` recalculée)
- ✅ `netlify.toml` — Aucun changement

---

## 7. Points Clés

| Critère | Status | Notes |
|---------|--------|-------|
| Pages portées pixel-pres | ✅ | Structure exacte du design |
| Réutilisation BienCard | ✅ | Pas de duplication |
| Filtres implémentés | ✅ | Visuellement corrects |
| Filtre Transaction fonctionnel | ❌ | Champ manque aux données |
| Pagination (Acheter) | ✅ | 12 biens par page |
| Données réelles chargées | ✅ | Via `/data/properties.json` |
| Build sans erreur | ✅ | 981ms |

---

## ✅ Prêt pour Validation

Les pages **Acheter et Louer sont complètes et fonctionnelles**, avec la restriction que le filtrage par Transaction nécessite l'ajout du champ `transaction` au schéma CMS.

**Recommandation** : Valider cette phase, puis **en Phase 3 ou parallèlement**, ajouter le champ `transaction` au CMS pour débloquer le filtrage réel Vente/Moratoire/Location.

---

**Prochaine étape** : Phase 3 — Fiches détail (Fiche bien, Fiche programme).
