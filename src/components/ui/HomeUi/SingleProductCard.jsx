// SingleProductCard.jsx
"use client";
import dynamic from "next/dynamic";
import { Card, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
const SingleProductCard = ({ service }) => {
  console.log("object: ", service);
  return (
    // <div style={{ marginTop: "10px" }}>
    //   <h3>{service?.title}</h3>
    // </div>
    <Card>
      <Meta title={service.title} description={service.description} />
    </Card>
  );
};
export default SingleProductCard;
// export default dynamic(() => Promise.resolve(SingleProductCard), {
//   ssr: false,
// });

// const SingleProductCard = ({ service }) => {
//   console.log("object: ", service);

//   return (
//     <div style={{ marginTop: "10px" }}>
//       <Flex justify="space-between" align="center">
//       <div style={{ width: "30%" }}>
//         <Card
//           hoverable
//           style={{ width: 240 }}

//         >
//           <Meta title={services?.title} description="www.instagram.com" />
//           Unit: {services?.unit}
//         </Card>
//       </div>
//     </Flex>
//     </div>
//   );
// };

// export default SingleProductCard;

/*
<Row justify="space-between" align="center">
      <Col span={8}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img src={service?.serviceImg} alt="" />}
        >
          <Meta title={service?.title} description="www.instagram.com" />
          Unit: {service?.unit}
        </Card>
      </Col>
    </Row>
*/
/*
    <Flex justify="space-between" align="center">
      <div style={{ width: "30%" }}>
        <Card
          hoverable
          style={{ width: 240 }}
          
        >
          <Meta title={services?.title} description="www.instagram.com" />
          Unit: {services?.unit}
        </Card>
      </div>
    </Flex>
  */
