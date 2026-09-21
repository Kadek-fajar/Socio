import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

export default function LiterasiKeuangan() {
  return (
    <div className="min-h-screen py-10 lg:py-14">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Edukasi Keuangan"
          title="Literasi Keuangan UMKM Panti"
          subtitle="Modul pembelajaran interaktif, video panduan, dan alat bantu kalkulasi keuangan sederhana."
        />

        {/* HERO KONTEN UTAMA */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-center">
          {/* Kiri: Deskripsi & CTA */}
          <div className="flex flex-col gap-4">
            <span className="inline-block w-max rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Modul Pembelajaran Utama
            </span>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Mengapa Penghuni Panti Perlu Belajar Literasi Keuangan?
            </h2>
            <p className="text-sm leading-relaxed text-emerald-100/80">
              Kemampuan memproduksi barang saja tidak cukup. Dengan memahami dasar-dasar pencatatan keuangan, penghuni panti dan pelaku usaha binaan dapat mengelola arus kas, terhindar dari kerugian, dan mengembangkan usahanya secara berkelanjutan.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <Link to="/literasi-keuangan/kalkulator-hpp" className="btn-primary">
                Coba Kalkulator HPP
              </Link>
            </div>
          </div>

          {/* Kanan: Direct Link Video Tutorial */}
          <a
            href="https://www.youtube.com/watch?v=L_LUpnjgPso"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-2xl border border-emerald-500/30 bg-slate-900/80 p-6 backdrop-blur-md shadow-xl transition hover:border-emerald-400/60 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600 shadow-lg shadow-red-600/30 group-hover:bg-red-500 transition">
                {/* YouTube Icon */}
                <svg viewBox="0 0 24 24" fill="white" className="h-6 w-6">
                  <path d="M23.498 6.186a2.997 2.997 0 0 0-2.107-2.118C19.524 3.5 12 3.5 12 3.5s-7.524 0-9.391.568A2.997 2.997 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.997 2.997 0 0 0 2.107 2.118C4.476 20.5 12 20.5 12 20.5s7.524 0 9.391-.568a2.997 2.997 0 0 0 2.107-2.118C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-red-400">Video Tutorial</p>
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-emerald-300 transition">
                  Menghitung HPP &amp; Keuntungan Usaha
                </h3>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-emerald-100/70">
              Pelajari dasar-dasar menghitung beban modal, biaya operasional, dan menentukan margin keuntungan yang sehat. Buka langsung di YouTube ↗
            </p>
            <span className="mt-1 inline-flex w-max items-center gap-2 rounded-lg bg-red-600/20 border border-red-500/30 px-4 py-2 text-xs font-bold text-red-300 transition group-hover:bg-red-600/40">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M23.498 6.186a2.997 2.997 0 0 0-2.107-2.118C19.524 3.5 12 3.5 12 3.5s-7.524 0-9.391.568A2.997 2.997 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.997 2.997 0 0 0 2.107 2.118C4.476 20.5 12 20.5 12 20.5s7.524 0 9.391-.568a2.997 2.997 0 0 0 2.107-2.118C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Tonton di YouTube
            </span>
          </a>
        </div>


        {/* ALAT BANTU KALKULATOR */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <Link
            to="/literasi-keuangan/kalkulator-hpp"
            className="card group p-6 transition hover:-translate-y-1 hover:border-emerald-400/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="16" y1="14" x2="16" y2="18" />
                <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01" strokeWidth="3" />
              </svg>
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-emerald-300">
              Kalkulator HPP
            </h3>
            <p className="mt-2 text-xs text-emerald-100/70">
              Hitung Harga Pokok Penjualan secara presisi berdasarkan bahan baku dan tenaga kerja.
            </p>
          </Link>

          <Link
            to="/literasi-keuangan/kalkulator-laba-rugi"
            className="card group p-6 transition hover:-translate-y-1 hover:border-emerald-400/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-white group-hover:text-emerald-300">
                Kalkulator Laba Rugi
              </h3>
            </div>
            <p className="mt-2 text-xs text-emerald-100/70">
              Ketahui perkiraan keuntungan bersih bulanan dari total pendapatan dan pengeluaran.
            </p>
          </Link>

          <Link
            to="/literasi-keuangan/kalkulator-arus-kas"
            className="card group p-6 transition hover:-translate-y-1 hover:border-emerald-400/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="2" />
                <path d="M6 12h.01M18 12h.01" />
              </svg>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-white group-hover:text-emerald-300">
                Kalkulator Arus Kas
              </h3>
            </div>
            <p className="mt-2 text-xs text-emerald-100/70">
              Pantau uang masuk dan uang keluar harian usaha agar kondisi kas selalu aman.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
