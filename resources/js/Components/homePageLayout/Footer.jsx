import React from "react";

const Footer = ({ userInformation }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center ">
          <p>
            © {currentYear}{" "}
            <strong className="px-1 sitename">{userInformation.name}</strong>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;