import productsLinkImg from "../assets/images/productsLink.png";
import ProductsCustomizeSvg from "../pages/HomePage/animationSvg/ProductsCustomizeSvg";

const ProductsLink = () => {
  return (
    <div className="md:absolute md:bottom-0 md:left-0">
      <div className="md:w-[40%] md:relative">
        {/* product imgs link */}
        <img
          src={productsLinkImg}
          alt="Products"
          className="bg-[#39B75D] rounded-2xl w-full"
        />

        {/* customize product svg */}
        <div className="hidden md:block md:w-[70%] md:absolute md:bottom-0 md:left-[100%] md:-translate-x-2/4">
          <ProductsCustomizeSvg />
        </div>
      </div>
    </div>
  );
};

export default ProductsLink;
