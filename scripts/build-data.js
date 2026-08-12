// Ce script tourne automatiquement a chaque deploiement Netlify.
// Il lit tous les fichiers dans content/biens/ (geres par l'admin Decap CMS)
// et les compile dans data/properties.json, que le site charge au chargement.

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content', 'biens');
const OUTPUT_FILE = path.join(__dirname, '..', 'data', 'properties.json');

function main() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.log('Aucun dossier content/biens trouve, creation d\'un fichier vide.');
    fs.writeFileSync(OUTPUT_FILE, '[]');
    return;
  }

  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.json'));
  const properties = files.map((file, idx) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
    const data = JSON.parse(raw);
    const id = idx + 1;

    let moratoire = null;
    if (data.moratoire_disponible) {
      moratoire = {
        prix: data.moratoire_prix || null,
        acompte: data.moratoire_acompte || null,
        mensualite: data.moratoire_mensualite || null,
        duree: data.moratoire_duree || null,
      };
    }

    return {
      id,
      zone: data.zone || '',
      type: data.type || 'Terrain',
      superficie: data.superficie || null,
      prix: data.prix || null,
      titre: data.titre_foncier || '',
      statut: data.statut || 'disponible',
      commentaire: data.description || '',
      moratoire,
      photo: data.photo || null,
    };
  });

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(properties, null, 2));
  console.log(`OK: ${properties.length} biens compiles dans data/properties.json`);
}

main();
