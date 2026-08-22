import { useEffect, useState } from 'react'
import { fetchCatalog } from '../services/catalogApi'
import { CatalogContext } from './useCatalog'

export function CatalogProvider({ children }) {
  const [catalog, setCatalog] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    fetchCatalog()
      .then((data) => {
        if (active) {
          setCatalog(data)
        }
      })
      .catch((requestError) => {
        if (active) {
          setError(requestError)
        }
      })

    return () => {
      active = false
    }
  }, [])

  if (error) {
    return <p>Unable to load catalog data.</p>
  }

  if (!catalog) {
    return <p>Loading catalog...</p>
  }

  return (
    <CatalogContext.Provider value={catalog}>
      {children}
    </CatalogContext.Provider>
  )
}
