<?php
/**
 * Konfigurasi Database - PDO MySQL
 * Panti Wira Adhi Karya / Socio API
 *
 * CARA PENGGUNAAN:
 * 1. Salin file ini: cp api/config/database.example.php api/config/database.php
 * 2. Isi nilai DB_PASSWORD sesuai credential hosting Anda
 * 3. File database.php sudah di-.gitignore, aman dari commit
 */

define('DB_HOST',     'localhost');
define('DB_PORT',     '3306');
define('DB_NAME',     'u250684698_socio');
define('DB_USER',     'u250684698_socio');
define('DB_PASSWORD', '');               // ← Isi password database Hostinger

define('JWT_SECRET',  '');               // ← Isi dengan string acak panjang (min 32 karakter)
define('JWT_TTL',     86400);

/**
 * Membuat koneksi PDO singleton ke database MySQL.
 * Menggunakan utf8mb4, ERRMODE_EXCEPTION, dan non-emulated prepared statements.
 */
function getDB(): PDO {
    static $pdo = null;

    if ($pdo !== null) {
        return $pdo;
    }

    $dsn = sprintf(
        'mysql:host=%s;port=%s;dbname=%s;charset=utf8mb4',
        DB_HOST,
        DB_PORT,
        DB_NAME
    );

    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];

    $pdo = new PDO($dsn, DB_USER, DB_PASSWORD, $options);
    return $pdo;
}
