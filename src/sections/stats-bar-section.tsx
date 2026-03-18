import { statistics } from '../data/site-content'

export function StatsBarSection() {
  return (
    <section className="relative border-y border-white/5 bg-black/45 py-6">
      <div className="section-shell">
        <div data-stagger-group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {statistics.map((stat) => (
            <div
              key={stat.label}
              data-stagger-item
              className="surface-panel rounded-[2rem] px-6 py-5 text-center"
            >
              <p className="font-heading text-[1.85rem] uppercase tracking-[0.12em] text-ember">
                {stat.value}
                {stat.label === 'Rating' ? <span className="text-gold">&starf;</span> : null}
              </p>
              <p className="mt-2 font-label text-[0.62rem] uppercase tracking-[0.3em] text-cream/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
