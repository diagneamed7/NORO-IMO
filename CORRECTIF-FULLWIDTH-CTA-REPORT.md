# CORRECTIF - CTA Pleine Largeur (Regression)

**Date** : 19 août 2026  
**Status** : ✅ COMPLÉTÉ

---

## 1. Regression Identifiée

Le correctif padding précédent a introduit une regression : le fond bleu de la section CTA n'occupait plus la pleine largeur de la fenêtre, mais était boxé avec `max-width: 1280px`.

### Symptôme
```
window.innerWidth = 1440px
.ctaSection getComputedStyle:
  width: 1280px                    ❌ (devrait être 1440px)
  left: 80px                       ❌ (centré au lieu de plein écran)
  maxWidth: 1280px                 ❌ (appliqué à tort à la section)
  background: rgb(10, 77, 155)     ✅ (bleu correct, mais sur boîte small)
```

---

## 2. Cause Exacte

Le correctif précédent avait fusionné tous les styles dans un seul `.ctaSection` :

```css
/* Incorrect - mélange les rôles */
.ctaSection {
  margin-top: 80px;
  background: var(--color-primary);
  padding: 64px 24px;           /* ← Problem: padding horizontal */
  max-width: var(--max-width);  /* ← Problem: boxe le fond */
  margin-left: auto;            /* ← Problem: centre la boîte */
  margin-right: auto;           /* ← Problem: centre la boîte */
  display: flex;                /* ← Problem: layout ici */
  ...
}
```

Cela rend `.ctaSection` comme une boîte centrée avec max-width, au lieu d'une section pleine largeur avec du contenu centré dedans.

---

## 3. Solution Appliquée

### Structure correcte : 2 niveaux distincts

**Design source** (référence) :
```html
<section style="margin-top:80px;background:#0A4D9B;padding:64px 0">
  <div style="max-width:1280px;margin:0 auto;padding:0 24px;display:flex;...">
    ...content...
  </div>
</section>
```

### Implémentation React

#### 3.1 AcheterPage.jsx
```jsx
<section className={styles.ctaSection}>
  <div className={styles.ctaSectionInner}>
    <div className={styles.ctaContent}>...</div>
    <div className={styles.ctaButtons}>...</div>
  </div>
</section>
```

#### 3.2 LouerPage.jsx
```jsx
<section className={styles.propertyMgmtSection}>
  <div className={styles.propertyMgmtInner}>
    <div>...</div>
    <ul className={styles.benefitsList}>...</ul>
  </div>
</section>
```

### CSS Corrigé

```css
/* Section extérieure : fond pleine largeur */
.ctaSection {
  margin-top: 80px;
  background: var(--color-primary);
  padding: 64px 0;  /* ← Vertical uniquement */
  /* PAS de max-width, margin auto, ou flex ici */
}

/* Wrapper intérieur : contenu centré et responsive */
.ctaSectionInner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;  /* ← Horizontal pour responsive */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

/* Même pattern pour propertyMgmtSection */
.propertyMgmtSection {
  margin-top: 80px;
  background: var(--color-gray-100);
  padding: 66px 0;
}

.propertyMgmtInner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 34px;
  align-items: center;
}
```

---

## 4. Vérification (getComputedStyle Attendu)

Après correction :

```javascript
// Section EXTÉRIEURE (doit être pleine largeur)
const section = document.querySelector('.ctaSection')
const rect = section.getBoundingClientRect()

rect.width                    // → 1440 (window.innerWidth) ✅
rect.left                     // → 0 ✅
getComputedStyle(section).maxWidth    // → "none" ✅ (pas appliqué)
getComputedStyle(section).padding     // → "64px 0px" ✅
getComputedStyle(section).background  // → "rgb(10, 77, 155)" ✅

// Wrapper INTÉRIEUR (centré avec max-width)
const inner = document.querySelector('.ctaSectionInner')
const innerRect = inner.getBoundingClientRect()

getComputedStyle(inner).maxWidth  // → "1280px" ✅
innerRect.width                   // → 1280 ✅
getComputedStyle(inner).padding   // → "0px 24px" ✅
```

---

## 5. Fichiers Modifiés

| Fichier | Modification |
|---------|--------------|
| `src/pages/AcheterPage.jsx` | Ajout wrapper `.ctaSectionInner` |
| `src/pages/LouerPage.jsx` | Ajout wrapper `.propertyMgmtInner` |
| `src/pages/PagesListing.module.css` | Séparation styles + nouvelles classes |

---

## 6. Pages Corrigées

| Page | Section | CSS Class | Status |
|------|---------|-----------|--------|
| `/acheter` | CTA "Vous ne trouvez pas..." | `.ctaSection` + `.ctaSectionInner` | ✅ |
| `/louer` | Property Mgmt "Vous avez un bien..." | `.propertyMgmtSection` + `.propertyMgmtInner` | ✅ |

---

## 7. Build & Compilation

```
✓ 47 modules transformed.
✓ built in 976ms
```

**Status** : ✅ Build sans erreur

---

## ✅ Checklist

| Item | Status |
|------|--------|
| Regression identifiée (fond boxé) | ✅ |
| Cause exacte trouvée (max-width sur section) | ✅ |
| Structure 2-niveaux restaurée | ✅ |
| AcheterPage.jsx corrigée | ✅ |
| LouerPage.jsx corrigée | ✅ |
| CSS séparé proprement | ✅ |
| Build sans erreur | ✅ |
| HomePage vérifiée (pas affectée) | ✅ |

---

## ✅ Prêt pour Production

Les sections CTA sont maintenant :
- ✅ Pleine largeur (fond s'étend 100%)
- ✅ Contenu centré et responsive (padding 24px)
- ✅ Espacement vertical correct (64px/66px haut+bas)
- ✅ Structure HTML clean (2 niveaux distincts)
- ✅ CSS propre (plus de duplication)

**Prochaine phase** : PHASE 4 ✅

