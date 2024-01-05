"use client";
import { Card, Button, Flex, InputNumber, message } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/legacy/image";
import product from "../../../assets/img/product/1.jpg";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";

import { IOrderToCart } from "@/types";
import { useAppDispatch } from "@/redux/hooks";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../../redux/store";
import { AnyAction } from "@reduxjs/toolkit";
import { addToCart } from "@/redux/slices/cartSlice";

const ServiceItemsPage = ({ service }: any) => {
  // console.log("object: ", service);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number | null | undefined>(undefined);

  const onChangeQuantity = (e: number | null) => {
    console.log("changed", e);
    setValue(e);
  };

  const order: IOrderToCart = {
    serviceImg: service?.serviceImg,
    serviceTitle: service?.title,
    serviceId: service?.id,
    quantity: value,
    unit: service?.unit,
  };

  const handleAddProduct = (order: IOrderToCart) => {
    console.log("Add in to Cart: ", order);
    dispatch(addToCart(order));
    message.success("Order added into cart");
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
              onClick={() => handleAddProduct(order)}
            >
              Add Cart
            </Button>
            <InputNumber
              min={1}
              max={5}
              defaultValue={0}
              onChange={onChangeQuantity}
            />
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
