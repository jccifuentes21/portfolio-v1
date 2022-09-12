import classes from "./Nav.module.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiSuitcaseLine } from "react-icons/ri";

import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? classes.active : ""}
      >
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav("#about")}
      className={activeNav === "#about" ? classes.active : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav("#experience")}
      className={activeNav === "#experience" ? classes.active : ""}>
        <BiBook />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
      className={activeNav === "#portfolio" ? classes.active : ""}>
        <RiSuitcaseLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav("#contact")}
      className={activeNav === "#contact" ? classes.active : ""}>
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
