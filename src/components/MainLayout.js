import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { RiDashboard3Fill } from "react-icons/ri";
import { VscLayoutCentered } from "react-icons/vsc";
import { IoBookSharp } from "react-icons/io5";
import { IoBarChartSharp } from "react-icons/io5";
import { LiaTableSolid } from "react-icons/lia";
import { useNavigate, useLocation } from "react-router-dom";
import User from "../pages/User";
import { Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { pathname } = useLocation();

  const isStaticNavigationPage = pathname === "/static-navigation";
  const isLightSider = pathname === "/light-sidenav";
  const renderSider = () => {
    if (isLightSider) {
      return (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
          style={{
            overflow: "auto",
            height: "100vh",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <div className="demo-logo-vertical light-theme-logo">
            <h1 className="ms-2 text-2xl pt-5 pb-10 font-bold">
              Start Bootstrap
            </h1>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-gray-400 ms-2 text-xl flex flex-col">
              <h1 className=" text-sm font-bold uppercase">Core</h1>
              <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={[""]}
                onClick={({ key }) => {
                  navigate(key);
                }}
                items={[
                  {
                    key: "",
                    icon: <RiDashboard3Fill />,
                    label: "Dashboard",
                  },
                ]}
              />
            </div>
            <div className="text-gray-400 ms-2 text-xl">
              <h1 className="text-sm font-bold uppercase">Interface</h1>
              <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={[""]}
                onClick={({ key }) => [navigate(key)]}
                items={[
                  {
                    key: "layouts",
                    icon: <VscLayoutCentered />,
                    label: "Layouts",
                    children: [
                      {
                        key: "static-navigation",
                        label: "Static Navigation",
                      },
                      {
                        key: "light-sidenav",
                        label: "Light Sidenav",
                      },
                    ],
                  },
                  {
                    key: "pages",
                    icon: <IoBookSharp />,
                    label: "Pages",
                    children: [
                      {
                        key: "authentication",
                        label: "Authentication",
                        children: [
                          {
                            key: "login",
                            label: "Login",
                          },
                          {
                            key: "register",
                            label: "Register",
                          },
                          {
                            key: "forgot-password",
                            label: "Forgot Password",
                          },
                        ],
                      },
                      {
                        key: "error",
                        label: "Error",
                        children: [
                          {
                            key: "401",
                            label: "401 Page",
                          },
                          {
                            key: "404",
                            label: "404 Page",
                          },
                          {
                            key: "500",
                            label: "500 Page",
                          },
                        ],
                      },
                    ],
                  },
                ]}
              />
            </div>
            <div className="text-gray-400 ms-2 text-xl">
              <h1 className="text-sm font-bold uppercase">Addons</h1>
              <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={[""]}
                onClick={({ key }) => {
                  navigate(key);
                }}
                items={[
                  {
                    key: "charts",
                    icon: <IoBarChartSharp />,
                    label: "Charts",
                  },
                  {
                    key: "tables",
                    icon: <LiaTableSolid />,
                    label: "Tables",
                  },
                ]}
              />
            </div>
          </div>
        </Sider>
      );
    } else {
      return (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <div className="demo-logo-vertical">
          <h1 className="text-white font-bold ms-2 text-2xl pt-5 pb-10 ">
              Start Bootstrap
            </h1>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-gray-400 ms-2 text-xl flex flex-col">
              <h1 className=" text-sm font-bold uppercase">Core</h1>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[""]}
                onClick={({ key }) => {
                  navigate(key);
                }}
                items={[
                  {
                    key: "",
                    icon: <RiDashboard3Fill />,
                    label: "Dashboard",
                  },
                ]}
              />
            </div>
            <div className="text-gray-400 ms-2 text-xl">
              <h1 className="text-sm font-bold uppercase">Interface</h1>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[""]}
                onClick={({ key }) => [navigate(key)]}
                items={[
                  {
                    key: "layouts",
                    icon: <VscLayoutCentered />,
                    label: "Layouts",
                    children: [
                      {
                        key: "static-navigation",
                        label: "Static Navigation",
                      },
                      {
                        key: "light-sidenav",
                        label: "Light Sidenav",
                      },
                    ],
                  },
                  {
                    key: "pages",
                    icon: <IoBookSharp />,
                    label: "Pages",
                    children: [
                      {
                        key: "authentication",
                        label: "Authentication",
                        children: [
                          {
                            key: "login",
                            label: "Login",
                          },
                          {
                            key: "register",
                            label: "Register",
                          },
                          {
                            key: "forgot-password",
                            label: "Forgot Password",
                          },
                        ],
                      },
                      {
                        key: "error",
                        label: "Error",
                        children: [
                          {
                            key: "401",
                            label: "401 Page",
                          },
                          {
                            key: "404",
                            label: "404 Page",
                          },
                          {
                            key: "500",
                            label: "500 Page",
                          },
                        ],
                      },
                    ],
                  },
                ]}
              />
            </div>
            <div className="text-gray-400 ms-2 text-xl">
              <h1 className="text-sm font-bold uppercase">Addons</h1>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[""]}
                onClick={({ key }) => {
                  navigate(key);
                }}
                items={[
                  {
                    key: "charts",
                    icon: <IoBarChartSharp />,
                    label: "Charts",
                  },
                  {
                    key: "tables",
                    icon: <LiaTableSolid />,
                    label: "Tables",
                  },
                ]}
              />
            </div>
          </div>
        </Sider>
      );
    }
  };

  
  const isLargeScreen = window.innerWidth >= 1024; 
  const renderHeader = () => {
    if (isStaticNavigationPage) {
      return (
        <Header
          style={{
            padding: "0 ",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "space-between",
            boxSizing: "border-box",
            alignItems: "center",
            position: "static",
            zIndex: 1,
            width: "100%"
          }}
        >         
          {isLargeScreen && (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        )}
         {collapsed &&
         <h1 className=" text-2xl px-4 font-bold text-white">
              Start Bootstrap
            </h1>
        }
        <User className="text-white" />
        {!isLargeScreen && (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        )}
          
        </Header>
      );
    } else {

    return (
      <Header
        style={{
          padding: "0",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
          boxSizing: "border-box",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%"
        }}
      >
        
        {isLargeScreen && (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        )}
        {collapsed &&
         <h1 className=" text-2xl px-4  font-bold text-white">
              Start Bootstrap
            </h1>
        }
        <User className="text-white" />
        {!isLargeScreen && (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        )}
      </Header>
      );
    }
  };

  const navigate = useNavigate();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {renderSider()}
      <Layout>
        {renderHeader()}
        <Content
          style={{
            padding: 24,
            minHeight: "calc(100vh - 64px)",
            position:(!collapsed && !isLargeScreen) ? 'fixed' : 'static',
            left:0,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
