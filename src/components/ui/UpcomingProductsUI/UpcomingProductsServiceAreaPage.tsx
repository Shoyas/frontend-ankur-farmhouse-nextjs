"use client";

import { useGetAllUpcomingServiceQuery } from "@/redux/api/upcomingServiceApi";
import { useEffect, useState } from "react";
import UpcomingServiceCardCarousel from "../HomeUi/UpcomingServiceCardCarousel";
import { Col, Row } from "antd";

const UpcomingProductsServiceAreaPage = () => {
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

  const upcomingQuery: Record<string, any> = {};
  const resultUpcomingService = useGetAllUpcomingServiceQuery({
    ...upcomingQuery,
  });
  const upcomingServices = resultUpcomingService?.data?.upcomingService || [];

  return (
    <div>
      <h1
        style={{
          fontSize,
          color: "#88B51A",
          textDecoration: "underline",
          textAlign: "center",
          marginTop: '20px',
        }}
      >
        Upcoming Products
      </h1>

      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        {upcomingServices.map((service: any) => (
          <Col
            key={service.id}
            className="gutter-row"
            style={{ padding: "20px" }}
          >
            <UpcomingServiceCardCarousel service={service} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UpcomingProductsServiceAreaPage;
