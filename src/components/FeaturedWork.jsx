const projects = [
  {
    title: 'e.l.f. Beauty Product Case Study',
    tag: 'Beauty · PM Case Study',
    description:
      'A product case study exploring how e.l.f. could improve loyalty, personalized discovery, and repeat purchase inside the app.',
  },
  {
    title: 'Healthfirst Product Work',
    tag: 'Real-World Experience',
    description:
      'A space for a sanitized case study showing how I approach product work, stakeholder alignment, and prioritization in a live environment.',
  },
  {
    title: 'Original Concept Project',
    tag: '0→1 Thinking',
    description:
      'A concept project for a beauty or fashion digital experience that shows my thinking around user needs, MVP scope, and success metrics.',
  },
]

export default function FeaturedWork() {
  return (
    <section className="container section" id="work">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Case studies and product thinking I’m building toward.</h2>
      </div>

      <div className="card-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="card-tag">{project.tag}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href="#contact" className="card-link">
              Replace with project page →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
