import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Row gutter={[64,64]}>
        {products.map((product) => (
          <Col key={product._id} xs={24} sm={12} md={8} lg={8}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.imageUrl} />}
            >
              <Meta title={product.title} description={`Category: ${product.category}`} />
              <p>Quantity: {product.quantity}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to="/supply">
        <Button type="primary">View All Supplies</Button>
      </Link>
    </div>
  );
};

export default MainPage;