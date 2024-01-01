import HomeFooter from "@/components/ui/HomeUi/HomeFooter";
import UpcomingProductsServiceAreaPage from "@/components/ui/UpcomingProductsUI/UpcomingProductsServiceAreaPage";
import { Col, Row } from "antd";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const HomeHeader = dynamic(
  () => import("../../components/ui/HomeUi/HomeHeader"),
  {
    ssr: false,
  }
);

const UpcomingProductsPage = () => {
  return (
    <div>
      <Head>
        <title>Upcoming Products</title>
        <meta name="description" content="All Upcoming Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row justify="center">
        <Col span={22}>
          <HomeHeader />
          <UpcomingProductsServiceAreaPage />
          <HomeFooter />
        </Col>
      </Row>
    </div>
  );
};

export default UpcomingProductsPage;
