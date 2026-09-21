import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/database.js";
import { verifyAdminToken } from "../middleware/auth.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "socio_jwt_secret_2026";

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username dan password wajib diisi.",
    });
  }

  try {
    let adminUser = null;

    try {
      const [rows] = await db.query(
        "SELECT * FROM users WHERE username = ? LIMIT 1",
        [username]
      );
      if (rows.length > 0) {
        adminUser = rows[0];
      }
    } catch (dbErr) {
      console.warn("DB Auth warning (fallback active):", dbErr.message);
    }

    // Default admin fallback jika DB belum diseed
    if (!adminUser && username === "admin") {
      const isDefaultMatch = password === "admin123";
      if (isDefaultMatch) {
        adminUser = {
          id: 1,
          username: "admin",
          nama: "Administrator Panti",
          role: "admin",
          isFallback: true,
        };
      }
    }

    if (!adminUser) {
      return res.status(401).json({
        success: false,
        message: "Username atau password salah, atau bukan akun Admin.",
      });
    }

    // Verifikasi password jika user diambil dari DB
    if (!adminUser.isFallback) {
      const isMatch = await bcrypt.compare(password, adminUser.password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Username atau password salah.",
        });
      }
    }

    // Pastikan akun memiliki role 'admin'
    if (adminUser.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Akses ditolak: Akun Anda bukan tipe Admin.",
      });
    }

    const payload = {
      id: adminUser.id,
      username: adminUser.username,
      nama: adminUser.nama || "Administrator",
      role: adminUser.role,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });

    return res.json({
      success: true,
      message: "Berhasil login sebagai Admin.",
      token,
      user: payload,
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server saat login.",
      error: error.message,
    });
  }
});

// GET /api/auth/me
router.get("/me", verifyAdminToken, (req, res) => {
  return res.json({
    success: true,
    user: req.user,
  });
});

export default router;
