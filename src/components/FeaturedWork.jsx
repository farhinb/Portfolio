import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function FeaturedWork() {
  const [p1, p2, p3, p4] = projects
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-baseline mb-16 md:mb-20">
        <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-secondary">
          Selected Work
        </h2>
        <div className="h-[1px] flex-grow mx-8 bg-outline-variant/40" />
        <span className="font-headline italic text-base md:text-lg">
          Volume 01 — 04
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        {/* Project 01 — Wide */}
        <Link to={`/work/${p1.slug}`} className="md:col-span-7 group cursor-pointer block">
          <div className="relative overflow-hidden aspect-[16/10] bg-surface-container-low mb-6">
            <img
              src={p1.thumb}
              alt={p1.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">
                {p1.category}
              </p>
              <h3 className="text-3xl md:text-4xl font-headline font-bold mb-4">{p1.title}</h3>
              <p className="text-on-surface-variant max-w-md">{p1.blurb}</p>
            </div>
            <span className="material-symbols-outlined text-4xl font-light">north_east</span>
          </div>
        </Link>

        {/* Project 02 — Square */}
        <Link to={`/work/${p2.slug}`} className="md:col-span-5 flex flex-col justify-end group cursor-pointer md:pt-20 block">
          <div className="relative overflow-hidden aspect-square bg-surface-container-low mb-6">
            <img
              src={p2.thumb}
              alt={p2.title}
              className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">{p2.category}</p>
          <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4">{p2.title}</h3>
          <p className="text-on-surface-variant">{p2.blurb}</p>
        </Link>

        {/* Project 03 — Tall */}
        <Link to={`/work/${p3.slug}`} className="md:col-span-4 group cursor-pointer block">
          <div className="aspect-[3/4] overflow-hidden bg-surface-container-low mb-6">
            <img
              src={p3.thumb}
              alt={p3.title}
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">{p3.category}</p>
          <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4">{p3.title}</h3>
          <p className="text-on-surface-variant text-sm">{p3.blurb}</p>
        </Link>

        {/* Project 04 — Wide */}
        <Link to={`/work/${p4.slug}`} className="md:col-span-8 group cursor-pointer block">
          <div className="aspect-[21/9] overflow-hidden bg-surface-container-low mb-6">
            <img
              src={p4.thumb}
              alt={p4.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">{p4.category}</p>
              <h3 className="text-2xl md:text-3xl font-headline font-bold">{p4.title}</h3>
            </div>
            <p className="text-right text-on-surface-variant max-w-xs text-sm italic">
              {p4.blurb}
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
