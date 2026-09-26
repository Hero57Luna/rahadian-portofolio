import { about, profile, stats } from '../data'
import Section from './Section'

const card = 'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5'
const link = 'text-brand-600 hover:underline dark:text-brand-300'

export default function About() {
  const info = [
    ['Name', profile.fullName],
    ['Birthday', profile.birthday],
    ['Phone', <a key="tel" href={`tel:${profile.phoneHref}`} className={link}>{profile.phone}</a>],
    ['Email', <a key="mail" href={`mailto:${profile.email}`} className={link}>{profile.email}</a>],
  ]

  return (
    <Section id="about" title="Who am I" className="bg-slate-50 dark:bg-white/[0.03]">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="reveal space-y-4 leading-relaxed">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">a little bit about me</h3>
          {about.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <div className="reveal space-y-6">
          <div className={card}>
            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">Information</h3>
            <dl className="divide-y divide-slate-100 dark:divide-white/10">
              {info.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
                  <dt className="w-24 shrink-0 text-sm font-medium text-slate-500">{label}</dt>
                  <dd className="break-words text-slate-900 dark:text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map(([value, label]) => (
              <div key={label} className={card}>
                <strong className="text-4xl font-bold text-brand-500 dark:text-brand-300">{value}</strong>
                <p className="mt-1 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
