import { Avatar, Card } from "antd";
import customer from "../../../assets/img/testimonial-3.png";
import Image from "next/legacy/image";

const CustomerFeedbackItem = ({ feedback }: any) => {
  return (
    <Card style={{ border: "none" }}>
      <Card.Meta
        avatar={
          <Avatar
            src={
              <Image
                src={customer}
                alt="Customer"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                layout="responsive"
                width={40}
                height={40}
              />
            }
          />
        }
        title={feedback?.user?.name}
        description={feedback?.feedback}
      />
    </Card>
  );
};

export default CustomerFeedbackItem;
