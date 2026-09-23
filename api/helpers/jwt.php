<?php
/**
 * JWT Helper — HS256 (HMAC-SHA256)
 * Implementasi manual tanpa library eksternal.
 * Kompatibel dengan token yang dibuat oleh jsonwebtoken (Node.js).
 *
 * Panti Wira Adhi Karya / Socio API
 */

/**
 * Encode data menjadi JWT string.
 *
 * @param array  $payload  Data yang ingin disimpan dalam token
 * @param string $secret   Secret key (JWT_SECRET)
 * @param int    $ttl      Time-to-live dalam detik (default: 86400 = 24 jam)
 * @return string          JWT token string
 */
function jwtEncode(array $payload, string $secret, int $ttl = 86400): string {
    $header = [
        'alg' => 'HS256',
        'typ' => 'JWT',
    ];

    $now = time();
    $payload['iat'] = $now;
    $payload['exp'] = $now + $ttl;

    $headerEncoded  = base64UrlEncode(json_encode($header));
    $payloadEncoded = base64UrlEncode(json_encode($payload));

    $signature = hash_hmac(
        'sha256',
        $headerEncoded . '.' . $payloadEncoded,
        $secret,
        true
    );

    return $headerEncoded . '.' . $payloadEncoded . '.' . base64UrlEncode($signature);
}

/**
 * Decode dan verifikasi JWT token.
 *
 * @param string $token   JWT string
 * @param string $secret  Secret key (JWT_SECRET)
 * @return array|false    Payload array jika valid, false jika tidak valid/kadaluwarsa
 */
function jwtDecode(string $token, string $secret): array|false {
    $parts = explode('.', $token);

    if (count($parts) !== 3) {
        return false;
    }

    [$headerEncoded, $payloadEncoded, $signatureEncoded] = $parts;

    // Verifikasi signature
    $expectedSignature = hash_hmac(
        'sha256',
        $headerEncoded . '.' . $payloadEncoded,
        $secret,
        true
    );

    if (!hash_equals(base64UrlEncode($expectedSignature), $signatureEncoded)) {
        return false;
    }

    $payload = json_decode(base64UrlDecode($payloadEncoded), true);

    if (!is_array($payload)) {
        return false;
    }

    // Cek expiry
    if (isset($payload['exp']) && $payload['exp'] < time()) {
        return false; // Token kadaluwarsa
    }

    return $payload;
}

/**
 * Base64 URL-safe encode (tanpa padding =)
 */
function base64UrlEncode(string $data): string {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

/**
 * Base64 URL-safe decode
 */
function base64UrlDecode(string $data): string {
    return base64_decode(strtr($data, '-_', '+/') . str_repeat('=', (4 - strlen($data) % 4) % 4));
}
