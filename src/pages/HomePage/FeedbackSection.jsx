import Container from "../../components/Container";
import Content from "../../components/Content";
import SectionContent from "../../components/SectionContent";
import Testimonial from "../../components/Testimonial";

const FeedbackSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-14 md:py-36 lg:py-40">
      <Container>
        {/* top contents */}
        <div className="text-center md:text-left md:flex items-center space-y-6 space-x-6">
          {/* title */}
          <div className="md:max-w-md">
            <SectionContent
              title={"Trusted by over 8M sellers around the world"}
              titleClr={"text-[#353a47]"}
            />
          </div>

          {/* content */}
          <div className="md:max-w-sm">
            <Content
              value={
                "Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience."
              }
            />
          </div>
        </div>

        {/* testimonial */}
        <div className="mt-12 md:mt-20">
          <Testimonial />
        </div>
      </Container>
    </section>
  );
};

export default FeedbackSection;
