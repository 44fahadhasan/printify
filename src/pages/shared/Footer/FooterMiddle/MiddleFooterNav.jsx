import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MiddleFooterNav = ({ nav }) => {
  return (
    <div>
      {/* title */}
      <h4 className="text-[#353a47] poppins font-bold text-base mb-6">
        {nav[0]?.title}
      </h4>

      {/* nav */}
      {nav[1]?.map(({ path, label }, idx) => (
        <nav key={idx}>
          <ul>
            <li className="pb-3">
              <Link
                to={path}
                className="hover:text-[#319e50] text-[#353A47] text-sm transition-all"
              >
                {label}
              </Link>
            </li>
          </ul>
        </nav>
      ))}
    </div>
  );
};

MiddleFooterNav.propTypes = {
  nav: PropTypes.array,
};

export default MiddleFooterNav;
