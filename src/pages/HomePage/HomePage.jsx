import ConnectStore from "./ConnectStore";
import FeatureSection from "./FeatureSection";
import FeedbackSection from "./FeedbackSection";
import FinancialsSection from "./FinancialsSection";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <HeroSection />

      {/* feature section */}
      <FeatureSection />

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
