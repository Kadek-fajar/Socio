<?php
/**
 * PUT /api/produk/update.php?id={id}
 * Update produk — HANYA ADMIN (Bearer token required).
 * Setara dengan PUT /api/produk/:id di Express.
 *
 * Query param: ?id=3
 * Request body (JSON):
 *   { "nama": "...", "harga": 12000, "kategori": "...", "gambar": "...", "deskripsi": "..." }
 *
 * Response:
 *   {
 *     "success": true,
 *     "message": "Produk berhasil diperbarui.",
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

if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
    errorResponse('Method tidak diizinkan.', 405);
}

// Verifikasi token admin
$adminUser = requireAdminAuth();

// Ambil ID dari query string: ?id=3
$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;
if ($id <= 0) {
    errorResponse('ID produk tidak valid atau tidak ditemukan.', 400);
}

// Baca body JSON
$body = json_decode(file_get_contents('php://input'), true);

$nama      = trim($body['nama']      ?? '');
$harga     = $body['harga']          ?? null;
$kategori  = trim($body['kategori']  ?? '');
$gambar    = $body['gambar']         ?? null;
$deskripsi = trim($body['deskripsi'] ?? '');

// Validasi wajib
if (empty($nama) || $harga === null || empty($kategori)) {
    errorResponse('Nama, harga, dan kategori produk wajib diisi.', 400);
}

$numericHarga = (float) $harga;
if (!is_numeric($harga) || $numericHarga < 0) {
    errorResponse('Harga produk harus berupa angka yang valid.', 400);
}

try {
    $db = getDB();

    $stmt = $db->prepare(
        'UPDATE produk SET nama = ?, harga = ?, kategori = ?, gambar = ?, deskripsi = ? WHERE id = ?'
    );
    $stmt->execute([$nama, $numericHarga, $kategori, $gambar, $deskripsi, $id]);

    if ($stmt->rowCount() === 0) {
        errorResponse('Produk tidak ditemukan atau tidak ada perubahan.', 404);
    }

    $updatedProduct = [
        'id'       => $id,
        'nama'     => $nama,
        'harga'    => $numericHarga,
        'kategori' => $kategori,
        'gambar'   => $gambar,
        'deskripsi'=> $deskripsi,
    ];

    echo json_encode([
        'success' => true,
        'message' => 'Produk berhasil diperbarui.',
        'data'    => $updatedProduct,
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;

} catch (PDOException $e) {
    errorResponse('Gagal memperbarui produk.', 500, $e->getMessage());
}
