import PropTypes from "prop-types";
import ImgCard from "../../components/ImgCard";

const ImgCardWarpper = ({ data, imgSize, m, round }) => {
  return (
    <section>
      <div className="py-[56px] px-[24px] md:py-[144px] md:px-[74px]">
        <div className="flex flex-col md:flex-row gap-10">
          {/* feature card */}
          {data?.map((cardInfo, idx) => (
            <ImgCard
              key={idx}
              cardInfo={cardInfo}
              imgSize={imgSize}
              m={m}
              round={round}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ImgCardWarpper.propTypes = {
  data: PropTypes.array,
  imgSize: PropTypes.string,
  m: PropTypes.string,
  round: PropTypes.string,
};

export default ImgCardWarpper;
