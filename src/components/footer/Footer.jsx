import classes from "./Footer.module.css";

import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className={classes.footer__logo}>
        JCCM
      </a>

      <ul className={classes.permalinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={classes.footer__socials}>
        <a href="http://instagram.com">
          <FiInstagram />
        </a>
        <a href="http://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className={classes.footer__copyright}>
        <small>&copy; Juan Camilo Cifuentes.</small>
      </div>
    </footer>
  );
};

export default Footer;
