import { useRef } from 'react'
import { Footer } from './components/layout/footer'
import { Navbar } from './components/layout/navbar'
import { CustomCursor } from './components/ui/custom-cursor'
import { useLenis } from './hooks/use-lenis'
import { useMagneticElements } from './hooks/use-magnetic-elements'
import { usePageAnimations } from './hooks/use-page-animations'
import { FeaturedDishesSection } from './sections/featured-dishes-section'
import { GallerySection } from './sections/gallery-section'
import { HeroSection } from './sections/hero-section'
import { MenuSection } from './sections/menu-section'
import { ReservationsSection } from './sections/reservations-section'
import { StatsBarSection } from './sections/stats-bar-section'
import { StorySection } from './sections/story-section'
import { TestimonialsSection } from './sections/testimonials-section'

function App() {
  const pageRef = useRef<HTMLDivElement>(null)

  useLenis()
  useMagneticElements(pageRef)
  usePageAnimations(pageRef)

  return (
    <div ref={pageRef} className="relative isolate overflow-x-hidden">
      <CustomCursor scopeRef={pageRef} />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <StatsBarSection />
        <FeaturedDishesSection />
        <StorySection />
        <MenuSection />
        <GallerySection />
        <ReservationsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
