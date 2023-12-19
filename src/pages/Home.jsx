import React from "react";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name Is Atharva Patil</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <Email />
          <GitHub />
          <LinkedIn />
        </div>
      </div>
      <div className="skills">
        <h1>SKILLS</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Context-API, Redux, HTML, CSS, NPM, MaterialUI,
              TailwindCSS.
            </span>
          </li>
          <li className="item">
            <h2>Programming Languages</h2>
            <span>JavaScript, Java, Python, C.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
