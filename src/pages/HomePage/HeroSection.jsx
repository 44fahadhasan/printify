import { MdOutlineSlowMotionVideo } from "react-icons/md";
import HeroSectionBg from "../../assets/images/background-img-hero-sectionsvg.svg";
import Button from "../../components/Button";
import Container from "../../components/Container";
import IconList from "../../components/IconList";
import { imgLists } from "../../data/data";
import HeroSectionSvg from "./animationSvg/HeroSectionSvg";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <div
          className="flex flex-col gap-y-11 sm:gap-y-0 sm:flex-row justify-between items-center py-10 bg-no-repeat bg-right"
          style={{
            backgroundImage: `url(${HeroSectionBg})`,
          }}
        >
          {/* left content */}
          <div className="basis-[50%]">
            {/* title */}
            <h1 className="poppins text-[#17262b] font-semibold text-[32px] sm:text-[56px]">
              Create and sell custom products
            </h1>

            {/* icon list */}
            {imgLists?.map(({ icon, text }, idx) => (
              <IconList key={idx} icon={icon} text={text} />
            ))}

            {/* buttons */}
            <div className="flex flex-wrap gap-6 mt-11">
              {/* start button */}
              <Button label={"Start for free"} bg={true} />

              {/* works button */}
              <Button
                label={"How it works?"}
                bg={false}
                icon={<MdOutlineSlowMotionVideo />}
              />
            </div>

            {/* highlight text */}
            <h6 className="roboto font-medium text-[#39b65e] mt-4">
              Trusted by over 8M sellers around the world
            </h6>
          </div>

          {/* right animation svg */}
          <div className="basis-[50%]">
            <HeroSectionSvg />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
