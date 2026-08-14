import { useEffect, useState } from 'react'

export function useProperties() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/properties.json', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => {
        console.error('Impossible de charger les biens', err)
        setProperties([])
      })
      .finally(() => setLoading(false))
  }, [])

  return { properties, loading }
}
