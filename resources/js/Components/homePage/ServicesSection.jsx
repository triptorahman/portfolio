import React from "react";

const services = [
  {
    icon: "bi-briefcase",
    title: "Lorem Ipsum",
    desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    delay: 100,
  },
  {
    icon: "bi-card-checklist",
    title: "Dolor Sitema",
    desc: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    delay: 200,
  },
  {
    icon: "bi-bar-chart",
    title: "Sed ut perspiciatis",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    delay: 300,
  },
  {
    icon: "bi-binoculars",
    title: "Magni Dolores",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    delay: 400,
  },
  {
    icon: "bi-brightness-high",
    title: "Nemo Enim",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    delay: 500,
  },
  {
    icon: "bi-calendar4-week",
    title: "Eiusmod Tempor",
    desc: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    delay: 600,
  },
];

const ServicesSection = () => (
  <section id="services" className="services section">
    <div className="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
    </div>
    <div className="container">
      <div className="row gy-4">
        {services.map((service, idx) => (
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={service.delay}
            key={idx}
          >
            <div className="icon flex-shrink-0">
              <i className={`bi ${service.icon}`}></i>
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  {service.title}
                </a>
              </h4>
              <p className="description">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;