import { experience } from '../data'

export function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <h2 className="section__title animate">Experience</h2>
        <div className="exp-list">
          {experience.map((job, i) => (
            <article
              key={job.id}
              className="exp-card animate"
              style={{
                '--exp-color': job.color,
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div className="exp-card__header">
                <h3 className="exp-card__company">{job.company}</h3>
                <span className="exp-card__period">{job.period}</span>
              </div>
              <div className="exp-card__meta">
                <span className="exp-card__role">{job.role}</span>
                <span className="exp-card__badge">{job.type}</span>
              </div>
              <ul className="exp-card__bullets">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="exp-card__bullet">{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
