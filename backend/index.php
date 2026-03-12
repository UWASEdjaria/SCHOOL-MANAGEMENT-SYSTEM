// CORS Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$input = json_decode(file_get_contents('php://input'), true);

// Robust routing: extract action from the end of the URL
$pathArr = explode('/', rtrim($requestUri, '/'));
$path = '/' . end($pathArr);

    case '/register':
        if ($method === 'POST') {
            $response = register($input, $pdo);
            if (!isset($response['success'])) http_response_code(400);
            echo json_encode($response);
        }
        break;

    case '/login':
        if ($method === 'POST') {
            $jwtSecret = $_ENV['JWT_SECRET'];
            $response = login($input, $pdo, $jwtSecret);
            if (!isset($response['success'])) http_response_code(401);
            echo json_encode($response);
        }
        break;

    case '/fees':
        // Protected route example
        echo json_encode(['message' => 'Fee records endpoint']);
        break;

    default:
        http_response_code(404);
        echo json_encode(['error' => 'Not Found']);
        break;
}
?>
