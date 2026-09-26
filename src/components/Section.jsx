// Shared frame for the titled sections: anchor offset for the fixed navbar, container, heading.
export default function Section({ id, title, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-16 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-brand-500 dark:bg-brand-400" />
        </div>
        {children}
      </div>
    </section>
  )
}
