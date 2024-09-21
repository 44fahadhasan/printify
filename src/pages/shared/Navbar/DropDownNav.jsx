import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DropDownNav = ({ dropdownLists }) => {
  return (
    <ul className="absolute shadow-lg bg-white lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
      {/* dropdown list */}
      {dropdownLists?.map((dropdownlist, idx) => (
        <li key={idx} className="py-1">
          <Link
            to={dropdownlist?.dropPath}
            className="hover:text-[#319e50] transition-all ease-in-out duration-100"
          >
            {dropdownlist?.dropLabel}
          </Link>
        </li>
      ))}
    </ul>
  );
};

DropDownNav.propTypes = {
  dropdownLists: PropTypes.array,
};

export default DropDownNav;
