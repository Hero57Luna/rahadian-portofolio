import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

// Native <dialog>: gives us the backdrop, focus trap and Esc-to-close for free.
export default function Lightbox({ items, index, setIndex, onClose }) {
  const ref = useRef(null)
  const item = items[index]
  const go = (step) => setIndex((index + step + items.length) % items.length)

  useEffect(() => {
    if (!ref.current.open) ref.current.showModal()
  }, [])

  const button =
    'absolute grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20'

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(-1)
        if (e.key === 'ArrowRight') go(1)
      }}
      className="m-0 h-dvh max-h-none w-dvw max-w-none bg-transparent p-0 text-white backdrop:bg-slate-950/85 backdrop:backdrop-blur-sm"
    >
      <div
        className="flex h-full flex-col items-center justify-center gap-4 px-16 py-6"
        onClick={(e) => e.target === e.currentTarget && ref.current.close()}
      >
        <img src={item.image} alt={item.title} className="max-h-[80dvh] max-w-full rounded-lg object-contain shadow-2xl" />
        <p className="font-medium">
          {item.title} · {item.tag} <span className="text-white/60">{index + 1}/{items.length}</span>
        </p>
      </div>

      <button onClick={() => ref.current.close()} className={`${button} top-4 right-4`} aria-label="Close">
        <X className="size-5" />
      </button>
      <button onClick={() => go(-1)} className={`${button} top-1/2 left-3 -translate-y-1/2`} aria-label="Previous">
        <ChevronLeft className="size-6" />
      </button>
      <button onClick={() => go(1)} className={`${button} top-1/2 right-3 -translate-y-1/2`} aria-label="Next">
        <ChevronRight className="size-6" />
      </button>
    </dialog>
  )
}
