<?php
/**
 * Middleware: Verifikasi Bearer Token Admin
 * Setara dengan verifyAdminToken di Node.js/Express.
 *
 * Panti Wira Adhi Karya / Socio API
 *
 * Cara pakai di endpoint:
 *   $user = requireAdminAuth();
 *   // $user berisi: id, username, nama, role
 */

// Path resolusi relatif terhadap file ini
$apiRoot = dirname(__DIR__);
require_once $apiRoot . '/config/database.php';
require_once $apiRoot . '/helpers/jwt.php';
require_once $apiRoot . '/helpers/response.php';

/**
 * Verifikasi Bearer token dari header Authorization.
 * Jika valid dan role = admin, kembalikan payload user.
 * Jika tidak valid, kirim error response dan hentikan eksekusi.
 *
 * @return array  Payload user (id, username, nama, role)
 */
function requireAdminAuth(): array {
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';

    // Beberapa server menggunakan REDIRECT_HTTP_AUTHORIZATION
    if (empty($authHeader) && isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
        $authHeader = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
    }

    if (empty($authHeader) || !str_starts_with($authHeader, 'Bearer ')) {
        errorResponse('Akses ditolak: Token autentikasi tidak ditemukan.', 401);
    }

    $token = substr($authHeader, 7); // Hapus "Bearer "

    $payload = jwtDecode($token, JWT_SECRET);

    if ($payload === false) {
        errorResponse('Token tidak valid atau telah kadaluwarsa.', 401);
    }

    if (!isset($payload['role']) || $payload['role'] !== 'admin') {
        errorResponse('Akses ditolak: Memerlukan hak akses khusus Admin.', 403);
    }

    return $payload;
}
