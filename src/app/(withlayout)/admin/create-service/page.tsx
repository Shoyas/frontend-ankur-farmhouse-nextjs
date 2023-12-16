"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import UploadImage from "@/components/ui/UploadImage";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import { useCreateServiceMutation } from "@/redux/api/serviceApi";
import { useDebounced } from "@/redux/hooks";
import { serviceSchema } from "@/schemas/allSchema";
import { getUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateServicePage = () => {
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

  const [createService] = useCreateServiceMutation();

  const createServiceOnSubmit = async (values: any) => {
    const obj = { ...values };
    console.log("Service: ", obj);
    const file = obj["file"];
    console.log("Service file: ", file);
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);

    message.loading("Creating....");
    try {
      console.log("Creating Service: ", formData);
      const res = await createService(formData);
      console.log("Created Service: ", res);
      if (res) {
        router.push("/super_admin/service-list");
        message.success("Service created successfully");
      }
    } catch (error: any) {
      message.error("Service is not created!!", error.message);
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
            label: `create-service`,
            link: `/${role}/create-service`,
          },
        ]}
      />

      <ActionBar title="Create Service Page" />
      <div style={{ margin: "10px" }}>
        <Form
          submitHandler={createServiceOnSubmit}
          resolver={yupResolver(serviceSchema)}
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
            Create Service
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateServicePage;
