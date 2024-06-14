import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import GlobalStyles from "./GlobalStyles";
import Services from "./components/Services";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <LandingPage />
      <Services />
    </>
  );
};

export default App;
