import Container from "../../components/Container";
import FeatureCard from "../../components/FeatureCard";
import { featureInfos } from "../../data/data";

const FeatureSection = () => {
  return (
    <section>
      <Container>
        <div className="py-[56px] px-[24px] md:py-[144px] md:px-[74px]">
          <div className="flex flex-col md:flex-row gap-10">
            {/* feature card */}
            {featureInfos?.map((cardInfo, idx) => (
              <FeatureCard key={idx} cardInfo={cardInfo} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeatureSection;
