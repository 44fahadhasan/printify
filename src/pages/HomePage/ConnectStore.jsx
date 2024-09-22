import MerketingBanner from "../../components/MerketingBanner";
import SectionContent from "../../components/SectionContent";
import StoreIcons from "../../components/StoreIcons";

const ConnectStore = () => {
  return (
    <section className="py-14 md:py-24 lg:py-32">
      {/* section content */}
      <div className="text-center">
        <SectionContent
          title={"Connect your store"}
          content={
            "Printify easily integrates with major e-commerce platforms and marketplaces"
          }
          contentPT={"pt-4"}
        />
      </div>

      {/* store icons & banner */}
      <div className="space-y-32 md:space-y-44">
        {/* store icons */}
        <StoreIcons />

        {/* banner */}
        <MerketingBanner />
      </div>
    </section>
  );
};

export default ConnectStore;
