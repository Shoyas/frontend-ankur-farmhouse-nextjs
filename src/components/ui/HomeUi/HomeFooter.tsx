"use client";

import { Col, Row } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillBehanceSquare,
  AiOutlineHome,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";

const HomeFooter = () => {
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
  return (
    <div style={{ marginTop: "20px", height: "50vh" }}>
      <Row style={{ marginTop: "20px" }}>
        <Col xs={24} sm={6} md={6} lg={6}>
          <div
            style={{
              backgroundColor: "#F1EFE7",
              height: "500px",
              width: "100%",
              marginBottom: "5px",
            }}
          >
            <h1
              style={{
                fontSize,
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <Link style={{ color: "#88B51A" }} href={"/"}>
                Ankur Farm
              </Link>
            </h1>
            <p style={{ padding: "8px", fontSize, color: "gray" }}>
              Now the increase in the price of food products is a major problem
              in our country. This problem is mainly due to syndicates created
              by middlemen.
              <br />
              <br />
              In this situation,
              <br /> if we can eliminate middlemen and arrange direct buying and
              selling of food products between consumers and farmers, then it is
              possible to solve the problem of rising prices of products.
            </p>
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <Link href={"/"} style={{ color: "#88B51A" }}>
                <AiFillFacebook style={{ height: "50px", width: "50px" }} />
              </Link>
              <Link href={"/"} style={{ color: "#88B51A" }}>
                <AiFillTwitterSquare
                  style={{ height: "50px", width: "50px" }}
                />
              </Link>
              <Link href={"/"} style={{ color: "#88B51A" }}>
                <AiFillBehanceSquare
                  style={{ height: "50px", width: "50px" }}
                />
              </Link>
              <Link href={"/"} style={{ color: "#88B51A" }}>
                <AiFillInstagram style={{ height: "50px", width: "50px" }} />
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={6} md={6} lg={6}>
          <div
            style={{
              backgroundColor: "#F1EFE7",
              height: "500px",
              width: "100%",
              marginBottom: "5px",
            }}
          >
            <h1
              style={{
                fontSize,
                textAlign: "left",
                fontWeight: "bold",
                paddingTop: "0.5rem",
                marginBottom: "1rem",
                color: "#88B51A",
              }}
            >
              Information
            </h1>
            <div style={{ marginTop: "15px", padding: "8px" }}>
              <ul style={{ listStyle: "none" }}>
                <li style={{ margin: "10px 5px" }}>
                  <Link
                    href={"/"}
                    style={{ color: "gray", textDecoration: "underline" }}
                  >
                    Up-Coming Deals
                  </Link>
                </li>
                <li style={{ margin: "10px 5px" }}>
                  <Link
                    href={"/"}
                    style={{ color: "gray", textDecoration: "underline" }}
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={6} md={6} lg={6}>
          <div
            style={{
              backgroundColor: "#F1EFE7",
              height: "500px",
              width: "100%",
              marginBottom: "5px",
            }}
          >
            <h1
              style={{
                fontSize,
                textAlign: "left",
                fontWeight: "bold",
                paddingTop: "0.5rem",
                marginBottom: "1rem",
                color: "#88B51A",
              }}
            >
              Menu
            </h1>
            <div style={{ marginTop: "15px", padding: "8px" }}>
              <ul style={{ listStyle: "none" }}>
                <li style={{ margin: "10px 5px" }}>
                  <Link
                    href={"/"}
                    style={{ color: "gray", textDecoration: "underline" }}
                  >
                    Products
                  </Link>
                </li>
                <li style={{ margin: "10px 5px" }}>
                  <Link
                    href={"/"}
                    style={{ color: "gray", textDecoration: "underline" }}
                  >
                    Upcoming Products
                  </Link>
                </li>
                <li style={{ margin: "10px 5px" }}>
                  <Link
                    href={"/"}
                    style={{ color: "gray", textDecoration: "underline" }}
                  >
                    Blog
                  </Link>
                </li>
                <li style={{ margin: "10px 5px" }}>
                  <Link
                    href={"/"}
                    style={{ color: "gray", textDecoration: "underline" }}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={6} md={6} lg={6}>
          <div
            style={{
              backgroundColor: "#F1EFE7",
              height: "500px",
              width: "100%",
              marginBottom: "5px",
            }}
          >
            <h1
              style={{
                fontSize,
                textAlign: "left",
                fontWeight: "bold",
                paddingTop: "0.5rem",
                marginBottom: "1rem",
                color: "#88B51A",
              }}
            >
              Contact Us
            </h1>
            <div
              style={{
                display: "flex",
              }}
            >
              <AiOutlineHome
                style={{ height: "50px", width: "50px", color: "#88B51A" }}
              />
              <h4 style={{ margin: "10px 5px", color: "gray" }}>
                Dakkhin Ram-Chandrapur, Banglabazar, Pabna
              </h4>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <AiFillPhone
                style={{ height: "40px", width: "40px", color: "#88B51A" }}
              />
              <h4 style={{ margin: "3px 5px", color: "gray" }}>
                +880 177 420 3154
                <br />
                +880 152 142 3331
              </h4>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <AiOutlineMail
                style={{ height: "40px", width: "40px", color: "#88B51A" }}
              />
              <h4 style={{ margin: "3px 5px", color: "gray" }}>
                support@ankurfarm.com
                <br />
                contact@ankurfarm.com
              </h4>
            </div>
          </div>
        </Col>
      </Row>
      <div style={{ textAlign: "center", backgroundColor: "#F1EFE7" }}>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span style={{ color: "#88B51A" }}>Ankur Private LTD.</span>
        </p>
      </div>
    </div>
  );
};

export default HomeFooter;
