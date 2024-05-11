import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Statistic, Typography, Button, Layout, Divider } from 'antd';
import { CalendarOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Supply.css';

const { Meta } = Card;
const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const Supply = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <Layout className="supply-layout">
      <Header className="supply-header">
        <div className="supply-banner">
          <div className="supply-banner-content">
            <Title level={1} className="supply-title">Our Products</Title>
            <Paragraph className="supply-paragraph">
              Providing high-quality food products with efficient distribution.
            </Paragraph>
            <Link to="/about">
              <Button type="primary" size="large" icon={<ShoppingCartOutlined />}>
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </Header>
      <Content className="supply-content">
        <Title level={1} className="supply-section-title "></Title>
        <Divider />
        <Row gutter={[24, 24]} className="supply-row">
          {products.map(product => (
            <Col key={product._id} xs={24} sm={12} md={8} lg={8}>
              <Card
                hoverable
                cover={<img alt={product.title} src={product.imageUrl} className="supply-card-image" />}
                className="supply-card"
                actions={[
                  <Link to={`/products/${product._id}`}>
                    <Button type="primary" size="small">Details</Button>
                  </Link>
                ]}
              >
                <Meta title={product.title} description={product.category} />
                <Row gutter={16} style={{ marginTop: '16px' }}>
                  <Col span={12}>
                    <Statistic
                      title="Quantity"
                      value={product.quantity}
                      valueStyle={{ color: product.quantity > 10 ? '#3f8600' : '#cf1322' }}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Expiration"
                      value={new Date(product.expirationDate).toLocaleDateString()}
                      valueStyle={{ color: '#08c' }}
                      prefix={<CalendarOutlined />}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
      <Footer className="supply-footer">
        <Paragraph>&copy; Food Supply Distribution {new Date().getFullYear()}</Paragraph>
      </Footer>
    </Layout>
  );
};

export default Supply;