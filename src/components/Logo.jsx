import { useLang } from '../LanguageContext'
import { SANATCI } from '../i18n'

// Markayı bir logo gibi sunan, yeniden kullanılabilir bileşen.
// size: 'sm' (header/footer) | 'lg' (gerekirse büyük kullanım)
export default function Logo({ size = 'sm', href = '#hero', className = '' }) {
  const { lang } = useLang()
  const [ad, soyad] = SANATCI.isim.split(' ')
  const box = size === 'lg' ? 'h-14 w-14' : 'h-11 w-11'
  const nameSize = size === 'lg' ? 'text-2xl' : 'text-lg'

  return (
    <a href={href} className={`group flex items-center gap-3 ${className}`} aria-label={SANATCI.isim}>
      {/* Logo görseli — arka plansız (şeffaf) PNG, doğrudan koyu zeminde */}
      <span className={`relative shrink-0 ${box}`}>
        <span className="absolute inset-0 rounded-full bg-gold-500/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
        <img
          src="/logo.png"
          alt={`${SANATCI.isim} logosu — bağlama`}
          className="relative h-full w-full object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-105"
          width="56"
          height="56"
          loading="eager"
          decoding="async"
        />
      </span>

      {/* İsim — display fontta, soyad altın vurgulu */}
      <span className="leading-tight">
        <span className={`block font-display font-semibold tracking-wide text-stone-100 ${nameSize}`}>
          {ad} <span className="text-gradient-gold">{soyad}</span>
        </span>
        <span className="block text-[10px] uppercase tracking-[0.28em] text-gold-500/80">
          {SANATCI.unvan[lang]}
        </span>
      </span>
    </a>
  )
}
