"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import { Button, Input, Select, message } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import { statusOptions } from "@/constants/global";
import { DeleteOutlined, EyeOutlined, ReloadOutlined } from "@ant-design/icons";
import {
  useDeleteBookingOrderMutation,
  useGetAllBookingOrderForAdminQuery,
  useUpdateBookingOrderMutation,
} from "@/redux/api/bookingOrderListApi";
import ActionBar from "@/components/ui/ActionBar";
import AFTable from "@/components/ui/AFTable";
import AFModal from "@/components/ui/AFModal";

const BookingOrderListPage = () => {
  const { role } = getUserInfo() as any;
  const query: Record<string, any> = {};
  const [deleteBookingOrder] = useDeleteBookingOrderMutation();

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

  const { data, isLoading, isError } = useGetAllBookingOrderForAdminQuery({
    ...query,
  });
  const orders = data;
  const order = orders?.data;
  console.log("Upcoming Order: ", orders);
  const meta = orders?.meta;

  const [updateBookingOrder] = useUpdateBookingOrderMutation();

  const columns = [
    {
      title: "Order Id",
      dataIndex: "id",
    },
    {
      title: "Order Services",
      dataIndex: "orderedServices",
      render: function (data: any) {
        return (
          data && {
            columns: [
              {
                title: `Order Services`,
                dataIndex: `Order Services: ${data.id}`,
              },
              {
                title: "Quantity",
                dataIndex: `Order Services: ${data.quantity}`,
              },
            ],
          }
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "User Id",
      dataIndex: "userId",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    // {
    //   title: "Contact No.",
    //   dataIndex: "contactNo",
    // },
    // {
    //   title: "Address",
    //   dataIndex: "address",
    // },

    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        // console.log(data);
        const handleChange = async (value: string) => {
          console.log(`${value}`);
          message.loading("Updating....");
          try {
            console.log(data);
            // await updateOrder({ data, body: value });
            message.success("Done");
          } catch (error: any) {
            console.error(error.message);
          }
        };
        return (
          <>
            <div>
              <Select
                defaultValue="pending"
                style={{ width: "120px" }}
                onChange={handleChange}
                options={statusOptions}
              />
            </div>

            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                deleteOrderHandler(data?.id);
              }}
              danger
              style={{ marginLeft: "3px", marginTop: "10px" }}
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

  const deleteOrderHandler = async (id: string) => {
    try {
      const res = await deleteBookingOrder(id);
      if (res) {
        message.success("Successfully Deleted!");
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
            label: `booking-order-list`,
            link: `/${role}/booking-order-list`,
          },
        ]}
      />
      <ActionBar title="Booking Order List">
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
        dataSource={order}
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
        handleOk={() => deleteOrderHandler(deleteId)}
      >
        <p className="my-5">Do you want to remove?</p>
      </AFModal>
    </div>
  );
};

export default BookingOrderListPage;
