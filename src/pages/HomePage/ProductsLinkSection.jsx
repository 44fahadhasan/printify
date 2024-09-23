import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductsLink from "../../components/ProductsLink";
import SectionContent from "../../components/SectionContent";

const ProductsLinkSection = () => {
  return (
    <section className="bg-white p-[9%] md:p-[7%_9%_13.5%_57%] rounded-2xl md:relative flex flex-col-reverse gap-y-9 md:flex-none ">
      {/* contents */}
      <div>
        {/* title and text */}
        <SectionContent
          title={"Easily add your design to a wide range of products"}
          content={
            "With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products."
          }
          titleSize={"text-3xl"}
          contentPT={"pt-8"}
        />

        {/* all products link */}
        <div className="flex gap-1 items-center font-medium roboto text-[#319e50] pt-12">
          <Link to={""}>All products</Link>
          <FaArrowRight />
        </div>
      </div>

      {/* products link img */}
      <ProductsLink />
    </section>
  );
};

export default ProductsLinkSection;
