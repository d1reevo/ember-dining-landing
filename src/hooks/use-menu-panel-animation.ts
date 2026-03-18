import { useEffect, type RefObject } from 'react'
import { gsap } from '../lib/gsap'

export function useMenuPanelAnimation(panelRef: RefObject<HTMLDivElement | null>, dependency: string) {
  useEffect(() => {
    const panel = panelRef.current

    if (!panel) {
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panel.querySelectorAll('[data-menu-item]'),
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.62,
          stagger: 0.06,
          ease: 'power2.out',
        },
      )
    }, panel)

    return () => {
      ctx.revert()
    }
  }, [dependency, panelRef])
}
