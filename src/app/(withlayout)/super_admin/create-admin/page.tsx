"use client";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import Form from "./../../../../components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import { Button, Col, Row, message } from "antd";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { userOptions } from "@/constants/global";
import UploadImage from "@/components/ui/UploadImage";
import FormTextArea from "@/components/Forms/FormTextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSchema } from "@/schemas/admin";
import { useUserSignupMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import ActionBar from "@/components/ui/ActionBar";

const CreateAdminPage = () => {
  const { role } = getUserInfo() as any;
  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  const createAdminOnSubmit = async (data: any) => {
    message.loading("Creating....");
    try {
      console.log("Create Admin: ", data);
      const res = await userSignup(data);
      message.success("Done...");
      if (res) {
        router.push("/profile");
        message.success("User signed up successfully");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div style={{ margin: "15px 15px" }}>
      <AFBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `create-admin`,
            link: `/${role}/create-admin`,
          },
        ]}
      />

      <ActionBar title="Create Admin Page" />
      <div>
        <Form
          submitHandler={createAdminOnSubmit}
          resolver={yupResolver(adminSchema)}
        >
          <div
            style={{
              border: "1px double lightGray",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput type="text" name="name" size="large" label="Name" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="email"
                  name="email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelectField
                  name="role"
                  size="large"
                  label="Role"
                  options={userOptions}
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="contactNo"
                  size="large"
                  label="Contact Number"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormTextArea name="address" label="Address" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px", marginTop: "20px" }}
              >
                <UploadImage />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Create Admin
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdminPage;
