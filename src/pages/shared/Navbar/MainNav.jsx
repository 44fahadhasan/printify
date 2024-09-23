import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Logo from "../../../components/Logo";
import NavLists from "./NavLists";

const MainNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex border-b bg-white font-sans min-h-[70px] tracking-wide z-50 shadow-sm fixed w-full top-0">
      <Container>
        <div className="flex flex-wrap items-center justify-between py-3 gap-4 w-full">
          {/* nav start (website logo for large device) */}
          <Logo />

          {/* nav center */}
          <div
            className={`${
              toggleMenu ? "block" : "max-lg:hidden"
            } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
          >
            {/* menu close icon for mobile device */}
            <button
              onClick={() => setToggleMenu(false)}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-1"
            >
              <IoMdClose className="text-black text-3xl" />
            </button>

            {/* nav lists for both device */}
            <NavLists />
          </div>

          {/* nav end */}
          <div className="flex items-center max-lg:ml-auto space-x-6">
            {/* login button */}
            <Button label={"Login"} bg={false} />

            {/* sing up button */}
            <Button label={"Sign up"} bg={true} />

            {/* menu open icon for mobile device */}
            <button onClick={() => setToggleMenu(true)} className="lg:hidden">
              <FiMenu className="text-[#39B75D] text-3xl" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default MainNav;
