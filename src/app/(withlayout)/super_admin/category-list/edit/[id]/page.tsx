"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import {
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
} from "@/redux/api/categoryApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const EditCategoryPage = ({ params }: any) => {
  const { role } = getUserInfo() as any;
  const { id } = params;

  const router = useRouter();
  const { data, isLoading } = useGetSingleCategoryQuery(id);
  const [updateCategory] = useUpdateCategoryMutation();

  const editCategoryOnSubmit = async (values: any) => {
    message.loading("Updating...");
    try {
      const res = await updateCategory({ id, body: values });
      if (res) {
        router.push("/super_admin/category-list");
        message.success("Done");
      }
    } catch (error: any) {
      message.error("Category is not updated", error.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
    categoryImg: data?.categoryImg || "",
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
            label: `category-list`,
            link: `/${role}/category-list`,
          },
          {
            label: `edit-category`,
            link: `/${role}/edit/category`,
          },
        ]}
      />
      <ActionBar title="Edit Category" />
      <div style={{ margin: "10px" }}>
        <Form
          submitHandler={editCategoryOnSubmit}
          defaultValues={defaultValues}
          //   resolver={yupResolver(categorySchema)}
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
            Update Category
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditCategoryPage;
