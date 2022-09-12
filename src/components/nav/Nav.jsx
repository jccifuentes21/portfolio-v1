import classes from "./Nav.module.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiSuitcaseLine } from "react-icons/ri";

import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <div className={classes.nav__group}>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? classes.active : ""}
        >
          <AiOutlineHome />
        </a>
        <small>HOME</small>
      </div>
      <div className={classes.nav__group}>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? classes.active : ""}
        >
          <AiOutlineUser />
        </a>
        <small>ABOUT</small>
      </div>
      <div className={classes.nav__group}>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? classes.active : ""}
        >
          <BiBook />
        </a>
        <small>EXPERIENCE</small>
      </div>
      <div className={classes.nav__group}>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? classes.active : ""}
        >
          <RiSuitcaseLine />
        </a>
        <small>PORTFOLIO</small>
      </div>
      <div className={classes.nav__group}>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? classes.active : ""}
        >
          <BiMessageDetail />
        </a>
        <small>CONTACT</small>
      </div>
    </nav>
  );
};

export default Nav;
