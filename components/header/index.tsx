import { useState } from "react";

const Header = ({ setContactSideBarOpen, contactSideBarOpen, setDocSidebarOpen, docSidebarOpen }: any) => {
  const [navbarMobile, setNavBarMobile] = useState(false);
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="static/logo.png" width="200" height="100" alt={"logo"} />
      </a>

      <nav className={`navbar ${navbarMobile ? "active" : ""}`}>
        {/* <a href="#home">Naslovnica</a> */}
        <a href="#about">O nama</a>
        <a href="#services">Program</a>
        <a href="#projects">Projekti</a>
        <a href="#plan">Plan i program</a>
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

        <div
          onClick={() => setDocSidebarOpen(!docSidebarOpen)}
          id="document-btn"
          className="fa fa-file-text-o"
        ></div>
        <div id="search-btn" className="fas fa-search"></div>
      </div>

      
    </header>
  );
};

export default Header;
