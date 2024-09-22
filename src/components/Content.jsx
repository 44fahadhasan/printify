import PropTypes from "prop-types";

const Content = ({ value, color, size, font, m }) => {
  return (
    <p className={`${color || "text-#485256"} ${size} ${font} ${m} roboto`}>
      {value}
    </p>
  );
};

Content.propTypes = {
  value: PropTypes.string,
  m: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  font: PropTypes.string,
};

export default Content;
