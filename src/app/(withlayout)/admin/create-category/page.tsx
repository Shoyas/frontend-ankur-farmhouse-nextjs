"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import { useCreateCategoryMutation } from "@/redux/api/categoryApi";
import { categorySchema } from "@/schemas/allSchema";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateCategoryPage = () => {
  const { role } = getUserInfo() as any;
  const router = useRouter();

  const [createCategory] = useCreateCategoryMutation();

  const createServiceOnSubmit = async (data: any) => {
    message.loading("Creating....");
    console.log("Create Category: ", data);
    try {
      const res = await createCategory(data);
      if (res) {
        router.push("/super_admin/category-list");
        message.success("Category created successfully");
      }
    } catch (error: any) {
      message.error("Category is not created!!", error);
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
            label: `create-category`,
            link: `/${role}/create-category`,
          },
        ]}
      />
      <ActionBar title="Create Category Page" />
      <div style={{ margin: "10px" }}>
        <Form
          submitHandler={createServiceOnSubmit}
          resolver={yupResolver(categorySchema)}
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
              Category Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="title"
                  size="large"
                  label="Category Title"
                />
              </Col>
            </Row>
          </div>
          <Button style={{ backgroundColor: "#88B51A" }} htmlType="submit">
            Create Category
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateCategoryPage;
