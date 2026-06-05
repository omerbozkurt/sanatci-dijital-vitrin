import { MessageCircle } from 'lucide-react'
import { useLang } from '../LanguageContext'
import { waLink } from '../lib/whatsapp'

// Sağ altta sabit, hızlı erişimli WhatsApp butonu.
export default function WhatsAppButton() {
  const { t } = useLang()
  return (
    <a
      href={waLink(t.wa.lessonMsg)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile hızlı iletişim"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#06351c] shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_40px_-8px_rgba(37,211,102,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 blur-md transition-opacity group-hover:opacity-90" />
      <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
