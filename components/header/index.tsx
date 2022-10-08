import exp from "constants";
import { useState } from "react";

const Header = ({ setContactSideBarOpen, contactSideBarOpen }: any) => {
  const [navbarMobile, setNavBarMobile] = useState(false);
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="static/logo.png" width="200" height="100" alt={"logo"} />
      </a>

      <nav className={`navbar ${navbarMobile ? "active" : ""}`}>
        <a href="#home">Nalovnica</a>
        <a href="#about">O nama</a>
        <a href="#services">Program</a>
        <a href="#projects">Projekti</a>
        <a href="#voditelji">Voditelji</a>
        <a href="#contact">Kontakt</a>
      </nav>

      <div className="icons">
        <div
          id="menu-btn"
          onClick={() => setNavBarMobile(!navbarMobile)}
          className="fas fa-bars"
        ></div>
        <div
          onClick={() => setContactSideBarOpen(!contactSideBarOpen)}
          id="info-btn"
          className="fas fa-info-circle"
        ></div>
        <div id="search-btn" className="fas fa-search"></div>
      </div>

      <form action="" className="search-form">
        <input
          type="search"
          name=""
          placeholder="search here..."
          id="search-box"
        />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </form>
    </header>
  );
};

export default Header;
