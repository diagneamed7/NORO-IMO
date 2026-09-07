// Données partagées du site NORO Immobilier (démo) — photos Unsplash créditées.
const P = (id, w) => `https://images.unsplash.com/photo-${id}?fm=jpg&q=70&w=${w}&auto=format&fit=crop`;

const PH = {
  villaA:   { photo: P('1580587771525-78b9dba3b914', 1200), credit: 'Photo par Ярослав Алексеенко sur Unsplash', creditHref: 'https://unsplash.com/@webaliser' },
  villaB:   { photo: P('1605146769289-440113cc3d00', 1200), credit: 'Photo par Dillon Kydd sur Unsplash', creditHref: 'https://unsplash.com/@kyddvisuals' },
  immeuble: { photo: P('1479839672679-a46483c0e7c8', 1200), credit: 'Photo par Joel Filipe sur Unsplash', creditHref: 'https://unsplash.com/@joelfilip' },
  terrainA: { photo: P('1494187570835-b188e7f0f26e', 1200), credit: 'Photo par Dawid Zawiła sur Unsplash', creditHref: 'https://unsplash.com/@davealmine' },
  terrainB: { photo: P('1629435346352-77280561888a', 1200), credit: 'Photo par Ante Samarzija sur Unsplash', creditHref: 'https://unsplash.com/@antesamarzija' },
  terrainC: { photo: P('1495107334309-fcf20504a5ab', 1200), credit: 'Photo par Benjamin Davies sur Unsplash', creditHref: 'https://unsplash.com/@bendavisual' },
  salon:    { photo: P('1560448204-e02f11c3d0e2', 1200), credit: 'Photo par Francesca Tosolini sur Unsplash', creditHref: 'https://unsplash.com/@fromitaly' },
  cuisine:  { photo: P('1745794621090-d856c53b0cc2', 1200), credit: 'Photo par Clay Banks sur Unsplash', creditHref: 'https://unsplash.com/@claybanks' },
  sam:      { photo: P('1593696140826-c58b021acf8b', 1200), credit: 'Photo par Lotus Design N Print sur Unsplash', creditHref: 'https://unsplash.com/@lotusdnp' },
  aerienA:  { photo: P('1669003152631-c953ac9f3ed3', 1400), credit: 'Photo par Point3D Commercial Imaging Ltd. sur Unsplash', creditHref: 'https://unsplash.com/@3dottawa' },
  aerienB:  { photo: P('1669003152238-5bd17a5bb19c', 1400), credit: 'Photo par Point3D Commercial Imaging Ltd. sur Unsplash', creditHref: 'https://unsplash.com/@3dottawa' },
  maison:   { photo: P('1592595896551-12b371d546d5', 1200), credit: 'Photo par Ronnie George sur Unsplash', creditHref: 'https://unsplash.com/@realestateron' },
  cote:     { photo: P('1764223531702-1614efb82e40', 1400), credit: 'Photo par Paul Addo sur Unsplash', creditHref: 'https://unsplash.com/@pisprope_25' },
  maisons:  { photo: P('1748228885250-49564b614db9', 1200), credit: 'Photo par Braden Jarvis sur Unsplash', creditHref: 'https://unsplash.com/@jarvisphoto' },
  duplex:   { photo: P('1565402170291-8491f14678db', 1200), credit: 'Photo par Avi Waxman sur Unsplash', creditHref: 'https://unsplash.com/@aviosly' },
  facade:   { photo: P('1601622962666-d0b6d43a7ac7', 1200), credit: 'Photo par Harry Dona sur Unsplash', creditHref: 'https://unsplash.com/@harrydona' },
  tour:     { photo: P('1582407947304-fd86f028f716', 1200), credit: 'Photo par Jason Dent sur Unsplash', creditHref: 'https://unsplash.com/@jdent' },
  fenetres: { photo: P('1448630360428-65456885c650', 1200), credit: 'Photo par Étienne Beauregard-Riverin sur Unsplash', creditHref: 'https://unsplash.com/@etienne_beauregard' },
};

const AVATARS = {
  aminata: { photo: P('1573496359142-b8d87734a5a2', 300), credit: 'Photo par Christina @ wocintechchat.com sur Unsplash', creditHref: 'https://unsplash.com/@wocintechchat' },
  ousmane: { photo: P('1599566150163-29194dcaad36', 300), credit: 'Photo par Vicky Hladynets sur Unsplash', creditHref: 'https://unsplash.com/@vhladynets' },
  fatou:   { photo: P('1580489944761-15a19d654956', 300), credit: 'Photo par Jake Nackos sur Unsplash', creditHref: 'https://unsplash.com/@jakenackos' },
  moussa:  { photo: P('1494790108377-be9c29b29330', 300), credit: 'Photo par Michael Dam sur Unsplash', creditHref: 'https://unsplash.com/@michaeldam' },
};

const fcfa = (n) => Math.round(n).toLocaleString('fr-FR').replace(/\u202f|\u00a0/g, ' ') + ' FCFA';

function bien(o) {
  const prixM2 = o.transaction === 'Location'
    ? fcfa(o.prix / o.surface) + ' / m² / mois'
    : fcfa(o.prix / o.surface) + ' / m²';
  return Object.assign({}, o, {
    prixLabel: o.transaction === 'Location' ? fcfa(o.prix) + ' / mois' : fcfa(o.prix),
    prixM2Label: prixM2,
    detail: [o.type, o.surface + ' m²'].concat(o.specs || []).join(' · '),
  });
}

const BIENS = [
  bien({ id: 'villa-almadies', titre: 'Villa contemporaine 4 chambres', zone: 'Almadies, Dakar', type: 'Villa', surface: 440, prix: 185000000, transaction: 'Vente', ruban: 'Exclusivité', rubanTon: 'orange', specs: ['Piscine', 'Titre foncier'], ...PH.villaA }),
  bien({ id: 'terrain-diamniadio', titre: 'Terrain viabilisé 300 m²', zone: 'Diamniadio', type: 'Terrain', surface: 300, prix: 12000000, transaction: 'Vente', ruban: 'Nouveau', rubanTon: 'bleu', specs: ['Lotissement', 'Bail en cours'], ...PH.terrainA }),
  bien({ id: 'appart-mermoz', titre: 'Appartement standing 3 pièces', zone: 'Mermoz, Dakar', type: 'Appartement', surface: 120, prix: 850000, transaction: 'Location', ruban: 'Location', rubanTon: 'bleu', specs: ['Meublé', 'Ascenseur'], ...PH.salon }),
  bien({ id: 'villa-ngaparou', titre: 'Villa duplex avec piscine', zone: 'Ngaparou, Saly', type: 'Villa', surface: 375, prix: 145000000, transaction: 'Vente', ruban: 'Exclusivité', rubanTon: 'orange', specs: ['5 chambres', 'Résidence gardée'], ...PH.villaB }),
  bien({ id: 'parcelle-bambilor', titre: 'Parcelle 200 m² — Cité NORO', zone: 'Bambilor', type: 'Terrain', surface: 200, prix: 4500000, transaction: 'Moratoire', ruban: 'Moratoire 24 mois', rubanTon: 'bleu', specs: ['Voirie tracée', 'Paiement échelonné'], ...PH.terrainB }),
  bien({ id: 'immeuble-keur-massar', titre: 'Immeuble R+2 — 6 appartements', zone: 'Keur Massar', type: 'Immeuble', surface: 450, prix: 95000000, transaction: 'Vente', ruban: 'Investissement', rubanTon: 'orange', specs: ['Loué', 'Gestion incluse'], ...PH.immeuble }),
  bien({ id: 'villa-ngor', titre: 'Villa familiale 5 chambres', zone: 'Ngor, Dakar', type: 'Villa', surface: 520, prix: 265000000, transaction: 'Vente', ruban: 'Exclusivité', rubanTon: 'orange', specs: ['Jardin', 'Vue mer'], ...PH.maison }),
  bien({ id: 'appart-plateau', titre: 'Appartement 2 pièces rénové', zone: 'Plateau, Dakar', type: 'Appartement', surface: 78, prix: 62000000, transaction: 'Vente', ruban: 'Nouveau', rubanTon: 'bleu', specs: ['Rénové', 'Parking'], ...PH.cuisine }),
  bien({ id: 'terrain-thies', titre: 'Terrain 500 m² bord de route', zone: 'Thiès', type: 'Terrain', surface: 500, prix: 15000000, transaction: 'Vente', ruban: 'Titre foncier', rubanTon: 'bleu', specs: ['Clôturé', 'Accès goudron'], ...PH.terrainC }),
  bien({ id: 'maison-bambilor', titre: 'Maison R+1 — 4 chambres', zone: 'Bambilor', type: 'Maison', surface: 260, prix: 48000000, transaction: 'Vente', ruban: 'Nouveau', rubanTon: 'bleu', specs: ['Neuve', 'Garage'], ...PH.facade }),
  bien({ id: 'duplex-saly', titre: 'Duplex meublé 3 chambres', zone: 'Saly Portudal', type: 'Maison', surface: 180, prix: 1200000, transaction: 'Location', ruban: 'Location', rubanTon: 'bleu', specs: ['Meublé', 'Piscine commune'], ...PH.duplex }),
  bien({ id: 'appart-almadies', titre: 'Appartement 4 pièces vue mer', zone: 'Almadies, Dakar', type: 'Appartement', surface: 150, prix: 1600000, transaction: 'Location', ruban: 'Location', rubanTon: 'bleu', specs: ['Meublé', 'Gardiennage 24h'], ...PH.tour }),
  bien({ id: 'terrain-keur-massar', titre: 'Terrain 150 m² lotissement', zone: 'Keur Massar', type: 'Terrain', surface: 150, prix: 3200000, transaction: 'Moratoire', ruban: 'Moratoire 18 mois', rubanTon: 'bleu', specs: ['Bail', 'Échelonné'], ...PH.aerienB }),
  bien({ id: 'villa-diamniadio', titre: 'Villa neuve 4 chambres', zone: 'Diamniadio', type: 'Villa', surface: 320, prix: 78000000, transaction: 'Vente', ruban: 'Nouveau', rubanTon: 'bleu', specs: ['Livrée', 'Résidence fermée'], ...PH.maisons }),
  bien({ id: 'studio-sacre-coeur', titre: 'Studio meublé standing', zone: 'Sacré-Cœur, Dakar', type: 'Appartement', surface: 45, prix: 350000, transaction: 'Location', ruban: 'Location', rubanTon: 'bleu', specs: ['Meublé', 'Courte durée'], ...PH.sam }),
  bien({ id: 'immeuble-mermoz', titre: 'Immeuble R+3 — 8 appartements', zone: 'Mermoz, Dakar', type: 'Immeuble', surface: 620, prix: 310000000, transaction: 'Vente', ruban: 'Investissement', rubanTon: 'orange', specs: ['Rentabilité 9 %', 'Loué'], ...PH.fenetres }),
  bien({ id: 'maison-thies', titre: 'Maison 3 chambres avec cour', zone: 'Thiès', type: 'Maison', surface: 210, prix: 450000, transaction: 'Location', ruban: 'Location', rubanTon: 'bleu', specs: ['Non meublée', 'Cour privée'], ...PH.villaB }),
  bien({ id: 'terrain-ngaparou', titre: 'Terrain 400 m² à 800 m de la plage', zone: 'Ngaparou, Saly', type: 'Terrain', surface: 400, prix: 28000000, transaction: 'Vente', ruban: 'Exclusivité', rubanTon: 'orange', specs: ['Titre foncier', 'Viabilisé'], ...PH.cote }),
];

const PROGRAMMES = [
  { id: 'cite-noro-diamniadio', nom: 'Cité NORO — Diamniadio', statut: 'En commercialisation', statutTon: 'orange', prixDep: 'À partir de 12 000 000 FCFA', desc: '120 parcelles viabilisées de 200 à 400 m², à 8 min du pôle urbain. Voirie, eau et électricité raccordées.', dispo: '38 parcelles disponibles', ...PH.aerienA },
  { id: 'residence-filaos', nom: 'Résidence Les Filaos — Saly', statut: 'Livraison 2027', statutTon: 'bleu', prixDep: 'À partir de 65 000 000 FCFA', desc: '18 villas de 3 et 4 chambres avec piscine commune, à 900 m de la plage. Idéal résidence secondaire.', dispo: '11 villas disponibles', ...PH.maison },
  { id: 'domaine-bambilor', nom: 'Domaine de Bambilor', statut: 'Moratoire 24 mois', statutTon: 'orange', prixDep: 'À partir de 4 500 000 FCFA', desc: '80 parcelles de 150 à 300 m² sous titre foncier, avec paiement échelonné sans intérêt.', dispo: '52 parcelles disponibles', ...PH.terrainB },
  { id: 'cite-keur-massar', nom: 'Cité Teranga — Keur Massar', statut: 'Livraison 2026', statutTon: 'bleu', prixDep: 'À partir de 32 000 000 FCFA', desc: '24 maisons R+1 de 3 chambres dans un lotissement clôturé et gardé, à 15 min de la VDN.', dispo: '9 maisons disponibles', ...PH.maisons },
];

const TEMOIGNAGES = [
  { nom: 'Aminata D.', role: 'Diaspora, Paris', texte: '« J\u2019ai acheté mon terrain à Diamniadio depuis Paris. Visite en visio, documents vérifiés, virement sécurisé : tout s\u2019est fait en six semaines, sans un seul déplacement. »', ...AVATARS.aminata },
  { nom: 'Ousmane F.', role: 'Propriétaire bailleur, Dakar', texte: '« NORO gère mon immeuble à Keur Massar depuis deux ans. Les loyers arrivent à date fixe et je reçois un rapport clair chaque mois. »', ...AVATARS.ousmane },
  { nom: 'Fatou N.', role: 'Construction, Saly', texte: '« Plans, devis, chantier : l\u2019équipe a construit notre villa à Saly en respectant le budget annoncé. Le suivi photo hebdomadaire nous a rassurés. »', ...AVATARS.fatou },
  { nom: 'Moussa S.', role: 'Investisseur, Milan', texte: '« Deux appartements achetés en trois ans, entièrement gérés par NORO. La vérification foncière avant achat m\u2019a évité une très mauvaise affaire. »', ...AVATARS.moussa },
];

export { BIENS, PROGRAMMES, TEMOIGNAGES, PH, AVATARS, fcfa };
