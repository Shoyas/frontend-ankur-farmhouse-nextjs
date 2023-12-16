import { Col, Row } from "antd";
import dynamic from "next/dynamic";
import Slider from "./Slider";
import HomeBannerCard from "./HomeBannerCard";
import VegetableAreaPage from "./ProductCards";
import ProductCardPage from "./ProductCards";
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
          <ProductCardPage />
        </Col>
      </Row>
    </div>
  );
};

export default HomePageContainer;
