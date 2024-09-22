import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PropTypes from "prop-types";
import Content from "./Content";
import SectionContent from "./SectionContent";

const TestimonialCard = ({ feedback }) => {
  const { image, name, rating, text } = feedback || {};

  return (
    <div className="group bg-white border rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-300 hover:border-[#39B75D]">
      <div className="flex items-start gap-5">
        {/* image */}
        <img
          src={image}
          alt="avatar"
          className="w-12 h-12 object-cover rounded"
        />

        <div className="grid gap-1">
          {/* name & store */}
          <SectionContent
            title={name}
            titleSize={"text-2xl"}
            content={"Store link"}
            contentClr={"text-[#39B75D]"}
            font={"font-medium"}
          />

          {/* rating */}
          <Rating style={{ maxWidth: 97 }} value={rating} readOnly />
        </div>
      </div>

      {/* feedback text */}
      <Content value={text} m={"mt-5"} align={"text-justify"} />
    </div>
  );
};

TestimonialCard.propTypes = {
  feedback: PropTypes.object,
};

export default TestimonialCard;
