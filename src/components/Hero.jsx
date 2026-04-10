export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-[calc(100vh-8rem)] flex flex-col justify-center px-6 md:px-12 max-w-screen-2xl mx-auto pt-32 md:pt-40"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary mb-8">
            Product Owner · New York
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold leading-[0.9] tracking-tighter text-on-surface mb-8">
            Building <br />
            <span className="italic font-normal">thoughtful</span> digital
            experiences.
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-on-surface-variant leading-relaxed">
            A Product Owner crafting refined digital experiences where
            technical fluency meets human intuition — with a long-term focus
            on beauty, fashion, and consumer products people genuinely love.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <a
              href="/#work"
              className="bg-primary text-on-primary px-10 py-4 text-[10px] uppercase tracking-[0.25em] font-medium hover:opacity-90 active:scale-95 transition-opacity inline-flex items-center justify-center"
            >
              View Selected Work
            </a>
            <a
              href="/#about"
              className="border-b-2 border-on-surface pb-2 text-[10px] uppercase tracking-[0.25em] font-medium hover:text-primary hover:border-primary transition-colors self-start inline-block"
            >
              About Me →
            </a>
          </div>
        </div>
        <div className="md:col-span-4 flex justify-end">
          <div className="w-24 h-24 rounded-full border border-outline-variant/30 flex items-center justify-center animate-spin-slow">
            <span className="material-symbols-outlined text-primary text-3xl">
              arrow_downward
            </span>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full aspect-[21/9] overflow-hidden bg-surface-container relative">
        <img
          alt="Editorial workspace"
          className="w-full h-full object-cover grayscale opacity-80"
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>
    </section>
  )
}
