export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className="mb-2 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300 border border-emerald-500/30">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-emerald-100/80">{subtitle}</p>}
    </div>
  )
}
