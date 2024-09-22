import Button from "../../components/Button";
import Container from "../../components/Container";
import Content from "../../components/Content";
import SectionContent from "../../components/SectionContent";
import TableBox from "../../components/TableBox";
import FinancialsSectionSvg from "./animationSvg/FinancialsSectionSvg";

const FinancialsSection = () => {
  return (
    <section>
      <Container>
        <div className="bg-[#203741] rounded-xl md:rounded-[20px] flex justify-between sm:m-10">
          {/* left side(content) */}
          <div className="space-y-8 p-6 flex flex-col justify-center items-start md:max-w-md mx-auto">
            {/* title & content */}
            <SectionContent
              title={"Make Money, Risk-Free"}
              content={"You pay for fulfillment only when you make a sale"}
              titleClr={"text-white"}
              contentClr={"text-white"}
              contentPT={"pt-[10px]"}
            />

            {/* table */}
            <TableBox />

            {/* button */}
            <Button label={"Start selling"} bg={true} />

            {/* text */}
            <Content
              value={"100% Free to use · 900+ Products · Largest print network"}
              color={"text-[#c4c7c8]"}
              size={"text-sm"}
            />
          </div>

          {/* right side(svg img) */}
          <div className="hidden md:flex self-end relative -right-5 ">
            <FinancialsSectionSvg />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinancialsSection;
