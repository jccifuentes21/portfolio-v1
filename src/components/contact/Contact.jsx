import { useRef } from 'react'
import emailjs from 'emailjs-com'

import classes from './Contact.module.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ubfziyj', 'template_nvnhbyh', form.current, '9OhVU86r526Ztce47')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert('Message sent!')

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className={`container ${classes.contact__container}`}>
        <div className={classes.contact__options}>
          <article className={classes.contact__option}>
            <MdOutlineEmail className={classes['contact__option-icon']} />
            <h4>Email</h4>
            <h5>jccifuentes21@gmail.com</h5>
            <a href="mailto:jccifuentes21@gmail.com" target='_blank'>Send an email</a>
          </article>
          <article className={classes.contact__option}>
            <BsWhatsapp className={classes['contact__option-icon']} />
            <h4>Whatsapp</h4>
            <a href="https://wa.me/12365160270" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Write a message...' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact