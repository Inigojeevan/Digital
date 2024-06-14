import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import GlobalStyles from "./GlobalStyles";
import Services from "./components/Services";
import SoftwareDevelopmentSection from "./components/SoftwareDevelopmentSection";
import Testimonials from "./components/Testimonials";
import ProductsSection from "./components/ProductsSection";
import WayOfBuilding from "./components/WayOfBuilding";
import DevelopmentApproachSection from "./components/DevelopmentApproach";
import TechStackSection from "./components/TechStackSection";
import HowDevelopmentWorks from "./components/HowDevWorks";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <LandingPage />
      <Services />
      <SoftwareDevelopmentSection />
      <Testimonials />
      <ProductsSection />
      <WayOfBuilding />
      <DevelopmentApproachSection />
      <TechStackSection />
      <HowDevelopmentWorks />
      <Footer />
    </>
  );
};

export default App;
