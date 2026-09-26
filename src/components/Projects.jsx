import { Eye } from 'lucide-react'
import { useState } from 'react'
import { projects } from '../data'
import ProjectModal from './ProjectModal'
import Section from './Section'

export default function Projects() {
  const [current, setCurrent] = useState(null)

  return (
    <Section id="projects" title="Projects" className="bg-slate-50 dark:bg-white/[0.03]">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="reveal group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl has-focus-visible:ring-2 has-focus-visible:ring-brand-500 dark:border-white/10 dark:bg-white/5"
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <img src={project.thumb} alt="" className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 grid place-items-center bg-slate-950/0 text-white opacity-0 transition group-hover:bg-slate-950/40 group-hover:opacity-100">
                <Eye className="size-8" />
              </span>
            </div>

            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <small key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600 dark:bg-white/10 dark:text-brand-300">
                    {tag}
                  </small>
                ))}
              </div>
              <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                {/* after: stretches the button over the whole card, so the card is one click target and one tab stop */}
                <button
                  onClick={() => setCurrent(project)}
                  className="cursor-pointer text-left after:absolute after:inset-0 focus:outline-none"
                >
                  {project.title}
                </button>
              </h3>
            </div>
          </article>
        ))}
      </div>

      {current && <ProjectModal project={current} onClose={() => setCurrent(null)} />}
    </Section>
  )
}
