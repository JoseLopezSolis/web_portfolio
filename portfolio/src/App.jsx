import { Fragment } from "react";
import Classes from "./App.module.css";
import Header from "./components/layout/Header.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";

const app = function () {
  return (
    <Fragment>
      <Header />
      <div className={Classes.max_width}>
        <HomePage />
      </div>
    </Fragment>
  );
};

export default app;
