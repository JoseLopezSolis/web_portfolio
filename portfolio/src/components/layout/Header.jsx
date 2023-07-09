import Classes from "./Header.module.css";
import Button from "../UI/header/Button";
const Header = function () {
  return (
    <div class={Classes["header-container"]}>
      <header class={Classes.header}>
        <nav class={Classes.nav}>
          <div class={Classes.navigation_menu}>
            <a href="/work">WORK</a>
            <a href="/about">ABOUT</a>
          </div>

          <div class={Classes.brand}>
            <span className={Classes.brand_bold}>JOSELOPS</span> STUDIOS
          </div>

          <div class={Classes.button}>
            <Button title="Hit me up" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
