import React from "react";

const ResumeSection = ({ experiences, personalInformation }) => {
    return (
        <section id="resume" className="resume section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Resume</h2>
                <p>
                    Magnam dolores commodi suscipit. Necessitatibus eius
                    consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                    velit. Quisquam quos quisquam cupiditate. Et nemo qui
                    impedit suscipit alias ea. Quia fugiat sit in iste officiis
                    commodi quidem hic quas.
                </p>

                {personalInformation?.cv_url && (
                    <a
                        href={`/storage/${personalInformation.cv_url}`} // ✅ Correct
                        download
                        className="btn btn-primary mt-3"
                    >
                        Download CV
                    </a>
                )}
            </div>

            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-12"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h3 className="resume-title">
                            Professional Experience
                        </h3>

                        {experiences && experiences.length > 0 ? (
                            experiences.map((exp, index) => (
                                <div className="resume-item" key={index}>
                                    <h4>{exp.designation}</h4>
                                    <h5>
                                        <i className="bi bi-building me-2"></i>
                                        {exp.company_name}
                                    </h5>
                                    <h5>
                                        <i className="bi bi-geo-alt me-2"></i>
                                        {exp.company_address}
                                    </h5>
                                    <h5>
                                        <i className="bi bi-calendar3 me-2"></i>
                                        {exp.duration}
                                    </h5>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: exp.work_description,
                                        }}
                                        className="mt-4"
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No experience data available.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
