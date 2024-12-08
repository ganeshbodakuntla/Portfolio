import React from "react";
import myImage from "../assets/about.png";
import Resume from "../assets/Resume.pdf";

const About = () => {
  return (
    <div id="about">
      <h2>ABOUT ME</h2>
      <div className="about__me">
        <img  src={myImage} alt="Ganesh Bodakuntla" />
        <p>
          <span>
            {" "}
            Hello I'm Ganesh,a B.Tech graduate in Computer Science and
            Engineering at SMSK, Ghatkesar, with hands-on experience in Frontend
            Development. Currently, I focus on creating engaging user interfaces
            and ensuring top-notch software quality. I'm looking for a
            challenging role where I can apply my technical knowledge and
            passion for innovation to contribute to exciting projects and work
            collaboratively with a dynamic team. I'm especially interested in
            opportunities in frontend development and quality assurance.
          </span>
        </p>
        <a href={Resume} download className="btn ">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
