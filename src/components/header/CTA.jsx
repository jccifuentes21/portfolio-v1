import CV from '../../assets/CV-JCCM.pdf'

const CTA = (props) => {
  return (
    <div className={props.classes}>
      <a href={CV} className="btn" download>Download Resume</a>
      <a href="#contact" className="btn btn-primary">Let's Talk!</a>
    </div>
  )
}

export default CTA