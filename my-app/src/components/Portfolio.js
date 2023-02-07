import React, { useState, useEffect } from "react";
import pbaScreenshot from "../assets/images/pba-sc.png";
import pgScreenshot from "../assets/images/pg-sc.png";
import gnfScreenshot from "../assets/images/gnf-sc.png";
import tcScreenshot from "../assets/images/tc-sc.png";
import tdScreenshot from "../assets/images/td-sc.png";
import wbScreenshot from "../assets/images/wb-sc.png";

function Portfolio() {
  const myProjects = [
    {
      src: pbaScreenshot,
      alt: "Photos by Alaa website",
      title: "Photos by Alaa",
    },
    {
      src: tdScreenshot,
      alt: "To do app",
      title: "ToDo App",
    },
    {
      src: tcScreenshot,
      alt: "Tip caclulator app",
      title: "Tip Caclulator",
    },
    {
      src: gnfScreenshot,
      alt: "Global News Finder app",
      title: "Global News Finder",
    },
    {
      src: pgScreenshot,
      alt: "Password Generator app",
      title: "Password Generator",
    },
    {
      src: wbScreenshot,
      alt: "Weather dashboard app",
      title: "Weather dashboard",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % myProjects.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [myProjects.length]);

  return (
    <div className="carousel">
      {myProjects.map((project, index) => (
        <div
          className={`slide ${index === activeIndex ? "active" : ""}`}
          key={project.title}
        >
          <img src={project.src} alt={project.alt} />
          <button className="link">App link</button>
          <button className="link">Repository link</button>
          <h2>{project.title}</h2>
        </div>
      ))}
      <button
        className="prev"
        onClick={() =>
          setActiveIndex(
            (prevIndex) =>
              (prevIndex + myProjects.length - 1) % myProjects.length
          )
        }
      >
        &lt;
      </button>
      <button
        className="next"
        onClick={() =>
          setActiveIndex((prevIndex) => (prevIndex + 1) % myProjects.length)
        }
      >
        &gt;
      </button>
      <div className="dots">
        {myProjects.map((_, index) => (
          <div
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
