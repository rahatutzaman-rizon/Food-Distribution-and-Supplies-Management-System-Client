import { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import PieChart from './PieChart';
import AddSupply from './AddSupply';
import AllSupplies from './AllSupplies';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard = () => {
  const [supplies, setSupplies] = useState([]);
  const [activeComponent, setActiveComponent] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setSupplies(data));
  }, []);

  const handleMenuClick = ({ key }) => {
    setActiveComponent(key);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case '1':
        return <AllSupplies supplies={supplies} />;
      case '2':
        return <AddSupply />;
      case '3':
        return <PieChart supplies={supplies} />;
      default:
        return <div>Please select a component from the menu.</div>;
    }
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="2">Dashboard</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={handleMenuClick}
          >
            <SubMenu key="sub1" title="Supply Management">
              <Menu.Item key="1">All Supplies</Menu.Item>
              <Menu.Item key="2">Add Supply</Menu.Item>
              <Menu.Item key="3">Pie Chart</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Supply Management</Breadcrumb.Item>
          </Breadcrumb>
          <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280 }}>
            {renderComponent()}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Supply Management Dashboard ©2023</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;