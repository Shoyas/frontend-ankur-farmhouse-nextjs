/*

"use client";

import { authKey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { Dropdown, Layout, Menu } from "antd";
import { Space, Grid } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DownOutlined } from "@ant-design/icons";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import { ICategory } from "@/types";

const { useBreakpoint } = Grid;

const { Header: HomeHeaderSector } = Layout;

const HomeHeader = () => {
  const router = useRouter();
  const screens = useBreakpoint();
  const { role } = getUserInfo() as any;
  const signOut = () => {
    removeUserInfo(authKey);
    router.push("/");
  };

  // const items: MenuProps["items"] = [
  //   {
  //     key: "0",
  //     label: (
  //       <Button onClick={signOut} type="text" danger>
  //         Sign Out
  //       </Button>
  //     ),
  //   },
  // ];

  const query: Record<string, any> = {};
  const result = useGetAllCategoryQuery({ ...query });
  const categories = result?.data?.categories;
  // const categoryOptions = categories
  //   ? categories.map((category: any) => ({
  //       key: category.id,
  //       label: category.title,
  //     }))
  //   : null;

  const CustomMenu = ({
    categories,
  }: {
    categories: ICategory[] | undefined;
  }) => (
    <Menu>
      {categories &&
        categories.map((category: ICategory) => (
          <Menu.Item key={category.id}>
            <Link href={`/category/${category.title}`}>{category.title}</Link>
          </Menu.Item>
        ))}
    </Menu>
  );

  return (
    <HomeHeaderSector
      style={
        {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }
      }
      
    >
      <div
        className="demo-logo mt-5"
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        <Link href="/" style={{ color: "black" }}>
          {screens.lg ? " Ankur Farm" : "AF"}
        </Link>
      </div>

      <Menu
        theme="dark"
        mode={screens.md ? "horizontal" : "inline"}
        style={{ fontWeight: "bolder" }}
      >
        <Menu.Item key="1">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/upcoming-products">Upcoming Products</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/about-us">About Us</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link href="/contact">Contact</Link>
        </Menu.Item>

        <Dropdown
          overlay={<CustomMenu categories={categories} />}
          placement="bottomLeft"
          arrow
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Categories
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        {role ? (
          <Menu.Item key="logout" onClick={() => signOut()}>
            Logout
          </Menu.Item>
        ) : (
          <Menu.Item key="login">
            <Link href="/signin">Sign In</Link>
          </Menu.Item>
        )}
      </Menu>
    </HomeHeaderSector>
  );
};

export default HomeHeader;
*/

//! Let's Try

"use client";

import { authKey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { Dropdown, Layout, Menu } from "antd";
import { Space, Grid } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DownOutlined } from "@ant-design/icons";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import { ICategory } from "@/types";
import { AiOutlineShoppingCart } from "react-icons/ai";

const { useBreakpoint } = Grid;

const { Header: HomeHeaderSector } = Layout;

const HomeHeader = () => {
  const router = useRouter();
  const screens = useBreakpoint();
  const { role } = getUserInfo() as any;
  const signOut = () => {
    removeUserInfo(authKey);
    router.push("/");
  };

  const query: Record<string, any> = {};
  const result = useGetAllCategoryQuery({ ...query });
  const categories = result?.data?.categories;
  // const categoryOptions = categories
  //   ? categories.map((category: any) => ({
  //       key: category.id,
  //       label: category.title,
  //     }))
  //   : null;

  const CustomMenu = ({
    categories,
  }: {
    categories: ICategory[] | undefined;
  }) => (
    <Menu>
      {categories &&
        categories.map((category: ICategory) => (
          <Menu.Item key={category.id}>
            <Link href={`/category/${category.title}`}>{category.title}</Link>
          </Menu.Item>
        ))}
    </Menu>
  );

  return (
    <HomeHeaderSector className="top-nav">
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
          marginTop: "1rem",
          color: "white",
        }}
      >
        <Link href="/" style={{ color: "white" }}>
          {screens.xl ? " Ankur Farm" : "AF"}
        </Link>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <h4>
            <Link href="/" style={{ color: "white" }}>
              Home
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link href="/products" style={{ color: "white" }}>
              Products
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link href="/upcoming-products" style={{ color: "white" }}>
              Upcoming Products
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link href="/blog" style={{ color: "white" }}>
              Blog
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link href="/about-us" style={{ color: "white" }}>
              About Us
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Dropdown
              overlay={<CustomMenu categories={categories} />}
              placement="bottomLeft"
              arrow
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ color: "white" }}>
                  Categories
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </h4>
        </li>
        <li>
          <h4>
            <Link href="/orders" style={{ color: "white" }}>
              <AiOutlineShoppingCart
                style={{ width: "20px", height: "20px", marginTop: "20px" }}
              />
            </Link>
          </h4>
        </li>
        <li>
          {role ? (
            <h4 onClick={() => signOut()}>
              <Link href="/" style={{ color: "white" }}>
                Sign Out
              </Link>
            </h4>
          ) : (
            <h4>
              <Link href="/signin" style={{ color: "white" }}>
                Sign In
              </Link>
            </h4>
          )}
        </li>
      </ul>
    </HomeHeaderSector>
  );
};

export default HomeHeader;
