import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { mainNav } from '../data/navigation'
import StoreAwning from './StoreAwning'

// Logo sederhana: rumah + tangan terbuka, melambangkan naungan & kepedulian
function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" onClick={() => window.scrollTo(0, 0)}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <circle cx="17" cy="17" r="17" fill="#10B981" />
        <path
          d="M17 8.5 8.5 14.7v10.8h5.7v-6.4h5.6v6.4h5.7V14.7L17 8.5Z"
          fill="#FFFFFF"
        />
        <path d="M11 24.5c1.7 1.6 3.8 2.5 6 2.5s4.3-.9 6-2.5" stroke="#34D399" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </svg>
      <span className="font-display text-base font-bold leading-tight text-white sm:text-lg">
        Panti Wira Adhi Karya
        <span className="block text-xs font-medium text-emerald-300">Ungaran</span>
      </span>
    </Link>
  )
}

function DropdownItem({ item }) {
  const [open, setOpen] = useState(false)
  const [activeSubMenu, setActiveSubMenu] = useState(null)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false)
        setActiveSubMenu(null)
      }}
    >
      <NavLink
        to={item.path}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition ${
            isActive
              ? 'bg-emerald-500/40 text-white font-semibold shadow-inner'
              : 'text-emerald-100/90 hover:bg-emerald-500/30 hover:text-white'
          }`
        }
      >
        <span>{item.label}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </NavLink>

      {open && (
        <div className="absolute left-0 top-full pt-1.5 z-50 w-72">
          <div className="rounded-2xl border border-emerald-500/40 bg-[#063825] p-2 shadow-2xl backdrop-blur-md space-y-1">
            {item.children.map((child) => {
              if (child.subChildren) {
                const isSubOpen = activeSubMenu === child.label
                return (
                  <div
                    key={child.path}
                    className="relative"
                    onMouseEnter={() => setActiveSubMenu(child.label)}
                  >
                    <NavLink
                      to={child.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm transition ${
                          isActive || isSubOpen
                            ? 'bg-emerald-500/40 text-white font-semibold'
                            : 'text-emerald-100/90 hover:bg-emerald-500/30 hover:text-white'
                        }`
                      }
                    >
                      <div className="flex items-center gap-2">
                        <span>{child.label}</span>
                        <span className="rounded-full bg-emerald-950/80 px-2 py-0.5 text-[10px] text-emerald-300 border border-emerald-500/30">
                          Vol.1 & 2
                        </span>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="opacity-70">
                        <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </NavLink>

                    {/* Sub-menu flyout untuk Vol.1 & Vol.2 */}
                    {isSubOpen && (
                      <div className="absolute left-full top-0 ml-1.5 w-60 rounded-xl border border-emerald-500/40 bg-[#07442d] p-2 shadow-2xl backdrop-blur-md animate-fade-in">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 px-3 py-1 mb-1 border-b border-emerald-500/20">
                          Pilih Volume {child.label}
                        </div>
                        {child.subChildren.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              `block rounded-lg px-3 py-2 text-sm transition ${
                                isActive
                                  ? 'bg-emerald-400 text-slate-950 font-bold'
                                  : 'text-emerald-100 hover:bg-emerald-500/40 hover:text-white'
                              }`
                            }
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return child.isExternal || child.path.startsWith('http') ? (
                <a
                  key={child.path}
                  href={child.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm text-emerald-100/90 transition hover:bg-emerald-500/30 hover:text-white"
                >
                  <span>{child.label}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ) : (
                <NavLink
                  key={child.path}
                  to={child.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-3.5 py-2.5 text-sm transition ${
                      isActive
                        ? 'bg-emerald-500/40 text-white font-semibold'
                        : 'text-emerald-100/90 hover:bg-emerald-500/30 hover:text-white'
                    }`
                  }
                >
                  {child.label}
                </NavLink>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(null)
  const [mobileChildSubOpen, setMobileChildSubOpen] = useState(null)

  return (
    <header className="sticky top-0 z-40 bg-[#021810] text-white shadow-2xl border-b border-emerald-500/40 select-none">
      {/* 1. KANOPI TOKO VEKTOR (STORE AWNING ROOF) DI BAGIAN PALING ATAS HEADER */}
      <div className="w-full overflow-hidden leading-none pointer-events-none select-none bg-[#01120b]">
        <StoreAwning className="pointer-events-none" />
      </div>

      {/* 2. BARISAN KONTEN MENU NAVIGASI BERKONTRAS TINGGI TANPA TABRAKAN TEKS */}
      <div className="bg-[#063825]/95 backdrop-blur-md border-t border-emerald-500/30 py-2 sm:py-2.5">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Logo />

          {/* Menu desktop */}
          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) =>
              item.children ? (
                <DropdownItem key={item.path} item={item} />
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-full px-3.5 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-emerald-500/40 text-white font-semibold shadow-inner'
                        : 'text-emerald-100/90 hover:bg-emerald-500/30 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          {/* Aksi kanan desktop: 1 Menu Utama "Dukung Panti" */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/dukung-kami"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-400/30 ring-2 ring-emerald-300 transition-all duration-300 hover:bg-emerald-300 hover:scale-105 hover:shadow-emerald-400/50"
            >
              <span>🤝</span>
              <span>Dukung Panti</span>
            </Link>
          </div>

          {/* Tombol menu mobile */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-emerald-200 hover:text-white lg:hidden"
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Panel menu mobile */}
      {mobileOpen && (
        <nav className="relative z-20 border-t border-emerald-500/20 bg-[#072d1f]/98 backdrop-blur-md px-5 pb-5 pt-2 text-white lg:hidden max-h-[85vh] overflow-y-auto">
          <ul className="flex flex-col divide-y divide-emerald-500/10">
            {mainNav.map((item) => (
              <li key={item.path} className="py-1">
                {item.children ? (
                  <div>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-sm font-medium text-emerald-100/90"
                      onClick={() =>
                        setMobileSubOpen((v) => (v === item.path ? null : item.path))
                      }
                    >
                      {item.label}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        className={`transition-transform ${mobileSubOpen === item.path ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileSubOpen === item.path && (
                      <ul className="ml-2 flex flex-col gap-1 border-l border-emerald-500/20 pb-1 pl-3">
                        {item.children.map((child) => (
                          <li key={child.path}>
                            {child.subChildren ? (
                              <div>
                                <div className="flex items-center justify-between">
                                  <NavLink
                                    to={child.path}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex-1 rounded-lg px-2 py-2 text-sm text-emerald-100 font-semibold hover:text-white"
                                  >
                                    {child.label}
                                  </NavLink>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setMobileChildSubOpen((v) => (v === child.path ? null : child.path))
                                    }
                                    className="px-2 py-1 text-xs text-emerald-400 font-medium border border-emerald-500/30 rounded"
                                  >
                                    {mobileChildSubOpen === child.path ? '▲ Tutup Vol' : '▼ Vol.1 & Vol.2'}
                                  </button>
                                </div>

                                {(mobileChildSubOpen === child.path || true) && (
                                  <ul className="ml-3 mt-1 flex flex-col gap-1 border-l border-emerald-400/30 pl-3.5 pb-2">
                                    {child.subChildren.map((sub) => (
                                      <li key={sub.path}>
                                        <NavLink
                                          to={sub.path}
                                          onClick={() => setMobileOpen(false)}
                                          className={({ isActive }) =>
                                            `block rounded-lg px-2 py-1.5 text-xs ${
                                              isActive
                                                ? 'bg-emerald-500/30 text-emerald-300 font-bold'
                                                : 'text-emerald-100/90 hover:text-white'
                                            }`
                                          }
                                        >
                                          • {sub.label}
                                        </NavLink>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ) : child.isExternal || child.path.startsWith('http') ? (
                              <a
                                href={child.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-emerald-100/80 hover:text-white"
                              >
                                <span>{child.label}</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                              </a>
                            ) : (
                              <NavLink
                                to={child.path}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                  `block rounded-lg px-2 py-2 text-sm ${
                                    isActive ? 'text-emerald-400 font-semibold' : 'text-emerald-100/80 hover:text-white'
                                  }`
                                }
                              >
                                {child.label}
                              </NavLink>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-2 py-2.5 text-sm font-medium ${
                        isActive ? 'text-emerald-400 font-semibold' : 'text-emerald-100/90 hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              to="/dukung-kami"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-2.5 text-center text-sm font-bold text-slate-950 shadow-lg shadow-emerald-400/30 transition hover:bg-emerald-300"
            >
              <span>🤝</span>
              <span>Dukung Panti & Kemitraan</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
