import { Mail, Phone, Send } from 'lucide-react'
import { profile } from '../data'
import Section from './Section'

const card = 'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5'

const contacts = [
  [Mail, 'Email', profile.email, `mailto:${profile.email}`],
  [Phone, 'Call', profile.phone, `tel:${profile.phoneHref}`],
]

// No backend: hand the message to the visitor's email app.
function send(e) {
  e.preventDefault()
  const body = new FormData(e.currentTarget).get('message')
  const subject = 'Hello from your portfolio'
  location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  return (
    <Section id="contact" title="Say Hi">
      <div className="grid gap-10 lg:grid-cols-2">
        <ul className="reveal space-y-4">
          {contacts.map(([Icon, label, value, href]) => (
            <li key={label}>
              <a href={href} className={`${card} flex items-center gap-4 transition hover:border-brand-300 dark:hover:border-brand-400/50`}>
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-white/10 dark:text-brand-300">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-slate-500">{label}</span>
                  <span className="block break-words font-medium text-slate-900 dark:text-white">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <form onSubmit={send} className={`${card} reveal p-6`}>
          <label htmlFor="message" className="mb-3 block font-medium text-slate-900 dark:text-white">
            Send me a message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Hey! I would like to offer you a job..."
            className="w-full resize-y rounded-xl border border-slate-200 bg-transparent p-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-white/10 dark:text-white"
          />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-slate-500">Opens your email app with the message ready to send.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-2.5 font-medium text-white transition-colors hover:bg-brand-600"
            >
              Send <Send className="size-4" />
            </button>
          </div>
        </form>
      </div>
    </Section>
  )
}
