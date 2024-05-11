
import { Row, Col, Typography, Button, Image } from 'antd';
 // Replace with your actual image path

const { Title, Paragraph } = Typography;

const BannerSection = () => {
  return (
    <Row gutter={[24, 24]} align="middle" style={{ minHeight: '400px', padding: '3rem' }}>
      <Col xs={24} sm={24} md={12}>
        <Title level={1}>Fresh and Nutritious Food Supplies</Title>
        <Paragraph>
          Get access to a wide range of high-quality food supplies delivered straight to your doorstep. Our platform ensures that you receive the freshest and most nutritious items to keep your family healthy and satisfied.
        </Paragraph>
        <Button type="primary" size="large">
          Browse Supplies
        </Button>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <Image
          src="https://i.ibb.co/sJyrhCR/images-2.jpg"
          alt="Banner Image"
          style={{ maxWidth: '100%', borderRadius: '8px'}}
        />
      </Col>
    </Row>
  );
};

export default BannerSection;