/*
import { Card, Button, Flex, InputNumber } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/legacy/image";
import product from "../../../assets/img/product/1.jpg";
import { ShoppingCartOutlined } from "@ant-design/icons";

const UpcomingServiceItemsPage = ({ upcomingService }: any) => {
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
          width={30}
          height={40}
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
            >
              Add Cart
            </Button>
            <InputNumber
              min={1}
              max={100000}
              defaultValue={1}
              onChange={onChange}
            />
          </Flex>
        </>,
      ]}
    >
      <Meta title={upcomingService?.title} />
      <h5>Price: {upcomingService?.price}</h5>
      <h5>Unit: {upcomingService?.unit}</h5>
      <h5>Quantity: {upcomingService?.quantity}</h5>
    </Card>
  );
};

export default UpcomingServiceItemsPage;

*/

import { Carousel } from "antd";
import UpcomingServiceCardCarousel from "./UpcomingServiceCardCarousel";
import { useGetAllUpcomingServiceQuery } from "@/redux/api/upcomingServiceApi";

const UpcomingServiceItemsPage = () => {
  const upcomingQuery: Record<string, any> = {};
  const resultUpcomingService = useGetAllUpcomingServiceQuery({
    ...upcomingQuery,
  });
  const upcomingServices = resultUpcomingService?.data?.upcomingService || [];

  return (
    <Carousel autoplay>
      {upcomingServices.map((service: any) => (
        <div key={service.id}>
          <UpcomingServiceCardCarousel service={service} />
        </div>
      ))}
    </Carousel>
  );
};

export default UpcomingServiceItemsPage;
