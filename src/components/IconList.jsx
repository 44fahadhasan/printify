import PropTypes from "prop-types";
const IconList = ({ icon, text }) => {
  return (
    <div className="roboto flex gap-2 mt-4">
      <div className="w-[17px] flex items-center">
        <img src={icon} alt="icon" className="w-full object-cover" />
      </div>
      <li className="text-[#485256] font-medium list-none">{text}</li>
    </div>
  );
};

IconList.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default IconList;
