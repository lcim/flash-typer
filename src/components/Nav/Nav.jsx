import "./Nav.css";
import logo from "./../../assets/logo.png";

const Nav = () => {
  return (
    <div className="nav__container">
      
      <div className="nav__left">
        <img src={logo} alt="navbar-logo" className="nav__logo" />
        <p className="nav__left-text">FastFingers</p>
      </div>

      <div className="nav__right">
        <a
          className="nav__link"
          href="https://github.com/lcim?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          LCIM
        </a>
      </div>
      
    </div>
  );
};

export default Nav;
