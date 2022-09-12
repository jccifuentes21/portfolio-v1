import classes from "./Portfolio.module.css";

import GAME from "../../assets/2048.jpg";
import Project from "./Project";

const projects = [
  {
    id: 1,
    image: GAME,
    title: '2048 Clone with Vanilla JS only',
    github: 'https://github.com/jccifuentes21/2048-Clone',
    demo: 'https://jccifuentes21.github.io/2048-Clone/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${classes.portfolio__container}`}>
          {projects.map((project) =>{
            return (
              <Project key={project.id} project={project}/>
            )
          })}

      </div>
    </section>
  );
};

export default Portfolio;
