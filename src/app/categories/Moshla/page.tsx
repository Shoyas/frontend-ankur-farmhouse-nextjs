import MeatAreaPage from "@/components/ui/CategoriesUi/MeatAreaPage";
import MoshlaAreaPage from "@/components/ui/CategoriesUi/MoshlaAreaPage";
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

const MoshlaPage = () => {
  return (
    <div>
      <Head>
        <title>Categories|Meat</title>
        <meta name="description" content="Categories|Meat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row justify="center">
        <Col span={22}>
          <HomeHeader />
          <MoshlaAreaPage />
          <HomeFooter />
        </Col>
      </Row>
    </div>
  );
};

export default MoshlaPage;
