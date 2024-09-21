import { Outlet } from "react-router-dom";
import FooterMain from "../pages/shared/Footer/FooterMain";
import MainNav from "../pages/shared/Navbar/MainNav";

const MainLayout = () => {
  return (
    <>
      {/* main navbar */}
      <MainNav />

      {/* main layout */}
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <FooterMain />
    </>
  );
};

export default MainLayout;
