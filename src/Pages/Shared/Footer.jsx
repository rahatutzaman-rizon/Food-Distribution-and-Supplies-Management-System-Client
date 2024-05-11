import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ background: '#001529', padding: '30px 50px' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={8}>
          <Title level={5} style={{ color: 'white', marginBottom: '1rem' }}>
            About Us
          </Title>
          <Text style={{ color: 'rgba(255,255,255,0.5)' }}>
            We are a non-profit organization dedicated to fighting hunger and providing food assistance to underprivileged communities. Our mission is to ensure that no one goes hungry and everyone has access to nutritious meals.
          </Text>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Title level={5} style={{ color: 'white', marginBottom: '1rem' }}>
            Contact
          </Title>
          <Text style={{ color: 'rgba(255,255,255,0.5)' }}>
            Santos,MBSTU 
            <br />
           Tangial
            <br />
            Phone: 01771276400
            <br />
            Email: info@fooddistribution.org
          </Text>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Title level={5} style={{ color: 'white', marginBottom: '1rem' }}>
            Follow Us
          </Title>
          <Text style={{ color: 'rgba(255,255,255,0.5)' }}>
            Stay connected with us on social media for updates and news about our initiatives.
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '2rem' }}>
        <Col>
          <Text style={{ color: 'rgba(255,255,255,0.5)' }}>
            &copy; {new Date().getFullYear()} Food Distribution Website. Created by Rahatutzaman Rizon.
          </Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;