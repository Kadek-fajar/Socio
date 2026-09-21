import { useState } from 'react'

export default function KalkulatorArusKas() {
  // Input State
  // 0. Kas Awal Periode
  const [kasAwalPeriode, setKasAwalPeriode] = useState(0)

  // 1. Aktivitas Operasi
  const [penerimaanPenjualan, setPenerimaanPenjualan] = useState(0)
  const [pembelianBahanBaku, setPembelianBahanBaku] = useState(0)
  const [biayaOperasional, setBiayaOperasional] = useState(0)
  const [pengeluaranLainOperasi, setPengeluaranLainOperasi] = useState(0)

  // 2. Aktivitas Investasi
  const [penjualanAset, setPenjualanAset] = useState(0)
  const [pembelianAset, setPembelianAset] = useState(0)

  // 3. Aktivitas Pendanaan
  const [pinjamanModal, setPinjamanModal] = useState(0)
  const [pembayaranUtang, setPembayaranUtang] = useState(0)
  const [prive, setPrive] = useState(0)

  // Parsing values to numbers
  const valKasAwalPeriode = Number(kasAwalPeriode) || 0

  const valPenerimaanPenjualan = Number(penerimaanPenjualan) || 0
  const valPembelianBahanBaku = Number(pembelianBahanBaku) || 0
  const valBiayaOperasional = Number(biayaOperasional) || 0
  const valPengeluaranLainOperasi = Number(pengeluaranLainOperasi) || 0

  const valPenjualanAset = Number(penjualanAset) || 0
  const valPembelianAset = Number(pembelianAset) || 0

  const valPinjamanModal = Number(pinjamanModal) || 0
  const valPembayaranUtang = Number(pembayaranUtang) || 0
  const valPrive = Number(prive) || 0

  // 1. Kas Bersih Aktivitas Operasi = Penerimaan Penjualan − Pembelian Bahan Baku − Biaya Operasional − Pengeluaran Lain
  const kasOperasi = valPenerimaanPenjualan - valPembelianBahanBaku - valBiayaOperasional - valPengeluaranLainOperasi

  // 2. Kas Bersih Aktivitas Investasi = Penjualan Aset − Pembelian Aset
  const kasInvestasi = valPenjualanAset - valPembelianAset

  // 3. Kas Bersih Aktivitas Pendanaan = Pinjaman/Modal − Pembayaran Utang − Prive
  const kasPendanaan = valPinjamanModal - valPembayaranUtang - valPrive

  // 4. Kenaikan (Penurunan) Kas Bersih = Kas Operasi + Kas Investasi + Kas Pendanaan
  const kenaikanPenurunanKasBersih = kasOperasi + kasInvestasi + kasPendanaan

  // 5. Kas Akhir Periode = Kenaikan (Penurunan) Kas Bersih + Kas Awal Periode
  const kasAkhirPeriode = kenaikanPenurunanKasBersih + valKasAwalPeriode

  // Formatters
  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount || 0)
  }

  const loadPresetData = () => {
    setKasAwalPeriode(15000000)
    setPenerimaanPenjualan(35000000)
    setPembelianBahanBaku(14000000)
    setBiayaOperasional(4500000)
    setPengeluaranLainOperasi(800000)
    setPenjualanAset(1000000)
    setPembelianAset(3500000)
    setPinjamanModal(10000000)
    setPembayaranUtang(2000000)
    setPrive(2000000)
  }

  const handleReset = () => {
    setKasAwalPeriode(0)
    setPenerimaanPenjualan(0)
    setPembelianBahanBaku(0)
    setBiayaOperasional(0)
    setPengeluaranLainOperasi(0)
    setPenjualanAset(0)
    setPembelianAset(0)
    setPinjamanModal(0)
    setPembayaranUtang(0)
    setPrive(0)
  }

  return (
    <div className="section py-10">
      {/* Header Banner */}
      <div className="card mb-8 p-6 lg:p-8 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 border-emerald-500/30">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="2" />
                <path d="M6 12h.01M18 12h.01" />
              </svg>
              Kalkulator Keuangan Usaha
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Kalkulator Arus Kas (Cash Flow)
            </h1>
            <p className="text-emerald-100/70 max-w-2xl text-sm sm:text-base">
              Pantau arus uang masuk dan keluar usaha Anda berdasarkan 3 aktivitas utama: Operasi, Investasi, dan Pendanaan → Kenaikan/Penurunan Kas Bersih → Saldo Kas Akhir.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={loadPresetData}
              className="btn-outline text-xs px-4 py-2 flex-1 md:flex-none border-emerald-400/40 hover:bg-emerald-500/20"
            >
              ⚡ Isi Contoh Data
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 text-xs rounded-full border border-rose-500/30 text-rose-300 hover:bg-rose-500/20 transition duration-200 flex-1 md:flex-none"
            >
              🔄 Reset Input
            </button>
          </div>
        </div>
      </div>

      {/* Visual Workflow Tracker Bar */}
      <div className="card p-4 mb-8 border-emerald-500/20 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[650px] gap-2 text-xs">
          {/* Step 1 */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            <span className="font-bold">1. Kas Operasi</span>
          </div>
          <span className="text-emerald-500 font-bold">+</span>

          {/* Step 2 */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            <span className="font-bold">2. Kas Investasi</span>
          </div>
          <span className="text-emerald-500 font-bold">+</span>

          {/* Step 3 */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            <span className="font-bold">3. Kas Pendanaan</span>
          </div>
          <span className="text-emerald-500 font-bold">➔</span>

          {/* Step 4 */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-400/20 border border-emerald-400/50 text-white font-bold">
            <span>4. Kenaikan/Penurunan Kas</span>
          </div>
          <span className="text-emerald-500 font-bold">➔</span>

          {/* Step 5 */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500 text-slate-950 font-extrabold">
            <span>5. Kas Akhir Periode</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Input Form & Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Input Form (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Kas Awal Periode */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">0</span>
                <h2>Saldo Kas Awal Periode</h2>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                Saldo Kas Awal (Uang Tunai & Bank di Awal Periode)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                <input
                  type="number"
                  min="0"
                  value={kasAwalPeriode}
                  onChange={(e) => setKasAwalPeriode(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                  placeholder="0"
                />
              </div>
              <span className="text-[11px] text-emerald-300/60 mt-1 block">
                {formatRupiah(valKasAwalPeriode)}
              </span>
            </div>
          </div>

          {/* Section 1: Aktivitas Operasi */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">1</span>
                <h2>Aktivitas Operasi</h2>
              </div>
              <span className={`text-[11px] font-mono font-bold ${kasOperasi >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
                {formatRupiah(kasOperasi)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Penerimaan Penjualan (Uang Masuk)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={penerimaanPenjualan}
                    onChange={(e) => setPenerimaanPenjualan(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Pembelian Bahan Baku (Pengeluaran)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={pembelianBahanBaku}
                    onChange={(e) => setPembelianBahanBaku(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Biaya Operasional (Sewa, Gaji, Listrik)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={biayaOperasional}
                    onChange={(e) => setBiayaOperasional(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Pengeluaran Lain-lain Operasi
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={pengeluaranLainOperasi}
                    onChange={(e) => setPengeluaranLainOperasi(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Aktivitas Investasi */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">2</span>
                <h2>Aktivitas Investasi</h2>
              </div>
              <span className={`text-[11px] font-mono font-bold ${kasInvestasi >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
                {formatRupiah(kasInvestasi)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Penjualan Aset (Peralatan/Mesin Lama)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={penjualanAset}
                    onChange={(e) => setPenjualanAset(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Pembelian Aset (Beli Alat/Mesin Baru)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={pembelianAset}
                    onChange={(e) => setPembelianAset(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Aktivitas Pendanaan */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">3</span>
                <h2>Aktivitas Pendanaan</h2>
              </div>
              <span className={`text-[11px] font-mono font-bold ${kasPendanaan >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
                {formatRupiah(kasPendanaan)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Pinjaman / Modal
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={pinjamanModal}
                    onChange={(e) => setPinjamanModal(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-xs font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Pembayaran Utang
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={pembayaranUtang}
                    onChange={(e) => setPembayaranUtang(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-xs font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Prive (Tarik Pribadi)
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={prive}
                    onChange={(e) => setPrive(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-xs font-mono"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Results & Summary (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Cash Result Card */}
          <div className={`card p-6 border-2 transition-all duration-300 ${
            kasAkhirPeriode >= valKasAwalPeriode
              ? 'border-emerald-500/50 bg-emerald-950/30 shadow-emerald-500/10'
              : 'border-rose-500/50 bg-rose-950/30 shadow-rose-500/10'
          }`}>
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Saldo Kas Akhir Periode
              </span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                kenaikanPenurunanKasBersih > 0
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : kenaikanPenurunanKasBersih < 0
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  : 'bg-slate-700 text-slate-300'
              }`}>
                {kenaikanPenurunanKasBersih > 0 ? '🟢 SURPLUS KAS' : kenaikanPenurunanKasBersih < 0 ? '🔴 DEFISIT KAS' : '⚪ KAS STABIL'}
              </span>
            </div>

            <div className="space-y-4">
              {/* Kas Akhir */}
              <div>
                <span className="text-xs text-emerald-100/70 block">Total Kas Akhir Periode</span>
                <span className={`text-2xl sm:text-3xl font-extrabold font-mono ${
                  kasAkhirPeriode >= 0 ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {formatRupiah(kasAkhirPeriode)}
                </span>
              </div>

              {/* Kenaikan/Penurunan Kas */}
              <div className="pt-2 border-t border-emerald-500/10 flex justify-between items-center">
                <div>
                  <span className="text-xs text-emerald-100/70 block">Kenaikan / (Penurunan) Kas</span>
                  <span className="text-xs text-emerald-100/50">(Kas Operasi + Investasi + Pendanaan)</span>
                </div>
                <span className={`text-lg font-bold font-mono ${
                  kenaikanPenurunanKasBersih >= 0 ? 'text-emerald-300' : 'text-rose-300'
                }`}>
                  {kenaikanPenurunanKasBersih > 0 ? '+' : ''}{formatRupiah(kenaikanPenurunanKasBersih)}
                </span>
              </div>
            </div>
          </div>

          {/* Breakdown Summary Table Card */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-500/20 pb-2">
              📊 Rincian Arus Kas Usaha
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">1. Kas Aktivitas Operasi</span>
                <span className={`font-mono font-semibold ${kasOperasi >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {formatRupiah(kasOperasi)}
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">2. Kas Aktivitas Investasi</span>
                <span className={`font-mono font-semibold ${kasInvestasi >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {formatRupiah(kasInvestasi)}
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">3. Kas Aktivitas Pendanaan</span>
                <span className={`font-mono font-semibold ${kasPendanaan >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {formatRupiah(kasPendanaan)}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 bg-emerald-500/10 px-3 rounded-lg border border-emerald-500/20 font-bold">
                <span className="text-emerald-300">4. Kenaikan (Penurunan) Kas</span>
                <span className={`font-mono text-base ${kenaikanPenurunanKasBersih >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {formatRupiah(kenaikanPenurunanKasBersih)}
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">(+) Saldo Kas Awal Periode</span>
                <span className="font-mono font-semibold text-white">{formatRupiah(valKasAwalPeriode)}</span>
              </div>

              <div className="flex justify-between items-center py-2 bg-slate-950/40 px-3 rounded-lg border border-slate-800 font-bold">
                <span className="text-emerald-200">5. Saldo Kas Akhir Periode</span>
                <span className={`font-mono text-base ${kasAkhirPeriode >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {formatRupiah(kasAkhirPeriode)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Mathematical Formula Explanation Section */}
      <div className="mt-12 card p-6 lg:p-8 border-emerald-500/20">
        <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <span>📐</span> Penerapan Rumus Arus Kas
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mb-6">
          Berikut rincian kalkulasi berdasarkan rumus arus kas (cash flow):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
          {/* Rumus 1 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">1. Kas Bersih Aktivitas Operasi</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Penjualan − Pembelian BB − Biaya Operasional − Pengeluaran Lain
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(valPenerimaanPenjualan)} − {formatRupiah(valPembelianBahanBaku)} − {formatRupiah(valBiayaOperasional)} − {formatRupiah(valPengeluaranLainOperasi)} = <strong className="text-white">{formatRupiah(kasOperasi)}</strong>
            </p>
          </div>

          {/* Rumus 2 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">2. Kas Bersih Aktivitas Investasi</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Penjualan Aset − Pembelian Aset
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(valPenjualanAset)} − {formatRupiah(valPembelianAset)} = <strong className="text-white">{formatRupiah(kasInvestasi)}</strong>
            </p>
          </div>

          {/* Rumus 3 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">3. Kas Bersih Aktivitas Pendanaan</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Pinjaman/Modal − Pembayaran Utang − Prive
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(valPinjamanModal)} − {formatRupiah(valPembayaranUtang)} − {formatRupiah(valPrive)} = <strong className="text-white">{formatRupiah(kasPendanaan)}</strong>
            </p>
          </div>

          {/* Rumus 4 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">4. Kenaikan (Penurunan) Kas Bersih</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Kas Operasi + Kas Investasi + Kas Pendanaan
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(kasOperasi)} + ({formatRupiah(kasInvestasi)}) + ({formatRupiah(kasPendanaan)}) = <strong className="text-white">{formatRupiah(kenaikanPenurunanKasBersih)}</strong>
            </p>
          </div>

          {/* Rumus 5 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1 md:col-span-2 lg:col-span-2">
            <span className="text-emerald-400 font-semibold block">5. Kas Akhir Periode</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Kenaikan (Penurunan) Kas Bersih + Kas Awal Periode
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(kenaikanPenurunanKasBersih)} + {formatRupiah(valKasAwalPeriode)} = <strong className="text-white">{formatRupiah(kasAkhirPeriode)}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


