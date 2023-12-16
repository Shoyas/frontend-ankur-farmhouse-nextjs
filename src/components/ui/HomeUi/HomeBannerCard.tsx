"use client";
import { Flex } from "antd";
import Image from "next/image";
import bannerCardOne from "../../../assets/img/banner/home2-banner-1.png";
import bannerCardTwo from "../../../assets/img/banner/home2-banner-2.png";
import bannerCardThree from "../../../assets/img/banner/home2-banner-3.png";

const HomeBannerCard = () => {
  return (
    <Flex justify="space-between" align="center">
      <div style={{ width: "30%" }}>
        <Image
          src={bannerCardOne}
          loading="lazy"
          alt="ankur-farm"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          layout="responsive"
        />
      </div>
      <div style={{ width: "30%" }}>
        <Image
          src={bannerCardTwo}
          loading="lazy"
          alt="ankur-farm"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          layout="responsive"
        />
      </div>
      <div style={{ width: "30%" }}>
        <Image
          src={bannerCardThree}
          loading="lazy"
          alt="ankur-farm"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          layout="responsive"
        />
      </div>
    </Flex>
  );
};

export default HomeBannerCard;
