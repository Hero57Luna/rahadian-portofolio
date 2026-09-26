import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm dark:border-white/10">
      <p>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <p className="mt-1">
        Original template design by{' '}
        <a
          href="https://templatemo.com/tm-578-first-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-brand-500 dark:hover:text-brand-300"
        >
          TemplateMo
        </a>
      </p>
    </footer>
  )
}
