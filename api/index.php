<?php
/**
 * GET /api/index.php
 * Info endpoint — Setara dengan GET /api di Express.
 *
 * Panti Wira Adhi Karya / Socio API
 */

$apiRoot = __DIR__;
require_once $apiRoot . '/helpers/cors.php';

echo json_encode([
    'message'   => 'Socio API (PHP) berjalan',
    'version'   => '2.0-php',
    'endpoints' => [
        'auth'    => '/api/auth/login.php',
        'produk'  => '/api/produk/index.php',
        'test_db' => '/api/test-db.php',
    ],
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
exit;
