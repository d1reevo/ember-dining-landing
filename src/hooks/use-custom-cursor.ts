import { useEffect, useRef, type RefObject } from 'react'
import { gsap } from '../lib/gsap'

export function useCustomCursor(scopeRef: RefObject<HTMLDivElement | null>) {
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scope = scopeRef.current
    const dot = cursorDotRef.current
    const ring = cursorRingRef.current

    if (!scope || !dot || !ring || !window.matchMedia('(pointer: fine)').matches) {
      return
    }

    const interactiveCleanup: Array<() => void> = []
    let handleMove = (_event: MouseEvent) => {}
    let handleDown = () => {}
    let handleUp = () => {}

    const ctx = gsap.context(() => {
      gsap.set([dot, ring], { xPercent: -50, yPercent: -50 })

      const moveDotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' })
      const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' })
      const moveRingX = gsap.quickTo(ring, 'x', { duration: 0.28, ease: 'power3.out' })
      const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.28, ease: 'power3.out' })

      handleMove = (event: MouseEvent) => {
        moveDotX(event.clientX)
        moveDotY(event.clientY)
        moveRingX(event.clientX)
        moveRingY(event.clientY)
      }

      handleDown = () => {
        gsap.to(dot, { scale: 0.72, duration: 0.18, ease: 'power2.out' })
        gsap.to(ring, { scale: 0.82, duration: 0.18, ease: 'power2.out' })
      }

      handleUp = () => {
        gsap.to(dot, { scale: 1, duration: 0.22, ease: 'power2.out' })
        gsap.to(ring, { scale: 1, duration: 0.22, ease: 'power2.out' })
      }

      const handleInteractiveEnter = () => {
        gsap.to(ring, {
          scale: 1.6,
          borderColor: 'rgba(232, 87, 26, 0.72)',
          duration: 0.22,
          ease: 'power2.out',
        })

        gsap.to(dot, { backgroundColor: '#C9952A', duration: 0.22, ease: 'power2.out' })
      }

      const handleInteractiveLeave = () => {
        gsap.to(ring, {
          scale: 1,
          borderColor: 'rgba(245, 240, 232, 0.38)',
          duration: 0.22,
          ease: 'power2.out',
        })

        gsap.to(dot, { backgroundColor: '#E8571A', duration: 0.22, ease: 'power2.out' })
      }

      gsap
        .utils.toArray<HTMLElement>('a, button, input, textarea, select')
        .forEach((element) => {
          element.addEventListener('mouseenter', handleInteractiveEnter)
          element.addEventListener('mouseleave', handleInteractiveLeave)
          interactiveCleanup.push(() => {
            element.removeEventListener('mouseenter', handleInteractiveEnter)
            element.removeEventListener('mouseleave', handleInteractiveLeave)
          })
        })

      window.addEventListener('mousemove', handleMove)
      window.addEventListener('mousedown', handleDown)
      window.addEventListener('mouseup', handleUp)
    }, scope)

    return () => {
      interactiveCleanup.forEach((cleanup) => cleanup())
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      ctx.revert()
    }
  }, [scopeRef])

  return {
    cursorDotRef,
    cursorRingRef,
  }
}
