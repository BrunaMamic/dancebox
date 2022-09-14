import exp from "constants";

const Header = ({ setContactSideBarOpen, contactSideBarOpen }: any) => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="static/logo.png" width="200" height="100" alt={"logo"} />
      </a>

      <nav className="navbar">
        <a href="#home">Nalovnica</a>
        <a href="#about">O nama</a>
        <a href="#services">Program</a>
        <a href="#projects">Projekti</a>
        <a href="#voditelji">Voditelji</a>
        <a href="#contact">Kontakt</a>
      </nav>

      <div className="icons">
        <div id="menu-btn" className="fas fa-bars"></div>
        <div
          onClick={() => setContactSideBarOpen(!contactSideBarOpen)}
          id="info-btn"
          className="fas fa-info-circle"
        ></div>
        <div id="search-btn" className="fas fa-search"></div>
        <div id="login-btn" className="fas fa-user"></div>
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
