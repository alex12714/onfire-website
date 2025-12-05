import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlatformBenefits from "./components/PlatformBenefits";
import FireProofCard from "./components/FireProofCard";
import AppFeatures from "./components/AppFeatures";
import CreatorBenefits from "./components/CreatorBenefits";
import PowerfulFeatures from "./components/PowerfulFeatures";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import FireProofPage from "./pages/FireProofPage";
import InvestorsPage from "./pages/InvestorsPage";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0b14]">
      <Navbar />
      <Hero />
      <PlatformBenefits />
      <FireProofCard />
      <AppFeatures />
      <CreatorBenefits />
      <PowerfulFeatures />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fireproof" element={<FireProofPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
