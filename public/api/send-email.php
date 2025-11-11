<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido. Solo se acepta POST.'
    ]);
    exit;
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$required = ['name', 'email', 'projectType', 'message'];
$missing = [];

foreach ($required as $field) {
    if (empty($data[$field])) {
        $missing[] = $field;
    }
}

if (!empty($missing)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Faltan campos requeridos: ' . implode(', ', $missing)
    ]);
    exit;
}

// Validate email format
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Formato de email inválido.'
    ]);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8');
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? htmlspecialchars($data['phone'], ENT_QUOTES, 'UTF-8') : 'No proporcionado';
$company = isset($data['company']) ? htmlspecialchars($data['company'], ENT_QUOTES, 'UTF-8') : 'No proporcionado';
$projectType = htmlspecialchars($data['projectType'], ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($data['message'], ENT_QUOTES, 'UTF-8');

// Email configuration
$to = 'info@demosle.com'; // Change this to your actual email
$subject = "Nuevo contacto desde Demosle: $projectType";

// Email body
$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0ea5e9 0%, #c026d3 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #0ea5e9; }
        .value { margin-top: 5px; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1 style='margin: 0;'>Nuevo Contacto - Demosle</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Nombre:</div>
                <div class='value'>$name</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'><a href='mailto:$email'>$email</a></div>
            </div>
            <div class='field'>
                <div class='label'>Teléfono:</div>
                <div class='value'>$phone</div>
            </div>
            <div class='field'>
                <div class='label'>Empresa:</div>
                <div class='value'>$company</div>
            </div>
            <div class='field'>
                <div class='label'>Tipo de Proyecto:</div>
                <div class='value'>$projectType</div>
            </div>
            <div class='field'>
                <div class='label'>Mensaje:</div>
                <div class='value'>$message</div>
            </div>
        </div>
        <div class='footer'>
            <p>Este mensaje fue enviado desde el formulario de contacto de Demosle</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Demosle Contact Form <noreply@demosle.com>',
    "Reply-To: $name <$email>",
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$mailSent = mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($mailSent) {
    // Success response
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Mensaje enviado correctamente. Te contactaremos pronto.'
    ]);
} else {
    // Error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error al enviar el mensaje. Por favor intenta nuevamente o contáctanos directamente.'
    ]);
}
?>
