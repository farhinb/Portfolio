export default function Hero() {
  return (
    <section className="hero container section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Product Owner · New York</p>
        <h1>
          Building thoughtful digital experiences with a long-term focus on
          beauty, fashion, and consumer products.
        </h1>
        <p className="hero-text">
          I bring together product thinking, technical fluency, and a strong
          interest in customer-facing experiences. Right now I work in product,
          and long term I want to build products for brands people genuinely
          love.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            View selected work
          </a>
          <a className="button button-secondary" href="#about">
            About me
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="hero-card-inner">
          <p className="mini-label">Currently exploring</p>
          <ul>
            <li>Beauty app case studies</li>
            <li>Loyalty + retention ideas</li>
            <li>Consumer product strategy</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
