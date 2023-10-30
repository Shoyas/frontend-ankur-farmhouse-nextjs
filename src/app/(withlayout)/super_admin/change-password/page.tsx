"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import { authKey } from "@/constants/storageKey";
import {
  useChangePasswordByTokenQuery,
  useGetProfileByTokenQuery,
} from "@/redux/api/authApi";
import { changePasswordSchema } from "@/schemas/allSchema";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Row, Col, message, Button } from "antd";
import { useRouter } from "next/navigation";

const ChangePasswordPage = () => {
  const { role, userId } = getUserInfo() as any;
  const router = useRouter();
  const signOut = () => {
    removeUserInfo(authKey);
    router.push("/signin");
  };
  const { data, isLoading, isError } = useGetProfileByTokenQuery(authKey);
  const profileInfo = data;
  console.log("Profile Info: ", profileInfo);

  const [changePasswordByToken] = useChangePasswordByTokenQuery(authKey);

  const changePasswordOnSubmit = async (values: any) => {
    message.loading("Updating....");
    try {
      console.log(values);
      const res = await changePasswordByToken({ body: values });
      console.log("Change Password: ", res);
      if (res) {
        signOut();
        message.success("Done");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div style={{ margin: "10px" }}>
      <AFBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `change-password`,
            link: `/${role}/change-password`,
          },
        ]}
      />
      <ActionBar title="Change password Page" />
      <div>
        <Form
          submitHandler={changePasswordOnSubmit}
          resolver={yupResolver(changePasswordSchema)}
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
              Change Password
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="oldPassword"
                  size="large"
                  label="Old Password"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="newPassword"
                  size="large"
                  label="New Password"
                />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Change
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
