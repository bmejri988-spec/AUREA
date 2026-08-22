import { motion } from 'framer-motion'
import Container from '../../components/common/Container'

const steps = [
  {
    number: '01',
    title: 'Choose your place',
    description:
      'Explore exceptional terrains and find the environment that feels right for you.',
  },
  {
    number: '02',
    title: 'Choose your chalet',
    description:
      'Select the architecture, size, and layout that match the way you want to live.',
  },
  {
    number: '03',
    title: 'Make it yours',
    description:
      'Add pools, terraces, fireplaces, and other details to create your perfect retreat.',
  },
  {
    number: '04',
    title: 'Visualize it',
    description:
      'See what your future chalet could look like before bringing your vision to life.',
  },
]

function HowItWorks() {
  return (
    <section className="bg-[#1D2923] py-28 text-white md:py-36">
      <Container>

        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
            The experience
          </span>

          <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.95] md:text-6xl">
            From an idea
            <br />
            to a place of your own.
          </h2>
        </div>

        <div className="mt-20 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="relative border-b border-white/10 py-10 md:border-r md:px-8 lg:min-h-75"
            >
              <span className="text-xs tracking-[0.2em] text-white/40">
                {step.number}
              </span>
              <div className="mt-4 h-px w-8 bg-[#B49A70]" />

              <h3 className="mt-12 font-serif text-3xl">
                {step.title}
              </h3>

              <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default HowItWorks