import { accent, heading, muted } from '../theme/ui'

export function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'start' ? 'text-start' : 'text-center mx-auto'
  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow ? <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${accent}`}>{eyebrow}</p> : null}
      <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight mb-4 ${heading}`}>{title}</h2>
      {subtitle ? <p className={`${muted} text-base md:text-lg leading-relaxed`}>{subtitle}</p> : null}
    </div>
  )
}
