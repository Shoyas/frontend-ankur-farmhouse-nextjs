"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import UploadImage from "@/components/ui/UploadImage";
import { userOptions } from "@/constants/global";
import { authKey } from "@/constants/storageKey";
import { useGetProfileByTokenQuery } from "@/redux/api/authApi";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import { profileSchema } from "@/schemas/allSchema";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const EditProfilePage = () => {
  const { role, userId, email } = getUserInfo() as any;
  const router = useRouter();

  const { data, isLoading, isError } = useGetProfileByTokenQuery(authKey);
  const profileInfo = data;
  const { id } = profileInfo;

  const [updateUser] = useUpdateUserMutation();

  const editProfileOnSubmit = async (values: any) => {
    message.loading("Updating....");
    try {
      const res = await updateUser({ id, body: values });
      if (res) {
        router.push("/super_admin");
        message.success("Done");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const defaultValues = {
    name: profileInfo?.name || "",
    email: profileInfo?.email || "",
    role: profileInfo?.role || "",
    contactNo: profileInfo?.contactNo || "",
    address: profileInfo?.address || "",
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
            label: `edit-profile`,
            link: `/${role}/edit-profile`,
          },
        ]}
      />
      <ActionBar title="Edit Profile Page" />
      <div>
        <Form
          submitHandler={editProfileOnSubmit}
          resolver={yupResolver(profileSchema)}
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
              Profile Information
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
            Edit Profile
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditProfilePage;
