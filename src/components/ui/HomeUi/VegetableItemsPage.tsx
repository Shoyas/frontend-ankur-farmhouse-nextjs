import { Card, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";

const VegetableItemsPage = ({ service }: any) => {
  console.log("object: ", service);
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <Image
          alt="ankur-farm"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          layout="responsive"
          width={30}
          height={40}
        />
      }
    >
      <Meta title={service?.title} />
      Unit: {service?.unit}
    </Card>
  );
};

export default VegetableItemsPage;
