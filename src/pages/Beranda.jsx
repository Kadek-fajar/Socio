import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import EventCard from '../components/EventCard'
import VideoPlayer from '../components/VideoPlayer'
import { HeroBackgroundImage, HeroSparkles } from '../components/HeroIllustrations'
import produkList from '../data/produk'
import eventList from '../data/event'

const pilar = [
  {
    title: 'Informasi Panti',
    desc: 'Kenali profil, kegiatan, dan cerita di balik Panti Wira Adhi Karya.',
    to: '/tentang',
    icon: (
      <path d="M12 3 4 8v13h16V8l-8-5Z M9 21v-7h6v7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: 'Marketplace Karya',
    desc: 'Belanja langsung produk hasil karya penghuni panti, mudah dan aman.',
    to: '/produk',
    icon: (
      <path d="M4 8h16l-1.5 11H5.5L4 8Z M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: 'Literasi Keuangan',
    desc: 'Belajar HPP, laba rugi, dan arus kas lewat materi dan kalkulator sederhana.',
    to: '/literasi-keuangan',
    icon: (
      <path d="M4 19V5m0 14h16M8 19v-6m4 6v-9m4 9V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    ),
  },
]

const produkUnggulan = produkList.slice(0, 4)

export default function Beranda() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[520px] lg:min-h-[600px] flex items-center justify-center py-12 lg:py-16">
        {/* Background glow effects */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[50rem] rounded-full bg-emerald-500/15 blur-[120px]" />

        {/* Gambar Ilustrasi Background Utama HD Pengguna (Borderless & Seamless 360) */}
        <HeroBackgroundImage />

        {/* Taburan Bintang Berkilau (Sparkling Stars Background) */}
        <HeroSparkles />

        <div className="section relative z-20 flex flex-col items-center text-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            {/* Logo Utama Penyelenggara & Mitra di atas Judul */}
            <div className="mb-6 rounded-2xl bg-[#06261a]/95 border border-emerald-500/50 p-3 sm:p-4 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
              <div className="rounded-xl bg-white p-2.5 sm:p-3.5 shadow-inner">
                <img
                  src="/images/official-logos.png"
                  alt="Logo Utama: Tut Wuri Handayani, Diktisaintek, Belmawa, Simbelmawa, PKM, UDINUS"
                  className="h-9 sm:h-11 md:h-13 lg:h-14 w-auto object-contain"
                />
              </div>
            </div>

            <span className="mb-4 inline-block rounded-full bg-emerald-500/25 border border-emerald-500/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Panti Wira Adhi Karya &middot; Ungaran
            </span>
            
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg">
              Menaungi, Memberdayakan,
              <span className="text-emerald-400"> Menumbuhkan Karya</span>
            </h1>
            
            <p className="mt-5 max-w-xl text-base leading-relaxed text-emerald-100/90 sm:text-lg">
              Media informasi, promosi produk, dan literasi keuangan bagi penghuni Panti Wira Adhi
              Karya. Kenali kami, dukung karya mereka, dan tumbuh bersama.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/tentang" className="btn-primary">
                Kenali Kami
              </Link>
              <Link to="/produk" className="btn-outline">
                Belanja Produk
              </Link>
            </div>
          </div>
        </div>
      </section>




      {/* SEKILAS PANTI WITH VIDEO PLAYER */}
      <section className="relative">
        <div className="section grid items-center gap-10 lg:grid-cols-2">
          {/* Pemutar Video MP4 Sekilas Panti */}
          <div className="w-full">
            <VideoPlayer
              src="/videos/sekilas-panti.mp4"
              fallbackSrc="/videos/lv_0_20260719223536 (1) (1).mp4"
              poster="/images/program-1-photo-1.png"
              title="Sekilas Panti Wira Adhi Karya"
              description="Dokumentasi profil & kegiatan pemberdayaan penghuni Panti Wira Adhi Karya Ungaran."
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Sekilas Panti"
              title="Rumah Kedua yang Menumbuhkan Kemandirian"
            />
            <p className="mt-4 text-emerald-100/80 text-justify">
              Panti Wira Adhi Karya Ungaran hadir sebagai tempat bernaung sekaligus ruang belajar
              berkarya bagi penghuninya. Melalui pelatihan keterampilan dan pendampingan usaha,
              kami mendorong setiap penghuni untuk tumbuh mandiri secara ekonomi dan sosial.
            </p>
            <Link to="/tentang" className="btn-primary mt-6">
              Selengkapnya Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* PILAR LAYANAN */}
      <section className="relative">
        <div className="section">
          <SectionHeading
            eyebrow="Layanan Kami"
            title="Satu Situs, Tiga Manfaat Utama"
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pilar.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group flex flex-col rounded-2xl border border-emerald-200/80 bg-white p-6 text-slate-900 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400 hover:shadow-2xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 group-hover:text-emerald-600 transition">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {item.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-600">
                  Jelajahi
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="transition group-hover:translate-x-1">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUK UNGGULAN */}
      <section className="relative">
        <div className="section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Marketplace"
              title="Produk Unggulan"
              subtitle="Sebagian karya terbaru dari penghuni panti, siap dipesan."
            />
            <Link to="/produk" className="btn-outline !px-5 !py-2.5 text-sm">
              Lihat Semua Produk
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {produkUnggulan.map((p) => (
              <ProductCard key={p.id} produk={p} />
            ))}
          </div>
        </div>
      </section>

      {/* LITERASI KEUANGAN BANNER */}
      <section className="section !py-4">
        <div className="overflow-hidden rounded-xl2 bg-gradient-to-r from-[#073825]/90 via-[#0a4830]/90 to-[#021810]/90 border border-emerald-500/30 px-6 py-10 sm:px-10 sm:py-14 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="mb-3 inline-block rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Literasi Keuangan
              </span>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Kelola Usaha Lebih Rapi dengan Kalkulator Sederhana
              </h2>
              <p className="mt-3 text-emerald-100/80">
                Pelajari cara menghitung HPP, laba rugi, hingga arus kas usaha kecil — dibuat
                mudah dipahami untuk pelaku UMKM pemula.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2.5">
              <Link to="/literasi-keuangan" className="btn-secondary text-sm">
                Mulai Belajar
              </Link>
              <Link
                to="/literasi-keuangan/kalkulator-hpp"
                className="btn-outline text-sm"
              >
                Kalkulator HPP
              </Link>
              <Link
                to="/literasi-keuangan/kalkulator-laba-rugi"
                className="btn-outline text-sm"
              >
                Kalkulator Laba Rugi
              </Link>
              <Link
                to="/literasi-keuangan/kalkulator-arus-kas"
                className="btn-outline text-sm"
              >
                Kalkulator Arus Kas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT TERDEKAT */}
      <section className="relative">
        <div className="section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Agenda"
              title="Event Terdekat"
              subtitle="Ikuti kegiatan panti, dari bazar hingga pelatihan literasi keuangan."
            />
            <Link to="/event" className="btn-outline !px-5 !py-2.5 text-sm">
              Lihat Semua Event
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-6">
            {eventList.map((e) => (
              <EventCard key={e.id} event={e} layout="full" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
