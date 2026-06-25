import { personal } from '../data'
import { LocationIcon, ArrowDownIcon } from './Icons'

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <p className="hero__greeting animate">Hi, my name is</p>
        <h1 className="hero__name animate" style={{ transitionDelay: '0.05s' }}>
          {personal.name}
        </h1>
        <p className="hero__role animate" style={{ transitionDelay: '0.1s' }}>
          {personal.title} @ Elastic
        </p>
        <p className="hero__tagline animate" style={{ transitionDelay: '0.15s' }}>
          {personal.tagline}
        </p>
        <div className="hero__location animate" style={{ transitionDelay: '0.2s' }}>
          <LocationIcon />
          {personal.location}
        </div>
        <div className="hero__actions animate" style={{ transitionDelay: '0.25s' }}>
          <a href="#experience" className="btn btn--primary">
            View my work
          </a>
          <a href="#contact" className="btn btn--secondary">
            Get in touch
          </a>
        </div>
      </div>

      <a href="#experience" className="hero__scroll-hint" aria-label="Scroll to experience section">
        <ArrowDownIcon />
      </a>
    </section>
  )
}
