import { useEffect, type RefObject } from 'react'
import { gsap } from '../lib/gsap'

export function useMagneticElements(scopeRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const scope = scopeRef.current

    if (!scope || !window.matchMedia('(pointer: fine)').matches) {
      return
    }

    const magneticCleanup: Array<() => void> = []

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((element) => {
        const handleMove = (event: MouseEvent) => {
          const bounds = element.getBoundingClientRect()
          const offsetX = event.clientX - (bounds.left + bounds.width / 2)
          const offsetY = event.clientY - (bounds.top + bounds.height / 2)

          gsap.to(element, {
            x: offsetX * 0.18,
            y: offsetY * 0.18,
            duration: 0.35,
            ease: 'power3.out',
          })
        }

        const handleLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.68,
            ease: 'elastic.out(1, 0.45)',
          })
        }

        element.addEventListener('mousemove', handleMove)
        element.addEventListener('mouseleave', handleLeave)
        magneticCleanup.push(() => {
          element.removeEventListener('mousemove', handleMove)
          element.removeEventListener('mouseleave', handleLeave)
        })
      })
    }, scope)

    return () => {
      magneticCleanup.forEach((cleanup) => cleanup())
      ctx.revert()
    }
  }, [scopeRef])
}
