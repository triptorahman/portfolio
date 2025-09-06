import React, { useState } from "react";
import { usePage } from "@inertiajs/react";

const Header = ({ personalInformation, userInformation }) => {
    const { baseUrl } = usePage().props;
    const [navOpen, setNavOpen] = useState(false);

    const handleNavToggle = () => setNavOpen((open) => !open);

    return (
        <header
            id="header"
            className={`header dark-background d-flex flex-column${
                navOpen ? " header-show" : ""
            }`}
        >
            <i
                className={`header-toggle d-xl-none bi ${
                    navOpen ? "bi-x" : "bi-list"
                }`}
                onClick={handleNavToggle}
                style={{ cursor: "pointer" }}
            ></i>
            <div className="profile-img">
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
            <a
                href="index.html"
                className="logo d-flex align-items-center justify-content-center"
            >
                {userInformation?.name && (
                    <h1 className="sitename">{userInformation.name}</h1>
                )}
            </a>
            <div className="social-links text-center">
                {personalInformation.github_url &&
                    personalInformation.github_url.trim() !== "" && (
                        <a
                            href={personalInformation.github_url}
                            className="github"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-github"></i>
                        </a>
                    )}
                {personalInformation.email &&
                    personalInformation.email.trim() !== "" && (
                        <a
                            href={`mailto:${personalInformation.email}`}
                            className="email"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-envelope"></i>
                        </a>
                    )}
                {personalInformation.whatsapp_url &&
                    personalInformation.whatsapp_url.trim() !== "" && (
                        <a
                            href={personalInformation.whatsapp_url}
                            className="whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-whatsapp"></i>
                        </a>
                    )}
                {personalInformation.skype_url &&
                    personalInformation.skype_url.trim() !== "" && (
                        <a
                            href={personalInformation.skype_url}
                            className="skype"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-skype"></i>
                        </a>
                    )}
                {personalInformation.linkedin_url &&
                    personalInformation.linkedin_url.trim() !== "" && (
                        <a
                            href={personalInformation.linkedin_url}
                            className="linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                    )}
            </div>

            <nav id="navmenu" className="navmenu">
                <ul>
                    <li>
                        <a href="#hero" className="active">
                            <i className="bi bi-house navicon"></i>Home
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <i className="bi bi-person navicon"></i> About
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            <i className="bi bi-file-earmark-text navicon"></i>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#resume">
                            <i className="bi bi-file-earmark-text navicon"></i>
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            <i className="bi bi-images navicon"></i> Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#services">
                            <i className="bi bi-hdd-stack navicon"></i> Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <i className="bi bi-envelope navicon"></i> Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
