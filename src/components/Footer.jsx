import { Link } from 'react-router-dom'
import { footerLinks } from '../data/navigation'

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.path}>
            {link.isExternal || link.path.startsWith('http') ? (
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white/70 transition hover:text-emerald-400"
              >
                <span>{link.label}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            ) : (
              <Link to={link.path} className="text-sm text-white/70 transition hover:text-emerald-400">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-emerald-500/20 bg-[#020d07]/90 text-white backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
        {/* Identitas & deskripsi */}
        <div>
          <div className="flex items-center gap-2.5">
            <svg width="32" height="32" viewBox="0 0 34 34" fill="none" aria-hidden="true">
              <circle cx="17" cy="17" r="17" fill="#3FA66E" />
              <path d="M17 8.5 8.5 14.7v10.8h5.7v-6.4h5.6v6.4h5.7V14.7L17 8.5Z" fill="#FFFFFF" />
            </svg>
            <span className="font-display text-base font-bold">Panti Wira Adhi Karya</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            Menaungi, memberdayakan, dan menghubungkan. Media informasi, promosi karya, serta
            edukasi literasi keuangan bagi penghuni panti di Ungaran.
          </p>
        </div>

        <FooterColumn title="Jelajahi" links={footerLinks.jelajahi} />
        <FooterColumn title="Literasi Keuangan" links={footerLinks.layanan} />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>&copy; {year} Panti Wira Adhi Karya Ungaran. Seluruh hak cipta dilindungi.</p>
          <p>Jl. Kisarino Mangunpranoto . No.39 , Cirebonan, Bandarjo, Kec. Ungaran Barat, Kabupaten Semarang, Jawa Tengah 50517</p>
        </div>
      </div>
    </footer>
  )
}
