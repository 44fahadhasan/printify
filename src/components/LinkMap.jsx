import PropTypes from "prop-types";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LinkMap = ({ path, postion, label }) => {
  return (
    <Link to={path}>
      <span title={label} className={`${postion} absolute`}>
        <FaCirclePlus className="text-[#39B75D] text-xl ring-4 ring-[#4bc6594d] rounded-full transform transition duration-500 hover:scale-125" />
      </span>
    </Link>
  );
};

LinkMap.propTypes = {
  label: PropTypes.string,
  postion: PropTypes.string,
  path: PropTypes.string,
};

export default LinkMap;
