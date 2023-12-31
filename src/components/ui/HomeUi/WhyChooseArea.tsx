"use client";

import Image from "next/legacy/image";
import ChoosingPhoto from "../../../assets/img/intro-2.png";
import choosingPhotoCol1 from "../../../assets/img/intro-icon-1.png";
import choosingPhotoCol2 from "../../../assets/img/intro-icon-2.png";
import choosingPhotoCol3 from "../../../assets/img/intro-icon-3.png";
import choosingPhotoCol4 from "../../../assets/img/intro-icon-4.png";
import { Row, Col } from "antd";
import { useEffect, useState } from "react";

const WhyChooseArea = () => {
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
    <div style={{ marginTop: "20px" }}>
      <div
        style={{
          width: "8%",
          margin: "0px  auto",
        }}
      >
        <Image
          alt="ankur-farm"
          src={choosingPhotoCol1}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <h1
        style={{
          textAlign: "center",
          color: "#88B51A",
          marginBottom: "25px",
          fontSize,
        }}
      >
        Why Choose Us
      </h1>

      <Row>
        <Col xs={24} sm={8} md={8} lg={8}>
          <div
            style={{
              backgroundColor: "#F1EFE7",
              height: "135px",
              width: "100%",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "12%",
                paddingTop: "20px",
                margin: "15px  auto",
              }}
            >
              <Image
                alt="ankur-farm"
                src={choosingPhotoCol1}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <p style={{ textAlign: "center", color: "#88B51A" }}>
              <strong>Ankur Offers free delivery to every customers</strong>
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#F1EFE7",
              height: "135px",
              width: "100%",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "12%",
                paddingTop: "20px",
                margin: "15px  auto",
              }}
            >
              <Image
                alt="ankur-farm"
                src={choosingPhotoCol2}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <p style={{ textAlign: "center", color: "#88B51A" }}>
              <strong>Ankur Offers free delivery to every customers</strong>
            </p>
          </div>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
          <div
            style={{
              margin: "0px auto",
              // width: "40%",
            }}
          >
            <Image
              alt="ankur-farm"
              src={ChoosingPhoto}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
          <div
            style={{
              backgroundColor: "#F1EFE7",
              height: "135px",
              width: "100%",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "12%",
                paddingTop: "20px",
                margin: "15px  auto",
              }}
            >
              <Image
                alt="ankur-farm"
                src={choosingPhotoCol3}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <p style={{ textAlign: "center", color: "#88B51A" }}>
              <strong>Ankur Offers free delivery to every customers</strong>
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#F1EFE7",
              height: "135px",
              width: "100%",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "12%",
                paddingTop: "20px",
                margin: "15px  auto",
              }}
            >
              <Image
                alt="ankur-farm"
                src={choosingPhotoCol4}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <p style={{ textAlign: "center", color: "#88B51A" }}>
              <strong>Ankur Offers free delivery to every customers</strong>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhyChooseArea;
