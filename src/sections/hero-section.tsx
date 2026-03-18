import { heroImage } from '../data/site-content'
import { MagneticLink } from '../components/ui/action'

export function HeroSection() {
  return (
    <section id="top" data-hero className="relative flex min-h-[100dvh] items-end overflow-hidden">
      <div
        data-hero-backdrop
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,13,0.88)_0%,rgba(13,13,13,0.46)_48%,rgba(13,13,13,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,87,26,0.28),transparent_26%),radial-gradient(circle_at_30%_75%,rgba(201,149,42,0.14),transparent_24%),linear-gradient(180deg,rgba(13,13,13,0.05)_0%,rgba(13,13,13,0.9)_100%)]" />
      <div className="absolute inset-x-4 inset-y-4 rounded-[2.5rem] border border-white/10 sm:inset-x-6 sm:inset-y-6" />

      <div className="section-shell flex min-h-[100dvh] w-full items-end pb-14 pt-32 sm:pb-20 lg:pb-24">
        <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="max-w-5xl">
            <p data-hero-kicker className="eyebrow">
              Dark Culinary Luxury
            </p>
            <div className="mt-6 space-y-2 overflow-hidden">
              <p
                data-hero-display
                className="font-display text-[clamp(4.1rem,11vw,6.9rem)] font-light italic leading-[0.88] text-cream"
              >
                Fine Dining,
              </p>
              <p
                data-hero-heading
                className="font-heading text-[clamp(3.5rem,9.6vw,6.25rem)] uppercase leading-[0.9] tracking-[0.08em] text-ember"
              >
                Reimagined.
              </p>
            </div>
            <p data-hero-copy className="mt-8 max-w-2xl text-base leading-8 text-cream/74 sm:text-lg">
              An unforgettable culinary journey in the heart of the city, shaped by fire, smoke,
              and a quiet obsession with detail.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticLink href="#menu" data-hero-cta>
                Explore Menu
              </MagneticLink>
              <MagneticLink href="#story" variant="ghost" data-hero-cta>
                Our Story
              </MagneticLink>
            </div>
          </div>

          <div
            data-hero-aside
            className="surface-panel hidden rounded-[2rem] p-6 lg:block lg:justify-self-end"
          >
            <p className="eyebrow">Tonight&apos;s Tasting</p>
            <p className="mt-5 font-display text-4xl italic leading-none text-gold">
              Smoke. Citrus. Ash.
            </p>
            <p className="mt-4 text-sm leading-7 text-cream/68">
              Seven courses paced like a film score, ending with charcoal dessert and midnight tea.
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <div>
                <p className="font-label text-[0.58rem] uppercase tracking-[0.3em] text-cream/40">
                  Seats Left
                </p>
                <p className="mt-2 font-heading text-xl uppercase tracking-[0.12em] text-cream">
                  8 Tonight
                </p>
              </div>
              <span className="rounded-full border border-ember/25 bg-ember/10 px-3 py-1 font-label text-[0.58rem] uppercase tracking-[0.28em] text-ember">
                Reservation Only
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
