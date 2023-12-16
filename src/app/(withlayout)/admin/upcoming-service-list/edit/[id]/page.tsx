"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import UploadImage from "@/components/ui/UploadImage";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import {
  useGetSingleUpcomingServiceQuery,
  useUpdateUpcomingServiceMutation,
} from "@/redux/api/upcomingServiceApi";
import { upcomingServiceSchema } from "@/schemas/allSchema";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const EditUpcomingServicePage = ({ params }: any) => {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const { id } = params;

  const { data, isLoading } = useGetSingleUpcomingServiceQuery(id);
  const [updateService] = useUpdateUpcomingServiceMutation();

  const editUpcomingServiceOnSubmit = async (values: any) => {
    console.log("Updated Upcoming Service", values);
    const price = parseInt(values.price);
    const quantity = parseInt(values.quantity);
    values.price = price;
    values.quantity = quantity;
    message.loading("Uploading...");
    try {
      const res = await updateService({ id, body: values });

      if (res) {
        router.push("/super_admin/upcoming-service-list");
        message.success("Done");
      }
    } catch (error: any) {
      message.error("Upcoming Service is not updated", error.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
    price: data?.price || "",
    unit: data?.unit || "",
    quantity: data?.quantity || "",
    categoryId: data?.categoryId || "",
  };

  const query: Record<string, any> = {};
  const result = useGetAllCategoryQuery({ ...query });
  const categories = result?.data?.categories;
  const categoryOptions: any = categories
    ? categories.map((category: any) => ({
        label: category.title,
        value: category.id,
      }))
    : null;

  return (
    <div style={{ margin: "15px 15px" }}>
      <AFBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `upcoming-service-list`,
            link: `/${role}/upcoming-service-list`,
          },
          {
            label: `edit-upcoming-service`,
            link: `/${role}/edit/upcoming-service`,
          },
        ]}
      />

      <ActionBar title="Edit Upcoming Service" />
      <div style={{ margin: "10px" }}>
        <Form
          submitHandler={editUpcomingServiceOnSubmit}
          // resolver={yupResolver(upcomingServiceSchema)}
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
              Service Information
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
                  label="Service Title"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="price"
                  size="large"
                  label="Price"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput type="text" name="unit" size="large" label="Unit" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="quantity"
                  size="large"
                  label="Quantity"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelectField
                  name="categoryId"
                  options={categoryOptions}
                  size="large"
                  placeholder="Select"
                  label="Category"
                />
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
          <Button style={{ backgroundColor: "#88B51A" }} htmlType="submit">
            Update Upcoming Service
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditUpcomingServicePage;
