const experience = [
  {
    period: '2023 — Now',
    role: 'Product Owner',
    company: 'Healthfirst',
    text: 'Owning product work in a regulated live environment. Balancing user needs, stakeholder priorities, and delivery realities across clinical, legal, and engineering partners.',
  },
  {
    period: '2020 — 2023',
    role: 'Computer Science',
    company: 'Technical Foundation',
    text: 'Built enough technical fluency to work fluently with engineers, understand tradeoffs, and contribute product direction with confidence.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-baseline mb-16 md:mb-20">
        <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-secondary">
          The Process
        </h2>
        <div className="h-[1px] flex-grow mx-8 bg-outline-variant/40" />
        <span className="font-headline italic text-base md:text-lg">Chronology</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {experience.map((item) => (
          <article
            key={item.role}
            className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-t border-outline-variant/40"
          >
            <div className="md:col-span-3">
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold">
                {item.period}
              </p>
            </div>
            <div className="md:col-span-5">
              <h3 className="text-2xl md:text-3xl font-headline font-bold mb-1">
                {item.role}
              </h3>
              <p className="text-secondary text-sm">{item.company}</p>
            </div>
            <div className="md:col-span-4">
              <p className="text-on-surface-variant">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
