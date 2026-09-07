# CORRECTIF - Contenu Fiche Programme Identique pour Tous les Programmes

**Date** : 20 août 2026  
**Status** : 🔴 BUG IDENTIFIÉ - ATTENTE DÉCISION  

---

## 🐛 Bug Confirmé

### Symptôme Observé

Sur `/programmes/domaine-bambilor` :

**Ce qui s'affiche (INCORRECT)** :
```
H1: "Domaine de Bambilor"  ✅ (correct)

Location + Prix:
"Diamniadio, à 8 min du pôle urbain — 120 parcelles"  ❌ (c'est Diamniadio, pas Bambilor)
"Prix d'entrée: 12 000 000 FCFA"  ❌ (c'est le prix de Diamniadio, pas Bambilor)

Description:
"La Cité NORO est un lotissement de 120 parcelles viabilisées de 200 à 400 m², 
implanté à huit minutes du pôle urbain de Diamniadio..."  ❌ (100% Diamniadio)

Caractéristiques:
- Surfaces: 200 à 400 m²  ❌ (Bambilor = 150-300 m²)
- Document: Titre foncier morcelé  ❌ (correct pour Diamniadio)

Tableau Disponibilités:
- 200 m²: 12 000 000 FCFA, 21 lots  ❌ (Bambilor commence à 150 m²)
- 300 m²: 17 500 000 FCFA, 12 lots  ❌ (pas ces surfaces pour Bambilor)
- 400 m²: 22 800 000 FCFA, 5 lots   ❌ (Bambilor max 300 m²)
```

**Ce qui devrait s'afficher** :
```
Programme: Domaine de Bambilor
Location: Bambilor
Prix: À partir de 4 500 000 FCFA (ou les vrais prix/surfaces de Bambilor)
Description: "80 parcelles de 150 à 300 m² sous titre foncier..."
```

---

## 🔍 Cause Identifiée

### Design Source Limitation

`design-reference/Fiche-programme.dc.html` (202 lignes) :

**Constat** :
- Contient UN SEUL exemple complet : **Diamniadio**
- Tout le contenu détaillé est en HTML dur (pas de variables `{{ }}`)
  - Description complète (2 paragraphes)
  - Caractéristiques (6 items)
  - Plan de masse
  - Tableau disponibilités (3 types de lots avec prix spécifiques)
  - Prix d'entrée

**Absence critique** :
- Aucun autre exemple mockup pour Filaos ou Bambilor
- Aucune structure de données template (ex: `{{ programme.description }}`)
- Le design source ne montre pas COMMENT adapter le contenu détaillé pour d'autres programmes

### Erreur d'Implémentation (FicheProgrammePage.jsx)

```javascript
// Contenu copié directement du design-reference (Diamniadio)
// appliqué statiquement à TOUS les programmes
const galerie = [PH.aerienA, PH.terrainA, PH.aerienB, PH.maisons]
const prixCash = 12000000  // ← Hardcodé Diamniadio
const desc = "La Cité NORO est un lotissement de 120 parcelles..."  // ← Hardcodé Diamniadio

// Caractéristiques statiques (identiques pour tous)
const caracteristiques = [
  { label: 'Surfaces des lots', value: '200 à 400 m²' },  // Diamniadio only
  ...
]

// Tableau disponibilités statique (Diamniadio only)
const table = [
  { size: '200 m²', price: '12 000 000 FCFA', count: '21 lots' },  // Diamniadio only
  ...
]
```

→ **Résultat** : Tous les programmes affichent les données de Diamniadio

---

## 📋 Deux Options Possibles (SANS IMPLÉMENTATION AVANT DÉCISION)

### Option A : Contenu Minimal Commun

**Principe** : Afficher uniquement les informations **existantes et fiables** pour tous les programmes.

**Qu'afficherait FicheProgrammePage** :

```
[Hero Section]
- Breadcrumb : Accueil / Programmes / Domaine de Bambilor
- Titre : "Domaine de Bambilor"
- Statut : "Moratoire 24 mois"
- Localisation : "Bambilor"
- Prix d'entrée : "À partir de 4 500 000 FCFA"

[Galerie]
- Images : (2-3 images représentatives du type de programme)

[Contenu Simplifié]
Description: "80 parcelles de 150 à 300 m² sous titre foncier, avec paiement échelonné sans intérêt."
            (texte court, repris de la carte Programmes)

[Sections Masquées/À Venir]
Caractéristiques   : "Informations détaillées à venir"
Plan de masse      : (non affiché)
Disponibilités     : "Tableau détaillé à venir"
Localisation       : (carte réduite ou simple adresse)

[Sidebar]
Prix box           : Afficher uniquement le prix "À partir de"
Boutons d'action   : "Réserver", "WhatsApp", "Contact"
```

**Avantage** : Aucune donnée fausse, juste un contenu honnête "en construction"  
**Inconvénient** : Moins de détail, pages plus courtes

---

### Option B : Diamniadio Complète + Autres Simplifiées

**Principe** : Garder le contenu détaillé SEULEMENT pour Diamniadio (dont c'est les vraies données), adapter les autres programmes à leur contenu réel connu.

**Qu'afficherait FicheProgrammePage** :

**Pour Diamniadio** ✅ :
```
[Comme actuellement]
- Description complète
- 6 Caractéristiques détaillées
- Plan de masse
- Tableau disponibilités (200/300/400 m²)
- Prix exact : 12 000 000 FCFA
```

**Pour Filaos** :
```
[Hero Section]
Titre: "Résidence Les Filaos — Saly"
Localisation: "Saly, à 900 m de la plage"
Prix d'entrée: "À partir de 65 000 000 FCFA"

[Galerie]
Images des villas

[Contenu Adapté]
Description: "18 villas de 3 et 4 chambres avec piscine commune, 
             à 900 m de la plage. Idéal résidence secondaire."

Caractéristiques:  (adapté)
- Type: Villas (3 et 4 chambres)
- Configuration: Piscine commune incluse
- Statut: Livraison 2027
- Construction: Clé en main possible
[Pas de détail par m² car villas, pas parcelles]

Disponibilités: "11 villas disponibles"
[Pas de tableau détaillé]

[Localisation]
Carte Saly + description localisation
```

**Pour Bambilor** :
```
[Hero Section]
Titre: "Domaine de Bambilor"
Localisation: "Bambilor"
Prix d'entrée: "À partir de 4 500 000 FCFA"

[Galerie]
Images terrain

[Contenu Adapté]
Description: "80 parcelles de 150 à 300 m² sous titre foncier, 
             avec paiement échelonné sans intérêt."

Caractéristiques: (adapté)
- Surfaces: 150 à 300 m²
- Document: Titre foncier
- Viabilisation: Eau, électricité, voirie
- Paiement: Moratoire 24 mois
[Structure similaire mais valeurs adaptées]

Disponibilités: "52 parcelles disponibles"
[Pas de prix détaillé par type si données inconnues]

[Localisation]
Carte Bambilor
```

**Avantage** : Chaque programme a ses vraies données (ou "à venir" s'inconnues)  
**Inconvénient** : Implémentation plus complexe, nécessite structurer les données par programme

---

## 🤔 Données Manquantes

Pour **Option B**, certaines données n'existent pas :

| Programme | Données Connues | Données Manquantes |
|-----------|-----------------|-------------------|
| Diamniadio | Tout (design source complet) | Aucune |
| Filaos | Nom, nb villas (18), description courte, prix min (65M), statut (Livraison 2027) | Prix par villa, caractéristiques détaillées, plan, images supplémentaires |
| Bambilor | Nom, nb parcelles (80), surfaces (150-300m²), description courte, prix min (4.5M), statut (Moratoire 24 mois) | Prix détaillé par surface, tableau dispo exacte, plan, images supplémentaires |

---

## 🚫 CE QUI NE DOIT PAS ARRIVER

✅ Strictement ÉVITER de :
- Inventer des prix pour Filaos/Bambilor
- Inventer des disponibilités ("15 villas", "45 parcelles")
- Inventer des caractéristiques détaillées
- Continuer d'afficher les données de Diamniadio sur les autres programmes

---

## 📝 À Décider

**Quelle approche retenir ?**

1. **Option A** : Minimaliste (texte court + "À venir" pour le détail)
2. **Option B** : Adapté par programme (Diamniadio complet, autres simplifiés mais vrais)
3. **Autre approche** : À proposer

**Une fois décidé**, je :
1. Mettrai à jour FicheProgrammePage.jsx
2. Structurerai les données dans `src/data/programmes.js` en conséquence
3. Produirai un rapport de correction avec mesures DOM

---

**Date** : 20 août 2026  
**Status** : 🔴 BLOQUÉ - ATTENTE DÉCISION UTILISATEUR

**Ne pas continuer sans validation de l'approche choisie.**
