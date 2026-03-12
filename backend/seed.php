<?php
// seed.php - Seeding script for default Admin user
require_once __DIR__ . '/db.php';

echo "--- Seeding Database ---\n";

try {
    // 1. Create Default Admin if it doesn't exist
    $adminUsername = 'admin';
    $adminPassword = 'password123';
    $hashedPassword = hash('sha512', $adminPassword);
    
    $stmt = $pdo->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->execute([$adminUsername]);
    
    if (!$stmt->fetch()) {
        $stmt = $pdo->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, 'Admin')");
        $stmt->execute([$adminUsername, $hashedPassword]);
        echo "✅ Admin user created: username: 'admin', password: 'password123'\n";
    } else {
        echo "ℹ️ Admin user 'admin' already exists.\n";
    }

    // 2. Automatically verify this admin's device if device id is provided
    // This is optional for seeding but helpful for the user
    
    echo "--- Seeding Complete ---\n";
} catch (PDOException $e) {
    echo "❌ Seeding failed: " . $e->getMessage() . "\n";
}
?>
