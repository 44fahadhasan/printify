import PropTypes from "prop-types";
import Content from "./Content";

const SectionContent = ({
  contentPT,
  contentClr,
  titleClr,
  title,
  content,
  contentSize,
  titleSize,
  font,
}) => {
  return (
    <div>
      {/* title */}
      <h2
        className={`poppins ${titleClr || "text-[#17262b]"} ${
          titleSize || "text-[40px]"
        } font-semibold`}
      >
        {title}
      </h2>

      {/* content */}
      {content && (
        <Content
          value={content}
          m={contentPT}
          size={contentSize}
          color={contentClr}
          font={font}
        />
      )}
    </div>
  );
};

SectionContent.propTypes = {
  titleSize: PropTypes.string,
  font: PropTypes.string,
  contentSize: PropTypes.string,
  titleClr: PropTypes.string,
  contentPT: PropTypes.string,
  contentClr: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default SectionContent;
