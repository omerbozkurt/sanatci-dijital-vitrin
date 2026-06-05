import { GraduationCap, CalendarHeart, Check, ArrowUpRight } from 'lucide-react'
import { useLang } from '../LanguageContext'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

function ServiceCard({ icon: Icon, badge, title, desc, items, cta, featured, popular, delay }) {
  return (
    <article
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 md:p-10 ${
        featured
          ? 'border border-gold-500/40 bg-gradient-to-b from-night-900/60 to-ink-700/60 shadow-glow'
          : 'glass shadow-card hover:border-gold-500/30'
      }`}
    >
      {/* Hover ışıltı */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {popular && (
        <span className="absolute right-6 top-6 rounded-full bg-gold-grad px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink-900">
          {popular}
        </span>
      )}

      <span
        className={`grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-105 ${
          featured ? 'bg-gold-grad text-ink-900' : 'border border-gold-500/30 bg-ink-700 text-gold-400'
        }`}
      >
        <Icon className="h-7 w-7" strokeWidth={1.75} />
      </span>

      <span className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500/80">
        {badge}
      </span>
      <h3 className="mt-2 font-display text-3xl font-semibold text-stone-100">{title}</h3>
      <p className="mt-3 text-stone-400">{desc}</p>

      <ul className="mt-7 space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-stone-300">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400">
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <a
        href="#iletisim"
        className={`mt-9 flex cursor-pointer items-center justify-between gap-2 rounded-2xl px-6 py-4 text-base font-bold transition-all duration-300 ${
          featured
            ? 'bg-gold-grad text-ink-900 hover:scale-[1.02]'
            : 'border border-gold-500/40 text-gold-300 hover:bg-gold-500/10'
        }`}
      >
        {cta}
        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </article>
  )
}

export default function Services() {
  const { t } = useLang()
  const { ref, shown } = useReveal()

  return (
    <section id="hizmetler" ref={ref} className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tag={t.services.tag}
          title={t.services.title}
          subtitle={t.services.subtitle}
          align="center"
        />

        <div
          className={`mt-16 grid gap-7 transition-all duration-1000 lg:grid-cols-2 ${
            shown ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <ServiceCard
            icon={GraduationCap}
            badge={t.services.lesson.badge}
            title={t.services.lesson.title}
            desc={t.services.lesson.desc}
            items={t.services.lesson.items}
            cta={t.services.lesson.cta}
            popular={t.services.popular}
            featured
            delay={0}
          />
          <ServiceCard
            icon={CalendarHeart}
            badge={t.services.event.badge}
            title={t.services.event.title}
            desc={t.services.event.desc}
            items={t.services.event.items}
            cta={t.services.event.cta}
            delay={120}
          />
        </div>
      </div>
    </section>
  )
}
