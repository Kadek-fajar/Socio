-- Skema Database socio
CREATE DATABASE IF NOT EXISTS socio;
USE socio;

-- Tabel Users (Khusus Admin & Pengguna)
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  nama VARCHAR(100) NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Produk Hasil Karya Panti
CREATE TABLE IF NOT EXISTS produk (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  harga DECIMAL(12, 2) NOT NULL,
  kategori VARCHAR(100) NOT NULL,
  gambar LONGTEXT,
  deskripsi TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Admin Default (Username: admin, Password: admin123 -> Hashed dengan bcryptjs)
-- Hash bcrypt untuk 'admin123': $2a$10$7rK39t.ESt4/z3tY4aXlpeF8q8lDk0bW.0w8e1X.q5K7z8z1aZ2.G (atau generate saat server start)
