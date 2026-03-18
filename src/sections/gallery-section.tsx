import { galleryImages } from '../data/site-content'
import { joinClasses } from '../lib/join-classes'

export function GallerySection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow" data-reveal>
              Experience the Atmosphere
            </p>
            <h2
              data-section-heading
              className="mt-5 font-heading text-4xl uppercase leading-[1.02] tracking-[0.12em] text-cream sm:text-5xl"
            >
              Firelight, shadow, polished glass, and a room designed to keep you leaning in.
            </h2>
          </div>
          <p data-reveal className="max-w-xl text-base leading-8 text-cream/66">
            The space is intimate without feeling hushed, built around low light, warm metals, and
            the kind of energy that sharpens appetite.
          </p>
        </div>

        <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
          {galleryImages.map((image) => (
            <article
              key={image.title}
              data-reveal
              className="group relative mb-6 break-inside-avoid overflow-hidden rounded-[2rem] border border-white/10 bg-surface"
            >
              <img
                src={image.image}
                alt={image.title}
                className={joinClasses(
                  'w-full object-cover transition duration-700 group-hover:scale-105',
                  image.heightClass,
                )}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.08)_0%,rgba(13,13,13,0.88)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(232,87,26,0.1)_0%,rgba(13,13,13,0.8)_100%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <p className="font-display text-3xl italic text-cream">{image.title}</p>
                <span className="rounded-full border border-ember/25 bg-black/40 px-3 py-1 font-label text-[0.56rem] uppercase tracking-[0.28em] text-ember">
                  Ember
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
