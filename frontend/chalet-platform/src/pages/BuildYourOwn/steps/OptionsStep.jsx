import { getOptionsForModel } from '../../../data/repository'
import { useConfigurator } from '../../../context/useConfigurator'
import { useCatalog } from '../../../context/useCatalog'
import OptionCard from '../../../components/common/OptionCard'
import Reveal from '../../../components/common/Reveal'

function OptionsStep() {
  const { options, optionCategories, modelOptions } = useCatalog()
  const {
    selectedModel,
    selectedOptions,
    selectedModelId,
    toggleOption,
  } = useConfigurator()

  const compatibleOptions = selectedModel
    ? getOptionsForModel(options, modelOptions, selectedModelId)
    : options

  return (
    <div>

      <div className="max-w-2xl">

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
          Step 03
        </span>

        <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-[#1D2923] md:text-6xl">
          Add the details
          <br />
          <span className="italic">
            that matter.
          </span>
        </h1>

        <p className="mt-6 text-sm leading-6 text-[#77766F]">
          Select the features and experiences you'd like
          to add to your chalet.
        </p>

      </div>

      <div className="mt-12 space-y-20">

        {optionCategories.map((category) => {

          const categoryOptions =
            compatibleOptions.filter(
              (option) => option.category === category.id
            )

          if (categoryOptions.length === 0) {
            return null
          }

          return (
            <section key={category.id}>

              <Reveal>

                <div className="mb-8 flex items-end justify-between gap-6 border-b border-[#DDD8CD] pb-5">

                  <div>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B49A70]">
                      {category.id}
                    </span>

                    <h2 className="mt-2 font-serif text-4xl text-[#1D2923]">
                      {category.title}
                    </h2>

                  </div>

                  <span className="hidden text-xs text-[#99958C] sm:block">
                    {categoryOptions.length} available
                  </span>

                </div>

              </Reveal>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                {categoryOptions.map((option) => {

                  const selected =
                    selectedOptions.some((item) => item.id === option.id)

                  return (
                    <OptionCard
                      key={option.id}
                      option={option}
                      selected={selected}
                      onSelect={toggleOption}
                    />
                  )
                })}

              </div>

            </section>
          )
        })}

      </div>

    </div>
  )
}

export default OptionsStep