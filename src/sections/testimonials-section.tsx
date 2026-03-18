import { testimonials } from '../data/site-content'

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow" data-reveal>
              Guest Notes
            </p>
            <h2
              data-section-heading
              className="mt-5 font-heading text-4xl uppercase leading-[1.02] tracking-[0.12em] text-cream sm:text-5xl"
            >
              Reviews written by guests who expected dinner and left with a memory.
            </h2>
          </div>
          <p data-reveal className="max-w-xl text-base leading-8 text-cream/66">
            Precision matters, but atmosphere is what turns a booking into a story people keep
            retelling.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.guest}
              data-reveal
              className="surface-panel rounded-[2rem] border-ember/15 p-6 transition duration-300 hover:border-ember/25 hover:shadow-ember"
            >
              <p className="font-label text-[0.72rem] uppercase tracking-[0.22em] text-gold">
                &starf;&starf;&starf;&starf;&starf;
              </p>
              <p className="mt-6 text-base leading-8 text-cream/72">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-heading text-sm uppercase tracking-[0.18em] text-cream">
                  {testimonial.guest}
                </p>
                <p className="mt-2 font-label text-[0.58rem] uppercase tracking-[0.28em] text-cream/45">
                  {testimonial.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
