import { useState } from 'react'

export default function KalkulatorHPP() {
  // Input State
  // 1. Bahan Baku
  const [persediaanAwalBB, setPersediaanAwalBB] = useState(0)
  const [pembelianBB, setPembelianBB] = useState(0)
  const [persediaanAkhirBB, setPersediaanAkhirBB] = useState(0)

  // 2. Biaya Produksi Lain
  const [tenagaKerjaLangsung, setTenagaKerjaLangsung] = useState(0)
  const [overheadPabrik, setOverheadPabrik] = useState(0)

  // 3. Barang Dalam Proses (BDP)
  const [persediaanAwalBDP, setPersediaanAwalBDP] = useState(0)
  const [persediaanAkhirBDP, setPersediaanAkhirBDP] = useState(0)

  // 4. Barang Jadi
  const [persediaanAwalBarangJadi, setPersediaanAwalBarangJadi] = useState(0)
  const [persediaanAkhirBarangJadi, setPersediaanAkhirBarangJadi] = useState(0)

  // 5. Unit Terjual
  const [jumlahUnitTerjual, setJumlahUnitTerjual] = useState(0)

  // Parsing values to numbers
  const valPersediaanAwalBB = Number(persediaanAwalBB) || 0
  const valPembelianBB = Number(pembelianBB) || 0
  const valPersediaanAkhirBB = Number(persediaanAkhirBB) || 0

  const valTenagaKerjaLangsung = Number(tenagaKerjaLangsung) || 0
  const valOverheadPabrik = Number(overheadPabrik) || 0

  const valPersediaanAwalBDP = Number(persediaanAwalBDP) || 0
  const valPersediaanAkhirBDP = Number(persediaanAkhirBDP) || 0

  const valPersediaanAwalBarangJadi = Number(persediaanAwalBarangJadi) || 0
  const valPersediaanAkhirBarangJadi = Number(persediaanAkhirBarangJadi) || 0

  const valJumlahUnitTerjual = Number(jumlahUnitTerjual) || 0

  // Calculation Workflow:
  // 1. Bahan Baku Terpakai = Persediaan Awal + Pembelian − Persediaan Akhir
  const bahanBakuTerpakai = valPersediaanAwalBB + valPembelianBB - valPersediaanAkhirBB

  // 2. Total Biaya Produksi = Bahan Baku Terpakai + Tenaga Kerja Langsung + Overhead Pabrik
  const totalBiayaProduksi = bahanBakuTerpakai + valTenagaKerjaLangsung + valOverheadPabrik

  // 3. Harga Pokok Produksi = Total Biaya Produksi + Persediaan Awal BDP − Persediaan Akhir BDP
  const hargaPokokProduksi = totalBiayaProduksi + valPersediaanAwalBDP - valPersediaanAkhirBDP

  // 4. HPP = Harga Pokok Produksi + Persediaan Awal Barang Jadi − Persediaan Akhir Barang Jadi
  const hpp = hargaPokokProduksi + valPersediaanAwalBarangJadi - valPersediaanAkhirBarangJadi

  // 5. HPP per Unit = HPP ÷ Jumlah Unit Terjual
  const hppPerUnit = valJumlahUnitTerjual > 0 ? hpp / valJumlahUnitTerjual : 0

  // Formatters
  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount || 0)
  }

  const loadPresetData = () => {
    setPersediaanAwalBB(3500000)
    setPembelianBB(8000000)
    setPersediaanAkhirBB(2000000)
    setTenagaKerjaLangsung(3000000)
    setOverheadPabrik(1500000)
    setPersediaanAwalBDP(800000)
    setPersediaanAkhirBDP(500000)
    setPersediaanAwalBarangJadi(1500000)
    setPersediaanAkhirBarangJadi(1000000)
    setJumlahUnitTerjual(750)
  }

  const handleReset = () => {
    setPersediaanAwalBB(0)
    setPembelianBB(0)
    setPersediaanAkhirBB(0)
    setTenagaKerjaLangsung(0)
    setOverheadPabrik(0)
    setPersediaanAwalBDP(0)
    setPersediaanAkhirBDP(0)
    setPersediaanAwalBarangJadi(0)
    setPersediaanAkhirBarangJadi(0)
    setJumlahUnitTerjual(0)
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
              </svg>
              Kalkulator Harga Pokok Penjualan
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Kalkulator HPP (Harga Pokok Penjualan)
            </h1>
            <p className="text-emerald-100/70 max-w-2xl text-sm sm:text-base">
              Hitung HPP dan HPP per unit secara sistematis mengikuti alur akuntansi produksi: Bahan Baku Terpakai → Total Biaya Produksi → Harga Pokok Produksi → Total HPP → HPP per Unit.
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
            <span className="font-bold">1. Bahan Baku Terpakai</span>
          </div>
          <span className="text-emerald-500 font-bold">➔</span>

          {/* Step 2 */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            <span className="font-bold">2. Total Biaya Produksi</span>
          </div>
          <span className="text-emerald-500 font-bold">➔</span>

          {/* Step 3 */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            <span className="font-bold">3. Harga Pokok Produksi</span>
          </div>
          <span className="text-emerald-500 font-bold">➔</span>

          {/* Step 4 */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-400/20 border border-emerald-400/50 text-white font-bold">
            <span>4. Total HPP</span>
          </div>
          <span className="text-emerald-500 font-bold">➔</span>

          {/* Step 5 */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500 text-slate-950 font-extrabold">
            <span>5. HPP per Unit</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Input Form & Result Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Input Form (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Bahan Baku */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">1</span>
                <h2>Perhitungan Bahan Baku Terpakai</h2>
              </div>
              <span className="text-[11px] text-emerald-300/80 font-mono">
                {formatRupiah(bahanBakuTerpakai)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Persediaan Awal BB
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={persediaanAwalBB}
                    onChange={(e) => setPersediaanAwalBB(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-xs font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Pembelian BB
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={pembelianBB}
                    onChange={(e) => setPembelianBB(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-xs font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Persediaan Akhir BB
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={persediaanAkhirBB}
                    onChange={(e) => setPersediaanAkhirBB(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-xs font-mono"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Biaya Produksi */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">2</span>
                <h2>Biaya Tenaga Kerja & Overhead</h2>
              </div>
              <span className="text-[11px] text-emerald-300/80 font-mono">
                {formatRupiah(totalBiayaProduksi)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Biaya Tenaga Kerja Langsung
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={tenagaKerjaLangsung}
                    onChange={(e) => setTenagaKerjaLangsung(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Biaya Overhead Pabrik / Usaha
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={overheadPabrik}
                    onChange={(e) => setOverheadPabrik(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Barang Dalam Proses (BDP) */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">3</span>
                <h2>Persediaan Barang Dalam Proses (BDP)</h2>
              </div>
              <span className="text-[11px] text-emerald-300/80 font-mono">
                {formatRupiah(hargaPokokProduksi)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Persediaan Awal BDP
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={persediaanAwalBDP}
                    onChange={(e) => setPersediaanAwalBDP(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Persediaan Akhir BDP
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={persediaanAkhirBDP}
                    onChange={(e) => setPersediaanAkhirBDP(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-sm font-mono"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 & 5: Persediaan Barang Jadi & Unit Terjual */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold border-b border-emerald-500/20 pb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs">4 & 5</span>
              <h2>Persediaan Barang Jadi & Jumlah Unit Terjual</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Persediaan Awal Barang Jadi
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={persediaanAwalBarangJadi}
                    onChange={(e) => setPersediaanAwalBarangJadi(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-xs font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Persediaan Akhir Barang Jadi
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-xs text-emerald-400 font-semibold">Rp</span>
                  <input
                    type="number"
                    min="0"
                    value={persediaanAkhirBarangJadi}
                    onChange={(e) => setPersediaanAkhirBarangJadi(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-xs font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-100/90 mb-1">
                  Jumlah Unit Terjual
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    value={jumlahUnitTerjual}
                    onChange={(e) => setJumlahUnitTerjual(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950/60 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 text-xs font-mono"
                    placeholder="0"
                  />
                </div>
                <span className="text-[10px] text-emerald-300/60 mt-1 block">Unit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Results & Summary (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main HPP Card */}
          <div className="card p-6 border-2 border-emerald-500/50 bg-emerald-950/30 shadow-emerald-500/10 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Hasil Perhitungan HPP
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ⚡ Akurat & Presisi
              </span>
            </div>

            {/* Total HPP */}
            <div className="pb-3 border-b border-emerald-500/10">
              <span className="text-xs text-emerald-100/70 block">Total HPP (Harga Pokok Penjualan)</span>
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
                {formatRupiah(hpp)}
              </span>
            </div>

            {/* HPP per Unit */}
            <div>
              <span className="text-xs text-emerald-100/70 block">HPP per Unit produk</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-300">
                {formatRupiah(hppPerUnit)} <span className="text-xs font-normal text-emerald-200/70">/ unit</span>
              </span>
              <p className="text-[11px] text-emerald-100/50 mt-1">
                *(HPP ÷ {valJumlahUnitTerjual} unit terjual)
              </p>
            </div>
          </div>

          {/* Step-by-Step Breakdown Summary Card */}
          <div className="card p-6 border-emerald-500/20 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-500/20 pb-2">
              📊 Rincian Alur Perhitungan Produksi
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">1. Bahan Baku Terpakai</span>
                <span className="font-mono font-semibold text-emerald-300">{formatRupiah(bahanBakuTerpakai)}</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">2. Total Biaya Produksi</span>
                <span className="font-mono font-semibold text-emerald-300">{formatRupiah(totalBiayaProduksi)}</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-emerald-100/80">3. Harga Pokok Produksi</span>
                <span className="font-mono font-semibold text-emerald-300">{formatRupiah(hargaPokokProduksi)}</span>
              </div>

              <div className="flex justify-between items-center py-2 bg-emerald-500/10 px-3 rounded-lg border border-emerald-500/20 font-bold">
                <span className="text-emerald-300">4. Total HPP</span>
                <span className="font-mono text-base text-emerald-400">{formatRupiah(hpp)}</span>
              </div>

              <div className="flex justify-between items-center py-2 bg-slate-950/40 px-3 rounded-lg border border-slate-800 font-bold">
                <span className="text-emerald-200">5. HPP per Unit</span>
                <span className="font-mono text-base text-emerald-300">{formatRupiah(hppPerUnit)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Mathematical Formula Explanation Section */}
      <div className="mt-12 card p-6 lg:p-8 border-emerald-500/20">
        <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <span>📐</span> Penerapan Rumus HPP (Alur Produksi)
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/70 mb-6">
          Berikut urutan perhitungan matematis berdasarkan rumus yang diterapkan:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
          {/* Rumus 1 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">1. Bahan Baku Terpakai</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Persediaan Awal + Pembelian − Persediaan Akhir
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(valPersediaanAwalBB)} + {formatRupiah(valPembelianBB)} − {formatRupiah(valPersediaanAkhirBB)} = <strong className="text-white">{formatRupiah(bahanBakuTerpakai)}</strong>
            </p>
          </div>

          {/* Rumus 2 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">2. Total Biaya Produksi</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Bahan Baku Terpakai + Tenaga Kerja + Overhead
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(bahanBakuTerpakai)} + {formatRupiah(valTenagaKerjaLangsung)} + {formatRupiah(valOverheadPabrik)} = <strong className="text-white">{formatRupiah(totalBiayaProduksi)}</strong>
            </p>
          </div>

          {/* Rumus 3 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">3. Harga Pokok Produksi</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Total Biaya Produksi + Awal BDP − Akhir BDP
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(totalBiayaProduksi)} + {formatRupiah(valPersediaanAwalBDP)} − {formatRupiah(valPersediaanAkhirBDP)} = <strong className="text-white">{formatRupiah(hargaPokokProduksi)}</strong>
            </p>
          </div>

          {/* Rumus 4 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-semibold block">4. HPP (Harga Pokok Penjualan)</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              Harga Pokok Produksi + Awal Barang Jadi − Akhir Barang Jadi
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(hargaPokokProduksi)} + {formatRupiah(valPersediaanAwalBarangJadi)} − {formatRupiah(valPersediaanAkhirBarangJadi)} = <strong className="text-white">{formatRupiah(hpp)}</strong>
            </p>
          </div>

          {/* Rumus 5 */}
          <div className="p-4 rounded-lg bg-slate-950/50 border border-emerald-500/20 space-y-1 md:col-span-2 lg:col-span-2">
            <span className="text-emerald-400 font-semibold block">5. HPP per Unit</span>
            <code className="text-emerald-200/90 text-xs block font-mono bg-slate-900 p-1.5 rounded">
              HPP ÷ Jumlah Unit Terjual
            </code>
            <p className="text-emerald-100/70 text-[11px] pt-1">
              = {formatRupiah(hpp)} ÷ {valJumlahUnitTerjual} unit = <strong className="text-white">{formatRupiah(hppPerUnit)} / unit</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

