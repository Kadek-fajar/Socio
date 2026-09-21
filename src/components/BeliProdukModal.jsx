import React from 'react'
import { formatRupiah } from '../utils/format'

export default function BeliProdukModal({ isOpen, onClose, produk }) {
  if (!isOpen || !produk) return null

  const narahubungList = [
    {
      nama: 'Bu Nova',
      peran: 'Narahubung 1',
      nomor: '+62 852-2255-5562',
      rawNomor: '6285222555562',
      keterangan: 'Layanan Pemesanan Produk & Informasi Ketersediaan Stok',
      badge: 'Narahubung 1',
      icon: '📞',
    },
    {
      nama: 'Bu Nur',
      peran: 'Narahubung 2',
      nomor: '+62 812-2657-5564',
      rawNomor: '6281226575564',
      keterangan: 'Layanan Pemesanan Produk, Pengiriman & Konfirmasi Pembayaran',
      badge: 'Narahubung 2',
      icon: '💬',
    },
  ]

  const getWaLink = (rawNomor, namaNarahubung) => {
    const text = `Halo ${namaNarahubung} (Pengurus Panti Wira Adhi Karya), saya ingin memesan produk *${produk.nama}* (Harga: ${formatRupiah(produk.harga)}) melalui katalog website. Apakah produk ini tersedia?`
    return `https://wa.me/${rawNomor}?text=${encodeURIComponent(text)}`
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-emerald-500/40 bg-[#063825] p-6 text-white shadow-2xl sm:p-8">
        {/* Tombol Tutup */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-950/60 text-emerald-300 hover:bg-rose-600 hover:text-white transition"
          aria-label="Tutup Modal"
        >
          ✕
        </button>

        {/* Header Modal */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-2xl border border-emerald-400/30">
            🛍️
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
              Pesan via WhatsApp
            </h3>
            <p className="text-xs text-emerald-200/80">
              Pilih salah satu nomor narahubung resmi panti untuk memesan
            </p>
          </div>
        </div>

        {/* Ringkasan Produk */}
        <div className="mt-5 flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/70 p-3.5 shadow-inner">
          <img
            src={produk.gambar}
            alt={produk.nama}
            className="h-16 w-16 rounded-xl object-cover border border-emerald-500/40 shrink-0"
          />
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
              {produk.kategori || 'Karya Binaan'}
            </span>
            <h4 className="font-bold text-white text-sm sm:text-base truncate">
              {produk.nama}
            </h4>
            <p className="text-sm font-extrabold text-emerald-300">
              {formatRupiah(produk.harga)}
            </p>
          </div>
        </div>

        {/* Opsi Narahubung WhatsApp */}
        <div className="mt-5 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            Pilih Nomor WhatsApp:
          </p>

          {narahubungList.map((kontak, idx) => (
            <a
              key={idx}
              href={getWaLink(kontak.rawNomor, kontak.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-900/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-800/60 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{kontak.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm sm:text-base">
                        {kontak.nama}
                      </span>
                      <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                        {kontak.badge}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-emerald-300 font-semibold">
                      {kontak.nomor}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow transition group-hover:bg-emerald-300 group-hover:scale-105">
                  <span>Chat WA</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              <p className="text-[11px] text-emerald-100/70 border-t border-emerald-500/20 pt-2">
                {kontak.keterangan}
              </p>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-5 text-center">
          <p className="text-[11px] text-emerald-200/60">
            Pembelian Anda langsung mendukung kemandirian dan pemberdayaan anak binaan panti.
          </p>
        </div>
      </div>
    </div>
  )
}
