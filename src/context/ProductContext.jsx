import { createContext, useContext, useState, useEffect } from 'react'
import produkDataInitial from '../data/produk'
import { fetchProdukApi, addProdukApi, deleteProdukApi, updateProdukApi } from '../utils/api'
import { useAuth } from './AuthContext'

const ProductContext = createContext(null)

export function ProductProvider({ children }) {
  const { token } = useAuth()

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('socio_produk_data')
    return saved ? JSON.parse(saved) : produkDataInitial
  })

  const [loading, setLoading] = useState(false)

  // Load dari backend API
  useEffect(() => {
    let isMounted = true
    async function loadProducts() {
      setLoading(true)
      const data = await fetchProdukApi()
      if (isMounted && data && data.length > 0) {
        setProducts(data)
        localStorage.setItem('socio_produk_data', JSON.stringify(data))
      }
      if (isMounted) setLoading(false)
    }
    loadProducts()

    return () => {
      isMounted = false
    }
  }, [])

  // Simpan ke LocalStorage tiap kali products berubah
  useEffect(() => {
    localStorage.setItem('socio_produk_data', JSON.stringify(products))
  }, [products])

  const addProduct = async (newProdukData) => {
    const addedItem = await addProdukApi(newProdukData, token)
    if (addedItem) {
      setProducts((prev) => [addedItem, ...prev])
      return addedItem
    }
    throw new Error('Gagal menyimpan produk baru.')
  }

  const deleteProduct = async (id) => {
    await deleteProdukApi(id, token)
    setProducts((prev) => prev.filter((item) => item.id !== id))
  }

  const updateProduct = async (id, updatedData) => {
    const updatedItem = await updateProdukApi(id, updatedData, token)
    if (updatedItem) {
      setProducts((prev) =>
        prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
      )
      return updatedItem
    }
    throw new Error('Gagal memperbarui produk.')
  }

  return (
    <ProductContext.Provider value={{ products, loading, addProduct, deleteProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts harus digunakan di dalam ProductProvider')
  }
  return context
}
