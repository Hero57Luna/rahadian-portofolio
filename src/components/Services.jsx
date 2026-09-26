import { services } from '../data'
import Section from './Section'

export default function Services() {
  return (
    <Section id="services" title="Services">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, logo, darkInvert, description }) => (
          <article
            key={title}
            className="reveal group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400/50"
          >
            <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
              <img src={logo} alt="" className={`h-10 w-auto ${darkInvert ? 'dark:invert' : ''}`} />
            </div>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
