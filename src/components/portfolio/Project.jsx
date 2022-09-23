import classes from "./Portfolio.module.css";

const Project = ({ project }) => {
  return (
    <article className={classes.portfolio__item}>
      <h3>{project.title}</h3>
      <div className={classes["portfolio__item-image"]}>
        <img src={project.image} alt={`${project.title} image`} />
      </div>
      <div className={classes.description}>
        <h5>Description</h5>
        <small>{project.description}</small>
      </div>
      <div className={classes.tech__used}>
        <h5>Technologies used</h5>
        <small>{project.technologies}</small>
      </div>
      <div className={classes["portfolio__item-cta"]}>
        <a href={project.github} className={`btn ${classes.github__button}`}>
          Github
        </a>
        <a href={project.demo} className={`btn btn-primary`} target="_blank">
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default Project;
