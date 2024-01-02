"use client";
import { useEffect, useState } from "react";

const AboutUsAreaPage = () => {
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

  return (
    <div>
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
          Our Mission
        </h1>
        <p
          style={{
            fontSize,
            textAlign: "center",
            marginTop: "10px",
            color: "#88B51A",
          }}
        >
          Destroy The Syndicates of Our Market
        </p>
        <p
          style={{
            fontSize,
            textAlign: "justify",
            marginTop: "10px",
            color: "gray",
          }}
        >
          Now the increase in the price of food products is a major problem in
          our country. This problem is mainly due to syndicates created by
          middlemen. In this situation, if we can eliminate middlemen and
          arrange direct buying and selling of food products between consumers
          and farmers, then it is possible to solve the problem of rising prices
          of products.
        </p>
      </div>
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
          About
        </h1>
        <p
          style={{
            marginTop: "20px",
            fontSize,
            textAlign: "justify",
            color: "gray",
          }}
        >
          Currently, there is an upward competition in the market. But, the cost
          of agriculture has not increased much. For some unscrupulous traders,
          such conditions have been created in the market.
        </p>
        <p
          style={{
            marginTop: "10px",
            fontSize,
            textAlign: "justify",
            color: "gray",
          }}
        >
          The government is trying various ways to control the rise in commodity
          prices but it is not being possible in any way. Actually, although it
          is not possible for the government alone, it is possible to control
          the rise in commodity prices with farmers.
        </p>
        <p
          style={{
            marginTop: "10px",
            fontSize,
            textAlign: "justify",
            color: "gray",
          }}
        >
          Many people are selling products at low prices in the market in
          various ways to increase the price of goods. People have to stand in
          line to buy products there. But, it is not possible for all classes of
          people in our country to stand in line and buy products. Ankur Farm
          has been created with them in mind. Here, people of all classes can
          buy certain quantity of products at lowest price and get home
          delivery.
        </p>
      </div>
    </div>
  );
};

export default AboutUsAreaPage;
