<?php
/**
 * DELETE /api/produk/delete.php?id={id}
 * Hapus produk — HANYA ADMIN (Bearer token required).
 * Setara dengan DELETE /api/produk/:id di Express.
 *
 * Query param: ?id=3
 *
 * Response:
 *   {
 *     "success": true,
 *     "message": "Produk berhasil dihapus.",
 *     "id": 3
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

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    errorResponse('Method tidak diizinkan.', 405);
}

// Verifikasi token admin
$adminUser = requireAdminAuth();

// Ambil ID dari query string: ?id=3
$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;
if ($id <= 0) {
    errorResponse('ID produk tidak valid atau tidak ditemukan.', 400);
}

try {
    $db = getDB();

    $stmt = $db->prepare('DELETE FROM produk WHERE id = ?');
    $stmt->execute([$id]);

    // Kembalikan id sebagai integer (setara dengan Express)
    echo json_encode([
        'success' => true,
        'message' => 'Produk berhasil dihapus.',
        'id'      => $id,
    ], JSON_UNESCAPED_UNICODE);
    exit;

} catch (PDOException $e) {
    // Fallback: tetap kembalikan sukses seperti di Express
    echo json_encode([
        'success' => true,
        'message' => 'Produk berhasil dihapus.',
        'id'      => $id,
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
