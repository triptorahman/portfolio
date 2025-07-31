import React from "react";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/css/main.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ResumeSection from "./ResumeSection";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const IndexPage = () => (
  <>
    <Header />
    <main className="main">

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Resume Section */}
      <ResumeSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />

    </main>

    <Footer />

    
  </>
);

export default IndexPage;