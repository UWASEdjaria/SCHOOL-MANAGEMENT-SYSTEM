const express = require('express');
const router = express.Router();
const feeController = require('../controllers/feeController');
const { validateTransaction, validateResult } = require('../dtos/feeDto');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');

// Only logged in users
router.use(authenticateToken);

// Students and Parents can deposit/withdraw and view their own history
router.post('/deposit', authorizeRoles('Student', 'Parent', 'Admin'), validateTransaction, validateResult, feeController.deposit);
router.post('/withdraw', authorizeRoles('Student', 'Parent', 'Admin'), validateTransaction, validateResult, feeController.withdraw);

router.get('/balance', authorizeRoles('Student', 'Parent', 'Admin'), feeController.getBalance);
router.get('/history', authorizeRoles('Student', 'Parent', 'Admin'), feeController.getHistory);

module.exports = router;
