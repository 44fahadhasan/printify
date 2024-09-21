import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle/FooterMiddle";
import FooterTop from "./FooterTop";

const FooterMain = () => {
  return (
    <footer className="roboto">
      {/* footer top */}
      <FooterTop />

      {/* footer middle */}
      <FooterMiddle />

      {/* footer bootom */}
      <FooterBottom />
    </footer>
  );
};

export default FooterMain;
