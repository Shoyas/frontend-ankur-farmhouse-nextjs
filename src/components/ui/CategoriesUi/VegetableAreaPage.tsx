"use client";

import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import ServiceItemsPage from "../HomeUi/ServiceItemsPage";
import { IService } from "@/types";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";

const VegetableAreaPage = () => {
  const [fontSize, setFontSize] = useState("1.2rem");

  const updateFontSizeAndAlign = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      setFontSize("0.8rem");
    } else if (screenWidth <= 320) {
      setFontSize("0.6rem");
    } else {
      setFontSize("1.2rem");
    }
  };

  useEffect(() => {
    updateFontSizeAndAlign();
    window.addEventListener("resize", updateFontSizeAndAlign);

    return () => {
      window.removeEventListener("resize", updateFontSizeAndAlign);
    };
  }, []);

  const query: Record<string, any> = {};
  const { data, isLoading, isError } = useGetAllServiceQuery({ ...query });
  const services: IService[] | undefined = data?.service;

  let product = [];
  let vegetableProduct: any = [];
  if (data) {
    product = data.service;
    if (Array.isArray(services)) {
      vegetableProduct = services.filter(
        (item) =>
          item.category.title === "vegetables" ||
          item.category.title === "vegetable" ||
          item.category.title === "Vegetable" ||
          item.category.title === "Vegetables"
      );
    }
  }

  return (
    <div>
      <h1
        style={{
          fontSize,
          color: "#88B51A",
          textDecoration: "underline",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Categories: Vegetable
      </h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        {vegetableProduct?.map((productItem: any) => (
          <Col
            key={productItem.id}
            className="gutter-row"
            style={{ padding: "20px" }}
          >
            <ServiceItemsPage service={productItem} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VegetableAreaPage;
