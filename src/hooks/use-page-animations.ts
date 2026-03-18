import { useEffect, type RefObject } from 'react'
import { ScrollTrigger, SplitText, gsap } from '../lib/gsap'

export function usePageAnimations(scopeRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const scope = scopeRef.current

    if (!scope) {
      return
    }

    const splitInstances: SplitText[] = []

    const ctx = gsap.context(() => {
      const heroDisplaySplit = SplitText.create('[data-hero-display]', {
        type: 'chars,words',
        charsClass: 'split-char',
      })
      const heroHeadingSplit = SplitText.create('[data-hero-heading]', {
        type: 'chars,words',
        charsClass: 'split-char',
      })

      splitInstances.push(heroDisplaySplit, heroHeadingSplit)

      gsap.from([...heroDisplaySplit.chars, ...heroHeadingSplit.chars], {
        yPercent: 110,
        opacity: 0,
        duration: 1.08,
        stagger: 0.02,
        ease: 'power4.out',
        delay: 0.2,
      })

      gsap.from('[data-hero-kicker]', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.45,
      })

      gsap.from('[data-hero-copy]', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.8,
      })

      gsap.from('[data-hero-cta]', {
        y: 32,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.95,
      })

      gsap.from('[data-hero-aside]', {
        y: 38,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        delay: 1.1,
      })

      gsap.to('[data-hero-backdrop]', {
        scale: 1.08,
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-hero]',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.utils.toArray<HTMLElement>('[data-section-display]').forEach((element) => {
        const split = SplitText.create(element, {
          type: 'lines,words',
          linesClass: 'split-line',
          wordsClass: 'split-word',
        })

        splitInstances.push(split)

        gsap.from(split.words, {
          yPercent: 105,
          opacity: 0,
          duration: 0.88,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-section-heading]').forEach((element) => {
        const split = SplitText.create(element, {
          type: 'lines,words',
          linesClass: 'split-line',
          wordsClass: 'split-word',
        })

        splitInstances.push(split)

        gsap.from(split.words, {
          yPercent: 110,
          opacity: 0,
          duration: 0.82,
          stagger: 0.04,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 48, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: 'power3.out',
            delay: index % 3 === 0 ? 0 : 0.05,
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
            },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>('[data-stagger-group]').forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>('[data-stagger-item]')

        gsap.from(items, {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 82%',
          },
        })
      })

      ScrollTrigger.refresh()
    }, scope)

    return () => {
      splitInstances.forEach((split) => split.revert())
      ctx.revert()
    }
  }, [scopeRef])
}
