import PropTypes from "prop-types";
import Content from "./Content";
const IconList = ({ icon, text }) => {
  return (
    <div className="roboto flex gap-2 mt-4">
      <div className="w-[17px] flex items-center">
        <img src={icon} alt="icon" className="w-full object-cover" />
      </div>
      <Content font={"font-medium"} value={text} />
    </div>
  );
};

IconList.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default IconList;
