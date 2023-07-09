import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Classes from "./HomePage.module.css";
import imgProfile from "../../assets/fotoPerfil.jpg";

const HomePage = function () {
  const [skills] = useTypewriter({
    words: ["Full Stack", "Designer", "Problem Solver", "Coffeholic"],
    loop: 100,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 3000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="gradient-container">
      <div className={Classes["personal-info"]}>
        <span className={Classes.about}>About</span>
        <h1 className={Classes.h1}>
          I'm José López
          <br />
          <span className={Classes.specialist}>{skills}</span>
          <span>
            <Cursor cursorStyle="|" cursorClassName={Classes.specialist} />
          </span>
          <br />
          From Mexico 🌮🌴
        </h1>
      </div>
      <div className="gradient"></div>
      <div className="img-profile">
        <img src={imgProfile} alt="" className={Classes.img} />
      </div>
    </div>
  );
};

export default HomePage;
