import classes from "./Experience.module.css";

import { BiGitBranch } from "react-icons/bi";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { SiJavascript, SiBootstrap, SiJquery, SiFirebase, SiPython, SiHeroku } from "react-icons/si";
import { FaReact, FaSass, FaGithub } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className={`container ${classes.experience__container}`}>
        <div className={classes.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <ImHtmlFive className={classes['experience__details-icon']} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <ImCss3 className={classes['experience__details-icon']} />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <SiJavascript className={classes['experience__details-icon']} />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <SiJquery className={classes['experience__details-icon']} />
              <div>
                <h4>Jquery</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <SiBootstrap className={classes['experience__details-icon']} />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <FaReact className={classes['experience__details-icon']} />
              <div>
                <h4>React</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <FaSass className={classes['experience__details-icon']} />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <BiGitBranch className={classes['experience__details-icon']} />
              <div>
                <h4>Git</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <FaGithub className={classes['experience__details-icon']} />
              <div>
                <h4>Github</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <SiHeroku className={classes['experience__details-icon']} />
              <div>
                <h4>Heroku</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className={classes.experience__backend}>
          <h3>Backend Development</h3>

          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <IoLogoNodejs className={classes['experience__details-icon']} />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <SiFirebase className={classes['experience__details-icon']} />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <SiPython className={classes['experience__details-icon']} />
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <IoLogoNodejs className={classes['experience__details-icon']} />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className={classes.experience__details}>
              <IoLogoNodejs className={classes['experience__details-icon']} />
              <div>
                <h4>EJS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;