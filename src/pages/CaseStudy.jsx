import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getProjectBySlug, projects } from '../data/projects'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="bg-surface min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-secondary mb-4">404</p>
          <h1 className="text-5xl md:text-6xl font-headline mb-8">Case study not found.</h1>
          <Link to="/#work" className="border-b-2 border-on-surface pb-2 font-headline hover:text-primary hover:border-primary transition-colors">
            Back to Selected Work
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />

      {/* 1. Hero */}
      <section className="relative w-full h-screen overflow-hidden bg-surface-container">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-20 max-w-screen-2xl mx-auto">
          <Link
            to="/#work"
            className="text-[10px] uppercase tracking-[0.4em] text-white/80 hover:text-white mb-8 inline-flex items-center gap-2 w-max"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            All Work
          </Link>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/80 mb-4">
            {project.category}
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold tracking-tighter text-white leading-[0.9] mb-8 md:mb-12">
            {project.title}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/90 max-w-4xl border-t border-white/20 pt-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Role</p>
              <p className="font-headline">{project.role}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Year</p>
              <p className="font-headline">{project.year}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Duration</p>
              <p className="font-headline">{project.duration}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Volume</p>
              <p className="font-headline italic">
                {String(currentIndex + 1).padStart(2, '0')} of{' '}
                {String(projects.length).padStart(2, '0')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Vision */}
      <section className="bg-surface py-32 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary mb-6">
              Chapter I
            </p>
            <h2 className="text-4xl md:text-5xl font-headline leading-tight italic">
              The Vision
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-xl md:text-2xl font-headline leading-relaxed text-on-surface-variant">
              {project.vision}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Strategy & Craft */}
      <section className="bg-surface-container-low py-32 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-6 grid grid-cols-6 grid-rows-6 gap-4 min-h-[600px] md:min-h-[720px]">
            <div className="col-span-4 row-span-4 bg-surface-container overflow-hidden">
              <img
                src={project.heroImage}
                alt=""
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-5 row-start-2 bg-surface-container overflow-hidden">
              <img
                src={project.thumb}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-3 row-span-2 col-start-2 row-start-5 bg-primary/10" />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary mb-6">
              Chapter II
            </p>
            <h2 className="text-4xl md:text-5xl font-headline mb-12">Strategy &amp; Craft</h2>
            <ul className="space-y-8">
              {project.strategy.map((item, i) => (
                <li key={i} className="flex gap-6 border-t border-outline-variant/40 pt-6">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-on-surface-variant leading-relaxed flex-1">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. The Impact */}
      <section className="bg-surface py-32 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary mb-6">
            Chapter III
          </p>
          <h2 className="text-5xl md:text-6xl font-headline italic mb-20 md:mb-24">
            The Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 border-t border-outline-variant/40 pt-16">
            {project.impact.map((metric) => (
              <div key={metric.label}>
                <p className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter mb-4">
                  {metric.value}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-secondary">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Prototype CTA */}
      <section className="relative h-[720px] md:h-[819px] flex items-center justify-center overflow-hidden">
        <img
          src={project.heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/70 mb-8">
            Chapter IV
          </p>
          <h2 className="text-4xl md:text-6xl font-headline text-white italic mb-12 max-w-3xl">
            Experience the Interface
          </h2>
          <a
            href={project.prototypeUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-on-surface px-12 py-5 text-[10px] uppercase tracking-[0.25em] font-medium hover:opacity-90 active:scale-95 transition-opacity inline-flex items-center gap-4"
          >
            View Prototype
            <span className="material-symbols-outlined text-sm">north_east</span>
          </a>
        </div>
      </section>

      {/* Next project */}
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-baseline mb-12">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary">
            Next
          </p>
          <div className="h-[1px] flex-grow mx-8 bg-outline-variant/40" />
          <span className="font-headline italic text-base md:text-lg">Continue</span>
        </div>
        <Link
          to={`/work/${next.slug}`}
          className="group block"
        >
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">
                {next.category}
              </p>
              <h3 className="text-4xl md:text-6xl font-headline font-bold group-hover:italic transition-all">
                {next.title}
              </h3>
            </div>
            <span className="material-symbols-outlined text-4xl font-light group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
              north_east
            </span>
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  )
}
