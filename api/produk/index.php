<?php
/**
 * GET /api/produk/index.php
 * Ambil semua produk — PUBLIK, tidak memerlukan autentikasi.
 * Setara dengan GET /api/produk di Express.
 *
 * Response:
 *   {
 *     "success": true,
 *     "data": [
 *       { "id": 1, "nama": "...", "harga": 10000, "kategori": "...", "gambar": "...", "deskripsi": "..." }
 *     ]
 *   }
 *
 * Panti Wira Adhi Karya / Socio API
 */

$apiRoot = dirname(__DIR__);
require_once $apiRoot . '/helpers/cors.php';
require_once $apiRoot . '/config/database.php';
require_once $apiRoot . '/helpers/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    errorResponse('Method tidak diizinkan.', 405);
}

// Data fallback jika DB tidak bisa diakses (sama seperti Express)
$fallbackProduk = [
    [
        'id'       => 1,
        'nama'     => 'Keripik Singkong Serut',
        'harga'    => 10000,
        'kategori' => 'Makanan & Minuman',
        'gambar'   => '/images/produk 2_Singkong Serut.jpg',
        'deskripsi'=> 'Keripik singkong renyah tanpa pengawet, digoreng segar setiap minggu oleh unit usaha panti.',
    ],
    [
        'id'       => 2,
        'nama'     => 'Es Cincau Segar',
        'harga'    => 8000,
        'kategori' => 'Makanan & Minuman',
        'gambar'   => '/images/produk 1_Es Cincau.jpg',
        'deskripsi'=> 'Es Cincau Segar Dengan Bahan Berkualitas.',
    ],
];

try {
    $db = getDB();

    $stmt = $db->query(
        'SELECT id, nama, harga, kategori, gambar, deskripsi, created_at
         FROM produk
         ORDER BY id DESC'
    );

    $rows = $stmt->fetchAll();

    if (empty($rows)) {
        // DB kosong: kembalikan fallback
        echo json_encode(['success' => true, 'data' => $fallbackProduk], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    // Cast tipe data agar sesuai dengan yang diharapkan React
    $produk = array_map(function ($row) {
        return [
            'id'         => (int) $row['id'],
            'nama'       => $row['nama'],
            'harga'      => (float) $row['harga'],
            'kategori'   => $row['kategori'],
            'gambar'     => $row['gambar'],
            'deskripsi'  => $row['deskripsi'],
            'created_at' => $row['created_at'],
        ];
    }, $rows);

    echo json_encode(['success' => true, 'data' => $produk], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;

} catch (PDOException $e) {
    // Jika DB error, kembalikan data fallback (behaviour sama seperti Express)
    echo json_encode(['success' => true, 'data' => $fallbackProduk], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
