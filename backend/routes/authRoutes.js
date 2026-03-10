const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateRegister, validateLogin, validateResult } = require('../dtos/authDto');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');

// Public routes
router.post('/register', validateRegister, validateResult, authController.register);
router.post('/login', validateLogin, validateResult, authController.login);

// Admin routes for device management
router.post('/verify-device', authenticateToken, authorizeRoles('Admin'), authController.verifyDevice);
router.get('/unverified-devices', authenticateToken, authorizeRoles('Admin'), authController.getUnverifiedDevices);

module.exports = router;
