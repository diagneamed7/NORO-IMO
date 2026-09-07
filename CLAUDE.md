# NORO Immobilier — Contexte Projet

**Site web pour agence immobilière** au Sénégal (vente, location, construction, gestion locative).  
Cible : clientèle locale + diaspora sénégalaise.

---

## 🎯 Règle Absolue : Source de Vérité = `design-reference/`

Le dossier `design-reference/` contient l'export complet du design validé par le client (fichiers `.dc.html`).  
**C'est LA référence absolue** pour toute page ou composant à construire.

### ⛔ Interdit
- Réinventer une couleur, une police, un espacement, une structure
- « Améliorer » ou simplifier le design existant
- Construire une page sans avoir d'abord regardé son fichier `.dc.html` correspondant

---

## 🏗 Architecture

| Domaine | Stack |
|---------|-------|
| **Frontend** | React + Vite + React Router (dans `src/`) |
| **Backend/CMS** | Decap CMS (Git-based, déjà fonctionnel) |
| **Données** | `content/biens/` (16 biens réels : terrains/maisons à Kounoune, Tivaoune Peulh, Yéné, Guéréo, Pout, Bambilor, Bayakh, Thiès, Toubab Dialaw) |
| **Déploiement** | Netlify (automatique sur `main`) |

### 🚫 NE PAS MODIFIER (Decap CMS)
- `admin/`
- `content/biens/`
- `scripts/build-data.js`
- `netlify.toml`
- `data/`
- `uploads/`

---

## 📋 Méthode de Travail : Par Phases

1. **Avancer phase par phase** (plan fourni par l'utilisateur)
2. **À la fin de CHAQUE phase :**
   - Produire un rapport `PHASE-X-REPORT.md` listant ce qui a été fait
   - Citer le fichier `design-reference/` utilisé pour chaque élément
   - Attendre validation avant la phase suivante
3. **Ne jamais anticiper** une phase future sans validation explicite

---

## ⚠️ Erreurs Déjà Rencontrées

- Ne pas rebaptiser les classes CSS existantes ni le système de variables
- Ne pas oublier des sections entières (simulateur, témoignages, bandeau CTA, WhatsApp flottant)
- Copier le CSS existant tel quel plutôt que le régénérer

---

## 💳 Credits Netlify

Plan gratuit : **300 credits/mois** (15 par déploiement = 20 max/mois).  
→ Grouper les modifications avant de push.

---

## 📞 Données Réelles

- Coordonnées NORO actuellement en placeholder : `+221 77 000 00 00`
- À remplacer avant mise en production réelle

---

## 🚀 Prêt à Travailler

À chaque session, il suffit de :
1. Lire ce fichier pour le contexte
2. Consulter le plan de phase actuelle
3. Vérifier le fichier `design-reference/` correspondant
4. Implémenter, puis rendre un rapport
