import { education } from '../data'
import { StarIcon } from './Icons'

export function Education() {
  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <h2 className="section__title animate">Education</h2>
        <div className="edu-card animate">
          <div className="edu-card__header">
            <h3 className="edu-card__institution">{education.institution}</h3>
            <span className="edu-card__period">{education.period}</span>
          </div>
          <p className="edu-card__degree">{education.degree}</p>
          <p className="edu-card__note">{education.note}</p>

          <div className="thesis">
            <p className="thesis__label">Thesis</p>
            <p className="thesis__title">{education.thesis.title}</p>
            <p className="thesis__description">{education.thesis.description}</p>
            <div className="thesis__footer">
              <span className="thesis__score">
                <StarIcon />
                {education.thesis.score}
              </span>
              <span className="thesis__honor">{education.thesis.note}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
