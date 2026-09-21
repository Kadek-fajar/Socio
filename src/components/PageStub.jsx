// Placeholder sementara untuk halaman yang belum dibangun konten lengkapnya.
// Tujuannya hanya agar routing & navigasi bisa langsung diuji end-to-end.
// Akan diganti bertahap dengan halaman asli sesuai instruksi berikutnya.
export default function PageStub({ title, description }) {
  return (
    <div className="section">
      <div className="card flex flex-col items-start gap-3 p-8 sm:p-10">
        <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
          Segera hadir
        </span>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">{title}</h1>
        <p className="max-w-2xl text-emerald-100/80">{description}</p>
      </div>
    </div>
  )
}
