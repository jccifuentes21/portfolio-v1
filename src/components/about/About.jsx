import classes from "./About.module.css";
import ME from '../../assets/AboutMe.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>

      <div className={`container ${classes.about__container}`}>
        <div className={classes.about__me}>
          <div className={classes['about__me-image']}>
            <img src={ME} alt="About me image" />
          </div>
        </div>

        <div className={classes.about__content}>
          <div className={classes.about__cards}>
            <article className={classes.about__card}>
              <FaAward className={classes.about__icon}/>
              <h5>Experience</h5>
              <small>1 year working</small>
            </article>
            <article className={classes.about__card}>
              <FiUsers className={classes.about__icon}/>
              <h5>Clients</h5>
              <small>300 clients worldwide</small>
            </article>
            <article className={classes.about__card}>
              <VscFolderLibrary className={classes.about__icon}/>
              <h5>Projects</h5>
              <small>30+ completed projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae soluta doloribus adipisci maxime! Placeat, quidem similique. Suscipit eum cumque laborum exercitationem! At beatae illo autem repellat! Minima, inventore amet!
          </p>

          <a href="#contact" className="btn btn-primary">Let's talk</a>

        </div>
      </div>
    </section>
  );
};

export default About;
