import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import { authKey } from "@/constants/storageKey";
import { useGetProfileByTokenQuery } from "@/redux/api/authApi";
import { getUserInfo } from "@/services/auth.service";
import { Card, Col, Row } from "antd";
import dayjs from "dayjs";

const AdminPage = () => {
  const { role, userId } = getUserInfo() as any;
  const { data, isLoading, isError } = useGetProfileByTokenQuery(authKey);
  const profileInfo = data;

  return (
    <div style={{ margin: "10px" }}>
      <AFBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />

      <ActionBar title="Profile Information" />

      <div style={{ margin: "10px" }}>
        <Row
          justify="center"
          align="middle"
          style={{
            minHeight: "70vh",
          }}
        >
          <Col sm={12} md={8} lg={8}>
            {/* <Image src={signinImage} width={500} alt="Signin Image" /> */}
            <p>Profile Image</p>
          </Col>
          <Col sm={12} md={14} lg={14}>
            <Card title="My Profile" bordered={false} style={{ width: "100%" }}>
              <h3>Name: {profileInfo?.name}</h3>
              <h3>Email: {profileInfo?.email}</h3>
              <h3>Contact No.: {profileInfo?.contactNo}</h3>
              <h3>Address: {profileInfo?.address}</h3>
              <h3>
                Created At:{" "}
                {profileInfo?.createdAt &&
                  dayjs(profileInfo?.createdAt).format("MMM D, YYYY hh:mm A")}
              </h3>
              <h3>
                Last Updated:{" "}
                {profileInfo?.updatedAt &&
                  dayjs(profileInfo?.updatedAt).format("MMM D, YYYY hh:mm A")}
              </h3>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AdminPage;
