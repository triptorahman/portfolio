import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroImg from "../../assets/img/hero-bg.jpg";

const HeroSection = ({ heroSections }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const strings = heroSections.map(section => section.title);

    const typed = new Typed(typedRef.current, {
      strings: strings.length ? strings : ["Designer", "Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => typed.destroy();
  }, [heroSections]);

  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroImg} alt="" data-aos="fade-in" className="" />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Alex Smith</h2>
        <p>
          I'm <span ref={typedRef}></span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
