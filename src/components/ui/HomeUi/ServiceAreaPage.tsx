"use client";

import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import Marquee from "react-fast-marquee";
import { Col, Menu, Row } from "antd";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import { ICategory } from "@/types";
import Link from "next/link";
import ServiceItemsPage from "./ServiceItemsPage";
import Image from "next/legacy/image";
import emailBanner from "../../../assets/img/bg-newsletter.png";
import { Button, Input, Space } from "antd";
import { useEffect, useState } from "react";
import UpcomingServiceItemsPage from "./UpcomingServiceItemsPage";
import FacilitiesCard from "./FacilitiesCard";
import CustomerFeedbacks from "./CustomerFeedbacks";

const ServiceAreaPage = () => {
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

  const categoryQuery: Record<string, any> = {};
  const result = useGetAllCategoryQuery({ ...categoryQuery });
  const categories = result?.data?.categories;
  const CustomMenu = ({
    categories,
  }: {
    categories: ICategory[] | undefined;
  }) => (
    <Menu>
      {categories &&
        categories.map((category: ICategory) => (
          <Menu.Item key={category.id}>
            <Link
              href={`/categories/${category.title}`}
              style={{ fontSize, paddingTop: "20px", color: "#88B51A" }}
            >
              {category.title}
            </Link>
          </Menu.Item>
        ))}
    </Menu>
  );

  const query: Record<string, any> = {};
  const { data, isLoading, isError } = useGetAllServiceQuery({ ...query });
  const services = data?.service;

  let product = [];
  let fishProduct: any = [];
  if (data) {
    product = data.service;
    if (Array.isArray(services)) {
      fishProduct = services.filter(
        (item) =>
          item.category.title === "Fish" ||
          item.category.title === "fish" ||
          item.category.title === "Fishes" ||
          item.category.title === "fishes"
      );
    }
  }

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

  let moshlaProduct: any = [];
  if (data) {
    product = data.service;
    if (Array.isArray(services)) {
      moshlaProduct = services.filter(
        (item) =>
          item.category.title === "Moshla" ||
          item.category.title === "moshla" ||
          item.category.title === "Moshlas" ||
          item.category.title === "moshlas"
      );
    }
  }
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
  let meatProduct: any = [];
  if (data) {
    product = data.service;
    if (Array.isArray(services)) {
      meatProduct = services.filter(
        (item) =>
          item.category.title === "Meat" ||
          item.category.title === "meat" ||
          item.category.title === "Meats" ||
          item.category.title === "meats"
      );
    }
  }

  return (
    <div style={{ margin: "20px 0px" }}>
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 8 }}
          lg={{ span: 6 }}
        >
          <h2
            style={{
              color: "#88B51A",
              fontSize,
            }}
          >
            Categories
          </h2>
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
            }}
          >
            <CustomMenu categories={categories} />
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 16 }}
          lg={{ span: 18 }}
        >
          <h2
            style={{
              color: "#88B51A",
              fontSize,
              textAlign,
            }}
          >
            Vegetables
          </h2>
          <Marquee
            pauseOnHover={true}
            direction="right"
            speed={50}
            style={{ backgroundColor: "#F0EFE7" }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
              {vegetableProduct.map((productItem: any) => (
                <Col
                  key={productItem.id}
                  className="gutter-row"
                  style={{ padding: "20px" }}
                >
                  <ServiceItemsPage service={productItem} />
                </Col>
              ))}
            </Row>
          </Marquee>
        </Col>
      </Row>

      <div style={{ position: "relative", margin: "20px 0" }}>
        <Image
          alt="ankur-farm"
          src={emailBanner}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          layout="responsive"
          width={30}
          height={10}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "50%",
            textAlign: "center",
            padding: "0 10px",
          }}
        >
          <h2 style={{ paddingBottom: "10px", fontSize, color: "#88B51A" }}>
            NEWSLETTER
          </h2>
          <p style={{ paddingBottom: "10px", color: "#88B51A", fontSize }}>
            Submit your email to receive special offers
          </p>
          <Space.Compact style={{ width: "100%" }}>
            <Input placeholder="Enter Email" />
            <Button
              style={{
                backgroundColor: "#88B51A",
                color: "#ffff",
                outline: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Submit
            </Button>
          </Space.Compact>
        </div>
      </div>

      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 8 }}
          lg={{ span: 6 }}
        >
          <h2
            style={{
              color: "#88B51A",
              fontSize,
            }}
          >
            Upcoming Deals
          </h2>
          <div>
            <UpcomingServiceItemsPage />
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 16 }}
          lg={{ span: 18 }}
        >
          <h2
            style={{
              color: "#88B51A",
              fontSize,
              textAlign,
            }}
          >
            Fish
          </h2>
          <Marquee
            pauseOnHover={true}
            direction="left"
            speed={50}
            style={{ backgroundColor: "#F0EFE7" }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
              {fishProduct.map((productItem: any) => (
                <Col
                  key={productItem.id}
                  className="gutter-row"
                  style={{ padding: "10px" }}
                >
                  <ServiceItemsPage service={productItem} />
                </Col>
              ))}
            </Row>
          </Marquee>
        </Col>
      </Row>

      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 8 }}
          lg={{ span: 6 }}
        >
          <div
          // style={{
          //   marginTop: "22px",
          // }}
          >
            <FacilitiesCard />
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 16 }}
          lg={{ span: 18 }}
        >
          <h2
            style={{
              color: "#88B51A",
              fontSize,
              textAlign,
            }}
          >
            Moshla
          </h2>
          <Marquee
            pauseOnHover={true}
            direction="right"
            speed={50}
            style={{ backgroundColor: "#F0EFE7" }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
              {moshlaProduct.map((productItem: any) => (
                <Col
                  key={productItem.id}
                  className="gutter-row"
                  style={{ padding: "10px" }}
                >
                  <ServiceItemsPage service={productItem} />
                </Col>
              ))}
            </Row>
          </Marquee>
        </Col>
      </Row>

      <div
        style={{
          marginTop: "22px",
        }}
      >
        <h2
          style={{
            color: "#88B51A",
            fontSize,
            textAlign: "center",
          }}
        >
          Feedbacks
        </h2>
        <CustomerFeedbacks />
      </div>

      <Row>
        <Col style={{ paddingRight: "5px" }} xs={24} sm={12} md={12} lg={12}>
          <h2
            style={{
              color: "#88B51A",
              fontSize,
              textAlign,
            }}
          >
            Egg
          </h2>
          <Marquee
            pauseOnHover={true}
            direction="left"
            speed={50}
            style={{ backgroundColor: "#F0EFE7" }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
              {eggProduct.map((productItem: any) => (
                <Col
                  key={productItem.id}
                  className="gutter-row"
                  style={{ padding: "10px" }}
                >
                  <ServiceItemsPage service={productItem} />
                </Col>
              ))}
            </Row>
          </Marquee>
        </Col>
        <Col style={{ paddingLeft: "5px" }} xs={24} sm={12} md={12} lg={12}>
          <h2
            style={{
              color: "#88B51A",
              fontSize,
              textAlign,
            }}
          >
            Meat
          </h2>
          <Marquee
            pauseOnHover={true}
            direction="right"
            speed={50}
            style={{ backgroundColor: "#F0EFE7" }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
              {meatProduct.map((productItem: any) => (
                <Col
                  key={productItem.id}
                  className="gutter-row"
                  style={{ padding: "10px" }}
                >
                  <ServiceItemsPage service={productItem} />
                </Col>
              ))}
            </Row>
          </Marquee>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceAreaPage;
