"use client";

import { Layout, Menu } from "antd";
import { useState } from "react";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#64BC70",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        <Link href="/" style={{ color: "black" }}>
          {collapsed ? "AF" : "Ankur Farm"}
        </Link>
      </div>
      <Menu
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{ backgroundColor: "#64BC70" }}
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
