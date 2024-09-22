import PropTypes from "prop-types";
import Content from "./Content";

const FeatureCard = ({ cardInfo }) => {
  const { img, title, content } = cardInfo;

  return (
    <div className="flex flex-col items-center md:items-start">
      {/* img */}
      <div className="w-[120px]">
        <img src={img} alt="img" className="object-cover w-full rounded-full" />
      </div>

      {/* title */}
      <h3 className="poppins text-[#17262b] text-2xl font-semibold pt-8">
        {title}
      </h3>

      {/* content */}
      <Content value={content} m={"pt-6"} align={"text-center md:text-left"} />
    </div>
  );
};

FeatureCard.propTypes = {
  cardInfo: PropTypes.object,
};

export default FeatureCard;
