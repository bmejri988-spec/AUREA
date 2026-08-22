import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../../components/common/Reveal'


function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1D2923]">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2200&q=90"
            alt="Luxury chalet surrounded by nature"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-end">
        <div className="mx-auto w-full max-w-375 px-6 pb-24 md:px-10 md:pb-28 lg:px-16 lg:pb-32">

          <div className="max-w-4xl">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
            >
              Your second home
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl font-serif text-6xl font-medium leading-[0.9] tracking-tight text-white md:text-8xl lg:text-[110px]"
            >
              A place
              <br />
              worth coming
              <br />
              <span className="italic">home to.</span>
            </motion.h1>

            {/* Bottom Content */}
            <Reveal>

              <p className="max-w-md text-sm leading-6 text-white/75 md:text-base">
                Discover exceptional locations, choose your chalet,
                and create a retreat designed entirely around you.
              </p>

              <Link
                to="/build-your-own"
                className="group inline-flex w-fit items-center gap-4 bg-white px-6 py-4 text-sm font-semibold text-[#1D2923] transition-all duration-300 hover:bg-[#EFEBE2]"
              >
                Start building

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1D2923] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </Link>

            </Reveal>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/60 md:flex">
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>

        <ArrowDown
          size={16}
          strokeWidth={1.5}
          className="animate-bounce"
        />
      </div>

    </section>
  )
}

export default Hero