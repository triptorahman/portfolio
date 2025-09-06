import React from "react";
import { useInView } from "react-intersection-observer";

const SkillsSection = ({ skill, sectionOverviewContent }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% visible
  });

  // Convert skill prop to standard format
  const skills = skill.map((s) => ({
    name: s.title,
    value: s.percentage,
  }));

  // Split skills into two balanced columns
  const middleIndex = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, middleIndex);
  const rightSkills = skills.slice(middleIndex);

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          {sectionOverviewContent?.skill || ""}
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation" ref={ref}>
          {/* Left column */}
          <div className="col-lg-6">
            {leftSkills.map((skill) => (
              <div className="progress" key={skill.name}>
                <span className="skill">
                  <span>{skill.name}</span>{" "}
                  <i className="val">{skill.value}%</i>
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

          {/* Right column */}
          <div className="col-lg-6">
            {rightSkills.map((skill) => (
              <div className="progress" key={skill.name}>
                <span className="skill">
                  <span>{skill.name}</span>{" "}
                  <i className="val">{skill.value}%</i>
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
