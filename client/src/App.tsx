import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";
import GlobalStyles from "./GlobalStyles";
import LandingPage from "./components/LandingPage";
import Services from "./components/Services";
import SoftwareDevelopmentSection from "./components/SoftwareDevelopmentSection";
import Testimonials from "./components/Testimonials";
import ProductsSection from "./components/ProductsSection";
import WayOfBuilding from "./components/WayOfBuilding";
import DevelopmentApproachSection from "./components/DevelopmentApproach";
import TechStackSection from "./components/TechStackSection";
import HowDevelopmentWorks from "./components/HowDevWorks";
import Footer from "./components/Footer";
import Profile from "./components/Profile"; 
import AttendancePage from "./components/AttendancePage";

const App: React.FC = () => {
  const location = useLocation();

  const isProfileRoute = location.pathname.startsWith("/profile") || location.pathname.startsWith("/attendance") || location.pathname.startsWith("/timecard") || location.pathname.startsWith("/calendar") || location.pathname.startsWith("/taskboard");

  return (
    <>
      <GlobalStyles />
      {isProfileRoute ? <ProfileHeader /> : <Header />}
      <Routes>
        <Route path="/" element={
          <>
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
        } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/attendance" element={<AttendancePage />} />
      </Routes>
    </>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
