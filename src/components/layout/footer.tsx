import { footerLinks } from '../../data/site-content'
import { FlameIcon } from '../ui/flame-icon'

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 mt-8 overflow-hidden rounded-t-[3rem] border-t border-white/10 bg-black py-12 sm:py-16"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
      <div className="section-shell">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ember/25 bg-white/[0.04] text-ember">
                <FlameIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading text-xl uppercase tracking-[0.28em] text-cream">EMBER</p>
                <p className="font-label text-[0.58rem] uppercase tracking-[0.32em] text-cream/45">
                  Dining
                </p>
              </div>
            </div>
            <p className="mt-6 text-base leading-8 text-cream/66">Where every dish tells a story.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[180px_220px_260px]">
            <div>
              <p className="eyebrow">Links</p>
              <div className="mt-5 flex flex-col gap-4">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="font-heading text-sm uppercase tracking-[0.16em] text-cream/72 transition hover:text-cream"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow">Contact</p>
              <p className="mt-5 text-sm leading-8 text-cream/66">
                12 Ember Lane
                <br />
                Downtown Culinary District
                <br />
                +1 (212) 555-0198
              </p>
            </div>

            <div className="surface-panel rounded-[2rem] p-5">
              <p className="eyebrow">Kitchen Status</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
                <p className="font-heading text-sm uppercase tracking-[0.18em] text-cream">
                  Open Tonight
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-cream/58">
                Last seating at 22:15. Chef&apos;s counter availability updates hourly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2025 EMBER DINING</p>
          <p>Reservation-driven dining, served nightly.</p>
        </div>
      </div>
    </footer>
  )
}
