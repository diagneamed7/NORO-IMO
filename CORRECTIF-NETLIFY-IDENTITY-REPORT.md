# CORRECTIF URGENT — Script Netlify Identity Manquant

**Date** : 6 septembre 2026  
**Bug** : `window.netlifyIdentity` undefined  
**Cause** : Script Netlify Identity manquant de `index.html`  
**Status** : ✅ Corrigé — Vérification locale requise

---

## 🔍 Bug Confirmé

**Symptôme** :
- Utilisateurs invités ne peuvent pas confirmer leur compte
- Lien email de confirmation ramène au site sans effet
- Connexion échoue avec "Email not confirmed"
- Console : `typeof window.netlifyIdentity === 'undefined'` → `true`

**Cause** :
- Le script `netlify-identity-widget.js` était manquant de `index.html`
- Probablement perdu lors de la migration React (Vite régénère `index.html`)

---

## ✅ Corrections Appliquées

### AVANT (Contenu exact)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
    <title>NORO Immobilier - Agence Immobilière au Sénégal</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### APRÈS (Contenu exact)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
    <title>NORO Immobilier - Agence Immobilière au Sénégal</title>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    <script>
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }
    </script>
  </body>
</html>
```

### Changements

**Ligne 11** (dans `<head>`) :
```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```
✅ AJOUTÉ

**Lignes 16-26** (avant `</body>`) :
```html
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
```
✅ AJOUTÉ

---

## ✅ Vérifications

- ✅ `<div id="root"></div>` présent (ligne 14)
- ✅ Script Vite `<script type="module" src="/src/main.jsx"></script>` présent (ligne 15)
- ✅ Aucun autre élément modifié
- ✅ Fichier sauvegardé

---

## 🧪 Vérification Manuelle Requise (En Local)

**Procédure** :

1. Redémarrer le serveur dev local :
   ```bash
   npm run dev
   ```

2. Ouvrir http://localhost:5173 dans le navigateur

3. Ouvrir DevTools Console (F12)

4. Copier-coller et lancer le script ci-dessous

### Script de Vérification

```javascript
console.log('=== VÉRIFICATION NETLIFY IDENTITY ===\n');

if (typeof window.netlifyIdentity !== 'undefined') {
  console.log('✅ window.netlifyIdentity existe');
  console.log('  Type:', typeof window.netlifyIdentity);
  console.log('  Méthodes disponibles:', Object.keys(window.netlifyIdentity).slice(0, 10).join(', '));
  console.log('\n✅ SUCCÈS : Netlify Identity chargé et prêt');
} else {
  console.error('❌ window.netlifyIdentity est undefined');
  console.error('  Le script netlify-identity-widget.js n\'a pas pu être chargé');
}

// Vérifier aussi si les listeners ont été attachés
console.log('\nVérification des listeners:');
if (window.netlifyIdentity && typeof window.netlifyIdentity.on === 'function') {
  console.log('✅ window.netlifyIdentity.on() est disponible (event listeners OK)');
} else {
  console.log('❌ Impossible d\'attacher des event listeners');
}
```

---

## 📋 Checklist

| Élément | Status |
|---------|--------|
| Script Netlify Identity dans `<head>` | ✅ |
| Script d'initialisation avant `</body>` | ✅ |
| `<div id="root"></div>` intact | ✅ |
| Script Vite intact | ✅ |
| Fichier sauvegardé | ✅ |
| Vérification locale requise | ⏳ |

---

## 🚫 Ne Pas Faire

- ❌ Ne pas pousser sur GitHub tout de suite
- ❌ Attendre la vérification manuelle en local d'abord
- ❌ La prochaine étape est git commit + push une fois validé

---

**Date** : 6 septembre 2026  
**Correction** : Appliquée ✅  
**Vérification locale** : ⏳ REQUISE
