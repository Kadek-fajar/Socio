import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useProducts } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const formatRupiah = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value)

const PRESET_IMAGES = [
  { label: 'Es Cincau', url: '/images/produk 1_Es Cincau.jpg' },
  { label: 'Keripik Singkong', url: '/images/produk 2_Singkong Serut.jpg' },
  { label: 'Placeholder Umum', url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
]

export default function Dashboard() {
  const { user, logout } = useAuth()
  const { products, addProduct, deleteProduct } = useProducts()

  const [showModal, setShowModal] = useState(false)
  const [nama, setNama] = useState('')
  const [harga, setHarga] = useState('')
  const [kategori, setKategori] = useState('Makanan & Minuman')
  const [gambar, setGambar] = useState('/images/produk 2_Singkong Serut.jpg')
  const [deskripsi, setDeskripsi] = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setErrorMsg('File yang dipilih harus berupa gambar (JPG, PNG, WEBP).')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('Ukuran gambar terlalu besar (Maksimal 5MB).')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setGambar(reader.result)
      setErrorMsg('')
    }
    reader.readAsDataURL(file)
  }

  const handleAddSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setSuccessMsg('')

    if (!nama.trim() || !harga || !kategori) {
      setErrorMsg('Nama, harga, dan kategori produk wajib diisi.')
      return
    }

    try {
      setSubmitting(true)
      await addProduct({
        nama: nama.trim(),
        harga: Number(harga),
        kategori,
        gambar: gambar.trim() || '/images/produk 2_Singkong Serut.jpg',
        deskripsi: deskripsi.trim() || 'Produk hasil karya berkualitas dari binaan panti.',
      })

      setSuccessMsg(`Produk "${nama}" berhasil ditambahkan!`)
      setNama('')
      setHarga('')
      setKategori('Makanan & Minuman')
      setGambar('/images/produk 2_Singkong Serut.jpg')
      setDeskripsi('')
      setShowModal(false)

      setTimeout(() => setSuccessMsg(''), 4000)
    } catch (err) {
      setErrorMsg(err.message || 'Gagal menambahkan produk.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id, namaProduk) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus produk "${namaProduk}"?`)) {
      try {
        await deleteProduct(id)
        setSuccessMsg(`Produk "${namaProduk}" berhasil dihapus.`)
        setTimeout(() => setSuccessMsg(''), 4000)
      } catch (err) {
        alert('Gagal menghapus produk: ' + err.message)
      }
    }
  }

  return (
    <section className="bg-[#F7F3EC] px-4 py-10 sm:px-8 lg:px-12 min-h-screen">
      <div className="mx-auto max-w-6xl">
        {/* Header Dashboard Admin */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-3xl bg-[#063825] p-6 text-white shadow-xl">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-500/30 border border-emerald-400/40 px-3 py-0.5 text-xs font-bold text-emerald-300">
                Dashboard Admin
              </span>
            </div>
            <h1 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
              Halo, {user?.nama || 'Administrator'}! 👋
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-emerald-100/80">
              Kelola dan tambahkan katalog produk karya binaan Panti Wira Adhi Karya.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/produk"
              className="rounded-xl border border-emerald-500/40 bg-emerald-900/40 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-200 hover:bg-emerald-800/50 transition"
            >
              Lihat Kataloh Public ↗
            </Link>
            <button
              type="button"
              onClick={logout}
              className="rounded-xl bg-rose-600 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow hover:bg-rose-500 transition"
            >
              Keluar (Logout)
            </button>
          </div>
        </div>

        {/* Banner Sukses / Alert */}
        {successMsg && (
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-emerald-500/40 bg-emerald-100 p-4 text-emerald-900 text-sm shadow">
            <div className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-700">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="font-semibold">{successMsg}</span>
            </div>
            <button onClick={() => setSuccessMsg('')} className="text-xs font-bold text-emerald-700 hover:underline">
              Tutup
            </button>
          </div>
        )}

        {/* Ringkasan & Tombol Aksi */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-xl font-bold text-[#1F2A24]">
              Katalog Produk ({products.length})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Daftar produk karya binaan panti yang aktif ditampilkan di website.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white shadow-lg transition hover:bg-emerald-500 active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>+ Tambah Produk Baru</span>
          </button>
        </div>

        {/* List Grid Produk Admin */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#063825]/80 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white">
                  {item.kategori}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-serif text-base font-bold text-slate-900">
                  {item.nama}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600">
                  {item.deskripsi}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-base font-extrabold text-emerald-700">
                    {formatRupiah(item.harga)}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id, item.nama)}
                    className="rounded-lg bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-600 hover:bg-rose-100 transition"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL FORM TAMBAH PRODUK */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-[#063825] px-6 py-4 text-white">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <h3 className="font-serif text-lg font-bold">Tambah Produk Baru</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-full p-1 text-emerald-200 hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleAddSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              {errorMsg && (
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 font-semibold">
                  ⚠️ {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Produk <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Keripik Singkong Balado"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Harga (Rp) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="15000"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kategori <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                  >
                    <option value="Makanan & Minuman">Makanan & Minuman</option>
                    <option value="Kerajinan Tangan">Kerajinan Tangan</option>
                    <option value="Pakaian & Tekstil">Pakaian & Tekstil</option>
                    <option value="Jasa & Lainnya">Jasa & Lainnya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Foto / Gambar Produk <span className="text-rose-500">*</span>
                </label>

                {/* Live Preview jika gambar terisi */}
                {gambar ? (
                  <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 group">
                    <img src={gambar} alt="Preview Produk" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => setGambar('')}
                        className="rounded-xl bg-rose-600 px-3 py-1.5 text-xs font-bold text-white shadow hover:bg-rose-500"
                      >
                        🗑️ Hapus Gambar
                      </button>
                    </div>
                  </div>
                ) : null}

                {/* File Upload Box */}
                <div className="flex flex-col gap-2">
                  <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-500/40 bg-emerald-50/40 p-4 text-center hover:bg-emerald-100/50 transition">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-700 mb-1">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span className="text-xs font-bold text-emerald-900">
                      Klik untuk Unggah Foto dari Perangkat
                    </span>
                    <span className="text-[11px] text-slate-500 mt-0.5">
                      PNG, JPG, WEBP (Maksimal 5MB)
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>

                  <div className="flex items-center gap-2 my-1">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-[10px] font-bold text-slate-400">ATAU PAKAI URL / PRESET</span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  <input
                    type="text"
                    placeholder="/images/produk 2_Singkong Serut.jpg atau URL HTTPS"
                    value={gambar}
                    onChange={(e) => setGambar(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                  />
                  
                  {/* Preset Options */}
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="text-[11px] text-slate-500 font-medium">Pilihan cepat:</span>
                    {PRESET_IMAGES.map((preset) => (
                      <button
                        key={preset.url}
                        type="button"
                        onClick={() => setGambar(preset.url)}
                        className="rounded-lg bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-700 hover:bg-slate-200"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Deskripsi Produk
                </label>
                <textarea
                  rows="3"
                  placeholder="Jelaskan keunikan dan detail dari produk ini..."
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-xl px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-500 transition disabled:opacity-50"
                >
                  {submitting ? 'Menyimpan...' : 'Simpan Produk'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
