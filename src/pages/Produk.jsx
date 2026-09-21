import { useState } from 'react'
import produk from '../data/produk'
import BeliProdukModal from '../components/BeliProdukModal'

const formatRupiah = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value)

export default function Produk() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <section className="bg-[#F7F3EC] px-6 py-16 md:px-10 lg:px-16 min-h-screen">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1D4E89]">
            Katalog Karya
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#1F2A24] md:text-5xl">
            Produk
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#3F4A44] md:text-lg">
            Katalog produk hasil karya penghuni panti. Setiap barang dibuat dengan tangan, dari
            keterampilan yang terus diasah setiap hari.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {produk.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#1D4E89]/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-square w-full overflow-hidden bg-[#EFE9DD] relative">
                <img
                  src={item.gambar}
                  alt={item.nama}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#1D4E89]/90 backdrop-blur-md px-3 py-1 font-mono text-[11px] font-semibold text-white shadow">
                  {item.kategori}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-5">
                <h2 className="font-serif text-lg font-bold leading-snug text-[#1F2A24] group-hover:text-emerald-700 transition">
                  {item.nama}
                </h2>
                <p
                  className="text-sm leading-relaxed text-[#3F4A44]"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {item.deskripsi}
                </p>

                <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Harga Produk:</span>
                    <span className="font-mono text-base font-extrabold text-emerald-700">
                      {formatRupiah(item.harga)}
                    </span>
                  </div>

                  {/* Tombol Pesan via WhatsApp */}
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(item)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-emerald-500 hover:shadow-lg active:scale-95"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Beli via WhatsApp</span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal Pilihan Narahubung WhatsApp */}
      <BeliProdukModal
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        produk={selectedProduct}
      />
    </section>
  )
}