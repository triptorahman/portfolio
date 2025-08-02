import React, { useState, useEffect, useRef } from "react";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import "glightbox/dist/css/glightbox.css";
import app1Img from "../../assets/img/portfolio/app-1.jpg";

const portfolioItems = [
  {
    img: app1Img,
    title: "App 1",
    desc: "Lorem ipsum, dolor sit amet consectetur",
    filter: "filter-app",
    gallery: "portfolio-gallery-app",
  },
  {
    img: app1Img,
    title: "Product 1",
    desc: "Lorem ipsum, dolor sit amet consectetur",
    filter: "filter-product",
    gallery: "portfolio-gallery-product",
  },
  {
    img: app1Img,
    title: "Branding 1",
    desc: "Lorem ipsum, dolor sit amet consectetur",
    filter: "filter-branding",
    gallery: "portfolio-gallery-branding",
  },
  {
    img: app1Img,
    title: "Books 1",
    desc: "Lorem ipsum, dolor sit amet consectetur",
    filter: "filter-books",
    gallery: "portfolio-gallery-book",
  },
  {
    img: app1Img,
    title: "App 2",
    desc: "Lorem ipsum, dolor sit amet consectetur",
    filter: "filter-app",
    gallery: "portfolio-gallery-app",
  },
  {
    img: app1Img,
    title: "Product 2",
    desc: "Lorem ipsum, dolor sit amet consectetur",
    filter: "filter-product",
    gallery: "portfolio-gallery-product",
  },
  {
    img: app1Img,
    title: "Branding 2",
    desc: "Lorem ipsum, dolor sit amet consectetur",
    filter: "filter-branding",
    gallery: "portfolio-gallery-branding",
  },
  {
    img: app1Img,
    title: "Books 2",
    desc: "Lorem ipsum, dolor sit amet consectetur",
    filter: "filter-books",
    gallery: "portfolio-gallery-book",
  },
  {
    img: app1Img,
    title: "App 3",
    desc: "Lorem ipsum, dolor sit amet consectetur",
    filter: "filter-app",
    gallery: "portfolio-gallery-app",
  },
  {
    img: app1Img,
    title: "Product 3",
    desc: "Lorem ipsum, dolor sit amet consectetur",
    filter: "filter-product",
    gallery: "portfolio-gallery-product",
  },
  {
    img: app1Img,
    title: "Branding 3",
    desc: "Lorem ipsum, dolor sit amet consectetur",
    filter: "filter-branding",
    gallery: "portfolio-gallery-branding",
  },
  {
    img: app1Img,
    title: "Books 3",
    desc: "Lorem ipsum, dolor sit amet consectetur",
    filter: "filter-books",
    gallery: "portfolio-gallery-book",
  },
];

const filters = [
  { label: "All", value: "*" },
  { label: "App", value: "filter-app" },
  { label: "Product", value: "filter-product" },
  { label: "Branding", value: "filter-branding" },
  { label: "Books", value: "filter-books" },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const gridRef = useRef(null);
  const iso = useRef(null);

  // Initialize Isotope
  useEffect(() => {
    imagesLoaded(gridRef.current, () => {
      iso.current = new Isotope(gridRef.current, {
        itemSelector: ".portfolio-item",
        layoutMode: "masonry",
      });
    });
    return () => iso.current && iso.current.destroy();
  }, []);

  // Filter items
  useEffect(() => {
    if (iso.current) {
      iso.current.arrange({
        filter: activeFilter === "*" ? "*" : `.${activeFilter}`,
      });
    }
  }, [activeFilter]);

  // Initialize GLightbox
  useEffect(() => {
    const lightbox = GLightbox({ selector: ".glightbox" });
    return () => lightbox.destroy();
  }, []);

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="container">
        <div className="isotope-layout">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            {filters.map((filter) => (
              <li
                key={filter.value}
                className={activeFilter === filter.value ? "filter-active" : ""}
                onClick={() => setActiveFilter(filter.value)}
                style={{ cursor: "pointer" }}
                data-filter={filter.value === "*" ? "*" : `.${filter.value}`}
              >
                {filter.label}
              </li>
            ))}
          </ul>
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
            ref={gridRef}
          >
            {portfolioItems.map((item, idx) => (
              <div
                className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}
                key={idx}
              >
                <div className="portfolio-content h-100">
                  <img src={item.img} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <a
                      href={item.img}
                      title={item.title}
                      data-gallery={item.gallery}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;