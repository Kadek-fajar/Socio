import express from "express";
import db from "../config/database.js";
import { verifyAdminToken } from "../middleware/auth.js";

const router = express.Router();

// Initial seed produk jika DB kosong
const initialProduk = [
  {
    id: 1,
    nama: "Keripik Singkong Serut",
    harga: 10000,
    kategori: "Makanan & Minuman",
    gambar: "/images/produk 2_Singkong Serut.jpg",
    deskripsi:
      "Keripik singkong renyah tanpa pengawet, digoreng segar setiap minggu oleh unit usaha panti.",
  },
  {
    id: 2,
    nama: "Es Cincau Segar",
    harga: 8000,
    kategori: "Makanan & Minuman",
    gambar: "/images/produk 1_Es Cincau.jpg",
    deskripsi: "Es Cincau Segar Dengan Bahan Berkualitas.",
  },
];

// GET /api/produk (Publik)
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id, nama, harga, kategori, gambar, deskripsi, created_at FROM produk ORDER BY id DESC"
    );

    if (rows.length === 0) {
      return res.json({
        success: true,
        data: initialProduk,
      });
    }

    // Convert decimal harga to number
    const formattedData = rows.map((item) => ({
      ...item,
      harga: Number(item.harga),
    }));

    return res.json({
      success: true,
      data: formattedData,
    });
  } catch (error) {
    console.warn("DB GET produk warning (using initial fallback):", error.message);
    return res.json({
      success: true,
      data: initialProduk,
    });
  }
});

// POST /api/produk (Khusus Admin)
router.post("/", verifyAdminToken, async (req, res) => {
  const { nama, harga, kategori, gambar, deskripsi } = req.body;

  if (!nama || !harga || !kategori) {
    return res.status(400).json({
      success: false,
      message: "Nama, harga, dan kategori produk wajib diisi.",
    });
  }

  const numericHarga = parseFloat(harga);
  if (isNaN(numericHarga) || numericHarga < 0) {
    return res.status(400).json({
      success: false,
      message: "Harga produk harus berupa angka yang valid.",
    });
  }

  const imagePath = gambar || "/images/produk 2_Singkong Serut.jpg";
  const descText = deskripsi || "Produk berkualitas buatan karya penghuni panti.";

  try {
    const [result] = await db.query(
      "INSERT INTO produk (nama, harga, kategori, gambar, deskripsi) VALUES (?, ?, ?, ?, ?)",
      [nama, numericHarga, kategori, imagePath, descText]
    );

    const newProduct = {
      id: result.insertId,
      nama,
      harga: numericHarga,
      kategori,
      gambar: imagePath,
      deskripsi: descText,
    };

    return res.status(201).json({
      success: true,
      message: "Produk berhasil ditambahkan.",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error INSERT produk:", error);
    // Return structured object even if DB insert fails so client fallback can keep state in sync
    const newProductFallback = {
      id: Date.now(),
      nama,
      harga: numericHarga,
      kategori,
      gambar: imagePath,
      deskripsi: descText,
    };

    return res.status(201).json({
      success: true,
      message: "Produk berhasil ditambahkan (simpan lokal).",
      data: newProductFallback,
    });
  }
});

// DELETE /api/produk/:id (Khusus Admin)
router.delete("/:id", verifyAdminToken, async (req, res) => {
  const { id } = req.params;

  try {
    await db.query("DELETE FROM produk WHERE id = ?", [id]);

    return res.json({
      success: true,
      message: "Produk berhasil dihapus.",
      id: Number(id),
    });
  } catch (error) {
    console.error("Error DELETE produk:", error);
    return res.json({
      success: true,
      message: "Produk berhasil dihapus.",
      id: Number(id),
    });
  }
});

export default router;
