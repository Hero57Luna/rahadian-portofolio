import { ArrowRight } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div aria-hidden className="absolute -top-32 -left-32 -z-10 size-[28rem] rounded-full bg-brand-200/70 blur-3xl dark:bg-brand-700/30" />
      <div aria-hidden className="absolute -right-24 bottom-0 -z-10 size-96 rounded-full bg-violet-200/60 blur-3xl dark:bg-violet-700/20" />

      <div className="mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="bg-linear-to-r from-brand-500 to-violet-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl dark:from-brand-300 dark:to-violet-300">
            Hello there!
          </h1>
          <p className="mt-6 text-2xl font-medium text-slate-900 sm:text-3xl dark:text-white">
            Let's take a tour on my portfolio!
          </p>
          <a
            href="#about"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-medium text-white shadow-lg shadow-brand-500/30 transition-colors hover:bg-brand-600"
          >
            Yes, please
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
          <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-brand-500/20 dark:bg-brand-400/20" />
          <img
            src={profile.photo}
            alt={profile.name}
            width="800"
            height="1200"
            fetchPriority="high"
            className="relative aspect-3/4 w-full rounded-3xl object-cover object-top shadow-2xl ring-1 ring-black/5"
          />
        </div>
      </div>
    </section>
  )
}
