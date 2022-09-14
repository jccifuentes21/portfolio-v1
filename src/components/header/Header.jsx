import classes from "./Header.module.css";
import CTA from "./CTA";
import ME from "../../assets/me-2.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className={`container ${classes.header__container}`}>
        <h5>Hi, my name is</h5>
        <h1>Juan Camilo Cifuentes</h1>
        <h5 className={`text-light ${classes.web__dev}`}>I'm a Web Developer</h5>
        <CTA classes={classes.cta} />

        <div className={classes.me}>
          <img src={ME} alt="me" />
        </div>
        <HeaderSocials classes={classes.header__socials} />

        <a href="#contact" className={classes.scroll__down}>Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
