import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useLang } from '../LanguageContext'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function FAQ() {
  const { t } = useLang()
  const { ref, shown } = useReveal()
  const [open, setOpen] = useState(0)

  // İçerikten FAQPage yapısal verisi (SEO: zengin sonuç fırsatı)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.list.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <section id="sss" ref={ref} className="relative scroll-mt-24 py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          tag={t.faq.tag}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
          align="center"
        />

        <div
          className={`mt-14 space-y-4 transition-all duration-1000 ${
            shown ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {t.faq.list.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? 'border-gold-500/40 bg-white/[0.05]'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-medium text-stone-100">
                      {item.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold-500/40 text-gold-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-gold-500/15' : ''
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-stone-400">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
