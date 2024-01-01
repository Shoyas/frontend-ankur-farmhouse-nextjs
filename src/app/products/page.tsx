import dynamic from "next/dynamic";
import { Col, Row } from "antd";
import HomeFooter from "@/components/ui/HomeUi/HomeFooter";
import ProductsServiceAreaPage from "@/components/ui/ProductsUi/ProductsServiceAreaPage";
import Head from "next/head";

const HomeHeader = dynamic(
  () => import("../../components/ui/HomeUi/HomeHeader"),
  {
    ssr: false,
  }
);

const ProductPage = () => {
  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content="All Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row justify="center">
        <Col span={22}>
          <HomeHeader />
          <ProductsServiceAreaPage />
          <HomeFooter />
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
