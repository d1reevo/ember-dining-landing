import { MagneticLink } from '../components/ui/action'

export function StorySection() {
  return (
    <section id="story" className="scroll-mt-32 py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_1.05fr]">
          <div className="max-w-xl">
            <p className="eyebrow" data-reveal>
              The Story
            </p>
            <p
              data-section-heading
              className="mt-5 font-heading text-xl uppercase tracking-[0.22em] text-cream/78"
            >
              Crafted with
            </p>
            <h2
              data-section-display
              className="mt-2 font-display text-[clamp(4rem,8vw,6rem)] font-light italic leading-[0.9] text-gold"
            >
              Passion.
            </h2>
            <p data-reveal className="mt-8 text-base leading-8 text-cream/68">
              EMBER began with a simple obsession: taking the language of live-fire cooking and
              refining it until every dish felt both primal and elegant.
            </p>
            <p data-reveal className="mt-5 text-base leading-8 text-cream/68">
              Our kitchen moves between restraint and intensity, letting smoke, acid, and texture
              build tension across the menu instead of competing for attention.
            </p>
            <p data-reveal className="mt-5 text-base leading-8 text-cream/68">
              The result is a room that glows softly, a service rhythm that never breaks, and a
              meal designed to linger long after the last course.
            </p>
            <div data-reveal className="mt-10">
              <MagneticLink href="#reservations" variant="dark">
                Meet Our Chef
              </MagneticLink>
            </div>
          </div>

          <div data-reveal className="relative">
            <div className="absolute -left-12 top-10 hidden h-40 w-40 rounded-full bg-gold/12 blur-3xl lg:block" />
            <div className="absolute -right-6 bottom-16 hidden h-48 w-48 rounded-full bg-ember/16 blur-3xl lg:block" />
            <div className="surface-panel overflow-hidden rounded-[2.25rem] p-4">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                alt="Chef plating a dish in a dark kitchen"
                className="h-[540px] w-full rounded-[1.75rem] object-cover"
              />
            </div>
            <div className="surface-panel absolute -bottom-8 left-4 hidden max-w-xs rounded-[1.75rem] p-5 lg:block">
              <p className="eyebrow">Chef&apos;s Counter</p>
              <p className="mt-3 font-display text-3xl italic leading-none text-cream">
                8 seats. One fire pass.
              </p>
              <p className="mt-4 text-sm leading-7 text-cream/66">
                The closest view in the room, where sauces finish, steel flashes, and final
                garnishes land in silence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
