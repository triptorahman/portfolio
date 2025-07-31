import React from "react";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "HTML", value: 100 },
  { name: "CSS", value: 90 },
  { name: "JavaScript", value: 75 },
  { name: "PHP", value: 80 },
  { name: "WordPress/CMS", value: 90 },
  { name: "Photoshop", value: 55 },
];

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% visible
  });

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation" ref={ref}>
          <div className="col-lg-6">
            {skills.slice(0, 3).map((skill) => (
              <div className="progress" key={skill.name}>
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{
                      width: inView ? `${skill.value}%` : "0%",
                      transition: "width 1s ease",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            {skills.slice(3).map((skill) => (
              <div className="progress" key={skill.name}>
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{
                      width: inView ? `${skill.value}%` : "0%",
                      transition: "width 1s ease",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;