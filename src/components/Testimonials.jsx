import { Star, Quote } from 'lucide-react'
import { useLang } from '../LanguageContext'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  const { t } = useLang()
  const { ref, shown } = useReveal()

  return (
    <section
      id="referanslar"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading tag={t.testimonials.tag} title={t.testimonials.title} align="center" />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.testimonials.list.map((item, i) => (
            <figure
              key={item.name}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-700 hover:-translate-y-1.5 hover:border-gold-500/30 hover:bg-white/[0.05] ${
                shown ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Quote className="h-9 w-9 text-gold-500/40" strokeWidth={1.5} fill="currentColor" />

              <div className="mt-4 flex gap-1" aria-label="5 üzerinden 5 yıldız">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 text-gold-500" fill="currentColor" />
                ))}
              </div>

              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-stone-300">
                {item.quote}
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-grad font-display text-lg font-semibold text-ink-900">
                  {item.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-stone-100">{item.name}</span>
                  <span className="block text-xs text-gold-500/80">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
