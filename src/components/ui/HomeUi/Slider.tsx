import { Carousel } from "antd";
import Image from "next/legacy/image";
import slideOne from "../../../assets/img/slideshow/home2-slideshow-1.jpg";
import slideTwo from "../../../assets/img/slideshow/home2-slideshow-2.jpg";
import slideThree from "../../../assets/img/slideshow/home2-slideshow-3.jpg";

const Slider = () => (
  <Carousel effect="fade" style={{ margin: "20px 0px" }} autoplay>
    <div>
      <Image
        src={slideOne}
        loading="lazy"
        alt="ankur-farm"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        layout="responsive"
      />
    </div>
    <div>
      <Image
        src={slideTwo}
        loading="lazy"
        alt="ankur-farm"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        layout="responsive"
      />
    </div>
    <div>
      <Image
        src={slideThree}
        loading="lazy"
        alt="ankur-farm"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        layout="responsive"
      />
    </div>
  </Carousel>
);

export default Slider;
