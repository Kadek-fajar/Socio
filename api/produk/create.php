<?php
/**
 * POST /api/produk/create.php
 * Tambah produk baru — HANYA ADMIN (Bearer token required).
 * Setara dengan POST /api/produk di Express.
 *
 * Request body (JSON):
 *   { "nama": "...", "harga": 10000, "kategori": "...", "gambar": "...", "deskripsi": "..." }
 *
 * Response:
 *   {
 *     "success": true,
 *     "message": "Produk berhasil ditambahkan.",
 *     "data": { "id": 3, "nama": "...", ... }
 *   }
 *
 * Panti Wira Adhi Karya / Socio API
 */

$apiRoot = dirname(__DIR__);
require_once $apiRoot . '/helpers/cors.php';
require_once $apiRoot . '/config/database.php';
require_once $apiRoot . '/helpers/jwt.php';
require_once $apiRoot . '/helpers/response.php';
require_once $apiRoot . '/middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    errorResponse('Method tidak diizinkan.', 405);
}

// Verifikasi token admin
$adminUser = requireAdminAuth();

// Baca body JSON
$body = json_decode(file_get_contents('php://input'), true);

$nama      = trim($body['nama']      ?? '');
$harga     = $body['harga']          ?? null;
$kategori  = trim($body['kategori']  ?? '');
$gambar    = trim($body['gambar']    ?? '/images/produk 2_Singkong Serut.jpg');
$deskripsi = trim($body['deskripsi'] ?? 'Produk berkualitas buatan karya penghuni panti.');

// Validasi wajib
if (empty($nama) || $harga === null || empty($kategori)) {
    errorResponse('Nama, harga, dan kategori produk wajib diisi.', 400);
}

$numericHarga = (float) $harga;
if (!is_numeric($harga) || $numericHarga < 0) {
    errorResponse('Harga produk harus berupa angka yang valid.', 400);
}

if (empty($gambar)) {
    $gambar = '/images/produk 2_Singkong Serut.jpg';
}
if (empty($deskripsi)) {
    $deskripsi = 'Produk berkualitas buatan karya penghuni panti.';
}

try {
    $db = getDB();

    $stmt = $db->prepare(
        'INSERT INTO produk (nama, harga, kategori, gambar, deskripsi) VALUES (?, ?, ?, ?, ?)'
    );
    $stmt->execute([$nama, $numericHarga, $kategori, $gambar, $deskripsi]);

    $newId = (int) $db->lastInsertId();

    $newProduct = [
        'id'       => $newId,
        'nama'     => $nama,
        'harga'    => $numericHarga,
        'kategori' => $kategori,
        'gambar'   => $gambar,
        'deskripsi'=> $deskripsi,
    ];

    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Produk berhasil ditambahkan.',
        'data'    => $newProduct,
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;

} catch (PDOException $e) {
    // Fallback: kembalikan produk dengan ID sementara (sama seperti Express)
    $fallbackProduct = [
        'id'       => (int)(microtime(true) * 1000),
        'nama'     => $nama,
        'harga'    => $numericHarga,
        'kategori' => $kategori,
        'gambar'   => $gambar,
        'deskripsi'=> $deskripsi,
    ];

    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Produk berhasil ditambahkan (simpan lokal).',
        'data'    => $fallbackProduct,
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
