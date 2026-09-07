# POUR CLAUDE — Problème Helmet Confirmé

**Date** : 6 septembre 2026

---

## ✅ Diagnostic Confirmé

### Test Effectué

Dans `src/pages/AcheterPage.jsx`, j'ai ajouté un `useEffect` qui modifie `document.title` directement :

```javascript
useEffect(() => {
  document.title = 'TEST-MANUEL-12345'
}, [])
```

### Résultat

✅ **Le titre de l'onglet devient `"TEST-MANUEL-12345"`**

**Cela prouve** : `document.title` CAN être modifié dans cet environnement.

---

## 🚨 Le Vrai Problème

Le composant `<SEO>` avec `react-helmet-async` **ne fonctionne pas**, même si :
- ✅ Le code est syntaxiquement correct
- ✅ Les versions sont compatibles (React 18.3.1 + Helmet 3.0.0)
- ✅ `<HelmetProvider>` enveloppe `<App>`
- ✅ `document.title` peut être modifié normalement

**Le problème est spécifique à `react-helmet-async`.**

---

## 📋 Code à Analyser

**3 fichiers clés** :

### 1. `src/main.jsx` (lignes 7-13)
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
```

### 2. `src/components/SEO.jsx` (complet, 27 lignes)
```javascript
import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = 'NORO Immobilier',
  description = 'Agence immobilière au Sénégal...',
  ogImage = 'https://noro-immobilier.sn/og-image.png',
  ogType = 'website',
  canonicalUrl = 'https://noro-immobilier.sn'
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  )
}
```

### 3. `src/pages/AcheterPage.jsx` (extrait, lignes 71-77)
```javascript
return (
  <>
    <SEO
      title="Acheter un bien immobilier au Sénégal | NORO Immobilier"
      description="Découvrez nos terrains, maisons et villas à vendre..."
      canonicalUrl="https://noro-immobilier.sn/acheter"/>
    <div className={styles.page}>
```

---

## ❓ Question pour Claude

Pourquoi `react-helmet-async` n'injecte aucun meta tag dans le `<head>`, même si :
- Le composant est correctement structuré
- `document.title` CAN être modifié dans cet environnement (prouvé par le test)
- Aucune erreur console

**Utilise Playwright pour vérifier réellement le contenu du `<head>` et identifie la cause.**

---

## 🔧 Contexte Supplémentaire

- Node version : v23.11.0
- Vite : v5.4.21
- Le test diagnostic a confirmé que JS classique fonctionne
- Le serveur dev tourne sans erreurs
- Build production réussit
