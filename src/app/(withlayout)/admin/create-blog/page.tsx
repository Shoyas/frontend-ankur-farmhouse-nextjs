"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import UploadImage from "@/components/ui/UploadImage";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
import { blogSchema } from "@/schemas/allSchema";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateBlogPage = () => {
  const { role, userId } = getUserInfo() as any;

  const [createBlog] = useCreateBlogMutation();
  const router = useRouter();

  const createBlogOnSubmit = async (data: any) => {
    message.loading("Creating....");
    try {
      console.log("Create Blog: ", data);
      // Append the userId to the data
      data.userId = userId;
      const res = await createBlog(data);
      console.log("Created Blog: ", res);
      message.success("Done...");
      if (res) {
        router.push("/super_admin/blog-list");
        message.success("Blog created successfully");
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
            label: `create-blog`,
            link: `/${role}/create-blog`,
          },
        ]}
      />

      <ActionBar title="Create Blog" />
      <div style={{ margin: "10px" }}>
        <Form
          submitHandler={createBlogOnSubmit}
          resolver={yupResolver(blogSchema)}
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
              Blog Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={12}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="title"
                  size="large"
                  label="Blog Title"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{ marginBottom: "10px", marginTop: "20px" }}
              >
                <UploadImage />
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={12}
                style={{ marginBottom: "10px" }}
              >
                <FormTextArea rows={8} name="blog" label="Write Blog" />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Create Blog
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateBlogPage;
