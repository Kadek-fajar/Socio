import { useState } from 'react'

export default function Program1Banner({ onClose, showCloseButton = false }) {
  const [activePhoto, setActivePhoto] = useState(null)

  const photos = [
    { src: '/images/program-1-photo-1.png', caption: 'Sesi Foto Bersama Banner Program 1: Restart Mindset & Character Class' },
    { src: '/images/program-1-photo-2.png', caption: 'Penyampaian Materi & Edukasi Karakter Positif' },
    { src: '/images/program-1-photo-3.png', caption: 'Sesi Tanya Jawab Interaktif & Motivasi' },
    { src: '/images/program-1-photo-4.png', caption: 'Focus Group Discussion (FGD) & Simulasi Wirausaha' },
  ]

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#065e3e] via-[#047857] to-[#014028] p-6 sm:p-10 md:p-12 text-white shadow-2xl border border-emerald-400/40">
      {showCloseButton && (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-rose-600 transition shadow-lg backdrop-blur-md"
          aria-label="Tutup Detail Program 1"
        >
          ✕
        </button>
      )}

      {/* Header Program 1 */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Program 1 :
        </h2>
        <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
          Restart Mindset and Character Class
        </h1>
      </div>

      {/* Deskripsi Utama (Persis Gambar Referensi) */}
      <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-emerald-50 font-normal sm:font-medium max-w-6xl text-justify">
        Kegiatan ini menjadi langkah awal dalam membentuk pola pikir berkembang (growth mindset) serta karakter positif anak panti melalui pembelajaran yang interaktif dan inspiratif. Rangkaian kegiatan meliputi sesi motivasi, edukasi nilai karakter, simulasi kewirausahaan sederhana, tes minat dan bakat, serta Focus Group Discussion (FGD). Melalui program ini, peserta diharapkan memiliki kepercayaan diri yang lebih baik, mampu mengenali potensi diri, serta memandang kewirausahaan sebagai salah satu peluang untuk mencapai kemandirian di masa depan.
      </p>

      {/* Garis Pemisah Putih Solid */}
      <hr className="my-8 border-t-2 border-white/80" />

      {/* Gallery 4 Foto Kegiatan Side-by-Side */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {photos.map((item, index) => (
          <div
            key={index}
            onClick={() => setActivePhoto(item)}
            className="group relative overflow-hidden rounded-2xl border-2 border-white/30 bg-emerald-950/40 shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-white hover:shadow-2xl"
          >
            <img
              src={item.src}
              alt={`Dokumentasi Program 1 Foto ${index + 1}`}
              className="h-36 sm:h-48 md:h-56 lg:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <span className="text-[11px] sm:text-xs font-semibold text-white leading-tight">
                🔍 Klik untuk memperbesar
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX POPUP PERBESAR FOTO */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl p-4 sm:p-6 border border-emerald-500/40 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-rose-500 transition"
            >
              ✕
            </button>
            <img
              src={activePhoto.src}
              alt={activePhoto.caption}
              className="max-h-[75vh] w-auto mx-auto rounded-xl object-contain shadow-2xl"
            />
            <p className="mt-4 text-xs sm:text-sm font-semibold text-emerald-300">
              {activePhoto.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
