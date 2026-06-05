import { useEffect, useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLang } from '../LanguageContext'
import Logo from './Logo'

export default function Header() {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#hakkimda', label: t.nav.about },
    { href: '#hizmetler', label: t.nav.services },
    { href: '#galeri', label: t.nav.gallery },
    { href: '#referanslar', label: t.nav.testimonials },
    { href: '#sss', label: t.nav.faq },
    { href: '#iletisim', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-900/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Ana menü"
      >
        {/* Marka / Logo */}
        <Logo />

        {/* Masaüstü menü */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-stone-300 transition-colors hover:text-gold-400 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Sağ aksiyonlar */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Dili değiştir / Switch language"
            className="flex cursor-pointer items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-stone-200 transition-colors hover:border-gold-500/40 hover:text-gold-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60"
          >
            <Globe className="h-4 w-4" strokeWidth={1.75} />
            <span className={lang === 'tr' ? 'text-gold-400' : ''}>TR</span>
            <span className="text-stone-500">/</span>
            <span className={lang === 'en' ? 'text-gold-400' : ''}>EN</span>
          </button>

          <a
            href="#iletisim"
            className="hidden cursor-pointer rounded-full bg-gold-grad px-5 py-2.5 text-sm font-bold text-ink-900 shadow-glow transition-transform duration-300 hover:scale-[1.03] sm:inline-block"
          >
            {t.nav.cta}
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl border border-white/10 bg-white/5 text-stone-200 transition-colors hover:text-gold-400 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobil menü */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-ink-900/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-stone-200 transition-colors hover:bg-white/5 hover:text-gold-400"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#iletisim"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-gold-grad px-4 py-3 text-center text-base font-bold text-ink-900"
            >
              {t.nav.cta}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
