import { useState } from 'react'

export default function KalkulatorLabaRugi() {
  // Input State
  const [penjualanKotor, setPenjualanKotor] = useState(0)
  const [returPotongan, setReturPotongan] = useState(0)
  const [hpp, setHpp] = useState(0)
  const [biayaPemasaran, setBiayaPemasaran] = useState(0)
  const [biayaAdministrasi, setBiayaAdministrasi] = useState(0)
  const [pendapatanLain, setPendapatanLain] = useState(0)
  const [biayaLain, setBiayaLain] = useState(0)
  const [tarifPajak, setTarifPajak] = useState(0)

  // Parsing values to numbers
  const valPenjualanKotor = Number(penjualanKotor) || 0
  const valReturPotongan = Number(returPotongan) || 0
  const valHpp = Number(hpp) || 0
  const valBiayaPemasaran = Number(biayaPemasaran) || 0
  const valBiayaAdministrasi = Number(biayaAdministrasi) || 0
  const valPendapatanLain = Number(pendapatanLain) || 0
  const valBiayaLain = Number(biayaLain) || 0
  const valTarifPajak = Number(tarifPajak) || 0

  // 1. Penjualan Bersih = Penjualan Kotor − Retur & Potongan
  const penjualanBersih = valPenjualanKotor - valReturPotongan

  // 2. Laba Kotor = Penjualan Bersih − HPP
  const labaKotor = penjualanBersih - valHpp

  // 3. Biaya Operasional = Biaya Pemasaran + Biaya Administrasi
  const biayaOperasional = valBiayaPemasaran + valBiayaAdministrasi

  // 4. Laba Usaha = Laba Kotor − Biaya Operasional
  const labaUsaha = labaKotor - biayaOperasional

  // 5. Laba Sebelum Pajak = Laba Usaha + Pendapatan Lain − Biaya Lain
  const labaSebelumPajak = labaUsaha + valPendapatanLain - valBiayaLain

  // 6. Pajak = Laba Sebelum Pajak × Tarif Pajak (%)
  const pajak = labaSebelumPajak > 0 ? labaSebelumPajak * (valTarifPajak / 100) : 0

  // 7. Laba Bersih = Laba Sebelum Pajak − Pajak
  const labaBersih = labaSebelumPajak - pajak

  // 8. Margin Laba Bersih = Laba Bersih ÷ Penjualan Bersih × 100%
  const marginLabaBersih = penjualanBersih !== 0 ? (labaBersih / penjualanBersih) * 100 : 0

  // Formatter functions
  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount || 0)
  }

  const formatPersen = (val) => {
    if (isNaN(val) || !isFinite(val)) return '0%'
    return `${val.toFixed(2).replace('.', ',')}%`
  }

  const loadPresetData = () => {
    setPenjualanKotor(25000000)
    setReturPotongan(1000000)
    setHpp(12000000)
    setBiayaPemasaran(1500000)
    setBiayaAdministrasi(2000000)
    setPendapatanLain(500000)
    setBiayaLain(200000)
    setTarifPajak(0.5)
  }

  const handleReset = () => {
    setPenjualanKotor(0)
    setReturPotongan(0)
    setHpp(0)
    setBiayaPemasaran(0)
    setBiayaAdministrasi(0)
    setPendapatanLain(0)
    setBiayaLain(0)
    setTarifPajak(0)
  }

  return (
    <div className="section py-10">
      {/* Header Banner */}
      <div className="card mb-8 p-6 lg:p-8 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 border-emerald-500/30">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="16" y1="14" x2="16" y2="18" />
                <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01" />
              </svg>
              Kalkulator Keuangan Usaha
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Kalkulator Laba Rugi
            </h1>
            <p className="text-emerald-100/70 max-w-2xl text-sm sm:text-base">
              Hitung performa keuangan usaha Anda secara presisi berdasarkan 8 rumus standar akuntansi: Penjualan Bersih, Laba Kotor, Biaya Operasional, Laba Usaha, Laba Sebelum & Sesudah Pajak, hingga Margin Laba Bersih.
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

      {/* Main Grid: Input Form & Dynamic Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Section 1: Penjualan */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold border-b border-emerald-500/20 pb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">1</span>
              <h2>Pendapatan & Penjualan</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Penjualan Kotor (Gross Sales)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={penjualanKotor}
                    onChange={(e) => setPenjualanKotor(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
                <span className="text-[11px] text-emerald-300/60 mt-1 block">
                  {formatRupiah(valPenjualanKotor)}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Retur & Potongan Penjualan
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={returPotongan}
                    onChange={(e) => setReturPotongan(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
                <span className="text-[11px] text-emerald-300/60 mt-1 block">
                  {formatRupiah(valReturPotongan)}
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: HPP */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold border-b border-emerald-500/20 pb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">2</span>
              <h2>Harga Pokok Penjualan (HPP)</h2>
            </div>
            <div>
              <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                Total HPP (Modal Produk / Bahan Baku & Produksi)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                <input
                  type="number"
                  min="0"
                  value={hpp}
                  onChange={(e) => setHpp(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                  placeholder="0"
                />
              </div>
              <span className="text-[11px] text-emerald-300/60 mt-1 block">
                {formatRupiah(valHpp)}
              </span>
            </div>
          </div>

          {/* Section 3: Biaya Operasional */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold border-b border-emerald-500/20 pb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">3</span>
              <h2>Biaya Operasional</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Biaya Pemasaran (Iklan, Promosi, Komisi)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={biayaPemasaran}
                    onChange={(e) => setBiayaPemasaran(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
                <span className="text-[11px] text-emerald-300/60 mt-1 block">
                  {formatRupiah(valBiayaPemasaran)}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Biaya Administrasi (Gaji, Sewa, Listrik, ATK)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={biayaAdministrasi}
                    onChange={(e) => setBiayaAdministrasi(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
                <span className="text-[11px] text-emerald-300/60 mt-1 block">
                  {formatRupiah(valBiayaAdministrasi)}
                </span>
              </div>
            </div>
          </div>

          {/* Section 4: Pendapatan & Biaya Lain */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold border-b border-emerald-500/20 pb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">4</span>
              <h2>Pendapatan & Biaya Non-Operasional</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Pendapatan Lain-lain (Bunga, Kas, dll)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={pendapatanLain}
                    onChange={(e) => setPendapatanLain(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
                <span className="text-[11px] text-emerald-300/60 mt-1 block">
                  {formatRupiah(valPendapatanLain)}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Biaya Lain-lain (Bunga Bank, Denda, dll)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={biayaLain}
                    onChange={(e) => setBiayaLain(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
                <span className="text-[11px] text-emerald-300/60 mt-1 block">
                  {formatRupiah(valBiayaLain)}
                </span>
              </div>
            </div>
          </div>

          {/* Section 5: Pajak */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold border-b border-emerald-500/20 pb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">5</span>
              <h2>Ketentuan Pajak Usaha</h2>
            </div>
            <div>
              <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                Tarif Pajak (%)
              </label>
              <div className="relative max-w-xs">
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="100"
                  value={tarifPajak}
                  onChange={(e) => setTarifPajak(e.target.value)}
                  className="w-full pl-3 pr-8 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                  placeholder="0.5"
                />
                <span className="absolute right-3 top-2.5 text-xs text-emerald-400 font-semibold">%</span>
              </div>
              <p className="text-[11px] text-emerald-100/60 mt-1">
                *Contoh: PP 55/2022 UMKM = 0.5%, PPh Badan Standar = 22%.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Key Metrics & Financial Summary (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Profit Card */}
          <div className={`card p-6 border-2 transition-all duration-300 ${
            labaBersih > 0
              ? 'border-emerald-500/50 bg-emerald-950/30 shadow-emerald-500/10'
              : labaBersih < 0
              ? 'border-rose-500/50 bg-rose-950/30 shadow-rose-500/10'
              : 'border-slate-700 bg-slate-900/50'
          }`}>
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Ringkasan Utama
              </span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                labaBersih > 0
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : labaBersih < 0
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  : 'bg-slate-700 text-slate-300'
              }`}>
                {labaBersih > 0 ? '🟢 UNTUNG (PROFIT)' : labaBersih < 0 ? '🔴 RUGI (LOSS)' : '⚪ IMPAS (BREAKEVEN)'}
              </span>
            </div>

            <div className="space-y-4">
              {/* Laba Bersih */}
              <div>
                <span className="text-xs text-emerald-100/70 block">Laba Bersih Akhir</span>
                <span className={`text-2xl sm:text-3xl font-extrabold font-mono ${
                  labaBersih >= 0 ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {formatRupiah(labaBersih)}
                </span>
              </div>

              {/* Margin Laba Bersih */}
              <div className="pt-2 border-t border-emerald-500/10 flex justify-between items-center">
                <div>
                  <span className="text-xs text-emerald-100/70 block">Margin Laba Bersih</span>
                  <span className="text-xs text-emerald-100/50">(Laba Bersih ÷ Penjualan Bersih)</span>
                </div>
                <span className={`text-xl font-bold font-mono ${
                  marginLabaBersih >= 0 ? 'text-emerald-300' : 'text-rose-300'
                }`}>
                  {formatPersen(marginLabaBersih)}
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Financial Breakdown Card */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-500/20 pb-2">
              📊 Rincian Hasil Perhitungan
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">1. Penjualan Bersih</span>
                <span className="font-mono font-semibold text-white">{formatRupiah(penjualanBersih)}</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">2. Laba Kotor</span>
                <span className={`font-mono font-semibold ${labaKotor >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {formatRupiah(labaKotor)}
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">3. Biaya Operasional</span>
                <span className="font-mono font-semibold text-rose-300">{formatRupiah(biayaOperasional)}</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">4. Laba Usaha</span>
                <span className={`font-mono font-semibold ${labaUsaha >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {formatRupiah(labaUsaha)}
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">5. Laba Sebelum Pajak</span>
                <span className={`font-mono font-semibold ${labaSebelumPajak >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {formatRupiah(labaSebelumPajak)}
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">6. Pajak ({valTarifPajak}%)</span>
                <span className="font-mono font-semibold text-amber-300">{formatRupiah(pajak)}</span>
              </div>

              <div className="flex justify-between items-center py-2 bg-emerald-500/10 px-3 rounded-lg border border-emerald-500/20 font-bold">
                <span className="text-emerald-300">7. Laba Bersih</span>
                <span className={`font-mono text-base ${labaBersih >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {formatRupiah(labaBersih)}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 bg-slate-950/40 px-3 rounded-lg border border-slate-800 font-bold">
                <span className="text-emerald-200">8. Margin Laba Bersih</span>
                <span className={`font-mono text-base ${marginLabaBersih >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {formatPersen(marginLabaBersih)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Mathematical Formula Explanation Section */}
      <div className="mt-12 card p-6 lg:p-8 border-emerald-500/20">
        <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <span>📐</span> Penerapan Rumus Laba Rugi
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mb-6">
          Berikut rincian perhitungan matematis berdasarkan rumus yang digunakan:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          {/* Rumus 1 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">1. Penjualan Bersih</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Penjualan Kotor − Retur & Potongan
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(valPenjualanKotor)} − {formatRupiah(valReturPotongan)} = <strong className="text-white">{formatRupiah(penjualanBersih)}</strong>
            </p>
          </div>

          {/* Rumus 2 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">2. Laba Kotor</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Penjualan Bersih − HPP
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(penjualanBersih)} − {formatRupiah(valHpp)} = <strong className="text-white">{formatRupiah(labaKotor)}</strong>
            </p>
          </div>

          {/* Rumus 3 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">3. Biaya Operasional</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Biaya Pemasaran + Biaya Administrasi
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(valBiayaPemasaran)} + {formatRupiah(valBiayaAdministrasi)} = <strong className="text-white">{formatRupiah(biayaOperasional)}</strong>
            </p>
          </div>

          {/* Rumus 4 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">4. Laba Usaha</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Laba Kotor − Biaya Operasional
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(labaKotor)} − {formatRupiah(biayaOperasional)} = <strong className="text-white">{formatRupiah(labaUsaha)}</strong>
            </p>
          </div>

          {/* Rumus 5 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">5. Laba Sebelum Pajak</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Laba Usaha + Pendapatan Lain − Biaya Lain
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(labaUsaha)} + {formatRupiah(valPendapatanLain)} − {formatRupiah(valBiayaLain)} = <strong className="text-white">{formatRupiah(labaSebelumPajak)}</strong>
            </p>
          </div>

          {/* Rumus 6 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">6. Pajak</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Laba Sebelum Pajak × Tarif Pajak ({valTarifPajak}%)
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(labaSebelumPajak)} × {valTarifPajak}% = <strong className="text-white">{formatRupiah(pajak)}</strong>
            </p>
          </div>

          {/* Rumus 7 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">7. Laba Bersih</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Laba Sebelum Pajak − Pajak
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(labaSebelumPajak)} − {formatRupiah(pajak)} = <strong className="text-white">{formatRupiah(labaBersih)}</strong>
            </p>
          </div>

          {/* Rumus 8 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">8. Margin Laba Bersih</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Laba Bersih ÷ Penjualan Bersih × 100%
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(labaBersih)} ÷ {formatRupiah(penjualanBersih)} × 100% = <strong className="text-white">{formatPersen(marginLabaBersih)}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


