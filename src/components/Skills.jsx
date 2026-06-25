import { skills, languages } from '../data'

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section__title animate">Skills</h2>
        <div className="skills__grid">
          {Object.entries(skills).map(([category, tags], i) => (
            <div key={category} className="skill-group animate" style={{ transitionDelay: `${i * 0.07}s` }}>
              <h3 className="skill-group__name">{category}</h3>
              <div className="skill-group__tags">
                {tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
          <div className="skill-group animate" style={{ transitionDelay: `${Object.keys(skills).length * 0.07}s` }}>
            <h3 className="skill-group__name">Languages</h3>
            <div className="skill-group__tags">
              {languages.map(({ lang, level }) => (
                <span key={lang} className="skill-tag" title={level}>{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
