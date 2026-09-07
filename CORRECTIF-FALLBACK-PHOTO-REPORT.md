# CORRECTIF - Fallback Photo (Rapport Approfondi)

**Date** : 19 août 2026  
**Status** : 🔄 INVESTIGATION EN COURS - Pas prêt pour production

---

## ⚠️ Mise à Jour - Problème persiste

L'utilisateur a rapporté que **le problème d'affichage du fallback persiste exactement comme avant** le correctif précédent. Ce rapport documente l'investigation complète et les corrections appliquées.

---

## 1. Vérification des Données

### ✅ Source JSON (bien #2 - Terrain sans photo)

**Fichier source** : `content/biens/002-kounoune-2.json`
```json
{
  "photo": ""
}
```

**Après compilation** : `data/properties.json`
```json
{
  "id": 2,
  "photo": null
}
```

**Analyse** :
- ✅ Source a `"photo": ""` (chaîne vide, falsy)
- ✅ Script build-data.js fait : `photo: data.photo || null` → `"" || null` = `null`
- ✅ Compilé a `"photo": null` (valeur JS, falsy)

**Conclusion** : Les données sont correctes, `bien.photo` devrait être `null` en JavaScript.

---

## 2. Structure JSX et Condition

### Code actuel en BienCard.jsx (lignes 56-87)

```javascript
{bien.photo && !imageError ? (
  <img
    src={bien.photo}
    alt={titre}
    className={styles.image}
    onError={() => {
      console.warn(`Image erreur pour bien #${bien.id}: ${bien.photo}`)
      setImageError(true)
    }}
  />
) : (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: '#F5F5F5',
      display: 'flex',
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 10,
      border: '2px solid red',
      flexDirection: 'column',
      boxSizing: 'border-box',
    }}
  >
    <div style={{ fontSize: '14px', color: 'red' }}>No photo</div>
    {getPlaceholderIcon()}
  </div>
)}
```

### Analyse de la condition

Si `bien.photo = null` et `imageError = false` :
- Condition : `null && !false` → `null && true` → `null` (falsy)
- Résultat : Affiche la branche `else` (fallback div) ✅

**Théoriquement correct**.

---

## 3. Hypothèses Debuggées

### Hypothèse 1 : `imageError` state persiste
**Débuggé par** : Ajout de `useEffect(() => { setImageError(false) }, [bien.id])`
**Status** : ✅ Corrigée (réinitialise à chaque bien)

### Hypothèse 2 : `bien.photo` est string `"null"` au lieu de valeur null
**Vérification** :
- `data/properties.json` affiche bien `"photo": null` (pas string)
- Ajout de logging : `console.log(`photo="${bien.photo}" (type: ${typeof bien.photo}))`
- **Besoin de vérifier les logs du navigateur pour confirmer**

### Hypothèse 3 : Fallback div ne s'affiche pas visuellement
**Améliorations CSS appliquées** :
- Ajout `position: absolute` au fallback div (au lieu de relative/flex)
- Ajout `top: 0, left: 0, right: 0, bottom: 0` pour remplir le container
- Ajout `zIndex: 10` pour s'assurer qu'il est par-dessus
- Ajout `border: 2px solid red` pour rendre visible le fallback
- Ajout `<div>No photo</div>` en texte clair pour confirmer affichage

### Hypothèse 4 : Balise `<img>` est rendue même avec photo null
**Modificateur de test** : Changé condition à `{false && bien.photo...}` pour forcer fallback
- Si fallback s'affiche maintenant → problème était dans la condition originale
- Si fallback ne s'affiche pas → problème CSS ou DOM

---

## 4. Modifications Appliquées

| # | Fichier | Modification | Raison |
|----|---------|----------------|--------|
| 1 | BienCard.jsx | Ajout `import { useEffect }` | Permettre réinitialisation state |
| 2 | BienCard.jsx | Ajout `useEffect(() => setImageError(false), [bien.id])` | Éviter persistance state |
| 3 | BienCard.jsx | Changé fallback `position: relative` → `absolute` | Remplir complètement le container |
| 4 | BienCard.jsx | Ajout `top/left/right/bottom: 0` | S'assurer dimension correcte |
| 5 | BienCard.jsx | Ajout `zIndex: 10` | Affichage par-dessus |
| 6 | BienCard.jsx | Ajout `border: 2px solid red` | Rendre visible pour debug |
| 7 | BienCard.jsx | Ajout `<div>No photo</div>` en texte | Confirmer rendu fallback |
| 8 | BienCard.jsx | Ajout `console.log` pour bien et photo | Debug type et valeur |

---

## 5. Build & Compilation

### npm run build
```
✓ 47 modules transformed.
✓ built in 914ms
```

**Status** : ✅ Build sans erreur (dernière version)

---

## 6. Demarche de Test Requise (À FAIRE PAR L'UTILISATEUR)

Pour vérifier réellement si le problème est résolu :

### Étape 1 : Recharger la page
```
http://localhost:5173/acheter
```

### Étape 2 : Ouvrir DevTools (F12)
- Onglet **Console** (pour voir les logs)
- Onglet **Inspector/Elements** (pour inspecter le DOM)

### Étape 3 : Observer les logs console
Chercher les messages :
```
BienCard #2: {id: 2, photo: null, ...}
  photo="null" (type: object, truthy: false)
```

**Interprétation** :
- Si `photo="null" (type: object, truthy: false)` → `bien.photo` est réellement `null` ✅
- Si `photo="null" (type: string, truthy: true)` → C'est la string "null" ❌ BUG TROUVÉ

### Étape 4 : Inspecter le DOM de la carte #2
- Clic droit sur carte → Inspecter l'élément
- Chercher dans le HTML :
  - Si `<img src="null">` est présent → Fallback ne s'affiche pas ❌
  - Si `<div style="border: 2px solid red">No photo</div>` est présent → Fallback affiche ✅

### Étape 5 : Visuellement
- La carte #2 devrait afficher un border rouge et "No photo" + emoji 🏞️
- **Si elle affiche toujours l'icone "image cassée" du navigateur** → Fallback CSS ne fonctionne pas

---

## 7. Prochaines Actions si Problème Persiste

### Si logs montrent `truthy: false` mais fallback ne s'affiche pas
→ Problème CSS : le fallback div existe mais n'est pas visible
→ Vérifier : overflow du parent, z-index, display, position

### Si logs montrent `truthy: true` (photo est une string "null")
→ Problème de données : JSON.parse mal géré
→ Solution : Ajouter validation stricte dans build-data.js

### Si logs ne s'affichent pas du tout
→ Problème JavaScript/compilation : le code ne s'exécute pas
→ Vider cache navigateur (Ctrl+Shift+Delete) et recharger

---

## 8. ⚠️ État Actuel

**PROBLÈME NON CONFIRMÉ COMME RÉSOLU**

- ✅ Modifications code appliquées
- ✅ Données JSON vérifiées (photo: null correct)
- ✅ Build sans erreur
- ❌ **MANQUE : Vérification visuelle en direct dans le navigateur**

Avant de déclarer ce correctif "COMPLÉTÉ", il faut :
1. Rechargez http://localhost:5173/acheter
2. Inspectez élément de bien #2 dans DevTools
3. Confirmez que le fallback rouge "No photo" + emoji 🏞️ s'affiche
4. Si oui → Problème RÉSOLU
5. Si non → Continuer debug

---

## ✅ Checklist (À COMPLÉTER)

| Item | Status | Confirmé |
|------|--------|----------|
| Données JSON correctes (photo: null) | ✅ | Oui (vérification fichier) |
| Condition JSX syntaxiquement correcte | ✅ | Oui (code review) |
| Build sans erreur | ✅ | Oui (npm run build) |
| useEffect réinitialise imageError | ✅ | Oui (code review) |
| Fallback div s'affiche visuellement | ❌ | **À VÉRIFIER** |
| Emoji 🏞️ affiche correctement | ❌ | **À VÉRIFIER** |

---

## 📋 Résumé

Le correctif applique plusieurs améliorations :
- ✅ Réinitialisation du state imageError par bien
- ✅ Positionnement CSS amélioré du fallback (absolute positioning)
- ✅ Marqueurs visuels de debug (border rouge, texte "No photo")
- ✅ Logging détaillé pour diagnostic

**Cependant, sans vérification visuelle en direct du navigateur, on ne peut PAS confirmer que le problème est réellement résolu.**

**Prochaine étape** : L'utilisateur teste dans le navigateur et rapporte les findings.

