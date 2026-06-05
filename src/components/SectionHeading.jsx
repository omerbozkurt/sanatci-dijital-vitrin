// Bölüm başlıkları için tutarlı, premium başlık bloğu.
export default function SectionHeading({ tag, title, subtitle, align = 'left' }) {
  const center = align === 'center'
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 ${
          center ? 'justify-center' : ''
        }`}
      >
        <span className="h-px w-8 bg-gold-500/60" />
        {tag}
      </span>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-stone-100 md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-stone-400">{subtitle}</p>}
    </div>
  )
}
