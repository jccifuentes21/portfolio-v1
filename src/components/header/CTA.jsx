// import CV from '../../assets/cv.pdf' ACTIVATE WHEN CV IS COMPLETE
//<a href={CV} download>Download CV</a>

const CTA = (props) => {
  return (
    <div className={props.classes}>
      <a href="#" className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA