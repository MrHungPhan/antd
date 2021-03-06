import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";

const { Sider, Header, Content } = Layout;

function LayoutCustom() {
  return (
    <Layout hasSider>
      <Sider
        width={255}
        style={{
          overflow: "hidden",
        }}
      >
        <Menu theme="dark" mode="inline">
          <Menu.Item key={2}>Users</Menu.Item>
          <Menu.Item key={3}>Task</Menu.Item>
          <Menu.Item key={7}>Logout</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "white" }} />
        <Content style={{ height: "calc(100vh - 64px)", overflow: "auto" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutCustom;
