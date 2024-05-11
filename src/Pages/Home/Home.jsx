

import DonationBanner from '../Banner/DonationBanner';
import ProductSellCard from '../Banner/ProductSellCard';
import BannerSection from './BannerSection';
import MainPage from './FewSupply';






const Home = () => {
    return (
        <div>
       
        <BannerSection></BannerSection>

        <div>
        <MainPage></MainPage>
      
     <ProductSellCard></ProductSellCard>
      <DonationBanner />
    </div>
        
        </div>
    );
};

export default Home;