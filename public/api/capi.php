<?php
/**
 * Meta Conversions API (CAPI) Endpoint - Demosle
 *
 * Recibe eventos del frontend y los envía a Meta Graph API
 * Ubicación en SiteGround: public_html/api/capi.php
 *
 * @author Claude Code para agenciaDemosle
 * @version 1.0
 */

// ============================================
// CONFIGURACIÓN
// ============================================

// Headers CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://demosle.cl');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Responder a preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Solo permitir POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

// ============================================
// CREDENCIALES META
// ============================================

// IMPORTANTE: En producción, usar variables de entorno
// En SiteGround, crear archivo .env o usar php.ini

// Intentar cargar .env si existe
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $envContent = file_get_contents($envFile);
    $envLines = explode("\n", $envContent);

    foreach ($envLines as $line) {
        $line = trim($line);

        // Ignorar comentarios y líneas vacías
        if (empty($line) || $line[0] === '#') {
            continue;
        }

        // Parsear KEY=VALUE
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value);

            // Remover comillas si existen
            $value = trim($value, '"\'');

            // Setear como variable de entorno
            putenv("$key=$value");
        }
    }
}

// Opción 1: Desde variables de entorno (RECOMENDADO)
$PIXEL_ID = getenv('META_PIXEL_ID') ?: '';
$ACCESS_TOKEN = getenv('META_ACCESS_TOKEN') ?: '';

// Opción 2: Hardcoded (solo para testing, NO PRODUCCIÓN)
if (empty($PIXEL_ID)) {
    $PIXEL_ID = '757787516978508'; // Pixel ID de Demosle
}

if (empty($ACCESS_TOKEN)) {
    $ACCESS_TOKEN = ''; // OBTENER DE: https://business.facebook.com/settings/system-users
}

// Test event code (opcional, para testing)
$TEST_EVENT_CODE = getenv('META_TEST_EVENT_CODE') ?: '';

// Validar credenciales
if (empty($PIXEL_ID) || empty($ACCESS_TOKEN)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Meta credentials not configured. Need ACCESS_TOKEN.'
    ]);
    exit();
}

// ============================================
// RATE LIMITING BÁSICO
// ============================================

// Archivo para tracking de requests (opcional)
$rateLimit = 100; // Max requests por IP por hora
$rateLimitFile = sys_get_temp_dir() . '/capi_rate_limit_demosle.json';

function checkRateLimit($ip, $limit, $file) {
    if (!file_exists($file)) {
        file_put_contents($file, json_encode([]));
    }

    $data = json_decode(file_get_contents($file), true);
    $now = time();
    $hour = floor($now / 3600);

    // Limpiar datos antiguos
    $data = array_filter($data, function($item) use ($hour) {
        return $item['hour'] === $hour;
    });

    // Contar requests de esta IP en esta hora
    $count = 0;
    foreach ($data as $item) {
        if ($item['ip'] === $ip) {
            $count++;
        }
    }

    if ($count >= $limit) {
        return false;
    }

    // Agregar este request
    $data[] = ['ip' => $ip, 'hour' => $hour];
    file_put_contents($file, json_encode($data));

    return true;
}

$clientIP = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';

if (!checkRateLimit($clientIP, $rateLimit, $rateLimitFile)) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'error' => 'Rate limit exceeded'
    ]);
    exit();
}

// ============================================
// PROCESAR REQUEST
// ============================================

// Leer body JSON
$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Invalid JSON'
    ]);
    exit();
}

// Validar estructura
if (!isset($payload['data']) || !is_array($payload['data'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Missing data array'
    ]);
    exit();
}

// ============================================
// ENRIQUECER DATOS SERVER-SIDE
// ============================================

foreach ($payload['data'] as &$event) {
    // Agregar IP del cliente si no viene
    if (!isset($event['user_data']['client_ip_address'])) {
        $event['user_data']['client_ip_address'] = $clientIP;
    }

    // Agregar User Agent si no viene
    if (!isset($event['user_data']['client_user_agent'])) {
        $event['user_data']['client_user_agent'] = $_SERVER['HTTP_USER_AGENT'] ?? '';
    }

    // Asegurar event_time está en el formato correcto
    if (!isset($event['event_time'])) {
        $event['event_time'] = time();
    }

    // Asegurar action_source
    if (!isset($event['action_source'])) {
        $event['action_source'] = 'website';
    }
}

// ============================================
// ENVIAR A META GRAPH API
// ============================================

$metaApiUrl = "https://graph.facebook.com/v18.0/{$PIXEL_ID}/events";

// Construir payload para Meta
$metaPayload = [
    'data' => $payload['data'],
    'access_token' => $ACCESS_TOKEN,
];

// Agregar test_event_code si existe (para testing)
if (!empty($TEST_EVENT_CODE) && isset($payload['test_event_code'])) {
    $metaPayload['test_event_code'] = $payload['test_event_code'];
}

// Hacer request a Meta
$ch = curl_init($metaApiUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($metaPayload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

// ============================================
// LOGGING (OPCIONAL)
// ============================================

// Descomentar para debug en archivo de log
/*
$logFile = __DIR__ . '/capi.log';
$logEntry = [
    'timestamp' => date('Y-m-d H:i:s'),
    'ip' => $clientIP,
    'events' => count($payload['data']),
    'http_code' => $httpCode,
    'response' => $response,
];
file_put_contents($logFile, json_encode($logEntry) . "\n", FILE_APPEND);
*/

// ============================================
// RESPONDER AL CLIENTE
// ============================================

if ($curlError) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to connect to Meta API',
        'details' => $curlError,
    ]);
    exit();
}

$metaResponse = json_decode($response, true);

if ($httpCode >= 200 && $httpCode < 300) {
    // Éxito
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'events_received' => $metaResponse['events_received'] ?? 0,
        'messages' => $metaResponse['messages'] ?? [],
    ]);
} else {
    // Error de Meta API
    http_response_code($httpCode);
    echo json_encode([
        'success' => false,
        'error' => 'Meta API error',
        'meta_response' => $metaResponse,
    ]);
}

exit();
