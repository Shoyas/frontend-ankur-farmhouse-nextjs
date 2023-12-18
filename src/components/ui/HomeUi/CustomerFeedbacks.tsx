import { useGetAllFeedbackQuery } from "@/redux/api/feedbackApi";
import Image from "next/legacy/image";
import customer from "../../../assets/img/testimonial-1.png";
import { Col, Row } from "antd";
import CustomerFeedbackItem from "./CustomerFeedbackItem";

const CustomerFeedbacks = () => {
  const feedbackQuery: Record<string, any> = {};
  const resultFeedback = useGetAllFeedbackQuery({ ...feedbackQuery });
  const feedbacks = resultFeedback?.data?.feedbacks || [];

  return (
    <Row>
      {feedbacks.map((feedback: any) => (
        <Col xs={24} sm={8} md={8} lg={8} key={feedback.id}>
          <CustomerFeedbackItem feedback={feedback} />
        </Col>
      ))}
    </Row>
  );
};

export default CustomerFeedbacks;
