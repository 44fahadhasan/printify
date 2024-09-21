import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

const Logo = () => {
  return (
    <div className="w-36">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-full object-cover" />
      </Link>
    </div>
  );
};

export default Logo;
