import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import db from "./config/database.js";
import authRoutes from "./routes/auth.js";
import produkRoutes from "./routes/produk.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Inisialisasi tabel database secara otomatis bila DB terhubung
const initDB = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        nama VARCHAR(100) NOT NULL,
        role VARCHAR(20) NOT NULL DEFAULT 'admin',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS produk (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nama VARCHAR(255) NOT NULL,
        harga DECIMAL(12, 2) NOT NULL,
        kategori VARCHAR(100) NOT NULL,
        gambar LONGTEXT,
        deskripsi TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Inisialisasi Akun Admin Default (admin / admin123) jika belum ada
    const [existingAdmin] = await db.query(
      "SELECT * FROM users WHERE username = 'admin' LIMIT 1"
    );

    if (existingAdmin.length === 0) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await db.query(
        "INSERT INTO users (username, password, nama, role) VALUES (?, ?, ?, ?)",
        ["admin", hashedPassword, "Administrator Panti", "admin"]
      );
      console.log("✔ Admin default berhasil dibuat: admin / admin123");
    }

    console.log("✔ Database MySQL & Tabel Socio Siap.");
  } catch (err) {
    console.warn("⚠ Inisialisasi DB Dilewati (DB offline atau belum dikonfigurasi):", err.message);
  }
};

initDB();

// Rute API
app.use("/api/auth", authRoutes);
app.use("/api/produk", produkRoutes);

app.get("/api", (req, res) => {
  res.json({
    message: "Socio API berjalan",
    endpoints: {
      auth: "/api/auth/login",
      produk: "/api/produk",
    },
  });
});

app.get("/api/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 AS test");
    res.json({
      success: true,
      message: "Database berhasil terhubung",
      data: rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Database gagal terhubung",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Socio API berjalan di http://localhost:${PORT}`);
});