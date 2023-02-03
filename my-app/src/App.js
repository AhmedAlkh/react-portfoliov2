import React, { useState } from "react";
import Particles from "./components/Particles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };

  // Footer and Header may need to be adjusted in return statement because I wont need them
  // on the home page. Or maybe I will?
  return (
    <div>
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
