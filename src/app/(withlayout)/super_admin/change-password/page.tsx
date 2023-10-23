"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import { authKey } from "@/constants/storageKey";
import { useChangePasswordByTokenQuery } from "@/redux/api/authApi";
import { changePasswordSchema } from "@/schemas/allSchema";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Row, Col, message, Button } from "antd";
import { useRouter } from "next/navigation";

const ChangePasswordPage = () => {
  const { role, userId } = getUserInfo() as any;
  const router = useRouter();

  // const [changePasswordByToken] = useChangePasswordByTokenQuery(authKey);

  // const changePasswordOnSubmit = async (values: any) => {
  //   message.loading("Updating....");
  //   try {
  //     // console.log(data);
  //     const res = await changePasswordByToken({ body: values });

  //     if (res) {
  //       router.push("/super_admin/admin-list");
  //       message.success("Done");
  //     }
  //   } catch (error: any) {
  //     console.error(error.message);
  //   }
  // };
  return (
    <div>
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
        {/* <Form
          submitHandler={changePasswordOnSubmit}
          resolver={yupResolver(changePasswordSchema)}
          defaultValues={defaultValues}
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
        </Form> */}
      </div>
    </div>
  );
};

export default ChangePasswordPage;
