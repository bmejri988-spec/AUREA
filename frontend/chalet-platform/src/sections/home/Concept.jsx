import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import Reveal from '../../components/common/Reveal'
function Concept() {
  return (
    <section className="bg-[#F7F5F0] py-28 md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end">

          <SectionTitle
            eyebrow="The concept"
            title="A second home, designed around you."
            description="We believe a second home should be more than a property. It should be a place that feels completely yours."
          />

          <Reveal>
            <p className="max-w-lg text-lg leading-8 text-[#77766F]">
              From the land beneath your feet to the architecture
              surrounding you, every element is carefully selected
              to create a place where you can escape, reconnect,
              and simply enjoy life.
            </p>

            <div className="mt-10 h-px w-full bg-[#DDD8CD]" />

            <div className="mt-6 flex justify-between text-xs uppercase tracking-[0.2em] text-[#77766F]">
              <span>Location</span>
              <span>Architecture</span>
              <span>Experience</span>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  )
}

export default Concept