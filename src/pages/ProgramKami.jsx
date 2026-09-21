import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Program1Banner from '../components/Program1Banner'
import Program2Banner from '../components/Program2Banner'
import Program3Banner from '../components/Program3Banner'
import Program4Banner from '../components/Program4Banner'
import programList from '../data/program'

// Kelompokkan program berdasarkan grup utama (program-1, program-2, program-3, program-4)
const programGroups = [
  { id: 'program-1', code: 'Program 1', title: 'Program 1', icon: '🚀', volumes: ['program-1'] },
  { id: 'program-2', code: 'Program 2', title: 'Program 2', icon: '📚', volumes: ['program-2-vol-1', 'program-2-vol-2'] },
  { id: 'program-3', code: 'Program 3', title: 'Program 3', icon: '📱', volumes: ['program-3-vol-1', 'program-3-vol-2'] },
  { id: 'program-4', code: 'Program 4', title: 'Program 4', icon: '📊', volumes: ['program-4-vol-1', 'program-4-vol-2'] },
]

export default function ProgramKami() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // Tab utama (semua, program-1, program-2, program-3, program-4)
  const [activeGroup, setActiveGroup] = useState('semua')
  const [selectedProgram, setSelectedProgram] = useState(null)

  useEffect(() => {
    if (id) {
      const directMatch = programList.find((p) => p.id === id)
      if (directMatch) {
        setActiveGroup(directMatch.volumeGroup)
      } else {
        const groupMatch = programGroups.find((g) => g.id === id)
        if (groupMatch) {
          setActiveGroup(groupMatch.id)
        } else {
          setActiveGroup('semua')
        }
      }
    } else {
      setActiveGroup('semua')
    }
  }, [id])

  const handleGroupChange = (groupId) => {
    setActiveGroup(groupId)
    if (groupId === 'semua') {
      navigate('/program')
    } else {
      navigate(`/program/${groupId}`)
    }
  }

  // Program yang akan ditampilkan di grid
  const filteredPrograms =
    activeGroup === 'semua'
      ? programList
      : programList.filter((p) => p.volumeGroup === activeGroup)

  return (
    <div className="min-h-screen py-10 lg:py-14">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Inisiatif & Pemberdayaan"
          title="Program Kami"
          subtitle="4 Pilar program utama Panti Wira Adhi Karya Ungaran untuk membentuk kemandirian sosial, keterampilan produksi, hingga literasi keuangan."
        />

        {/* TAB NAVIGASI PILAR UTAMA (SEMUA, PROGRAM 1, PROGRAM 2, PROGRAM 3, PROGRAM 4) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-slate-900/80 p-2 backdrop-blur-md shadow-xl">
          <button
            type="button"
            onClick={() => handleGroupChange('semua')}
            className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition ${
              activeGroup === 'semua'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                : 'text-emerald-100/80 hover:bg-emerald-500/20 hover:text-white'
            }`}
          >
            Semua Program (7 Modul)
          </button>
          {programGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => handleGroupChange(group.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition ${
                activeGroup === group.id
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'text-emerald-100/80 hover:bg-emerald-500/20 hover:text-white'
              }`}
            >
              <span>{group.icon}</span>
              <span>{group.code}</span>
              {group.volumes.length > 1 && (
                <span className="ml-1 rounded-full bg-emerald-950/80 px-2 py-0.5 text-[10px] text-emerald-300 border border-emerald-500/40">
                  2 Vol
                </span>
              )}
            </button>
          ))}
        </div>

        {/* BANNER INTERAKTIF SESUAI PROGRAM YANG AKTIF */}
        {activeGroup === 'program-1' && (
          <div className="mt-10 animate-fade-in">
            <Program1Banner />
          </div>
        )}

        {activeGroup === 'program-2' && (
          <div className="mt-10 animate-fade-in">
            <Program2Banner />
          </div>
        )}

        {activeGroup === 'program-3' && (
          <div className="mt-10 animate-fade-in">
            <Program3Banner />
          </div>
        )}

        {activeGroup === 'program-4' && (
          <div className="mt-10 animate-fade-in">
            <Program4Banner />
          </div>
        )}

        {/* LIST / GRID PROGRAM */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="group flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-emerald-400/60 hover:-translate-y-1"
            >
              <div>
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1 text-xs font-bold text-emerald-300">
                    <span className="text-sm">{prog.icon}</span>
                    <span>{prog.code}</span>
                  </span>
                  <span className="rounded-full bg-slate-800 border border-emerald-500/20 px-3 py-1 text-[11px] font-medium text-emerald-200">
                    {prog.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-emerald-300 transition sm:text-2xl">
                  {prog.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-emerald-400/90">
                  {prog.subtitle}
                </p>

                {/* Summary */}
                <p className="mt-4 text-sm leading-relaxed text-emerald-100/80 text-justify">
                  {prog.summary}
                </p>

                {/* Preview Photos Thumbnail in Grid Card */}
                {prog.photos && prog.photos.length > 0 && (
                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {prog.photos.map((imgSrc, i) => (
                      <div key={i} className="overflow-hidden rounded-lg border border-emerald-500/30">
                        <img
                          src={imgSrc}
                          alt={`Thumbnail ${i + 1}`}
                          className="h-16 w-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights / Kegiatan */}
                <div className="mt-6 rounded-xl border border-emerald-500/20 bg-slate-950/60 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Rangkaian Kegiatan Utama:
                  </h4>
                  <ul className="mt-2.5 flex flex-col gap-2">
                    {prog.activities.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-emerald-100/90">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="mt-0.5 shrink-0 text-emerald-400"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-emerald-500/20 pt-5">
                <div className="text-xs text-emerald-100/60">
                  <span className="font-semibold text-emerald-300">Durasi: </span>
                  {prog.duration}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProgram(prog)}
                  className="btn-primary !px-5 !py-2 text-xs sm:text-sm shadow-md"
                >
                  Detail {prog.code} &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETAIL PROGRAM */}
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md animate-fade-in overflow-y-auto">
            {selectedProgram.id === 'program-1' ? (
              <div className="relative w-full max-w-5xl my-auto">
                <Program1Banner showCloseButton={true} onClose={() => setSelectedProgram(null)} />
              </div>
            ) : selectedProgram.id.startsWith('program-2') ? (
              <div className="relative w-full max-w-5xl my-auto">
                <Program2Banner
                  showCloseButton={true}
                  initialVol={selectedProgram.id.endsWith('vol-2') ? 'vol-2' : 'vol-1'}
                  onClose={() => setSelectedProgram(null)}
                />
              </div>
            ) : selectedProgram.id.startsWith('program-3') ? (
              <div className="relative w-full max-w-5xl my-auto">
                <Program3Banner
                  showCloseButton={true}
                  initialVol={selectedProgram.id.endsWith('vol-2') ? 'vol-2' : 'vol-1'}
                  onClose={() => setSelectedProgram(null)}
                />
              </div>
            ) : selectedProgram.id.startsWith('program-4') ? (
              <div className="relative w-full max-w-5xl my-auto">
                <Program4Banner
                  showCloseButton={true}
                  initialVol={selectedProgram.id.endsWith('vol-2') ? 'vol-2' : 'vol-1'}
                  onClose={() => setSelectedProgram(null)}
                />
              </div>
            ) : (
              <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-emerald-400 bg-slate-900 p-6 sm:p-8 text-white shadow-2xl my-auto">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-emerald-300 hover:bg-rose-500 hover:text-white transition"
                  aria-label="Tutup"
                >
                  ✕
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedProgram.icon}</span>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-bold text-emerald-300">
                    {selectedProgram.code}
                  </span>
                  <span className="text-xs text-emerald-200/70">&middot; {selectedProgram.category}</span>
                </div>

                <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                  {selectedProgram.title}
                </h2>
                <p className="mt-1 text-sm font-semibold text-emerald-400">
                  {selectedProgram.subtitle}
                </p>

                <div className="mt-5 space-y-4 text-sm leading-relaxed text-emerald-100/90">
                  <div>
                    <h4 className="font-bold text-white mb-1">Deskripsi Lengkap Program:</h4>
                    <p className="bg-slate-950/60 border border-emerald-500/20 rounded-xl p-4 text-xs sm:text-sm text-justify">
                      {selectedProgram.description}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-emerald-500/20 bg-slate-950/60 p-4">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-300 mb-1">
                        🎯 Sasaran Peserta:
                      </h4>
                      <p className="text-xs text-emerald-100/90 text-justify">{selectedProgram.target}</p>
                    </div>
                    <div className="rounded-xl border border-emerald-500/20 bg-slate-950/60 p-4">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-300 mb-1">
                        ⏱️ Waktu Pelaksanaan:
                      </h4>
                      <p className="text-xs text-emerald-100/90">{selectedProgram.duration}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">Target Capaian & Hasil (Outcomes):</h4>
                    <ul className="space-y-2">
                      {selectedProgram.outcomes.map((out, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100/90">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs">
                            ✓
                          </span>
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-emerald-500/20 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProgram(null)}
                    className="btn-outline !px-5 !py-2 text-xs sm:text-sm"
                  >
                    Tutup
                  </button>
                  {selectedProgram.id.startsWith('program-2') || selectedProgram.id.startsWith('program-3') ? (
                    <Link
                      to="/produk"
                      onClick={() => setSelectedProgram(null)}
                      className="btn-primary !px-5 !py-2 text-xs sm:text-sm"
                    >
                      Lihat Marketplace Produk &rarr;
                    </Link>
                  ) : selectedProgram.id.startsWith('program-4') ? (
                    <Link
                      to="/literasi-keuangan"
                      onClick={() => setSelectedProgram(null)}
                      className="btn-primary !px-5 !py-2 text-xs sm:text-sm"
                    >
                      Lihat Modul & Kalkulator Keuangan &rarr;
                    </Link>
                  ) : (
                    <Link
                      to="/kontak"
                      onClick={() => setSelectedProgram(null)}
                      className="btn-primary !px-5 !py-2 text-xs sm:text-sm"
                    >
                      Hubungi Panti &rarr;
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
