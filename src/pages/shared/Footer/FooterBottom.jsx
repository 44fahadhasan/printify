import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import { bottomFooterNavLists } from "../../../data/data";

const FooterBottom = () => {
  return (
    <section className="py-10 bg-[#F7F7F7]">
      <Container>
        {/* nav */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {bottomFooterNavLists?.map(({ path, label }, idx) => (
              <li key={idx}>
                <Link
                  to={path}
                  className="hover:text-[#319e50] text-[#949494] text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* copy right text */}
        <p className="text-[#1b1b1b] text-sm text-center mt-3">
          © {new Date().getFullYear()} Printify, Inc. All rights reserved.
        </p>
      </Container>
    </section>
  );
};

export default FooterBottom;
