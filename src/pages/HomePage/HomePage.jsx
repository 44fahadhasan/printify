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

      {/* feedback section */}
      <FeedbackSection />

      {/* financials section */}
      <FinancialsSection />
    </>
  );
};

export default HomePage;
