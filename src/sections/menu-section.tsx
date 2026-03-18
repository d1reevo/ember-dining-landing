import { startTransition, useRef, useState } from 'react'
import { menuCatalog, menuCategoryLabels } from '../data/site-content'
import { useMenuPanelAnimation } from '../hooks/use-menu-panel-animation'
import type { MenuCategory } from '../types/site'
import { joinClasses } from '../lib/join-classes'

export function MenuSection() {
  const menuPanelRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters')
  const activeMenuItems = menuCatalog[activeCategory]

  useMenuPanelAnimation(menuPanelRef, activeCategory)

  return (
    <section id="menu" className="scroll-mt-32 py-24 sm:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow" data-reveal>
              Our Menu
            </p>
            <h2
              data-section-heading
              className="mt-5 font-heading text-4xl uppercase leading-[1.02] tracking-[0.12em] text-cream sm:text-5xl"
            >
              A progression of smoke, silk, mineral brightness, and deliberate finish.
            </h2>
          </div>
          <p data-reveal className="max-w-xl text-base leading-8 text-cream/66">
            Move through starters, mains, desserts, and cocktails built to hold tension from first
            sip to final spoon.
          </p>
        </div>

        <div className="surface-panel rounded-[2.25rem] p-4 sm:p-6">
          <div className="flex flex-wrap gap-3">
            {Object.keys(menuCatalog).map((category) => {
              const typedCategory = category as MenuCategory

              return (
                <button
                  key={typedCategory}
                  type="button"
                  onClick={() => {
                    startTransition(() => {
                      setActiveCategory(typedCategory)
                    })
                  }}
                  className={joinClasses(
                    'rounded-full border px-4 py-3 font-heading text-[0.68rem] uppercase tracking-[0.22em] transition duration-300 sm:px-6',
                    activeCategory === typedCategory
                      ? 'border-transparent bg-ember text-[#120805] shadow-ember'
                      : 'border-white/10 bg-white/[0.03] text-cream/70 hover:border-gold/35 hover:text-cream',
                  )}
                >
                  {menuCategoryLabels[typedCategory]}
                </button>
              )
            })}
          </div>

          <div
            key={activeCategory}
            ref={menuPanelRef}
            className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5"
          >
            {activeMenuItems.map((item) => (
              <article
                key={item.name}
                data-menu-item
                className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6 transition duration-300 hover:border-ember/30 hover:bg-white/[0.03]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl italic leading-none text-cream">
                      {item.name}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-cream/62">
                      {item.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-label text-[0.76rem] uppercase tracking-[0.22em] text-gold">
                    {item.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
