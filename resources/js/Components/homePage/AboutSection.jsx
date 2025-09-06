import React from "react";
import { usePage } from "@inertiajs/react";

const AboutSection = ({
    personalInformation,
    heroSections,
    sectionOverviewContent,
}) => {
    const { baseUrl } = usePage().props;
    // Extract titles as strings
    const titles = heroSections?.map((section) => section.title) || [];

    return (
        <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
                <h2>About</h2>
                <p>{sectionOverviewContent?.about_first || ""}</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-4">
                        <img
                            src={
                                personalInformation?.profile_image_url
                                    ? `${baseUrl}/storage/app/public/${personalInformation.profile_image_url}`
                                    : `${baseUrl}/public/my-profile-img.jpg`
                            }
                            alt="Profile"
                            className="img-fluid rounded-circle"
                        />
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
                            {sectionOverviewContent?.about_middle || ""}
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{" "}
                                        <strong>Degree:</strong>{" "}
                                        <span>
                                            {personalInformation?.degree || ""}
                                        </span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{" "}
                                        <strong>Phone:</strong>{" "}
                                        <span>
                                            {personalInformation?.phone_number ||
                                                ""}
                                        </span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{" "}
                                        <strong>Address:</strong>{" "}
                                        <span>
                                            {personalInformation?.address ||
                                                "New York, USA"}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{" "}
                                        <strong>Email:</strong>{" "}
                                        <span>
                                            {personalInformation?.email || ""}
                                        </span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{" "}
                                        <strong>Github:</strong>{" "}
                                        <span>
                                            {personalInformation?.github_url ||
                                                ""}
                                        </span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{" "}
                                        <strong>Freelance:</strong>{" "}
                                        <span>
                                            {personalInformation?.freelance ||
                                                ""}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="py-3">
                            {sectionOverviewContent?.about_last || ""}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
