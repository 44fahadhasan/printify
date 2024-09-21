import Container from "../../../../components/Container";
import { middleFooterNavs } from "../../../../data/data";
import MiddleFooterNav from "./MiddleFooterNav";

const FooterMiddle = () => {
  return (
    <section className="tracking-wide bg-white py-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-28">
          {/* title & nav */}
          {middleFooterNavs?.map((nav, idx) => (
            <MiddleFooterNav key={idx} nav={nav} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FooterMiddle;
