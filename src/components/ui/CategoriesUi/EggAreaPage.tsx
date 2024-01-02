"use client";

import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import { IService } from "@/types";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import ServiceItemsPage from "../HomeUi/ServiceItemsPage";

const EggAreaPage = () => {
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
  let eggProduct: any = [];
  if (data) {
    product = data.service;
    if (Array.isArray(services)) {
      eggProduct = services.filter(
        (item) =>
          item.category.title === "Egg" ||
          item.category.title === "egg" ||
          item.category.title === "Eggs" ||
          item.category.title === "eggs"
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
        Categories: Egg
      </h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        {eggProduct?.map((productItem: any) => (
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

export default EggAreaPage;
