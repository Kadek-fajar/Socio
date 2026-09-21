import { Link } from 'react-router-dom'
import { formatRupiah } from '../utils/format'

export default function ProductCard({ produk }) {
  return (
    <Link
      to={`/produk/${produk.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-200/80 bg-white text-slate-900 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400 hover:shadow-2xl"
    >
      <div className="aspect-square w-full overflow-hidden bg-slate-100 relative">
        <img
          src={produk.gambar}
          alt={produk.nama}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-emerald-600/90 backdrop-blur-md px-2.5 py-0.5 text-xs font-semibold text-white shadow">
          {produk.kategori}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4 bg-white">
        <h3 className="font-display text-sm font-bold text-slate-800 transition group-hover:text-emerald-600 sm:text-base line-clamp-2">
          {produk.nama}
        </h3>
        <p className="mt-auto text-base font-extrabold text-emerald-600 sm:text-lg">
          {formatRupiah(produk.harga)}
        </p>
      </div>
    </Link>
  )
}
