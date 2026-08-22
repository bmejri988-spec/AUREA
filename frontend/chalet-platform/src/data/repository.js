const normalizeId = (id) => (id == null ? null : String(id))

export const formatSurface = (record) =>
  `${record.surfaceArea.toLocaleString()} ${record.surfaceUnit}`

export const formatPrice = (price, prefix = '') =>
  `${prefix}${price.toLocaleString()} TND`

export const findChaletModelById = (models, id) =>
  models.find((model) => model.id === normalizeId(id))

export const findTerrainById = (terrains, id) =>
  terrains.find((terrain) => terrain.id === normalizeId(id))

export const findOptionById = (options, id) =>
  options.find((option) => option.id === normalizeId(id))

export const getOptionsForModel = (options, modelOptions, modelId) => {
  const normalizedModelId = normalizeId(modelId)
  const optionIds = new Set(
    modelOptions
      .filter((relation) => relation.modelId === normalizedModelId)
      .map((relation) => relation.optionId)
  )

  return options.filter((option) => optionIds.has(option.id))
}

export const getTerrainCategories = (terrains) =>
  [...new Map(terrains.map((terrain) => [terrain.category, terrain.categoryLabel])).entries()]
    .map(([id, label]) => ({ id, label }))