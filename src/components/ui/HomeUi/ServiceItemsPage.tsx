"use client";
import { Card, Button, Flex, InputNumber } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/legacy/image";
import product from "../../../assets/img/product/1.jpg";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";

const ServiceItemsPage = ({ service }: any) => {
  console.log("object: ", service);
  const [value, setValue] = useState<number | null | undefined>(undefined);

  const onChange = (e: number | null) => {
    console.log("changed", e);
    setValue(e);
  };
  const addToCart = () => {
    console.log("Item added: ", service?.title, "Quantity: ", value);
  };

  return (
    <Card
      hoverable
      style={{ width: 240, cursor: "default" }}
      size="small"
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
        <>
          <Flex justify="space-around" align="center">
            <Button
              style={{
                backgroundColor: "#88B51A",
                color: "#ffff",
                outline: "none",
                border: "none",
                cursor: "pointer",
              }}
              icon={<ShoppingCartOutlined />}
              onClick={addToCart}
            >
              Add Cart
            </Button>
            <InputNumber min={1} max={5} defaultValue={0} onChange={onChange} />
          </Flex>
        </>,
      ]}
    >
      <Meta title={service?.title} />
      <h5>Price: {service?.price}</h5>
      <h5>Unit: {service?.unit}</h5>
      <h5>Quantity: {service?.quantity}</h5>
    </Card>
  );
};

export default ServiceItemsPage;
