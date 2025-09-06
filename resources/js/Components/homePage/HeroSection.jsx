import React, { useEffect, useRef } from "react";
import { usePage } from "@inertiajs/react";
import Typed from "typed.js";

const HeroSection = ({ heroSections, personalInformation, userInformation }) => {
  const { baseUrl } = usePage().props;
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
      <img
        src={
          personalInformation?.hero_banner_image_url
            ? `${baseUrl}/storage/app/public/${personalInformation.hero_banner_image_url}`
            : `${baseUrl}/public/hero-bg.jpg`
        }
        alt=""
        data-aos="fade-in"
        className=""
      />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {userInformation?.name && (
          <h2>{userInformation.name}</h2>
        )}
        <p>
          I'm <span ref={typedRef}></span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
