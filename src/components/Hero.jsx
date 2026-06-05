import { GraduationCap, CalendarHeart, ArrowDown, BadgeCheck, ShieldCheck } from 'lucide-react'
import { useLang } from '../LanguageContext'
import { MEDIA } from '../i18n'

export default function Hero() {
  const { t } = useLang()

  const stats = [
    { value: '12+', label: t.hero.stat1 },
    { value: '350+', label: t.hero.stat2 },
    { value: '400+', label: t.hero.stat3 },
  ]

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 md:pt-40"
      aria-label={t.hero.kicker}
    >
      {/* Atmosfer: degrade meşesi + ince gril desen */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-night-500/30 blur-[120px]" />
        <div className="absolute right-[8%] top-[30%] h-72 w-72 rounded-full bg-copper-500/15 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(circle at 50% 30%, black, transparent 75%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* Sol: söz + CTA */}
          <div className="lg:col-span-7">
            {/* Otorite rozeti — doğrudan güven inşası */}
            <div
              className="glass mb-7 inline-flex animate-fade-up items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 opacity-0"
              style={{ animationDelay: '80ms' }}
            >
              <BadgeCheck className="h-4 w-4 text-gold-500" strokeWidth={2} />
              {t.hero.kicker}
            </div>

            <h1
              className="animate-fade-up font-display text-5xl font-semibold leading-[1.02] tracking-tight text-stone-100 opacity-0 sm:text-6xl md:text-7xl"
              style={{ animationDelay: '180ms' }}
            >
              {t.hero.titleA}{' '}
              <span className="relative whitespace-nowrap text-gradient-gold">
                {t.hero.titleB}
                <svg
                  className="absolute -bottom-3 left-0 h-3 w-full text-gold-500/60"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C40 3 160 3 198 9"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br className="hidden sm:block" /> {t.hero.titleC}
            </h1>

            <p
              className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-stone-400 opacity-0"
              style={{ animationDelay: '280ms' }}
            >
              {t.hero.desc}
            </p>

            {/* İki belirgin CTA — zıtlık ilkesi (dolu altın vs. ince çerçeve) */}
            <div
              className="mt-10 flex animate-fade-up flex-col gap-4 opacity-0 sm:flex-row"
              style={{ animationDelay: '380ms' }}
            >
              <a
                href="#iletisim"
                data-intent="lesson"
                className="group flex cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-gold-grad px-7 py-4 text-base font-bold text-ink-900 shadow-glow transition-transform duration-300 hover:scale-[1.03]"
              >
                <GraduationCap className="h-5 w-5" strokeWidth={2} />
                {t.hero.ctaLesson}
              </a>
              <a
                href="#iletisim"
                data-intent="event"
                className="group flex cursor-pointer items-center justify-center gap-2.5 rounded-2xl border border-gold-500/40 bg-white/[0.03] px-7 py-4 text-base font-bold text-stone-100 backdrop-blur-md transition-colors duration-300 hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-300"
              >
                <CalendarHeart className="h-5 w-5 text-gold-400" strokeWidth={2} />
                {t.hero.ctaEvent}
              </a>
            </div>

            {/* Güven mikro-kopisi — risk azaltıcı */}
            <p
              className="mt-5 flex animate-fade-up items-center gap-2 text-sm text-stone-500 opacity-0"
              style={{ animationDelay: '440ms' }}
            >
              <ShieldCheck className="h-4 w-4 text-gold-500/80" strokeWidth={2} />
              {t.hero.trust}
            </p>

            {/* İstatistikler — sosyal kanıt */}
            <dl
              className="mt-14 grid max-w-lg animate-fade-up grid-cols-3 gap-6 opacity-0"
              style={{ animationDelay: '480ms' }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-4xl font-semibold text-gradient-gold">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-stone-500">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Sağ: asimetrik görsel kart */}
          <div className="lg:col-span-5">
            <figure
              className="relative mx-auto max-w-md animate-fade-in opacity-0"
              style={{ animationDelay: '300ms' }}
            >
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-gold-500/20 via-transparent to-night-500/30 blur-2xl" />
              <div className="glass relative overflow-hidden rounded-[2rem] p-2 shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-ink-900">
                  <img
                    src={MEDIA.hero}
                    alt="Bağlama (saz) icrası — yakın çekim, sıcak sahne ışığı"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-display text-2xl italic text-stone-100">Bağlama</p>
                    <p className="text-sm text-gold-400/90">Türk Halk Müziği</p>
                  </figcaption>
                </div>
              </div>

            </figure>
          </div>
        </div>

        {/* Aşağı kaydır göstergesi */}
        <a
          href="#hakkimda"
          className="mx-auto mt-6 flex w-fit animate-fade-in flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-stone-500 opacity-0 transition-colors hover:text-gold-400"
          style={{ animationDelay: '700ms' }}
        >
          {t.hero.scroll}
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
