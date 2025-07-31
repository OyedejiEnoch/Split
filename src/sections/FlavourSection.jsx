import FlavorTitle from "../components/FlavorTitle"
import FlavourSlider from "../components/FlavourSlider"

const FlavourSection = () => {
  return (
    <section className="flavor-section">
      <div className="flex h-full lg:flex-row flex-col items-center relative ">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
            <FlavorTitle />
        </div>

        <div className="h-full ">
            <FlavourSlider />
        </div>
      </div>
    </section>
  )
}

export default FlavourSection
