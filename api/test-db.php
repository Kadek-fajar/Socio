<?php
/**
 * GET /api/test-db.php
 * Test koneksi database — Publik (untuk verifikasi deployment).
 * Setara dengan GET /api/test-db di Express.
 *
 * Panti Wira Adhi Karya / Socio API
 */

$apiRoot = __DIR__;
require_once $apiRoot . '/helpers/cors.php';
require_once $apiRoot . '/config/database.php';
require_once $apiRoot . '/helpers/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    errorResponse('Method tidak diizinkan.', 405);
}

try {
    $db  = getDB();
    $stmt = $db->query('SELECT 1 AS test');
    $rows = $stmt->fetchAll();

    echo json_encode([
        'success' => true,
        'message' => 'Database berhasil terhubung',
        'data'    => $rows,
        'db_name' => DB_NAME,
    ], JSON_UNESCAPED_UNICODE);
    exit;

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database gagal terhubung',
        'error'   => $e->getMessage(),
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
