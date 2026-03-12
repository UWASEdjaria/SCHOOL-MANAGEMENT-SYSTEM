<?php
// auth.php - Authentication logic for Registration and Login

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/src/Utils/Jwt.php';
use App\Utils\Jwt;

header('Content-Type: application/json');

function register($data, $pdo) {
    if (empty($data['username']) || empty($data['password']) || empty($data['role'])) {
        return ['message' => 'All fields are required'];
    }

    $username = $data['username'];
    $password = hash('sha512', $data['password']); // Requirement: SHA-512
    $role = $data['role']; // Admin, Teacher, Student, Parent

    try {
        $stmt = $pdo->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)");
        $stmt->execute([$username, $password, $role]);
        return ['success' => 'User registered successfully'];
    } catch (PDOException $e) {
        return ['message' => 'Registration failed: ' . $e->getMessage()];
    }
}

function login($data, $pdo, $jwtSecret) {
    if (empty($data['username']) || empty($data['password'])) {
        return ['message' => 'Username and password are required'];
    }

    $username = $data['username'];
    $password = hash('sha512', $data['password']);
    $deviceId = $data['device_id'] ?? null;

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $stmt->execute([$username, $password]);
    $user = $stmt->fetch();

    if (!$user) {
        return ['message' => 'Invalid credentials'];
    }

    // Device Verification Requirement
    if ($deviceId) {
        $stmt = $pdo->prepare("SELECT * FROM devices WHERE user_id = ? AND device_id = ?");
        $stmt->execute([$user['id'], $deviceId]);
        $device = $stmt->fetch();

        if (!$device) {
            // Register new device as unverified
            $stmt = $pdo->prepare("INSERT INTO devices (user_id, device_id, is_verified) VALUES (?, ?, 0)");
            $stmt->execute([$user['id'], $deviceId]);
            return ['message' => 'Device pending verification by Admin', 'status' => 'unverified'];
        }

        if (!$device['is_verified']) {
            return ['message' => 'Device pending verification by Admin', 'status' => 'unverified'];
        }
    } else {
         return ['message' => 'Device ID is required for verification'];
    }

    // Generate JWT
    $payload = [
        'id' => $user['id'],
        'username' => $user['username'],
        'role' => $user['role'],
        'exp' => time() + (24 * 60 * 60) // 24 hours
    ];

    $token = Jwt::encode($payload, $jwtSecret);
    return ['success' => 'Login successful', 'token' => $token, 'user' => [
        'id' => $user['id'],
        'username' => $user['username'],
        'role' => $user['role']
    ]];
}
?>
