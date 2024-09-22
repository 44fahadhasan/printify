import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StoreIcon = ({ src, path, positon, style, bg }) => {
  return (
    <div className={`${positon} absolute shadow-lg`}>
      <Link to={path}>
        <div
          className={`${style} ${
            bg || "bg-white"
          } rounded-2xl transform transition duration-500 hover:scale-110`}
        >
          {/* img */}
          <img src={src} alt="store img" className="w-full object-cover" />
        </div>
      </Link>
    </div>
  );
};

StoreIcon.propTypes = {
  bg: PropTypes.string,
  style: PropTypes.string,
  src: PropTypes.string,
  positon: PropTypes.string,
  path: PropTypes.string,
};

export default StoreIcon;
