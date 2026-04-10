const experience = [
  {
    role: 'Product Owner',
    company: 'Healthfirst',
    period: 'Current',
    text: 'Owning product work in a live business environment and learning how to balance user needs, stakeholder priorities, and delivery realities.',
  },
  {
    role: 'Computer Science Background',
    company: 'Technical foundation',
    period: 'Past',
    text: 'Built enough technical fluency to work well with engineers, understand tradeoffs, and contribute product direction with confidence.',
  },
]

export default function Experience() {
  return (
    <section className="container section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>A foundation in tech, with a future in consumer product.</h2>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.role}>
            <div className="timeline-meta">
              <span>{item.period}</span>
            </div>
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
