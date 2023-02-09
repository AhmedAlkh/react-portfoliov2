import React from "react";
import CustomNavbar from "./Custom-navbar";

function Header(props) {
  const { currentSection, setCurrentSection } = props;
  return (
    <header>
      <CustomNavbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      ></CustomNavbar>
    </header>
  );
}

export default Header;
