import React from "react";
import htmlLogo from "../assets/images/HTML.png";
import cssLogo from "../assets/images/CSS.png";
import scssLogo from "../assets/images/SCSS.png";
import bsLogo from "../assets/images/bs.png";
import jsLogo from "../assets/images/js.png";
import reactLogo from "../assets/images/react.png";
import nodeLogo from "../assets/images/node.png";
import ghLogo from "../assets/images/gh.png";
import resumeImage from "../assets/images/resume-ss.png";
import Button from "react-bootstrap/Button";
import { FaFilePdf } from "react-icons/fa";
import resumePdf from "../assets/resume/resume.pdf";

function Resume() {
  return (
    <div className="resume-page-container">
      <h1>Skills</h1>
      <div class="grid-container center">
        <div class="grid-item">
          <img className="skill-logo" src={htmlLogo} alt="html logo" />
        </div>
        <div class="grid-item">
          <img className="skill-logo" src={cssLogo} alt="css logo" />
        </div>
        <div class="grid-item">
          <img className="skill-logo" src={scssLogo} alt="scss logo" />
        </div>
        <div class="grid-item">
          <img className="skill-logo" src={bsLogo} alt="bootstrap logo" />
        </div>
        <div class="grid-item">
          <img className="skill-logo" src={jsLogo} alt="javascript logo" />
        </div>
        <div class="grid-item">
          <img className="skill-logo" src={reactLogo} alt="react logo" />
        </div>
        <div class="grid-item">
          <img className="skill-logo" src={nodeLogo} alt="node.js logo" />
        </div>
        <div class="grid-item">
          <img className="skill-logo" src={ghLogo} alt="github logo" />
        </div>
      </div>
      <div className="resume-div">
        <Button
          className="resume-btn"
          href={resumePdf}
          target="_blank"
          rel="noreferrer"
        >
          <h4>
            Download My Resume <FaFilePdf />
          </h4>
        </Button>
        <img
          className="resume-image"
          src={resumeImage}
          alt="Ahmed Alkhatib's resume"
        />
      </div>
    </div>
  );
}

export default Resume;
