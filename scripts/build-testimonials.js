import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Répertoire source
const testimoniesDir = path.join(__dirname, '../content/temoignages')
const outputFile = path.join(__dirname, '../data/testimonials.json')

try {
  // Lire tous les fichiers JSON du répertoire
  const files = fs.readdirSync(testimoniesDir).filter(file => file.endsWith('.json'))

  const testimonials = files
    .map(file => {
      const filepath = path.join(testimoniesDir, file)
      const content = fs.readFileSync(filepath, 'utf-8')
      return JSON.parse(content)
    })
    .sort((a, b) => a.nom.localeCompare(b.nom))

  // Écrire le fichier de sortie
  fs.writeFileSync(outputFile, JSON.stringify(testimonials, null, 2), 'utf-8')

  console.log(`✅ Testimonials compilés: ${testimonials.length} témoignages dans data/testimonials.json`)
} catch (error) {
  console.error('❌ Erreur lors de la compilation des témoignages:', error)
  process.exit(1)
}
