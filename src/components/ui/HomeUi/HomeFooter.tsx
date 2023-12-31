import { Col, Row } from "antd";
import Link from "next/link";

const HomeFooter = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Row>
        <Col xs={24} sm={6} md={6} lg={6}>
          <div
            style={{
              backgroundColor: "#F1EFE7",
              height: "135px",
              width: "100%",
              marginBottom: "5px",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <Link style={{ color: "#88B51A" }} href={"/"}>
                Ankur Farm
              </Link>
            </h1>
          </div>
        </Col>
        <Col xs={24} sm={6} md={6} lg={6}>
          <div
            style={{
              backgroundColor: "#F1EFE7",
              height: "135px",
              width: "100%",
              marginBottom: "5px",
            }}
          >
            <h1>Column 2</h1>
          </div>
        </Col>
        <Col xs={24} sm={6} md={6} lg={6}>
          <div
            style={{
              backgroundColor: "#F1EFE7",
              height: "135px",
              width: "100%",
              marginBottom: "5px",
            }}
          >
            <h1>Column 3</h1>
          </div>
        </Col>
        <Col xs={24} sm={6} md={6} lg={6}>
          <div
            style={{
              backgroundColor: "#F1EFE7",
              height: "135px",
              width: "100%",
              marginBottom: "5px",
            }}
          >
            <h1>Column 4</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeFooter;
