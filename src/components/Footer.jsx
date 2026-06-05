import { Instagram, Youtube, Phone } from 'lucide-react'
import { useLang } from '../LanguageContext'
import { SANATCI } from '../i18n'
import Logo from './Logo'

export default function Footer() {
  const { t, lang } = useLang()
  const year = new Date().getFullYear()

  const navLinks = [
    { href: '#hakkimda', label: t.nav.about },
    { href: '#hizmetler', label: t.nav.services },
    { href: '#galeri', label: t.nav.gallery },
    { href: '#referanslar', label: t.nav.testimonials },
    { href: '#sss', label: t.nav.faq },
    { href: '#iletisim', label: t.nav.contact },
  ]

  const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Phone, href: `tel:+${SANATCI.whatsapp}`, label: 'Telefon' },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-ink-900/60">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Marka */}
          <div className="md:col-span-6">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-stone-300 transition-colors duration-300 hover:border-gold-500/40 hover:text-gold-400"
                >
                  <s.icon className="h-5 w-5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Sayfa linkleri */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500/80">
              {t.footer.nav}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-stone-400 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500/80">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-stone-400">
              <li>
                <a href={`mailto:${SANATCI.eposta}`} className="transition-colors hover:text-gold-400">
                  {SANATCI.eposta}
                </a>
              </li>
              <li>
                <a href={`tel:+${SANATCI.whatsapp}`} className="transition-colors hover:text-gold-400">
                  +90 555 111 22 33
                </a>
              </li>
              <li>{SANATCI.sehir[lang]}</li>
            </ul>
          </div>
        </div>

        <div className="my-10 hairline" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-stone-500 sm:flex-row">
          <p>
            © {year} {SANATCI.isim}. {t.footer.rights}
          </p>
          <p className="text-stone-600">{t.footer.made}</p>
        </div>
      </div>
    </footer>
  )
}
