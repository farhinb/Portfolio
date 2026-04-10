export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-surface-container-low py-32 md:py-40">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-6">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-secondary mb-12">
            The Philosophy
          </h2>
          <div className="space-y-10">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-headline leading-tight">
              Shaping <span className="italic font-normal">solutions</span>,
              not just shipping features.
            </h3>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
              I have a computer science background, but what I enjoy most is
              turning ideas into something real, useful, and meaningful for the
              person on the other end of the product. Long term, I want to
              bring that product mindset into beauty and fashion — where brand,
              experience, and customer connection matter in a different way.
            </p>
            <div className="flex space-x-12 pt-4">
              <div>
                <p className="text-3xl md:text-4xl font-headline font-bold mb-1">03+</p>
                <p className="text-[10px] uppercase tracking-widest text-secondary">
                  Years in Product
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-headline font-bold mb-1">04</p>
                <p className="text-[10px] uppercase tracking-widest text-secondary">
                  Case Studies
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-headline font-bold mb-1">0px</p>
                <p className="text-[10px] uppercase tracking-widest text-secondary">
                  Compromise
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="md:col-span-6 relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="bg-white p-10 md:p-12 relative z-10 shadow-sm">
            <p className="font-headline text-xl md:text-2xl italic leading-relaxed mb-8">
              "Innovation isn't the addition of features. It's the subtraction
              of friction between a person and the thing they came here to do."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-[1px] bg-primary" />
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
                Product Thesis · Vol. I
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
