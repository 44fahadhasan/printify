import PropTypes from "prop-types";
import Content from "./Content";

const TableList = ({ text, money, color, size, fontWeight }) => {
  return (
    <div className="flex justify-between pt-6">
      {/* text left */}
      <Content
        value={text}
        color={color || "text-white"}
        font={fontWeight || "font-medium"}
        size={size}
      />

      {/* text right */}
      <Content
        value={money}
        size={size}
        color={color || "text-white"}
        font={fontWeight || "font-medium"}
      />
    </div>
  );
};

TableList.propTypes = {
  money: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default TableList;
