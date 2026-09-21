import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const { loginAdmin, isAdmin } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/dashboard'

  // Jika sudah login sebagai Admin, langsung ke Dashboard
  if (isAdmin) {
    navigate('/dashboard', { replace: true })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!username.trim() || !password.trim()) {
      setError('Username dan password wajib diisi.')
      return
    }

    try {
      setSubmitting(true)
      await loginAdmin(username.trim(), password)
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message || 'Login gagal. Periksa kembali username dan password Anda.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#031d14] px-4 py-12">
      {/* Visual background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative z-10 w-full max-w-md">
        {/* Card Box */}
        <div className="overflow-hidden rounded-3xl border border-emerald-500/30 bg-[#062c1d]/90 p-8 shadow-2xl backdrop-blur-xl">
          {/* Header Portal Admin */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 shadow-inner">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>

            <div className="mt-4">
              <span className="inline-block rounded-full bg-emerald-400/20 border border-emerald-400/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                Akses Khusus Admin
              </span>
            </div>

            <h1 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
              Masuk Pengelola
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-emerald-100/70">
              Silakan masukkan akun admin Anda untuk mengelola catalog produk panti.
            </p>
          </div>

          {/* Alert Error */}
          {error && (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-rose-500/40 bg-rose-950/40 p-4 text-xs sm:text-sm text-rose-200 animate-shake">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-rose-400">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* Form Login Admin */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-emerald-200 mb-1.5">
                Username Admin
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username"
                  className="w-full rounded-xl border border-emerald-500/30 bg-[#031d14] px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-200 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  className="w-full rounded-xl border border-emerald-500/30 bg-[#031d14] px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-400/70 hover:text-emerald-300 p-1"
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-6 rounded-xl bg-emerald-400 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-400/20 transition hover:bg-emerald-300 hover:shadow-emerald-400/40 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
            >
              {submitting ? 'Memproses Login...' : 'Masuk sebagai Admin'}
            </button>
          </form>

          {/* Info Akun Default */}
          <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-[#021810] p-3.5 text-center text-xs text-emerald-200/80">
            <span className="font-semibold text-emerald-300 block mb-1">
              💡 Kredensial Admin Bawaan:
            </span>
            <span>Username: <strong className="text-white">admin</strong> | Password: <strong className="text-white">admin123</strong></span>
          </div>
        </div>
      </div>
    </section>
  )
}
