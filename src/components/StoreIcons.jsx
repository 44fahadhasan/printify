import api from "../assets/images/store/api.png";
import bigcommerce from "../assets/images/store/big-commerce.svg";
import etsy from "../assets/images/store/etsy.svg";
import more from "../assets/images/store/more-integration.svg";
import presta from "../assets/images/store/presta.svg";
import printify from "../assets/images/store/printify.svg";
import shopify from "../assets/images/store/shopify.svg";
import squarespace from "../assets/images/store/squarespace.svg";
import wix from "../assets/images/store/wix.svg";
import woo from "../assets/images/store/woo.svg";
import StoreIcon from "./StoreIcon";

const StoreIcons = () => {
  return (
    <div className="lg:bg-[url('/stores-backgroundsvg.svg')] mt-5 min-h-[400px] bg-no-repeat bg-cover m-[10%] relative">
      {/* printify */}
      <StoreIcon
        src={printify}
        bg={"bg-[#39B75D]"}
        positon={"left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4"}
        style={"w-[60px] p-3 sm:w-[70px] sm:p-4 lg:w-[100px] lg:p-7"}
      />

      {/* bigcommerce */}
      <StoreIcon
        src={bigcommerce}
        positon={"left-[5%] sm:left-[15%] lg:left-[35%] top-[5%]"}
        style={"w-[45px] p-2 sm:w-[60px] sm:p-3 lg:w-[70px] lg:p-4"}
      />

      {/* squarespace */}
      <StoreIcon
        src={squarespace}
        positon={"left-[35%] sm:left-[45%] lg:left-[64%] top-[12%]"}
        style={"w-[70px] p-2 sm:w-[90px] sm:p-3 lg:w-[110px] lg:p-1"}
      />

      {/* wix */}
      <StoreIcon
        src={wix}
        positon={"left-[80%] sm:left-[85%] lg:left-[100%] -translate-x-2/4"}
        style={"w-[50px] p-3 sm:w-[80px] sm:p-5 lg:w-[110px] lg:p-7"}
      />

      {/* woo commerce */}
      <StoreIcon
        src={woo}
        positon={"left-[80%] sm:left-[85%] lg:left-[78%] top-[40%]"}
        style={"lg:w-[70px] p-3 lg:p-4"}
      />

      {/* presta */}
      <StoreIcon
        src={presta}
        positon={"top-[35%] sm:top-[45%] lg:left-[24%]"}
        style={"w-[60px] p-3 sm:w-[80px] sm:p-4 lg:w-[110px] lg:p-8"}
      />

      {/* add more */}
      <StoreIcon
        src={more}
        positon={"left-[37%] top-[77%] lg:top-[90%]"}
        style={"w-[60px] sm:w-[100px] sm:p-4 lg:w-[110px]"}
      />

      {/* shopify */}
      <StoreIcon
        src={shopify}
        positon={"left-[70%] top-[70%] lg:left-[52%] lg:top-[94%]"}
        style={"w-[70px] p-4 sm:w-[100px] sm:p-4 lg:w-[140px] lg:p-10"}
      />

      {/* etsy */}
      <StoreIcon
        src={etsy}
        positon={
          "top-[77%] sm:top-[90%] lg:top-[65%] xl:top-[80%] 2xl:left-[87%] left-[10%] lg:left-[93%] -translate-x-2/4"
        }
        style={"w-[70px] p-4 sm:w-[100px] sm:p-4 lg:w-[140px] lg:p-10"}
      />

      {/* api */}
      <StoreIcon
        src={api}
        positon={
          "left-[20%] top-[50%] lg:left-[3%] xl:left-[5%] 2xl:xl:left-[9%] sm:top-[50%] lg:top-[90%] xl:top-[97%] -translate-y-2/4"
        }
        style={"w-[60px] sm:w-[80px] sm:p-2 lg:w-[100px] lg:p-4 lg:w-[110px]"}
      />
    </div>
  );
};

export default StoreIcons;
