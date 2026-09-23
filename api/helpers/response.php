<?php
/**
 * Response Helper — JSON output utilities
 * Panti Wira Adhi Karya / Socio API
 */

/**
 * Kirim response JSON dan hentikan eksekusi.
 *
 * @param mixed $data        Data response
 * @param int   $statusCode  HTTP status code
 */
function jsonResponse(mixed $data, int $statusCode = 200): void {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

/**
 * Kirim response sukses standar.
 */
function successResponse(mixed $data = null, string $message = 'Berhasil', int $statusCode = 200): void {
    $response = ['success' => true, 'message' => $message];
    if ($data !== null) {
        $response['data'] = $data;
    }
    jsonResponse($response, $statusCode);
}

/**
 * Kirim response error standar.
 */
function errorResponse(string $message, int $statusCode = 400, ?string $detail = null): void {
    $response = ['success' => false, 'message' => $message];
    if ($detail !== null) {
        $response['error'] = $detail;
    }
    jsonResponse($response, $statusCode);
}
