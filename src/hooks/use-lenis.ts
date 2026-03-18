import { useEffect } from 'react'
import Lenis from 'lenis'
import { ScrollTrigger } from '../lib/gsap'

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    })

    let frameId = 0

    const animate = (time: number) => {
      lenis.raf(time)
      frameId = window.requestAnimationFrame(animate)
    }

    frameId = window.requestAnimationFrame(animate)
    lenis.on('scroll', () => ScrollTrigger.update())

    return () => {
      window.cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])
}
