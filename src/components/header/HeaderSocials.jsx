import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = (props) => {
  return (
    <div className={props.classes}>
      <a
        href="https://www.linkedin.com/in/jccifuentes21"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/jccifuentes21" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
