import Classes from "./HomePage.module.css";

const HomePage = function () {
  return (
    <div className="gradient-container">
      <div className={Classes["personal-info"]}>
        <h1>
          Hi, I'm José López, A Passionate <strong>FULLSTACK</strong> Developer
          From Mexico. 🌮🌴
        </h1>
      </div>
      <div className="gradient"></div>
    </div>
  );
};

export default HomePage;
