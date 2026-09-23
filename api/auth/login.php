<?php
/**
 * POST /api/auth/login.php
 * Login admin — setara dengan POST /api/auth/login di Express.
 *
 * Request body (JSON):
 *   { "username": "admin", "password": "admin123" }
 *
 * Response sukses:
 *   {
 *     "success": true,
 *     "message": "Berhasil login sebagai Admin.",
 *     "token": "eyJ...",
 *     "user": { "id": 1, "username": "admin", "nama": "...", "role": "admin" }
 *   }
 *
 * Panti Wira Adhi Karya / Socio API
 */

$apiRoot = dirname(__DIR__);
require_once $apiRoot . '/helpers/cors.php';
require_once $apiRoot . '/config/database.php';
require_once $apiRoot . '/helpers/jwt.php';
require_once $apiRoot . '/helpers/response.php';

// Hanya izinkan POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    errorResponse('Method tidak diizinkan.', 405);
}

// Baca body JSON
$body = json_decode(file_get_contents('php://input'), true);

$username = trim($body['username'] ?? '');
$password = $body['password'] ?? '';

// Validasi input
if (empty($username) || empty($password)) {
    errorResponse('Username dan password wajib diisi.', 400);
}

try {
    $db = getDB();

    // Cari user berdasarkan username
    $stmt = $db->prepare('SELECT id, username, password, nama, role FROM users WHERE username = ? LIMIT 1');
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if (!$user) {
        // Cek: apakah ini admin default fallback?
        // (Jika tabel users kosong atau user belum ada di DB production)
        errorResponse('Username atau password salah, atau bukan akun Admin.', 401);
    }

    // Verifikasi password — password_verify kompatibel dengan bcryptjs
    if (!password_verify($password, $user['password'])) {
        errorResponse('Username atau password salah.', 401);
    }

    // Pastikan role admin
    if ($user['role'] !== 'admin') {
        errorResponse('Akses ditolak: Akun Anda bukan tipe Admin.', 403);
    }

    // Buat JWT token
    $payload = [
        'id'       => (int) $user['id'],
        'username' => $user['username'],
        'nama'     => $user['nama'],
        'role'     => $user['role'],
    ];

    $token = jwtEncode($payload, JWT_SECRET, JWT_TTL);

    successResponse(null, 'Berhasil login sebagai Admin.');

    // Override: format harus sesuai dengan yang diharapkan React
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Berhasil login sebagai Admin.',
        'token'   => $token,
        'user'    => $payload,
    ], JSON_UNESCAPED_UNICODE);
    exit;

} catch (PDOException $e) {
    // Fallback: jika DB tidak bisa diakses, cek kredensial default
    // (Ini untuk kasus DB belum dikonfigurasi, sama seperti di Express)
    if ($username === 'admin' && $password === 'admin123') {
        $fallbackPayload = [
            'id'       => 1,
            'username' => 'admin',
            'nama'     => 'Administrator Panti',
            'role'     => 'admin',
        ];
        $fallbackToken = jwtEncode($fallbackPayload, JWT_SECRET, JWT_TTL);

        echo json_encode([
            'success' => true,
            'message' => 'Berhasil login sebagai Admin (mode offline).',
            'token'   => $fallbackToken,
            'user'    => $fallbackPayload,
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    errorResponse('Terjadi kesalahan pada server saat login.', 500, $e->getMessage());
}
