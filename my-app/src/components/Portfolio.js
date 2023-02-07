import React, { useState, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from "react-bootstrap/Button";
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
      appLink: "https://photosbyalaa.netlify.app/",
      ghLink: "https://github.com/AhmedAlkh/pbav3",
    },
    {
      src: tdScreenshot,
      alt: "To do app",
      title: "ToDo App",
      appLink: "https://ahmedstodo.netlify.app/",
      ghLink: "https://github.com/AhmedAlkh/to-do-app",
    },
    {
      src: tcScreenshot,
      alt: "Tip caclulator app",
      title: "Tip Caclulator",
      appLink: "https://ahmedstipcalculator.netlify.app/",
      ghLink: "https://github.com/AhmedAlkh/tip-calculator",
    },
    {
      src: gnfScreenshot,
      alt: "Global News Finder app",
      title: "Global News Finder",
      appLink: "https://salmanghouse1.github.io/global-news-finder/",
      ghLink: "https://github.com/salmanghouse1/global-news-finder",
    },
    {
      src: pgScreenshot,
      alt: "Password Generator app",
      title: "Password Generator",
      appLink: "https://ahmedalkh.github.io/password-generator/",
      ghLink: "https://github.com/AhmedAlkh/password-generator",
    },
    {
      src: wbScreenshot,
      alt: "Weather dashboard app",
      title: "Weather dashboard",
      appLink: "https://ahmedalkh.github.io/weather-dashboard/",
      ghLink: "https://github.com/AhmedAlkh/weather-dashboard",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % myProjects.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [myProjects.length]);

  return (
    <div className="carousel">
      {myProjects.map((project, index) => (
        <div
          className={`slide ${index === activeIndex ? "active" : ""}`}
          key={project.title}
        >
          <h2>{project.title}</h2>
          <img src={project.src} alt={project.alt} />
          <div className="dots">
            {myProjects.map((_, index) => (
              <div
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <Button
            className="app-link"
            href={project.appLink}
            target="_blank"
            rel="noreferrer"
          >
            Live Link
            <FaArrowCircleRight className="btn-icon" />
          </Button>
          <Button
            className="gh-link"
            href={project.ghLink}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
            <FaGithub className="btn-icon" />
          </Button>
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
        <FaArrowCircleLeft />
      </button>
      <button
        className="next"
        onClick={() =>
          setActiveIndex((prevIndex) => (prevIndex + 1) % myProjects.length)
        }
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
}

export default Portfolio;
