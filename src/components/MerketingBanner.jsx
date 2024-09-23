import Container from "./Container";
import SectionContent from "./SectionContent";

const MerketingBanner = () => {
  return (
    <Container>
      <div className="bg-[url('/talk-to-sales.svg')] bg-contain bg-[#E2F7E3] bg-no-repeat bg-right py-10 rounded-3xl flex justify-around items-center">
        {/* title */}
        <div className="basis-[35%]">
          <SectionContent
            title={"Are you a large business looking for custom solutions?"}
            titleSize={"md:text-2xl"}
            titleClr={"text-[#1f6b45]"}
          />
        </div>

        {/* button */}
        <div>
          <button className="roboto font-medium py-1 px-5 bg-white transition-all ease-in-out duration-300 text-[#353A47] hover:text-[#39B75D]">
            Talk to sales
          </button>
        </div>
      </div>
    </Container>
  );
};

export default MerketingBanner;
