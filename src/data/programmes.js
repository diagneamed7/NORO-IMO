// Données des programmes NORO - Basé sur design-reference/noro-data.js
// Option B: Diamniadio contient les vraies données détaillées, Filaos et Bambilor affichent "sur demande"

const P = (id, w) => `https://images.unsplash.com/photo-${id}?fm=jpg&q=70&w=${w}&auto=format&fit=crop`

const PH = {
  aerienA:  { photo: P('1669003152631-c953ac9f3ed3', 1400), credit: 'Photo par Point3D Commercial Imaging Ltd. sur Unsplash', creditHref: 'https://unsplash.com/@3dottawa' },
  terrainA: { photo: P('1494187570835-b188e7f0f26e', 1200), credit: 'Photo par Dawid Zawiła sur Unsplash', creditHref: 'https://unsplash.com/@davealmine' },
  aerienB:  { photo: P('1669003152238-5bd17a5bb19c', 1400), credit: 'Photo par Point3D Commercial Imaging Ltd. sur Unsplash', creditHref: 'https://unsplash.com/@3dottawa' },
  maisons:  { photo: P('1748228885250-49564b614db9', 1200), credit: 'Photo par Braden Jarvis sur Unsplash', creditHref: 'https://unsplash.com/@jarvisphoto' },
}

// 3 programmes réels confirmés (validés Phase 1 sur HomePage)
const PROGRAMMES = [
  {
    id: 'cite-noro-diamniadio',
    nom: 'Cité NORO — Diamniadio',
    statut: 'En commercialisation',
    statutTon: 'orange',
    localisationCourte: 'Diamniadio, à 8 min du pôle urbain — 120 parcelles',
    descriptionCourte: '120 parcelles viabilisées de 200 à 400 m², à 8 min du pôle urbain. Voirie, eau et électricité raccordées.',
    prixAPartir: 12000000,
    photo: PH.aerienA.photo,
    credit: PH.aerienA.credit,
    creditHref: PH.aerienA.creditHref,

    // Detail complet - uniquement pour Diamniadio (vraies données du design-reference)
    detailComplet: {
      description: 'La Cité NORO est un lotissement de 120 parcelles viabilisées de 200 à 400 m², implanté à huit minutes du pôle urbain de Diamniadio et à vingt minutes de l\'aéroport AIBD. Voirie tracée et compactée, réseau d\'eau et branchement électrique sont livrés avant la remise des lots.\n\nChaque parcelle est vendue sous titre foncier morcelé, avec bornage contradictoire réalisé par un géomètre agréé. Les acquéreurs qui le souhaitent peuvent enchaîner directement sur une construction clé en main assurée par nos équipes.',
      caracteristiques: [
        { label: 'Surfaces des lots', value: '200 à 400 m²' },
        { label: 'Document', value: 'Titre foncier morcelé' },
        { label: 'Viabilisation', value: 'Eau, électricité, voirie' },
        { label: 'Bornage', value: 'Géomètre agréé' },
        { label: 'Construction', value: 'Possible avec NORO' },
        { label: 'Livraison des lots', value: 'Immédiate' },
      ],
      disponibilites: [
        { type: '200 m²', prix: '12 000 000 FCFA', restants: '21 lots' },
        { type: '300 m²', prix: '17 500 000 FCFA', restants: '12 lots' },
        { type: '400 m²', prix: '22 800 000 FCFA', restants: '5 lots' },
      ],
    }
  },
  {
    id: 'residence-filaos',
    nom: 'Résidence Les Filaos — Saly',
    statut: 'Livraison 2027',
    statutTon: 'bleu',
    localisationCourte: 'Saly, à 900 m de la plage',
    descriptionCourte: '18 villas de 3 et 4 chambres avec piscine commune, à 900 m de la plage. Idéal résidence secondaire.',
    prixAPartir: 65000000,
    photo: PH.maisons.photo,
    credit: PH.maisons.credit,
    creditHref: PH.maisons.creditHref,

    // Pas de détail complet pour Filaos - données partielles
    detailComplet: null,
  },
  {
    id: 'domaine-bambilor',
    nom: 'Domaine de Bambilor',
    statut: 'Moratoire 24 mois',
    statutTon: 'orange',
    localisationCourte: 'Bambilor',
    descriptionCourte: '80 parcelles de 150 à 300 m² sous titre foncier, avec paiement échelonné sans intérêt.',
    prixAPartir: 4500000,
    photo: PH.terrainA.photo,
    credit: PH.terrainA.credit,
    creditHref: PH.terrainA.creditHref,

    // Pas de détail complet pour Bambilor - données partielles
    detailComplet: null,
  },
]

export { PROGRAMMES, PH }
