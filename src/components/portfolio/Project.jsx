import classes from "./Portfolio.module.css";

const Project = ({project}) => {
  return (
    <article className={classes.portfolio__item}>
          <div className={classes["portfolio__item-image"]}>
            <img src={project.image} alt={`${project.title} image`} />
          </div>
          <h3>{project.title}</h3>
          <div className={classes["portfolio__item-cta"]}>
            <a href={project.github} className={`btn`}>Github</a>
            <a href={project.demo} className={`btn btn-primary`} target="_blank"> Live Demo </a>
          </div>
        </article>
  )
}

export default Project