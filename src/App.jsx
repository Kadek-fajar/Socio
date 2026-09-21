import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'
import ProtectedRoute from './components/ProtectedRoute'

import Beranda from './pages/Beranda'
import TentangPanti from './pages/TentangPanti'
import ProgramKami from './pages/ProgramKami'
import Produk from './pages/Produk'
import DetailProduk from './pages/DetailProduk'
import LiterasiKeuangan from './pages/LiterasiKeuangan'
import MateriProgram from './pages/MateriProgram'
import KalkulatorHPP from './pages/KalkulatorHPP'
import KalkulatorLabaRugi from './pages/KalkulatorLabaRugi'
import KalkulatorArusKas from './pages/KalkulatorArusKas'
import Event from './pages/Event'
import Kontak from './pages/Kontak'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DukungKami from './pages/DukungKami'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Beranda />} />
            <Route path="/tentang" element={<TentangPanti />} />
            <Route path="/program" element={<ProgramKami />} />
            <Route path="/program/:id" element={<ProgramKami />} />

            <Route path="/produk" element={<Produk />} />
            <Route path="/produk/:id" element={<DetailProduk />} />

            <Route path="/literasi-keuangan" element={<LiterasiKeuangan />} />
            <Route path="/literasi-keuangan/materi-program" element={<MateriProgram />} />
            <Route path="/literasi-keuangan/kalkulator-hpp" element={<KalkulatorHPP />} />
            <Route path="/literasi-keuangan/kalkulator-laba-rugi" element={<KalkulatorLabaRugi />} />
            <Route path="/literasi-keuangan/kalkulator-arus-kas" element={<KalkulatorArusKas />} />

            <Route path="/materi-program" element={<MateriProgram />} />
            <Route path="/materi-program/:id" element={<MateriProgram />} />

            <Route path="/dukung-kami" element={<DukungKami />} />

            <Route path="/event" element={<Event />} />
            <Route path="/kontak" element={<Kontak />} />

            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ProductProvider>
    </AuthProvider>
  )
}
