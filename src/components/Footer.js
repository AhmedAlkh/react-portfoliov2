import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      {/* GitHub link in footer  */}
      <a href="https://github.com/AhmedAlkh" target="_blank" rel="noreferrer">
        <FaGithub className="footer-icon wobble-vertical-on-hover" />
      </a>

      {/* LinkdIn link in footer  */}
      <a
        href="https://www.linkedin.com/in/ahmed-alkhatib-96599b220/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="footer-icon wobble-vertical-on-hover" />
      </a>
      {/* Email link in footer  */}
      <a
        href="mailto:alkhatib_ahmed@hotmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaEnvelope className="footer-icon wobble-vertical-on-hover" />
      </a>
      <h6 className="footerText">© 2023 All Rights Reserved.</h6>
    </div>
  );
}

export default Footer;
