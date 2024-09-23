import productsLinkImg from "../assets/images/productsLink.png";
import ProductsCustomizeSvg from "../pages/HomePage/animationSvg/ProductsCustomizeSvg";
import LinkMap from "./LinkMap";

const ProductsLink = () => {
  return (
    <div className="md:absolute md:bottom-0 md:left-0">
      <div className="md:w-[40%] relative">
        {/* product imgs link */}
        <img
          src={productsLinkImg}
          alt="Products"
          className="bg-[#39B75D] rounded-2xl rounded-br-[110px] w-full"
        />
        {/* LinkMap used for products image linking */}
        <LinkMap postion={"top-[16%] right-[4%]"} label={"Hats"} />
        <LinkMap postion={"top-[29%] right-[40%]"} label={"Phone case"} />
        <LinkMap postion={"top-[24%] left-[9%]"} label={"Mugs"} />
        <LinkMap postion={"top-[90%] left-[9%]"} label={"Hoodies"} />
        <LinkMap postion={"top-[53%] left-[29%]"} label={"Hats"} />

        {/* customize product svg */}
        <div className="hidden md:block md:w-[70%] md:absolute md:bottom-0 md:left-[100%] md:-translate-x-2/4">
          <ProductsCustomizeSvg />
        </div>
      </div>
    </div>
  );
};

export default ProductsLink;
