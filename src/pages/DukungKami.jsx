import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

export default function DukungKami() {
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [activeTab, setActiveTab] = useState('donasi')

  const kontakDonasiList = [
    {
      nama: 'Bu Nova',
      peran: 'Narahubung 1',
      nomor: '+62 852-2255-5562',
      rawNomor: '085222555562',
      waLink: 'https://wa.me/6285222555562?text=Halo%20Bu%20Nova%20(Pengurus%20Panti%20Wira%20Adhi%20Karya),%20saya%20ingin%20menyalurkan%20donasi%20/%20bantuan%20untuk%20anak%20binaan%20panti.',
      keterangan: 'Pengurus Panti · Layanan Informasi Donasi, Bantuan Fasilitas & Konfirmasi Penyaluran',
      badge: 'Narahubung 1',
      icon: '📞',
    },
    {
      nama: 'Bu Nur',
      peran: 'Narahubung 2',
      nomor: '+62 812-2657-5564',
      rawNomor: '081226575564',
      waLink: 'https://wa.me/6281226575564?text=Halo%20Bu%20Nur%20(Pengurus%20Panti%20Wira%20Adhi%20Karya),%20saya%20ingin%20menyalurkan%20donasi%20/%20bantuan%20untuk%20anak%20binaan%20panti.',
      keterangan: 'Pengurus Panti · Layanan Administrasi Donasi, Kemitraan Sosial & Kunjungan Panti',
      badge: 'Narahubung 2',
      icon: '💬',
    },
  ]

  const handleCopy = (nomor, idx) => {
    navigator.clipboard.writeText(nomor)
    setCopiedIndex(idx)
    setTimeout(() => setCopiedIndex(null), 2500)
  }

  return (
    <div className="min-h-screen py-10 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Kepedulian & Kemitraan"
          title="Dukung Kemandirian Anak Panti"
          subtitle="Salurkan dukungan Anda untuk masa depan anak binaan Panti Wira Adhi Karya Ungaran melalui donasi, kemitraan program, atau berbelanja produk hasil karya mereka."
        />

        {/* TAB PILIHAN DUKUNGAN */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('donasi')}
            className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition ${
              activeTab === 'donasi'
                ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/30 ring-2 ring-emerald-300'
                : 'bg-slate-900/80 text-emerald-100/90 hover:bg-emerald-500/20 hover:text-white border border-emerald-500/30'
            }`}
          >
            💝 Kontak Donasi & Bantuan
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('kemitraan')}
            className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition ${
              activeTab === 'kemitraan'
                ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/30 ring-2 ring-emerald-300'
                : 'bg-slate-900/80 text-emerald-100/90 hover:bg-emerald-500/20 hover:text-white border border-emerald-500/30'
            }`}
          >
            🤝 Kemitraan & Program Kampus/CSR
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('produk')}
            className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition ${
              activeTab === 'produk'
                ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/30 ring-2 ring-emerald-300'
                : 'bg-slate-900/80 text-emerald-100/90 hover:bg-emerald-500/20 hover:text-white border border-emerald-500/30'
            }`}
          >
            🛒 Beli Karya & Olahan Pangan
          </button>
        </div>

        {/* KONTEN TAB 1: DONASI */}
        {activeTab === 'donasi' && (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] animate-fade-in">
            {/* Nomor Kontak Donasi Resmi */}
            <div className="rounded-3xl border border-emerald-500/30 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-2xl border border-emerald-400/30">
                  📱
                </span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    Kontak Resmi Penyaluran Donasi
                  </h3>
                  <p className="text-xs text-emerald-300">
                    Hubungi pengurus panti langsung melalui nomor telepon & WhatsApp resmi di bawah ini.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {kontakDonasiList.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#052d1e]/80 p-5 transition hover:border-emerald-400 hover:shadow-lg"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-emerald-400 text-slate-950 px-2.5 py-0.5 text-[11px] font-extrabold shadow">
                            {item.peran}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                            {item.nama}
                          </span>
                        </div>
                        <div className="mt-2 font-mono text-xl sm:text-2xl font-black text-emerald-300 tracking-wide">
                          {item.nomor}
                        </div>
                        <div className="mt-1 text-xs text-emerald-100/90 font-medium">
                          {item.keterangan}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleCopy(item.nomor, idx)}
                          className={`rounded-xl px-3.5 py-2 text-xs font-bold transition shadow ${
                            copiedIndex === idx
                              ? 'bg-emerald-400 text-slate-950 ring-2 ring-emerald-300'
                              : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-white border border-emerald-500/40'
                          }`}
                        >
                          {copiedIndex === idx ? '✓ Tersalin!' : '📋 Salin'}
                        </button>
                        <a
                          href={item.waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary !px-4 !py-2 text-xs !bg-emerald-500 hover:!bg-emerald-400 inline-flex items-center gap-1.5 shadow"
                        >
                          <span>💬</span>
                          <span>Chat WA</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Panduan Konfirmasi Donasi */}
              <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-4 sm:p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1">
                  💡 Cara Penyaluran & Konfirmasi Bantuan
                </h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed text-justify">
                  Silakan hubungi salah satu narahubung resmi di atas untuk memperoleh informasi detail penyaluran bantuan, berdiskusi mengenai kebutuhan mendesak anak binaan, atau mengonfirmasi pengiriman donasi/alat wirausaha.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/6285222555562?text=Halo%20Bu%20Nova%20(Pengurus%20Panti%20Wira%20Adhi%20Karya),%20saya%20ingin%20menyalurkan%20donasi/bantuan.%20Mohon%20informasi%20prosedurnya."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center text-xs sm:text-sm !bg-emerald-500 hover:!bg-emerald-400"
                  >
                    Hubungi Narahubung 1 (Bu Nova: +62 852-2255-5562) &rarr;
                  </a>
                  <a
                    href="https://wa.me/6281226575564?text=Halo%20Bu%20Nur%20(Pengurus%20Panti%20Wira%20Adhi%20Karya),%20saya%20ingin%20menyalurkan%20donasi/bantuan.%20Mohon%20informasi%20prosedurnya."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 text-center text-xs sm:text-sm"
                  >
                    Hubungi Narahubung 2 (Bu Nur: +62 812-2657-5564) &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Manfaat & Alokasi Penyaluran */}
            <div className="flex flex-col justify-between rounded-3xl border border-emerald-500/30 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  Alokasi Bantuan & Transparansi
                </h3>
                <p className="mt-2 text-xs text-emerald-100/80 leading-relaxed text-justify">
                  Setiap rupiah yang Anda salurkan digunakan sepenuhnya untuk program pembinaan nyata dan kemandirian anak panti:
                </p>

                <ul className="mt-5 space-y-3.5">
                  <li className="flex items-start gap-3 text-xs sm:text-sm text-emerald-100/90">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                      🥣
                    </span>
                    <span><strong>Bahan Baku Produksi:</strong> Pengadaan bahan olahan pangan (daun cincau, singkong, gula aren) untuk sesi praktik.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs sm:text-sm text-emerald-100/90">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                      💻
                    </span>
                    <span><strong>Fasilitas Literasi Digital:</strong> Perangkat dan jaringan untuk pelatihan desain Canva dan pengelolaan website usaha.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs sm:text-sm text-emerald-100/90">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                      🎓
                    </span>
                    <span><strong>Tabungan Pendidikan & Kemandirian:</strong> Modal awal anak binaan untuk merintis usaha mandiri setelah lulus pembinaan.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 p-4 text-center">
                <span className="text-xs text-emerald-200">Ingin berkunjung atau menyerahkan bantuan langsung?</span>
                <div className="mt-1 text-xs font-bold text-emerald-400">
                  Jl. Panti Sosial No. 123, Ungaran, Kab. Semarang
                </div>
              </div>
            </div>
          </div>
        )}

        {/* KONTEN TAB 2: KEMITRAAN KAMPUS / CSR */}
        {activeTab === 'kemitraan' && (
          <div className="mt-10 rounded-3xl border border-emerald-500/30 bg-slate-900/90 p-6 sm:p-10 backdrop-blur-md shadow-2xl animate-fade-in">
            <div className="max-w-3xl">
              <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1 text-xs font-bold text-emerald-300">
                Kolaborasi Institusi & CSR
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white">
                Program Kemitraan, PKM & Pengabdian Masyarakat
              </h3>
              <p className="mt-3 text-sm text-emerald-100/90 leading-relaxed text-justify">
                Panti Wira Adhi Karya Ungaran terbuka lebar untuk menjalin kolaborasi strategis bersama perguruan tinggi (program PKM, KKN Tematik, Magang Mandiri), instansi pemerintahan, komunitas penggiat sosial, serta perusahaan melalui program Corporate Social Responsibility (CSR).
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-5">
                <div className="text-2xl mb-2">🎓</div>
                <h4 className="font-bold text-white text-sm">Universitas & Mahasiswa</h4>
                <p className="mt-2 text-xs text-emerald-100/80 leading-relaxed text-justify">
                  Pelaksanaan PKM-PM, KKN, riset pemberdayaan sosial, serta pendampingan kewirausahaan oleh tim akademisi.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-5">
                <div className="text-2xl mb-2">🏢</div>
                <h4 className="font-bold text-white text-sm">Perusahaan & Program CSR</h4>
                <p className="mt-2 text-xs text-emerald-100/80 leading-relaxed text-justify">
                  Pemberian bantuan alat produksi, renovasi sarana keterampilan, dan pembinaan bisnis berkelanjutan.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-5">
                <div className="text-2xl mb-2">👥</div>
                <h4 className="font-bold text-white text-sm">Komunitas & Relawan</h4>
                <p className="mt-2 text-xs text-emerald-100/80 leading-relaxed text-justify">
                  Berbagi inspirasi, pelatihan soft skills, workshop kerajinan, hingga mentoring wirausaha bagi anak binaan.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-emerald-500/20 pt-6">
              <div className="text-xs text-emerald-200">
                Punya proposal atau gagasan kolaborasi untuk panti kami?
              </div>
              <a
                href="https://wa.me/6281226575564?text=Halo%20Pengurus%20Panti%20Wira%20Adhi%20Karya,%20kami%20dari%20institusi/komunitas%20ingin%20mengajukan%20rencana%20kemitraan/kolaborasi%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm"
              >
                Ajukan Diskusi Kemitraan via WhatsApp &rarr;
              </a>
            </div>
          </div>
        )}

        {/* KONTEN TAB 3: DUKUNG DENGAN MEMBELI PRODUK */}
        {activeTab === 'produk' && (
          <div className="mt-10 rounded-3xl border border-emerald-500/30 bg-slate-900/90 p-6 sm:p-10 backdrop-blur-md shadow-2xl text-center animate-fade-in">
            <div className="mx-auto max-w-2xl">
              <span className="text-3xl">🛒</span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white">
                Beli Karya & Dukung Kemandirian Ekonomi
              </h3>
              <p className="mt-3 text-sm text-emerald-100/90 leading-relaxed text-justify sm:text-center">
                Membeli produk karya penghuni panti merupakan bentuk dukungan nyata yang berkelanjutan. Setiap pembelian es cincau segar, singkong serut manis, dan aneka kerajinan tangan langsung dialokasikan untuk uang saku dan tabungan usaha anak binaan.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/produk" className="btn-primary text-sm">
                  Lihat Semua Produk Karya Panti &rarr;
                </Link>
                <a
                  href="https://wa.me/6281226575564?text=Halo%20Panti%20Wira%20Adhi%20Karya,%20saya%20ingin%20memesan%20produk%20olahan%20pangan/kerajinan%20dalam%20jumlah%20khusus."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  Pesan Khusus / Grosir via WhatsApp ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
