import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import Logo from "../../../components/Logo";
import { iconLists } from "../../../data/data";

const FooterTop = () => {
  return (
    <section className="bg-white">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
          {/* logo */}
          <Logo />

          {/* social icons */}
          <ul className="flex space-x-4">
            {iconLists?.map(({ url, icon }, idx) => (
              <li key={idx}>
                <Link to={url} target="_blank">
                  <img
                    src={icon}
                    alt="icon"
                    className="w-[32px] object-cover"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default FooterTop;
