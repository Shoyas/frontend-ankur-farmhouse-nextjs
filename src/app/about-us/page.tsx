import AboutUsAreaPage from "@/components/ui/AboutUsUi/AboutUsAreaPage";
import HomeFooter from "@/components/ui/HomeUi/HomeFooter";
import { Col, Row } from "antd";
import dynamic from "next/dynamic";
import Head from "next/head";

const HomeHeader = dynamic(
  () => import("../../components/ui/HomeUi/HomeHeader"),
  {
    ssr: false,
  }
);

const AboutUsPage = () => {
  return (
    <div>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="All Blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row justify="center">
        <Col span={22}>
          <HomeHeader />
          <AboutUsAreaPage />
          <HomeFooter />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsPage;
