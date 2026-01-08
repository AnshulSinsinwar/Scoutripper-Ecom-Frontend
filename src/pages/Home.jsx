import HeroSection from '../components/HeroSection';
import HowToStart from '../components/HowToStart';
import HowItWorks from '../components/HowItWorks';
import WhyTrustUs from '../components/WhyTrustUs';

const Home = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <HowToStart />
            <HowItWorks />
            <WhyTrustUs />
        </div>
    );
};

export default Home;
