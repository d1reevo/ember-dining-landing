import { useEffect, useState } from 'react'

export function useNavbarState() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const updateScrolledState = () => {
      setHasScrolled(window.scrollY > 32)
    }

    updateScrolledState()
    window.addEventListener('scroll', updateScrolledState, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrolledState)
    }
  }, [])

  return hasScrolled
}
