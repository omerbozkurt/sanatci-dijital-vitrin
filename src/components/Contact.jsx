import { useState } from 'react'
import { Send, MessageCircle, Phone, Mail, MapPin, GraduationCap, CalendarHeart } from 'lucide-react'
import { useLang } from '../LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { SANATCI } from '../i18n'
import { waLink } from '../lib/whatsapp'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const { t, lang } = useLang()
  const { ref, shown } = useReveal()
  const [intent, setIntent] = useState('lesson')
  const [form, setForm] = useState({ name: '', phone: '', date: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // Form verisini önceden doldurulmuş bir WhatsApp mesajına dönüştürür.
  const buildMessage = () => {
    const typeLabel = intent === 'lesson' ? t.contact.typeLesson : t.contact.typeEvent
    return [
      `*${t.contact.tag} — ${typeLabel}*`,
      `${t.contact.name}: ${form.name || '-'}`,
      `${t.contact.phone}: ${form.phone || '-'}`,
      `${t.contact.date}: ${form.date || '-'}`,
      `${t.contact.message}: ${form.message || '-'}`,
    ].join('\n')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    window.open(waLink(buildMessage()), '_blank', 'noopener,noreferrer')
  }

  const fieldCls =
    'w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-stone-100 placeholder-stone-500 transition-colors duration-200 focus:border-gold-500/60 focus:outline-none focus:ring-2 focus:ring-gold-500/20'

  const contactRows = [
    { icon: Phone, label: t.contact.directCall, value: '+90 555 111 22 33', href: `tel:+${SANATCI.whatsapp}` },
    { icon: Mail, label: 'E-posta', value: SANATCI.eposta, href: `mailto:${SANATCI.eposta}` },
    { icon: MapPin, label: lang === 'tr' ? 'Konum' : 'Location', value: SANATCI.sehir[lang], href: null },
  ]

  return (
    <section id="iletisim" ref={ref} className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`grid gap-12 transition-all duration-1000 lg:grid-cols-12 ${
            shown ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Sol: bilgi + hızlı kanallar */}
          <div className="lg:col-span-5">
            <SectionHeading tag={t.contact.tag} title={t.contact.title} subtitle={t.contact.subtitle} />

            <div className="mt-9 space-y-3">
              {contactRows.map((row) => {
                const Inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-500/30 bg-ink-700 text-gold-400">
                      <row.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-stone-500">
                        {row.label}
                      </span>
                      <span className="block text-sm font-medium text-stone-200">{row.value}</span>
                    </span>
                  </>
                )
                return row.href ? (
                  <a
                    key={row.value}
                    href={row.href}
                    className="flex cursor-pointer items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-gold-500/30 hover:bg-white/[0.04]"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div
                    key={row.value}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    {Inner}
                  </div>
                )
              })}
            </div>

            <a
              href={waLink(intent === 'lesson' ? t.wa.lessonMsg : t.wa.eventMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 font-bold text-[#06351c] transition-transform duration-300 hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
              {t.contact.whatsapp}
            </a>
          </div>

          {/* Sağ: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="glass rounded-3xl p-7 shadow-card md:p-9"
              noValidate
            >
              {/* Talep türü seçimi */}
              <fieldset>
                <legend className="mb-3 block text-sm font-medium text-stone-300">
                  {t.contact.typeLabel}
                </legend>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'lesson', label: t.contact.typeLesson, icon: GraduationCap },
                    { id: 'event', label: t.contact.typeEvent, icon: CalendarHeart },
                  ].map((opt) => {
                    const active = intent === opt.id
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setIntent(opt.id)}
                        aria-pressed={active}
                        className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                          active
                            ? 'border-gold-500/60 bg-gold-500/15 text-gold-300'
                            : 'border-white/10 bg-ink-900/40 text-stone-400 hover:border-white/20 hover:text-stone-200'
                        }`}
                      >
                        <opt.icon className="h-4 w-4" strokeWidth={2} />
                        {opt.label}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className="mb-2 block text-sm font-medium text-stone-300">
                    {t.contact.name}
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    placeholder={t.contact.namePh}
                    className={fieldCls}
                  />
                </div>
                <div>
                  <label htmlFor="cf-phone" className="mb-2 block text-sm font-medium text-stone-300">
                    {t.contact.phone}
                  </label>
                  <input
                    id="cf-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder={t.contact.phonePh}
                    className={fieldCls}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="cf-date" className="mb-2 block text-sm font-medium text-stone-300">
                  {t.contact.date}
                </label>
                <input
                  id="cf-date"
                  type="date"
                  value={form.date}
                  onChange={update('date')}
                  className={`${fieldCls} [color-scheme:dark]`}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="cf-msg" className="mb-2 block text-sm font-medium text-stone-300">
                  {t.contact.message}
                </label>
                <textarea
                  id="cf-msg"
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder={t.contact.messagePh}
                  className={`${fieldCls} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-7 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-gold-grad px-6 py-4 text-base font-bold text-ink-900 shadow-glow transition-transform duration-300 hover:scale-[1.02]"
              >
                <Send className="h-5 w-5" strokeWidth={2} />
                {t.contact.submit}
              </button>

              {sent && (
                <p
                  role="status"
                  className="mt-4 rounded-xl border border-gold-500/30 bg-gold-500/10 px-4 py-3 text-center text-sm text-gold-300"
                >
                  {t.contact.success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
