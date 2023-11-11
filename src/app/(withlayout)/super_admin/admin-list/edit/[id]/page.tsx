"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import { getUserInfo } from "@/services/auth.service";
import { adminSchema } from "@/schemas/allSchema";

import { Button, Col, Row, message } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { userOptions } from "@/constants/global";
import UploadImage from "@/components/ui/UploadImage";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { useRouter } from "next/navigation";

const EditAdminPage = ({ params }: any) => {
  const { role } = getUserInfo() as any;
  const { id } = params;
  console.log(id);
  const router = useRouter();

  const { data, isLoading } = useGetSingleUserQuery(id);
  const [updateUser] = useUpdateUserMutation();

  const editAdminOnSubmit = async (values: any) => {
    message.loading("Updating....");
    try {
      // console.log(data);
      const res = await updateUser({ id, body: values });

      if (res) {
        router.push("/super_admin/admin-list");
        message.success("Done");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const defaultValues = {
    name: data?.name || "",
    email: data?.email || "",
    role: data?.role || "",
    contactNo: data?.contactNo || "",
    address: data?.address || "",
    createdAt: data?.createdAt || "",
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
            label: `admin-list`,
            link: `/${role}/admin-list`,
          },
          {
            label: `edit-admin`,
            link: `/${role}/edit/admin`,
          },
        ]}
      />

      <ActionBar title="Edit Admin Page" />
      <div>
        <Form
          submitHandler={editAdminOnSubmit}
          resolver={yupResolver(adminSchema)}
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
                <UploadImage name="file" />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Edit Admin
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditAdminPage;
