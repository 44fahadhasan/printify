import PropTypes from "prop-types";
import Content from "./Content";

const ImgCard = ({ cardInfo, imgSize, m, round }) => {
  const { img, title, content, highlightTitle } = cardInfo;

  return (
    <div className="flex flex-col items-center md:items-start">
      {/* img */}
      <div className={`${imgSize}`}>
        <img src={img} alt="img" className={`object-cover w-full ${round}`} />
      </div>

      {/* highlight title */}
      {highlightTitle && (
        <h4 className="poppins text-[#39B75D] text-lg font-semibold pt-8 -mb-8 uppercase">
          {highlightTitle}
        </h4>
      )}

      {/* title */}
      <h3 className="poppins text-[#17262b] text-2xl font-semibold pt-8">
        {title}
      </h3>

      {/* content */}
      <Content value={content} m={m} align={"text-center md:text-left"} />
    </div>
  );
};

ImgCard.propTypes = {
  cardInfo: PropTypes.object,
  imgSize: PropTypes.string,
  m: PropTypes.string,
  round: PropTypes.string,
};

export default ImgCard;
