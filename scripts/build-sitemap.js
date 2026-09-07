import fs from 'fs'
import path from 'path'

const domain = 'https://noro-immobilier.sn'

// Routes statiques
const staticRoutes = [
  '/',
  '/acheter',
  '/louer',
  '/vendre',
  '/gestion-locative',
  '/construction',
  '/programmes',
  '/contact',
  '/mentions-legales',
  '/confidentialite',
  '/cgu'
]

// Fonction pour générer le sitemap
async function buildSitemap() {
  try {
    // Lire les propriétés pour les routes dynamiques /biens/:slug
    const propertiesPath = './data/properties.json'
    let properties = []

    if (fs.existsSync(propertiesPath)) {
      const data = fs.readFileSync(propertiesPath, 'utf-8')
      properties = JSON.parse(data)
    }

    // Lire les programmes (depuis src/data/programmes.js)
    let programmes = []
    try {
      // Nous devons utiliser dynamicImport pour importer un fichier ESM
      const programmesModule = await import('../src/data/programmes.js')
      programmes = programmesModule.PROGRAMMES || []
    } catch (err) {
      console.warn('⚠️  Impossible de charger les programmes:', err.message)
    }

    // Construire l'array d'URLs
    const urls = []

    // Ajouter les routes statiques
    staticRoutes.forEach(route => {
      urls.push({
        loc: domain + route,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: route === '/' ? '1.0' : '0.8'
      })
    })

    // Ajouter les routes dynamiques pour les biens
    properties.forEach(property => {
      const slug = property.slug || property.id
      urls.push({
        loc: domain + `/biens/${slug}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: '0.7'
      })
    })

    // Ajouter les routes dynamiques pour les programmes
    programmes.forEach(programme => {
      urls.push({
        loc: domain + `/programmes/${programme.id}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: '0.7'
      })
    })

    // Générer le XML
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    urls.forEach(url => {
      xml += '  <url>\n'
      xml += `    <loc>${url.loc}</loc>\n`
      xml += `    <lastmod>${url.lastmod}</lastmod>\n`
      xml += `    <changefreq>${url.changefreq}</changefreq>\n`
      xml += `    <priority>${url.priority}</priority>\n`
      xml += '  </url>\n'
    })

    xml += '</urlset>'

    // Créer le répertoire public/data s'il n'existe pas
    const publicDir = './public'
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    // Écrire le fichier sitemap.xml
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf-8')
    console.log(`✅ sitemap.xml généré (${urls.length} URLs)`)
  } catch (error) {
    console.error('❌ Erreur lors de la génération du sitemap:', error)
    process.exit(1)
  }
}

buildSitemap()
