import React from "react";

const ServicesSection = ({ services, sectionOverviewContent }) => (
  <section id="services" className="services section">
    <div className="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>
        {sectionOverviewContent?.service || ""}
      </p>
    </div>
    <div className="container">
      <div className="row gy-4">
        {services.map((service, idx) => (
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={service.sort_order * 100}
            key={service.id}
          >
            <div className="icon flex-shrink-0">
              <i className={`bi ${service.icon}`}></i>
            </div>
            <div>
              <h4 className="title">
                <span className="stretched-link">
                  {service.title}
                </span>
              </h4>
              <p className="description">{service.short_description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;