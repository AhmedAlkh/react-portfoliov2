import React, { useState } from "react";
import Particles from "./components/Particles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [currentSection, setCurrentSection] = useState("about");
  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <div className="app-container">
      <Particles />
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      ></Header>
      <main>
        <div>{renderSection(currentSection)}</div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
