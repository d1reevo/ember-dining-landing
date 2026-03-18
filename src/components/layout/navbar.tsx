import { navigationLinks } from '../../data/site-content'
import { useNavbarState } from '../../hooks/use-navbar-state'
import { joinClasses } from '../../lib/join-classes'
import { MagneticLink } from '../ui/action'
import { FlameIcon } from '../ui/flame-icon'

export function Navbar() {
  const hasScrolled = useNavbarState()

  return (
    <header className="fixed inset-x-0 top-4 z-[60] px-4 sm:px-6">
      <div
        className={joinClasses(
          'mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-full border px-5 py-3 transition duration-500 sm:px-7',
          hasScrolled
            ? 'border-white/10 bg-black/50 shadow-[0_24px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl'
            : 'border-white/5 bg-black/20 backdrop-blur-md',
        )}
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ember/25 bg-white/[0.04] text-ember">
            <FlameIcon className="h-5 w-5" />
          </span>
          <div>
            <p className="font-heading text-lg uppercase tracking-[0.28em] text-cream">EMBER</p>
            <p className="font-label text-[0.55rem] uppercase tracking-[0.32em] text-cream/45">
              Dining
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-label text-[0.68rem] uppercase tracking-[0.28em] text-cream/70 transition hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MagneticLink
          href="#reservations"
          variant="solid"
          className="px-4 py-3 text-[0.62rem] sm:px-6"
        >
          Reserve a Table
        </MagneticLink>
      </div>
    </header>
  )
}
