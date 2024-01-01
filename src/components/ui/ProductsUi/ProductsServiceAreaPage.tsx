"use client";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import ServiceItemsPage from "../HomeUi/ServiceItemsPage";
import { IService } from "@/types";

const ProductsServiceAreaPage = () => {
  const [fontSize, setFontSize] = useState("1.2rem");
  const [textAlign, setTextAlign] = useState("left");

  const updateFontSizeAndAlign = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      setFontSize("0.8rem");
      setTextAlign("center");
    } else if (screenWidth <= 320) {
      setFontSize("0.6rem");
      setTextAlign("center");
    } else {
      setFontSize("1.2rem");
      setTextAlign("left");
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
  console.log("Products Service: ", services);

  return (
    <div>
        <h1 style={{
          fontSize,
          color: "#88B51A",
          textDecoration: "underline",
          width: "20%",
          margin: "20px auto",
        }}>All Products</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        {services?.map((productItem: any) => (
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

export default ProductsServiceAreaPage;
