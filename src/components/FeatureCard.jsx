import PropTypes from "prop-types";

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
      <p className="roboto text-[#485256] pt-6 text-center md:text-left">
        {content}
      </p>
    </div>
  );
};

FeatureCard.propTypes = {
  cardInfo: PropTypes.object,
};

export default FeatureCard;
