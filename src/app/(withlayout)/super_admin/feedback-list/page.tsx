"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import {
  useDeleteFeedbackMutation,
  useGetAllFeedbackQuery,
} from "@/redux/api/feedbackApi";
import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import { Button, Input, message } from "antd";
import { useState } from "react";
import { DeleteOutlined, EyeOutlined, ReloadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import ActionBar from "@/components/ui/ActionBar";
import AFTable from "@/components/ui/AFTable";
import AFModal from "@/components/ui/AFModal";

const FeedbackListPage = () => {
  const { role } = getUserInfo() as any;

  const query: Record<string, any> = {};
  const [deleteFeedback] = useDeleteFeedbackMutation();

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

  const { data, isLoading, isError } = useGetAllFeedbackQuery({ ...query });
  const feedbacks = data?.feedbacks;
  const meta = data?.meta;
  // console.log(users);

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Contact No.",
      dataIndex: "contactNo",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        // console.log(data);
        return (
          <>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                deleteFeedbackHandler(data?.id);
              }}
              danger
              style={{ marginLeft: "3px" }}
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const deleteFeedbackHandler = async (id: string) => {
    try {
      const res = await deleteFeedback(id);
      if (res) {
        message.success("Successfully Deleted!");
        setOpen(false);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div>
      <AFBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `feedback-list`,
            link: `/${role}/feedback-list`,
          },
        ]}
      />

      <ActionBar title="Feedback List">
        <Input
          size="large"
          placeholder="Search"
          value={searchTerm} // Added value prop
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
        <div>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>
      <AFTable
        loading={false}
        columns={columns}
        dataSource={feedbacks}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

      <AFModal
        title="Remove"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteFeedbackHandler(deleteId)}
      >
        <p className="my-5">Do you want to remove?</p>
      </AFModal>
    </div>
  );
};

export default FeedbackListPage;
