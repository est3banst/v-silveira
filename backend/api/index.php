<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(['message' => 'PHP backend ok!']);
    exit;
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    echo json_encode(['received' => $input]);
    exit;
}

http_response_code(404);
echo json_encode(['error' => 'Error!']);