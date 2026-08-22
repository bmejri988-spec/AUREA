const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/catalog'

async function getCollection(resource) {
  const response = await fetch(`${API_BASE_URL}/${resource}/`)

  if (!response.ok) {
    throw new Error(`Catalog request failed: ${response.status}`)
  }

  const payload = await response.json()
  return payload.results ?? payload
}

export async function fetchCatalog() {
  const [models, terrains, options, optionCategories, terrainCategories, modelOptions] = await Promise.all([
    getCollection('models'),
    getCollection('terrains'),
    getCollection('options'),
    getCollection('option-categories'),
    getCollection('terrain-categories'),
    getCollection('model-options'),
  ])

  return { models, terrains, options, optionCategories, terrainCategories, modelOptions }
}
