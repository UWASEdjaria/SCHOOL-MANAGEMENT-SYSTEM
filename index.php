<?php
// Root index.php - Main Landing Page for School Management System
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elevanda Ventures - School Management System</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #4f46e5;
            --primary-hover: #4338ca;
            --bg: #0f172a;
            --card-bg: #1e293b;
            --text: #f8fafc;
            --text-muted: #94a3b8;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
        }

        body {
            background-color: var(--bg);
            color: var(--text);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            overflow: hidden;
        }

        .container {
            text-align: center;
            max-width: 900px;
            padding: 2rem;
            z-index: 10;
        }

        header h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            background: linear-gradient(to right, #818cf8, #c084fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        header p {
            color: var(--text-muted);
            font-size: 1.1rem;
            margin-bottom: 3rem;
        }

        .portals {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .portal-card {
            background: var(--card-bg);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 3rem 2rem;
            border-radius: 1.5rem;
            transition: all 0.3s ease;
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .portal-card:hover {
            transform: translateY(-10px);
            border-color: var(--primary);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
        }

        .portal-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at top right, rgba(79, 70, 229, 0.1), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .portal-card:hover::before {
            opacity: 1;
        }

        .icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
        }

        .portal-card h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .portal-card p {
            color: var(--text-muted);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .btn {
            margin-top: 2rem;
            background-color: var(--primary);
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            font-weight: 600;
            transition: background-color 0.2s;
        }

        .portal-card:hover .btn {
            background-color: var(--primary-hover);
        }

        /* Background animation */
        .bg-blobs {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            overflow: hidden;
        }

        .blob {
            position: absolute;
            width: 500px;
            height: 500px;
            background: rgba(79, 70, 229, 0.15);
            filter: blur(80px);
            border-radius: 50%;
            animation: move 20s infinite alternate;
        }

        .blob-2 {
            background: rgba(192, 132, 252, 0.15);
            right: -100px;
            top: -100px;
            animation-duration: 25s;
        }

        @keyframes move {
            from { transform: translate(0, 0); }
            to { transform: translate(100px, 100px); }
        }

        @media (max-width: 768px) {
            .portals {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="bg-blobs">
        <div class="blob"></div>
        <div class="blob blob-2"></div>
    </div>

    <div class="container">
        <header>
            <h1>School Management System</h1>
            <p>Empowering Education Through Technology</p>
        </header>

        <div class="portals">
            <!-- Client Portal -->
            <a href="http://localhost:3000" class="portal-card" target="_blank">
                <div class="icon">🎓</div>
                <h2>Student & Parent Portal</h2>
                <p>Register, login, manage fee payments, and view academic records securely.</p>
                <div class="btn">Access Portal</div>
            </a>

            <!-- Admin Portal -->
            <a href="http://localhost:3001" class="portal-card" target="_blank">
                <div class="icon">🔐</div>
                <h2>Admin & Staff Dashboard</h2>
                <p>Verify users, manage classes, teachers, and monitor all school activities.</p>
                <div class="btn">Login as Admin</div>
            </a>
        </div>

        <div style="margin-top: 4rem; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); padding: 1.5rem; border-radius: 1rem; max-width: 600px; margin-left: auto; margin-right: auto; text-align: left;">
            <p style="color: #ef4444; font-weight: 700; margin-bottom: 0.5rem; font-size: 0.9rem;">⚠️ Connection Refused?</p>
            <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.6;">
                The front-end portals run on <strong>Node.js</strong>. If the buttons above don't work, ensure you have started the servers in your terminal:
                <br><br>
                <code><strong>Portal 1:</strong> cd client-app/frontend && npm run dev</code><br>
                <code><strong>Portal 2:</strong> cd admin-app/frontend && npm run dev</code>
            </p>
        </div>

        <div style="margin-top: 2rem; color: var(--text-muted); font-size: 0.8rem;">
            &copy; 2026 Elevanda Ventures. All rights reserved.
        </div>
    </div>
</body>
</html>
