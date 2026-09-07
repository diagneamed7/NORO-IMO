# Plan : Correction Section "Autres programmes"

## Problème
- La section "Autres programmes" sur chaque fiche affiche actuellement seulement 2 cards (excluant le programme courant)
- Avec 2 cards, la grille CSS auto-fit les étire à ~604px au lieu de ~394px (design source prévoit 3 cards compactes)
- Résultat : le rendu visuel ne correspond pas au design-reference

## Solution
Retirer le filtre `.filter(p => p.id !== programme.id)` pour afficher les 3 programmes sur toutes les pages.

## Étapes d'Implémentation

### 1. Identifier le filtre actuel
- Lire `src/pages/FicheProgrammePage.jsx`
- Chercher la ligne qui filtre les "autres programmes"
- Actuellement : `autresProgrammes = PROGRAMMES.filter(p => p.id !== programme.id)` (ligne ~33)

### 2. Retirer le filtre
- Remplacer par : `autresProgrammes = PROGRAMMES`
- Effet : affichage des 3 programmes sur toutes les pages

### 3. Vérifier la grille CSS
- Lire `src/pages/FicheProgrammePage.module.css`
- Vérifier que `.autresGrid` a `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- Calculer la largeur attendue d'une card sur 1280px de large :
  - Largeur utile = 1280 - (2 × 24px padding) = 1232px
  - Avec 3 cards et 2 gaps de 24px = (1232 - 48) / 3 ≈ 395px par card
  - Avant (2 cards) : (1232 - 24) / 2 ≈ 604px par card

### 4. Test réel dans le navigateur (OBLIGATOIRE)
**Sur chaque page** : `/programmes/cite-noro-diamniadio`, `/programmes/residence-filaos`, `/programmes/domaine-bambilor`

Pour chaque page :
1. Ouvrir dans navigateur réel (pas simulation)
2. Ouvrir DevTools (F12)
3. Console : vérifier zéro erreur
4. Inspecter une card dans la section "Autres programmes"
5. Lire la largeur réelle dans `Computed Styles` ou via `Element.getBoundingClientRect().width`
6. Confirmer que 3 cards s'affichent
7. Noter la largeur réelle observée (doit être ~395px, pas 604px)

### 5. Créer le rapport
- Fichier : `CORRECTIF-AUTRES-PROGRAMMES-REPORT.md`
- Contenu :
  - Avant / Après (2 cards vs 3 cards)
  - Code changé (ligne du filtre)
  - Pour chaque page : 
    - URL
    - Nombre de cards observé
    - Largeur réelle d'une card (pixels)
    - Erreurs console (0 attendu)
  - Preuves : mesures réelles, pas d'affirmations

## Fichiers à Modifier
- `src/pages/FicheProgrammePage.jsx` : Ligne ~33, retirer le filtre

## Fichiers à Vérifier
- `src/pages/FicheProgrammePage.module.css` : Grille CSS (pas de modification nécessaire si `.autresGrid` est correct)
- `src/data/programmes.js` : Les 3 programmes doivent exister (déjà vérifié)

## Validation
✅ Aucune erreur console sur les 3 pages  
✅ 3 cards affichées sur chaque page  
✅ Largeur d'une card ≈ 395px (mesure réelle)  
✅ Rapport `CORRECTIF-AUTRES-PROGRAMMES-REPORT.md` produit avec preuves  

## Durée Estimée
- Correction code : 2 min
- Test navigateur (3 pages) : 5 min
- Rapport : 3 min
- **Total : ~10 minutes**
