import FeatureSection from "./FeatureSection";
import FinancialsSection from "./FinancialsSection";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <HeroSection />

      {/* feature section */}
      <FeatureSection />

      {/* financials section */}
      <FinancialsSection />
    </>
  );
};

export default HomePage;
