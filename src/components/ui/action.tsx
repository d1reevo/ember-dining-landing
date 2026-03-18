import type { ComponentPropsWithoutRef } from 'react'
import { joinClasses } from '../../lib/join-classes'

export type ActionVariant = 'solid' | 'ghost' | 'gradient' | 'dark'

const actionBaseClass =
  'group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3.5 text-[0.68rem] font-heading uppercase tracking-[0.24em] transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember'

const actionVariants: Record<ActionVariant, string> = {
  solid:
    'border border-transparent bg-ember text-[#120805] shadow-ember hover:-translate-y-0.5 hover:bg-[#f16a2f] hover:shadow-gold',
  ghost:
    'border border-white/15 bg-white/5 text-cream hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white/10',
  gradient:
    'border border-transparent bg-gradient-to-r from-ember via-[#ff7b3d] to-gold text-[#120805] shadow-ember hover:-translate-y-0.5 hover:shadow-gold',
  dark:
    'border border-white/10 bg-black/30 text-cream hover:-translate-y-0.5 hover:border-ember/40 hover:bg-white/5',
}

type MagneticLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: ActionVariant
}

export function MagneticLink({
  children,
  className,
  variant = 'solid',
  ...props
}: MagneticLinkProps) {
  return (
    <a
      data-magnetic
      className={joinClasses(actionBaseClass, actionVariants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </a>
  )
}

type MagneticButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ActionVariant
}

export function MagneticButton({
  children,
  className,
  variant = 'solid',
  ...props
}: MagneticButtonProps) {
  return (
    <button
      data-magnetic
      className={joinClasses(actionBaseClass, actionVariants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </button>
  )
}
