"use client";

import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import VegetableItemsPage from "./VegetableItemsPage";
import Marquee from "react-fast-marquee";
import { Col, Divider, Row } from "antd";

const VegetableAreaPage = () => {
  const query: Record<string, any> = {};
  const { data, isLoading, isError } = useGetAllServiceQuery({ ...query });
  const services = data?.service;

  let product = [];
  let vegetableProduct: any = [];
  if (data) {
    product = data.service;
    if (Array.isArray(services)) {
      vegetableProduct = services.filter(
        (item) =>
          item.category.title === "Vegetable" ||
          item.category.title === "vegetable" ||
          item.category.title === "Vegetables" ||
          item.category.title === "vegetables"
      );
    }
  }

  return (
    <div style={{ margin: "10px 0px" }}>
      <h2>Vegetables</h2>
      <Marquee pauseOnHover={true} direction="right" speed={50}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {vegetableProduct.map((productItem: any) => (
            <Col key={productItem.id} className="gutter-row">
              <VegetableItemsPage service={productItem} />
            </Col>
          ))}
        </Row>
      </Marquee>
    </div>
  );
};

export default VegetableAreaPage;
