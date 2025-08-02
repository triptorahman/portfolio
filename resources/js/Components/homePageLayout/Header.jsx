import React, { useState } from "react";

const Header = ({ personalInformation, userInformation }) => {
  
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => setNavOpen((open) => !open);

  return (
    <header id="header" className={`header dark-background d-flex flex-column${navOpen ? " header-show" : ""}`}>
      <i
        className={`header-toggle d-xl-none bi ${navOpen ? "bi-x" : "bi-list"}`}
        onClick={handleNavToggle}
        style={{ cursor: "pointer" }}
      ></i>
      <div className="profile-img">
        {personalInformation?.profile_image_url && (
          <img
            src={`/storage/${personalInformation.profile_image_url}`}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        )}
      </div>
      <a href="index.html" className="logo d-flex align-items-center justify-content-center">
        {userInformation?.name && (
          <h1 className="sitename">{userInformation.name}</h1>
        )}
      </a>
      <div className="social-links text-center">
        <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
          <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
          <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
          <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
          <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
          <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;