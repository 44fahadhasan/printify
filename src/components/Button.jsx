import PropTypes from "prop-types";

const Button = ({ bg, label, icon }) => {
  return (
    <button
      className={`group flex items-center roboto px-5 py-2 text-base rounded-md font-medium shadow-sm transition-all ease-in-out duration-300 ${
        bg
          ? "bg-[#39b75de6] text-white hover:bg-[#39B75D]"
          : "border border-[#c2c2c2] text-[#353a47] hover:text-[#39B75D]"
      }`}
    >
      {icon && (
        <span className="text-[#485256] group-hover:text-[#39B75D] mr-1 text-xl transition-all ease-in-out duration-300">
          {icon}
        </span>
      )}
      {label}
    </button>
  );
};

Button.propTypes = {
  bg: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.node,
};

export default Button;
