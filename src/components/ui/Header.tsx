

import { authKey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, MenuProps, Row } from "antd";
import { Avatar, Space } from "antd";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();
  const signOut = () => {
    removeUserInfo(authKey);
    router.push("/signin");
  };
  const { role } = getUserInfo() as any;

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={signOut} type="text" danger>
          Sign Out
        </Button>
      ),
    },
  ];
  return (
    <AntHeader style={{ backgroundColor: "#88B51A" }}>
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <Dropdown menu={{ items }}>
          <a>
            <Space size={16} wrap>
              <h2>{role}</h2>
              <Avatar
                size="large"
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
