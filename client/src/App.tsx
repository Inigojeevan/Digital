import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import GlobalStyles from "./GlobalStyles";
import Services from "./components/Services";
import SoftwareDevelopmentSection from "./components/SoftwareDevelopmentSection";
import Testimonials from "./components/Testimonials";
import ProductsSection from "./components/ProductsSection";
import WayOfBuilding from "./components/WayOfBuilding";

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
    </>
  );
};

export default App;
