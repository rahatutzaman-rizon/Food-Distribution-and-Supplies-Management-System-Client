
import { Card, Avatar, Typography, Divider, Tag, Row, Col } from 'antd';
import { ShopOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title, Text } = Typography;

const companies = [
  {
    id: 1,
    name: 'Green Valley Farms',
    products: [
      {
        id: 1,
        name: 'Organic Apples',
        description: 'Fresh and juicy apples from local farms.',
        price: 2.99,
        category: 'Fruits',
      },
      {
        id: 2,
        name: 'Whole Wheat Bread',
        description: 'Freshly baked whole wheat bread.',
        price: 3.49,
        category: 'Bakery',
      },
    ],
  },
  {
    id: 2,
    name: 'Sustainable Meadows',
    products: [
      {
        id: 3,
        name: 'Grass-fed Beef',
        description: 'High-quality grass-fed beef from sustainable farms.',
        price: 8.99,
        category: 'Meat',
      },
      {
        id: 4,
        name: 'Organic Spinach',
        description: 'Nutrient-rich organic spinach leaves.',
        price: 1.99,
        category: 'Vegetables',
      },
    ],
  },
];

const ProductSellCard = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '40px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography.Title
          level={2}
          style={{
            color: '#1890ff',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          Welcome to Our Marketplace
        </Typography.Title>
        <Typography.Paragraph
          style={{
            color: '#333333',
            fontSize: '18px',
            lineHeight: '1.6',
            marginTop: '20px',
          }}
        >
          Explore our curated collection of products from top brands. Find what you need with ease and enjoy
          secure transactions and fast delivery.
        </Typography.Paragraph>
      </div>
      {companies.map((company) => (
        <div key={company.id}>
          <Typography.Title level={3} style={{ color: '#189043', fontWeight: 'bold' }}>
            {company.name}
          </Typography.Title>
          <Row gutter={[16, 16]}>
            {company.products.map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={12}>
                <Card
                  style={{
                    width: '100%',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                
                  actions={[
                    <Tag color="green" key="buy">
                      Buy Now
                    </Tag>,
                  ]}
                >
                  <Meta
                    avatar={
                      <Avatar
                        icon={<ShopOutlined />}
                        style={{
                          backgroundColor: '#189043',
                          color: '#ffffff',
                        }}
                      />
                    }
                    title={<Title level={4}>{product.name}</Title>}
                    description={
                      <>
                        <Text type="secondary">{product.category}</Text>
                      </>
                    }
                  />
                  <Divider />
                  <Text style={{ color: '#1890ff', fontSize: '18px', fontWeight: 'bold' }}>
                    ${product.price.toFixed(2)}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default ProductSellCard;