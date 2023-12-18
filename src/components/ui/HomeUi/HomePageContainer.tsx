import { Col, Row } from "antd";
import dynamic from "next/dynamic";
import Slider from "./Slider";
import HomeBannerCard from "./HomeBannerCard";
import ServiceAreaPage from "./ServiceAreaPage";

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
        </Col>
      </Row>
    </div>
  );
};

export default HomePageContainer;
