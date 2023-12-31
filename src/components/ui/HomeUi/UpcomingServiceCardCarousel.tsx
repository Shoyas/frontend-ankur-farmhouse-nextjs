import { Button, Card, Flex, InputNumber } from "antd";
import Image from "next/legacy/image";
import product from "../../../assets/img/product/1.jpg";
import { ShoppingCartOutlined } from "@ant-design/icons";

const UpcomingServiceCardCarousel = ({ service }: any) => {
  const onChange = (value: number | null) => {
    console.log("changed", value);
  };

  return (
    <Card
      hoverable
      style={{ width: 240, cursor: "default" }}
      cover={
        <Image
          alt="ankur-farm"
          src={product}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          layout="responsive"
          width={300}
          height={300}
        />
      }
      actions={[
        <Flex justify="space-around" align="center" key="actions">
          <Button
            style={{
              backgroundColor: "#88B51A",
              color: "#ffff",
              outline: "none",
              border: "none",
              cursor: "pointer",
            }}
            icon={<ShoppingCartOutlined />}
          >
            Add Cart
          </Button>
          <InputNumber min={1} max={5} defaultValue={0} onChange={onChange} />
        </Flex>,
      ]}
    >
      <Card.Meta title={service.title} />
      <h5>Price: {service.price}</h5>
      <h5>Unit: {service.unit}</h5>
      <h5>Quantity: {service.quantity}</h5>
    </Card>
  );
};

export default UpcomingServiceCardCarousel;
