"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import UploadImage from "@/components/ui/UploadImage";
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "@/redux/api/blogApi";
import { blogSchema } from "@/schemas/allSchema";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const EditBlogPage = ({ params }: any) => {
  const { role } = getUserInfo() as any;
  const { id } = params;

  const router = useRouter();
  const { data, isLoading } = useGetSingleBlogQuery(id);
  const [updateBlog] = useUpdateBlogMutation();

  const editBlogOnSubmit = async (values: any) => {
    message.loading("Updating....");
    try {
      const res = await updateBlog({ id, body: values });

      if (res) {
        router.push("/super_admin/blog-list");
        message.success("Done");
      }
    } catch (error: any) {
      message.error("Blog is not updated", error.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
    blog: data?.blog || "",
    contentImg: data?.contentImg || "",
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
            label: `blog-list`,
            link: `/${role}/blog-list`,
          },
          {
            label: `edit-blog`,
            link: `/${role}/edit/blog`,
          },
        ]}
      />
      <ActionBar title="Edit Blog" />
      <div style={{ margin: "10px 0px" }}>
        <Form
          submitHandler={editBlogOnSubmit}
          // resolver={yupResolver(blogSchema)}
          defaultValues={defaultValues}
        >
          <div
            style={{
              border: "1px solid #88B51A",
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
                <UploadImage name="file" />
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
          <Button style={{ backgroundColor: "#88B51A" }} htmlType="submit">
            Update Blog
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditBlogPage;
