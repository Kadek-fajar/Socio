import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Program3Banner({ onClose, showCloseButton = false, initialVol = 'vol-1' }) {
  const [activeVol, setActiveVol] = useState(initialVol)
  const [activePhoto, setActivePhoto] = useState(null)

  const volData = {
    'vol-1': {
      code: 'Program 3 Vol.1',
      title: 'Pelatihan & Praktek Produk',
      subtitle: 'Modul Dasar: Praktik Produksi Pangan & Kewirausahaan Nyata',
      desc: 'Kegiatan ini merupakan sesi praktik langsung dalam rangkaian Restart Social and Entrepreneur Lab, di mana peserta mempraktikkan pembuatan es cincau dan singkong serut mulai dari persiapan bahan hingga produk siap saji. Melalui praktik ini, peserta belajar menerapkan konsep kewirausahaan secara nyata sekaligus melatih keterampilan produksi pangan sederhana. Program ini diharapkan mampu menumbuhkan semangat wirausaha sosial peserta dan membekali mereka dengan keterampilan praktis untuk usaha mandiri.',
      photos: [
        { src: '/images/program-3-photo-1.jpg', caption: 'Sesi Foto Bersama Hasil Olahan Pangan Bersama Anak Binaan Panti' },
        { src: '/images/program-3-photo-2.jpg', caption: 'Dokumentasi Produk Siap Saji Es Cincau Bersama Peserta Program' },
        { src: '/images/program-3-photo-3.jpg', caption: 'Praktik Pembuatan Olahan Pangan & Es Cincau di Dapur Pelatihan' },
        { src: '/images/program-3-photo-4.jpg', caption: 'Praktik Pemerasan & Pengolahan Daun Cincau Bersama Mentoring Udinus' },
      ],
    },
    'vol-2': {
      code: 'Program 3 Vol.2',
      title: 'Desain Canva, Pembuatan Logo & Poster Usaha',
      subtitle: 'Modul Lanjutan: Pelatihan Desain Grafis Digital & Branding Usaha Mandiri',
      desc: 'Kegiatan ini merupakan sesi pemaparan materi dan praktik langsung dalam rangkaian Restart Social and Entrepreneur Lab, di mana peserta diberikan materi editing Canva mencakup tutorial pembuatan poster dan logo, dilanjutkan dengan praktik langsung membuat poster dan logo usaha mereka sendiri. Melalui kegiatan ini, peserta belajar menerapkan keterampilan desain digital sederhana sebagai bekal branding untuk mendukung usaha mandiri mereka.',
      photos: [
        { src: '/images/program-3-vol-2-photo-1.jpg', caption: 'Pemaparan Materi Fitur-Fitur Desain Canva & Branding Usaha di Depan Kelas' },
        { src: '/images/program-3-vol-2-photo-2.jpg', caption: 'Praktik Pembuatan Logo Usaha Mandiri oleh Anak Binaan Panti' },
        { src: '/images/program-3-vol-2-photo-3.jpg', caption: 'Pendampingan Sesi Editing Poster Promosi Digital di Smartphone' },
        { src: '/images/program-3-vol-2-photo-4.jpg', caption: 'Hasil Karya Poster & Identitas Visual Produk Usaha Mandiri' },
      ],
    },
  }

  const current = volData[activeVol] || volData['vol-1']

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#065e3e] via-[#047857] to-[#014028] p-6 sm:p-10 md:p-12 text-white shadow-2xl border border-emerald-400/40">
      {showCloseButton && (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-rose-600 transition shadow-lg backdrop-blur-md"
          aria-label="Tutup Detail Program 3"
        >
          ✕
        </button>
      )}

      {/* Switcher Volume Program 3 */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider">Pilih Volume:</span>
        <button
          type="button"
          onClick={() => setActiveVol('vol-1')}
          className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition ${activeVol === 'vol-1'
            ? 'bg-white text-emerald-950 shadow-lg shadow-black/20 ring-2 ring-emerald-300'
            : 'bg-black/30 text-emerald-100 hover:bg-black/50 border border-white/20'
            }`}
        >
          📷 Program 3 Vol.1 (Pelatihan & Praktek)
        </button>
        <button
          type="button"
          onClick={() => setActiveVol('vol-2')}
          className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition ${activeVol === 'vol-2'
            ? 'bg-white text-emerald-950 shadow-lg shadow-black/20 ring-2 ring-emerald-300'
            : 'bg-black/30 text-emerald-100 hover:bg-black/50 border border-white/20'
            }`}
        >
          🎨 Program 3 Vol.2 (Desain Canva & Logo)
        </button>
      </div>

      {/* Header Program 3 */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          {current.code} :
        </h2>
        <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
          {current.title}
        </h1>
        <p className="mt-2 text-xs sm:text-sm font-semibold text-emerald-200 uppercase tracking-wide">
          {current.subtitle}
        </p>
      </div>

      {/* Deskripsi Utama */}
      <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-emerald-50 font-normal sm:font-medium max-w-6xl text-justify">
        {current.desc}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/produk" onClick={onClose} className="btn-primary text-sm">
          Lihat Marketplace Produk Panti &rarr;
        </Link>
      </div>

      {/* Garis Pemisah Putih Solid */}
      <hr className="my-8 border-t-2 border-white/80" />

      {/* Gallery 4 Foto Kegiatan Side-by-Side */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {current.photos.map((item, index) => (
          <div
            key={index}
            onClick={() => setActivePhoto(item)}
            className="group relative overflow-hidden rounded-2xl border-2 border-white/30 bg-emerald-950/40 shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-white hover:shadow-2xl"
          >
            <img
              src={item.src}
              alt={`Dokumentasi Program 3 Foto ${index + 1}`}
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
