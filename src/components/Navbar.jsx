import { Menu, Moon, Phone, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { nav, profile } from '../data'

const ids = nav.map(([, id]) => id)

// Highlights the link of the section crossing a thin band in the middle of the viewport.
function useActiveSection() {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => observer.observe(document.getElementById(id)))
    return () => observer.disconnect()
  }, [])

  return active
}

export default function Navbar() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  function toggleTheme() {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.theme = next ? 'dark' : 'light'
    } catch {
      // storage blocked: the theme still applies for this visit
    }
    setDark(next)
  }

  const linkClass = (id) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      active === id
        ? 'bg-brand-50 text-brand-600 dark:bg-white/10 dark:text-brand-300'
        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
    }`

  const iconButton =
    'grid size-10 place-items-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10'

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg dark:border-white/10 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-lg font-bold text-slate-900 dark:text-white">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={`tel:${profile.phoneHref}`}
            className="mr-2 hidden items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600 lg:inline-flex"
          >
            <Phone className="size-4" /> {profile.phone}
          </a>
          <button onClick={toggleTheme} className={iconButton} aria-label="Toggle dark mode">
            {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className={`${iconButton} md:hidden`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-slate-200/70 px-4 py-3 md:hidden dark:border-white/10">
          {nav.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className={`block ${linkClass(id)}`}>
                {label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={`tel:${profile.phoneHref}`}
              className="flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white"
            >
              <Phone className="size-4" /> {profile.phone}
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
