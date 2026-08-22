import { useMemo, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

import Container from '../../components/common/Container'
import TerrainCard from '../../components/common/TerrainCard'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { getTerrainCategories } from '../../data/repository'
import { useCatalog } from '../../context/useCatalog'

function Terrains() {
  const { terrains } = useCatalog()
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredTerrains = useMemo(() => {
    if (activeFilter === 'all') {
      return terrains
    }

    return terrains.filter(
      (terrain) => terrain.category === activeFilter
    )
  }, [activeFilter, terrains])

  const filters = [
    { id: 'all', label: 'All' },
    ...getTerrainCategories(terrains),
  ]

  return (
    <main className="bg-[#F7F5F0]">

      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#1D2923]">

        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90"
          alt="Mountain landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        <Container className="relative z-10 pb-20 md:pb-28">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              The places
            </span>

            <h1 className="mt-5 font-serif text-7xl font-medium leading-[0.85] tracking-tight text-white md:text-8xl lg:text-[110px]">
              Find your
              <br />
              <span className="italic">place.</span>
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-6 text-white/70 md:text-base">
              Discover carefully selected locations where nature,
              architecture and the freedom of a second home come together.
            </p>
          </motion.div>

        </Container>

        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-white/60 md:flex">
          <span className="text-[10px] uppercase tracking-[0.25em]">
            Explore
          </span>

          <ArrowDown size={15} />
        </div>

      </section>

      {/* Main content */}
      <section className="py-24 md:py-32">

        <Container>

          {/* Intro */}
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                Our locations
              </span>

              <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
                Choose the environment
                <br />
                that feels like home.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#77766F]">
              Whether you dream of waking up beside the sea or
              escaping into the mountains, explore the places
              available for your future chalet.
            </p>

          </div>

          {/* Filters */}
          <div className="mt-16 flex flex-wrap gap-2 border-b border-[#DDD8CD] pb-5">

            {filters.map((filter) => {
              const active = filter.id === activeFilter

              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                    active
                      ? 'bg-[#1D2923] text-white'
                      : 'bg-transparent text-[#77766F] hover:bg-[#EFEBE2] hover:text-[#1D2923]'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}

          </div>

          {/* Results */}
          <motion.div
            layout
            className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredTerrains.map((terrain, index) => (
              <TerrainCard
                key={terrain.id}
                terrain={terrain}
                index={index}
              />
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredTerrains.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-serif text-3xl text-[#1D2923]">
                More places are coming soon.
              </p>

              <p className="mt-3 text-sm text-[#77766F]">
                We're continuously looking for exceptional locations.
              </p>
            </div>
          )}

        </Container>

      </section>

      <Footer />

    </main>
  )
}

export default Terrains