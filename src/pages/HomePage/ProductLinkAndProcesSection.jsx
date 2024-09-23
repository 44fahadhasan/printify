import Container from "../../components/Container";
import ProductsLinkSection from "./ProductsLinkSection";
import ProductsProcessSection from "./ProductsProcessSection";

const ProductLinkAndProcesSection = () => {
  return (
    <section className="pt-20 md:pt-32 lg:pt-80 2xl:pt-[500px] bg-[#F7F7F7]">
      <Container>
        {/* products link img and contents section */}
        <ProductsLinkSection />

        {/* product processing section */}
        <ProductsProcessSection />
      </Container>
    </section>
  );
};

export default ProductLinkAndProcesSection;
