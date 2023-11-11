import type { MenuProps } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  ProfileOutlined,
  TableOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,

      children: [
        {
          label: <Link href={`/${role}`}>My Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/edit-profile`}>Edit Profile</Link>,
          key: `/${role}/edit-profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: "Manage Orders",
      icon: <TableOutlined />,
      key: "manage-orders",
      children: [
        {
          label: <Link href={`/${role}/order-list`}>Order List</Link>,
          key: `/${role}/order-list`,
        },
        {
          label: (
            <Link href={`/${role}/booking-order-list`}>Booking Order List</Link>
          ),
          key: `/${role}/booking-order-list`,
        },
      ],
    },
    {
      label: "Manage Feedbacks",
      icon: <TableOutlined />,
      key: "manage-feedbacks",
      children: [
        {
          label: <Link href={`/${role}/feedback-list`}>Feedback List</Link>,
          key: `/${role}/feedback-list`,
        },
      ],
    },
    {
      label: "Manage Blogs",
      icon: <TableOutlined />,
      key: "manage-blogs",
      children: [
        {
          label: <Link href={`/${role}/create-blog`}>Create Blog</Link>,
          key: `/${role}/create-blog`,
        },
        {
          label: <Link href={`/${role}/blog-list`}>Blog List</Link>,
          key: `/${role}/blog-list`,
        },
      ],
    },
    {
      label: "Manage Services",
      icon: <TableOutlined />,
      key: "manage-services",
      children: [
        {
          label: <Link href={`/${role}/create-service`}>Create Service</Link>,
          key: `/${role}/create-service`,
        },
        {
          label: <Link href={`/${role}/service-list`}>Service List</Link>,
          key: `/${role}/service-list`,
        },
        {
          label: (
            <Link href={`/${role}/create-upcoming-service`}>
              Create Upcoming Service
            </Link>
          ),
          key: `/${role}/create-upcoming-service`,
        },
        {
          label: (
            <Link href={`/${role}/upcoming-service-list`}>
              Upcoming Service List
            </Link>
          ),
          key: `/${role}/upcoming-service-list`,
        },
      ],
    },
    {
      label: "Manage Categories",
      icon: <TableOutlined />,
      key: "manage-categories",
      children: [
        {
          label: <Link href={`/${role}/create-category`}>Create Category</Link>,
          key: `/${role}/create-category`,
        },
        {
          label: <Link href={`/${role}/category-list`}>Category List</Link>,
          key: `/${role}/category-list`,
        },
      ],
    },
    {
      label: "Manage Reviews",
      icon: <TableOutlined />,
      key: "manage-reviews",
      children: [
        {
          label: <Link href={`/${role}/review-list`}>Review List</Link>,
          key: `/${role}/review-list`,
        },
      ],
    },
  ];

  //! Customer Sidebar
  const customerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "All Orders",
      icon: <TableOutlined />,
      key: "all-orders",
      children: [
        {
          label: <Link href={`/${role}/oder-history`}>Order History</Link>, //!delivered orders
          key: `/${role}/oder-history`,
        },
        {
          label: (
            <Link href={`/${role}/placed-order-list`}>Placed Order List</Link>
          ), //!pending orders
          key: `/${role}/placed-order-list`,
        },
        {
          label: (
            <Link href={`/${role}/booking-oder-history`}>
              Booking Order History
            </Link>
          ), //!delivered upcoming orders
          key: `/${role}/booking-oder-history`,
        },
        {
          label: (
            <Link href={`/${role}/placed-booking-order-list`}>
              Placed Booking Order List
            </Link>
          ), //!pending orders
          key: `/${role}/placed-booking-order-list`,
        },
      ],
    },
  ];
  //! Admin Sidebar
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
  ];
  //! Super Admin Sidebar
  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Users",
      icon: <TableOutlined />,
      key: "manage-users",
      children: [
        {
          label: <Link href={`/${role}/create-admin`}>Create Admin</Link>,
          key: `/${role}/create-admin`,
        },
        {
          label: <Link href={`/${role}/admin-list`}>Admin List</Link>,
          key: `/${role}/admin-list`,
        },
        {
          label: <Link href={`/${role}/customer-list`}>Customer List</Link>,
          key: `/${role}/customer-list`,
        },
      ],
    },
    ...commonAdminSidebarItems,
  ];

  if (role === USER_ROLE.CUSTOMER) return customerSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
};
