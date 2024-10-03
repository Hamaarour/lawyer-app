import Navbar from "../components/common/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ServicesSection from "../components/landing/ServicesSection";
import ExpertAnswers from "../components/landing/ExpertAnswers";
import Consultation from "../components/landing/Consultation";
import Footer from "../components/common/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ExpertAnswers />
      <Consultation />
      <Footer />
    </div>
  );
};

export default LandingPage;
