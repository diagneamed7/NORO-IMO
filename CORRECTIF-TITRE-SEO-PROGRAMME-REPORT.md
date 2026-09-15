# CORRECTIF — Titre SEO "undefined" sur Fiches Programme

**Date** : 15 septembre 2026  
**Bug** : Titre affichait "undefined | Programmes..." au lieu du nom du programme  
**Cause** : Utilisation de `programme.titre` au lieu de `programme.nom`  
**Status** : ✅ Corrigé

---

## 🐛 Bug Identifié

**Fichier** : `src/pages/FicheProgrammePage.jsx`

**Avant (Ligne 45-46)** :
```javascript
const seoTitle = `${programme.titre} | Programmes Immobiliers | NORO Immobilier`
const seoDesc = `${programme.titre}. ${programme.localisation...`
```

**Problème** :
- `programme.titre` est **undefined**
- Le H1 utilisait correctement `programme.nom` (ligne 75)
- Résultat : titre SEO affichait "undefined"

---

## ✅ Correction Appliquée

**Après (Ligne 45-46)** :
```javascript
const seoTitle = `${programme.nom} | Programmes Immobiliers | NORO Immobilier`
const seoDesc = `${programme.nom}. ${programme.localisation...`
```

**Changement** : `programme.titre` → `programme.nom`

✅ **Confirmé : Sauvegardé**

---

## ✅ npm run build

```
✓ built in 1.45s
```

✅ **Build réussi sans erreur**

---

## 📏 Vérification Manuelle (Script Console à Lancer)

**Procédure** :
1. Ouvrir http://localhost:5173/programmes/cite-noro-diamniadio
2. Ouvrir DevTools Console (F12)
3. Copier-coller le script ci-dessous
4. Répéter pour les 2 autres programmes : `/programmes/residence-filaos`, `/programmes/domaine-bambilor`

### Script de Vérification

```javascript
console.log('=== VÉRIFICATION TITRE SEO PROGRAMME ===\n');

const title = document.title;
const url = window.location.pathname;

console.log(`URL: ${url}`);
console.log(`Titre affiche: "${title}"\n`);

if (title.includes('undefined')) {
  console.log('❌ ERREUR: Titre contient "undefined"');
} else if (title.includes('|')) {
  const parts = title.split(' | ');
  console.log(`✓ Nom du programme: "${parts[0]}"`);
  console.log(`✓ Format OK: "${title}"`);
} else {
  console.log('⚠️  Titre ne contient pas " | "');
}
```

---

## 📋 Résultats Attendus Après Correction

| Programme | ID | Titre SEO Attendu |
|-----------|----|----|
| Cité NORO — Diamniadio | `cite-noro-diamniadio` | `Cité NORO — Diamniadio \| Programmes Immobiliers \| NORO Immobilier` |
| Résidence Les Filaos — Saly | `residence-filaos` | `Résidence Les Filaos — Saly \| Programmes Immobiliers \| NORO Immobilier` |
| Domaine de Bambilor | `domaine-bambilor` | `Domaine de Bambilor \| Programmes Immobiliers \| NORO Immobilier` |

---

## 📋 Checklist

| Élément | Status |
|---------|--------|
| Bug identifié | ✅ |
| Cause trouvée | ✅ |
| Correction appliquée | ✅ |
| npm run build | ✅ |
| Prêt pour vérification locale | ✅ |

---

## 🚫 Ne Pas Faire

- ❌ Ne pas pousser sur GitHub tout de suite
- ⏳ Attendre validation manuelle en local d'abord

---

**Date** : 15 septembre 2026  
**Correction** : ✅ Complétée  
**Build** : ✅ Réussi  
**Prêt pour validation locale** : ✅
