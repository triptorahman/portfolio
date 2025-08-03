import React from "react";

const AboutSection = ({ personalInformation, heroSections }) => {
  // Extract titles as strings
  const titles = heroSections?.map(section => section.title) || [];

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        I am Md Samiur Rahman, a dedicated Software Engineer and Full-Stack Developer with over 4 years of experience. I specialize in back-end development with PHP frameworks (Laravel, CodeIgniter, CakePHP) and Java Spring Boot, complemented by front-end skills in JavaScript and ReactJS. My expertise spans microservices, CMS, and ERP systems, with a strong focus on system design and collaborative Agile development.
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            {personalInformation?.profile_image_url && (
              <img
                src={`/storage/${personalInformation.profile_image_url}`}
                className="img-fluid"
                alt="Profile Image"
              />
            )}
          </div>
          <div className="col-lg-8 content">
            <h2>
              {titles.map((title, index) => (
                <span key={index}>
                  {title}
                  {index !== titles.length - 1 && " | "}
                </span>
              ))}
            </h2>
            <p className="fst-italic py-3">
              Passionate about clean code, scalable architecture, and modern web technologies.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{personalInformation?.degree || ""}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{personalInformation?.phone_number || ""}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Address:</strong> <span>{personalInformation?.address || "New York, USA"}</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{personalInformation?.email || ""}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Github:</strong> <span>{personalInformation?.github_url || ""}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>{personalInformation?.freelance || ""}</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              I thrive in dynamic environments and love to work on challenging projects that demand creative problem-solving and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
