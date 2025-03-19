import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, FileTextOutlined, UploadOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    {
      key: '/patients',
      icon: <UserOutlined />,
      label: <Link to="/patients">患者列表</Link>,
    },
    {
      key: '/medical-records',
      icon: <FileTextOutlined />,
      label: <Link to="/medical-records">病历查询</Link>,
    },
    {
      key: '/imaging',
      icon: <UploadOutlined />,
      label: <Link to="/imaging">影像上传</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <div style={{ height: 32, margin: 16, background: 'rgba(0, 0, 0, 0.2)' }} />
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{ height: '100%', borderRight: 0 }}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }} />
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout; 