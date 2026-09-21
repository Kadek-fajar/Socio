import { useState } from 'react'

export default function Program2Banner({ onClose, showCloseButton = false, initialVol = 'vol-1' }) {
  const [activeVol, setActiveVol] = useState(initialVol)
  const [activePhoto, setActivePhoto] = useState(null)

  const volData = {
    'vol-1': {
      code: 'Program 2 Vol.1',
      title: 'Restart Literacy and Life Skills Training',
      subtitle: 'Modul Dasar: Calistung Bisnis & Konsep Keuangan Aplikatif',
      desc: 'Kegiatan ini bertujuan untuk meningkatkan kemampuan literasi dan keterampilan hidup (life skills) anak panti melalui pembelajaran calistung bisnis yang aplikatif. Peserta mengikuti materi dan praktik penyelesaian studi kasus menggunakan lembar kerja khusus untuk melatih kemampuan menghitung modal usaha, Harga Pokok Produksi (HPP), penentuan harga jual, analisis laba rugi, serta Break Even Point (BEP). Selain itu, peserta juga dibekali pemahaman mengenai pengelolaan keuangan dasar, perencanaan usaha sederhana, dan penerapan keterampilan kewirausahaan sebagai bekal menuju kemandirian.',
      photos: [
        { src: '/images/program-vol-2-1-photo-1.jpg', caption: 'Sesi Foto Bersama Banner Program 2 Vol.1: Restart Literacy and Life Skills Training' },
        { src: '/images/program-vol-2-1-photo-2.jpg', caption: 'Praktik Penyelesaian Studi Kasus & Calistung Bisnis Aplikatif' },
        { src: '/images/program-vol-2-1-photo-3.jpg', caption: 'Penyampaian Materi Literasi & Keterampilan Hidup di Kelas' },
        { src: '/images/program-vol-2-1-photo-4.jpg', caption: 'Pendampingan Individu & Perhitungan HPP, Laba Rugi serta BEP' },
      ],
    },
    'vol-2': {
      code: 'Program 2 Vol.2',
      title: 'Advanced Life Skills & Business Practice',
      subtitle: 'Modul Lanjutan: Praktik Studi Kasus HPP, BEP & Laba Rugi Real',
      desc: 'Kegiatan ini berfokus pada pengenalan analisis SWOT sebagai dasar dalam mengembangkan ide usaha. Melalui pemaparan materi yang interaktif, peserta belajar mengidentifikasi kekuatan, kelemahan, peluang, dan ancaman dari ide bisnis yang dimiliki. Rangkaian kegiatan dilanjutkan dengan pengisian lembar kerja analisis SWOT serta penyusunan ide usaha sederhana. Melalui program ini, peserta diharapkan mampu berpikir lebih kritis, mengenali potensi diri, serta merancang ide bisnis yang lebih terarah dan berkelanjutan.',
      photos: [
        { src: '/images/program-2-photo-3.jpg', caption: 'Praktik Pendalaman Perhitungan BEP & HPP Produk Karya Panti' },
        { src: '/images/program-2-photo-4.jpg', caption: 'Simulasi Penetapan Harga Jual Bersaing & Analisis Laba Rugi' },
        { src: '/images/program-2-photo-1.jpg', caption: 'Evaluasi Hasil Praktik Studi Kasus Keuangan Usaha Mandiri' },
        { src: '/images/program-2-photo-2.jpg', caption: 'Penyusunan Laporan Keuangan Produk Binaan Panti' },
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
          aria-label="Tutup Detail Program 2"
        >
          ✕
        </button>
      )}

      {/* Switcher Volume Program 2 */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider">Pilih Volume:</span>
        <button
          type="button"
          onClick={() => setActiveVol('vol-1')}
          className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition ${
            activeVol === 'vol-1'
              ? 'bg-white text-emerald-950 shadow-lg shadow-black/20 ring-2 ring-emerald-300'
              : 'bg-black/30 text-emerald-100 hover:bg-black/50 border border-white/20'
          }`}
        >
          📚 Program 2 Vol.1 (Dasar)
        </button>
        <button
          type="button"
          onClick={() => setActiveVol('vol-2')}
          className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition ${
            activeVol === 'vol-2'
              ? 'bg-white text-emerald-950 shadow-lg shadow-black/20 ring-2 ring-emerald-300'
              : 'bg-black/30 text-emerald-100 hover:bg-black/50 border border-white/20'
          }`}
        >
          💡 Program 2 Vol.2 (Lanjutan)
        </button>
      </div>

      {/* Header Program 2 */}
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
              alt={`Dokumentasi Program 2 Foto ${index + 1}`}
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
