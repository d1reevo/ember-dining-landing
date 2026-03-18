import { featuredDishes } from '../data/site-content'

export function FeaturedDishesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow" data-reveal>
              Signature Dishes
            </p>
            <h2
              data-section-heading
              className="mt-5 max-w-2xl font-heading text-4xl uppercase leading-[1.02] tracking-[0.12em] text-cream sm:text-5xl"
            >
              The courses guests remember long after the candles fade.
            </h2>
          </div>
          <p data-reveal className="max-w-xl text-base leading-8 text-cream/66">
            Each plate is composed with editorial restraint: deep sauce work, warm light, and
            enough contrast to keep every bite cinematic.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredDishes.map((dish) => (
            <article
              key={dish.name}
              data-reveal
              className="group surface-panel overflow-hidden rounded-[2rem] transition duration-500 hover:-translate-y-2 hover:border-ember/30 hover:shadow-ember"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.08)_0%,rgba(13,13,13,0.78)_100%)]" />
                <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 font-label text-[0.58rem] uppercase tracking-[0.28em] text-cream/72">
                    {dish.category}
                  </span>
                  <span className="font-label text-[0.76rem] uppercase tracking-[0.2em] text-gold">
                    {dish.price}
                  </span>
                </div>
                <div className="absolute inset-x-6 bottom-6 z-10">
                  <p className="font-display text-4xl italic leading-none text-cream">{dish.name}</p>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-cream/0 transition duration-500 group-hover:text-cream/72">
                    {dish.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(232,87,26,0.06)_0%,rgba(13,13,13,0.58)_45%,rgba(13,13,13,0.92)_100%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
