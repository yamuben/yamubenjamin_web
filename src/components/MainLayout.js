import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu , Image} from "antd";
import me from "../assets/image/me_4x4.jpg";
import back from "../assets/image/back.jpg";
import {
  InstagramOutlined,
  GithubFilled,
  UserOutlined,
  SkypeFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider width="300"
        style={{position:"fixed", top:'0', height: "100vh" }}
      >

      <Image.PreviewGroup 
        className="logo">
      <Image
      width={300}
        src={me}
        className="logo"
      />
    </Image.PreviewGroup>
        <h1
          style={{
            fontWeight: "bolder",
            fontSize: "25px",
            color: "white",
            textAlign: "center",
          }}
        >
          Yamu Benjamin
        </h1>
        <h2 
          style={{
            fontWeight: "bolder",
            fontSize: "15px",
            color: "white",
            marginTop:"-10px",
            textAlign: "center",
          }}>Software Engineer</h2>
        <div className="icon-container">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
          <TwitterCircleFilled className="social-icon"/>
        <InstagramOutlined className="social-icon"/>

          <GithubFilled className="social-icon"/>
          <SkypeFilled className="social-icon"/>
        {/* <TwitterCircleFilled twoToneColor="#eb2f96"/>  */}
          <LinkedinFilled className="social-icon"/>
          </Menu>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]} className="sider-menu-container">
          <Menu.Item key="1" icon={<UserOutlined className="nav-icon-style"/>}  className="nav-style">
           Home
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />} >
            About
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Resume
                      </Menu.Item>
          <Menu.Item key="4" icon={<UploadOutlined />}>
            Portfolio
                      </Menu.Item>
          <Menu.Item key="5" icon={<UploadOutlined />}>
            Services
                      </Menu.Item>
          <Menu.Item key="6" icon={<UploadOutlined />}>
            Contact
                      </Menu.Item>
        </Menu>
      </Sider>
      <Layout >
        <Content
          className="site-layout-background"
          style={{
            // margin: "0px 3px",
            paddingLeft: 3,
            // width: "100%",
            minHeight: "100vh",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
