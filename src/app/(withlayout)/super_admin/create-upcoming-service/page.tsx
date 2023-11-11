"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTimePicker from "@/components/Forms/FormTimePicker";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import UploadImage from "@/components/ui/UploadImage";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import { useCreateUpcomingServiceMutation } from "@/redux/api/upcomingServiceApi";
import { useDebounced } from "@/redux/hooks";
import { upcomingServiceSchema } from "@/schemas/allSchema";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateUpcomingService = () => {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const { data, isLoading, isError } = useGetAllCategoryQuery({ ...query });

  const categories = data?.categories;
  const meta = data?.meta;
  // console.log(categories);
  const categoryOptions: any = categories
    ? categories.map((category: any) => ({
        label: category.title,
        value: category.id,
      }))
    : null;

  const [createUpcomingService] = useCreateUpcomingServiceMutation();

  const createUpcomingServiceOnSubmit = async (values: any) => {
    const obj = { ...values };
    // Convert "price" and "quantity" to numbers
    obj.price = parseInt(obj.price);
    obj.quantity = parseInt(obj.quantity);
    console.log("object: ", obj);
    const file = obj["file"];
    console.log("File: ", file);
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating....");
    try {
      const res = await createUpcomingService(formData);
      console.log("Upcoming Service: ", res);
      if (res) {
        router.push("/super_admin/upcoming-service-list");
        message.success("Service created successfully");
      }
    } catch (error: any) {
      message.error("Service is not created!!", error);
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
            label: `create-upcoming-service`,
            link: `/${role}/create-upcoming-service`,
          },
        ]}
      />
      <ActionBar title="Create Upcoming Service Page" />
      <div style={{ margin: "10px" }}>
        <Form
          submitHandler={createUpcomingServiceOnSubmit}
          // resolver={yupResolver(upcomingServiceSchema)}
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
              Upcoming Service Information
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
                <FormDatePicker
                  name="startDate"
                  size="large"
                  label="Offer Start Date"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormTimePicker
                  use12Hours
                  name="startTime"
                  label="Offer Start Date"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormDatePicker
                  name="endDate"
                  size="large"
                  label="Offer End Date"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormTimePicker
                  use12Hours
                  name="endTime"
                  label="Offer End Date"
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
            Create Upcoming Service
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateUpcomingService;
