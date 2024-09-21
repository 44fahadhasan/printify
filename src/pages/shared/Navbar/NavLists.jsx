import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo";
import { mainMenuLists } from "../../../data/data";
import DropDownNav from "./DropDownNav";

const NavLists = () => {
  return (
    <nav>
      <ul className="roboto lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 text-[#353a47]">
        {/* website logo for small device */}
        <li className="mb-6 hidden max-lg:block">
          <Logo />
        </li>

        {/* lists */}
        {mainMenuLists?.map((list, idx) => (
          <li
            key={idx}
            className={`${
              list?.dropdownLists ? "group relative" : ""
            } max-lg:border-b max-lg:py-3`}
          >
            <Link
              to={list?.path}
              className="hover:text-[#319e50] transition-all ease-in-out duration-100 flex items-center"
            >
              {list?.label}

              {/* dropdown icon */}
              {list?.dropdownLists && <IoMdArrowDropdown className="text-xl" />}
            </Link>

            {/* dropdown nav list  */}
            {list?.dropdownLists && (
              <DropDownNav dropdownLists={list?.dropdownLists} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLists;
