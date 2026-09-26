import { ExternalLink, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Lightbox from './Lightbox'

// Native <dialog> like Lightbox: backdrop, focus trap and Esc-to-close for free.
export default function ProjectModal({ project: { title, tags, description, links, images }, onClose }) {
  const ref = useRef(null)
  const [zoom, setZoom] = useState(null)

  useEffect(() => {
    if (!ref.current.open) ref.current.showModal()
  }, [])

  return (
    <>
      <dialog
        ref={ref}
        onClose={onClose}
        onClick={(e) => e.target === ref.current && ref.current.close()}
        className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-2xl bg-white p-0 text-slate-600 shadow-2xl backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm dark:bg-slate-900 dark:text-slate-400"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <small key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600 dark:bg-white/10 dark:text-brand-300">
                    {tag}
                  </small>
                ))}
              </div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
            </div>
            <button
              onClick={() => ref.current.close()}
              aria-label="Close"
              className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
          </div>

          <p className="mt-4 leading-relaxed">{description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
              >
                {label}
                <ExternalLink className="size-4" />
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {images.map(({ title, thumb }, i) => (
              <button
                key={title}
                onClick={() => setZoom(i)}
                aria-label={`Zoom ${title}`}
                className="cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 dark:border-white/10"
              >
                <img src={thumb} alt={title} className="aspect-4/3 w-full object-cover object-top transition-transform duration-500 hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </dialog>

      {zoom !== null && <Lightbox items={images} index={zoom} setIndex={setZoom} onClose={() => setZoom(null)} />}
    </>
  )
}
