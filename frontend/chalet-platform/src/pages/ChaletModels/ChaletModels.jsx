import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Container from '../../components/common/Container'
import Reveal from '../../components/common/Reveal'
import ChaletModelCard from '../../components/common/ChaletModelCard'
import { formatPrice, formatSurface } from '../../data/repository'
import { useCatalog } from '../../context/useCatalog'

function ChaletModels() {
  const { models } = useCatalog()
  return (
    <main className="bg-[#F7F5F0]">

      <Navbar contained />

      {/* HERO */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#1D2923]">

        <img
          src="/images/hero-models.jpg"
          alt="Contemporary chalet"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

        <Container className="relative z-10 pb-20 md:pb-28">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              La collection
            </span>

            <h1 className="mt-5 font-serif text-7xl font-medium leading-[0.83] text-white md:text-8xl lg:text-[110px]">
              Architecture
              <br />
              <span className="italic">pour vivre.</span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-6 text-white/70 md:text-base">
              Découvrez des modèles de chalets pensés pour s’adapter aux
              paysages, aux styles de vie et aux envies d’évasion de chacun.
            </p>
          </motion.div>

        </Container>

        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-white/60 md:flex">
          <span className="text-[10px] uppercase tracking-[0.25em]">
            Explorer les modèles
          </span>

          <ArrowDown size={15} />
        </div>

      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">

        <Container>

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  Notre approche
                </span>

                <h2 className="mt-4 max-w-lg font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
                  Pensés pour appartenir
                  <br />
                  to the landscape.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-2xl text-base leading-8 text-[#77766F] md:text-lg">
                Nos chalets ne sont pas des objets isolés. Chaque modèle
                dialogue avec son environnement pour faire entrer la lumière,
                les vues, les matières et la nature dans le quotidien.
              </p>

              <div className="mt-10 h-px w-full bg-[#DDD8CD]" />

              <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4 text-xs uppercase tracking-[0.18em] text-[#77766F]">
                <span>Natural materials</span>
                <span>Thoughtful layouts</span>
                <span>Flexible configurations</span>
              </div>
            </Reveal>

          </div>

        </Container>

      </section>

      {/* COLLECTION */}
      <section className="bg-[#EFEBE2] py-24 md:py-32">

        <Container>

          <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  Les modèles
                </span>

                <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
                  Choisissez votre
                  <br />
                  starting point.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#77766F]">
                Each model can be adapted with a range of options
                and finishes. Think of them as the foundation for
                your own retreat.
              </p>

            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {models.map((model, index) => (
              <ChaletModelCard
                key={model.id}
                model={model}
                index={index}
              />
            ))}

          </div>

        </Container>

      </section>

      {/* COMPARISON */}
      <section className="bg-[#F7F5F0] py-24 md:py-32">

        <Container>

          <Reveal>
            <div className="max-w-2xl">

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                At a glance
              </span>

              <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
                Find the model
                <br />
                that fits your life.
              </h2>

            </div>
          </Reveal>

          {/* Desktop table */}
          <div className="mt-16 hidden overflow-hidden border border-[#DDD8CD] md:block">

            <div className="grid grid-cols-4 bg-[#1D2923] text-white">

              <div className="p-6 text-xs uppercase tracking-[0.2em] text-white/50">
                Model
              </div>

              {models.map((model) => (
                <div
                  key={model.id}
                  className="border-l border-white/10 p-6 font-serif text-3xl"
                >
                  {model.name}
                </div>
              ))}

            </div>

            {[
              {
                label: 'Surface',
                key: 'surfaceArea',
              },
              {
                label: 'Bedrooms',
                key: 'bedrooms',
              },
              {
                label: 'Bathrooms',
                key: 'bathrooms',
              },
              {
                label: 'Maximum guests',
                key: 'maxGuests',
              },
              {
                label: 'Starting price',
                key: 'basePrice',
              },
            ].map((row) => (
              <div
                key={row.key}
                className="grid grid-cols-4 border-t border-[#DDD8CD]"
              >

                <div className="p-5 text-xs uppercase tracking-[0.15em] text-[#77766F]">
                  {row.label}
                </div>

                {models.map((model) => (
                  <div
                    key={model.id}
                    className="border-l border-[#DDD8CD] p-5 text-sm text-[#1D2923]"
                  >
                    {row.key === 'surfaceArea'
                      ? formatSurface(model)
                      : row.key === 'basePrice'
                        ? formatPrice(model.basePrice, 'À partir de ')
                        : model[row.key]}
                  </div>
                ))}

              </div>
            ))}

          </div>

          {/* Mobile comparison */}
          <div className="mt-12 space-y-4 md:hidden">

            {models.map((model) => (
              <div
                key={model.id}
                className="border border-[#DDD8CD] bg-white p-6"
              >
                <div className="flex items-center justify-between">

                  <h3 className="font-serif text-3xl text-[#1D2923]">
                    {model.name}
                  </h3>

                  <span className="text-xs uppercase tracking-[0.15em] text-[#B49A70]">
                    {formatSurface(model)}
                  </span>

                </div>

                <div className="mt-6 grid grid-cols-2 gap-y-4 text-sm">

                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-[#99958C]">
                      Bedrooms
                    </span>

                    <span className="mt-1 block text-[#1D2923]">
                      {model.bedrooms}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-[#99958C]">
                      Bathrooms
                    </span>

                    <span className="mt-1 block text-[#1D2923]">
                      {model.bathrooms}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-[#99958C]">
                      Guests
                    </span>

                    <span className="mt-1 block text-[#1D2923]">
                      {model.maxGuests}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-[#99958C]">
                      Starting from
                    </span>

                    <span className="mt-1 block text-[#1D2923]">
                      {formatPrice(model.basePrice, 'À partir de ')}
                    </span>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </Container>

      </section>

      {/* CTA */}
      <section className="bg-[#1D2923] py-28 text-white md:py-40">

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <Reveal>

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B49A70]">
                Votre choix
              </span>

              <h2 className="mt-5 font-serif text-6xl font-medium leading-[0.88] md:text-8xl">
                Trouvez votre modèle.
                <br />
                <span className="italic text-white/60">
                  Make it yours.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-white/55 md:text-base">
                Select a model and customize it with the details
                that will make your chalet uniquely yours.
              </p>

              <Link
                to="/build-your-own"
                className="group mt-10 inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-semibold text-[#1D2923]"
              >
                Start building

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1D2923] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </Link>

            </Reveal>

          </div>

        </Container>

      </section>

      <Footer />

    </main>
  )
}

export default ChaletModels