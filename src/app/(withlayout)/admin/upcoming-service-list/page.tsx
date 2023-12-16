"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import {
  useDeleteUpcomingServiceMutation,
  useGetAllUpcomingServiceQuery,
} from "@/redux/api/upcomingServiceApi";
import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import { useState } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { Button, Input, message } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import ActionBar from "@/components/ui/ActionBar";
import AFTable from "@/components/ui/AFTable";
import AFModal from "@/components/ui/AFModal";

const UpcomingServiceListPage = () => {
  const { role } = getUserInfo() as any;
  const query: Record<string, any> = {};
  const [deleteUpcomingService] = useDeleteUpcomingServiceMutation();

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

  const { data, isLoading, isError } = useGetAllUpcomingServiceQuery({
    ...query,
  });
  const upcomingService = data?.upcomingService;
  const meta = data?.meta;
  console.log("upcomingService: ", upcomingService);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      ellipsis: true,
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Unit",
      dataIndex: "unit",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Offer Start Date",
      dataIndex: "startDate",
      render: function (data: any) {
        return data && dayjs(data).format("MMMM D, YYYY");
      },
    },
    {
      title: "Offer Start Time",
      dataIndex: "startTime",
      format: "h:mm A",
    },
    {
      title: "Offer End Date",
      dataIndex: "endDate",
      render: function (data: any) {
        return data && dayjs(data).format("MMMM D, YYYY ");
      },
    },
    {
      title: "Offer End Time",
      dataIndex: "endTime",
      format: "h:mm A",
    },
    {
      title: "Category",
      dataIndex: "category",
      render: function (data: any) {
        return data.title;
      },
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
            <Link href={`/super_admin/upcoming-service-list/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                setDeleteId(data);
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

  const deleteUpcomingServiceHandler = async (id: string) => {
    try {
      const res = await deleteUpcomingService(id);
      if (res) {
        message.success("Service Successfully Deleted!");
        setOpen(false);
      }
    } catch (error: any) {
      message.error(error.message);
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
            label: `upcoming-service-list`,
            link: `/${role}/upcoming-service-list`,
          },
        ]}
      />

      <ActionBar title="Upcoming Service List">
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
        dataSource={upcomingService}
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
        handleOk={() => deleteUpcomingServiceHandler(deleteId)}
      >
        <p className="my-5">Do you want to remove?</p>
      </AFModal>
    </div>
  );
};

export default UpcomingServiceListPage;
