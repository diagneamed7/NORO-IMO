import { useEffect } from 'react'

export default function SEO({
  title = 'NORO Immobilier',
  description = 'Agence immobilière au Sénégal. Vente, location, construction, gestion locative de terrains et maisons.',
  ogImage = 'https://noro-immobilier.sn/og-image.png',
  ogType = 'website',
  canonicalUrl = 'https://noro-immobilier.sn',
}) {
  useEffect(() => {
    document.title = title

    function setMeta(attr, key, content) {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:image', ogImage)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)

    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonicalUrl)
  }, [title, description, ogImage, ogType, canonicalUrl])

  return null
}
