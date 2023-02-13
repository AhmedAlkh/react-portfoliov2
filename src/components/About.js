import React from "react";
import photo from "../assets/images/ahmed-photo-soul-no-bg.png";

function About() {
  return (
    <div className="about">
      <img src={photo} className="center photo" alt="Ahmed Alkhatib" />
      <main className="center">
        <div>
          <p>
            Welcome to my portfolio! My name is Ahmed Alkhatib and I am a
            front-end developer who enjoys building websites and applications.
          </p>
          <p>
            I started coding in 2021 and graduated from an accelerated web
            development course at University of Toronto(SCS) in 2022. Since
            then, I have been coding independently and improving my skills.
          </p>
          <p>
            Some things I enjoy doing in my spare time include working out,
            playing video games, watching movies, and listening to music.
          </p>
          <p>
            Check out some of the projects I've built! I am constantly building
            new ones and updating my portfolio. Thanks for stopping by!
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;

// This is a change
