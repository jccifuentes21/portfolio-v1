import classes from "./Footer.module.css";

import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

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
        <a href="http://github.com/jccifuentes21">
          <FaGithub />
        </a>
        <a href="http://linkedin.com/in/jccifuentes21">
          <BsLinkedin />
        </a>
        <a href="http://instagram.com/jccifuentes21">
          <FiInstagram />
        </a>
        <a href="http://twitter.com/jkami21">
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
