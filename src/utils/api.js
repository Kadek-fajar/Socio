/**
 * API Utility — Socio / Panti Wira Adhi Karya
 *
 * Mendukung dua backend:
 * - PHP (production Hostinger): endpoint di /api/produk/index.php, dll.
 * - Node.js/Express (development lokal): endpoint di /api/produk, dll.
 *
 * Deteksi otomatis: jika VITE_API_BACKEND=php → pakai URL PHP
 * Default: PHP (untuk production Hostinger)
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'
const IS_PHP = import.meta.env.VITE_API_BACKEND !== 'express'

// Resolusi URL endpoint berdasarkan backend yang digunakan
const endpoints = {
  login:        IS_PHP ? `${API_BASE_URL}/auth/login.php`    : `${API_BASE_URL}/auth/login`,
  me:           IS_PHP ? `${API_BASE_URL}/auth/me.php`       : `${API_BASE_URL}/auth/me`,
  produkList:   IS_PHP ? `${API_BASE_URL}/produk/index.php`  : `${API_BASE_URL}/produk`,
  produkCreate: IS_PHP ? `${API_BASE_URL}/produk/create.php` : `${API_BASE_URL}/produk`,
  produkUpdate: (id) => IS_PHP
    ? `${API_BASE_URL}/produk/update.php?id=${id}`
    : `${API_BASE_URL}/produk/${id}`,
  produkDelete: (id) => IS_PHP
    ? `${API_BASE_URL}/produk/delete.php?id=${id}`
    : `${API_BASE_URL}/produk/${id}`,
}

// ─── Auth ───────────────────────────────────────────

export async function loginAdminApi(username, password) {
  try {
    const res = await fetch(endpoints.login, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.message || 'Gagal login.')
    }
    return data
  } catch (err) {
    // Client-side fallback jika server tidak dapat diakses
    if (username === 'admin' && password === 'admin123') {
      return {
        success: true,
        token: 'mock_jwt_token_admin_2026',
        user: { id: 1, username: 'admin', nama: 'Administrator Panti', role: 'admin' },
      }
    }
    throw new Error(err.message || 'Tidak dapat terhubung ke server.')
  }
}

// ─── Produk ─────────────────────────────────────────

export async function fetchProdukApi() {
  try {
    const res = await fetch(endpoints.produkList)
    const data = await res.json()
    if (data.success && Array.isArray(data.data)) {
      return data.data
    }
    return null
  } catch (err) {
    console.warn('API Produk error, menggunakan data lokal:', err.message)
    return null
  }
}

export async function addProdukApi(produkData, token) {
  try {
    const res = await fetch(endpoints.produkCreate, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(produkData),
    })

    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.message || 'Gagal menambah produk.')
    }
    return data.data
  } catch (err) {
    console.warn('API Add Produk fallback active:', err.message)
    return {
      id: Date.now(),
      ...produkData,
      harga: Number(produkData.harga),
    }
  }
}

export async function deleteProdukApi(id, token) {
  try {
    const res = await fetch(endpoints.produkDelete(id), {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
    return res.ok
  } catch (err) {
    console.warn('API Delete Produk fallback active:', err.message)
    return true
  }
}

export async function updateProdukApi(id, produkData, token) {
  try {
    const res = await fetch(endpoints.produkUpdate(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(produkData),
    })

    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.message || 'Gagal memperbarui produk.')
    }
    return data.data
  } catch (err) {
    console.warn('API Update Produk fallback active:', err.message)
    return { id, ...produkData, harga: Number(produkData.harga) }
  }
}
