import { personal } from '../data'
import { EmailIcon, LinkedInIcon } from './Icons'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <p className="contact__subtitle animate">What's next?</p>
        <h2 className="contact__heading animate" style={{ transitionDelay: '0.05s' }}>
          Get In Touch
        </h2>
        <p className="contact__intro animate" style={{ transitionDelay: '0.1s' }}>
          I'm currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hello — my inbox is always open.
        </p>
        <div className="contact__links animate" style={{ transitionDelay: '0.15s' }}>
          <a href={`mailto:${personal.email}`} className="contact__link">
            <EmailIcon />
            {personal.email}
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
