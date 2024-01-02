import FishAreaPage from "@/components/ui/CategoriesUi/FishAreaPage";
import HomeFooter from "@/components/ui/HomeUi/HomeFooter";
import { Col, Row } from "antd";
import dynamic from "next/dynamic";
import Head from "next/head";

const HomeHeader = dynamic(
  () => import("../../../components/ui/HomeUi/HomeHeader"),
  {
    ssr: false,
  }
);

const FishPage = () => {
  return (
    <div>
      <Head>
        <title>Categories|Eggs</title>
        <meta name="description" content="Categories|Eggs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row justify="center">
        <Col span={22}>
          <HomeHeader />
          <FishAreaPage />
          <HomeFooter />
        </Col>
      </Row>
    </div>
  );
};

export default FishPage;
