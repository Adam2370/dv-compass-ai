export function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'start' ? 'text-start' : 'text-center mx-auto'
  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90 mb-3">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">{title}</h2>
      {subtitle ? <p className="text-slate-400 text-base md:text-lg leading-relaxed">{subtitle}</p> : null}
    </div>
  )
}
