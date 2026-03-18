import type { RefObject } from 'react'
import { useCustomCursor } from '../../hooks/use-custom-cursor'

type CustomCursorProps = {
  scopeRef: RefObject<HTMLDivElement | null>
}

export function CustomCursor({ scopeRef }: CustomCursorProps) {
  const { cursorDotRef, cursorRingRef } = useCustomCursor(scopeRef)

  return (
    <>
      <div className="noise-overlay pointer-events-none fixed inset-0 z-[1] opacity-[0.03]" />
      <div
        ref={cursorDotRef}
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[70] h-2.5 w-2.5 rounded-full bg-ember"
      />
      <div
        ref={cursorRingRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[69] h-10 w-10 rounded-full border border-cream/40"
      />
    </>
  )
}
