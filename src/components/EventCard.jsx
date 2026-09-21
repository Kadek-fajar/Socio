import { Link } from 'react-router-dom'
import { formatTanggal } from '../utils/format'

export default function EventCard({ event, layout = 'vertical' }) {
  const date = new Date(event.tanggal)
  const day = date.toLocaleDateString('id-ID', { day: '2-digit' })
  const month = date.toLocaleDateString('id-ID', { month: 'short' })

  if (layout === 'full' || layout === 'horizontal') {
    return (
      <Link
        to="/event"
        className="group flex w-full flex-col overflow-hidden rounded-2xl border border-emerald-200/80 bg-white text-slate-900 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400 hover:shadow-2xl md:flex-row"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 md:aspect-auto md:w-1/2 lg:w-5/12">
          <img
            src={event.gambar}
            alt={event.judul}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute left-4 top-4 flex w-16 flex-col items-center rounded-xl bg-emerald-600 px-2 py-2 shadow-lg text-white">
            <span className="font-display text-2xl font-black leading-none">{day}</span>
            <span className="text-xs font-bold uppercase tracking-wide opacity-90">{month}</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-2.5 p-6 sm:p-8 bg-white">
          <span className="inline-block w-fit rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
            Agenda Mendatang
          </span>
          <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition sm:text-2xl">
            {event.judul}
          </h3>
          <p className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 text-emerald-600">
              <path
                d="M10 18s6-5.2 6-9.6A6 6 0 0 0 4 8.4C4 12.8 10 18 10 18Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="10" cy="8.4" r="2" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {event.lokasi} &middot; {formatTanggal(event.tanggal)}
          </p>
          <p className="text-sm leading-relaxed text-slate-600">{event.ringkasan}</p>
          <div className="mt-2 flex items-center gap-2 text-sm font-bold text-emerald-600 group-hover:text-emerald-700">
            <span>Lihat Detail Event</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="transition group-hover:translate-x-1">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to="/event"
      className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-200/80 bg-white text-slate-900 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400 hover:shadow-2xl"
    >
      <div className="relative aspect-[5/3] w-full overflow-hidden bg-slate-100">
        <img
          src={event.gambar}
          alt={event.judul}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 flex w-14 flex-col items-center rounded-lg bg-emerald-600 py-1.5 shadow-lg text-white">
          <span className="font-display text-lg font-bold leading-none">{day}</span>
          <span className="text-[11px] font-semibold uppercase opacity-90">{month}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4 bg-white">
        <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition sm:text-base">
          {event.judul}
        </h3>
        <p className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 text-emerald-600">
            <path
              d="M10 18s6-5.2 6-9.6A6 6 0 0 0 4 8.4C4 12.8 10 18 10 18Z"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <circle cx="10" cy="8.4" r="2" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          {event.lokasi}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">{event.ringkasan}</p>
        <p className="mt-1 text-xs font-medium text-slate-400">{formatTanggal(event.tanggal)}</p>
      </div>
    </Link>
  )
}
