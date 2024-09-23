import ConnectStore from "./ConnectStore";
import FeatureSection from "./FeatureSection";
import FeedbackSection from "./FeedbackSection";
import FinancialsSection from "./FinancialsSection";
import HeroSection from "./HeroSection";
import ProductLinkAndProcesSection from "./ProductLinkAndProcesSection";

const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <HeroSection />

      {/* feature section */}
      <FeatureSection />

      {/* products link and processing sections */}
      <ProductLinkAndProcesSection />

      {/* connect store section */}
      <ConnectStore />

      {/* feedback section */}
      <FeedbackSection />

      {/* financials section */}
      <FinancialsSection />
    </>
  );
};

export default HomePage;
