import Container from "../../components/Container";
import { featureInfos } from "../../data/data";
import ImgCardWarpper from "./ImgCardWarpper";

const FeatureSection = () => {
  return (
    <Container>
      <ImgCardWarpper
        data={featureInfos}
        imgSize={"w-[120px]"}
        m={"pt-6"}
        round={"rounded-full"}
      />
    </Container>
  );
};

export default FeatureSection;
