import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import produkList from '../data/produk'
import { formatRupiah } from '../utils/format'
import BeliProdukModal from '../components/BeliProdukModal'

export default function DetailProduk() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const item = produkList.find((p) => String(p.id) === String(id)) || produkList[0]

  if (!item) {
    return (
      <div className="section py-20 text-center text-white">
        <h2 className="text-2xl font-bold">Produk Tidak Ditemukan</h2>
        <p className="mt-2 text-emerald-200">Silakan kembali ke halaman katalog produk.</p>
        <Link to="/produk" className="btn-primary mt-6">
          &larr; Kembali ke Katalog Produk
        </Link>
      </div>
    )
  }

  const narahubungList = [
    {
      nama: 'Bu Nova',
      peran: 'Narahubung 1',
      nomor: '+62 852-2255-5562',
      rawNomor: '6285222555562',
      badge: 'Narahubung 1',
      icon: '📞',
    },
    {
      nama: 'Bu Nur',
      peran: 'Narahubung 2',
      nomor: '+62 812-2657-5564',
      rawNomor: '6281226575564',
      badge: 'Narahubung 2',
      icon: '💬',
    },
  ]

  const getWaLink = (rawNomor, namaNarahubung) => {
    const text = `Halo ${namaNarahubung} (Pengurus Panti Wira Adhi Karya), saya ingin memesan produk *${item.nama}* (Harga: ${formatRupiah(item.harga)}) melalui katalog website. Apakah produk ini masih tersedia?`
    return `https://wa.me/${rawNomor}?text=${encodeURIComponent(text)}`
  }

  return (
    <div className="bg-[#F7F3EC] py-12 md:py-16 min-h-screen text-slate-900">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-600">
          <Link to="/" className="hover:text-emerald-700 font-medium">Beranda</Link>
          <span>/</span>
          <Link to="/produk" className="hover:text-emerald-700 font-medium">Katalog Produk</Link>
          <span>/</span>
          <span className="font-bold text-emerald-800 truncate">{item.nama}</span>
        </nav>

        {/* Product Detail Container */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl grid md:grid-cols-2 gap-8 p-6 sm:p-10">
          {/* Gambar Produk */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 aspect-square flex items-center justify-center">
            <img
              src={item.gambar}
              alt={item.nama}
              className="h-full w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-[#1D4E89]/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white shadow">
              {item.kategori}
            </span>
          </div>

          {/* Info & Aksi Pemesanan */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                Produk Karya Binaan Panti
              </span>
              <h1 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F2A24] leading-tight">
                {item.nama}
              </h1>

              <div className="mt-4 rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                <span className="text-xs font-semibold text-emerald-800">Harga Satuan:</span>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                  {formatRupiah(item.harga)}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Deskripsi Produk:
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 text-justify">
                  {item.deskripsi}
                </p>
              </div>
            </div>

            {/* Bagian Pemesanan WhatsApp */}
            <div className="mt-8 border-t border-slate-200 pt-6">
              <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span>🛒 Pesan Langsung via WhatsApp:</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {narahubungList.map((kontak, idx) => (
                  <a
                    key={idx}
                    href={getWaLink(kontak.rawNomor, kontak.nama)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow transition-all hover:bg-emerald-500 hover:shadow-lg active:scale-95"
                  >
                    <div className="flex items-center gap-2 text-left">
                      <span className="text-lg">{kontak.icon}</span>
                      <div>
                        <div className="font-bold">{kontak.nama}</div>
                        <div className="text-[10px] text-emerald-100 font-mono">{kontak.nomor}</div>
                      </div>
                    </div>
                    <span>&rarr;</span>
                  </a>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                <Link
                  to="/produk"
                  className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition"
                >
                  &larr; Lihat Produk Lainnya
                </Link>
                <Link
                  to="/dukung-kami"
                  className="text-xs sm:text-sm font-semibold text-emerald-700 hover:underline"
                >
                  Salurkan Donasi Panti &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BeliProdukModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        produk={item}
      />
    </div>
  )
}
