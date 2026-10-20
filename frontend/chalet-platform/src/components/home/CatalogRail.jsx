import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCatalog } from '../../context/useCatalog'
import {
  localizedCategory,
  localizedDescription,
  localizedName,
  localizedRegion,
} from '../../data/localization'

function CatalogSlider({ label, title, items, getDescription, getPath }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const currentItem = items[activeIndex]

  useEffect(() => {
    if (items.length < 2) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [items])

  if (!currentItem) {
    return null
  }

  const move = (direction) => {
    setActiveIndex((index) => (
      (index + direction + items.length) % items.length
    ))
  }

  return (
    <section className="aurea-catalog-section">
      <div className="aurea-catalog-heading">
        <div>
          <span>{label}</span>
          <h3>{title}</h3>
        </div>
        <div className="aurea-catalog-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Élément précédent">
            <ArrowLeft size={15} />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Élément suivant">
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <Link className="aurea-catalog-card" to={getPath(currentItem)}>
        <div className="aurea-catalog-image">
          <img src={currentItem.image} alt={currentItem.name} />
          <span className="aurea-catalog-count">
            {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
          <span className="aurea-catalog-arrow">
            <ArrowUpRight size={17} />
          </span>
        </div>
        <div className="aurea-catalog-copy">
          <h4>{localizedName(currentItem)}</h4>
          <p>{getDescription(currentItem)}</p>
        </div>
      </Link>

      <div className="aurea-catalog-dots" aria-label={`Choisir ${title.toLowerCase()}`}>
        {items.map((item, index) => (
          <button
            key={item.id ?? item.name}
            type="button"
            aria-label={`Afficher ${localizedName(item)}`}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

function CatalogRail() {
  const { terrains, models, options } = useCatalog()

  return (
    <div className="aurea-catalog-rail">
      <CatalogSlider
        label="01 · Le terrain"
        title="Des lieux sélectionnés"
        items={terrains}
        getDescription={(terrain) => `${localizedRegion(terrain.region)} · ${localizedCategory(terrain.categoryLabel)}`}
        getPath={(terrain) => `/terrains/${terrain.id}`}
      />
      <CatalogSlider
        label="02 · Le modèle"
        title="Une architecture sur mesure"
        items={models}
        getDescription={(model) => localizedDescription(model)}
        getPath={() => '/chalet-models'}
      />
      <CatalogSlider
        label="03 · Les options"
        title="Les détails qui vous ressemblent"
        items={options}
        getDescription={(option) => localizedDescription(option)}
        getPath={() => '/options'}
      />
    </div>
  )
}

export default CatalogRail
