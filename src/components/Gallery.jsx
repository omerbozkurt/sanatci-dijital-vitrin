import { Play } from 'lucide-react'
import { useLang } from '../LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { MEDIA } from '../i18n'
import SectionHeading from './SectionHeading'

// Asimetrik “bento” benzeri grid: ilk kart geniş.
const spans = [
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-1',
  'sm:col-span-1',
  'sm:col-span-1',
  'sm:col-span-1',
  'sm:col-span-2',
]

export default function Gallery() {
  const { t } = useLang()
  const { ref, shown } = useReveal()

  return (
    <section id="galeri" ref={ref} className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tag={t.gallery.tag}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
          align="center"
        />

        <div
          className={`mt-16 grid auto-rows-[200px] grid-cols-1 gap-5 transition-all duration-1000 sm:grid-cols-4 ${
            shown ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {t.gallery.items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-label={`${t.gallery.play}: ${item.title}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 text-left transition-all duration-500 hover:border-gold-500/40 ${spans[i % spans.length]}`}
            >
              {/* Fotoğraf (örnek/temsili) */}
              <img
                src={MEDIA.gallery[i % MEDIA.gallery.length]}
                alt={`${item.title} — ${item.meta}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/40 to-ink-900/10 transition-colors duration-500 group-hover:from-ink-900/90" />

              {/* Oynat butonu */}
              <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold-500/40 bg-ink-900/40 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-gold-400 group-hover:bg-gold-500/20">
                <span className="absolute inset-0 rounded-full bg-gold-500/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                <Play className="h-6 w-6 translate-x-0.5 text-gold-300" fill="currentColor" />
              </span>

              {/* Etiket */}
              <span className="absolute bottom-0 left-0 right-0 p-5">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-gold-500/90">
                  {item.meta}
                </span>
                <span className="mt-1 block font-display text-xl font-medium text-stone-100">
                  {item.title}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
