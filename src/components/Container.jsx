import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="container w-[87%] mx-auto">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
