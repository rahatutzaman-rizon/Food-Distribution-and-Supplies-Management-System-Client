import { Typography, Button, Carousel } from 'antd';
import './DonationBanner.css';

const { Title, Paragraph } = Typography;

const DonationBanner = () => {
  const bannerContent = [
    {
      title: 'Empowering Communities, Nourishing Lives',
      description: 'Your donation can help us distribute nutritious meals to families in need, ensuring access to essential sustenance for their well-being and growth.',
      buttonText: 'Donate Now',
      backgroundColor: '#FFD700',
    },
    {
      title: 'Combating Hunger, Fostering Hope',
      description: 'Join our mission to eradicate food insecurity worldwide. Together, we can provide sustainable solutions and ensure no one goes to bed hungry.',
      buttonText: 'Support the Cause',
      backgroundColor: '#FF5733',
    },
    {
      title: 'Igniting Compassion, Spreading Kindness',
      description: 'A small act of kindness can create a ripple effect that transforms lives. Contribute today and be part of a movement that uplifts communities through the power of generosity.',
      buttonText: 'Contribute Today',
      backgroundColor: '#00CED1',
    },
  ];

  return (
    <Carousel autoplay className="donation-banner">
      {bannerContent.map((content, index) => (
        <div key={index} className="banner-slide" style={{ backgroundColor: content.backgroundColor }}>
          <div className="banner-content">
            <Title level={2} className="banner-title" style={{ color: '#fff' }}>
              {content.title}
            </Title>
            <Paragraph className="banner-description" style={{ color: '#fff' }}>
              {content.description}
            </Paragraph>
            <Button type="primary" size="large" className="banner-button">
              {content.buttonText}
            </Button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default DonationBanner;