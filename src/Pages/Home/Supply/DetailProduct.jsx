import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col, Statistic, Typography, Divider, Button, Modal, InputNumber } from 'antd';
import { CalendarOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const DetailProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationQuantity, setDonationQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await axios.put(`http://localhost:5000/products/${id}/donate`, { quantity: donationQuantity });
      setIsModalOpen(false);
     
    } catch (error) {
      console.error('Error updating product quantity:', error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDonationQuantityChange = (value) => {
    setDonationQuantity(value);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const { imageUrl, title, category, quantity, description, expirationDate, nutritionalInfo } = product;

  return (
    <Row justify="center">
      <Col span={16}>
        <Card
          hoverable
          cover={<img alt={title} src={imageUrl} style={{ height: '300px', objectFit: 'contain' }} />}
          style={{ backgroundColor: '#f5f5f5' }}
          actions={[
            <Button type="primary" onClick={showModal}>
              Donate Now
            </Button>
          ]}
        >
          <Title level={3}>{title}</Title>
          <Text strong>Category:</Text> {category}
          <Divider />
          <Paragraph>{description}</Paragraph>
          <Divider />
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="Quantity" value={quantity} valueStyle={{ color: quantity > 10 ? '#3f8600' : '#cf1322' }} />
            </Col>
            <Col span={8}>
              <Statistic title="Expiration" value={new Date(expirationDate).toLocaleDateString()} valueStyle={{ color: '#08c' }} prefix={<CalendarOutlined />} />
            </Col>
          </Row>
          <Divider />
          <Title level={4}>
            Nutritional Information <InfoCircleOutlined />
          </Title>
          <Row gutter={16}>
            <Col span={6}>
              <Statistic title="Calories" value={nutritionalInfo.calories} />
            </Col>
            <Col span={6}>
              <Statistic title="Protein" value={`${nutritionalInfo.protein}g`} />
            </Col>
            <Col span={6}>
              <Statistic title="Fat" value={`${nutritionalInfo.fat}g`} />
            </Col>
            <Col span={6}>
              <Statistic title="Carbs" value={`${nutritionalInfo.carbs}g`} />
            </Col>
            <Col span={6}>
              <Statistic title="Fiber" value={`${nutritionalInfo.fiber}g`} />
            </Col>
          </Row>
        </Card>
      </Col>

      <Modal
        title="Donate Now"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Confirm"
        cancelText="Cancel"
      >
        <p>Are you sure you want to donate this item?</p>
        <p>
          <strong>Item:</strong> {title}
        </p>
        <p>
          <strong>Quantity:</strong>{' '}
          <InputNumber min={1} max={quantity} value={donationQuantity} onChange={handleDonationQuantityChange} />
        </p>
      </Modal>
    </Row>
  );
};

export default DetailProduct;