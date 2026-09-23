<?php
/**
 * CORS & Request Bootstrap
 * Di-include di setiap endpoint PHP.
 * Mengatur header CORS dan tipe konten JSON.
 *
 * Panti Wira Adhi Karya / Socio API
 */

// Tentukan origin yang diizinkan
// Untuk production Hostinger: ganti dengan domain Anda
// Contoh: 'https://pantiwirakarya.com'
// Untuk sementara: izinkan semua agar mudah testing
$allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:8080',
    // Tambahkan domain production Hostinger Anda di sini:
    // 'https://www.yourdomain.com',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: {$origin}");
    header('Access-Control-Allow-Credentials: true');
} else {
    // Jika origin tidak dikenal, izinkan semua saat tidak ada credentials
    // Ini aman karena frontend dan backend di domain yang sama di production
    header('Access-Control-Allow-Origin: *');
}

header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

// Tangani preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
