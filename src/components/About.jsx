import { CheckCircle2 } from 'lucide-react'
import { useLang } from '../LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { SANATCI, MEDIA } from '../i18n'
import SectionHeading from './SectionHeading'

export default function About() {
  const { t } = useLang()
  const { ref, shown } = useReveal()

  return (
    <section
      id="hakkimda"
      ref={ref}
      className={`relative scroll-mt-24 py-24 transition-all duration-1000 md:py-32 ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Sol: portre kompozisyonu (asimetrik) */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-gold-500/50" />
              <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-br-3xl border-b-2 border-r-2 border-gold-500/50" />
              <div className="glass overflow-hidden rounded-3xl shadow-card">
                <div className="relative aspect-[4/5] bg-ink-900">
                  <img
                    src={MEDIA.portrait}
                    alt={`${SANATCI.isim} — konservatuvar mezunu bağlama sanatçısı, stüdyoda bağlama çalarken`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-transparent p-7 pt-16">
                    <p className="font-display text-xl italic leading-snug text-stone-100">
                      {t.about.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ: biyografi + akademik vurgular */}
          <div className="lg:col-span-7">
            <SectionHeading tag={t.about.tag} title={t.about.title} />

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-stone-400">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <div className="my-8 hairline" />

            <ul className="grid gap-4 sm:grid-cols-2">
              {t.about.points.map((point) => (
                <li
                  key={point}
                  className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-gold-500/30 hover:bg-white/[0.04]"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold-500 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={2}
                  />
                  <span className="text-sm leading-snug text-stone-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
