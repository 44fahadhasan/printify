import bigcommerce from "../assets/images/store/big-commerce.svg";
import etsy from "../assets/images/store/etsy.svg";
import more from "../assets/images/store/more-integration.svg";
import presta from "../assets/images/store/presta.svg";
import printify from "../assets/images/store/printify.svg";
import shopify from "../assets/images/store/shopify.svg";
import squarespace from "../assets/images/store/squarespace.svg";
import wix from "../assets/images/store/wix.svg";
import woo from "../assets/images/store/woo.svg";
import bg from "../assets/images/stores-backgroundsvg.svg";
import StoreIcon from "./StoreIcon";

const StoreIcons = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="mt-5 min-h-[400px] bg-no-repeat bg-cover m-[10%] relative"
    >
      {/* printify */}
      <StoreIcon
        src={printify}
        bg={"bg-[#39B75D]"}
        positon={"left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4"}
        style={"w-[100px] p-7"}
      />

      {/* bigcommerce */}
      <StoreIcon
        src={bigcommerce}
        positon={"left-[35%] top-[5%]"}
        style={"w-[70px] p-4"}
      />

      {/* squarespace */}
      <StoreIcon
        src={squarespace}
        positon={"left-[64%] top-[12%]"}
        style={"w-[110px] p-1"}
      />

      {/* wix */}
      <StoreIcon
        src={wix}
        positon={"left-[100%] -translate-x-2/4"}
        style={"w-[110px] p-7"}
      />

      {/* woo commerce */}
      <StoreIcon
        src={woo}
        positon={"left-[78%] top-[40%]"}
        style={"w-[70px] p-4"}
      />

      {/* presta */}
      <StoreIcon
        src={presta}
        positon={"left-[24%] top-[57%]"}
        style={"w-[110px] p-8"}
      />

      {/* add more */}
      <StoreIcon
        src={more}
        positon={"left-[37%] top-[90%]"}
        style={"w-[70px]"}
      />

      {/* shopify */}
      <StoreIcon
        src={shopify}
        positon={"left-[52%] top-[94%]"}
        style={"w-[140px] p-10"}
      />

      {/* etsy */}
      <StoreIcon
        src={etsy}
        positon={"left-[90%] top-[73%] -translate-x-2/4"}
        style={"w-[140px] p-10"}
      />

      {/* etsy */}
      <StoreIcon
        src={etsy}
        positon={"left-[0%] top-[73%] translate-x-2/4"}
        style={"w-[140px] p-10"}
      />
    </div>
  );
};

export default StoreIcons;
