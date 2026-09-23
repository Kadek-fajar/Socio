<?php
/**
 * GET /api/auth/me.php
 * Ambil data user dari token — setara dengan GET /api/auth/me di Express.
 *
 * Header required:
 *   Authorization: Bearer <token>
 *
 * Panti Wira Adhi Karya / Socio API
 */

$apiRoot = dirname(__DIR__);
require_once $apiRoot . '/helpers/cors.php';
require_once $apiRoot . '/config/database.php';
require_once $apiRoot . '/helpers/jwt.php';
require_once $apiRoot . '/helpers/response.php';
require_once $apiRoot . '/middleware/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    errorResponse('Method tidak diizinkan.', 405);
}

$user = requireAdminAuth();

echo json_encode([
    'success' => true,
    'user'    => [
        'id'       => $user['id'],
        'username' => $user['username'],
        'nama'     => $user['nama'],
        'role'     => $user['role'],
    ],
], JSON_UNESCAPED_UNICODE);
exit;
