import React, { useEffect } from "react";

import { usePage, Head } from "@inertiajs/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
   const { heroSections, personalInformation, userInformation, skill, experiences, portfolios, services, sectionOverviewContent } = usePage().props;
  //  console.log("services", services);
  const { baseUrl, appName } = usePage().props;
  useEffect(() => {
  // AOS init
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });

  // Scroll to section if hash present
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

  // Scrollspy
  const handleScrollSpy = () => {
    document.querySelectorAll('.navmenu a').forEach(link => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document.querySelectorAll('.navmenu a.active').forEach(activeLink => {
          activeLink.classList.remove('active');
        });
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('load', handleHashScroll);
  window.addEventListener('load', handleScrollSpy);
  window.addEventListener('scroll', handleScrollSpy);

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
      <Head title={`${userInformation?.name ?? ""}`}>
        <link rel="icon" type="image/gif" href={`${baseUrl}/favicon.gif`} />
      </Head>
      <Header personalInformation={personalInformation} userInformation={userInformation} />
      <main className="main">

        {/* Hero Section */}
        <HeroSection heroSections={heroSections} personalInformation={personalInformation} userInformation={userInformation} />

        {/* About Section */}
        <AboutSection personalInformation={personalInformation}  heroSections={heroSections} sectionOverviewContent={sectionOverviewContent} />

        {/* Skills Section */}
        <SkillsSection skill={skill} sectionOverviewContent={sectionOverviewContent} />

        {/* Resume Section */}
        <ResumeSection experiences={experiences} personalInformation={personalInformation} sectionOverviewContent={sectionOverviewContent} />

        {/* Portfolio Section */}
        <PortfolioSection portfolios={portfolios} sectionOverviewContent={sectionOverviewContent} />

        {/* Services Section */}
        <ServicesSection services={services} sectionOverviewContent={sectionOverviewContent} />

        {/* Contact Section */}
        <ContactSection personalInformation={personalInformation} userInformation={userInformation} sectionOverviewContent={sectionOverviewContent} />

      </main>

      <Footer userInformation={userInformation} />

      
    </>
  );
};

export default IndexPage;