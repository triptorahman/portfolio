import React, { useEffect } from "react";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/css/main.css";
import Header from "../components/homePageLayout/Header";
import HeroSection from "../components/homePage/HeroSection";
import AboutSection from "../components/homePage/AboutSection";
import SkillsSection from "../components/homePage/SkillsSection";
import ResumeSection from "../components/homePage/ResumeSection";
import PortfolioSection from "../components/homePage/PortfolioSection";
import ServicesSection from "../components/homePage/ServicesSection";
import ContactSection from "../components/homePage/ContactSection";
import Footer from "../components/homePageLayout/Footer";

const IndexPage = () => {
  useEffect(() => {
    // Correct scrolling position for hash links on load
    const handleHashScroll = () => {
      if (window.location.hash) {
        const section = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: "smooth",
            });
          }, 100);
        }
      }
    };

    // Navmenu Scrollspy
    const handleScrollSpy = () => {
      document.querySelectorAll('.navmenu a').forEach(link => {
        if (!link.hash) return;
        const section = document.querySelector(link.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('load', handleHashScroll);
    window.addEventListener('load', handleScrollSpy);
    window.addEventListener('scroll', handleScrollSpy);

    // Call once in case already loaded
    handleHashScroll();
    handleScrollSpy();

    return () => {
      window.removeEventListener('load', handleHashScroll);
      window.removeEventListener('load', handleScrollSpy);
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  return (
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
};

export default IndexPage;