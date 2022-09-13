import classes from "./About.module.css";
import ME from "../../assets/AboutMe.jpg";
import { FaAward, FaRobot } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>

      <div className={`container ${classes.about__container}`}>
        <div className={classes.about__me}>
          <div className={classes["about__me-image"]}>
            <img src={ME} alt="About me image" />
          </div>
        </div>

        <div className={classes.about__content}>
          <div className={classes.about__cards}>
            <article className={classes.about__card}>
              <FaAward className={classes.about__icon} />
              <h5>Experience</h5>
              <small>1+ year working</small>
            </article>
            <article className={classes.about__card}>
              <FaRobot className={classes.about__icon} />
              <h5>Background</h5>
              <small>Mechatronics Engineering</small>
            </article>
            <article className={classes.about__card}>
              <VscFolderLibrary className={classes.about__icon} />
              <h5>Projects</h5>
              <small>15+ completed projects</small>
            </article>
          </div>

          <p>
            I'm a junior frontend web developer, soon to be fullstack, with a
            background as a Mechatronics Engineer. I graduated from my
            Mechatronics Degree in June 2021 at ITESM. I have always enjoyed
            coding and web development. I possess excellent problem solving skills and a strong desire for learning and growing!
          </p>
          <p>
             Tech
            things aside, I love sports, golf and tennis mostly, and traveling!
            I speak english and spanish fluently, and I'm currently based in
            Vancouver, BC.
          </p>
          <div className={classes.fun__facts}>
          <h3><strong>Fun facts!</strong></h3>
            <ul>
              <li>I love coffee</li>
              <li>I was born in Bogota, Colombia</li>
              <li>My favorite city in the world is Sydney, Australia</li>
            </ul>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's grab a coffee
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
