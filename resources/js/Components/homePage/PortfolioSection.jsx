import React, { useState, useEffect, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import "glightbox/dist/css/glightbox.css";


const PortfolioSection = ({ portfolios, sectionOverviewContent }) => {
  const { baseUrl } = usePage().props;
  // Extract unique portfolio types for filters
  const portfolioTypes = Array.from(
    new Set(
      portfolios
        .map(
          (p) =>
            p.portfolio_type?.title && p.portfolio_type.status === "active"
              ? p.portfolio_type.title
              : null
        )
        .filter(Boolean)
    )
  );

  // Utility to sanitize filter values for CSS selectors
  const sanitize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9-_]/g, "-"); // replace all except a-z, 0-9, - and _

  const filters = [
    { label: "All", value: "*" },
    ...portfolioTypes.map((type) => ({
      label: type,
      value: `filter-${sanitize(type)}`,
    })),
  ];

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
          {sectionOverviewContent?.portfolio || ""}
        </p>
      </div>
      <div className="container">
        <div className="isotope-layout">
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {filters.map((filter) => (
              <li
                key={filter.value}
                className={
                  activeFilter === filter.value ? "filter-active" : ""
                }
                onClick={() => setActiveFilter(filter.value)}
                style={{ cursor: "pointer" }}
                data-filter={
                  filter.value === "*" ? "*" : `.${filter.value}`
                }
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
            {portfolios.map((item, idx) => {
              const type = item.portfolio_type?.title || "";
              const filterClass = `filter-${sanitize(type)}`;
              return (
                <div
                  className={`col-lg-4 col-md-6 portfolio-item isotope-item ${filterClass}`}
                  key={idx}
                >
                  <Link
                    href={`${baseUrl}/portfolio/${item.id}`}
                    title={item.title}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="portfolio-content h-100">
                      <img
                        src={
                          item.image_url.startsWith("http")
                            ? item.image_url
                            : `${baseUrl}/storage/app/public/${item.image_url}`
                        }
                        className="img-fluid portfolio-img"
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "contain",
                          borderRadius: "8px",
                          background: "#f8f9fa"
                        }}
                      />
                      <div className="portfolio-info">
                        <h4>{item.title}</h4>
                        <p>{item.short_description}</p>
                        <a
                          href={
                            item.image_url.startsWith("http")
                              ? item.image_url
                              : `${baseUrl}/storage/app/public/${item.image_url}`
                          }
                          title={item.title}
                          data-gallery={`portfolio-gallery-${filterClass}`}
                          className="glightbox preview-link"
                        >
                        </a>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default PortfolioSection;