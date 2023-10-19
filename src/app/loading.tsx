import { Alert, Space, Spin } from "antd";

const Loading = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Space>
        <Spin tip="Loading" size="large">
          <div
            style={{
              padding: "50px",
              background: "rgb(0 0 0 0.5)",
              borderRadius: "4px",
            }}
          ></div>
        </Spin>
      </Space>
    </Space>
  );
};

export default Loading;
