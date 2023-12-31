import { Col, Row } from "antd";
import dynamic from "next/dynamic";
import Slider from "./Slider";
import HomeBannerCard from "./HomeBannerCard";
import ServiceAreaPage from "./ServiceAreaPage";
import WhyChooseArea from "./WhyChooseArea";
import HomeFooter from "./HomeFooter";


const HomeHeader = dynamic(() => import("./HomeHeader"), {
  ssr: false,
});

const HomePageContainer = () => {
  return (
    <div>
      <Row justify="center">
        <Col span={22}>
          <HomeHeader />
          <Slider />
          <HomeBannerCard />
          <ServiceAreaPage />
          <WhyChooseArea />
          <HomeFooter />
        </Col>
      </Row>
    </div>
  );
};

export default HomePageContainer;
