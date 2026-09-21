import { createContext, useContext, useState, useEffect } from 'react'
import { loginAdminApi } from '../utils/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('socio_admin_user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const [token, setToken] = useState(() => {
    return localStorage.getItem('socio_admin_token') || null
  })

  useEffect(() => {
    if (user && token) {
      localStorage.setItem('socio_admin_user', JSON.stringify(user))
      localStorage.setItem('socio_admin_token', token)
    } else {
      localStorage.removeItem('socio_admin_user')
      localStorage.removeItem('socio_admin_token')
    }
  }, [user, token])

  const loginAdmin = async (username, password) => {
    const res = await loginAdminApi(username, password)
    if (res && res.token && res.user) {
      if (res.user.role !== 'admin') {
        throw new Error('Hanya akun Admin yang diizinkan masuk.')
      }
      setUser(res.user)
      setToken(res.token)
      return res.user
    }
    throw new Error('Login gagal. Periksa kembali kredensial Anda.')
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('socio_admin_user')
    localStorage.removeItem('socio_admin_token')
  }

  const isAdmin = Boolean(user && user.role === 'admin' && token)

  return (
    <AuthContext.Provider value={{ user, token, isAdmin, loginAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth harus digunakan di dalam AuthProvider')
  }
  return context
}
