import { useState } from 'react';
import { Menu, Switch, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { BulbOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem',
        backgroundColor: darkMode ? '#001529' : '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'left' }}>
        <Link to="/">
          <img
            src="https://i.ibb.co/BNwxMfx/logo-size.jpg"
            alt="Logo"
            style={{ height: '64px', marginRight: '1rem' ,width:"300px" ,margin:"15px" }}
          />
        </Link>
        <div>
          <h2>Deshi Food Distribution and Supply</h2>
        </div>
       
      </div>

      {/* Hamburger menu for mobile view */}
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleMenu}>
        <BulbOutlined style={{ color: darkMode ? '#125432' : '#001529', marginRight: '1rem' }} />
        <Switch checked={darkMode} onChange={toggleDarkMode} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '15px',
            marginLeft: '1rem',
          }}
        >
          <div style={{ width: '24px', height: '3px', backgroundColor: darkMode ? '#fff' : '#001529' }} />
          <div style={{ width: '24px', height: '3px', backgroundColor: darkMode ? '#fff' : '#001529' }} />
          <div style={{ width: '24px', height: '3px', backgroundColor: darkMode ? '#fff' : '#001529' }} />
        </div>
      </div>

      {/* Other menu items for desktop view */}
      <Menu
        mode="horizontal"
        theme={darkMode ? 'dark' : 'light'}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          display: 'none',
          '@media (min-width: 768px)': {
            display: 'flex',
          },
        }}
      >
        <Menu.Item key="inventory">
          <Link to="/supply">Inventory Supply</Link>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
      </Menu>

      {/* Menu for mobile view */}
      <Menu
        mode="inline"
        theme={darkMode ? 'dark' : 'light'}
        style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          width: '100%',
          backgroundColor: darkMode ? '#001529' : '#fff',
          display: menuVisible ? 'block' : 'none',
        }}
      >
        <Menu.Item key="inventory">
          <Link to="/supply">Inventory Supply</Link>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;