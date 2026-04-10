// Case study data. Mock content fills anything we don't have real copy for yet.
export const projects = [
  {
    slug: 'elf-beauty',
    category: 'Beauty · Loyalty',
    title: 'e.l.f. Beauty',
    blurb:
      'Redefining loyalty, personalized discovery, and repeat purchase inside the e.l.f. app.',
    heroImage:
      'https://images.unsplash.com/photo-1522335789203-aaa0c9b4b0a0?auto=format&fit=crop&w=2400&q=80',
    thumb:
      'https://images.unsplash.com/photo-1522335789203-aaa0c9b4b0a0?auto=format&fit=crop&w=1600&q=80',
    role: 'Product Strategy',
    year: '2025',
    duration: '6 Weeks',
    vision:
      'e.l.f. has built one of the fiercest communities in beauty, yet the in-app experience treats every shopper the same. The opportunity: transform the storefront into an intimate, editorial feed where loyalty is felt — not gamified. A quiet, confident system that turns browsing into ritual and ritual into repeat purchase.',
    strategy: [
      'Audited 42 beauty apps and mapped the rituals of 18 "super-fans" to surface the moments where loyalty actually forms.',
      'Reframed the points economy as a curation engine — every interaction produces signal used to hand-select tomorrow\'s feed.',
      'Prototyped a 3-tier membership narrative anchored in access (drops, artists, edits) rather than discount mechanics.',
      'Partnered with engineering to scope a recommendation service that balances novelty and familiarity at the category level.',
    ],
    impact: [
      { label: 'Projected AOV Lift', value: '+18%' },
      { label: 'Loyalty Opt-in', value: '2.4×' },
      { label: 'Repeat Purchase', value: '+31%' },
      { label: 'Prototype Fidelity', value: 'High' },
    ],
    prototypeUrl: 'https://www.figma.com/proto/placeholder-elf',
  },
  {
    slug: 'healthfirst',
    category: 'Enterprise · Healthcare',
    title: 'Healthfirst Ownership',
    blurb:
      'A sanitized look at how I run product in a live, regulated environment — stakeholder alignment, prioritization, delivery.',
    heroImage:
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2400&q=80',
    thumb:
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=80',
    role: 'Product Owner',
    year: '2023 — Now',
    duration: 'Ongoing',
    vision:
      'Healthcare product work is an exercise in restraint. Every decision touches compliance, clinical operations, and the member on the other side. The discipline: protect the small number of moments that actually move outcomes, and ruthlessly remove everything else from the roadmap.',
    strategy: [
      'Ran weekly tri-party syncs across clinical, legal, and engineering to keep scope honest against regulatory constraints.',
      'Rebuilt the intake backlog around a "jobs to be done" frame, retiring 40+ legacy tickets that no longer mapped to outcomes.',
      'Shipped three consecutive quarters on-time by enforcing a single-metric definition of done per epic.',
      'Authored the team\'s first write-up of trade-off decisions so future PMs inherit context, not just Jira history.',
    ],
    impact: [
      { label: 'On-time Releases', value: '3/3' },
      { label: 'Backlog Reduction', value: '−62%' },
      { label: 'Stakeholder NPS', value: '74' },
      { label: 'Cycle Time', value: '−28%' },
    ],
    prototypeUrl: 'https://www.figma.com/proto/placeholder-healthfirst',
  },
  {
    slug: 'original-concept',
    category: '0 → 1 · Consumer',
    title: 'Maison Concept',
    blurb:
      'An original 0→1 concept for a beauty + fashion digital experience. User needs, MVP scope, success metrics.',
    heroImage:
      'https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?auto=format&fit=crop&w=2400&q=80',
    thumb:
      'https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?auto=format&fit=crop&w=1600&q=80',
    role: 'Founding PM',
    year: '2025',
    duration: '4 Weeks',
    vision:
      'A membership-first house of beauty and wardrobe edits — where the product is the point of view, not the catalog. Maison treats every release as an editorial drop, and every customer as a subscriber to taste rather than a buyer of items.',
    strategy: [
      'Wrote the founding thesis, opportunity sizing, and three-year product north star in a single 6-pager.',
      'Defined the MVP as a single vertical: a monthly curated drop plus member-only journal, nothing else.',
      'Built the pricing model around access + allocation, not discount tiers, to protect margin and brand.',
      'Framed the activation metric as "first save within 72 hours" — a signal of taste match, not just sign-up.',
    ],
    impact: [
      { label: 'MVP Scope', value: '1 Vertical' },
      { label: 'Activation Target', value: '72h' },
      { label: 'Concept Decks', value: '3' },
      { label: 'Signal Metric', value: 'Saves' },
    ],
    prototypeUrl: 'https://www.figma.com/proto/placeholder-maison',
  },
  {
    slug: 'project-helios',
    category: 'AI · Enterprise',
    title: 'Project Helios',
    blurb:
      'Harmonizing generative intelligence with legacy enterprise workflows — a speculative internal-tools concept.',
    heroImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80',
    thumb:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    role: 'Concept PM',
    year: '2025',
    duration: '3 Weeks',
    vision:
      'Enterprise teams don\'t need another chatbot. They need a quiet layer of intelligence that removes drudgery from the work they already do. Helios sits inside existing tools and earns trust by being accurate, cited, and reversible — never flashy.',
    strategy: [
      'Mapped six legacy enterprise workflows and identified the three where generative models offer a 10× time return.',
      'Designed a "propose, don\'t execute" interaction model where every action is a reviewable draft.',
      'Sketched an evaluation rubric for factuality, citation coverage, and rollback safety.',
      'Framed the go-to-market as a wedge inside internal tools, not a standalone product.',
    ],
    impact: [
      { label: 'Workflows Mapped', value: '6' },
      { label: 'Time Return', value: '10×' },
      { label: 'Eval Axes', value: '3' },
      { label: 'Fidelity', value: 'Concept' },
    ],
    prototypeUrl: 'https://www.figma.com/proto/placeholder-helios',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null
}
