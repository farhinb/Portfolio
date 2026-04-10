export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 px-6 md:px-12 max-w-screen-2xl mx-auto text-center">
      <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary mb-8">
        Next Movement
      </p>
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter mb-16">
        Let's craft <br className="md:hidden" />
        the <span className="italic font-normal">future</span>.
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        <a
          className="text-xl md:text-2xl font-headline border-b-2 border-on-surface pb-2 hover:text-primary hover:border-primary transition-colors"
          href="mailto:farhinbhuiyan2003@gmail.com"
        >
          farhinbhuiyan2003@gmail.com
        </a>
        <span className="hidden md:block text-outline-variant">/</span>
        <a
          className="text-xl md:text-2xl font-headline border-b-2 border-on-surface pb-2 hover:text-primary hover:border-primary transition-colors"
          href="https://www.linkedin.com/in/farhin-bhuiyan/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <span className="hidden md:block text-outline-variant">/</span>
        <a
          className="text-xl md:text-2xl font-headline border-b-2 border-on-surface pb-2 hover:text-primary hover:border-primary transition-colors"
          href="mailto:farhinbhuiyan2003@gmail.com?subject=Resume%20Request"
        >
          Request CV
        </a>
      </div>
    </section>
  )
}
